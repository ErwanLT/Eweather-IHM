import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EweatherIhmComponent } from './eweather-ihm.component';

describe('EweatherIhmComponent', () => {
  let component: EweatherIhmComponent;
  let fixture: ComponentFixture<EweatherIhmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EweatherIhmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EweatherIhmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
