import { TestBed } from '@angular/core/testing';

import { ApiAlunoService } from './api-aluno.service';

describe('ApiAlunoService', () => {
  let service: ApiAlunoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAlunoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
