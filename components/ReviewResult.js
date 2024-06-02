app.component('review-result',{
    props:{
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="review-result">
    <h2>Videojuegos cargados</h2>
    <table>
    <colgroup span="5" class="columns"></colgroup>
    <tr>
      <th>Nombre</th>
      <th>Plataforma</th>
      <th>Estado</th>
      <th>Puntaje</th>
      <th>Mas info</th>
    </tr>
    <tr v-for="(review, index) in reviews" :key="index"> 
      <td>{{ review.name }}</td>
      <td>{{ review.plataform }}</td>
      <td>{{ review.condition }}</td>
      <td>{{ review.score }}</td>
      <td><button @click="showDetails(review)">Ver detalle</button></td>
    </tr>
  </table>
    </div>
    `,
    methods: {
        showDetails(review) {
            this.$emit('show-details', review);
        }
    }
})