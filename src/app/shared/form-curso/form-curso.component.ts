import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { CadastroAlunosComponent } from 'src/app/cadastro/cadastro-alunos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.scss']
})
export class FormCursoComponent {
[x: string]: any;
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  openDialog() {
    this.dialog.open(ModalComponent)
  }
  onCadastroDeAlunos() {
    this.router.navigate(['/cadastro'], {relativeTo: this.route})
  }

  onListaDeAlunos() {
    this.router.navigate(['/lista'], {relativeTo: this.route})
  }

}
