import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UwindSharedModule } from 'app/shared/shared.module';
import { SortieComponent } from './sortie.component';
import { SortieDetailComponent } from './sortie-detail.component';
import { SortieUpdateComponent } from './sortie-update.component';
import { SortieDeleteDialogComponent } from './sortie-delete-dialog.component';
import { sortieRoute } from './sortie.route';

@NgModule({
  imports: [UwindSharedModule, RouterModule.forChild(sortieRoute)],
  declarations: [SortieComponent, SortieDetailComponent, SortieUpdateComponent, SortieDeleteDialogComponent],
  entryComponents: [SortieDeleteDialogComponent],
})
export class UwindSortieModule {}
