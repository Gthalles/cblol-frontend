import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fullName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      email: [null, [Validators.pattern("/^(\S+)@((?:(?:(?!-)[a-zA-Z0-9-]{1,62}[a-zA-Z0-9])\.)+[a-zA-Z0-9]{2,12})$/")]],
      document: [null],
      birthDate: [null],
      password: [null, [Validators.pattern("^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*()+\-.,;?^.,;?><:{}[\]])[\w!@#$%&*()+\-.,;?^.,;?><:{}[\]]{6,22}$"), Validators.required, Validators.minLength(6), Validators.maxLength(22)]],
      confirmPassword: [null],
    });
  }

  onSubmit() {}

  register() {
    console.log(this.form);
  }
}
