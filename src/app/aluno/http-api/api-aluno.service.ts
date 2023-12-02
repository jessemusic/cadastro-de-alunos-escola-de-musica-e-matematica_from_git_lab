import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from 'src/app/aluno-model/Aluno';

@Injectable({
  providedIn: 'root'
})
export class ApiAlunoService {

 
  private apiUrl = ' http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Exemplo de uma requisição GET
  getDados(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/alunos`);
  }

  // Exemplo de uma requisição POST
  salvar(data: Aluno): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/alunos`, data);
  }

  //   public salvar(data: Aluno) Observable: any {
  //     // localStorage.setItem(data.cpf, JSON.stringify(data));
  //   return this.http.post<any>(`${this.apiUrl}/alunos`, data);  
  // }
}
