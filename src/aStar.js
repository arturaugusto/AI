const gerarMapa = (width, height) => {
  // objetos com `p` são caminhos possíveis
  let mapa = Array.from({length: height}, _ => 
    Array.from({length: width}, _ => ({}))
    .map((_, x) => ({x: x, path: true}))
  )
  .map((row, y) =>
    row.map(item => Object.assign(item, {y: y}))
  )
  //console.log(mapa)
  return mapa
}

// retorna a distancia de manhattan entre 2 pontos
const mDist = (o, d) => Math.abs(d.x - o.x) + Math.abs(d.y - o.y)

const caminhar = (mapa, origem, destino, cb) => {
  // achata mapa para busca
  let mapaFlat = mapa.flat()

  // caminha na direção do destino
  var atual = origem
  var res
  
  let tickCount = 1

  const tick = () => {
    // anota por onde passou, alterando o objeto
    atual.trail = tickCount
    
    // para se chegou ao destino
    if (res && res.item === destino) return
    
    // res = (atual.conn || mapaFlat.filter(item => 
    //     item.conn || (
    //       // é caminho
    //       item.path
    //       // apenas uma unidade
    //       && ((Math.abs(atual.x - item.x) <= 1) && (Math.abs(atual.y - item.y) <= 1))
    //       // apenas ortogonal
    //       && (atual.x === item.x || atual.y === item.y)
    //     )
    //   )
    // )
    res = atual.conn
    .map(item => {
      return { item: item,
        custo: (item.c || 0) + mDist(item, destino) }
    })
    //.map((item) => {console.log(item);return item})
    .sort((a, b) => a.custo - b.custo)[0]

    atual = res.item

    if (!res || (tickCount > mapa.length*mapa.length)) {
      console.log('Não existe solução')
      return
    }
    tickCount++
    tick()
  }
  tick()
}

export {gerarMapa, caminhar, mDist};