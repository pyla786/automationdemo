import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { UsersService } from './users.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [UsersService, AlertService]
})
export class UsersComponent implements OnInit {

    tableList: Object[] = [
        { "sno": 1, code: '012', vcName: 'Mukesh', email: "mukesh@optimaheat.com", vcStatus: true, phone: '9834578123', role: "Engineer", vcPosition: "Developer", vcSkills: ".Net", vcExperience: '3.5', vcCategory: 'IT', vcJobType: "Permanant", vcResumePath: "", dtUpdated: null, intIQ: 100, vcReferral: "Yes", vcHRRecruiter: "Syeda", vcProcess: "4/15", workHours: 8.00, Permissions: '12/20' },
        { "sno": 2, code: '011', vcName: 'Raj Kumar', email: "rajkumar@optimaheat.com", vcStatus: false, phone: '9584672123', role: "Project manager", vcPosition: "Developer", vcSkills: "PHP", vcExperience: '2.5', vcCategory: 'IT', vcJobType: "Contract", vcResumePath: "", dtUpdated: null, intIQ: 110, vcReferral: "No", vcHRRecruiter: "Siva", vcProcess: "8/15", workHours: 10.00, Permissions: '12/20' },
        { "sno": 3, code: '089', vcName: 'Adityesh', email: "adityesh@optimaheat.com", vcStatus: true, phone: '7854112123', role: "Engineer", vcPosition: "Developer", vcSkills: "Java", vcExperience: '3.1', vcCategory: 'IT', vcJobType: "Permanant", vcResumePath: "", dtUpdated: null, intIQ: 108, vcReferral: "Yes", vcHRRecruiter: "Syeda", vcProcess: "2/15", workHours: 8.00, Permissions: '12/20' },
        { "sno": 4, code: '056', vcName: 'Dhanraj', email: "dhanraj@optimaheat.com", vcStatus: true, phone: '9875896123', role: "Project manager", workHours: 8.00, Permissions: '5/20' },
        { "sno": 5, code: '043', vcName: 'kabir', email: "kabir@optimaheat.com", vcStatus: true, phone: '9988775123', role: "Engineer", workHours: 8.00, Permissions: '5/20' }
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
    constructor(public appSettings: AppSettings,
        public dialog: MatDialog,
        public usersService: UsersService, private alertService: AlertService) {
        this.settings = this.appSettings.settings;
    }

    ngOnInit() {
        // this.getUser()
    }

    // getUser() {
    //     this.tableList = null;
    //     this.usersService.getUser()
    //         .subscribe(
    //             data => {
    //                 this.tableList = data;
    //                 console.log(data);
    //             }
    //         )

    // }




    public openUserDialog(id) {
        let dialogRef = this.dialog.open(UserDialogComponent, {
            data: id,
            height: 'auto',
            width: '600px'
        });
        dialogRef.afterClosed().subscribe(data => {
        });
    }


    deleteUser() {
        this.alertService.createAlert('Successfully deleted.', 1);
    }

    saveStatus() {
        this.alertService.createAlert('Successfully saved.', 1);
    }

}