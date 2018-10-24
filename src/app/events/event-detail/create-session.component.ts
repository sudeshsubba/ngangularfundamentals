import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormControlName } from '@angular/forms';
import { ISession } from '../event.model';
import { restrictedWords } from './restricted-words.validators';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  sessionForm: FormGroup;
  test: FormControl;
  @Output() saveNewSession = new EventEmitter;
  @Output() cancelAddSession = new EventEmitter;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.test = new FormControl('', Validators.maxLength(5));

    this.sessionForm =  this.formBuilder.group({
      sessionName: ['', Validators.required],
      presenter: ['', Validators.required],
      duration: ['', Validators.required],
      level: ['', Validators.required],
      abstract: ['', [Validators.required, Validators.maxLength(250), restrictedWords(['foo', 'bar'])]],
      test: this.test
    });
    console.log(this.f.test.errors);
  }

  get f() { return this.sessionForm.controls; }

  saveSession(formValues) {
    const session: ISession = {
      id: undefined,
      name: formValues.sessionName,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    };
    this.saveNewSession.emit(session);
  }

  onCancelClick() {
    this.cancelAddSession.emit();
  }
}
