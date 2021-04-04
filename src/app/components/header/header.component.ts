import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public href: string = '';

  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.queryParams.subscribe((params) => {
      let date = params['servicios'];
      console.log(date); // Print the parameter to the console.
    });
  }

  ngOnInit(): void {
    this.getParams();
    this.href = this.router.url;
    console.log(this.router.url);
  }

  getParams() {
    const param = this.activatedRouter.snapshot.root;
    console.log(param);
  }

  goHome() {
    this.router.navigate(['']);
  }

  goAbout() {
    this.router.navigate(['quienes-somos']);
  }

  goServices() {
    this.router.navigate(['servicios']);
  }

  goCoverage() {
    this.router.navigate(['cobertura']);
  }
}
