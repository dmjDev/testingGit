"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importamos los métodos de expess y de aplicación del paquete express instalado
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan")); //importamos el middleware morgan para que nos muestre peticiones http del servidor
class App {
    constructor(port) {
        this.port = port;
        this.app = express_1.default(); //inicializamos la variable de aplicación
        this.settings(); //inicializamos settings
        this.middlewares(); //inicializamos middlewares
    }
    settings() {
        //definimos el puerto de nuestro servidor con la variable pasada port si existe
        //O con el puerto del sistema O con el puerto 3000
        this.app.set('port', this.port || process.env.PORT || 3000);
    }
    middlewares() {
        //ponemos en funcionamiento morgan mediante dev para obtener en consola los POST, GET, PUT o DELETE
        this.app.use(morgan_1.default('dev'));
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get('port')); //inicializamos el servidor en el puerto correspondiente de forma asíncroma
            console.log('Server on port', this.app.get('port')); //cada vez que escuche algo por el dicho puerto devuelve un mensaje
        });
    }
}
exports.App = App;
