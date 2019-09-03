const Prova = require('../models/provaModel')

//exports serve para exporta as funcoes do arquivo
exports.postNovaProva = (req, res, next) =>{
        let novaProva = new Prova(
        req.body.disciplina,
        req.body.professor,
        req.body.dataProva,
        )
    novaProva.salvar()
    res.redirect('/provas') 
   }

exports.getNovaProva = (req,res,next) =>{
    res.render('novaProva')
}

exports.getProvas = (req, res, next) =>{
    res.render('provas', {
      'provas':Prova.listar(),
    })
}

