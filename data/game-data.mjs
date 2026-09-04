export const GAME_VERSION = "4.0.0";
export const SCHEMA_VERSION = 4;
export const RULESET = {
  id: "f1vge-rules-2026-p4",
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
export const TEAM_THEMES = {
  mercedes:{primary:"#050607",accent:"#00d2be",contrast:"#f5f5f2"}, ferrari:{primary:"#8b0014",accent:"#ff1e38",contrast:"#ffffff"}, mclaren:{primary:"#8a3900",accent:"#ff8700",contrast:"#ffffff"},
  "red-bull":{primary:"#111a46",accent:"#3671c6",contrast:"#ffffff"}, "racing-bulls":{primary:"#172b5e",accent:"#6692ff",contrast:"#ffffff"}, alpine:{primary:"#103e5d",accent:"#2293d1",contrast:"#ffffff"},
  haas:{primary:"#4a1017",accent:"#c7c9cb",contrast:"#ffffff"}, audi:{primary:"#171719",accent:"#f50537",contrast:"#ffffff"}, williams:{primary:"#002b68",accent:"#64c4ff",contrast:"#ffffff"},
  "aston-martin":{primary:"#004f46",accent:"#00a886",contrast:"#ffffff"}, cadillac:{primary:"#181818",accent:"#c9a66b",contrast:"#ffffff"},
};

export const SUPPORT_CHARACTERS = [
  {id:"vale",name:"Vale",role:"Guia da carreira",sector:"Tutorial",sprite:0},
  {id:"lara",name:"Lara Monteiro",role:"Engenheira de corrida",sector:"Engenharia",sprite:1},
  {id:"diego",name:"Diego Ramos",role:"Chefe de mecânicos",sector:"Mecânica",sprite:2},
  {id:"helena",name:"Helena Duarte",role:"Diretora financeira",sector:"Finanças",sprite:3},
  {id:"marcos",name:"Marcos Vidal",role:"Diretor de marketing",sector:"Marketing",sprite:4},
  {id:"camila",name:"Camila Torres",role:"Diretora esportiva",sector:"Direção esportiva",sprite:5},
  {id:"samuel",name:"Samuel Costa",role:"Diretor de pessoas",sector:"RH",sprite:6},
  {id:"mei",name:"Mei Nakamura",role:"Estrategista meteorológica",sector:"Clima",sprite:7},
];
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
  { id:"australia", name:"Albert Park", grandPrix:"GP da Austrália", country:"Austrália", flag:"🇦🇺", laps:58, aero:72, power:68, tyre:61, trackPath:"M148 328 C80 250 120 112 262 91 C378 72 421 157 514 140 C631 117 620 52 755 88 C887 123 930 235 842 318 C777 380 662 342 574 402 C464 477 288 454 200 388 Z" },
  { id:"china", name:"Shanghai International Circuit", grandPrix:"GP da China", country:"China", flag:"🇨🇳", laps:56, aero:65, power:76, tyre:70, trackPath:"M175 335 C81 270 94 130 210 91 C330 51 422 114 461 188 C503 267 583 259 631 177 C697 66 875 92 901 219 C922 322 837 405 732 391 C643 379 593 337 513 366 C382 415 273 408 175 335 Z" },
  { id:"japan", name:"Suzuka Circuit", grandPrix:"GP do Japão", country:"Japão", flag:"🇯🇵", laps:53, aero:86, power:62, tyre:78, trackPath:"M130 330 C93 244 159 135 260 134 C348 132 360 234 446 236 C536 239 550 105 662 91 C765 79 884 154 861 255 C839 352 710 326 651 376 C588 430 492 421 446 349 C402 281 338 299 286 362 C234 425 160 401 130 330 Z" },
  { id:"miami", name:"Miami International Autodrome", grandPrix:"GP de Miami", country:"Estados Unidos", flag:"🇺🇸", laps:57, aero:62, power:81, tyre:66, trackPath:"M119 323 L174 116 L530 91 L604 168 L879 166 L895 273 L743 302 L704 419 L470 431 L398 341 L238 383 Z" },
  { id:"canada", name:"Circuit Gilles-Villeneuve", grandPrix:"GP do Canadá", country:"Canadá", flag:"🇨🇦", laps:70, aero:54, power:86, tyre:58, trackPath:"M125 359 L171 127 L309 95 L398 171 L527 134 L575 85 L857 110 L879 205 L650 246 L785 321 L735 417 L457 388 L341 426 L209 399 Z" },
  { id:"monaco", name:"Circuit de Monaco", grandPrix:"GP de Mônaco", country:"Mônaco", flag:"🇲🇨", laps:78, aero:95, power:43, tyre:52, trackPath:"M176 397 C105 353 95 258 161 208 L278 119 L420 144 L488 94 L690 105 L717 197 L870 224 L850 347 L671 332 L568 418 L355 391 Z" },
  { id:"barcelona", name:"Circuit de Barcelona-Catalunya", grandPrix:"GP de Barcelona-Catalunha", country:"Espanha", flag:"🇪🇸", laps:66, aero:82, power:65, tyre:79, trackPath:"M126 337 L161 137 L369 91 L523 139 L741 103 L886 181 L851 319 L710 345 L606 422 L382 405 L279 351 Z" },
  { id:"austria", name:"Red Bull Ring", grandPrix:"GP da Áustria", country:"Áustria", flag:"🇦🇹", laps:71, aero:51, power:89, tyre:67, trackPath:"M129 352 L206 116 L390 80 L524 153 L794 111 L886 204 L803 369 L586 425 L361 399 L238 432 Z" },
  { id:"great-britain", name:"Silverstone Circuit", grandPrix:"GP da Grã-Bretanha", country:"Reino Unido", flag:"🇬🇧", laps:52, aero:84, power:76, tyre:82, trackPath:"M105 287 L189 112 L346 150 L442 79 L577 146 L762 106 L900 218 L842 377 L693 352 L581 431 L408 387 L249 419 L174 342 Z" },
  { id:"belgium", name:"Circuit de Spa-Francorchamps", grandPrix:"GP da Bélgica", country:"Bélgica", flag:"🇧🇪", laps:44, aero:68, power:91, tyre:75, trackPath:"M113 347 C78 250 142 143 248 112 L414 64 L496 167 L618 117 L842 144 L890 265 L787 401 L603 365 L494 432 L300 390 L206 425 Z" },
  { id:"hungary", name:"Hungaroring", grandPrix:"GP da Hungria", country:"Hungria", flag:"🇭🇺", laps:70, aero:88, power:49, tyre:71, trackPath:"M142 349 C89 235 167 105 295 100 C409 95 434 190 531 162 C647 128 753 96 839 188 C926 282 838 413 711 401 C617 392 567 337 477 382 C338 450 200 420 142 349 Z" },
  { id:"netherlands", name:"Circuit Zandvoort", grandPrix:"GP dos Países Baixos", country:"Países Baixos", flag:"🇳🇱", laps:72, aero:90, power:52, tyre:80, trackPath:"M154 379 C88 314 109 174 219 119 C330 64 427 119 482 194 C533 262 610 244 667 160 C736 58 865 111 882 232 C900 355 773 428 661 384 C562 345 513 430 385 426 C282 423 207 417 154 379 Z" },
  { id:"italy", name:"Autodromo Nazionale Monza", grandPrix:"GP da Itália", country:"Itália", flag:"🇮🇹", laps:53, aero:38, power:97, tyre:55, trackPath:"M112 350 L191 101 L370 83 L456 150 L765 101 L893 188 L857 302 L668 324 L583 423 L374 401 L257 438 Z" },
  { id:"madrid", name:"MADRING", grandPrix:"GP da Espanha", country:"Espanha", flag:"🇪🇸", laps:57, aero:70, power:78, tyre:68, trackPath:"M110 316 L142 139 L337 100 L455 167 L612 94 L848 130 L904 254 L824 397 L620 366 L527 430 L329 406 L230 350 Z" },
  { id:"azerbaijan", name:"Baku City Circuit", grandPrix:"GP do Azerbaijão", country:"Azerbaijão", flag:"🇦🇿", laps:51, aero:45, power:96, tyre:54, trackPath:"M112 366 L157 107 L355 88 L388 194 L477 142 L523 207 L582 153 L644 218 L871 189 L894 334 L705 402 L485 378 L282 432 Z" },
  { id:"malaysia", name:"Sepang International Circuit", grandPrix:"GP do Bahrein na Malásia", country:"Malásia", flag:"🇲🇾", laps:56, aero:73, power:81, tyre:84, trackPath:"M122 354 C87 239 170 111 290 103 C405 95 433 181 519 187 C611 193 650 88 779 113 C902 137 925 275 844 371 C772 456 642 394 555 424 C429 467 229 448 122 354 Z" },
  { id:"singapore", name:"Marina Bay Street Circuit", grandPrix:"GP de Singapura", country:"Singapura", flag:"🇸🇬", laps:62, aero:91, power:57, tyre:69, trackPath:"M121 368 L141 154 L286 91 L368 158 L449 102 L538 171 L622 109 L853 126 L888 241 L796 293 L844 391 L639 425 L538 371 L379 429 L226 396 Z" },
  { id:"united-states", name:"Circuit of the Americas", grandPrix:"GP dos Estados Unidos", country:"Estados Unidos", flag:"🇺🇸", laps:56, aero:78, power:79, tyre:76, trackPath:"M112 340 L194 89 L277 166 L390 112 L477 180 L586 104 L815 117 L900 230 L830 387 L657 350 L575 430 L377 397 L231 431 Z" },
  { id:"mexico", name:"Autódromo Hermanos Rodríguez", grandPrix:"GP da Cidade do México", country:"México", flag:"🇲🇽", laps:71, aero:86, power:88, tyre:63, trackPath:"M113 348 L166 111 L417 91 L492 162 L777 119 L893 201 L840 347 L680 322 L598 419 L391 398 L248 434 Z" },
  { id:"brazil", name:"Autódromo José Carlos Pace", grandPrix:"GP de São Paulo", country:"Brasil", flag:"🇧🇷", laps:71, aero:76, power:80, tyre:74, trackPath:"M127 333 C92 219 185 102 306 105 C420 108 454 194 553 181 C654 168 725 82 827 143 C936 208 884 376 753 397 C638 416 568 339 466 394 C325 469 167 423 127 333 Z" },
  { id:"las-vegas", name:"Las Vegas Strip Circuit", grandPrix:"GP de Las Vegas", country:"Estados Unidos", flag:"🇺🇸", laps:50, aero:42, power:98, tyre:56, trackPath:"M110 370 L145 111 L328 92 L359 193 L717 151 L765 95 L892 128 L875 292 L778 327 L733 418 L490 395 L271 436 Z" },
  { id:"qatar", name:"Lusail International Circuit", grandPrix:"GP do Catar", country:"Catar", flag:"🇶🇦", laps:57, aero:83, power:73, tyre:86, trackPath:"M135 357 C88 241 161 116 286 92 C416 67 480 152 566 151 C658 150 731 80 831 139 C938 202 874 385 739 405 C628 422 551 354 461 405 C332 479 191 438 135 357 Z" },
  { id:"abu-dhabi", name:"Yas Marina Circuit", grandPrix:"GP de Abu Dhabi", country:"Emirados Árabes Unidos", flag:"🇦🇪", laps:58, aero:69, power:82, tyre:64, trackPath:"M116 351 L151 131 L331 92 L439 162 L579 109 L842 132 L897 236 L813 315 L846 404 L630 422 L519 371 L343 429 L216 399 Z" },
].map((c,index)=>({...c,round:index+1,lapSeconds:[80,92,90,90,74,72,75,66,87,107,76,71,81,92,103,94,95,95,78,71,95,83,85][index],pitLoss:[22,23,22,21,20,19,22,21,23,25,21,20,24,23,25,24,25,23,22,21,24,23,22][index]}));

