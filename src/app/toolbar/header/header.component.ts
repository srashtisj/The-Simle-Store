
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;


  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  ngOnInit(): void {

  }

}
