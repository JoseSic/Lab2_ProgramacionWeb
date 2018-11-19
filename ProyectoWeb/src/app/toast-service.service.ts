import { Injectable } from '@angular/core';
declare var toastr:any;

@Injectable({
  providedIn: 'root'
})

export class ToastServiceService {

  constructor() {
    this.setting()
   }

  Success(title : string, message?:string){
    toastr.success(title,message);
  }

  Warning(title : string, message?:string){
    toastr.warning(title,message);
  }

  Error(title : string, message?:string){
    toastr.error(title,message);
  }

  setting(){
    toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": false,
      "progressBar": true,
      "positionClass": "toast-bottom-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1500",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
  }

}
