# React

## Vad är React

- Ett bibliotek för att hantera UI:n
- State-baserat
- JSX
  `const element = <div>Hello, {name}</div>;`
- Komponent-baserat

## React-komponenter

- Klassbaserade med livscykelmetoder
- Funktionsbaserade med hooks
- Props - tas emot externt
- State - hanteras internt
- När state eller props förändras anropas alltid render

## Livscykelmetoder
- constructor
- render
- setState
- componentDidMount
- componentDidUpdate
- componentWillUnmount

## Hooks
- useState
- useEffect
- useRef

## Förbereda kodbasen för React

- Se till att vi har ett React-preset för BabelJS
- Se till att vi anpassar vår webpack-config så vi också kan hantera .jsx-filer
- Installera React
- Installera React-DOM (what is this sorcery?)

## Stretch Goal - Uppgift

- Skapa ett gäng React-komponenter som uppdateras/ritas ut baserat på data från vårt REST-API
    - App-komponent
    - Input-komponent
    - List-komponent
    - Item-komponent
    
## Läs mer
- Hooks - https://reactjs.org/docs/hooks-reference.html
- Lifecycle Methods - https://reactjs.org/docs/react-component.html
- Awesome React - https://github.com/enaqx/awesome-react
