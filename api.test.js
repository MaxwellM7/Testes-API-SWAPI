const request = require('supertest');
const urlbase = "https://swapi.dev/api";

describe("Teste da API SWAPI do STAR WARS!", () => {

    // Requisitando o primeiro planeta
    test("Nome do planeta 1:", async () =>{
        const resposta = await request(urlbase).get('/planets/1');
        expect(resposta.status).toBe(200);
        expect(resposta.body).toHaveProperty("name", "Tatooine");
        console.log("Nome do primeiro Planeta:", resposta.body.name);
    });

    // Requisitando o segundo planeta
    test("Nome do planeta 2:", async () =>{
        const resposta = await request(urlbase).get('/planets/2');
        expect(resposta.status).toBe(200);
        expect(resposta.body).toHaveProperty("name", "Alderaan");
        console.log("Nome do segundo Planeta:", resposta.body.name);
    });

    // Requisitando a população do primeiro planeta
    test("População do planeta 1:", async () =>{
        const resposta = await request(urlbase).get('/planets/1');
        expect(resposta.status).toBe(200);
        expect(resposta.body).toHaveProperty("population", "200000");
        console.log("População do Segundo Planeta:", resposta.body.population);
    });

    // Requisitando o clima do segundo planeta
    test("Clima do planeta 2:", async () =>{
        const resposta = await request(urlbase).get('/planets/2');
        expect(resposta.status).toBe(200);
        expect(resposta.body).toHaveProperty("climate", "temperate");
        console.log("Clima do segundo Planeta:", resposta.body.climate);
    });

    // Requisitando a primeira nave
    test("Dados da nave 1:", async () =>{
        const resposta = await request(urlbase).get('/starships/2');
        expect(resposta.status).toBe(200);
        expect(resposta.body).toHaveProperty("name", "CR90 corvette");
        console.log("Nome da primeira nave:", resposta.body.name);
    });

    // Requisitando a segunda nave
    test("Dados da nave 2:", async () =>{
        const resposta = await request(urlbase).get('/starships/3');
        expect(resposta.status).toBe(200);
        expect(resposta.body).toHaveProperty("name", "Star Destroyer");
        console.log("Nome da segunda nave:", resposta.body.name);
    });

    // Requisitando titulo do primeiro filme
    test("Titulo do primeiro filme:", async () =>{
        const resposta = await request(urlbase).get('/films/1');
        expect(resposta.status).toBe(200);
        expect(resposta.body).toHaveProperty("title", "A New Hope");
        console.log("Titulo do primeiro filme:", resposta.body.title);
    });

    // Requisitando titulo do segundo filme
    test("Titulo do segundo filme:", async () =>{
        const resposta = await request(urlbase).get('/films/2');
        expect(resposta.status).toBe(200);
        expect(resposta.body).toHaveProperty("title", "The Empire Strikes Back");
        console.log("Titulo do segundo filme:", resposta.body.title);
    });

    // Requisitando endpoints inexistentes
    test("Retorna ERROR404 para o heroi inexistente", async () => {
        const resposta = await request(urlbase).get('/heroes');
        expect(resposta.status).toBe(404);
        console.log("Heroi não encontrada.");
    });

    test("Retorna ERROR404 para o vilão inexistente", async () => {
        const resposta = await request(urlbase).get('/villains');
        expect(resposta.status).toBe(404);
        console.log("Vilão não encontrada.");
    });
});

