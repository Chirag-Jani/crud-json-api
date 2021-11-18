import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css'],
})
export class UpdateRestoComponent implements OnInit {
  editResto: any = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });

  alert: boolean = false;

  constructor(
    private restoService: RestoService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // console.log(this.router.snapshot.params.id);

    // ______________
    this.restoService
      .getCurrentResto(this.router.snapshot.params.id)
      .subscribe((result) => {
        console.warn(result); // here we want to get prefilled details in forms, but there is some error occuring
      });
  }

  collection() {
    this.restoService
      .updateResto(this.router.snapshot.params.id, this.editResto.value)
      .subscribe((result) => {
        console.warn(result);
      });
    this.alert = true;
    this.editResto.reset({});
  }

  closeAlert() {
    this.alert = false;
  }
}
