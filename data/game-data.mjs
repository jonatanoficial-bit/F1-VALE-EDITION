export const GAME_VERSION = "2.0.0-p2";
export const SCHEMA_VERSION = 2;
export const RULESET = {
  id: "f1vge-rules-2026-p1",
  season: 2026,
  currency: "USD",
  costCap: 142_000_000,
  startingWeek: 1,
  totalWeeks: 52,
  includedCategories: ["operações", "engenharia", "produção", "logística"],
  excludedCategories: ["salários de pilotos", "marketing", "três maiores salários"],
};

export const ORIGINS = {
  estrategista: { label: "Estrategista", leadership: 58, negotiation: 58, politics: 54, media: 48, technical: 66, people: 55 },
  engenheiro: { label: "Engenheiro", leadership: 54, negotiation: 48, politics: 46, media: 43, technical: 76, people: 58 },
  executivo: { label: "Executivo comercial", leadership: 63, negotiation: 74, politics: 67, media: 63, technical: 43, people: 57 },
  operacoes: { label: "Operações", leadership: 66, negotiation: 54, politics: 55, media: 47, technical: 61, people: 66 },
};

export const CONSTRUCTORS_2026 = ["Mercedes", "Ferrari", "McLaren", "Red Bull", "Racing Bulls", "Alpine", "Haas", "Audi", "Williams", "Aston Martin", "Cadillac"];

export const DRIVERS_2026 = [
  ["Kimi Antonelli", "mercedes", 92], ["George Russell", "mercedes", 89], ["Lewis Hamilton", "ferrari", 89], ["Charles Leclerc", "ferrari", 88],
  ["Lando Norris", "mclaren", 88], ["Oscar Piastri", "mclaren", 86], ["Max Verstappen", "red-bull", 91], ["Isack Hadjar", "red-bull", 81],
  ["Liam Lawson", "racing-bulls", 78], ["Arvid Lindblad", "racing-bulls", 75], ["Pierre Gasly", "alpine", 79], ["Franco Colapinto", "alpine", 74],
  ["Oliver Bearman", "haas", 76], ["Esteban Ocon", "haas", 76], ["Gabriel Bortoleto", "audi", 74], ["Nico Hülkenberg", "audi", 76],
  ["Carlos Sainz", "williams", 81], ["Alexander Albon", "williams", 79], ["Fernando Alonso", "aston-martin", 84], ["Lance Stroll", "aston-martin", 73],
  ["Valtteri Bottas", "cadillac", 78], ["Sergio Pérez", "cadillac", 78], ["Yuki Tsunoda", null, 74],
].map(([name, teamId, overall], index) => ({ id: `driver-2026-${index + 1}`, name, teamId, overall, seasonStatus: teamId ? "active" : "reserve-market", wikiTitle: name.replaceAll(" ", "_") }));

export const REVELATION_DRIVERS = [
  { id: "reveal-01", name: "Miguel Azevedo", nationality: "Portugal", age: 19, potential: 84, superLicense: 32, status: "prospect" },
  { id: "reveal-02", name: "Sofia Nakamura", nationality: "Japão", age: 18, potential: 88, superLicense: 28, status: "prospect" },
  { id: "reveal-03", name: "Thiago Mensah", nationality: "Brasil", age: 20, potential: 82, superLicense: 36, status: "prospect" },
  { id: "reveal-04", name: "Elena Rossi", nationality: "Itália", age: 19, potential: 86, superLicense: 30, status: "prospect" },
];

