import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertstudentComponent } from './insertstudent.component';

describe('InsertstudentComponent', () => {
  let component: InsertstudentComponent;
  let fixture: ComponentFixture<InsertstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
