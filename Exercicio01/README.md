# **Exercício 01 da Disciplina de Dev. Web II**

### O intuito deste exercício é colocar em prática os conhecimentos obtidos em sala de aula, na plataforma de aplicação **`NODE.js`**.


### **Problema passado pelo professor:**
   Criar uma aplicação que consiga ler um arquivo na extensão .txt, extrair deste arquivo as 10 palavras mais repetidas com mais de 3 letras, e ilustrar estas palavras em um gráfico, dentro de uma pagina HTML. 

### **Resumo da solução do problema:**
  Para criar esta aplicação foi desenvolvido um servidor com Node.js do qual ele recebe arquivos com a extensão .txt (através do [Multer](https://www.npmjs.com/package/multer)), ou texto digitado no front-end e realiza a leitura deste arquivo extraindo as palavras mais repetidas. Estas palavras são ilustradas em uma pagina HTML, que o próprio servidor irá executar, e através da biblioteca [Chart.js](https://www.chartjs.org/) estas palavras são ilustradas em um gráfico.
___

<p align="center" >
<img src='https://github.com/patrickhl94/Disciplina_Faculdade_Dev_Web_II/blob/master/Exercicio01/screenshots/Captura%20de%20tela%20de%202020-02-28%2023-11-58.png?raw=true' width="100%" title="hover text">
</p>

___
### **Requisitos para executar a aplicação:**
* [Node.js](https://nodejs.org/en/) instalado
* [Npm](https://www.npmjs.com/get-npm) instalado
* Terminal para comandos

### **Ferramentas utilizadas nesta aplicação:**
* Node.js
* Chart.js
* Depedências
  * Multer
  * Nodemon
  * Express
  * ESLint (Formatar o código)
  * Prettier (Formatar o código)

### **Instruções para executar a aplicação**
Após baixar a pasta `Exercicio01`, na raiz desta pasta executar o comando `npm install`. Após realizar este comando, abrir o navegador e entrar no endereço (`http://localhost:3300`).
  
