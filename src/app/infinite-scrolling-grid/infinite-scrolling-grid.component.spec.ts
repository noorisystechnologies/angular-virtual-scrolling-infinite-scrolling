import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollingGridComponent } from './infinite-scrolling-grid.component';

describe('InfiniteScrollingGridComponent', () => {
  let component: InfiniteScrollingGridComponent;
  let fixture: ComponentFixture<InfiniteScrollingGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfiniteScrollingGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfiniteScrollingGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
