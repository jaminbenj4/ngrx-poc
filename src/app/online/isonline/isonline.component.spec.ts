import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsonlineComponent } from './isonline.component';

describe('IsonlineComponent', () => {
  let component: IsonlineComponent;
  let fixture: ComponentFixture<IsonlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsonlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsonlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
