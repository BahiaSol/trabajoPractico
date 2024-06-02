app.component('form-video-juegos', {
    template:
    /*html*/
    `
    <h2>Nuevo videojuego</h2>
    <form class="form-video-juegos" @submit.prevent="onSubmit"> 
    <label>Nombre</label>
    <input id="name" type="text" v-model="name">

    <label>Plataforma</label>
    <select id="plataform" name="plataform" v-model.number="plataform">
        <option>pc</option>
        <option>play station</option>
        <option>xbox one</option>
    </select>

    <label>Estado</label>
    <select id="condition" name="condition" v-model.number="condition">
      <option>pendiente</option>
      <option>jugando</option>
      <option>completado</option>
    </select>

    <label>Puntaje</label>
    <input id="score" type="number" v-model="score" @input="validarNumero">
    <p v-if="error">Debe ingresar solo numeros.</p>

    <button type="submit">Registrar videojuego</button>
  </form>`,
    data(){
        return{
            name: '',
            plataform: '',
            condition: null,
            score: null
        }
    },
    methods:{
        validarNumero(){
            const num = /^[0-9]*$/;
            if (!num.test(this.score)){
                this.error = true
            }else{
                this.error = false
            }
            
        },
        onSubmit(){
            if(this.name === '' || this.plataform === null || this.condition === null){
                alert('Porfavor complete el Nombre, Plataforma y Estado')
                return
            }

            if(this.score < 1 || this.score > 10){
                alert('El puntaje debe ser entre 1 y 10')
                return
            }

            let videoJuegos = {
                name: this.name,
                plataform: this.plataform,
                condition: this.condition,
                score: this.score
            }
            this.$emit('review-submitted', videoJuegos)
            this.name = ''
            this.plataform = null,
            this.condition = null,
            this.score = ''
        }
    }

})