import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent {

  constructor(public dialogRef: MatDialogRef<ContactDialogComponent>) {
   this.contactForm = new FormGroup({
          sender: new FormControl,
          subject: new FormControl,
          senderEmail: new FormControl,
          content: new FormControl
    })

   }

  contactForm !: FormGroup;
  dataMessage = {sender :'' , subject : '' , senderEmail : '', content:'' };

  closeDialog() {
    this.dialogRef.close();
  }

onSubmit(){

}
sendEmail() {
  const { senderEmail, subject, content } = this.dataMessage;
  const mailtoLink = `mailto:irinacadu@gmail.com`; 
  window.location.href = mailtoLink;
}
}