const TEAM_META = {
  mercedes:["Mercedes","MERCEDES","Reino Unido","#00a19b",92,"Mercedes-Benz_in_Formula_One"], ferrari:["Ferrari","FERRARI","Itália","#dc0000",89,"Scuderia_Ferrari"], mclaren:["McLaren","MCLAREN","Reino Unido","#ff8700",87,"McLaren"],
  "red-bull":["Red Bull","RED BULL","Áustria","#1e41ff",84,"Red_Bull_Racing"], "racing-bulls":["Racing Bulls","RACING BULLS","Itália","#6692ff",73,"Racing_Bulls"], alpine:["Alpine","ALPINE","França","#2293d1",72,"Alpine_F1_Team"],
  haas:["Haas","HAAS","Estados Unidos","#b6babd",68,"Haas_F1_Team"], audi:["Audi","AUDI","Alemanha","#e0002a",67,"Audi_in_Formula_One"], williams:["Williams","WILLIAMS","Reino Unido","#005aff",66,"Williams_Racing"],
  "aston-martin":["Aston Martin","ASTON MARTIN","Reino Unido","#006f62",63,"Aston_Martin_in_Formula_One"], cadillac:["Cadillac","CADILLAC","Estados Unidos","#c9a66b",61,"Cadillac_Formula_1_Team"],
};
const STAFF_NAMES = [["Helena Moretti","Rafael Costa","Bruna Nishimura","André Lima"],["Edward Mercer","Sara Bellini","Noah Williams","Maya Okafor"],["Camille Durand","Tobias Klein","Aisha Rahman","Marco Silva"]];
function buildTeam([key,[name,shortName,nationality,color,overall,wikiTitle]], index) {
  const names=STAFF_NAMES[index%STAFF_NAMES.length], drivers=DRIVERS_2026.filter(driver=>driver.teamId===key);
  return [key,{id:`team-2026-${key}`,name,shortName,nationality,overall,wikiTitle,hq:`${name} Team HQ`,reputation:68,brand:70,cash:46_000_000,boardConfidence:66,color,background:`assets/media/cinematica-${String(11+index).padStart(3,"0")}.webp`,logoAssetId:`official-team-logo-${key}-2026`,board:{owner:`${name} Ownership`,ambition:78,patience:54,riskTolerance:58},targets:[{id:"finance",label:"Fechar o trimestre com caixa positivo",target:1},{id:"staff",label:"Elevar a média do staff técnico para 75",target:75},{id:"sponsor",label:"Garantir US$ 20 mi em patrocínio",target:20_000_000}],drivers:drivers.map((driver,slot)=>({id:driver.id,name:driver.name,wikiTitle:driver.wikiTitle,role:`Piloto ${slot+1}`,rating:driver.overall,overall:driver.overall,potential:Math.min(95,driver.overall+2),pace:driver.overall,feedback:Math.max(65,driver.overall-3),consistency:Math.max(65,driver.overall-2),marketing:74,morale:72,salary:8_000_000-slot*1_000_000,years:2,assetId:`official-driver-portrait-${driver.id}`})),staff:[{id:`stf-${key}-01`,name:names[0],role:"Diretor(a) Técnico(a)",department:"Técnica",rating:78,potential:84,salary:1_850_000,years:2,morale:74,fatigue:18,specialty:"Correlação"},{id:`stf-${key}-02`,name:names[1],role:"Chefe de Estratégia",department:"Corrida",rating:74,potential:81,salary:1_180_000,years:2,morale:71,fatigue:22,specialty:"Cenários"},{id:`stf-${key}-03`,name:names[2],role:"Diretor(a) Comercial",department:"Comercial",rating:72,potential:79,salary:980_000,years:1,morale:76,fatigue:16,specialty:"Negociação"},{id:`stf-${key}-04`,name:names[3],role:"Chefe de Operações",department:"Operações",rating:73,potential:78,salary:1_050_000,years:2,morale:70,fatigue:24,specialty:"Logística"}]}];
}
export const TEAMS = Object.fromEntries(Object.entries(TEAM_META).map(buildTeam));

export const STAFF_MARKET = [
  { id: "mkt-01", name: "Camila Torres", role: "Diretora Comercial", department: "Comercial", rating: 78, potential: 84, salary: 1_350_000, interest: 72, specialty: "Mercados globais" },
  { id: "mkt-02", name: "Ethan Clarke", role: "Diretor Técnico", department: "Técnica", rating: 82, potential: 85, salary: 2_400_000, interest: 58, specialty: "Conceito de carro" },
  { id: "mkt-03", name: "Ana Petrović", role: "Chefe de Estratégia", department: "Corrida", rating: 77, potential: 88, salary: 1_420_000, interest: 76, specialty: "Modelagem" },
  { id: "mkt-04", name: "Kenji Sato", role: "Chefe de Operações", department: "Operações", rating: 75, potential: 79, salary: 1_180_000, interest: 83, specialty: "Qualidade" },
  { id: "mkt-05", name: "Marina Duarte", role: "Engenheira de Performance", department: "Corrida", rating: 73, potential: 86, salary: 890_000, interest: 88, specialty: "Telemetria" },
  { id: "mkt-06", name: "Thomas Reed", role: "Diretor de RH", department: "Pessoas", rating: 71, potential: 74, salary: 820_000, interest: 91, specialty: "Retenção" },
];

