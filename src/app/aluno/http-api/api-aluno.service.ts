import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from 'src/app/aluno-model/Aluno';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiAlunoService {

 
  private apiUrl = ' http://localhost:3000';

  private readonly API = this.apiUrl+'/alunos';
    
  constructor(private http: HttpClient) { }

  // Exemplo de uma requisição GET
  getDados(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/alunos`);
  }

  // Exemplo de uma requisição POST
  salvar(data: Aluno): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/alunos`, data);
  }


  list() {
    return this.http.get<Aluno[]>(`${this.apiUrl}/alunos`).pipe
      (
        tap(console.log));
  }

}
