import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  employeeForm:FormGroup;
  isQuote:boolean=true;
  isProject:boolean=false;
  contactoptions: string[] = ['Isaac Walker', 'Henry Wade', 'Hilda Sweden', 'Marco Wilson', 'Martin Zeller'];
  existingContactName: string = 'Henry Wade';
  constructor() { }
  toolBar = {
    "toolbar": [
      ["bold", "italic", "underline", "strikeThrough"],
      ["justifyLeft", "justifyRight", "justifyFull", "outdent"]
    ]
  }
  selectedReason='Constructing a new building';
  surveyOptions = ["Severance", "Constructing a new building", "Building a fence", "Want to know where my boundaries are",
  "Selling my house", "Minor variance", "Building permit application", "Need information for architect or engineering design",
  "Need topographic information", "Other"];
  ReasonQuestions  = ['Do you have an existing copy of a survey for the property ',
      'Are you applying for a severance or has it already been approved',
      'Do you have a sketch showing the proposed severanc',
      'Do you with a list of severance conditions from the municipality that you can provide'];
      SelectedReasonQuestions  = ['Do you have an existing copy of a survey for the property ',
      'Are you applying for a severance or has it already been approved'];
      hearOptions = ["Website", "Social Media (Facebook, Twitter etc)", "Referral (Friend, Family, Etc)", "Google", "Previously a Client", "Other"]
      DetailsText = 'Do you with a list of severance conditions from the municipality that you can provide';
   selectedValue = "1";
  ngOnInit() {
    this.isProject = true;
    this.employeeForm=new FormGroup({
      notes: new FormControl('Q-190001'),
      Quote: new FormControl('New Project'),
      Client: new FormControl('Toronto Towers'),
      Survey: new FormControl('Reference Plan'),
      Admin: new FormControl('James Smith'),
      Account: new FormControl('Rob'),
      Email: new FormControl('james2136@gmail.com'),
      Project: new FormControl('Dwayne'),
      Phone: new FormControl('(416) 920-5100'),
      Country: new FormControl('Canada'),
      Province: new FormControl('Ontario'),
      Municipality: new FormControl('Ottawa'),
      City: new FormControl('Ottawa'),
      Street: new FormControl('79GG+XC Gloucester'),
      projectType: new FormControl('1'),
      clientName: new FormControl('1'),
      surveyType: new FormControl('1'),
      accountManager: new FormControl('1'),
      projectManager: new FormControl('1'),
      DueDate: new FormControl('2019-11-28'),
      ReceivedDate: new FormControl('2019-10-09'),
      QuotedDate: new FormControl('2019-10-30'),
      country: new FormControl('2'),
      state: new FormControl('1'),
      municipality: new FormControl('3')
 
    })
  }
  isedit:boolean=true;

  editfun(){
    this.isedit=false;
  }

  savedata(){
    console.log(this.employeeForm.value);
    
   this.isedit=true;

  }

  cancel(){
    
     this.isedit=true;

  }
}
