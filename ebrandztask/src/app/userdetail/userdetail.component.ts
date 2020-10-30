import { Component, OnInit } from '@angular/core';
import { RegisterserviceService } from '../registerservice.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  public userdata = [];

  constructor(public regService : RegisterserviceService) { }

  displayedColumns: string[] = ['fname', 'lname', 'email', 'cnum','dob', 'address'];

  ngOnInit(): void {

    this.regService.getData().subscribe((data) => {
      this.userdata = Array.from(Object.keys(data), k=>data[k]);
      //console.log(this.userdata);
   });

  }

  

}
