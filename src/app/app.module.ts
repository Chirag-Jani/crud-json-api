import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRestoComponent } from './create-resto/create-resto.component';
import { ReadRestoComponent } from './read-resto/read-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    CreateRestoComponent,
    ReadRestoComponent,
    UpdateRestoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
  ],
  exports: [MatInputModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
