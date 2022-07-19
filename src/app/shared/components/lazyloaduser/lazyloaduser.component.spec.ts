import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloaduserComponent } from './lazyloaduser.component';

describe('LazyloaduserComponent', () => {
  let component: LazyloaduserComponent;
  let fixture: ComponentFixture<LazyloaduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyloaduserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyloaduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
