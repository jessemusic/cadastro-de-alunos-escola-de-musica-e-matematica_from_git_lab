import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CadastroAlunosComponent } from './cadastro-alunos/cadastro-alunos.component';
import { EnderecosAlunosComponent } from './enderecos-alunos/enderecos-alunos.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CadastroAlunosComponent,
    EnderecosAlunosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
