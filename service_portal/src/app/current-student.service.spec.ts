import { TestBed } from '@angular/core/testing';

import { CurrentStudentService } from './current-student.service';

describe('CurrentStudentService', () => {
  let service: CurrentStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
