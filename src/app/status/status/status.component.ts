import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  serviceData: any;
  @Input() FrameWorksData: any;

  @Output() outputData: EventEmitter<any> = new EventEmitter<any>();
  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    // this.outputData.emit(this.statusData) 
  }

  sendData(){
    //this.outputData.emit(this.statusData)
    this.service.serviceData.next(this.statusData)
  }
  statusData = [{
    title: 'Angular',
    description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.',
    imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
    founder: 'Misko Hevery',
    gender: 'female'
  }, {
    title: 'React',
    description: 'React is a JavaScript library for building user interfaces. React is written in JavaScript. It allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    founder: 'Jordan Walke',
    gender: 'male'
  }, {
    title: 'Vue',
    description: 'Vue.js is a progressive JavaScript framework used to build interactive web interfaces. Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.',
    imageUrl: 'https://vuejs.org/images/logo.png',
    founder: 'Evan You',
    gender: 'male'
  },
  {
    title: 'Svelte',
    description: 'Svelte is a free and open-source front end compiler created by Rich Harris. Svelte applications do not include framework references. Instead, building a Svelte application generates code to manipulate the DOM, which may include reactive statements.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg',
    founder: 'Rich Harris',
    gender: 'male'
  },
  {
    title: 'Ember',
    description: 'Ember.js is an open-source JavaScript web framework, based on the Model–view–viewmodel pattern. It allows developers to create scalable single-page web applications by incorporating common idioms and best practices into the framework.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Ember-logo.svg',
    founder: 'Yehuda Katz',
    gender: 'male'
  },
  {
    title: 'Backbone',
    description: 'Backbone.js is a JavaScript library with a RESTful JSON interface and is based on the model–view–presenter (MVP) application design paradigm. Backbone is known for being lightweight, as its only hard dependency is on one JavaScript library, Underscore.js.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Backbone.js_Logo.svg/1200px-Backbone.js_Logo.svg.png',
    founder: 'Jeremy Ashkenas',
    gender: 'female'
  },
  {
    title: 'Aurelia',
    description: 'Aurelia is a JavaScript client framework for web, mobile, and desktop that leverages simple conventions to empower your creativity. It is simple, unobtrusive, and has minimal framework intrusion. It is designed to be testable and maintainable.',
    imageUrl: 'https://aurelia.io/styles/images/logo.svg',
    founder: 'Rob Eisenberg',
    gender: 'male'
  },
  {
    title: 'Polymer',
    description: 'Polymer is an open-source JavaScript library for building web applications using Web Components. The library is being developed by Google developers and contributors on GitHub. Modern design principles are implemented as a separate project using Material Design.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Google_Polymer_Project_Logo.png',
    founder: 'Taylor Savage',
    gender: 'female'
  },
  {
    title: 'Knockout',
    description: 'Knockout.js is a standalone JavaScript implementation of the Model-View-ViewModel pattern with templates. The underlying principles are similar to those of AngularJS, although it is significantly smaller, and it is not a full-fledged framework.',
    imageUrl: 'https://knockoutjs.com/img/knockout-logo.png',
    founder: 'Steve Sanderson',
    gender: 'male'
  },
  {
    title: 'Meteor',
    description: 'Meteor, or MeteorJS, is a free and open-source isomorphic JavaScript web framework written using Node.js. Meteor allows for rapid prototyping and produces cross-platform code. It integrates with MongoDB and uses the Distributed Data Protocol and a publish–subscribe pattern to automatically propagate data changes to clients without requiring the developer to write any synchronization code.'
  },
]
}
