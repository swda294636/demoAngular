import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpreaComponent } from './oprea.component';

describe('OpreaComponent', () => {
  let component: OpreaComponent;
  let fixture: ComponentFixture<OpreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
