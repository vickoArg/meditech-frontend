import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';

declare const gapi:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent{

  public formSubmitted = false;
  public auth2: any;

  public loginForm = this.fb.group({
    email   : [ '' , [ Validators.required, Validators.email ] ],
    password: ['', Validators.required ],
  });


  constructor( private router: Router,
               private fb: FormBuilder,
               private usuarioService: UsuarioService,
               private ngZone: NgZone ) { }


  login() {
    this.formSubmitted = true
    if(this.loginForm.valid){
      this.usuarioService.login( this.loginForm.value ).subscribe( resp => {
          this.router.navigateByUrl('/');
        }, (err) => {
          Swal.fire('Error', err.error.msg, 'error' );
        });
    }
  }

  campoNoValido( campo: string ): boolean {
    if ( this.loginForm.get(campo).invalid && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }
  }
  
  // renderButton() {
  //   gapi.signin2.render('my-signin2', {
  //     'scope': 'profile email',
  //     'width': 240,
  //     'height': 50,
  //     'longtitle': true,
  //     'theme': 'dark',
  //   });

  //   this.startApp();

  // }

  // async startApp() {
    
  //   await this.usuarioService.googleInit();
  //   this.auth2 = this.usuarioService.auth2;

  //   this.attachSignin( document.getElementById('my-signin2') );
    
  // };

  // attachSignin(element) {
    
  //   this.auth2.attachClickHandler( element, {},
  //       (googleUser) => {
  //           const id_token = googleUser.getAuthResponse().id_token;
  //           this.usuarioService.loginGoogle( id_token )
  //             .subscribe( resp => {
  //               this.ngZone.run( () => {
  //                 this.router.navigateByUrl('/');
  //               })
  //             });

  //       }, (error) => {
  //           alert(JSON.stringify(error, undefined, 2));
  //       });
  // }

}
