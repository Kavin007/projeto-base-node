const express = require('express')
const router = express.Router()
const provasController =  require('../controllers/provasController')


router.post('/nova', provasController.postNovaProva)//rota para pegar dados do formulario, passando nome da rota e o nome da funcao do controller

router.get('/nova', provasController.getNovaProva) //mostra a view de novas provas

router.get('/', provasController.getProvas) //mostra a view de provas


module.exports = router