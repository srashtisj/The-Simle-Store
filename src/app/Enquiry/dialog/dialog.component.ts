import { EnquriyService } from './../../service/enquiry/enquriy.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  constructor(private service: EnquriyService) {}

  onclick(f: NgForm) {
    this.service.Addenquiry({
      name: f.value.name,
      email: f.value.email,
      mobile: f.value.number,
      Description: f.value.Description,
    });
  }

  ngOnInit(): void {}
}
