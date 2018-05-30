import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinderFilterComponent } from './finder-filter.component';

describe('FinderFilterComponent', () => {
  let component: FinderFilterComponent;
  let fixture: ComponentFixture<FinderFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinderFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinderFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
