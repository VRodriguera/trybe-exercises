const math = require('./math');
jest.mock("./math");

describe('Testa as funções de Math', () => {

    it('#subtrair', () => {

        math.subtrair.mockImplementation((a, b) => a - b);

        math.subtrair(8, 2);

        expect(math.subtrair(8, 2)).toBe(6);

        expect(math.subtrair).toHaveBeenCalled();

    });

    it('#multiplicar', () => {

        math.multiplicar = jest.fn().mockReturnValue(69)

        expect(math.multiplicar()).toBe(69);

    });

    it('#somar', () => {

        const mockSomar = jest.spyOn(math, "somar");

        math.somar(10, 5);

        expect(math.somar(10, 5)).toBe(undefined);

        expect(math.somar).toHaveBeenCalled();

        expect(math.somar).toHaveBeenCalledWith(10, 5);

    });

    test("#dividir", () => {

        math.dividir = jest
            .fn()
            .mockReturnValue(15)
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(5);

        expect(math.dividir).toHaveBeenCalledTimes(0);

        expect(math.dividir()).toBe(2);
        expect(math.dividir).toHaveBeenCalledTimes(1);

        expect(math.dividir()).toBe(5);
        expect(math.dividir).toHaveBeenCalledTimes(2);

        expect(math.dividir()).toBe(15);
        expect(math.dividir).toHaveBeenCalledTimes(3);
    });

    test("#subtrair", () => {
        // testando a implementação original, o mock e a restauração da função original

        // implementação original
        expect(math.subtrair(8, 2)).toBe(6);

        // criando o mock e substituindo a implementação para uma soma
        const mockSubtrair = jest
            .spyOn(math, "subtrair")
            .mockImplementation((a, b) => a + b);

        math.subtrair(5, 1);
        expect(mockSubtrair).toHaveBeenCalledTimes(4);
        expect(mockSubtrair(5, 1)).toBe(6);
        expect(mockSubtrair).toHaveBeenCalledTimes(5);
        expect(mockSubtrair).toHaveBeenLastCalledWith(5, 1);

        // restaurando a implementação original
        math.subtrair.mockRestore();

        math.subtrair.mockImplementation((a, b) => a - b);

        expect(math.subtrair(8, 2)).toBe(6);
    });
})
