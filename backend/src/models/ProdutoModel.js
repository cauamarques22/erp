import Sequelize, { Model } from "sequelize";

export default class Produto extends Model {
    static init(connection){
        super.init({
            //Não está na ordem, verificar se dá problema
            descricao: Sequelize.STRING,
            descricao_curta: Sequelize.STRING,
            descricao_longa: Sequelize.STRING,
            preco: Sequelize.FLOAT,
            custo: Sequelize.FLOAT,
            specs: Sequelize.BLOB,
            peso: Sequelize.FLOAT,
            altura: Sequelize.FLOAT,
            largura: Sequelize.FLOAT,
            profundidade: Sequelize.FLOAT,
        }, {
            sequelize:connection
        })

        return this
    }
}