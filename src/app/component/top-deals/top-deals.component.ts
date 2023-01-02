import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DealsapiService } from 'src/app/core/dealsapi/dealsapi.service';

@Component({
  selector: 'app-top-deals',
  templateUrl: './top-deals.component.html',
  styleUrls: ['./top-deals.component.css']
})
export class TopDealsComponent implements OnInit {
  productlist: any;
  errormessage: any;

  constructor(private srv:DealsapiService) { }

  ngOnInit(): void {
    this.gettopdeals();
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  gettopdeals(){
    this.srv.getdealsFromServer('topDeals').subscribe((data : any)=>{
    this.productlist = data;
    },
    (error)=>{
      this.errormessage="error";
    })
  }

}