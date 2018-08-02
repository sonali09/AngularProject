import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMagnify]'
})
export class MagnifyDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { }
  
  @HostBinding('class.icon-thumbnailSmall') smallStyle = true;
  @HostBinding('class.icon-thumbnailLarge') LargeStyle = false;

  @HostListener('mouseenter')onMouseEnter() {
    this.renderer.addClass(this.element.nativeElement, 'icon-thumbnailLarge');
    //this.smallStyle = false;
    //this.LargeStyle = true;
  }
  @HostListener('mouseleave')onMouseLeave() {
    this.renderer.removeClass(this.element.nativeElement,'icon-thumbnailLarge');
    this.renderer.addClass(this.element.nativeElement, 'icon-thumbnailSmall');
    //this.smallStyle = true;
    //this.LargeStyle = false;
  }
}