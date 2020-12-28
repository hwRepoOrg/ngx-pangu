import { TestBed } from '@angular/core/testing';

import { AngularEditorLibService } from './angular-editor-lib.service';

describe('AngularEditorLibService', () => {
  let service: AngularEditorLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularEditorLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
