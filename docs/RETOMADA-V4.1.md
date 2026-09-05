# Ponto de retomada — v4.1

Checkpoint histórico salvo em 04/09/2026 para permitir o desligamento seguro do computador. A implementação foi concluída e validada em 05/09/2026; consulte `ENTREGA-V4.1.md`.

## Base estável anterior

- Versão concluída: v4.0.0
- Commit: `225dda97a46d58b746b20fae1e62924d55790720`
- ZIP: `outputs/F1-VALE-GOLD-EDITION-PARTES-1-2-3-E-4-v4.0.0.zip`
- Publicação de teste: `https://f1-vale-gold-edition.empengenhariadaprodu.chatgpt.site`

## Trabalho iniciado na v4.1

### Dados e versão

- Versão alterada para `4.1.0` e schema de save para `5`.
- Regulamento identificado como `f1vge-rules-2026-v4.1`.
- Fins de semana Sprint marcados em China, Miami, Canadá, Grã-Bretanha, Países Baixos e Singapura.

### Engine de carreira

- Estatísticas de temporada adicionadas para corridas, Sprints, Safety Cars, VSCs, bandeiras vermelhas, abandonos e penalidades.
- Encerramento da temporada não volta mais automaticamente à primeira etapa.
- Resumo final da temporada com campeões de pilotos e construtores.
- Pontuação de corrida e Sprint centralizada nas funções `recordRaceResult` e `recordSprintResult`.
- Troca de equipe por proposta preserva o fim de semana e o campeonato em andamento.
- Migração inicial de saves antigos para o schema 5.
- Propostas vencidas são removidas ao processar a semana.

### Fim de semana ao vivo

- Estrutura inicial para energia ERS, combustível, danos, avisos de limites de pista, penalidades, DRS, abandonos, planos de paradas e modo de ERS.
- Estrutura inicial para Sprint, rádio, direção de prova, neutralizações e estatísticas.
- Torre de tempos preparada para exibir DNF e penalidades.
- HUD preparado para mostrar velocidade/DRS, pneus, combustível, ERS, danos e paradas.
- Controles adicionados para ritmo, motor, ERS, estratégia de uma a três paradas, próximo pneu e chamada aos boxes.
- Painel de rádio adicionado.

## Validação feita neste checkpoint

- `node --check src/live-weekend.mjs`: aprovado.
- `node --check src/engine.mjs`: aprovado.
- Na data deste checkpoint a implementação ainda estava em andamento; todos os itens abaixo foram concluídos na entrega v4.1.0.

## Próximas tarefas obrigatórias

1. Implementar as transições e os efeitos de Safety Car, Virtual Safety Car e bandeira vermelha no `raceTick`.
2. Implementar acidentes, abandonos, falhas mecânicas, limites de pista, investigações e penalidades.
3. Fazer combustível, ERS, DRS e danos alterarem efetivamente ritmo, ultrapassagens e confiabilidade.
4. Executar corretamente estratégias de uma, duas e três paradas, incluindo reparos e diferença de desempenho das equipes de boxe.
5. Completar a sequência dos fins de semana Sprint e registrar a pontuação com `recordSprintResult`.
6. Refatorar a conclusão da corrida para usar `recordRaceResult` sem duplicar pontuação ou troféus.
7. Finalizar o CSS do novo HUD e testar diferentes tamanhos de tela, especialmente celular horizontal.
8. Atualizar e executar os testes para o schema 5, demissão, troca de equipe e saves.
9. Criar e executar uma simulação automatizada de uma temporada completa.
10. Auditar as imagens no GitHub Pages, executar build e teste no navegador e somente então gerar o ZIP e publicar.

## Como retomar

Projeto: `C:\Users\jonat\Documents\Codex\2026-09-02\files-mentioned-by-the-user-f1\work\f1-vale-gold-edition-parte-1`

Primeira ação recomendada: continuar em `src/live-weekend.mjs`, integrando os eventos de corrida ao `raceTick`, e depois ligar `finishRace` às funções centralizadas do engine.
