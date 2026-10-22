import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomcarComponent } from './customcar.component';

describe('CustomcarComponent', () => {
  let component: CustomcarComponent;
  let fixture: ComponentFixture<CustomcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomcarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
