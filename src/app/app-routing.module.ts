import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { AnimationComponent } from './utilities/animation/animation.component';
import { BorderComponent } from './utilities/border/border.component';
import { ColorComponent } from './utilities/color/color.component';
import { OtherComponent } from './utilities/other/other.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'utilities', children: [
      { path: 'color', component: ColorComponent },
      { path: 'color/:type', component: ColorComponent },
      { path: 'border', component: BorderComponent },
      { path: 'animation', component: AnimationComponent },
      { path: 'other', component: OtherComponent },
    ]
  },
  { path: '**', pathMatch: 'full', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
