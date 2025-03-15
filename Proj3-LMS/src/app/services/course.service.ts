import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private firestore: AngularFirestore) {} 

  
  getCourses(): Observable<any[]> {
    return this.firestore.collection('courses').valueChanges({ idField: 'id' }); 
  }

 
  addCourse(course: any): Promise<any> {
    const id = this.firestore.createId(); 
    return this.firestore.collection('courses').doc(id).set({ id, ...course }) 
      .then(() => console.log("Course added successfully:", course))
      .catch(error => console.error("Error adding course:", error));
  }
}
