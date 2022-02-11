import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpreaBodyComponent } from './oprea-body.component';

describe('OpreaBodyComponent', () => {
  let component: OpreaBodyComponent;
  let fixture: ComponentFixture<OpreaBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpreaBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpreaBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
