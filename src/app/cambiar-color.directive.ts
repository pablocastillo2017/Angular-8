import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCambiarColor]',
})
export class CambiarColorDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.cambiarColor('green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.cambiarColor(null);
  }

  cambiarColor(color) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
