const { calculaFrete } = require('../orderUtils');

describe("calculaFrete", () => {
  test("Calculo do frete considerando a distância e o peso", () => {
    expect(calculaFrete(200, 5)).toBe("215.00");
    expect(calculaFrete(500, 10)).toBe("1025.00");
  });

  test("Usando a taxa padrão", () => {
    expect(calculaFrete(50, 2)).toBe("64.00");
  });

  test("Especificando uma taxa", () => {
    expect(calculaFrete(50, 2, 10)).toBe("64.00");
  });

  test("lança um erro se a distância ou peso forem 0 ou negativos", () => {
    expect(() => calculaFrete(0, 10)).toThrow("A distancia e o peso devem ser maior que 0");
    expect(() => calculaFrete(10, -5)).toThrow("A distancia e o peso devem ser maior que 0");
  });
});

describe("calculaFrete", () => {
  test("calcula o frete básico", () => {
    expect(calculaFrete(100, 1)).toBe("112.00");
  });

  test("calcula o frete considerando a distância e o peso", () => {
    expect(calculaFrete(200, 5)).toBe("220.00");
    expect(calculaFrete(500, 10)).toBe("530.00");
  });

  test("usa a taxa padrão quando a taxa não é fornecida", () => {
    expect(calculaFrete(50, 2)).toBe("64.00");
  });

  test("permite especificar uma taxa personalizada", () => {
    expect(calculaFrete(50, 2, 10)).toBe("64.00");
  });

  test("lança um erro se a distância ou peso forem 0 ou negativos", () => {
    expect(() => calculaFrete(0, 5)).toThrow("A distancia e o peso devem ser maior que 0");
    expect(() => calculaFrete(100, 0)).toThrow("A distancia e o peso devem ser maior que 0");
    expect(() => calculaFrete(-100, 5)).toThrow("A distancia e o peso devem ser maior que 0");
  });
});