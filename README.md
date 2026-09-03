# F1 - Vale Gold Edition - Partes 1, 2 e 3

Versão jogável das macroentregas **Fundação, Carreira e Gestão**, **Engenharia e Fim de Semana** e **Corrida 2D completa**, conforme a Bíblia Mestra.

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

- Criação de diretor e escolha entre as 11 equipes da temporada 2026.
- 22 titulares oficiais, Yuki Tsunoda no mercado/reserva e revelações fictícias separadas.
- Overall pesquisado e documentado, sem persistir pontos ou posição de campeonato.
- Gestão de pilotos, staff, contratos, salários, rescisões, moral e fadiga.
- Negociação de patrocínios, exclusividade, campanhas e valor de marca.
- Caixa, forecast departamental, teto de custos versionado e auditoria.
- Conselho, metas, confiança, demissão, propostas e continuidade da carreira.
- Avanço semanal com consequências determinísticas e histórico.
- Save local, backup, exportação, importação e migração.
- Arquivo visual com os 110 assets fornecidos, renomeados e otimizados.
- Abertura em vídeo com áudio após o toque/clique inicial.
- Orientação horizontal solicitada em celulares e tentativa de tela cheia/bloqueio de paisagem.
- P&D em aerodinâmica, chassi, unidade de potência e confiabilidade.
- Capacidade da fábrica, custos, duração e ganhos persistidos dos projetos.
- Calendário oficial 2026 com 23 etapas, bandeiras dos países e traçados 2D próprios.
- TL1, TL2 e TL3 ao vivo, com envio e recolhimento dos dois pilotos e acerto durante a sessão.
- Classificação completa em Q1, Q2 e Q3, eliminações e grid de 22 carros.
- Corrida 2D ao vivo com classificação estilo TV, velocidades de 1× a 8× e direção de prova.
- Estratégia individual de ritmo, motor, composto, janela de box e pit stop manual.
- Desgaste de pneus, temperatura, energia e decisões com efeito direto no ritmo.
- Pódio com fotos oficiais, troféus persistidos e histórico do resultado.

## Assets oficiais

Retratos reais dos pilotos e logotipos das equipes e dos patrocinadores foram obtidos da página oficial da Fórmula 1, incorporados ao pacote e documentados em `data/official-media-manifest.json`. As imagens e marcas são propriedade de seus respectivos titulares e aparecem em contexto editorial de uma simulação fictícia, sem afiliação ou endosso. O jogo não cria imitações de pilotos ou marcas oficiais.

## Escopo

As Partes 1, 2 e 3 estão jogáveis e usam o mesmo estado. Carreira longa, acessibilidade, balanceamento avançado e integração final permanecem na Parte 4.
