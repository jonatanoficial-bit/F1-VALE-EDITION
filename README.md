# F1 - Vale Gold Edition - Parte 1

Versão jogável da macroentrega **Fundação, Carreira e Gestão**, conforme a Bíblia Mestra.

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

## Assets oficiais

Logos de equipes e retratos de pilotos só são exibidos quando seus arquivos licenciados são vinculados aos IDs em `data/official-assets-expected.json`. Enquanto faltam arquivos oficiais identificados, a interface usa texto e iniciais; não há imitação gerada.

## Escopo

As Partes 2, 3 e 4 aparecem no roadmap interno e reutilizarão o mesmo estado. Engenharia, fim de semana, corrida 2D e integração final não são simulados nesta entrega.
