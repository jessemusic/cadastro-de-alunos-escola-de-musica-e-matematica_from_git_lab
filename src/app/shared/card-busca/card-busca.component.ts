
import { Component, OnInit } from '@angular/core';

import { CardCursosService } from '../card/card-cursos.service';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss']
})
export class CardBuscaComponent implements OnInit{
  
  cursos : any [];

  constructor(private cardCursosService: CardCursosService) {
    this.cursos = this.cardCursosService.getCursos();
   }
  
  
  ngOnInit(): void {

  }

}
