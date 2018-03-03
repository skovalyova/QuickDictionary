import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'qd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor(private toastr: ToastrService) { }

  ngOnInit() { }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
