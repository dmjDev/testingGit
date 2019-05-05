import { App } from "./app"; //vamos a utilizar la configuración de app.ts

//generamos un método principal que instanciará la clase App de app.ts y ejecutará su método listen
async function main() {
    const app = new App(3000); //instanciamos la clase App con o sin pasarle un puerto para nuestra aplicación
    await app.listen();
}

main();//ejecutamos la aplicación
