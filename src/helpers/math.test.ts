import { plus, minus, multiply, divide } from './math';

describe('Testando funções matemáticas', () => {

    it('test função somar', () => {
        let result = plus(5, 8);
        expect(result).toBe(13);
    });

    it('test função subtrair', () => {
        let result = minus(4, 3);
        let result2 = minus(8, 4);
        let result3 = minus(3, 3);
        expect(result).toBe(1);
        expect(result2).toBe(4);
        expect(result3).toBe(0);
    });

    it('test função multiplicar', () => {
        let result = multiply(3, 5);
        expect(result).toBe(15);
    });

    it('test função divisão', () => {
        let result = divide(6, 2);
        expect(result).toBe(3);
    });

});

export { };