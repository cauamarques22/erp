import Produto from "../models/ProdutoModel"

class ProdutoController {

    //Mostra todos os produtos
    async index(req, res){
        try{
            const produtos = await Produto.findAll()
            console.log(produtos[0].dataValues.nome)
            return res.render("index", {produtos})
        }
        catch(e){
            console.log(e)
            return
        }

    }

    //Cria um produto
    async create(req, res){
        try{
            const produtoCriado = await Produto.create(req.body)
            res.json(produtoCriado)

        } 
        catch(e){
            console.log(e)
            return
        }
    }
}

export default new ProdutoController()

/*
{
nome: "",
}
*/