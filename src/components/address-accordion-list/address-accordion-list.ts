import { Component, Input, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'address-accordion-list',
  templateUrl: 'address-accordion-list.html'
})
export class AddressAccordionListComponent {

  @ViewChild('expandWrapper', { read: ElementRef }) expandWrapper;
  @Input('expanded') expanded;
  @Input('expandHeight') expandHeight;

  constructor(public renderer: Renderer) {

  }

  ngAfterViewInit(){
    this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight);
  }

}
