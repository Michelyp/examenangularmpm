import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { ListacubosComponent } from "./listacubos/listacubos.component";
import { DetallecuboComponent } from "./detallecubo/detallecubo.component";
import { LoginComponent } from "./login/login.component";
import { RegistrarComponent } from "./registrar/registrar.component";
import { ZonausuarioComponent } from "./zonausuario/zonausuario.component";
import { PerfilusuarioComponent } from "./perfilusuario/perfilusuario.component";
import { ComprasusuarioComponent } from "./comprasusuario/comprasusuario.component";
import { ComprarcuboComponent } from "./comprarcubo/comprarcubo.component";

 
const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {
        path: "marcas/:idMarca", component: ListacubosComponent
    },
    {
        path: "detalle/:idCubo", component: DetallecuboComponent
    },
    {
        path: "login", component: LoginComponent
    },
    {
        path: "registro", component: RegistrarComponent
    },
    {
        path: "zonaUsuario", component: ZonausuarioComponent
    },
    {
        path: "zonaUsuario/perfil", component: PerfilusuarioComponent
    },
    {
        path: "zonaUsuario/compras", component: ComprasusuarioComponent
    },
    {
        path: "zonaUsuario/comprarcubo", component: ComprarcuboComponent
    }

]
export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);