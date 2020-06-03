## Torsdag - eftermiddag

## Modern JavaScript

-   ES6, ES2015 (och nyare)
-   Funkar det i alla browsers? Nja. Därför BabelJS
-   let, const, export, import, default;
    - let kan tilldelas om
    - const är __nästan__ en konstant
    - when in doubt, use const (IMO), let for local variables and loops etc.
    - `export const varName = "value";`
    - `export default const varName = "value";`
    - `import { varName } from "./module";`
    - `import varName from "./module";`

-   String, Array, Objects, Functions, Desctructuring, Spread, Templates
    - Template Strings 
        - ```
          let myString = `My template string with ${varName}`;
          ```
    - Array and Object Destructuring
        - `const [ a, b ] = arr;`
        - `const { a, b } = obj;`
    - Array and Object Spread
        - `const c = [...a, ...b];`
        - `const c = {...a, ...b};`
    - Function Default Arguments
        - `const myFunc = (a, b = false) => {};`
        - `const myFunc = ({a, b = false}) => {};`
    - Function Unknown Arguments (Spread)
        - `const myFunc = (...args) => {};`
        - `const myFunc = (a, b = false, ...args) => {};`
        - ```
          function myFunc () {
            let args = arguments;
          }
          ```

## Asynkron kod

-   Akta dig för spaghettin
-   Vad är skillnaden mellan synkron och asynkron kod?
-   Vilka delar i JS-kod är asynkrona? Events, Timers, HTTP-requests, Permissions
-   Vilka sätt finns det att hantera asynkron kod i JavaScript?
    -   Callback(-hell)
    -   Promises
    -   Async/await
-   Race Condition
-   Hur hantera ett UI när all data kommer asynkront? Hint: det är knepigt

Gör uppgift 2. Om du blir klar innan avrundning kl 15:30, läs mer på __Läs mer om__ och __Om du vill gräva djupare__
