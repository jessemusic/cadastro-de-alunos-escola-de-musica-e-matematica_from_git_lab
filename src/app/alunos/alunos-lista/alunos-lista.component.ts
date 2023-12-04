import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/aluno-model/Aluno';
import { ApiAlunoService } from 'src/app/aluno/http-api/api-aluno.service';

@Component({
  selector: 'app-alunos-lista',
  templateUrl: './alunos-lista.component.html',
  styleUrls: ['./alunos-lista.component.scss']
})
export class AlunosListaComponent implements OnInit {

  alunos: Aluno[] | undefined;
constructor(private service: ApiAlunoService){}

  ngOnInit(): void {
    this.service.list().subscribe(dados => this.alunos = dados);
  }

}
