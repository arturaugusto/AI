import {gerarMapa, caminhar, mDist} from '../src/aStar'

var app = new Vue({
  el: '#app',
  data: {
    mapa: [],
    origem: undefined,
    destino: undefined
  },
  methods: {
    alternaObstaculo (x, y) {
      let atual = this.mapa[y][x]
      atual.path = !atual.path
      this.$set(this.mapa[y][x], atual)
      console.log(this.mapa)
    },
    run () {
      this.mapa.flat().forEach(item => {
        if (item.trail) {
          console.log(item)
          item.trail = false
          this.$set(this.mapa[item.y][item.x], item)
        }
      })
      this.$nextTick(() => {
        caminhar(this.mapa, this.origem, this.destino, (item, atual, destino) => mDist(item, destino), (atual) => {
          this.$set(this.mapa[atual.y][atual.x], atual)
        })

      })

    },
  },
  mounted () {
    // cria mapa      
    //this.mapa = gerarMapa(21, 6)
    this.mapa = [[{"x":0,"path":true,"y":0},{"x":1,"path":true,"y":0},{"x":2,"path":true,"y":0},{"x":3,"path":true,"y":0},{"x":4,"path":true,"y":0},{"x":5,"path":true,"y":0},{"x":6,"path":true,"y":0},{"x":7,"path":true,"y":0},{"x":8,"path":true,"y":0},{"x":9,"path":true,"y":0},{"x":10,"path":true,"y":0},{"x":11,"path":true,"y":0},{"x":12,"path":true,"y":0},{"x":13,"path":true,"y":0},{"x":14,"path":true,"y":0},{"x":15,"path":true,"y":0},{"x":16,"path":true,"y":0},{"x":17,"path":true,"y":0},{"x":18,"path":true,"y":0},{"x":19,"path":true,"y":0},{"x":20,"path":true,"y":0}],[{"x":0,"path":true,"y":1},{"x":1,"path":true,"y":1},{"x":2,"path":true,"y":1},{"x":3,"path":true,"y":1},{"x":4,"path":true,"y":1},{"x":5,"path":true,"y":1},{"x":6,"path":true,"y":1},{"x":7,"path":true,"y":1},{"x":8,"path":true,"y":1},{"x":9,"path":true,"y":1},{"x":10,"path":true,"y":1},{"x":11,"path":true,"y":1},{"x":12,"path":true,"y":1},{"x":13,"path":true,"y":1},{"x":14,"path":true,"y":1},{"x":15,"path":true,"y":1},{"x":16,"path":true,"y":1},{"x":17,"path":true,"y":1},{"x":18,"path":true,"y":1},{"x":19,"path":true,"y":1},{"x":20,"path":true,"y":1}],[{"x":0,"path":true,"y":2,"trail":true},{"x":1,"path":true,"y":2,"trail":true},{"x":2,"path":false,"y":2,"trail":true},{"x":3,"path":false,"y":2},{"x":4,"path":true,"y":2},{"x":5,"path":true,"y":2},{"x":6,"path":true,"y":2},{"x":7,"path":true,"y":2},{"x":8,"path":true,"y":2},{"x":9,"path":true,"y":2},{"x":10,"path":true,"y":2},{"x":11,"path":true,"y":2},{"x":12,"path":true,"y":2},{"x":13,"path":true,"y":2},{"x":14,"path":true,"y":2},{"x":15,"path":true,"y":2},{"x":16,"path":true,"y":2},{"x":17,"path":true,"y":2},{"x":18,"path":true,"y":2},{"x":19,"path":true,"y":2},{"x":20,"path":true,"y":2}],[{"x":0,"path":true,"y":3},{"x":1,"path":true,"y":3},{"x":2,"path":true,"y":3,"trail":true},{"x":3,"path":false,"y":3},{"x":4,"path":true,"y":3},{"x":5,"path":true,"y":3},{"x":6,"path":true,"y":3},{"x":7,"path":true,"y":3},{"x":8,"path":true,"y":3},{"x":9,"path":true,"y":3},{"x":10,"path":true,"y":3},{"x":11,"path":true,"y":3},{"x":12,"path":true,"y":3},{"x":13,"path":true,"y":3},{"x":14,"path":true,"y":3},{"x":15,"path":true,"y":3},{"x":16,"path":true,"y":3},{"x":17,"path":true,"y":3},{"x":18,"path":true,"y":3},{"x":19,"path":true,"y":3},{"x":20,"path":true,"y":3}],[{"x":0,"path":true,"y":4},{"x":1,"path":true,"y":4},{"x":2,"path":true,"y":4,"trail":true},{"x":3,"path":true,"y":4,"trail":true},{"x":4,"path":true,"y":4,"trail":true},{"x":5,"path":true,"y":4,"trail":true},{"x":6,"path":true,"y":4,"trail":true},{"x":7,"path":true,"y":4,"trail":true},{"x":8,"path":true,"y":4,"trail":true},{"x":9,"path":true,"y":4,"trail":true},{"x":10,"path":true,"y":4,"trail":true},{"x":11,"path":true,"y":4,"trail":true},{"x":12,"path":true,"y":4,"trail":true},{"x":13,"path":true,"y":4,"trail":true},{"x":14,"path":true,"y":4,"trail":true},{"x":15,"path":true,"y":4,"trail":true},{"x":16,"path":true,"y":4,"trail":true},{"x":17,"path":true,"y":4,"trail":true},{"x":18,"path":true,"y":4,"trail":true},{"x":19,"path":true,"y":4,"trail":true},{"x":20,"path":true,"y":4,"trail":true}],[{"x":0,"path":true,"y":5},{"x":1,"path":true,"y":5},{"x":2,"path":true,"y":5},{"x":3,"path":true,"y":5},{"x":4,"path":true,"y":5},{"x":5,"path":true,"y":5},{"x":6,"path":true,"y":5},{"x":7,"path":true,"y":5},{"x":8,"path":true,"y":5},{"x":9,"path":true,"y":5},{"x":10,"path":true,"y":5},{"x":11,"path":true,"y":5},{"x":12,"path":true,"y":5},{"x":13,"path":true,"y":5},{"x":14,"path":true,"y":5},{"x":15,"path":true,"y":5},{"x":16,"path":true,"y":5},{"x":17,"path":true,"y":5},{"x":18,"path":true,"y":5},{"x":19,"path":true,"y":5},{"x":20,"path":true,"y":5}]]
    //this.mapa =[[{"x":0,"path":true,"y":0},{"x":1,"path":true,"y":0},{"x":2,"path":true,"y":0},{"x":3,"path":true,"y":0},{"x":4,"path":false,"y":0},{"x":5,"path":true,"y":0},{"x":6,"path":true,"y":0},{"x":7,"path":true,"y":0},{"x":8,"path":false,"y":0},{"x":9,"path":false,"y":0},{"x":10,"path":true,"y":0},{"x":11,"path":true,"y":0},{"x":12,"path":true,"y":0},{"x":13,"path":true,"y":0},{"x":14,"path":true,"y":0},{"x":15,"path":true,"y":0},{"x":16,"path":true,"y":0},{"x":17,"path":false,"y":0},{"x":18,"path":false,"y":0},{"x":19,"path":false,"y":0},{"x":20,"path":false,"y":0}],[{"x":0,"path":true,"y":1},{"x":1,"path":false,"y":1},{"x":2,"path":false,"y":1},{"x":3,"path":true,"y":1},{"x":4,"path":true,"y":1},{"x":5,"path":true,"y":1},{"x":6,"path":false,"y":1},{"x":7,"path":true,"y":1},{"x":8,"path":false,"y":1},{"x":9,"path":false,"y":1},{"x":10,"path":true,"y":1},{"x":11,"path":false,"y":1},{"x":12,"path":false,"y":1},{"x":13,"path":false,"y":1},{"x":14,"path":false,"y":1},{"x":15,"path":false,"y":1},{"x":16,"path":true,"y":1},{"x":17,"path":true,"y":1},{"x":18,"path":true,"y":1},{"x":19,"path":false,"y":1},{"x":20,"path":false,"y":1}],[{"x":0,"path":true,"y":2,"trail":true},{"x":1,"path":false,"y":2,"trail":true},{"x":2,"path":false,"y":2,"trail":true},{"x":3,"path":false,"y":2},{"x":4,"path":false,"y":2},{"x":5,"path":false,"y":2},{"x":6,"path":false,"y":2},{"x":7,"path":true,"y":2},{"x":8,"path":true,"y":2},{"x":9,"path":false,"y":2},{"x":10,"path":true,"y":2},{"x":11,"path":false,"y":2},{"x":12,"path":false,"y":2},{"x":13,"path":true,"y":2},{"x":14,"path":true,"y":2},{"x":15,"path":true,"y":2},{"x":16,"path":false,"y":2},{"x":17,"path":false,"y":2},{"x":18,"path":true,"y":2},{"x":19,"path":false,"y":2},{"x":20,"path":false,"y":2}],[{"x":0,"path":true,"y":3},{"x":1,"path":false,"y":3},{"x":2,"path":false,"y":3,"trail":true},{"x":3,"path":true,"y":3,"trail":true},{"x":4,"path":true,"y":3,"trail":true},{"x":5,"path":true,"y":3,"trail":true},{"x":6,"path":true,"y":3,"trail":true},{"x":7,"path":true,"y":3,"trail":true},{"x":8,"path":true,"y":3,"trail":true},{"x":9,"path":true,"y":3,"trail":true},{"x":10,"path":true,"y":3,"trail":true},{"x":11,"path":false,"y":3,"trail":true},{"x":12,"path":false,"y":3,"trail":true},{"x":13,"path":true,"y":3,"trail":true},{"x":14,"path":false,"y":3,"trail":true},{"x":15,"path":true,"y":3,"trail":true},{"x":16,"path":false,"y":3,"trail":true},{"x":17,"path":false,"y":3,"trail":true},{"x":18,"path":true,"y":3,"trail":true},{"x":19,"path":false,"y":3,"trail":true},{"x":20,"path":false,"y":3,"trail":true}],[{"x":0,"path":true,"y":4},{"x":1,"path":false,"y":4},{"x":2,"path":false,"y":4},{"x":3,"path":true,"y":4},{"x":4,"path":false,"y":4},{"x":5,"path":false,"y":4},{"x":6,"path":false,"y":4},{"x":7,"path":false,"y":4},{"x":8,"path":false,"y":4},{"x":9,"path":false,"y":4},{"x":10,"path":false,"y":4},{"x":11,"path":false,"y":4},{"x":12,"path":false,"y":4},{"x":13,"path":true,"y":4},{"x":14,"path":false,"y":4},{"x":15,"path":true,"y":4},{"x":16,"path":true,"y":4},{"x":17,"path":true,"y":4},{"x":18,"path":true,"y":4},{"x":19,"path":true,"y":4},{"x":20,"path":true,"y":4,"trail":true}],[{"x":0,"path":true,"y":5},{"x":1,"path":true,"y":5},{"x":2,"path":true,"y":5},{"x":3,"path":true,"y":5},{"x":4,"path":true,"y":5},{"x":5,"path":true,"y":5},{"x":6,"path":true,"y":5},{"x":7,"path":true,"y":5},{"x":8,"path":true,"y":5},{"x":9,"path":true,"y":5},{"x":10,"path":true,"y":5},{"x":11,"path":true,"y":5},{"x":12,"path":true,"y":5},{"x":13,"path":true,"y":5},{"x":14,"path":false,"y":5},{"x":15,"path":false,"y":5},{"x":16,"path":false,"y":5},{"x":17,"path":false,"y":5},{"x":18,"path":false,"y":5},{"x":19,"path":false,"y":5},{"x":20,"path":false,"y":5}]]
    // define origem e destino
    this.origem = this.mapa[2][0]
    this.destino = this.mapa[4][20]
    this.run()
  }
})