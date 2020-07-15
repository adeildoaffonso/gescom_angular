import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciadorComponent } from './agenciador.component';

describe('AgenciadorComponent', () => {
  let component: AgenciadorComponent;
  let fixture: ComponentFixture<AgenciadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenciadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
