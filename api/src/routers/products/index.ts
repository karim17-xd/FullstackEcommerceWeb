import { Router } from "express";

const ProductRouter = Router();

ProductRouter.get("/", (req, res) => {
  res.send("Hello, World!");
});

ProductRouter.get("/:id", (req, res) => {
  console.log(req.params);
  res.send(" A product ");
});

ProductRouter.get("/products", (req, res) => {
  res.send("Product list");
});

export default ProductRouter;
