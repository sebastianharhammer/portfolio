import { ElementRef, Renderer2 } from '@angular/core';
import { LazyBackgroundDirective } from './lazy-background.directive';

describe('LazyBackgroundDirective', () => {
  let directive: LazyBackgroundDirective;

  beforeEach(() => {
    const elementRefMock = {
      nativeElement: document.createElement('div')
    } as ElementRef;

    const rendererMock = jasmine.createSpyObj('Renderer2', [
      'setStyle',
      'addClass',
      'removeClass'
    ]);

    directive = new LazyBackgroundDirective(
      elementRefMock,
      rendererMock
    );
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});




/* import { LazyBackgroundDirective } from './lazy-background.directive';

describe('LazyBackgroundDirective', () => {
  it('should create an instance', () => {
    const directive = new LazyBackgroundDirective();
    expect(directive).toBeTruthy();
  });
});
 */