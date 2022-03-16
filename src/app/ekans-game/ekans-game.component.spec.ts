import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkansGameComponent } from './ekans-game.component';

describe('EkansGameComponent', () => {
  let component: EkansGameComponent;
  let fixture: ComponentFixture<EkansGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkansGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EkansGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
