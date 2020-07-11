import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, EmailValidator } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<any>;
items: Observable<any[]>;


  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    textMessage: new FormControl('')
  });

  onSubmit(){
    let item = {
      name: this.contactForm.controls.name.value,
      email: this.contactForm.controls.email.value,
      textMessage: this.contactForm.controls.textMessage.value
    }
    console.log(item);
    
    this.afs.collection('contact').add(item)
    .then(item => { console.log(item)})
    .catch(e => { console.log(e)})

    this.toastr.success('Your message has been delivered!', 'Hi, Visitor!', {
      timeOut: 3000
    });
    this.contactForm.get('name').setValue('');
    this.contactForm.get('email').setValue('');
    this.contactForm.get('textMessage').setValue('');
  }


  constructor(
    private toastr: ToastrService,
    private afs: AngularFirestore) { 
      this.itemsCollection = afs.collection<any>('items');
      this.items = this.itemsCollection.valueChanges();
    }

  ngOnInit(): void {
  }

}
