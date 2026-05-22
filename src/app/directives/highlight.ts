import { Directive, ElementRef, HostListener, Input } from '@angular/core';
const DEFAULT_HIGHLIGHT_COLOR = 'yellow';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @Input() highlightColor: string = DEFAULT_HIGHLIGHT_COLOR;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
