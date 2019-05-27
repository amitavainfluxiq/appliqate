import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
public myform: any;
public data: any;
  constructor( public formbuilder: FormBuilder, public _http:HttpClient) {
    this.myform = this.formbuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      fname: ['',Validators.required],
      lname: [''],
      // pnumber: ['', Validators.compose([Validators.required, Validators.pattern(/[0-9\+\-\ ]/)])],
      pnumber: [''],
      subfild: [''],
      description: ['',Validators.required],
    })
  }

  ngOnInit() {

  }
  doSubmit(){
    console.log('ok');
    this.data=this.myform.value;
    console.log(this.data);
    for(let i in this.myform.controls){
      this.myform.controls[i].markAsTouched();
    }
    if(this.myform.valid){
      let link = 'http://192.169.196.208:7051/contactUs_applicant';
      let data = {data:this.myform.value};
      this._http.post(link,data)
          .subscribe(res=>{

            let result:any = {};
            result = res;
            console.log(result);
            if(result.status== 'success'){
              //this.myform.reset();
            }
          })

    }

  }
  inputUntouch(form:any,val:any){
    //  console.log('on blur .....');
    form.controls[val].markAsUntouched();
  }

}



