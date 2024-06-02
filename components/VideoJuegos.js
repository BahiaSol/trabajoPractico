app.component('video-juegos', {
    template: 
    /*html*/
    `<div class="video-juegos">
            <form-video-juegos @review-submitted="addReview"></form-video-juegos>
            <review-result :reviews="reviews" @show-details="showDetails"></review-result>
            <!-- Modal para mostrar detalles -->
            <div class="modal" v-if="modalOpen">
                <div class="modal-content">
                    <h2>Detalles del videojuego</h2>
                    <p>Nombre: {{ selectedReview.name }}</p>
                    <p>Plataforma: {{ selectedReview.plataform }}</p>
                    <p>Estado: {{ selectedReview.condition }}</p>
                    <p>Puntaje: {{ selectedReview.score }}</p>
                </div>
            </div>
        </div>`,
    data() {
        return {
            reviews: [],
            modalOpen: false,
            selectedReview: {}
        }
    },
    methods: {
        addReview(review) {
            this.reviews.push(review);
        },
        showDetails(review) {
            this.selectedReview = review;
            this.modalOpen = true;
        }
    }
});
