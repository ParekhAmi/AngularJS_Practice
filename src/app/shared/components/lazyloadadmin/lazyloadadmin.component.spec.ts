import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadadminComponent } from './lazyloadadmin.component';

describe('LazyloadadminComponent', () => {
  let component: LazyloadadminComponent;
  let fixture: ComponentFixture<LazyloadadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyloadadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyloadadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
