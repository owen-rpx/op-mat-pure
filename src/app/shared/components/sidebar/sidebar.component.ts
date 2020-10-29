import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  menuList: Menu[] = [{
    text: 'Home',
    link: '/',
  }, {
    text: 'Deployment',
    link: '/deploy',
    children: [{
      text: 'Profile',
      link: '/profile'
    }]
  }, {
    text: 'Explore',
    link: '/explore',
    children: [{
      text: 'Group',
      link: '/group'
    },
    {
      text: 'Application',
      link: '/application'
    },
    {
      text: 'Release',
      link: '/release'
    }
    ]
  }
  ];

  ngOnInit(): void {
  }
}
