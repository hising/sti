## STI - JavaScript - Uppgift 2

Mål: Lära oss mer om grundläggande saker i moderna dialekter av JavaScript (ES6, ES2015+)
Mål: Lära oss vad asynkron kod innebär och vilka olika sätt det finns att hantera asynkron kod

## Uppgifter:

- __exportera__ multiplierTable från `src/functions.js`
- __importera__ multiplierTable i `src/index.js`
- rendera resultatet från multiplierTable som HTML i `appElement`
- skriv en ny funktion som multiplierTable med hjälp av de funktioner som finns i `src/functions.js` så den bara skriver ut multiplikationstabeller för jämna siffror
- skriv en ny funktion som tar två strängar som argument, kombinerar ihop dessa med en befintlig text, som klarar att ropas på med 0, 1 och 2 strängar (hint: template string, default argument alt. unknown number of arguments)
- skriv en ny funktion som kan exporteras som är async som hämtar data från `https://jsonplaceholder.typicode.com/posts` och returnerar en array med posts.
- __importera__ ovan nämnda funktion i `src/index.js` och ropa på den i ett async/await-mönster och skriv ut något till HTML. (Pluspoäng om du kan skriva ut "Laddar innehåll" medan den hämtar data)

## Vad har vi lärt oss?

- Hur `export` och `import` fungerar
- Hur vi skriver funktioner i shorthand `() => {}`
- Hur vi hanterar okänt antal argument till en funktion
- Hur vi kan sätta default värden på ett argument
- Hur vi kan använda oss av `template strings` för att konkatenera strängar
- Hur vi skriver en `async` funktion och ropar på den

## Läs mer om

- Arrow Functions - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- Arrays - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- Destructuring - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
- Spread Syntax - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
- Spread and Rest Operator - https://medium.com/@luke_smaki/javascript-es6-spread-operator-and-rest-parameters-b3e89d112281
- Template Strings - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
- Default Arguments - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
- Async/Await - https://javascript.info/async-await

## Om du vill gräva djupare

- This - https://www.codementor.io/@dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc

