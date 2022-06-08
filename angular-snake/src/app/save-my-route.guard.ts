import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NameService } from './services/name.service';

@Injectable({
  providedIn: 'root'
})
export class SaveMyRouteGuard implements CanActivate {

  public userName: any = this._userName.readName()

  constructor(
    private _userName: NameService,
    private _router: Router
    ){}
    
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(!this.userName){
    
        return this._router.navigate(['login'])
      }
      
    return true;
  }
  
}
