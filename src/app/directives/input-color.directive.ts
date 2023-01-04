import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[inputColor]'
})
export class InputColorDirective {

  constructor() { }

  @HostListener('keydown')
  onKeyDown() {
      this.bgColor = this._getRandomColor()
  }

  @HostBinding('style.backgroundColor')
  bgColor = ''

  private _getRandomColor() {
    return '#'+this.colors[this._getRandomInt(0,5)]
}

private colors = ["d3f8e2","e4c1f9","f694c1","ede7b1","a9def9"]
private _getRandomInt(min:number, max:number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

}
