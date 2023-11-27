import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'}
)
export class CardCursosService {

  constructor() { }
  getCursos() {
    return [
      {
        id: 1,
        descricao: 'Escolha o seu curso e viva uma experiencia total de aprendizagem focada no tema!',
        tipoCurso: 'Curso',
        valor: 300,
        pacote: 'Mensais'
      },
      {
        id: 2,
        descricao: 'Phone XL',
        tipoCurso: 'Curso',
        valor: 10000,
        pacote: 'Pacote'
      },
      {
        id: 3,
        descricao: 'Carro',
        tipoCurso: 'Curso',
        valor: 100,
        pacote: 'Pacote'
      },
      {
        id: 4,
        descricao: 'Celular',
        tipoCurso: 'Curso',
        valor: 10,
        pacote: 'Pacote'
      }
    ];

  }
}
