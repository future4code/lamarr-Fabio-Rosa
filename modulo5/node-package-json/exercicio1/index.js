// a) Utilizando o process.argv a partir do indice 2

// b) e C)

function meApresetando () {
    const nome = process.argv[2]
    const idade = Number(process.argv[3])
    console.log(`Ola, ${nome} ! você tem ${idade} anos, daqui a 7 anos vai ter ${idade + 7}`)
}


//letra c)

meApresetando()

