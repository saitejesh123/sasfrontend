import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherpageComponent } from './otherpage.component';

describe('ContactComponent', () => {
  let component: OtherpageComponent;
  let fixture: ComponentFixture<OtherpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
