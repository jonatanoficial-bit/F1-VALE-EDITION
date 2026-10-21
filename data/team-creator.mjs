export const CUSTOM_TEAM_PALETTES = [
  { id: "volt", label: "Verde Volt", primary: "#071a19", accent: "#34f6c1", contrast: "#f4fff9" },
  { id: "solar", label: "Solar", primary: "#321b04", accent: "#ffb000", contrast: "#fff8e6" },
  { id: "crimson", label: "Carmesim", primary: "#30030e", accent: "#ff355c", contrast: "#fff5f6" },
  { id: "ocean", label: "Azul Oceano", primary: "#031b36", accent: "#39a9ff", contrast: "#f1f9ff" },
  { id: "violet", label: "Violeta", primary: "#220a37", accent: "#bb79ff", contrast: "#fbf4ff" },
  { id: "titanium", label: "Titânio", primary: "#14171a", accent: "#dce3e7", contrast: "#ffffff" },
  { id: "coral", label: "Coral Racing", primary: "#3a0905", accent: "#ff6f50", contrast: "#fff7f4" },
];

export const LIVERY_TEMPLATES = [
  { id: "apex", label: "Apex", description: "Faixa central de alta velocidade" },
  { id: "split", label: "Split", description: "Dois tons em corte diagonal" },
  { id: "pulse", label: "Pulse", description: "Linhas de telemetria nas laterais" },
  { id: "heritage", label: "Heritage", description: "Faixa clássica com número em destaque" },
];

export const LOGO_MARKS = [
  { id: "arrow", label: "Arrow", mark: "↗" },
  { id: "delta", label: "Delta", mark: "Δ" },
  { id: "vertex", label: "Vertex", mark: "V" },
  { id: "orbit", label: "Orbit", mark: "◉" },
  { id: "nova", label: "Nova", mark: "✦" },
  { id: "grid", label: "Grid", mark: "◆" },
];

export const ENTRY_PROFILES = [
  { id: "challenger", label: "Desafiante", description: "Mais orçamento, pressão imediata", overall: 72, cash: 56_000_000, boardConfidence: 62 },
  { id: "balanced", label: "Equilibrada", description: "Estrutura competitiva e metas sustentáveis", overall: 68, cash: 49_000_000, boardConfidence: 68 },
  { id: "academy", label: "Academia", description: "Projeto de longo prazo com jovens talentos", overall: 64, cash: 43_000_000, boardConfidence: 74 },
];

export const paletteById = id => CUSTOM_TEAM_PALETTES.find(item => item.id === id) || CUSTOM_TEAM_PALETTES[0];
export const liveryById = id => LIVERY_TEMPLATES.find(item => item.id === id) || LIVERY_TEMPLATES[0];
export const logoById = id => LOGO_MARKS.find(item => item.id === id) || LOGO_MARKS[0];
export const entryProfileById = id => ENTRY_PROFILES.find(item => item.id === id) || ENTRY_PROFILES[1];
