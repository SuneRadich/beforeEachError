import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseRouterComponent } from './use-router/use-router.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([])],
  declarations: [UseRouterComponent],
  exports: [UseRouterComponent],
})
export class AbetestModule {}
