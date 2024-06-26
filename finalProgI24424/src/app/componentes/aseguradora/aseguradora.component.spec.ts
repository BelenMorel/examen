import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AseguradoraComponent } from './aseguradora.component';

describe('AseguradoraComponent', () => {
  let component: AseguradoraComponent;
  let fixture: ComponentFixture<AseguradoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AseguradoraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AseguradoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
