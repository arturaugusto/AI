import {gerarMapa, caminhar, mDist} from '../src/aStar'


test('caminha passando pelo obstáculo', () => {
  // cria mapa
  let mapa = gerarMapa(4, 4)

  // define origem e destino
  let origem = mapa[0][0]
  let destino = mapa[3][3]

  // adiciona um obstáculo
  mapa[0][1].path = false
  //mapa[1][2].path = false
  //mapa[2][2].path = false
  
  caminhar(mapa, origem, destino, (item, atual, destino) => mDist(item, destino) )

  // gera grafico simplificado
  let graph = mapa.map(row => row.map(cell => cell.trail ? 'x' : (cell.path ? ' ' : '#')))

  console.log(graph)
  const esperado = [
    [ 'x', '#', ' ', ' ' ],
    [ 'x', 'x', 'x', 'x' ],
    [ ' ', ' ', ' ', 'x' ],
    [ ' ', ' ', ' ', 'x' ]
  ]

  expect(graph).toEqual(esperado);
});

const mapaExercicio = () => {
  // cria mapa
  let a = {id: 'a', x: 3, y: 0}
  let b = {id: 'b', x: 8, y: 0}
  let c = {id: 'c', x: 13, y: 0}
  let d = {id: 'd', x: 5, y: 1}
  let e = {id: 'e', x: 18, y: 1}
  let f = {id: 'f', x: 0, y: 2}
  let g = {id: 'g', x: 9, y: 2}
  let h = {id: 'h', x: 15, y: 2}
  let i = {id: 'i', x: 2, y: 3}
  let j = {id: 'j', x: 5, y: 4}
  let k = {id: 'k', x: 11, y: 4}
  let l = {id: 'l', x: 20, y: 4}
  let m = {id: 'm', x: 0, y: 5}
  let n = {id: 'n', x: 3, y: 5}
  let o = {id: 'o', x: 13, y: 5}

  a.conn = [f, d]
  b.conn = [d, g]
  c.conn = [k, e]
  d.conn = [a, b, j]
  e.conn = [c, h, l]
  f.conn = [a, m]
  g.conn = [b, k]
  h.conn = [o, l]
  i.conn = [n, j]
  j.conn = [i, o, d]
  k.conn = [g, c]
  l.conn = [e, h]
  m.conn = [f, n]
  n.conn = [i, m]
  o.conn = [j, h]
  let mapa = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o]
  return mapa
}

test('resolve exercicio 1 modulo 1', () => {


  // define origem e destino
  let origem
  let destino

  console.log('# heuristicaManhattan. Percorre 32 casas e percorre menor quantidade de nós.')
  const heuristicaManhattan = (item, atual, destino) => mDist(item, destino)
  let mapa1 = mapaExercicio()
  origem = mapa1.filter(x => x.id === 'f')[0]
  destino = mapa1.filter(x => x.id === 'l')[0]
  caminhar(mapa1, origem, destino, heuristicaManhattan)
  console.log(mapa1.filter(item => item.trail).sort((a, b) => a.trail - b.trail))

  console.log('# heuristicaPedagio. Percorre 36 casas. Seria necessário fazer uma busca em profundidade?')
  let mapa2 = mapaExercicio()
  origem = mapa2.filter(x => x.id === 'f')[0]
  destino = mapa2.filter(x => x.id === 'l')[0]
  const heuristicaPedagio = (item, atual, destino) => mDist(atual, item) + mDist(item, destino)
  caminhar(mapa2, origem, destino, heuristicaPedagio)
  console.log(mapa2.filter(item => item.trail).sort((a, b) => a.trail - b.trail))


});

