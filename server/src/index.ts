import express from "express";
import cors from "cors"; 
import { products } from "./data/data";

const app = express();
const port = 8000;

app.use(cors());

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
