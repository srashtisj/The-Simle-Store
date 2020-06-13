import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-treatment-page',
  templateUrl: './treatment-page.component.html',
  styleUrls: ['./treatment-page.component.scss'],
})
export class TreatmentPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  CosmeticDentistry() {
    this.router.navigate(['/CosmeticDentistry']);
  }
  Crowns() {
    this.router.navigate(['/Crownandbridges']);
  }
  DentalImplant() {
    this.router.navigate(['/DentalImplants']);
  }
  DentalJewellry() {
    this.router.navigate(['/Dentaljewellery']);
  }
  ToothColoredFilling() {
    this.router.navigate(['/ToothColouredFilling']);
  }
  FullMouthReconstruction() {
    this.router.navigate(['/FullMouthRehabilitation']);
  }
  ImpactedTeethRemoval() {
    this.router.navigate(['/Impactedteeth']);
  }
  Invisalign() {
    this.router.navigate(['/Invisalign']);
  }
  Orthodontics() {
    this.router.navigate(['/Orthodontics']);
  }
  PatientEducation() {
    this.router.navigate(['/Patienteducation']);
  }
  PediatricDentistry() {
    this.router.navigate(['/Pediatricdentistry']);
  }
  Periodontist() {
    this.router.navigate(['/Periodontics']);
  }
  RootCanal() {
    this.router.navigate(['/Rootcanal']);
  }
  SmileDesigning() {
    this.router.navigate(['/SmileDesigning']);
  }
  ToothBleaching() {
    this.router.navigate(['/ToothWhitening']);
  }
  Veneers() {
    this.router.navigate(['/PorcelainLaminateVeneers']);
  }
}
