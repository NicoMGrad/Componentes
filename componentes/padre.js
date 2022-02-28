Vue.component('padre', {

    template: //html
    `
    <div>
        <h3>Componente padre</h3>
        <p>{{soypadre}}</p>
        <hijo :edadHijo="nroEdad" :estilo="color"></hijo>
        <button @click="nroEdad++">Sumar edad</button>
    </div>
    `,
    data(){
        return {
            soypadre:'Hola, soy el padre',
            color: 'rojo',
            nroEdad: 16
        }
    }
});