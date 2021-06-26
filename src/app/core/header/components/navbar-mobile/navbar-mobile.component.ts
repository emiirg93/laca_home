import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent implements OnInit {

  carrito: number = 0;
  menuOpen: boolean = false;
  menuShop: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", ["$event"])
  onScroll() {
    this.menuOpen = false;
  }
}
