# Retomada segura — Parte 4

Checkpoint criado em 03/09/2026 a pedido do usuário, antes da renovação da cota.

## Estado entregue e preservado

- Partes 1, 2 e 3 estão implementadas no mesmo projeto e no mesmo save migrável.
- Versão-base preservada no primeiro checkpoint: `3.0.0-p3`, schema 3. A integração concluída está em `4.0.0`, schema 4.
- Calendário com 23 etapas de 2026, TL1/TL2/TL3, Q1/Q2/Q3, corrida 2D, pódio e troféus.
- Vídeo de abertura, modo horizontal no celular, pilotos oficiais, equipes oficiais e imagens locais já integrados.
- Testes da Parte 3 haviam passado: motor, build, validação e smoke test no navegador.
- ZIP entregue anteriormente: `outputs/F1-VALE-GOLD-EDITION-PARTES-1-2-E-3-v3.0.0.zip`.

## Parte 4 — requisitos confirmados

### Identidade visual por equipe

- Aplicar tema dinâmico ao painel inteiro conforme a equipe escolhida.
- Ferrari: vermelho; Mercedes: preto com detalhes da marca; Williams: azul; demais equipes com suas cores.
- Manter logos oficiais e retratos reais de pilotos em maior evidência.
- Corrigir os logos de patrocinadores brancos que atualmente desaparecem sobre cartões brancos; usar base escura e contraste adequado.
- Manter artes fornecidas pelo usuário; não inserir arte de demonstração no lugar de pilotos, equipes ou patrocinadores oficiais.

### Ritmo realista das sessões

- 1x: duração de volta próxima do tempo real do circuito.
- 2x: aproximadamente 20% menos tempo que 1x.
- 4x: aproximadamente 70% menos tempo que 1x.
- 8x: modo muito rápido, aproximadamente 95% menos tempo que 1x.
- Incluir tempo-base de volta por circuito e preservar diferenças de piloto, equipe, acerto, pneus, combustível e clima.
- Criar modo interno de teste rápido para a validação automatizada, sem alterar o ritmo normal do jogador.

### Corrida, boxes, clima e pneus

- Parada obrigatória em corrida seca e uso de dois compostos de slick diferentes.
- IA e equipe do jogador devem respeitar a regra; chamada manual continua disponível, com chamada automática de segurança no fim da janela.
- Tempos de pit-stop equilibrados por qualidade da equipe e mecânicos, incluindo tempo de serviço e perda no pit lane.
- Pneus macio, médio, duro, intermediário e chuva com desgaste, temperatura e janela de aderência próprias.
- Clima dinâmico com temperatura do ar/pista, intensidade de chuva, pista molhada, previsão e transição gradual.
- Estratégias e ritmo precisam reagir a pneus, motor, combustível, tráfego, clima, desgaste e incidentes.

### Carreira diária e contrato do chefe de equipe

- Substituir o destaque genérico de “avançar semana” por “avançar dias”, como em jogos manager.
- O calendário deve avançar dia a dia até atividades e fim de semana de corrida.
- Ao chegar à corrida, levar o jogador ao fim de semana, sem pular o GP.
- Cada equipe oferece contrato com metas mínimas e expectativas proporcionais à força do time.
- A confiança do conselho deve considerar resultados, finanças, desenvolvimento, moral e metas.
- O usuário pode receber advertências e ser demitido se falhar de forma persistente.
- Gerar propostas de outras equipes sobretudo no início, meio e fim da temporada, coerentes com reputação e desempenho.

### E-mails e personagens de apoio

- Criar central de e-mails/mensagens por setor: mecânica, engenharia, finanças, marketing, direção esportiva, RH e conselho.
- Cada setor terá um personagem/funcionário recorrente com avatar, nome, cargo e função clara.
- Mensagens devem alertar, explicar consequências e oferecer decisões quando necessário.
- Criar tutorial inicial conduzido por “Vale”: jovem negro, cabelo curto, personagem original e guia da carreira.
- Vale e os funcionários podem ter avatares originais; pilotos e logos das equipes permanecem reais/oficiais.

### Parte 4 e acabamento de jogo

- Adicionar classificação acumulada de pilotos e construtores ao save.
- Atualizar pontuação depois de cada GP e exibir campeonato, calendário e histórico.
- Melhorar a sensação de HUD/jogo, reduzindo aparência de site.
- Adicionar opções de acessibilidade (escala de texto, contraste e redução de animação).
- Migrar saves da Parte 3 sem perder progresso.
- Atualizar versão/schema, testes, documentação, build, ZIP e publicação.

## Próxima sequência de trabalho

1. Implementar tema por equipe e correção de logos.
2. Refazer relógio das sessões e modelo de volta.
3. Implementar pneus, clima e boxes obrigatórios.
4. Implementar calendário diário, metas, demissão, propostas e e-mails.
5. Integrar Vale e funcionários-guia com avatares originais.
6. Implementar campeonato e acessibilidade.
7. Migrar save, validar no navegador, gerar o ZIP da Parte 4 e publicar.

## Caminhos de entrega

- Projeto: `C:/Users/jonat/Documents/Codex/2026-09-02/files-mentioned-by-the-user-f1/work/f1-vale-gold-edition-parte-1`
- Pasta de ZIPs: `C:/Users/jonat/Documents/Codex/2026-09-02/files-mentioned-by-the-user-f1/outputs`
- Pasta do usuário para GitHub: `/c/Users/jonat/Desktop/GAME/¨2026/F! VALE EDITION 27`
- Repositório: `https://github.com/jonatanoficial-bit/F1-VALE-EDITION.git`
- GitHub Pages: `https://jonatanoficial-bit.github.io/F1-VALE-EDITION/`

## Checkpoint de implementação — 03/09/2026

Implementado e salvo no código:

- versão 4.0.0 e schema 4;
- temas dinâmicos das 11 equipes e correção dos logos brancos dos patrocinadores;
- sprite original com Vale e sete funcionários de setor, tutorial e central de e-mails;
- calendário diário que para ao chegar ao GP;
- metas, advertências, demissão e propostas periódicas;
- campeonato acumulado de pilotos e construtores;
- escala de texto, alto contraste e redução de movimento;
- tempos-base de volta e perda de pit lane nas 23 pistas;
- velocidades 1×/2×/3×/4×/8× recalibradas;
- clima, pista molhada, temperatura dos pneus e compostos de chuva;
- parada obrigatória, troca de composto e serviço por equipe/staff;
- documentação e testes de motor atualizados.

Validação já concluída:

- sintaxe dos módulos principais válida;
- teste do motor passou com calendário diário e migração do schema 4;
- servidor local respondeu HTTP 200 em `http://127.0.0.1:4173/`.

Conclusão da implementação em 04/09/2026:

1. smoke test completo no navegador aprovado, do vídeo/novo save ao pódio;
2. tema da equipe propagado também ao fim de semana ao vivo e navegação lateral ajustada para telas menores;
3. patrocinadores oficiais ganharam faixa escura de alto contraste durante a transmissão;
4. testes de sintaxe, motor, build e verificação estática aprovados;
5. ZIP, checksum e publicação são executados no fechamento desta entrega.
