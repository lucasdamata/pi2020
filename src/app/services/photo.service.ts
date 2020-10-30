import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, CameraPhoto, CameraSource } from '@capacitor/core';

//import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';



const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: Photo[] = [];
  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, 
      source: CameraSource.Camera, 
      quality: 100 
    });
    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath
    });
  }
  constructor(
    //public androidPermissions: AndroidPermissions
  ) { }
}

interface Photo {
  filepath: string;
  webviewPath: string;
  base64?: string;
}

  
