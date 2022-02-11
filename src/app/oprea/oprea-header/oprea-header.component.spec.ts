import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpreaHeaderComponent } from './oprea-header.component';

describe('OpreaHeaderComponent', () => {
  let component: OpreaHeaderComponent;
  let fixture: ComponentFixture<OpreaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpreaHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpreaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
