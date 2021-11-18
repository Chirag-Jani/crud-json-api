import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { CreateRestoComponent } from './create-resto/create-resto.component';
import { ReadRestoComponent } from './read-resto/read-resto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { component: CreateRestoComponent, path: 'create' },
  { component: ReadRestoComponent, path: 'read' },
  { component: ReadRestoComponent, path: '' },
  { component: UpdateRestoComponent, path: 'update/:id' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
