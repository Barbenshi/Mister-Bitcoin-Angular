import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[editable]'
})
export class EditableDirective {

  constructor(private el: ElementRef) { }

  @Output('editable') contentChanged = new EventEmitter()

  @HostListener('mouseover', ['$event'])
  onMouseOver(ev: MouseEvent) {
      this.isEditable = true
  }

  @HostListener('focus')
  onFocus() {
      this.cursor = ''
  }

  @HostListener('blur')
  onBlur() {
      this.isEditable = false
      this.cursor = 'pointer'
      this.contentChanged.emit(this.el.nativeElement.innerText)
  }

  @HostBinding('contentEditable')
  isEditable = false

  @HostBinding('style.cursor')
  cursor = 'pointer'


}
