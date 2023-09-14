const Despesa = require('../models/Despesa')

module.exports = class DespesaCrontroller {

    // Rota para mostrar o formulario de cadastro
    // Implementado
    static cadastro(req,res){
        console.log('Rota de cadastro')
        res.render('despesas/cadastrarDespesa')
    }

    // Implementado
    static async cadastroPost(req,res){
        const despesa = {
            titulo : req.body.titulo,
            descricao : req.body.descricao,
            valor_parcela : req.body.valorParcela,
            qtn_parcelas : req.body.quantidadeParcelas,
            valor_total : (Number(req.body.valorParcela) * Number(req.body.quantidadeParcelas)),
            categoria : req.body.categoria,
        }

        await Despesa.create(despesa)
        .then(() => {
            console.log('Despesa cadastrada com sucesso')
            res.redirect('/despesas/listar')
        })
        .catch((err) => {
            console.log('Erro ao cadastrar despesa: ',err)
            res.redirect('/despesas/cadastro')
        })
    }

    // Implementado
    static listar(req,res){
        Despesa.findAll({raw : true})
        .then((data) => {
            console.log(data);
            res.render('despesas/verTodos',{despesas : data})
        }).catch((err) => console.log(err))
    }

    static editar(req,res){
        const id = req.params.id;
        console.log(id)

        Despesa.findByPk(id,{raw : true})
        .then((data) => {
            console.log(data)
            res.render('despesas/editarDespesa',{despesa : data})
        })
        .catch((err) => {
            console.log('Erro ao buscar despesa: ',err)
            res.redirect('/despesas/listar')
        })
    }

    static async editarPost(req,res){
        const id = req.body.id;
        const despesa = {
            titulo : req.body.titulo,
            descricao : req.body.descricao,
            valor_parcela : req.body.valorParcela,
            qtn_parcelas : req.body.quantidadeParcelas,
            valor_total : (Number(req.body.valorParcela) * Number(req.body.quantidadeParcelas)),
            categoria : req.body.categoria,
        }

        await Despesa.update(despesa,{where : {id : id}})
        .then(() => {
            console.log('Despesa alterada com sucesso')
            res.redirect('/despesas/listar')
        })
        .catch((err) => {
            console.log('Erro ao alterar despesa: ',err)
            res.redirect('/despesas/listar')
        })
    }

    // Implementado
    static async deletar(req,res){
        const id = req.params.id;

        await Despesa.destroy({
            where : {id : id}
        }).then(() => {
            console.log('Despesa deletada com sucesso')
            res.redirect('/despesas/listar')
        });
    }


}