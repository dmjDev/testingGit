import { Request, Response } from "express"; //requerimos express

//creamos un método que nos devuelve algo por pantalla
export function indexWelcome(req: Request, res: Response): Response {
  return res.json("Welcome to my API on Index")
}
