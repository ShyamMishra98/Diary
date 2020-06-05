import { Component, OnInit } from '@angular/core';
import { DiarysService } from "../diarys.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private DiarysService: DiarysService) { }

   //LOCAL VARIABLES
   numberOfBEntries;
   numberOfNBEntries;
 
   async ngOnInit() {
     try{
       this.numberOfBEntries = await this.DiarysService.countBetweenDiarys();
        }
     catch(e){
       console.error(e);
     }
   }

}
