import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { HomeComponent } from './components/template/home/home.component';
import { CadastroComponent } from './components/template/cadastro/cadastro.component';
import { AdicionarComponent } from './components/template/adicionar/adicionar.component';
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, CadastroComponent, AdicionarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
