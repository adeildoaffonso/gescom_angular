import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamoDetalheComponent } from './ramo-detalhe.component';

describe('RamoDetalheComponent', () => {
  let component: RamoDetalheComponent;
  let fixture: ComponentFixture<RamoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
