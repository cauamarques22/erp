import { Router } from "express"
import produtoController from "../controllers/ProdutoController"
const router = new Router()

//index
router.get("/", produtoController.index)
//create
router.post("/", produtoController.create)

export default router