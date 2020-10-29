import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  @Input() menuList: Menu[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.setDefaultMenu(this.router.url);
  }

  private setDefaultMenu(link: string): void {
    let parent = null;
    let nav = null;
    this.menuList.forEach(v => {
      if (v.link === link) {
        nav = v;
      } else if (this.hasChildren(v)) {
        v.children.forEach(c => {
          if (c.link === link) {
            nav = c;
            parent = v;
          }
        });
      }
    });

    if (parent) {
      this.toggleMenu(parent);
      parent.selected = false;
    }
    if (nav) {
      nav.show = true;
      nav.selected = true;
    }
  }

  public goTo(nav: Menu, parent?: Menu): void {
    this.resetAll(nav, parent);
    nav.show = true;
    nav.selected = true;
    this.router.navigate([nav.link]);
  }
  public toggleMenu(nav): void {
    this.resetAll(nav);
    nav.show = !nav.show;
    nav.selected = nav.show;
    if (!!nav && this.hasChildren(nav)) {
      nav.children.map((v) => v.selected = false);
    }
  }

  private resetAll(nav: Menu, parent?: Menu): void {

    this.menuList.map(v => {
      if (nav !== v) {
        v.selected = false;
        if (!parent) {
          v.show = false;
        } else if (parent === v) {
          v.show = true;
        }
        if (this.hasChildren(v)) {
          v.children.map((child: Menu) => {
            child.show = false;
            child.selected = false;
          });
        }
      }
    });
  }

  public hasChildren(nav: Menu): boolean {
    if (!nav.children) {
      return false;
    }
    return true;
  }

}
