import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let service: LanguageService;

  const translateMock = {
    setTranslation: jasmine.createSpy('setTranslation'),
    setDefaultLang: jasmine.createSpy('setDefaultLang'),
    use: jasmine.createSpy('use'),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TranslateService, useValue: translateMock },
      ],
    });

    service = TestBed.inject(LanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize translations and set default language', () => {
    expect(translateMock.setTranslation).toHaveBeenCalledWith('en', jasmine.any(Object));
    expect(translateMock.setTranslation).toHaveBeenCalledWith('de', jasmine.any(Object));
    expect(translateMock.setDefaultLang).toHaveBeenCalledWith('en');
    expect(translateMock.use).toHaveBeenCalled(); // called with active language
  });
});



/* import { TestBed } from '@angular/core/testing';

import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
 */