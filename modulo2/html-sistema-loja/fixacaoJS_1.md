function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 let valorPorCarros = qtdeCarrosVendidos * 100
 let comissaoPorCarros = valorTotalVendas * 0.05
 let salarioFixo = 2000
 let salario = comissaoPorCarros + salarioFixo + valorPorCarros
 return salario
}