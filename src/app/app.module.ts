import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcquaintanceService } from './core/services/acquaintance.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    PagesModule,
    routing
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    AcquaintanceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
