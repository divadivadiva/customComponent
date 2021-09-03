import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbCardModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { DoBootstrap } from '@angular/core';

@NgModule({
  declarations: [CustomComponentComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbLayoutModule,
    NbCardModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbEvaIconsModule,
    AppRoutingModule,
  ],
  providers: [],
  // bootstrap: [AppComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(CustomComponentComponent, {
      injector: this.injector,
    });
    customElements.define('news-widget', el);
  }
}
