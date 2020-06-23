import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Registro } from '../interfaces/registro';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private registroCollection: AngularFirestoreCollection<Registro>;

  constructor(private afs: AngularFirestore) {
    this.registroCollection = this.afs.collection<Registro>('Registro');
  }

  getRegistros(){
    return this.registroCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a=> {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return {id , ...data};
        });
      }

      )
    )
  }
  addRegistro(registro: Registro){

  }
  getRegistro(id:string){

  }
  updateRegistro(id: string, registro: Registro){

  }
}
