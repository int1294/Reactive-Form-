import { Component ,Input} from '@angular/core';
import { FormserviceService } from '../formservice.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  datafetch:any = this.formservice.getData()
  constructor(private formservice: FormserviceService) {


  }
  @Input() item = ''; // decorate the property with @Input()
  playerName: string = '';

  ngOnInit(){
    this.profileForm.setValue(this.datafetch);
  }
  profileForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    proType: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),

  });



  selectType(event:any){
    this.profileForm.patchValue(
      {
        proType: event.target.value
      }
    )
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.formservice.print(this.profileForm.value);
  }

}
