# CRUD, REST, CORS, Fetch

## Vad är CRUD

- Create
- Read
- Update
- Delete

# Vad är REST

- REST (Representational State Transfer)
- HTTP-metoder
    - POST - Create
    - GET - Read
    - PUT - Update
    - DELETE - Delete
    
# Alternativ till REST

- GraphQL
- RPC (Remote Procedure Call)
- gRPC
- SOAP

# Utmaningar

- Säkerhet
- oAuth, JSON Web Token, Basic Http Auth
- CORS - Cross-Origin Resource Sharing 

# Hands-on

- Skapa en JavaScript-klass som hanterar HTTP-trafik
- Skapa en JavaScript-klass som hanterar en specifik modells CRUD-metoder
- Diskutera hur man kan säkra upp

# Vad har vi gjort?

- Lagt till `@babel/plugin-proposal-class-properties` så vi kan skriva snofsiga klasser i JavaScript
- Skapat en återanvändbar CRUD-http-klient som använder fetch
- Skapat en model/store för att hantera specifika operationer för en modell
- Uppdaterat, läst, skapat och tagit bort från en databas på en annan server (UTAN SÄKERHET)

# Stretch Goal - Uppgift

- Installera Axios och använd axios istället för fetch
- Uppdatera listan med items när en items läggs till, ändras eller tas bort.
