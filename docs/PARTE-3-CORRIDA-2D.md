# Parte 3 — Corrida 2D completa

Esta entrega amplia o mesmo save das Partes 1 e 2. Não existe uma carreira paralela.

## Fluxo jogável

1. O jogador escolhe uma das 23 etapas do calendário 2026.
2. TL1, TL2 e TL3 funcionam em tempo real, com os dois pilotos controláveis, acerto ao vivo e telemetria.
3. A classificação usa Q1, Q2 e Q3: seis eliminações em Q1, seis em Q2 e dez pilotos em Q3.
4. O resultado forma um grid completo de 22 carros.
5. A corrida usa o grid salvo e permite controlar ritmo, mapa de motor, pneus, janela e chamada de pit stop de cada piloto.
6. Desgaste, energia e temperatura alteram o ritmo; decisões agressivas têm ganho e custo.
7. A chegada gera classificação, pódio, pontuação da prova, histórico e troféu persistido.

## Tempo e transmissão

Todas as sessões podem ser pausadas e aceleradas em 1×, 2×, 3×, 4× ou 8×. O mapa mostra os 22 carros no traçado e a torre lateral atualiza posições e voltas como uma transmissão esportiva.

## Conteúdo 2026

O calendário fica versionado em `data/season-pack-2026.json` e os atributos completos dos circuitos em `data/game-data.mjs`. Os pontos fornecidos originalmente pelo usuário não fazem parte do estado inicial; pontos são criados apenas por corridas disputadas dentro do save.
