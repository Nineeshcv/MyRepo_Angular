import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS, Injector } from '@angular/core';
import {FormsModule} from '@angular/forms'

import {createCustomElement} from '@angular/elements';
import { InfoBoxComponent } from './info-box/info-box.component';

@NgModule({
  declarations: [
    
    InfoBoxComponent
  ],
  imports: [
    
    BrowserModule, FormsModule
  ],
  providers: [],
 // bootstrap: []
  entryComponents:[InfoBoxComponent],
})
export class AppModule {

  /*constructor(injector: Injector){
    const el = createCustomElement(InfoBoxComponent,{injector});
    customElements.define('info-box',el);
  } */
  constructor(injector: Injector) {
    const el = createCustomElement(InfoBoxComponent, { injector });
    customElements.define('info-box', el);
  }

  ngDoBootstrap(){}


 }
