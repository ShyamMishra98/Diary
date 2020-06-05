import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Diary } from '../diary';
import { Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.css']
})
export class DiaryFormComponent implements OnInit {

  @Input() diary : Diary;
  @Output() save = new EventEmitter<Diary>();
  
  form = this.fb.group({
    title: ['', [Validators.required]],
    text: [''],
    inbetween: ['Y'],
    date: [Date.now()]
  })

  get title() { return this.form.get('title'); }
  get text() { return this.form.get('text'); }
  get inbetween() { return this.form.get('inbetween'); }
  get date() { return this.form.get('date'); }

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.form.patchValue(this.diary)
    console.log(this.diary);
    
  }

  onSubmit(){
    this.save.emit(this.form.value)
  }

  updateBetween(e){
    this.form.setControl("inbetween", new FormControl(e.target.checked ? "Y" : "N"))
    console.log(e.target.checked);
  }

}
