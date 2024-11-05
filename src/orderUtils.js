function aplicaDesconto (vlPreco, prDesconto) {
    if (prDesconto < 0 || prDesconto > 100) {
        throw new Error("O desconto deve ser entre 0% e 100%");
    }

    return (vlPreco - (vlPreco * (prDesconto / 100)));
}

function calculaFrete(distancia, peso, taxa = 10) {
    if (distancia <= 0 || peso <= 0) {
        throw new Error("A distancia e o peso devem ser maior que 0");
    }

    const precoKg = 2.00;
    const precoKm = 1.00;
    
    const custoPeso = peso * precoKg;
    const custoDistancia = distancia * precoKm;
    
    const vlFrete = custoPeso + custoDistancia + taxa;
    return vlFrete.toFixed(2);
}

module.exports = { aplicaDesconto, calculaFrete };