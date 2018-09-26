import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('visaMenuList') visaMenuList: ElementRef;
  navArrowImg: boolean = false;
  animateLeftDistance: string;
  selectedItemIndex: number;
  navItems: Array<string> = ["Pay With Visa", "Partner With Us", "Run Your Business", "Travel With Visa", "Visa Everywhere"]
  constructor() { }

  navItemClick(event, ind): void {
    this.navArrowImg = true;
    this.selectedItemIndex = ind;
    const visaMenuListItemNode = this.visaMenuList.nativeElement;
    const listNodeOffset = visaMenuListItemNode.getBoundingClientRect();
    const currentElementOffset = event.target.getBoundingClientRect();
    this.animateLeftDistance = (currentElementOffset['x'] - listNodeOffset['x']) + currentElementOffset['width'] / 2 - 20 + 'px';
  }

}


