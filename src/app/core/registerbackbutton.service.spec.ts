import { TestBed } from '@angular/core/testing';

import { RegisterbackbuttonService } from './registerbackbutton.service';

describe('RegisterbackbuttonService', () => {
  let service: RegisterbackbuttonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterbackbuttonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
