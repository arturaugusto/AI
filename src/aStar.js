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

const caminhar = (mapa, origem, destino, h, cb) => {
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
    res = (atual.conn || mapaFlat.filter(item => 
        item.conn || (
          // é caminho
          item.path
          // apenas uma unidade
          && ((Math.abs(atual.x - item.x) <= 1) && (Math.abs(atual.y - item.y) <= 1))
          // apenas ortogonal
          && (atual.x === item.x || atual.y === item.y)
        )
      )
    )
    .map(item => {
      return { 
        item: item,
        custo: h(item, atual, destino)
      }
    })
    //.map((item) => {console.log(item);return item})
    .filter(item => !item.item.trail)
    .sort((a, b) => a.custo - b.custo)[0]

    if (!res || (tickCount > mapa.length*mapa.length)) {
      console.log('Solução não encontrada.')
      return
    }
    atual = res.item
    tickCount++
    if (cb) {
      window.setTimeout(tick, 100)
    } else {
      tick()
    }
  }
  tick()
}

export {gerarMapa, caminhar, mDist};