import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpnewsComponent } from './upnews.component';

describe('UpnewsComponent', () => {
  let component: UpnewsComponent;
  let fixture: ComponentFixture<UpnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpnewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
