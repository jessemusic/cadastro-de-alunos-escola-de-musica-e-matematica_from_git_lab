import { ApiAlunoService } from './../aluno/http-api/api-aluno.service';
import { AlunoService } from './../aluno/services/aluno.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { FormCursoComponent } from './../shared/form-curso/form-curso.component';
import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno-model/Aluno';
import { Estado } from '../estado/Estado';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastro-alunos',
  templateUrl: './cadastro-alunos.component.html',
  styleUrls: ['./cadastro-alunos.component.scss']
})
  

export class CadastroAlunosComponent implements OnInit {

  public data!: Aluno;

  estados: any = new Estado();
  
  constructor(
    private messageService: MessageService,
    private alunoService: AlunoService,
    private apiAlunoService: ApiAlunoService

  ) { }
    
   
   dados: any;

   ngOnInit(): void {
     this.data = new Aluno();

     this.apiAlunoService.getDados().subscribe(
      (data) => {
         this.dados = data;
         console.log(this.dados)
      },
      (error) => {
        console.error('Erro na requisição:', error);
      }
    );
  }


  salvar(form: NgForm) {
      
    this.messageService.clear;
    if (form.valid) {
      this.alunoService.salvar(this.data);
      this.messageService.add({ severity: "sucess", summary: "Infomação", detail: "Aluno cadastrado com sucesso" });
    } else this.messageService.add({ severity: "error", summary: "Erro", detail: "Preencha os campos obrigatórios(*)!" });

  
  }



}


