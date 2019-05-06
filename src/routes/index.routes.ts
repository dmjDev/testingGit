import { Router } from "express"; //requerimos express
import { indexWelcome } from "../controllers/index.controller"; //importamos el método indexWelcome de index.controller

const router = Router(); //creamos una constante que alamcenará el contenido del index.controller
//definimos la acción para nuestra ruta
router.route('/')
  .get(indexWelcome);

export default router;
