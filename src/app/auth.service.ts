import { Injectable } from '@angular/core';
import { AngularFireAuth  } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private fireauth:AngularFireAuth,private router:Router ) { }


isLogged(){
const user=JSON.parse(localStorage.getItem('isLogged')|| 'false')
if(user){
return true
}
else{
return false
}
}


login(email:string, password:string){
this.fireauth.signInWithEmailAndPassword(email,password).then( ()=>{
  alert('logged in successful');
localStorage.setItem('token','true');
localStorage.setItem('isLogged',JSON.stringify(true))
this.router.navigate(['home'])
}, err=>{
alert(err.message);
this.router.navigate(['/login'])
})
}



register(email: string,password:string,phone:string,username:string){
this.fireauth.createUserWithEmailAndPassword(email,password).then( () =>{
alert('registration successful');
this.router.navigate(['login']);
}, err =>{
this.router.navigate(['register']);

})
}



logout(){
this.fireauth.signOut().then( ()=>{
localStorage.removeItem('token');
localStorage.removeItem('isLogged');
this.router.navigate(['/login']);
} , err => {
alert(err.message);
})
}



}


