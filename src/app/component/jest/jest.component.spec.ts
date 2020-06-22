import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JestComponent } from './jest.component';

describe('JestComponent', () => {
  let component: JestComponent;
  let fixture: ComponentFixture<JestComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ JestComponent ]
  //   })
  //   .compileComponents();
  // }));

  beforeEach(() => {

    // fixture = TestBed.createComponent(JestComponent);
    component = new JestComponent();
    component.ngOnInit();
    // fixture.detectChanges();
  });
  it('should Oninit', () => {
    const spy = jest.spyOn(component, 'ngOnInit');
    expect(spy).toHaveBeenCalledTimes(0);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should validate', () => {
    const mockSetPoint = jest.spyOn(component, 'setPount');
    component.point = '';
    component.testClick();

    expect(mockSetPoint).toHaveBeenCalled();
    expect(component.rs).toEqual('FAUL');
  });
  it('should pass', () => {
    const mockSetPoint = jest.spyOn(component, 'setPount');
    component.point = 99;
    component.testClick();

    expect(mockSetPoint).toHaveBeenCalled();
    expect(component.rs).toEqual('FAUL');
  });
  it('should fault', () => {
    const mockSetPoint = jest.spyOn(component, 'setPount');
    component.point = '';
    component.testClick();

    expect(mockSetPoint).toHaveBeenCalled();
    expect(component.rs).toEqual('FAUL');
  });
});
