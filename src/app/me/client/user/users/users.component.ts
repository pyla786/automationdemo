import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  tableList: Object[] = [
    { intApplicantId: 1, vcName: 'Kalyan Kurasala', vcEmail: true,vcStatus: true , vcPhone: '9834578XXX', vcPosition: "Developer", vcSkills: ".Net", vcExperience: '3.5', vcCategory: 'IT', vcJobType: "Permanant", vcResumePath: "", dtUpdated: null, intIQ: 100, vcReferral: "Yes", vcHRRecruiter: "Syeda", vcProcess: "4/15",workHours:8.00,Permissions:'12/20' },
    { intApplicantId: 2, vcName: 'S V Radha Krishna', vcEmail: false,vcStatus: false, vcPhone: '9584672XXX', vcPosition: "Developer", vcSkills: "PHP", vcExperience: '2.5', vcCategory: 'IT', vcJobType: "Contract", vcResumePath: "", dtUpdated: null, intIQ: 110, vcReferral: "No", vcHRRecruiter: "Siva", vcProcess: "8/15",workHours:10.00,Permissions:'12/20' },
    { intApplicantId: 3, vcName: 'Pranab Ray', vcEmail: true,vcStatus: true, vcPhone: '7854112XXX', vcPosition: "Developer", vcSkills: "Java", vcExperience: '3.1', vcCategory: 'IT', vcJobType: "Permanant", vcResumePath: "", dtUpdated: null, intIQ: 108, vcReferral: "Yes", vcHRRecruiter: "Syeda", vcProcess: "2/15",workHours:8.00,Permissions:'12/20' },
    {intApplicantId:4,vcName:'Anji', vcEmail:true,vcStatus:true, vcPhone:'9875896XXX',workHours:8.00,Permissions:'5/20'},
    {intApplicantId:5,vcName:'Bharath', vcEmail:true,vcStatus:true, vcPhone:'9988775XXX',workHours:8.00,Permissions:'5/20'},
    {intApplicantId:6,vcName:'Amit Kumar', vcEmail:false,vcStatus:true, vcPhone:'8575857XXX',workHours:8.00,Permissions:'4/20'},
    {intApplicantId:7,vcName:'Durga Prasad', vcEmail:true,vcStatus:false, vcPhone:'6987698XXX',workHours:8.00,Permissions:'7/20'},
    {intApplicantId:8,vcName:'Vamsi', vcEmail:true,vcStatus:true, vcPhone:'6020504XXX',workHours:8.00,Permissions:'9/20'},
    {intApplicantId:9,vcName:'Praveen', vcEmail:false,vcStatus:true, vcPhone:'8877998XXX',workHours:8.00,Permissions:'7/20'},
    {intApplicantId:10,vcName:'Naveen', vcEmail:true,vcStatus:false, vcPhone:'7897897XXX',workHours:10.00,Permissions:'11/20'},
    {intApplicantId:11,vcName:'Vaibhav', vcEmail:true,vcStatus:true, vcPhone:'8520314XXX',workHours:8.00,Permissions:'16/20'},
  ];
// tableList: any;



public popoverTitle: string = 'Confirm Delete';
public popoverMessage: string = 'Are you sure you want to delete this.?';
public popoverStatusTitle: string = 'Confirm Status Change';
public popoverStatusMessage: string = 'Are you sure you want to change status.?';
public cancelClicked: boolean = false;

filterToggle: boolean;

public searchText: string;
public page: any;
public settings: Settings;
constructor(public appSettings: AppSettings) {
    this.settings = this.appSettings.settings;
}

ngOnInit() {
    
}


}
