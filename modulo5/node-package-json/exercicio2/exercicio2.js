function fazOperacao() {
   const operacao = process.argv[2]
   const x = Number(process.argv[3])
   const y = Number(process.argv[4])
   
   switch (operacao) {
    case "soma":
        return x + y
    case "sub":
        return x - y
    case "mult":
        return x * y
    case "div":
        return x / y
    default:
        return "errado"
   }
}

console.log(fazOperacao())
