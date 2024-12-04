import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from '@guards/auth.guard';

//añado canActivate: [ AuthGuard ], en este routing de layout(hijo del mencionado en el routing principal)
//para que lo escuchen tmb cada vez que se cambia entre pag, ya que el otro lo escucha solo 1 vez al cargar la app
//y asi cuando el token expire expulse al usuario cuando cambie de pag y no solo al refrescar la web f5
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'boards',
        pathMatch: 'full'
      },
      {
        path: 'boards',
        canActivate: [ AuthGuard ],
        loadChildren: () =>
          import('../boards/boards.module').then((m) => m.BoardsModule),
      },
      {
        path: 'profile',
        canActivate: [ AuthGuard ],
        loadChildren: () =>
          import('../profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'users',
        canActivate: [ AuthGuard ],
        loadChildren: () =>
          import('../users/users.module').then((m) => m.UsersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
