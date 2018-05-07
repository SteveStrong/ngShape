import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoInspectComponent } from './fo-inspect.component';

describe('FoInspectComponent', () => {
  let component: FoInspectComponent;
  let fixture: ComponentFixture<FoInspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoInspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoInspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
