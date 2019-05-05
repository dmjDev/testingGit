//importamos los métodos de expess y de aplicación del paquete express instalado
import express, { Application } from "express";
import morgan from "morgan"; //importamos el middleware morgan para que nos muestre peticiones http del servidor

export class App {

    private app: Application; //definimos nuestra variable de aplicación

    constructor(private port?: number|string){ //inicializamos la variable port de tipo number o string de forma opcional
      this.app = express(); //inicializamos la variable de aplicación
      this.settings(); //inicializamos settings
      this.middlewares(); //inicializamos middlewares
    }

    settings(){
        //definimos el puerto de nuestro servidor con la variable pasada port si existe
        //O con el puerto del sistema O con el puerto 3000
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    middlewares(){
      //ponemos en funcionamiento morgan mediante dev para obtener en consola los POST, GET, PUT o DELETE
      this.app.use(morgan('dev'));
    }

    async listen(){
      await this.app.listen(this.app.get('port')); //inicializamos el servidor en el puerto correspondiente de forma asíncroma
      console.log('Server on port', this.app.get('port')); //cada vez que escuche algo por el dicho puerto devuelve un mensaje
    }
}
