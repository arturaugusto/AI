import {jogadas} from '../src/minmax'

test('mesma quantidade de jogos', () => {
  let todasJogadas = jogadas()
  
  let jogosXWin = todasJogadas.filter(item => item.Xwin)
  let jogosOWin = todasJogadas.filter(item => item.Owin)

  expect(jogosXWin.length).toEqual(jogosOWin.length)
});

test.only('mesma quantidade de jogos', () => {
  let j = jogadas()
  // remove jogadas impossíveis para as regras padrão
  // e assume que X está jogando primeiro
  j = j
    .filter(item => 
      (item.Xn || item.On) // remove tabuleiro vazio
      && Math.abs(item.On - item.Xn) <= 1 
      && (item.Xn >= item.On) )

  let camadas = []
  ;[1, 2, 3, 4, 5].map(n => {
    camadas.push(j
      .filter(item => (item.Xn === n) && (item.On === n -1))) // joga X
    
    camadas.push(j
      .filter(item => (item.Xn === n) && (item.On === n))) // joga O
  })

  ;camadas.forEach(camada => console.log(camada.length))
  
  //console.log(j.slice(1000, 1010))

});

