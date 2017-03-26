/**
 * Created by f46io on 26/03/2017.
 */
describe("suite de testes de adicao", function(){
    var Calculadora = require('../../src/js/calculadora.js');
    it("deve retornar 5 de dois mais 3", function () {
       expect(Calculadora.adicionar(2, 3)).toEqual(5);
    });
    it("deve retornar 6 para 9 texto", function () {
        expect(Calculadora.adicionar('9', '-3')).toEqual(6);
    });
    it("deve retornar 4.5 para 1.5 e 3", function () {
       expect(Calculadora.adicionar(1.5, 3)).toEqual(4.5);
    });
    it("validar o primeiro valor", function () {
       expect(Calculadora.adicionar(undefined, 10)).toEqual(0);
    });
    it("validar o primeiro valor", function () {
        expect(Calculadora.adicionar(10, undefined)).toEqual(0);
    });

});