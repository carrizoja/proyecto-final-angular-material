import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStudentsPage]'
})
export class StudentsPageDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) { }


  ngOnInit() {
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'font-size',
      '20px'
    );
  }
}
