import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BsFooterComponent } from './components/bs-footer/bs-footer.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [
    BsNavbarComponent,
    BsFooterComponent,
    HomeComponent,
    LoginComponent,
  ],
  exports: [
    BsNavbarComponent,
    BsFooterComponent,
  ]
})
export class CoreModule { }
