const jogadas = () => {
  // gera todas as combinações do tabuleiro
  let jogos = []
  // percorre todas as possibilidades
  for (var i = 0; i <= Math.pow(3,9)-1; i++) {
    let obj = {}
    
    // converte para base 3
    let jogo = (i).toString(3)
    
    // completa com ' ' se necessário 
    jogo = ' '.repeat(9 - jogo.length) + jogo
    jogo = jogo.replace(/0/g, ' ')
    jogo = jogo.replace(/1/g, 'X')
    jogo = jogo.replace(/2/g, 'O')
    
    let jogoArr = jogo.split('')
    
    // matriz do jogo
    let m = [
      jogoArr.slice(0,3),
      jogoArr.slice(3,6),
      jogoArr.slice(6,9)
    ]

    obj.m = m
    obj.id = jogo

    ;['X', 'O'].forEach((k) => {
      // conta quantos `x` e `o` tem no tabuleiro
      obj[k+'n'] = jogoArr
        .reduce((a, c) => a + (c === k ? 1 : 0), 0)

      // verifica vitória nas linhas
      obj[k+'win'] = m.reduce((a, c) => a = a || (c[0]===c[1]) && (c[1]===c[2]) && c[0] === k, false)
      // diagonal
      if (!obj[k+'win']) obj[k+'win'] = ((m[0][0] === m[1][1]) && (m[1][1] === m[2][2]) && m[1][1] === k)
      if (!obj[k+'win']) obj[k+'win'] = ((m[0][2] === m[1][1]) && (m[1][1] === m[2][0]) && m[1][1] === k)
      // colunas
      ;[0,2,3].reduce((a, c) =>{
        return a || ((m[0][c] === m[1][c]) && (m[1][c] === m[2][c]) && m[0][c] === k)
      }, obj[k+'win'])
    })

    jogos.push(obj)
  }
  // não é possivel ter 2 vencedores
  jogos = jogos.filter(item => !(item.Xwin && item.Owin))  
  return jogos
}

export {jogadas};