import { ContactService } from './../../service/contact/contact.service';
import { Contact } from './../../interface/contact/contact';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.scss'],
})
export class ContactlistComponent implements OnInit {
  constructor(private conatct: ContactService) {}
  datasource = new MatTableDataSource<Contact>();
  displayedColumns = ['name', 'email', 'mobile', 'treatment'];

  ngOnInit(): void {
    this.conatct.contactlist.subscribe((re: Contact[]) => {
        this.datasource.data=re;
    });
  }
}
