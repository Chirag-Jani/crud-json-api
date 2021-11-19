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
  dataSource = new MatTableDataSource(this.collection);

  constructor(private restoService: RestoService) {}

  ngOnInit(): void {
    this.restoService.getData().subscribe((result) => {
      this.collection = result;
    });
  }

  deleteResto(id: any) {
    this.collection.splice(id - 1, 1);
    this.restoService.deleteResto(id).subscribe((result) => {
      console.log('result', result);
    });
  }

  filterText(data: string) {
    this.dataSource.filter = data.trim().toLowerCase();
    // console.log(data.toLowerCase());
    //
  }
}
