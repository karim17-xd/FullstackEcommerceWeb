import { Router } from "express";
import {
  listProducts,
  getProductById,
  createProducts,
  updateProducts,
  deleteProducts,
} from "./productsControllers";

const router = Router();

router.get("/", listProducts);

router.get("/:id", getProductById);
router.post("/", createProducts);
router.put("/:id", updateProducts);
router.delete("/:id", deleteProducts);

export default router;
