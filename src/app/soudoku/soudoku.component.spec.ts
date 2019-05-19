import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoudokuComponent } from './soudoku.component';

describe('SoudokuComponent', () => {
  let component: SoudokuComponent;
  let fixture: ComponentFixture<SoudokuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoudokuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoudokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
