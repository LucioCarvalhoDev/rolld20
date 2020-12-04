<h1>rolld20</h2>

<p> Uma calculadora de dados desenvolvida tendo como foco jogaroes de RPG. Para ser usado basta escrever a expressão que deseja calcular sem usar espaços e clicar em roll.</p>
<p> Cada dado é representado como <b>ydx</b>, onde x representa qual o tipo de dado e y a quantidade de vezes que a rolagem deve ser feita. Caso x seja 1, ele pode ser omitido.</p>

<h2>Exemplos:</h2>

"1d6" -> retorna um valor entre 1 e 6;<br>
"d4+10" -> retorna um valor entre 11 e 14;<br>
"1d20-1d6-1" retorna um valor entre -6 e 18;<br>

<h2>Como funciona?</h2>

<ol>
  <li>Pega a string do input com um querySelector;</li>
  <li>Armazena todos as rolagens e valores no array <b>dices</b>;</li>
  <li>Intera por <b>dices</b> com um map resolvendo cada uma das rolagens e as guarda em <b>values</b>;</li>
  <li>Isola no array <b>operators</b> todos os operadores(+,-) usando regex;</li>
  <li>Intercala os elementos de <b>values</b> e <b>operators</b> numa unica string;</li>
  <li>A string é resolvida usando o metodo eval;</li>
</ol>
