import { NgModule } from '@angular/core';

import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

import { GoogleLoginComponent } from './google-login/google-login';
import { AddressAccordionListComponent } from './address-accordion-list/address-accordion-list';

@NgModule({
	declarations: [GoogleLoginComponent, AddressAccordionListComponent],
	imports: [
		CommonModule, // <--- for angular directives
		IonicModule  // <--- for ionic components
	],
	exports: [GoogleLoginComponent, AddressAccordionListComponent]
})
export class ComponentsModule { }
