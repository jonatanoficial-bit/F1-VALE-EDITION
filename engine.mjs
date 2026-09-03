import { CIRCUITS_2026, DEVELOPMENT_AREAS, DRIVERS_2026, GAME_VERSION, ORIGINS, REVELATION_DRIVERS, RULESET, SCHEMA_VERSION, SPONSORS, STAFF_MARKET, TEAMS, WEEKLY_EVENTS } from "./data/game-data.mjs";

export const clamp = (value, min = 0, max = 100) => Math.min(max, Math.max(min, value));
export const deepCopy = value => JSON.parse(JSON.stringify(value));
export const money = value => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
export const average = values => values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;

function hashSeed(value) {
  let hash = 2166136261;
  for (const char of String(value)) hash = Math.imul(hash ^ char.charCodeAt(0), 16777619);
  return hash >>> 0;
}

export function seededRandom(seed) {
  let value = hashSeed(seed);
  value += 0x6D2B79F5;
  let t = value;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

export function createCareer(config) {
  const team = deepCopy(TEAMS[config.teamId] || TEAMS.mercedes);
  const origin = ORIGINS[config.origin] || ORIGINS.estrategista;
  return {
    schemaVersion: SCHEMA_VERSION,
    gameVersion: GAME_VERSION,
    ruleset: deepCopy(RULESET),
    saveId: `career-${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    status: "employed",
    week: 1,
    season: RULESET.season,
    manager: {
      name: config.name.trim(), nationality: config.nationality || "Brasil", age: Number(config.age) || 38,
      pronouns: config.pronouns || "ele/dele", language: "pt-BR", origin: config.origin,
      originLabel: origin.label, style: config.style || "equilibrado", reputation: 50,
      attributes: { leadership: origin.leadership, negotiation: origin.negotiation, politics: origin.politics, media: origin.media, technical: origin.technical, people: origin.people },
    },
    team,
    cash: team.cash,
    costCap: { limit: RULESET.costCap, spent: 5_800_000, committed: 13_500_000 },
    budgets: { Técnica: 31_000_000, Corrida: 16_000_000, Operações: 22_000_000, Comercial: 7_000_000, Pessoas: 5_000_000 },
    sponsorContracts: [],
    staffMarket: deepCopy(STAFF_MARKET),
    sponsorPipeline: deepCopy(SPONSORS),
    driverMarket: [
      ...DRIVERS_2026.filter(driver => driver.seasonStatus === "reserve-market").map(driver => ({ ...driver, rating: driver.overall, potential: driver.overall + 1, salary: 4_800_000, interest: 68, official: true, assetId: `official-driver-portrait-${driver.id}` })),
      ...REVELATION_DRIVERS.map(driver => ({ ...driver, rating: Math.max(62, driver.potential - 18), salary: 850_000, interest: 84, official: false, assetId: null })),
    ],
    inbox: [{ id: "welcome", week: 1, title: "Contrato confirmado", text: `O conselho de ${team.name} espera decisões sustentáveis desde a primeira semana.`, read: false }],
    history: [{ week: 1, type: "career", text: `${config.name.trim()} assumiu ${team.name}.` }],
    financialLog: [{ week: 1, category: "Saldo inicial", amount: team.cash, includedInCap: false }],
    boardConfidence: team.boardConfidence,
    morale: Math.round(average(team.staff.map(item => item.morale))),
    brand: team.brand,
    departmentProgress: { Técnica: 0, Corrida: 0, Operações: 0, Comercial: 0, Pessoas: 0 },
    technical: createTechnicalState(team),
    lastEvent: null,
    careerOffers: [],
  };
}

export function createTechnicalState(team) {
  const seed = team.overall || 70;
  return {
    car: { aero: clamp(seed - 3), chassis: clamp(seed - 1), power: clamp(seed), reliability: clamp(seed + 2) },
    researchPoints: 8,
    factoryCapacity: 2,
    projects: [],
    completedProjects: [],
    setup: { frontWing: 50, rearWing: 50, suspension: 50, brakeBalance: 55 },
    weekend: { round: 0, phase: "factory", circuit: CIRCUITS_2026[0], practiceRuns: [], telemetry: null, qualifying: null },
  };
}

export function startDevelopment(state, areaId) {
  const next = deepCopy(state), area = DEVELOPMENT_AREAS.find(item => item.id === areaId);
  if (!area) return { ok: false, reason: "Área de desenvolvimento inválida.", state };
  if (next.technical.projects.length >= next.technical.factoryCapacity) return { ok: false, reason: "A fábrica já está operando em capacidade máxima.", state };
  if (next.cash < area.baseCost) return { ok: false, reason: "Caixa insuficiente para iniciar o projeto.", state };
  if (next.technical.projects.some(project => project.areaId === areaId)) return { ok: false, reason: "Já existe um projeto ativo nessa área.", state };
  next.cash -= area.baseCost;
  next.costCap.spent += area.baseCost;
  next.technical.projects.push({ id: `${areaId}-${next.week}`, areaId, label: area.label, stat: area.stat, cost: area.baseCost, weeksRemaining: area.duration, totalWeeks: area.duration, expectedGain: 2 + Math.floor(seededRandom(`${next.saveId}:${areaId}:${next.week}`) * 4) });
  next.financialLog.push({ week: next.week, category: `P&D: ${area.label}`, amount: -area.baseCost, includedInCap: true });
  next.history.push({ week: next.week, type: "engineering", text: `Projeto de ${area.label} iniciado.` });
  return { ok: true, reason: `${area.label}: desenvolvimento iniciado.`, state: finalize(next) };
}

export function updateSetup(state, setup) {
  const next = deepCopy(state);
  for (const key of Object.keys(next.technical.setup)) next.technical.setup[key] = clamp(Number(setup[key]));
  next.history.push({ week: next.week, type: "setup", text: "Acerto dos dois carros atualizado para o próximo treino." });
  return { ok: true, reason: "Acerto salvo.", state: finalize(next) };
}

function setupScore(technical, circuit) {
  const targetWing = circuit.aero > 75 ? 70 : circuit.power > 75 ? 38 : 54;
  const targetSuspension = circuit.tyre > 70 ? 62 : 48;
  return clamp(100 - Math.abs(technical.setup.frontWing - targetWing) * .7 - Math.abs(technical.setup.rearWing - targetWing) * .55 - Math.abs(technical.setup.suspension - targetSuspension) * .55 - Math.abs(technical.setup.brakeBalance - 55) * .4);
}

export function runPractice(state) {
  const next = deepCopy(state), weekend = next.technical.weekend;
  if (weekend.practiceRuns.length >= 3) return { ok: false, reason: "As três sessões de treino já foram concluídas.", state };
  const session = weekend.practiceRuns.length + 1, setup = setupScore(next.technical, weekend.circuit);
  const car = average(Object.values(next.technical.car));
  const feedback = average(next.team.drivers.map(driver => driver.feedback || driver.rating));
  const pace = clamp(car * .56 + setup * .28 + feedback * .16 + (seededRandom(`${next.saveId}:fp:${weekend.round}:${session}`) - .5) * 5);
  const tyreWear = clamp(100 - weekend.circuit.tyre * .55 - next.technical.car.reliability * .18 + (100 - setup) * .2, 8, 82);
  weekend.practiceRuns.push({ session: `TL${session}`, pace: Math.round(pace), setup: Math.round(setup), tyreWear: Math.round(tyreWear) });
  weekend.telemetry = { pace: Math.round(pace), setup: Math.round(setup), tyreWear: Math.round(tyreWear), confidence: clamp(Math.round(feedback * .7 + session * 7)) };
  weekend.phase = session === 3 ? "qualifying-ready" : "practice";
  next.history.push({ week: next.week, type: "practice", text: `TL${session} concluído em ${weekend.circuit.name}: ritmo ${Math.round(pace)}.` });
  return { ok: true, reason: `TL${session} concluído. Telemetria atualizada.`, state: finalize(next) };
}

export function runQualifying(state) {
  const next = deepCopy(state), weekend = next.technical.weekend;
  if (weekend.practiceRuns.length < 1) return { ok: false, reason: "Complete pelo menos um treino antes da classificação.", state };
  if (weekend.qualifying) return { ok: false, reason: "A classificação deste GP já foi concluída.", state };
  const setup = setupScore(next.technical, weekend.circuit), car = average(Object.values(next.technical.car));
  const results = next.team.drivers.map((driver, index) => {
    const performance = driver.pace * .48 + car * .34 + setup * .18 + (seededRandom(`${next.saveId}:q:${weekend.round}:${driver.id}`) - .5) * 8;
    return { driverId: driver.id, name: driver.name, performance: Math.round(performance * 10) / 10, position: clamp(Math.round(23 - performance / 4.8 + index), 1, 22) };
  }).sort((a, b) => a.position - b.position);
  weekend.qualifying = results;
  weekend.phase = "grid-set";
  next.history.push({ week: next.week, type: "qualifying", text: `Grid definido em ${weekend.circuit.name}: ${results.map(item => `${item.name} P${item.position}`).join(" e ")}.` });
  return { ok: true, reason: "Classificação concluída e grid salvo.", state: finalize(next) };
}

export function nextGrandPrix(state) {
  const next = deepCopy(state), current = next.technical.weekend.round;
  next.technical.weekend = { round: (current + 1) % CIRCUITS_2026.length, phase: "factory", circuit: CIRCUITS_2026[(current + 1) % CIRCUITS_2026.length], practiceRuns: [], telemetry: null, qualifying: null };
  return { ok: true, reason: `Logística preparada para ${next.technical.weekend.circuit.name}.`, state: finalize(next) };
}

export function payroll(state) {
  return [...state.team.staff, ...state.team.drivers].reduce((sum, person) => sum + person.salary, 0);
}

export function staffAverage(state) {
  return Math.round(average(state.team.staff.map(person => person.rating)));
}

export function sponsorAnnual(state) {
  return state.sponsorContracts.reduce((sum, contract) => sum + contract.annualValue, 0);
}

export function budgetUsedPercent(state) {
  return clamp(((state.costCap.spent + state.costCap.committed) / state.costCap.limit) * 100, 0, 999);
}

export function signStaff(state, candidateId, offer) {
  const next = deepCopy(state);
  const candidate = next.staffMarket.find(item => item.id === candidateId);
  if (!candidate) return { ok: false, reason: "Candidato indisponível.", state };
  const salary = Number(offer.salary);
  const years = Number(offer.years);
  const signingBonus = Math.round(salary * 0.12);
  if (salary <= 0 || years < 1 || years > 4) return { ok: false, reason: "Oferta inválida.", state };
  if (next.cash < signingBonus) return { ok: false, reason: "Caixa insuficiente para o bônus de assinatura.", state };
  const salaryScore = clamp((salary / candidate.salary) * 55, 0, 80);
  const projectScore = next.team.reputation * 0.18 + next.manager.attributes.negotiation * 0.16;
  const termScore = years * 4;
  const threshold = 64 + seededRandom(`${next.saveId}:${candidateId}:${next.week}`) * 28;
  const score = salaryScore + projectScore + termScore + candidate.interest * 0.08;
  next.history.push({ week: next.week, type: "negotiation", text: `Oferta enviada a ${candidate.name}: ${money(salary)}/ano por ${years} temporada(s).` });
  if (score < threshold) {
    next.manager.attributes.negotiation = clamp(next.manager.attributes.negotiation + 0.2);
    return { ok: false, reason: `${candidate.name} recusou: pacote abaixo das expectativas do mercado.`, state: finalize(next) };
  }
  const replaced = next.team.staff.find(item => item.role === candidate.role);
  if (replaced) {
    const severance = Math.round(replaced.salary * Math.max(0.2, replaced.years * 0.35));
    next.cash -= severance;
    next.financialLog.push({ week: next.week, category: `Rescisão: ${replaced.name}`, amount: -severance, includedInCap: false });
    next.team.staff = next.team.staff.filter(item => item.id !== replaced.id);
    next.morale = clamp(next.morale - 2);
  }
  next.cash -= signingBonus;
  next.team.staff.push({ ...candidate, salary, years, morale: 67, fatigue: 8 });
  next.staffMarket = next.staffMarket.filter(item => item.id !== candidateId);
  next.financialLog.push({ week: next.week, category: `Bônus: ${candidate.name}`, amount: -signingBonus, includedInCap: false });
  next.history.push({ week: next.week, type: "staff", text: `${candidate.name} assinou como ${candidate.role}.` });
  next.boardConfidence = clamp(next.boardConfidence + (candidate.rating >= 78 ? 2 : 1));
  return { ok: true, reason: `${candidate.name} aceitou o contrato.`, state: finalize(next) };
}

export function signDriver(state, candidateId, offer) {
  const next = deepCopy(state);
  const candidate = next.driverMarket.find(item => item.id === candidateId);
  const seat = Number(offer.seat);
  const salary = Number(offer.salary);
  const years = Number(offer.years);
  if (!candidate || ![0, 1].includes(seat) || salary <= 0 || years < 1 || years > 4) return { ok: false, reason: "Oferta de piloto inválida.", state };
  const current = next.team.drivers[seat];
  const buyout = Math.round(current.salary * 0.45);
  const signingBonus = Math.round(salary * 0.15);
  if (next.cash < buyout + signingBonus) return { ok: false, reason: "Caixa insuficiente para rescisão e assinatura.", state };
  const score = salary / candidate.salary * 48 + years * 6 + next.team.reputation * 0.17 + next.manager.attributes.negotiation * 0.18 + candidate.interest * 0.1;
  const threshold = 88 + seededRandom(`${candidateId}:${next.week}:${salary}`) * 22;
  next.history.push({ week: next.week, type: "driver-market", text: `Oferta enviada a ${candidate.name} para o Carro ${seat + 1}.` });
  if (score < threshold) return { ok: false, reason: `${candidate.name} recusou o projeto.`, state: finalize(next) };
  next.cash -= buyout + signingBonus;
  next.financialLog.push({ week: next.week, category: `Troca de piloto: ${candidate.name}`, amount: -(buyout + signingBonus), includedInCap: false });
  next.driverMarket.push({ ...current, interest: 62, official: true, assetId: current.assetId });
  next.team.drivers[seat] = { ...candidate, role: `Piloto ${seat + 1}`, salary, years, morale: 68, pace: candidate.rating, feedback: Math.max(60, candidate.rating - 4), consistency: Math.max(60, candidate.rating - 3), marketing: 72 };
  next.driverMarket = next.driverMarket.filter(item => item.id !== candidateId);
  next.boardConfidence = clamp(next.boardConfidence + (candidate.rating >= current.rating ? 2 : -1));
  next.history.push({ week: next.week, type: "driver-market", text: `${candidate.name} assumiu o Carro ${seat + 1}; ${current.name} entrou no mercado.` });
  return { ok: true, reason: `${candidate.name} assinou com a equipe.`, state: finalize(next) };
}

export function renewPerson(state, personId, offer) {
  const next = deepCopy(state);
  const person = [...next.team.staff, ...next.team.drivers].find(item => item.id === personId);
  if (!person) return { ok: false, reason: "Contrato não encontrado.", state };
  const salary = Number(offer.salary);
  const years = Number(offer.years);
  const expectation = person.salary * (1 + Math.max(0, person.rating - 70) / 120);
  const score = salary / expectation * 65 + years * 6 + next.manager.attributes.negotiation * 0.18 + person.morale * 0.08;
  const threshold = 83 + seededRandom(`${personId}:${next.week}:${salary}`) * 18;
  if (score < threshold) {
    person.morale = clamp(person.morale - 3);
    next.history.push({ week: next.week, type: "contract", text: `${person.name} recusou a renovação.` });
    return { ok: false, reason: "A proposta foi recusada. A relação foi afetada.", state: finalize(next) };
  }
  person.salary = salary; person.years = years; person.morale = clamp(person.morale + 4);
  next.history.push({ week: next.week, type: "contract", text: `${person.name} renovou por ${years} temporada(s).` });
  return { ok: true, reason: "Renovação aceita.", state: finalize(next) };
}

export function signSponsor(state, sponsorId, offer) {
  const next = deepCopy(state);
  const sponsor = next.sponsorPipeline.find(item => item.id === sponsorId);
  if (!sponsor) return { ok: false, reason: "Proposta indisponível.", state };
  if (next.sponsorContracts.some(contract => contract.exclusivity === sponsor.exclusivity)) return { ok: false, reason: "Conflito de exclusividade comercial.", state };
  const annualValue = Number(offer.annualValue);
  const years = Number(offer.years);
  const activation = Number(offer.activation);
  const commercial = next.team.staff.find(item => item.department === "Comercial")?.rating || 55;
  const valueScore = clamp((sponsor.annualValue / annualValue) * 38, 0, 60);
  const packageScore = activation * 0.18 + commercial * 0.22 + next.brand * 0.16 + next.manager.attributes.negotiation * 0.16 + years * 3;
  const threshold = sponsor.demand + 34 + seededRandom(`${sponsorId}:${next.week}:${annualValue}`) * 18;
  if (valueScore + packageScore < threshold) {
    next.history.push({ week: next.week, type: "sponsor", text: `${sponsor.name} recusou a contraproposta.` });
    return { ok: false, reason: "O patrocinador recusou valor e contrapartidas.", state: finalize(next) };
  }
  const upfront = Math.round(sponsor.upfront * (annualValue / sponsor.annualValue));
  next.cash += upfront;
  next.sponsorContracts.push({ ...sponsor, annualValue, years, activation, signedWeek: next.week, paymentsReceived: upfront });
  next.sponsorPipeline = next.sponsorPipeline.filter(item => item.id !== sponsorId);
  next.financialLog.push({ week: next.week, category: `Assinatura: ${sponsor.name}`, amount: upfront, includedInCap: false });
  next.brand = clamp(next.brand + 2);
  next.boardConfidence = clamp(next.boardConfidence + 3);
  next.history.push({ week: next.week, type: "sponsor", text: `${sponsor.name} tornou-se parceiro por ${years} temporada(s).` });
  return { ok: true, reason: `Contrato assinado. ${money(upfront)} entraram no caixa.`, state: finalize(next) };
}

export function updateBudgets(state, budgets) {
  const next = deepCopy(state);
  const values = Object.fromEntries(Object.entries(budgets).map(([key, value]) => [key, Math.max(0, Number(value))]));
  const total = Object.values(values).reduce((sum, value) => sum + value, 0);
  if (total > next.costCap.limit * 0.86) return { ok: false, reason: "O plano compromete margem insuficiente no teto de custos.", state };
  next.budgets = values;
  next.costCap.committed = Math.round(total * ((53 - next.week) / 52));
  next.history.push({ week: next.week, type: "finance", text: `Orçamento anual replanejado para ${money(total)}.` });
  return { ok: true, reason: "Orçamento atualizado e compromissos recalculados.", state: finalize(next) };
}

export function launchCampaign(state, investment) {
  const next = deepCopy(state);
  const amount = Number(investment);
  if (amount < 100_000 || next.cash < amount) return { ok: false, reason: "Investimento inválido ou caixa insuficiente.", state };
  const commercial = next.team.staff.find(item => item.department === "Comercial")?.rating || 50;
  const gain = Math.max(1, Math.round(Math.log10(amount / 75_000) * (commercial / 28)));
  next.cash -= amount;
  next.brand = clamp(next.brand + gain);
  next.financialLog.push({ week: next.week, category: "Campanha de marca", amount: -amount, includedInCap: false });
  next.history.push({ week: next.week, type: "marketing", text: `Campanha de ${money(amount)} elevou a marca em ${gain} ponto(s).` });
  return { ok: true, reason: `Campanha concluída: marca +${gain}.`, state: finalize(next) };
}

export function advanceWeek(state) {
  const next = deepCopy(state);
  if (next.status !== "employed") return { ok: false, reason: "Assine uma proposta para continuar.", state };
  const weeklyPayroll = Math.round(payroll(next) / 52);
  const operating = Math.round(Object.values(next.budgets).reduce((sum, value) => sum + value, 0) / 52);
  const sponsorIncome = next.sponsorContracts.reduce((sum, contract) => sum + Math.round((contract.annualValue - contract.paymentsReceived) / Math.max(1, 52 - next.week)), 0);
  next.week += 1;
  next.cash += sponsorIncome - weeklyPayroll - operating;
  next.costCap.spent += operating;
  next.costCap.committed = Math.max(0, next.costCap.committed - operating);
  next.financialLog.push({ week: next.week, category: "Folha semanal", amount: -weeklyPayroll, includedInCap: false });
  next.financialLog.push({ week: next.week, category: "Operação semanal", amount: -operating, includedInCap: true });
  if (sponsorIncome) next.financialLog.push({ week: next.week, category: "Parcelas de patrocínio", amount: sponsorIncome, includedInCap: false });
  for (const person of next.team.staff) {
    const support = next.budgets[person.department] || 4_000_000;
    person.fatigue = clamp(person.fatigue + 1.5 - support / 18_000_000);
    person.morale = clamp(person.morale + (support > 10_000_000 ? 0.35 : -0.2));
    next.departmentProgress[person.department] = (next.departmentProgress[person.department] || 0) + (person.rating * support / 90_000_000);
  }
  for (const project of next.technical.projects) project.weeksRemaining -= 1;
  const completed = next.technical.projects.filter(project => project.weeksRemaining <= 0);
  for (const project of completed) {
    next.technical.car[project.stat] = clamp(next.technical.car[project.stat] + project.expectedGain);
    next.technical.completedProjects.unshift({ ...project, completedWeek: next.week });
    next.history.push({ week: next.week, type: "engineering", text: `${project.label} concluído: +${project.expectedGain} no carro.` });
  }
  next.technical.projects = next.technical.projects.filter(project => project.weeksRemaining > 0);
  next.technical.researchPoints += Math.max(1, Math.round((next.team.staff.find(person => person.department === "Técnica")?.rating || 60) / 30));
  const event = WEEKLY_EVENTS[Math.floor(seededRandom(`${next.saveId}:week:${next.week}`) * WEEKLY_EVENTS.length)];
  next.lastEvent = event;
  next.morale = clamp(Math.round(average(next.team.staff.map(item => item.morale))) + (event.morale || 0));
  next.cash += event.cash || 0;
  next.boardConfidence = clamp(next.boardConfidence + (event.confidence || 0) + (next.cash < 0 ? -6 : 0) - (budgetUsedPercent(next) > 92 ? 3 : 0));
  next.manager.reputation = clamp(next.manager.reputation + (event.reputation || 0));
  next.inbox.unshift({ id: `${event.id}-${next.week}`, week: next.week, title: event.title, text: event.text, read: false });
  next.history.push({ week: next.week, type: "event", text: event.text });
  if (next.costCap.spent > next.costCap.limit) {
    next.boardConfidence = clamp(next.boardConfidence - 12);
    next.inbox.unshift({ id: `audit-${next.week}`, week: next.week, title: "Infração do teto", text: "Os custos incluídos superaram o limite do ruleset 2026.", read: false });
  }
  if (next.boardConfidence <= 5 || next.cash < -8_000_000) dismissManager(next);
  return { ok: true, reason: `Semana ${next.week} processada.`, state: finalize(next) };
}

function dismissManager(next) {
  next.status = "unemployed";
  next.history.push({ week: next.week, type: "career", text: `O conselho encerrou o contrato de ${next.manager.name}.` });
  next.careerOffers = Object.values(TEAMS).filter(team => team.id !== next.team.id).map(team => ({ teamId: team.id, teamKey: Object.keys(TEAMS).find(key => TEAMS[key].id === team.id), teamName: team.name, confidence: 55, autonomy: 62 }));
}

export function acceptCareerOffer(state, teamKey) {
  const next = deepCopy(state);
  const team = TEAMS[teamKey];
  if (!team || !next.careerOffers.some(offer => offer.teamKey === teamKey)) return { ok: false, reason: "Proposta indisponível.", state };
  next.team = deepCopy(team); next.cash = team.cash; next.boardConfidence = team.boardConfidence; next.status = "employed"; next.careerOffers = [];
  next.history.push({ week: next.week, type: "career", text: `${next.manager.name} assumiu ${team.name}.` });
  return { ok: true, reason: `Novo contrato assinado com ${team.name}.`, state: finalize(next) };
}

export function finalize(state) {
  state.updatedAt = new Date().toISOString();
  state.gameVersion = GAME_VERSION;
  return state;
}

export function migrateSave(candidate) {
  if (!candidate || typeof candidate !== "object") throw new Error("Save inválido.");
  if (!candidate.schemaVersion) candidate.schemaVersion = 1;
  if (candidate.schemaVersion > SCHEMA_VERSION) throw new Error("Save criado por versão mais nova.");
  if (!candidate.technical) candidate.technical = createTechnicalState(candidate.team || TEAMS.mercedes);
  candidate.technical.car ||= { aero: 70, chassis: 70, power: 70, reliability: 72 };
  candidate.technical.projects ||= [];
  candidate.technical.completedProjects ||= [];
  candidate.technical.researchPoints ??= 8;
  candidate.technical.factoryCapacity ??= 2;
  candidate.technical.setup ||= { frontWing: 50, rearWing: 50, suspension: 50, brakeBalance: 55 };
  candidate.technical.weekend ||= { round: 0, phase: "factory", circuit: CIRCUITS_2026[0], practiceRuns: [], telemetry: null, qualifying: null };
  if (!candidate.sponsorPipeline?.length || candidate.sponsorPipeline.some(item => /^spn-0/.test(item.id))) candidate.sponsorPipeline = deepCopy(SPONSORS);
  candidate.team.wikiTitle ||= Object.values(TEAMS).find(team => team.id === candidate.team.id)?.wikiTitle;
  for (const driver of candidate.team.drivers || []) driver.wikiTitle ||= driver.name.replaceAll(" ", "_");
  for (const driver of candidate.driverMarket || []) if (driver.official) driver.wikiTitle ||= driver.name.replaceAll(" ", "_");
  candidate.schemaVersion = SCHEMA_VERSION;
  return finalize(candidate);
}
