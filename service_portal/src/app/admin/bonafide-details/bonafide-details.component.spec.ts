import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonafideDetailsComponent } from './bonafide-details.component';

describe('BonafideDetailsComponent', () => {
  let component: BonafideDetailsComponent;
  let fixture: ComponentFixture<BonafideDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonafideDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonafideDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
