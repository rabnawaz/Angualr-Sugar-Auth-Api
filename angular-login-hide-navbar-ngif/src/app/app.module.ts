import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './app-material/app-material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';

import { LoginComponent } from './login/login.component';

import { HttpModule } from '@angular/http';
import { TestService } from './services/test.service';
import { ContactDetailService } from './services/contact-detail.service';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AccountsComponent } from './accounts/accounts.component';

import { FilterPipe} from './contacts/filter.pipe';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';





@NgModule({
  declarations: [
    AppComponent,
    FilterPipe ,
    HomeComponent,
    ContactsComponent,
    HeaderComponent,
    LoginComponent,
    AccountsComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpModule
    
  ],
  exports: [
    FilterPipe
  ],
  providers: [AuthService, AuthGuard, TestService, ContactDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
