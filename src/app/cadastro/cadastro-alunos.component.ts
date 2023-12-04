import { FormBuilder, FormGroup } from '@angular/forms';
import { FormCursoComponent } from './../shared/form-curso/form-curso.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-alunos',
  templateUrl: './cadastro-alunos.component.html',
  styleUrls: ['./cadastro-alunos.component.scss']
})
  

export class CadastroAlunosComponent implements OnInit {
  
  form: FormGroup;

  constructor(private FormBuilder: FormBuilder) {
    this.form = this.FormBuilder.group({
      nome: [null],
      email: [null],
      telefone: [null],
      endereco: [null],
      curso: [null]
    });
  }
  ngOnInit(): void {

  }


}


