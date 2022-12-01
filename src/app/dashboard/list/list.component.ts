import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public router: Router) {

  }

  ngOnInit(): void {
    return
    throw new Error('Method not implemented.');
  }

  addData() {
    this.router.navigate(['/add'])
  }

}
