import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { DiaryListComponent } from './diary-list/diary-list.component';
import { DiaryEditComponent } from './diary-edit/diary-edit.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'diarys',
    component: DiaryListComponent
  },
  {
    path: 'diarys/new',
    component: DiaryEditComponent
  },
  {
    path: 'diarys/:id',
    component: DiaryEditComponent
  },
  {
    path: 'diarys/:id/edit',
    component: DiaryEditComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
