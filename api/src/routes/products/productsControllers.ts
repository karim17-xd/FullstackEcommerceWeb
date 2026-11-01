import { Request, Response } from "express";

export function listProducts(req: Request, res: Response) {
  res.send("Product list");
}

export function getProductById(req: Request, res: Response) {
  res.send(" getProductById ");
}
export function createProducts(req: Request, res: Response) {
  res.send("Product created");
}
export function updateProducts(req: Request, res: Response) {
  res.send("Product updated");
}
export function deleteProducts(req: Request, res: Response) {
  res.send("Product deleted");
}
