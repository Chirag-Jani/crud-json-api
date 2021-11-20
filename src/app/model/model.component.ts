import { RestoService } from './../resto.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent implements OnInit {
  field: any = 'Field';
  editResto: any = new FormGroup({
    name: new FormControl(''),
  });

  data = 'modalData';
  constructor(private restoService: RestoService) {}

  ngOnInit(): void {
    this.data = this.restoService.defaultData;
    this.field = this.restoService.defaultFieldName;
  }
}
