import { CustomStyleDirective } from './custom-style.directive';

describe('CustomStyleDirective', () => {
  it('should create an instance', () => {

    let elRefMock = {
      nativeElement: document.createElement('')
    };

    const directive = new CustomStyleDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
