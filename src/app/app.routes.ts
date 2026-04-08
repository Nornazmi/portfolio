import { Routes } from '@angular/router';
import { HomeComponent }          from './pages/home/home.component';
import { AboutComponent }         from './pages/about/about.component';
import { ContactComponent }       from './pages/contact/contact.component';
import { ProjectListComponent }   from './pages/projects/project-list/project-list.component';
import { ProjectDetailComponent } from './pages/projects/project-detail/project-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'home' }           // unique key per route
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'about' }
  },
  {
    path: 'projects',
    component: ProjectListComponent,
    data: { animation: 'projects' }
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent,
    data: { animation: 'project-detail' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'contact' }
  },
  { path: '**', redirectTo: '' }
];
