import { ModelComponent } from './../model/model.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { RestoService } from './../resto.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-read-resto',
  templateUrl: './read-resto.component.html',
  styleUrls: ['./read-resto.component.css'],
})
export class ReadRestoComponent implements OnInit {
  collection: any = {};
  datasource: any;

  constructor(
    private restoService: RestoService,
    private dialogRef: MatDialog
  ) {}

  ngOnInit(): void {
    this.restoService.getData().subscribe((result) => {
      this.collection = result;
      this.datasource = new MatTableDataSource(this.collection);
      //
    });
  }

  deleteResto(id: any) {
    this.collection.splice(id - 1, 1);
    this.restoService.deleteResto(id).subscribe((result) => {
      console.log('result', result);
    });
  }

  filterText(data: string) {
    this.datasource.filter = data.trim().toLowerCase();
  }
  openModel(data: any, fieldName: any) {
    this.restoService.defaultData = data;
    this.restoService.defaultFieldName = fieldName;
    this.dialogRef.open(ModelComponent);
  }
}
