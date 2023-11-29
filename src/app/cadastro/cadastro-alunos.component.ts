import { FormBuilder, FormGroup } from '@angular/forms';
import { FormCursoComponent } from './../shared/form-curso/form-curso.component';
import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno/aluno.service';
import { Aluno } from '../aluno-model/Aluno';

@Component({
  selector: 'app-cadastro-alunos',
  templateUrl: './cadastro-alunos.component.html',
  styleUrls: ['./cadastro-alunos.component.scss']
})
  

export class CadastroAlunosComponent implements OnInit {

  estados = [
  { sigla: 'XX', nome: '' },
  { sigla: 'AC', nome: 'Acre' },
  { sigla: 'AL', nome: 'Alagoas' },
  { sigla: 'AP', nome: 'Amapá' },
  { sigla: 'AM', nome: 'Amazonas' },
  { sigla: 'BA', nome: 'Bahia' },
  { sigla: 'CE', nome: 'Ceará' },
  { sigla: 'DF', nome: 'Distrito Federal' },
  { sigla: 'ES', nome: 'Espírito Santo' },
  { sigla: 'GO', nome: 'Goiás' },
  { sigla: 'MA', nome: 'Maranhão' },
  { sigla: 'MT', nome: 'Mato Grosso' },
  { sigla: 'MS', nome: 'Mato Grosso do Sul' },
  { sigla: 'MG', nome: 'Minas Gerais' },
  { sigla: 'PA', nome: 'Pará' },
  { sigla: 'PB', nome: 'Paraíba' },
  { sigla: 'PR', nome: 'Paraná' },
  { sigla: 'PE', nome: 'Pernambuco' },
  { sigla: 'PI', nome: 'Piauí' },
  { sigla: 'RJ', nome: 'Rio de Janeiro' },
  { sigla: 'RN', nome: 'Rio Grande do Norte' },
  { sigla: 'RS', nome: 'Rio Grande do Sul' },
  { sigla: 'RO', nome: 'Rondônia' },
  { sigla: 'RR', nome: 'Roraima' },
  { sigla: 'SC', nome: 'Santa Catarina' },
  { sigla: 'SP', nome: 'São Paulo' },
  { sigla: 'SE', nome: 'Sergipe' },
  { sigla: 'TO', nome: 'Tocantins' },
  { sigla: 'EX', nome: 'Estrangeiro' },
];
  
  form: FormGroup;

novoAluno: any = new Aluno();

  constructor(private FormBuilder: FormBuilder,
    private alunoService: AlunoService) {
    
    
    this.form = this.FormBuilder.group({
      nome: [null],
      email: [null],
      telefone: [null],
      endereco: [null],
      curso: [null]
    });
  }

    // adicionarAluno(): void {
    // // dados do formulário preenchidos pelo usuário
    // this.alunoService.adicionarAluno(this.novoAluno).subscribe((response: any) => {
    //   // Faça algo com a resposta do serviço, se necessário
    //   console.log(response);

    //   // Reinicie o objeto para um novo aluno
    //   this.novoAluno = new Aluno();
    // });
// }
  ngOnInit(): void {

  }

  enviarFormulario() {
    
  }

  


}


