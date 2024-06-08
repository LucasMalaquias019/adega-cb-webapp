import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcarItemComponent } from './marcar-item.component';

describe('MarcarItemComponent', () => {
  let component: MarcarItemComponent;
  let fixture: ComponentFixture<MarcarItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarcarItemComponent]
    });
    fixture = TestBed.createComponent(MarcarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
