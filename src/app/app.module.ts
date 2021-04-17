import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ColorComponent } from './utilities/color/color.component';
import { BorderComponent } from './utilities/border/border.component';
import { AnimationComponent } from './utilities/animation/animation.component';
import { OtherComponent } from './utilities/other/other.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    DashboardComponent,
    NotFoundComponent,
    ColorComponent,
    BorderComponent,
    AnimationComponent,
    OtherComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
