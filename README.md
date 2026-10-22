# F1 - Vale Gold Edition - Partes 1, 2, 3 e 4

Versão completa das quatro macroentregas da Bíblia Mestra: gestão, engenharia, fim de semana, corrida 2D e carreira integrada.

## Atualização V5 — Crie sua equipe

Além de assumir uma escuderia existente, a nova carreira oferece a entrada **Criar minha equipe**. O construtor criado pelo jogador recebe nome, sigla, paleta, livery, emblema-base, número de corrida e perfil de investimento. Ele não é apenas cosmético: entra como o 12º construtor com dois carros no grid, orçamento, metas, staff, pilotos, campeonato, resultados e save persistente.

Os emblemas-base e liveries desta versão são originais e parametrizados por código. Pacotes oficiais licenciados podem ser adicionados posteriormente sem modificar o formato do save; contratos e evidências de licença não devem ser publicados no repositório.

### Fases de melhoria

1. **Base mobile e criação da equipe** — entregue: carreira customizada, 12º construtor, livery, save e grid de 24 carros.
2. **Direção da equipe criada** — em entrega: projeto fundador, parceiro inicial, capital, marca e ganho técnico que afeta a corrida.
3. **Pit wall de decisão** — aprofundar estratégia, Safety Car/VSC, recomendações explicáveis e consequências pós-corrida.
4. **Carreira de longo prazo** — progressão de academia, mercado, P&D e patrocínios por temporada.
5. **Qualidade mobile e acessibilidade** — testes de aparelhos reais, performance, telas seguras, contraste e navegação.
6. **Preparação de lançamento** — pacote Steam, telemetria opt-in, conteúdo oficial licenciado, QA e requisitos de publicação em plataformas.

## Jogar localmente

O jogo é um site estático. Sirva a pasta publicada com qualquer servidor HTTP:

```powershell
python -m http.server 8080
```

Abra `http://localhost:8080` no navegador. O save é automático e fica no armazenamento local. Também é possível exportar e importar o save em JSON.

## Publicar no GitHub Pages

1. Crie um repositório e envie todo o conteúdo desta pasta para a raiz da branch principal.
2. No GitHub, abra **Settings > Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**, a branch principal e a pasta `/ (root)`.
4. Salve e aguarde o endereço publicado.

## O que está jogável

- Criação de diretor, escolha entre as 11 equipes da temporada 2026 ou criação do 12º construtor.
- Identidade jogável da equipe criada: paleta, quatro pinturas 2D, seis emblemas-base, número e perfil de entrada persistentes.
- 22 titulares oficiais; a equipe criada adiciona dois carros ao grid de 24 pilotos e adapta Q1/Q2/Q3 para o novo tamanho de grid.
- Overall pesquisado e documentado, sem persistir pontos ou posição de campeonato.
- Gestão de pilotos, staff, contratos, salários, rescisões, moral e fadiga.
- Negociação de patrocínios, exclusividade, campanhas e valor de marca.
- Caixa, forecast departamental, teto de custos versionado e auditoria.
- Conselho, metas, confiança, demissão, propostas e continuidade da carreira.
- Calendário diário que para automaticamente quando chega o fim de semana de corrida.
- Metas contratuais, revisões trimestrais, advertências, demissão e propostas em janelas do mercado.
- Central de e-mails com Vale e funcionários originais de engenharia, mecânica, finanças, marketing, direção esportiva, RH e clima.
- Save local, backup, exportação, importação e migração.
- Arquivo visual com os 110 assets fornecidos, renomeados e otimizados.
- Abertura em vídeo com áudio após o toque/clique inicial.
- Orientação horizontal solicitada em celulares e tentativa de tela cheia/bloqueio de paisagem.
- Botão de início reposicionado ao lado do logotipo em telas horizontais baixas, preservando acesso mesmo quando o navegador não aceita tela cheia.
- P&D em aerodinâmica, chassi, unidade de potência e confiabilidade.
- Capacidade da fábrica, custos, duração e ganhos persistidos dos projetos.
- Calendário oficial 2026 com 23 etapas, bandeiras dos países e traçados 2D próprios.
- TL1, TL2 e TL3 ao vivo, com envio e recolhimento dos dois pilotos e acerto durante a sessão.
- Classificação completa em Q1, Q2 e Q3, eliminações e grid de 22 ou 24 carros conforme a carreira.
- Corrida 2D ao vivo com classificação estilo TV e escalas 1×, 2×, 3×, 4× e 8× recalibradas.
- Torre de tempos com bandeira/nacionalidade, diferença em segundos ou voltas, indicação de box e status DNF.
- Direção de prova com bandeiras verde, amarela, vermelha, preta e branca e quadriculada, além de Safety Car e Virtual Safety Car.
- Acidentes, falhas mecânicas, abandonos, limites de pista, investigações e penalidades com consequências esportivas.
- Estratégia individual de ritmo, motor, composto, janela de box e pit stop manual.
- Combustível, ERS, DRS, tráfego, temperatura e danos alteram o ritmo e a confiabilidade em tempo real.
- Voltas em 1× próximas do tempo real de cada circuito e aceleração progressiva até 8×.
- Estratégias de uma, duas ou três paradas; parada obrigatória em prova seca e dois compostos.
- Pit stop contabiliza entrada, serviço e saída, com perda diferente por circuito e serviço conforme equipe/mecânicos.
- Seis fins de semana Sprint integrados, com classificação Sprint, prova curta, pontos próprios e continuidade para a classificação do GP.
- Rádio da equipe e alertas de engenharia, clima, direção de prova e box durante a corrida.
- Clima dinâmico, pista molhada, temperatura de pista/pneu, cinco compostos e decisões com efeito direto no ritmo.
- Pódio com fotos oficiais, troféus persistidos e histórico do resultado.
- Classificações acumuladas de pilotos e construtores.
- Identidade visual por escuderia e opções de escala de texto, alto contraste e redução de animações.
- Controles principais com alvos de toque ampliados para telas móveis; interface de corrida preserva comandos compactos em paisagem baixa.
- Simulação automatizada de todas as 23 etapas valida temporada completa, seis Sprints, campeonato, troféus, save e migração.

## Assets oficiais

Retratos reais dos pilotos e logotipos das equipes e dos patrocinadores foram obtidos da página oficial da Fórmula 1, incorporados ao pacote e documentados em `data/official-media-manifest.json`. As imagens e marcas são propriedade de seus respectivos titulares e aparecem em contexto editorial de uma simulação fictícia, sem afiliação ou endosso. O jogo não cria imitações de pilotos ou marcas oficiais.

## Escopo

As quatro partes estão jogáveis e compartilham o mesmo save migrável. A temporada-base permanece 2026, com os pilotos e construtores definidos pelo projeto.
