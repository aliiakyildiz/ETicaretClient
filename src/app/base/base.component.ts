import { Component, OnInit } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {
  constructor(private spinner: NgxSpinnerService) { }

  showSpinner(SpinnerNameType: SpinnerType){
    this.spinner.show(SpinnerNameType)

    setTimeout(()=> this.hideSpinner(SpinnerNameType),1000);
  }
  
  hideSpinner(SpinnerNameType: SpinnerType){
    this.spinner.hide(SpinnerNameType)
  }
}


export enum SpinnerType{
BallAtom="s1",
cog="s2",
BallSpinClockWiseFadeRotating="s3"
}