import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from '@angular/material';
import {OurteampopupComponent} from "../ourteampopup/ourteampopup.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  public click: any;

  constructor(public router: Router, public dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(OurteampopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });



  }
  ngOnInit() {
  }

}