export const WEEKLY_EVENTS = [
  { id: "evt-ops", title: "Pressão operacional", text: "A sequência de trabalho elevou a fadiga do departamento de Operações.", morale: -1, confidence: -1, cash: 0 },
  { id: "evt-press", title: "Entrevista positiva", text: "Uma entrevista clara melhorou a percepção pública do projeto.", morale: 1, confidence: 1, reputation: 1 },
  { id: "evt-audit", title: "Auditoria preventiva", text: "A equipe financeira identificou custos comprometidos antes do fechamento.", morale: 0, confidence: 2, cash: -180_000 },
  { id: "evt-culture", title: "Workshop de liderança", text: "A comunicação entre departamentos melhorou.", morale: 2, confidence: 1, cash: -120_000 },
  { id: "evt-quiet", title: "Semana estável", text: "Os departamentos executaram o plano sem desvios relevantes.", morale: 1, confidence: 0, cash: 0 },
];

export const NAV_ITEMS = [
  ["overview", "Visão geral"], ["inbox", "Central de e-mails"], ["people", "Pessoas"], ["contracts", "Contratos"],
  ["sponsors", "Patrocínios"], ["finances", "Finanças"], ["board", "Conselho"],
  ["engineering", "Engenharia"], ["car", "Carro"], ["weekend", "Fim de semana"], ["telemetry", "Telemetria"],
  ["championship", "Campeonato"], ["career", "Carreira"], ["settings", "Acessibilidade"], ["archive", "Arquivo visual"], ["roadmap", "4 Partes"],
];
