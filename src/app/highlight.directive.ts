import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() bgColor:string;
  @Input() fontSize: string;
  @Input() fontFamily:string;
  constructor(private element:ElementRef, private renderer:Renderer2) { 
    console.log('fontSize '+this.fontSize+' fontfamily '+this.fontFamily);
  }

  ngOnInit():void{
    console.log('fontSize '+this.fontSize+' fontfamily '+this.fontFamily);
    this.renderer.setStyle(this.element.nativeElement,'fontSize',this.fontSize);
    this.renderer.setStyle(this.element.nativeElement,'fontFamily',this.fontFamily);
    this.renderer.setStyle(this.element.nativeElement,'color',this.bgColor);
  }

}
