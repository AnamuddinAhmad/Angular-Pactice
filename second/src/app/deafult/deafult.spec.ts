import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deafult } from './deafult';

describe('Deafult', () => {
  let component: Deafult;
  let fixture: ComponentFixture<Deafult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deafult]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deafult);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
