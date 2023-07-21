import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNewHighlight]'
})
export class NewHighlightDirective implements OnInit {
  @Input() defaultColor: string = "transparent";
  @Input() highlightColor: string = "orange";
  @HostBinding("style.backgroundColor") backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "orange");
    this.backgroundColor = this.defaultColor;
  }

  @HostListener("mouseover") mouseover(event: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "orange");
    this.backgroundColor = this.highlightColor;
  }

  @HostListener("mouseleave") mouseleave(event: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "transparent");
    this.backgroundColor = this.defaultColor;
  } 
}
