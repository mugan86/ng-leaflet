import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBasicComponent } from './map-basic.component';

describe('MapBasicComponent', () => {
  let component: MapBasicComponent;
  let fixture: ComponentFixture<MapBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
