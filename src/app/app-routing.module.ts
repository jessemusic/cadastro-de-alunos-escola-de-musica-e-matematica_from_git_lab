import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroAlunosComponent } from './cadastro/cadastro-alunos.component';
import { ConsultaAlunoComponent } from './aluno/consulta-aluno/consulta-aluno.component';
import { AlunosListaComponent } from './alunos/alunos-lista/alunos-lista.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: '',pathMatch: 'full',redirectTo : 'alunos' },
  { path: 'cadastro', component: CadastroAlunosComponent },
  { path: 'consulta', component: ConsultaAlunoComponent },
  { path: 'lista', component: AlunosListaComponent },
  { path: 'sobre', component: SobreComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
