const { Builder, By, until } = require('selenium-webdriver');
const path = require('path');

let driver;

describe("Teste de Sistema - Calculadora de Frete", () => {
  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
    const filePath = 'file://' + path.resolve(__dirname, '../index.html');
    await driver.get(filePath);
  }, 10000);

  afterAll(async () => {
    await driver.quit();
  });

  test("Cálculo de frete com valores válidos", async () => {
    await driver.wait(until.elementLocated(By.id('distancia')), 5000);
    await driver.sleep(1000);
    await driver.findElement(By.id('distancia')).sendKeys('200');
    await driver.sleep(1000);
    await driver.findElement(By.id('peso')).sendKeys('5');
    await driver.sleep(1000);
    await driver.findElement(By.id('taxa')).clear();
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//button[text()='Calcular Frete']")).click();
    await driver.sleep(1000);

    const resultado = await driver.findElement(By.id('resultado')).getText();
    expect(resultado).toContain("R$");
  }, 20000);

  test("Erro ao calcular frete com valores inválidos", async () => {
    await driver.wait(until.elementLocated(By.id('distancia')), 5000);
    await driver.sleep(1000);
    await driver.findElement(By.id('distancia')).clear();
    await driver.sleep(1000);
    await driver.findElement(By.id('distancia')).sendKeys('0');
    await driver.sleep(1000);
    await driver.findElement(By.id('peso')).clear();
    await driver.sleep(1000);
    await driver.findElement(By.id('peso')).sendKeys('0');
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//button[text()='Calcular Frete']")).click();
    await driver.sleep(1000);

    const resultado = await driver.findElement(By.id('resultado')).getText();
    expect(resultado).toContain("A distancia e o peso devem ser maior que 0");
  }, 20000);

  test("Cálculo de frete com taxa padrão", async () => {
    await driver.wait(until.elementLocated(By.id('distancia')), 5000);
    await driver.sleep(1000);
    await driver.findElement(By.id('distancia')).clear();
    await driver.sleep(1000);
    await driver.findElement(By.id('distancia')).sendKeys('50');
    await driver.sleep(1000);
    await driver.findElement(By.id('peso')).clear();
    await driver.sleep(1000);
    await driver.findElement(By.id('peso')).sendKeys('2');
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//button[text()='Calcular Frete']")).click();
    await driver.sleep(1000);

    const resultado = await driver.findElement(By.id('resultado')).getText();
    expect(resultado).toContain("R$");
  }, 20000);

  test("Cálculo de frete com taxa personalizada", async () => {
    await driver.wait(until.elementLocated(By.id('distancia')), 5000);
    await driver.sleep(1000);
    await driver.findElement(By.id('distancia')).clear();
    await driver.sleep(1000);
    await driver.findElement(By.id('distancia')).sendKeys('50');
    await driver.sleep(1000);
    await driver.findElement(By.id('peso')).clear();
    await driver.sleep(1000);
    await driver.findElement(By.id('peso')).sendKeys('2');
    await driver.sleep(1000);
    await driver.findElement(By.id('taxa')).clear();
    await driver.sleep(1000);
    await driver.findElement(By.id('taxa')).sendKeys('1.5');
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//button[text()='Calcular Frete']")).click();
    await driver.sleep(1000);

    const resultado = await driver.findElement(By.id('resultado')).getText();
    expect(resultado).toContain("R$");
  }, 20000);
});
