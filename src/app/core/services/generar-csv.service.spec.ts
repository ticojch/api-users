import { TestBed } from '@angular/core/testing';

import { GenerarCsvService } from './generar-csv.service';

describe('GenerarCsvService', () => {
  let service: GenerarCsvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerarCsvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
