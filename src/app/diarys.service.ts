import { Injectable } from '@angular/core';
import { Diary } from './diary';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpHeaders',
  })
}


@Injectable({
    providedIn: 'root'
  })

export class DiarysService {

    private diarysUrl = '/api/diarys';

  constructor(private http: HttpClient) { }

  getDiarys() : Promise<Diary[]>{
    //return this.diarys;
    return this.http.get<Diary[]>(`${this.diarysUrl}`).toPromise();
  }
  getDiary(id: number) : Promise<Diary> {
    //return this.diarys.find(i => i.id === id);
    return this.http.get<Diary>(`${this.diarysUrl}/${id}`).toPromise();
  }

  addDiary(formData): Promise<Diary>{
    //const newDiary = Object.assign(new Diary(), FormData);
    //newDiary.id = this.diarys.length + 1;
    //this.diarys.push(newDiary);
    console.log(formData);
    formData.date = formData.date + 'T00:00:00.000'
    return this.http.post<Diary>(this.diarysUrl,formData,httpOptions).toPromise();
  }

  updateDiary(id: number, formData): Promise<Diary>{
    //const pet = this.diarys.find(diary => diary.id === id);
    //Object.assign(diary, formData);
    //return diary;
    console.log(formData);
    
    formData.date = formData.date + 'T00:00:00.000'
    return this.http.put<Diary>(`${this.diarysUrl}/${id}`, formData, httpOptions).toPromise();
  }
  countBetweenDiarys(){
    //return this.diarys.filter(i => i.isalive === 'Y').length;
    return this.http.get<object>(`${this.diarysUrl}/countBetween`).toPromise();
  }

}
