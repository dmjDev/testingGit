"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app"); //vamos a utilizar la configuración de app.ts
//generamos un método principal que instanciará la clase App de app.ts y ejecutará su método listen
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = new app_1.App(3000); //instanciamos la clase App con o sin pasarle un puerto para nuestra aplicación
        yield app.listen();
    });
}
main(); //ejecutamos la aplicación
