import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DealsapiService } from 'src/app/core/dealsapi/dealsapi.service';

@Component({
  selector: 'app-dealsinfo',
  templateUrl: './dealsinfo.component.html',
  styleUrls: ['./dealsinfo.component.css']
})
export class DealsinfoComponent implements OnInit {
  dealsinformation:any;
  errormessage: any;


  constructor(private srv:DealsapiService , private route:ActivatedRoute) { }

  ngOnInit(): void {

    const drugCode = this.route.snapshot.paramMap.get('drugCode');
    if(drugCode!=undefined){
      this.getProductDetailsByDrugcode(drugCode);

      
    }
  }

  getProductDetailsByDrugcode(drugCode:string){
    const params:HttpParams = new HttpParams()
                              .set('drugCode',drugCode);

    this.srv.getdealsFromServer('topDeals',params).subscribe((response:any)=>{
      if(response && response.length > 0){
        this.dealsinformation = response[0];
      }
    },
    (error)=>{
      this.errormessage="error";
    })
  }

 
}
