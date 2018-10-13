import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormControlName } from '@angular/forms';
import { ISession } from '../event.model';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  sessionForm: FormGroup;
  test: FormControl;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.test = new FormControl('', Validators.maxLength(5));

    this.sessionForm =  this.formBuilder.group({
      sessionName: ['asdasd', Validators.required],
      presenter: ['', Validators.required],
      duration: ['', Validators.required],
      level: ['', Validators.required],
      abstract: ['', [Validators.required, Validators.maxLength(10), this.restrictedWords]],
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
    console.log(session);
  }

  private restrictedWords(control: FormControl): {[key: string]: any} {
    console.log('restrictedworkds', control.errors);
    return control.value.includes('foo')
    ? {'restrictedWords': 'foo'}
    : null;
  }

}
