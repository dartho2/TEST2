import { SafeResourceUrl } from '@angular/platform-browser';

export interface INgxGalleryImage {
   
    url?: string;
    
}

export class NgxGalleryImage implements INgxGalleryImage {
   
    url?: string;
    

    constructor(obj: INgxGalleryImage) {
        
        this.url = obj.url;
      
    }
}