export const SPONSORS = [
  { id: "spn-pirelli", name: "Pirelli", wikiTitle: "Pirelli", sector: "Pneus", territory: "Global", annualValue: 14_000_000, upfront: 4_200_000, target: "brand", demand: 68, tolerance: 64, exclusivity: "Pneus", assetId: "real-sponsor-pirelli" },
  { id: "spn-dhl", name: "DHL", wikiTitle: "DHL", sector: "Logística", territory: "Global", annualValue: 11_500_000, upfront: 3_100_000, target: "activation", demand: 60, tolerance: 72, exclusivity: "Logística", assetId: "real-sponsor-dhl" },
  { id: "spn-aws", name: "AWS", wikiTitle: "Amazon_Web_Services", sector: "Tecnologia", territory: "Global", annualValue: 18_000_000, upfront: 5_800_000, target: "reputation", demand: 78, tolerance: 55, exclusivity: "Tecnologia", assetId: "real-sponsor-aws" },
  { id: "spn-aramco", name: "Aramco", wikiTitle: "Saudi_Aramco", sector: "Energia", territory: "Global", annualValue: 8_800_000, upfront: 2_700_000, target: "digital", demand: 54, tolerance: 80, exclusivity: "Energia", assetId: "real-sponsor-aramco" },
];

export const DEVELOPMENT_AREAS = [
  { id: "aero", label: "Aerodinâmica", stat: "aero", baseCost: 2_800_000, duration: 3, image: "assets/media/hq-escritorio-design.webp" },
  { id: "chassis", label: "Chassi", stat: "chassis", baseCost: 2_400_000, duration: 3, image: "assets/media/hq-fabricacao.webp" },
  { id: "power", label: "Unidade de potência", stat: "power", baseCost: 3_200_000, duration: 4, image: "assets/media/hq-unidade-potencia.webp" },
  { id: "reliability", label: "Confiabilidade", stat: "reliability", baseCost: 1_900_000, duration: 2, image: "assets/media/hq-componentes-confiabilidade.webp" },
];

export const CIRCUITS_2026 = [
  { id: "australia", name: "Albert Park", country: "Austrália", laps: 58, aero: 72, power: 68, tyre: 61 },
  { id: "china", name: "Shanghai", country: "China", laps: 56, aero: 65, power: 76, tyre: 70 },
  { id: "japan", name: "Suzuka", country: "Japão", laps: 53, aero: 86, power: 62, tyre: 78 },
  { id: "miami", name: "Miami", country: "Estados Unidos", laps: 57, aero: 62, power: 81, tyre: 66 },
];

export const WEEKLY_EVENTS = [
  { id: "evt-ops", title: "Pressão operacional", text: "A sequência de trabalho elevou a fadiga do departamento de Operações.", morale: -1, confidence: -1, cash: 0 },
  { id: "evt-press", title: "Entrevista positiva", text: "Uma entrevista clara melhorou a percepção pública do projeto.", morale: 1, confidence: 1, reputation: 1 },
  { id: "evt-audit", title: "Auditoria preventiva", text: "A equipe financeira identificou custos comprometidos antes do fechamento.", morale: 0, confidence: 2, cash: -180_000 },
  { id: "evt-culture", title: "Workshop de liderança", text: "A comunicação entre departamentos melhorou.", morale: 2, confidence: 1, cash: -120_000 },
  { id: "evt-quiet", title: "Semana estável", text: "Os departamentos executaram o plano sem desvios relevantes.", morale: 1, confidence: 0, cash: 0 },
];

export const NAV_ITEMS = [
  ["overview", "Visão geral"], ["people", "Pessoas"], ["contracts", "Contratos"],
  ["sponsors", "Patrocínios"], ["finances", "Finanças"], ["board", "Conselho"],
  ["engineering", "Engenharia"], ["car", "Carro"], ["weekend", "Fim de semana"], ["telemetry", "Telemetria"],
  ["career", "Carreira"], ["archive", "Arquivo visual"], ["roadmap", "4 Partes"],
];
