Vue.component('saludo', {

            /*Los templates siempre tienen que estar encerrados por un container, puede ser una section, div, etc. */
            template: //html
            `
            <div>
                <h2>{{saludo}}</h2>
            </div>
            `,
            data(){
                return {
                    saludo:'Adiós mundo :`('
                }
            }
        });