import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchNowComponent } from './watch-now.component';

describe('WatchNowComponent', () => {
  let component: WatchNowComponent;
  let fixture: ComponentFixture<WatchNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
