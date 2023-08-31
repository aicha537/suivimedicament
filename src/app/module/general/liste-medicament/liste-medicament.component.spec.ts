import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMedicamentComponent } from './liste-medicament.component';

describe('ListeMedicamentComponent', () => {
  let component: ListeMedicamentComponent;
  let fixture: ComponentFixture<ListeMedicamentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeMedicamentComponent]
    });
    fixture = TestBed.createComponent(ListeMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
