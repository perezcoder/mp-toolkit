import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpToolkitComponent } from './mp-toolkit.component';

describe('MpToolkitComponent', () => {
  let component: MpToolkitComponent;
  let fixture: ComponentFixture<MpToolkitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpToolkitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpToolkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
