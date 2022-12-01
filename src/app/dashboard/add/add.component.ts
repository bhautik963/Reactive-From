import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addForm: FormGroup | any;
  public passwordRegex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}'
  constructor(public fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.newForm()
  }
  submit() {
    this.addForm.markAllAsTouched();
  }
  newForm() {
    this.addForm = this.fb.group({
      sFirstName: ['', Validators.required],
      sLastName: ['', Validators.required],
      sEmail: ['', Validators.required, Validators.email],
      nPhoneNo: ['', Validators.required],
      eStatus: ['', Validators.required],
      eCountry: ['', Validators.required],
      eState: ['', Validators.required],
      eCity: ['', Validators.required],
      nDob: ['', Validators.required],
      sPassWord: ['', Validators.required, Validators.pattern(this.passwordRegex)],
      sConfirmPassWord: ['', Validators.required, Validators.pattern(this.passwordRegex)],
    }, { validator: this.matchPassword })
  }
  isValidInput(fieldName: any): boolean {
    return this.addForm.controls[fieldName].invalid &&
      (this.addForm.controls[fieldName].dirty || this.addForm.controls[fieldName].touched);
  }

  matchPassword(control: FormControl): { matchPass: boolean } | any {
    if (control.root.value.sConfirmPassWord !== control.root.value.sPassWord) {
      return { matchPass: true };
    }
  }

}
