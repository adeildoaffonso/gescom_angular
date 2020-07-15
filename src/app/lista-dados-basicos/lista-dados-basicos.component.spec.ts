import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDadosBasicosComponent } from './lista-dados-basicos.component';

describe('ListaDadosBasicosComponent', () => {
  let component: ListaDadosBasicosComponent;
  let fixture: ComponentFixture<ListaDadosBasicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDadosBasicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDadosBasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
