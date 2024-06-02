app.component('detalle-modal',{
    props:{
        reviews: {
            type: Array,
            required: true
        },
        showModal:{
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="container">
    <div class="modal" v-if="showModal">
    <h2>Detalles del videojuego</h2>
    <p>Nombre: {{ review.name }}</p>
    <p>Plataforma: {{ review.plataform }}</p>
    <p>Estado: {{ review.condition }}</p>
    <p>Puntaje: {{ review.score }}</p>
    </div>
    </div>
    `,
    methods:{
      showDetails(review){
        this.$emit('show-details', review)
      }
    }
})