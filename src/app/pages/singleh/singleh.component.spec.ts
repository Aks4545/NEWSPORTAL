import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglehComponent } from './singleh.component';

describe('SinglehComponent', () => {
  let component: SinglehComponent;
  let fixture: ComponentFixture<SinglehComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglehComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
