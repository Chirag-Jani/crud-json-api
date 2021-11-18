import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadRestoComponent } from './read-resto.component';

describe('ReadRestoComponent', () => {
  let component: ReadRestoComponent;
  let fixture: ComponentFixture<ReadRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadRestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
