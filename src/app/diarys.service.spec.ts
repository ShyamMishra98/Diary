import { TestBed } from '@angular/core/testing';
import { DiarysService } from './diarys.service';

describe('DiarysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiarysService = TestBed.get(DiarysService);
    expect(service).toBeTruthy();
  });
});
