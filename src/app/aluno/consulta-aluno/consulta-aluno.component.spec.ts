import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAlunoComponent } from './consulta-aluno.component';

describe('ConsultaAlunoComponent', () => {
  let component: ConsultaAlunoComponent;
  let fixture: ComponentFixture<ConsultaAlunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaAlunoComponent]
    });
    fixture = TestBed.createComponent(ConsultaAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
