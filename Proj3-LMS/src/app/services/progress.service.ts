import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  constructor(private firestore: AngularFirestore) {}

  
  trackProgress(userId: string, courseId: string, progress: any): Promise<void> {
    return this.firestore.collection('progress').doc(`${userId}-${courseId}`).set(progress);
  }

  
  getProgress(userId: string, courseId: string) {
    return this.firestore.collection('progress').doc(`${userId}-${courseId}`).valueChanges();
  }
}
