import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';
import { BorderComponent } from './border/border.component';
import { ColorComponent } from './color/color.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  { path: 'color', component: ColorComponent },
  { path: 'color/:type', component: ColorComponent },
  { path: 'border', component: BorderComponent },
  { path: 'animation', component: AnimationComponent },
  { path: 'other', component: OtherComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitiesRoutingModule { }
