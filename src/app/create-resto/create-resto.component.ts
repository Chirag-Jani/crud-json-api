import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-create-resto',
  templateUrl: './create-resto.component.html',
  styleUrls: ['./create-resto.component.css'],
})
export class CreateRestoComponent implements OnInit {
  createResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });

  alert: boolean = false;

  constructor(private restoService: RestoService) {}

  ngOnInit(): void {}

  collectResto() {
    this.restoService.addResto(this.createResto.value);
    this.alert = true;
    this.createResto.reset({});
  }

  closeAlert() {
    this.alert = false;
  }
}
