import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validator, FormArray, Validators} from "@angular/forms";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  userDetail :FormGroup;
  titleAlert : string = 'This Field is Required';
  correct_pass = (/^[0-9]{4}$/);
	passTry = 3;

  constructor() { }

  ngOnInit() {
    this.userDetail = new FormGroup({
      'card_num' : new FormControl(null,[Validators.required]),
      'password' : new FormControl(null,[Validators.required])
    });
    this.userDetail.setValue({
      'card_num' : '1234567890123456',
      'password' : '1111'
    })

  }

  atmCardNum() {
//let	cardnum = prompt("Enter your Card No.");
	if (this.userDetail.value.card_num !== "" && this.userDetail.value.card_num !== null) {
		this.atmPassword();
	} else {
		this.atmCardNum();
	}
}

// Input a valid password
atmPassword() {
	let pswEntry = this.userDetail.value.password;
	this.checkPassword(pswEntry);
}
// Verify Password
checkPassword(userInput) {
    if (this.correct_pass.test(userInput)){
        //this.withdrawal();
    } else {
        while (!(this.correct_pass.test(userInput))) {
            if (this.passTry === 1) {
				alert("Incorrect PIN.");
            	alert("Maximum tries exceeded! Your account has been locked. Contact your bank for support."); 
                this.exit();
                break;
            } else {
				this.passTry -= 1;
				alert("Incorrect PIN. Please try again.");
				alert("You have " + this.passTry + " chance to try");
            	this.atmPassword();
			}
        }
    }
}

// Exit the ATM
exit() {
	alert("Thank you for using our ATM machine");
}

onSubmit(){
console.log(this.userDetail);
}

}
