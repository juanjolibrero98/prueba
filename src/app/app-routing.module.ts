import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@guards/auth.guard';
import { RedirectGuard } from '@guards/redirect.guard';

//routing.module que carga modulos por separado, 2 modulos principales
//AuthModule que se encarga de la gestion de la autenticacion de la app(parte extarna)
//LayoutModule se encarga del layout, cargar los modulos internos de la app(parte interna)
const routes: Routes = [
  {
    path: '',
    canActivate: [ RedirectGuard ],
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'app',
    canActivate: [ AuthGuard ],//poner el guard aqui hace que los routing internos de layoutModule esten tmb protegidos
    loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
