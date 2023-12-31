import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ResultproductComponent } from './pages/resultproduct/resultproduct.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'page', component: DetailComponent },
  { path: 'result', component: ResultproductComponent },
  { path: '**', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
