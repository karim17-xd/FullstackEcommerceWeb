import express from "express";
import router from "./routes/products/index.js";

const app = express();
const PORT = 3000;

app.use("/products", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
