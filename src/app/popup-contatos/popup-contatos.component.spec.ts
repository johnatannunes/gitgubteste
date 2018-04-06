import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupContatosComponent } from './popup-contatos.component';

describe('PopupContatosComponent', () => {
  let component: PopupContatosComponent;
  let fixture: ComponentFixture<PopupContatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupContatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
