# Page-Momentum
O objetivo deste projeto é praticar os conceitos de montagem de página em HTML&CSS através da montagem de uma interface que usa a página inteira, com itens em posições específicas.

## Requisitos de Entrega
* A página deve ser completamente responsiva.
* O autor da frase só aparece se passar o mouse na frase
* Ao aparecer o autor, o tempo não pode mudar de posição
* A imagem deve cobrir toda a tela disponível
* A fonte principal é Helvetica

### Complementos do desenvolvedor

* Implementei uma rotina JavaScrip simples, com o intuito de capturar a hora atual e ter uma página mais dinâmica. Para isso utilizei a função JavaScript 'Date()' que retorna a data e hora atuais e que pode ser inserida do comumento HTML através da manipulação do DOM. A funcção Date() por si só retorna não somente a hora, mas também o dia da semana, o mês, a dia, o ano,minuto,segundo, o GMT e as informações sobre o local. Mas como o intuito era somente obter a hora, criei um objeto date da classe date e duas variáveis 'time_hours' e'time_minutes' e armazenei nelas o valor das horas edos minutos através dos métodos 'date.getHours()' e 'date.getMinutes()', e através do 'innerHTML pude isarir essas informações no documento HTML.

* Como a página também exibe o nome do utilizador ao carregar a página, solicito o nome do usuário através da função 'prompt()', caso o usuario informe o seu nome ele será exibido na tela, se não, é exibido o nome Visitante.



*Link da Página:* https://page-momentum.netlify.app/
