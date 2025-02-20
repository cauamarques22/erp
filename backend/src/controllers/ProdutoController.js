import Produto from "../models/ProdutoModel"

class ProdutoController {

    //Mostra todos os produtos
    async index(req, res){
        try{
            const produtos = await Produto.findAll()
            return res.render("produtosIndex", {produtos})
        }
        catch(e){
            console.log(e)
            return
        }
    }

    //Cria um produto
    async create(req, res){
       return res.render("produtosCreate")
    }
}

export default new ProdutoController()

/*
{
nome: "",
}
*/