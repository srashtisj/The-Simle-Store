import { ContactService } from './../service/contact/contact.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent implements OnInit {
  constructor( private service:ContactService) {}

  ngOnInit(): void {}

  onsubmit(f:NgForm)
  {
    this.service.addcontact({
      name: f.value.name,
      email: f.value.email,
      phone: f.value.ph,
      treatment: f.value.treatment,
    });

  }
}
