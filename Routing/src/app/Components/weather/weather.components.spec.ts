import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponents } from './weather.component';

describe('WeatherComponents', () => {
  let component: WeatherComponents;
  let fixture: ComponentFixture<WeatherComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
