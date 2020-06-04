# STI - JavaScript

Uppgift 1 - Få upp en bra och stabil grund för JavaScript-utveckling i webbläsaren som är best practice 2020. Den här basen ska vi sedan använda för att gå genom ES2015-specifik och annan kod senare.

## Verktyg

- Installera Git - https://git-scm.com/downloads
- Installera Node - https://nodejs.org/en/download/
- Starta en terminal, gå till en folder där du brukar ha projekt
 
```
$ git clone https://github.com/hising/sti.git
$ cd sti
$ npm install
$ npm run start
```

Surfa till http://localhost:8080/ (borde öppnas automagiskt)
Prova att ändra texten i `src/index.js` och kolla in på sidan igen utan att ladda om.

## Vad har vi löst?

- Vi har fått upp git, node och npm, basverktyg för JavaScript-utveckling oberoende om det är på server eller i webbläsaren
- Vi har webpack som låter oss bygga modulärt och kan erbjuda en bra utvecklingsmiljö och anpassade byggen för produktion
- Vi har BabelJS som låter oss skriva ES2015+ kod och tar hand om att göra koden funktionell även i webbläsare som inte än stöder dessa standarder
- Vi har skrivit två npm-script, ett för utveckling (npm run start) och ett för en optimerad version av vår kod (npm run build).
- Vi använder Webpack Dev-server så vi får automatisk live reload, dvs att vårt script/webbsida laddas om när du ändrar i JavaScript-koden
- Vi har använt ett plugin till Webpack för att förenkla hanteringen av embeddning av JavaScript-filer vid produktionsbyggen
- Vi har integrerat BabelJS med Webpack via en loader. En loader är ett plugin som tar hand om en speciell sorts filer, i Babels fall, alla js-filer.

## Läs mer om

- NPM - Pakethanterare - https://docs.npmjs.com/about-npm/
- Webpack - Modulhanterare/bundler - https://webpack.js.org/concepts
- BabelJS - Bakåtkompatibel ES2015+ - https://babeljs.io/
- Webpack Dev Server - https://webpack.js.org/configuration/dev-server/
- HTML Webpack Plugin - https://www.npmjs.com/package/html-webpack-plugin


## Om du vill gräva djupare

- Yarn - Alternativ till NPM - https://yarnpkg.com/
- ParcelJS - Alternativ till Webpack/Babel - https://parceljs.org/
- Webpack Plugin - https://webpack.js.org/plugins/
- Awesome Webpack - https://github.com/webpack-contrib/awesome-webpack
- Awesome Babel - https://github.com/babel/awesome-babel
- Webpack Optimization - https://webpack.js.org/configuration/optimization/
