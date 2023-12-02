import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosListaComponent } from './alunos-lista/alunos-lista.component';

const routes: Routes = [
  { path: '', component: AlunosListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
