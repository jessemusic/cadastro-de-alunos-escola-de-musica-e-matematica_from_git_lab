import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecosAlunosComponent } from './enderecos-alunos.component';

describe('EnderecosAlunosComponent', () => {
  let component: EnderecosAlunosComponent;
  let fixture: ComponentFixture<EnderecosAlunosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnderecosAlunosComponent]
    });
    fixture = TestBed.createComponent(EnderecosAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
