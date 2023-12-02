import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroAlunosComponent } from './cadastro/cadastro-alunos.component';
import { ConsultaAlunoComponent } from './aluno/consulta-aluno/consulta-aluno.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: '',pathMatch: 'full',redirectTo : 'alunos' },
  { path: 'cadastro', component: CadastroAlunosComponent },
  { path: 'consulta', component: ConsultaAlunoComponent }
  // {path: 'alunos',loadChildren: './alunos/alunos.module#AlunosModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
