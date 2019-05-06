import { Request, Response } from "express"; //requerimos express

import { connect } from "../database"; //requerimos los datos de conexión a la base de datos
import { Post } from "../interface/Post"; //importamos nuestra interface Post

//creamos un método asíncrono que se conecta a la base de datos y realiza una consulta devolviendo el resultado
export async function getPosts(req:Request, res:Response): Promise<Response> {
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM posts');
    return res.json(posts[0]);
}

//cuando esta ruta recibe un POST de tipo formulario en formato json, conectamos a la base de datos y guardamos la información
//en este caso recibimos mediante POST nuestra interface Post con sus parámetros con datos mediante Insomnia indicando
//que body tiene el formato JSON
export async function createPost(req:Request, res:Response) {
    const newPost: Post = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO posts SET ?', [newPost])
    return res.json({
      message: 'Post Created'
    });
}

//este método se conecta a la base de datos pasándole un perámetro y nos devuelve los datos de ese registro
export async function getPost(req: Request, res: Response): Promise<Response> {
    const id = req.params.postId;
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM posts WHERE id = ?', [id]);
    return res.json(posts[0]);
}

//este método se conecta a la base de datos pasándole un perámetro y nos devuelve los datos de ese registro
export async function deletePost(req: Request, res: Response) {
    const id = req.params.postId;
    const conn = await connect();
    await conn.query('DELETE FROM posts WHERE id = ?', [id]);
    return res.json({message: 'Post deleted!'});
}

export async function updatePost(req: Request, res: Response) {
    const id = req.params.postId;
    const updatePost: Post = req.body;
    const conn = await connect();
    await conn.query('UPDATE posts SET ? WHERE id = ?', [updatePost, id]);
    return res.json({message: 'Post updated!'});
}
