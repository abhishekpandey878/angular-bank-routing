import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import  { RouterModule } from "@angular/router";
import {appRoutes} from "./routerConfig";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { CardComponent} from "./cardNum/card.component";
import { MaterialModule} from "./material.module";

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), BrowserAnimationsModule, MaterialModule, AppRoutingModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, CardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
