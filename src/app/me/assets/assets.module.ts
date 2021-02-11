import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetMasterComponent } from './asset-master/asset-master.component';
import { AssetTransferComponent } from './asset-transfer/asset-transfer.component';
import { AssetDisposalComponent } from './asset-disposal/asset-disposal.component';
import { AssetMaintenanceComponent } from './asset-maintenance/asset-maintenance.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AddassetDialogComponent } from './asset-master/addasset-dialog/addasset-dialog.component';
import { AddassetGridcolumnsComponent } from './asset-master/addasset-gridcolumns/addasset-gridcolumns.component';
import { OwlNativeDateTimeModule, OwlDateTimeModule } from 'ng-pick-datetime';
import { LegendEntryComponent, NgxChartsModule } from '@swimlane/ngx-charts';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DndModule } from 'ngx-drag-drop';
import { DragDropModule } from 'primeng/primeng';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { AlertService } from 'src/app/shared/services/alert.service';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddassetmaintainenceDialogComponent } from './asset-master/addassetmaintainence-dialog/addassetmaintainence-dialog.component';
import { ServiceHistoryDialogComponent } from './asset-maintenance/service-history-dialog/service-history-dialog.component';
import { AssettransferGridcolumnsComponent } from './asset-transfer/assettransfer-gridcolumns/assettransfer-gridcolumns.component';
import { AssetmaintenanceGridcolumnsComponent } from './asset-maintenance/assetmaintenance-gridcolumns/assetmaintenance-gridcolumns.component';
import { AssetdisposalGridcolumnsComponent } from './asset-disposal/assetdisposal-gridcolumns/assetdisposal-gridcolumns.component';

export const routes = [
  { path: '', component:AssetDisposalComponent, pathMatch: 'full' },
  { path: 'asset-maintenance', component: AssetMaintenanceComponent, data: { breadcrumb: "Assets Maintenance" } },
  { path: 'asset-master', component: AssetMasterComponent, data: { breadcrumb: "Assets Master" } },
  { path: 'asset-transfer', component: AssetTransferComponent, data: { breadcrumb: "Assets Transfer" } },
];

@NgModule({
  declarations: [AssetMasterComponent, AssetTransferComponent, AssetDisposalComponent, AssetMaintenanceComponent, AddassetDialogComponent, AddassetGridcolumnsComponent, AddassetmaintainenceDialogComponent, ServiceHistoryDialogComponent, AssettransferGridcolumnsComponent, AssetmaintenanceGridcolumnsComponent,AssetdisposalGridcolumnsComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,DndModule,DragDropModule,MglTimelineModule
  ],
  providers: [AlertService],
  entryComponents:[AddassetDialogComponent,AddassetGridcolumnsComponent,AssetdisposalGridcolumnsComponent,AssetmaintenanceGridcolumnsComponent,DeleteConfirmDialogComponent,AddassetmaintainenceDialogComponent,ServiceHistoryDialogComponent,AssettransferGridcolumnsComponent]
})
export class AssetsModule { }
