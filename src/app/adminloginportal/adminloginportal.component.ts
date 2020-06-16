import { AuthmainService } from './../service/auth/authmain.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminloginportal',
  templateUrl: './adminloginportal.component.html',
  styleUrls: ['./adminloginportal.component.scss'],
})
export class AdminloginportalComponent implements OnInit {
  constructor(private authmian:AuthmainService) {}

  ngOnInit(): void {}

  onsubmit(f:NgForm)
  {
    this.authmian.login({
      email:f.value.username,
      password:f.value.password
    })

  }
}
