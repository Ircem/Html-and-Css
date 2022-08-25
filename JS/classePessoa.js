class pessoa{
    constructor(pNome, pSobrenome, pDatasc){
        this.Nome = pNome;
        this.Sobrenome = pSobrenome;
        this.dtNasc = pDatasc;
    }
    getNome(){
        return  this.Nome;
    }
    getSobrenome(){
        return this.Sobrenome;
    }
    nomeCompleto(){
        return (this.Nome + " " + this.Sobrenome);
    }
}