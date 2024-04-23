import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastaMenuComponent } from './pasta-menu.component';

describe('PastaMenuComponent', () => {
  let component: PastaMenuComponent;
  let fixture: ComponentFixture<PastaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PastaMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PastaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
