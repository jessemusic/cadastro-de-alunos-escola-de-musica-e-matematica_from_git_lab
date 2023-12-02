import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosListaComponent } from './alunos-lista.component';

describe('AlunosListaComponent', () => {
  let component: AlunosListaComponent;
  let fixture: ComponentFixture<AlunosListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlunosListaComponent]
    });
    fixture = TestBed.createComponent(AlunosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
