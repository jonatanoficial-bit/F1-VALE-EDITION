# Entrega v4.1.0

Versão concluída em 05/09/2026 a partir do checkpoint `01d534e`.

## Correções principais

- Corrida recalibrada para que o pit stop congele o avanço do carro durante entrada, serviço e saída.
- Perda de box específica de cada circuito e serviço influenciado pela equipe de operações.
- Ranking não concede vantagem artificial a quem realiza mais paradas.
- Regra de parada obrigatória e uso de dois compostos em corrida seca, com penalidade quando descumprida.
- Gaps ao vivo em segundos/voltas, tempo decorrido de corrida e estado `PIT` na torre de tempos.
- Bandeiras de nacionalidade visíveis no PC e celular; código ISO permanece como fallback se a imagem externa falhar.
- Painel de direção de prova com Safety Car, VSC, bandeiras amarela, vermelha, preta/branca e quadriculada.
- Acidentes, falhas, abandonos, limites de pista, investigações, penalidades, combustível, ERS, DRS, danos e tráfego.
- Estratégias de uma a três paradas e fins de semana Sprint completos.
- Botão `INICIAR` sempre acessível ao lado do logotipo no celular horizontal, com tentativa de tela cheia e bloqueio de orientação.
- IA recebe tempo de volta de segurança quando uma sessão acelerada termina antes de completar uma volta; pilotos controlados continuam exigindo envio manual à pista.

## Validação

- `node --check src/live-weekend.mjs`: aprovado.
- `node --check src/engine.mjs`: aprovado.
- `node scripts/test-engine.mjs`: aprovado em 23 corridas e seis Sprints.
- `node scripts/check.mjs`: aprovado.
- Navegador: abertura, criação/continuação de carreira, TL1/TL2/TL3, Q1/Q2/Q3, corrida e pódio concluídos.
- Navegador: bandeiras, gaps, relógio, pit-stop detalhado, rádio e controles de estratégia confirmados.
- Navegador: nenhum erro ou aviso de console durante o teste final.
- Responsividade: botão inicial confirmado em viewport horizontal de 844 × 390.

## Resultado do teste de corrida

No teste do GP da Austrália, o pit stop exibiu entrada, serviço, saída e total próximos de 24,5 segundos. Max Verstappen venceu, e Gabriel Bortoleto terminou fora dos pontos, confirmando que paradas não concedem ganho artificial de posição.
