import { EnquriyService } from './../../service/enquiry/enquriy.service';
import { Enquiry } from './../../interface/enquiry/enquiry';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-enquirylist',
  templateUrl: './enquirylist.component.html',
  styleUrls: ['./enquirylist.component.scss'],
})
export class EnquirylistComponent implements OnInit, OnDestroy,AfterViewInit {
  constructor(private enquiry: EnquriyService) {}
  ngAfterViewInit(): void {
   this.dataSource.sort=this.sort;
   this.dataSource.paginator = this.paginator;
  }
  ngOnDestroy(): void {
    this.enquirysub.unsubscribe();
  }

  displayedColumns = ['name', 'email', 'mobile', 'Description'];
  dataSource = new MatTableDataSource<Enquiry>();
  private enquirysub: Subscription;
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  ngOnInit(): void {
    this.enquiry.getenquiry();
    this.enquirysub = this.enquiry.EnquiryFilled.subscribe((re:Enquiry[]) => {
      this.dataSource.data = re;
    });
  }
}
