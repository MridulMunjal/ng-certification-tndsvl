import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ZipFormComponent } from './zip-form/zip-form.component';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ZipListComponent } from './zip-list/zip-list.component';
@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule,HttpClientModule],
  declarations: [AppComponent, HelloComponent, ZipFormComponent,ZipListComponent],
  bootstrap: [AppComponent],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule {}
