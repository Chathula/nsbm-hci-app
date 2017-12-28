import { Injectable } from '@angular/core';

@Injectable()
export class SubjectsService {
    
   public subjects:any = [
        {
            "id": 1,
            "name": "Object Oriented Programming with Java 17.1"
        },
        {
            "id": 2,
            "name": "Data Structures and Algorithms-17.1"
        },
        {
            "id": 3,
            "name": "CS105.3 Database Management Systems - KW"
        },
        {
            "id": 4,
            "name": "CS105.3 Database Management Systems - DA"
        },
        {
            "id": 5,
            "name": "CS101.3 Introduction to Computer Science"
        },
        {
            "id": 6,
            "name": "CS102.3 Programming with C Language"
        },
        {
            "id": 7,
            "name": "CS102.3 Programming with C Language 17.2"
        },
        {
            "id": 8,
            "name": "CS103.3 Professional Development"
        },
        {
            "id": 9,
            "name": "CS104.3 Computer Architecture"
        },
        {
            "id": 10,
            "name": "CS105.3 Database Management Systems"
        }
    ];

   constructor() {
       
   }
 
   getSubjects() {
       return this.subjects;
   }  
}