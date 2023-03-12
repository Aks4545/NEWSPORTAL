import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelunguComponent } from './telungu.component';

describe('TelunguComponent', () => {
  let component: TelunguComponent;
  let fixture: ComponentFixture<TelunguComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelunguComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelunguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
