import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    @Output() featureSelected = new EventEmitter<string>();
     onselect(feature: string) {
       this.featureSelected.emit(feature);
       console.log(feature);
     }
}
