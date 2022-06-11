import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  frm: FormGroup;
  ngOnInit(): void {
    this.frm = this.formBuilder.group({
      adSoyad: ["", [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3)
      ]],
      kullaniciAdi: ["", [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3)
      ]],
      email: ["", [
        Validators.required,
        Validators.maxLength(250),
        Validators.email
      ]],
      sifre: ["", [
        Validators.required
      ]],
      sifreTekrar: ["", [
        Validators.required
      ]]
    },{Validators: (group:AbstractControl): ValidationErrors | null =>{

      let sifre=group.get("sifre").value;
      let sifreTekrar=group.get("sifreTekrar").value;
      return sifre === sifreTekrar ?null : {notSame:true};


    }})
  }
  get component() { //C#'daki prop
    return this.frm.controls;
  }

  submitted: boolean = false;
  onSubmit(data: any) {
    this.submitted = true;

      if (this.frm.invalid) {
        return;
      }
  }
}
