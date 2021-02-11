import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AppSettings } from "../app.settings";
import { Settings } from "../app.settings.model";
import { AlertService } from "../shared/services/alert.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [AlertService],
})
export class LoginComponent {
  public TypeString: string = "password";
  public isPassword: boolean = true;

  public form: FormGroup;
  public settings: Settings;
  constructor(
    public appSettings: AppSettings,
    public fb: FormBuilder,
    public router: Router,
    public alertService: AlertService
  ) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      email: [null, Validators.compose([Validators.required])],
      password: [
        null,
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

  public onSubmit(values: Object): void {
    if (this.form.valid) {
      console.log(this.form.value);
      if (values["email"] == "nagarajan@optimaheat.com" && values["password"] == "password") {
        this.router.navigate(['/admin/dashboard']);
        this.alertService.createAlert("Login Success", 1);
        localStorage.setItem("loginUser", values["username"]);
        localStorage.setItem('userType', 'admin');
      } else if (values["email"] == "projectmanager@optimaheat.com" && values["password"] == "password") {
        this.router.navigate(['/admin/jobs/gridview']);
        this.alertService.createAlert("Login Success", 1);
        localStorage.setItem("loginUser", values["username"]);
        localStorage.setItem('userType', 'project_manager');
      }
      else if (values["email"] == "engineer@optimaheat.com" && values["password"] == "password") {
        this.router.navigate(['/admin/jobs/gridview']);
        this.alertService.createAlert("Login Success", 1);
        localStorage.setItem("loginUser", values["username"]);
        localStorage.setItem('userType', 'associate');
      }
      else {
        this.alertService.createAlert("Invalid Credentials", 0);
      }
    }
  }

  public ChangetextType(isPassword) {
    if (isPassword) {
      this.TypeString = "password";
    } else {
      this.TypeString = "text";
    }
  }

  // ngAfterViewInit(){
  //   this.settings.loadingSpinner = false;
  // }

  ngAfterViewInit() {
    setInterval(() => {
      this.settings.loadingSpinner = false;
    }, 500);
  }
}




