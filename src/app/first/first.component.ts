import { Component, OnInit} from '@angular/core';
import{FormGroup, FormArray, FormControl, Validators} from '@angular/forms';

export class User{
  name: string; 
  email: string;
  phone: string;
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  form :FormGroup;

  submit(){
    if(this.form.invalid)
      return;
    console.log(this.form.controls['Phones']);
  }

  constructor() { 
    this.form=new FormGroup({
      "Name": new FormControl('', [Validators.required]),
      "EMail": new FormControl('', [Validators.required, Validators.email]),
      "Phones": new FormArray([new FormControl('', [Validators.required, Validators.pattern(/\([0-9]{3}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}/)])])
      
    })
  }

  addPhone(){
    (this.form.controls['Phones'] as FormArray).push(new FormControl('', [Validators.required, Validators.pattern(/\([0-9]{3}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}/)]));
  }

  ngOnInit() {
    
  }

  
}
