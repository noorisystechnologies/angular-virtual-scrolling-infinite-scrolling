import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualScrollingGridComponent } from './virtual-scrolling-grid.component';

describe('VirtualScrollingGridComponent', () => {
  let component: VirtualScrollingGridComponent;
  let fixture: ComponentFixture<VirtualScrollingGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualScrollingGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualScrollingGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
