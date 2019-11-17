import { Injectable } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private spinner: NgxSpinnerService) { 
  }

  ngOnInit() {
    
  }

  loading(){
    this.spinner.show();
  }

  hideLoading(){
    this.spinner.hide();
  }
}
