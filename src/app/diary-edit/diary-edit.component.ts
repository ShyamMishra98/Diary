import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';
import { DiarysService } from '../diarys.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-diary-edit',
  templateUrl: './diary-edit.component.html',
  styleUrls: ['./diary-edit.component.css']
})
export class DiaryEditComponent implements OnInit {

  diary: Diary = new Diary();
  id: number = null;

  constructor(
    private diaryService: DiarysService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      try{
        this.id = +id;
        this.diary = await this.diaryService.getDiary(this.id);
        this.diary.date = this.diary.date.substr(0,10);
      }
      catch(e){
        console.error(e);
      }
    }
  }
  handleSave(formData){
    if(this.id){
      this.diaryService.updateDiary(this.id, formData);
      this.location.back();
    }else{
      this.diaryService.addDiary(formData);
      this.diaryService.getDiarys();
      this.router.navigate(['/diarys']);
    }
  }

}
