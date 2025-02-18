import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivsitoComponent } from './divsito.component';

describe('DivsitoComponent', () => {
  let component: DivsitoComponent;
  let fixture: ComponentFixture<DivsitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivsitoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivsitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
