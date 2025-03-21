import { Directive, ElementRef, Input, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[lazyBackground]'
})
export class LazyBackgroundDirective implements AfterViewInit {
  @Input() lowRes!: string;
  @Input() highRes!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const element = this.el.nativeElement;

    // Set the low-resolution image first
    this.renderer.setStyle(element, 'backgroundImage', `url(${this.lowRes})`);
    this.renderer.addClass(element, 'loading'); // Optional: Blur effect

    // Preload high-resolution image
    const img = new Image();
    img.src = this.highRes;
    img.onload = () => {
      // Once loaded, swap to high-res image
      this.renderer.setStyle(element, 'backgroundImage', `url(${this.highRes})`);
      this.renderer.removeClass(element, 'loading'); // Remove blur effect
    };
  }
}
