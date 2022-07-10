import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./components/template/header/header.component";
import { HomeComponent } from "./components/template/home/home.component";
import { CadastroComponent } from "./components/template/cadastro/cadastro.component";
import { AdicionarComponent } from "./components/template/adicionar/adicionar.component";
const routes: Routes = [
  {
    path: "",
    component: HeaderComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "singup",
    component: CadastroComponent,
  },
  {
    path: "adicionar",
    component: AdicionarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
