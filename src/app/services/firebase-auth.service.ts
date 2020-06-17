import { Injectable } from '@angular/core';
// firebase
import { AngularFireAuth } from "@angular/fire/auth";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})

export class FirebaseAuthService {
  
  gioUsuario = this.autorizacion.authState.pipe(
    map(authState => {
      if(authState) {
        return authState
      } else {
        return false
      }
    })
  )
  
  constructor(public autorizacion:AngularFireAuth) {
  }

  crearUsuarioAnonimo(){
    this.autorizacion.auth.signInAnonymously().then(usuario => {
      console.log("Sesión anónima creada", usuario)
    }).catch(error=>{
      console.log("Error en la sesión anónima", error)
    })
  }
  
  crearUsuarioConEmail(data:any){
    
      let email = data.email;
      let password = data.password;
      let displayName = data.displayName;

      this.autorizacion.auth.createUserWithEmailAndPassword(email, password).then(usuario => {
        usuario.user.updateProfile({
          displayName: displayName
        })
      })
      
  }

  cerrarSesion() {
      this.autorizacion.auth.signOut()
  }

  traerUidSiExisteUsuario(){
    if(this.autorizacion.auth.currentUser) {
      return this.autorizacion.auth.currentUser.uid
    } else {
      return null;
    }
  }
}
