import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestoService {
  url = 'http://localhost:3000/restaurants';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.url);
  }
  addResto(data: any) {
    return this.http.post(this.url, data).subscribe();
  }
  deleteResto(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getCurrentResto(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }
  updateResto(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }
}
