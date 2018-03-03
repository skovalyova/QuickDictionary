import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'qd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor(private alert: AlertService) { }

  ngOnInit() { }

  showSuccess() {
    this.alert.showSuccessMessage('Hello world!');
  }
}
