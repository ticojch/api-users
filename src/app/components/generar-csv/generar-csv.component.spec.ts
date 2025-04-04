import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarCSVComponent } from './generar-csv.component';

describe('GenerarCSVComponent', () => {
  let component: GenerarCSVComponent;
  let fixture: ComponentFixture<GenerarCSVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerarCSVComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerarCSVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
