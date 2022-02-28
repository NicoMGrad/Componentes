Vue.component('hijo', {

    template: //html
    `
    <div>
        <h3>Componente hijo</h3>
        <p :class="estilo" >{{soyhijo}} y mi edad es {{edadHijo}}</p>
    </div>
    `,
    props: ['edadHijo','estilo'],
    data(){
        return {
            soyhijo:'Hola, soy el hijo'
        }
    }
});