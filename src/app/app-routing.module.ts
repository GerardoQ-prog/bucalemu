import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ServicesComponent } from './views/services/services.component';
import { AboutComponent } from './views/about/about.component';
import { CoverageComponent } from './views/coverage/coverage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicios', component: ServicesComponent },
  { path: 'quienes-somos', component: AboutComponent },
  { path: 'cobertura', component: CoverageComponent },

  // { path: 'personas/agregar', component: FormularioComponent },
  // { path: 'personas/:id', component: FormularioComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
