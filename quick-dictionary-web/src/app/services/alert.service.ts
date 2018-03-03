import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AlertService {

  constructor(private toastr: ToastrService) { }

  public showSuccessMessage(message: string) {
    this.toastr.success(message);
  }

  public showErrorMessage(message: string) {
    this.toastr.error(message);
  }

  public showInfoMessage(message: string) {
    this.toastr.info(message);
  }
}
