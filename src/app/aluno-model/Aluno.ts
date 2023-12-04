export class Aluno {
    public nomeCompleto: string;
    public profissao: string;
    public dataDeNascimento: string;
    public estadoCivil: string;
    public genero: string;
    public endereco: string;
    public bairro: string;
    public cidade: string;
    public estado: string;
    public cep: string;
    public telefoneFixo1: string;
    public telefoneFixo2: string;
    public celular: string;
    public contato: string;
    public email: string;
    public identidade: string;
    public cpf: string;
    public temVeiculo: string;
    public habilitacao: string;
  
    constructor() {
        this.nomeCompleto = "";
        this.profissao = "";
        this.dataDeNascimento = "";
        this.estadoCivil = "";
        this.genero = "";
        this.endereco = "";
        this.bairro = "";
        this.cidade = "";
        this.estado = "";
        this.cep = "";
        this.telefoneFixo1 = "";
        this.telefoneFixo2 = "";
        this.celular = "";
        this.contato = "";
        this.email = "";
        this.identidade = "";
        this.cpf = "";
        this.temVeiculo = ""; // Por padrão, nenhum veículo
        this.habilitacao = "";
    }
}

