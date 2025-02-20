import { Router } from "express"
import produtoController from "../controllers/ProdutoController"
const router = new Router()

//index
router.get("/", produtoController.index)
//create
router.get("/create/", produtoController.create)

export default router