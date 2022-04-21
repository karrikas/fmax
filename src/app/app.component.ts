import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  profileForm = new FormGroup({
    top: new FormControl(200),
    rep: new FormControl(50),
    age: new FormControl(25),
  });

  top: number = 200;
  rep: number = 60;
  age: number = 25;
  max: number = 0;
  p6: number = 0;
  p7: number = 0;
  p8: number = 0;
  p9: number = 0;
  p10: number = 0;

  title = 'fmax';

  constructor() {
    this.profileForm.valueChanges.subscribe(data => {
      this.calc(data.top, data.rep, data.age)
    })
    this.calc(this.top, this.rep, this.age)
  }

calc(top: number, rep: number, age: number) {
  console.warn(top, rep, age);
  this.top = top;
  this.rep = rep;
  this.age = age;

  this.max = top - (0.7*age);
  this.p6 = ((this.max - rep) * 0.67) + rep;
  this.p7 = ((this.max - rep) * 0.75) + rep;
  this.p8 = ((this.max - rep) * 0.85) + rep;
  this.p9 = ((this.max - rep) * 0.92) + rep;
  this.p10 = ((this.max - rep) * 1) + rep;
  console.log(this.p6)

  /*
FCtop = 196 //210
FCrepo = 50 // 46 // 65

FCmax = FCtop - (0.7x urteak)

Zona %50 = ((FCmax - FCrepo) x 0.5) + FCrepo
Zona %60 = ((FCmax - FCrepo) x 0.6) + FCrepo
Zona %70 = ((FCmax - FCrepo) x 0.7) + FCrepo
Zona %80 = ((FCmax - FCrepo) x 0.8) + FCrepo
Zona %90 = ((FCmax - FCrepo) x 0.9) + FCrepo
Zona %100 = ((FCmax - FCrepo) x 1.0) + FCrepo

Zona 0 = < %67
Zona 1 = %67 - %75
Zona 2 = %75 - %85
Zona 3 =%85 - %92
Zona 4 = %92 - %100
Zona 5 = %100

---

FCmax = 196 - (0.7 x 40) = 168
168-46 = 122
Zona %67 =  (122 x 0.67) + 46 = 128
Zona %75 =  (122 x 0.75) + 46 = 137
Zona %85 =  (122 x 0.85) + 46 = 150
Zona %92 =  (122 x 0.92) + 46 = 158
Zona %100 = (122 x 1.0) + 46 = 168

---

Zona 0 = < 128
Zona 1 = 128 - 137
Zona 2 = 137 - 150
Zona 3 = 150 - 158
Zona 4 = 158 - 168
Zona 5 = > 168
*/

}

}
