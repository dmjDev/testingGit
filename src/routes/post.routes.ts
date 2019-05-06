import { Router } from "express"; //requerimos express
//importamos los métodos de post.controller
import { getPosts, createPost, getPost, deletePost, updatePost } from "../controllers/post.controller";

const router = Router(); //creamos una constante que alamcenará el contenido del post.controller
//definimos las acciones para nuestra ruta
router.route('/')
  .get(getPosts)
  .post(createPost);

router.route('/:postId')
  .get(getPost)
  .delete(deletePost)
  .put(updatePost);

export default router;
