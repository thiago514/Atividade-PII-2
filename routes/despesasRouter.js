const express = require('express')
const router = express.Router()
const DespesaCrontroller = require('../controllers/despesaController')

router.get('/cadastro',DespesaCrontroller.cadastro)
router.post('/cadastro',DespesaCrontroller.cadastroPost)
router.get('/listar',DespesaCrontroller.listar)
router.get('/editar/:id',DespesaCrontroller.editar)
router.post('/editar',DespesaCrontroller.editarPost)
router.post('/deletar/:id',DespesaCrontroller.deletar)

module.exports = router