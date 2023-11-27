import { TestBed } from '@angular/core/testing';

import { CardCursosService } from './card-cursos.service';

describe('CardCursosService', () => {
  let service: CardCursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardCursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
