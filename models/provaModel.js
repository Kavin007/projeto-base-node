const provas = [] //array de provas
class Prova {
    constructor(disciplina, professor, dataProva){
        this.disciplina = disciplina
        this.professor = professor
        this.dataProva = dataProva
    }//construtor
    salvar() {
        provas.push(this)
    }
    static listar() {
        return provas
    }
}

module.exports = Prova