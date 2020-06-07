import {gerarMapa, caminhar, mDist} from '../src/aStar'


test.skip('caminha passando pelo obstáculo', () => {
  // cria mapa
  let mapa = gerarMapa(4, 4)

  // define origem e destino
  let origem = mapa[0][0]
  let destino = mapa[3][3]

  // adiciona um obstáculo
  mapa[0][1].path = false
  //mapa[1][2].path = false
  //mapa[2][2].path = false
  
  caminhar(mapa, origem, destino)

  // gera grafico simplificado
  let graph = mapa.map(row => row.map(cell => cell.trail ? 'x' : (cell.path ? ' ' : '#')))

  //console.log(graph)
  const esperado = [
    [ 'x', '#', ' ', ' ' ],
    [ 'x', 'x', 'x', 'x' ],
    [ ' ', ' ', ' ', 'x' ],
    [ ' ', ' ', ' ', 'x' ]
  ]

  expect(graph).toEqual(esperado);
});

test('resolve exercicio 1 modulo 1', () => {
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
  d.conn = [a, b]
  e.conn = [c, h, l]
  f.conn = [a, m]
  g.conn = [b, k]
  h.conn = [o, l]
  i.conn = [n, j]
  j.conn = [i, o]
  k.conn = [g, c]
  l.conn = [e, h]
  m.conn = [f, n]
  n.conn = [i, m]
  o.conn = [j, h]
  let mapa = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o]

  // define origem e destino
  let origem = f
  let destino = l
  
  caminhar(mapa, origem, destino)
  console.log(mapa.filter(item => item.trail).sort((a, b) => a.trail - b.trail))
  // gera grafico simplificado
  //let graph = mapa.map(row => row.map(cell => cell.trail ? 'x' : (cell.path ? ' ' : '#')))


});

