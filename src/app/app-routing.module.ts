import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KodaCraftMaquetasComponent } from './koda-craft-maquetas/koda-craft-maquetas.component';
import { KodaCraftAboutComponent } from './koda-craft-about/koda-craft-about.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'maquetas',
    pathMatch: 'full'
  },
  {
    path: 'maquetas',
    component: KodaCraftMaquetasComponent
  },
  {
    path: 'about',
    component: KodaCraftAboutComponent
  },
  {
    path: 'contact',
    component: ContactFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
