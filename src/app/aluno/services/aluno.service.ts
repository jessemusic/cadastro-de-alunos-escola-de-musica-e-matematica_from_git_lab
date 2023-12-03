import { Injectable } from '@angular/core';
import { Aluno } from 'src/app/aluno-model/Aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor() { }

  public salvar(data: Aluno) {
    localStorage.setItem(data.cpf, JSON.stringify(data));
  }
}
