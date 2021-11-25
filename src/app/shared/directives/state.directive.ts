import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]',
})
export class StateDirective implements OnChanges {
  @Input() public appState!: string;
  @HostBinding('class') tdClassName!: string;

  constructor() {}
  ngOnChanges() {
    // console.log(this.appState);
    this.tdClassName = `state-${this.appState.toLowerCase()}`;
  }
}
