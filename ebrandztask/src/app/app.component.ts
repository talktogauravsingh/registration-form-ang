import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';
import { RegisterserviceService } from './registerservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ebrandz task';
  visible : boolean = true;
  formdata: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public regService : RegisterserviceService, private router: Router) { 
    router.events.forEach((event)=>{
      if(event instanceof NavigationStart){
        if(event['url'] == '/userdetails'){
          this.visible = false;
        } else {
          this.visible = true;
        }
      }
    });
  }

  ngOnInit(){
    this.formdata = this.formBuilder.group({
      fname: new FormControl("", Validators.required),
      lname: new FormControl("", Validators.required),
      cnum: new FormControl("", Validators.required),
      dob : new FormControl("", Validators.required),
      address: new FormControl("", [Validators.required, Validators.maxLength(200)]),
      email: new FormControl("", [Validators.required, Validators.email]),
   });
  }

  get f() { 
    return this.formdata.controls; 
  }

  onSubmit(formdata){
    this.submitted = true;
    // stop here if form is invalid
    if (this.formdata.invalid) {
      return;
  }

  this.regService.postData(this.formdata.value).subscribe(data=>{
    // console.log(data);
  })

  this.router.navigate(['userdetails']);

  }


}
