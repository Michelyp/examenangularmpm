import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProvider } from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ComprasusuarioComponent } from './comprasusuario/comprasusuario.component';
import { DetallecuboComponent } from './detallecubo/detallecubo.component';
import { ListacubosComponent } from './listacubos/listacubos.component';
import { LoginComponent } from './login/login.component';
import { PerfilusuarioComponent } from './perfilusuario/perfilusuario.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ZonausuarioComponent } from './zonausuario/zonausuario.component';
import { ServiceCubos } from './services/service.cubos';
import { ComprarcuboComponent } from './comprarcubo/comprarcubo.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ComprasusuarioComponent,
    DetallecuboComponent,
    ListacubosComponent,
    LoginComponent,
    PerfilusuarioComponent,
    RegistrarComponent,
    ZonausuarioComponent,
    ComprarcuboComponent
  ],
  imports: [
    BrowserModule, BrowserModule,
    routing, HttpClientModule, FormsModule
  ],
  providers: [appRoutingProvider,ServiceCubos],
  bootstrap: [AppComponent]
})
export class AppModule { }
