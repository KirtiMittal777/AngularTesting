import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from './service/login.service';
import { LoginMockService } from '../tests/login-mock.service';
import { DashboardComponent } from '../dashboard/dashboard.component';



describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, DashboardComponent],
      imports: [ReactiveFormsModule, RouterTestingModule.withRoutes([
        { path: 'dashboard-component', component: DashboardComponent }
      ])],
      providers: [
        { provide: LoginService, useClass: LoginMockService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should inject service', inject([LoginMockService], () => {
    expect(LoginMockService).toBeTruthy();
  }));

  it('should not display spinner on component init method', () => {
    expect(component.showSpinner).toBe(false);
  });

  it('should not show any error on component init method', () => {
    expect(component.error).toBe('');
  });

  it('should initialise login form on init method', () => {
    expect(component.loginForm).toBeDefined();
  });

  it('should contain default value for the login form on init method', () => {
    expect(component.loginForm.value).toEqual({ name: '', password: '' });
  });

  it('should show spinner on submit method', () => {
    component.loginForm.setValue({ name: 'admin', password: 'admin' });
    component.onSubmit();
    expect(component.showSpinner).toBe(true);
  });

  it('should navigate to dashboard when the login is valid', () => {
    component.loginForm.setValue({ name: 'admin', password: 'admin' });
    spyOn(component.router, 'navigate');
    spyOn(component, 'onSubmit');
    component.onSubmit();
    component.router.navigate(['/dashboard-component']);
    expect(component.onSubmit).toHaveBeenCalled();
    expect(component.router.navigate).toHaveBeenCalledWith(['/dashboard-component']);
  });


  it('should not navigate to dashboard if the form is invalid', () => {
    component.loginForm.setValue({ name: '', password: '' });
    spyOn(component.router, 'navigate');
    component.onSubmit();
    expect(component.router.navigate).not.toHaveBeenCalled();
  });

  it('should not login to dashboard when service throws error', () => {
    component.loginForm.setValue({ name: 'setError', password: 'admin' });
    spyOn(component.router, 'navigate');
    component.onSubmit();
    expect(component.router.navigate).not.toHaveBeenCalled();
    expect(component.error).toEqual('User not registered');
  });

  it('should not login to dashboard when there is a failure case from service', () => {
    component.loginForm.setValue({ name: 'setFailure', password: 'admin' });
    spyOn(component.router, 'navigate');
    component.onSubmit();
    expect(component.router.navigate).not.toHaveBeenCalled();
  });

});
