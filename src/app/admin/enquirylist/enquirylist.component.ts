import { EnquriyService } from './../../service/enquiry/enquriy.service';
import { Enquiry } from './../../interface/enquiry/enquiry';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-enquirylist',
  templateUrl: './enquirylist.component.html',
  styleUrls: ['./enquirylist.component.scss'],
})
export class EnquirylistComponent implements OnInit {
  displayedColumns = ['name', 'email', 'mobile', 'Description'];
  datasource = new MatTableDataSource<Enquiry>();




  constructor(private enquiry: EnquriyService) {}

  ngOnInit(): void {

    this.enquiry.enquirydata.subscribe((re:Enquiry[])=>{
      this.datasource.data=re;
    })




  }
}
