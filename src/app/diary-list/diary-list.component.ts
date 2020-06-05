import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';
import { DiarysService } from '../diarys.service'

@Component({
  selector: 'app-diary-list',
  templateUrl: './diary-list.component.html',
  styleUrls: ['./diary-list.component.css']
})
export class DiaryListComponent implements OnInit {

  diarys: Diary[];
  selectedDiary: Diary;

  constructor(private diarysService: DiarysService) { }

  async ngOnInit() {
    try{
      this.diarys = await this.diarysService.getDiarys();
      this.diarys.forEach(item => item.date = item.date.substr(0,10))
    }
    catch(e){
      console.error(e);
    }
  }

}
