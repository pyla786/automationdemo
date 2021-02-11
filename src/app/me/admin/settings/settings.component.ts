import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  providers: [AlertService]
})
export class SettingsComponent implements OnInit {

  public popoverStatusTitle: string = 'Confirm Save Change';
  public popoverStatusMessage: string = 'Are you sure you want to save changes.?';
  public cancelClicked: boolean = false;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
  }

  tableList: Object[] = [
    { intSettingsId: 1, name: 'Grid Length', description:'Default Grid Length', old_value:'5'},
    { intSettingsId: 2, name: 'Notification Email', description:'Default Notification Email', old_value:'nagarajan@optimaheat.com'}

  ];

  saveSettings() {
    this.alertService.createAlert('Successfully Saved.', 1);
  }

}
