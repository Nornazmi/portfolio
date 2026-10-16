import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectListComponent } from './pages/projects/project-list/project-list.component';
import { ProjectDetailComponent } from './pages/projects/project-detail/project-detail.component';
import { TrainingPageComponent } from './pages/training-page/training-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'home' }, // unique key per route
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'about' },
  },
  {
    path: 'projects',
    component: ProjectListComponent,
    data: { animation: 'projects' },
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent,
    data: { animation: 'project-detail' },
  },
  {
    path: 'training',
    component: TrainingPageComponent,
    data: { animation: 'training' },
  },
  { path: 'contact', redirectTo: 'about', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
