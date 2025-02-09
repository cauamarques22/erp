import Sequelize, { Model } from "sequelize";

export default class Produto extends Model {
    static init(connection){
        super.init({
            //Não está na ordem, verificar se dá problema
            nome: Sequelize.STRING,
            descricao_curta: Sequelize.STRING,
            descricao_longa: Sequelize.STRING,
            preco: Sequelize.FLOAT,
            custo: Sequelize.FLOAT,
            status: Sequelize.STRING,
            codigo_fornecedor: Sequelize.STRING,
            fornecedor: Sequelize.STRING,
            peso: Sequelize.FLOAT,
            altura: Sequelize.FLOAT,
            largura: Sequelize.FLOAT,
            profundidade: Sequelize.FLOAT,
            imagem: Sequelize.STRING
        }, {
            sequelize:connection
        })

        return this
    }
}