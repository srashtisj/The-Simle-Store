import { DialogComponent } from './../dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-enquirybutton',
  templateUrl: './enquirybutton.component.html',
  styleUrls: ['./enquirybutton.component.scss'],
})
export class EnquirybuttonComponent implements OnInit {

  constructor(private dia:MatDialog) {}

  dialog(){
    this.dia.open(DialogComponent);
  }
  ngOnInit(): void {}
}
