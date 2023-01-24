import { Component, Input } from '@angular/core';
import { Developer } from '../models/developer';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent {

myPerson = new Developer('Sandra', 'Conil', 36, 'female', 'sandra est gentille mais chiante', 
[{name : 'Angular', logo : 'logomoche', site: 'teubé.com'},{name : 'Javascript', logo : 'logomoche', site : 'tarace.fr'}]);

  constructor(){}


}
