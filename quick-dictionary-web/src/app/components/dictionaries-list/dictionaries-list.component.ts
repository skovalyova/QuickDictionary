import { Component, OnInit } from '@angular/core';

class Dictionary {
  id: number;
  name: string;
  description: string;
  isSelected: boolean;
}

@Component({
  selector: 'qd-dictionaries-list',
  templateUrl: './dictionaries-list.component.html',
  styleUrls: ['./dictionaries-list.component.scss']
})

export class DictionariesListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dictionaries: Dictionary[] = [];

  ngOnInit(): void {
    this.dtOptions = {
      'paging': false,
      'order': [],
      // Show only table and information.
      'dom': 'ti',
      'columnDefs': [
          // Checkbox column.
          { 'orderable': false, 'targets': 0 }
      ],
    };

    this.dictionaries = [
      {
        "isSelected": true,
        "id": 860,
        "name": "Superman",
        "description": "Yoda"
      },
      {
        "isSelected": false,
        "id": 870,
        "name": "Foo",
        "description": "Whateveryournameis"
      },
      {
        "isSelected": false,
        "id": 590,
        "name": "Toto",
        "description": "Titi"
      }
    ]
  }

  show() {
    console.log(this.dictionaries);
  }
}
