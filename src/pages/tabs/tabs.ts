import { Component } from '@angular/core';
import { MenuController, App, Tabs} from 'ionic-angular';

import { HometabPage } from '../hometab/hometab';
import { ExploretabPage } from '../exploretab/exploretab';
import { MesstabPage } from '../messtab/messtab';
import { AlerttabPage } from '../alerttab/alerttab';
import { ProfiletabPage } from '../profiletab/profiletab';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HometabPage;
  tab2Root = ExploretabPage;
  tab3Root = MesstabPage;
  tab4Root = AlerttabPage;
  tab5Root = ProfiletabPage;

  constructor(private menu: MenuController, private app: App) {
    this.menu = menu;
    this.menu.enable(true, 'myMenu')
  }

  tabChanged($ev) {
    const tabsNav = this.app.getNavByIdOrName('myTabsNav') as Tabs;

    for(let i=0;i<5;i++){
      if(i != $ev.index && tabsNav.getByIndex(i).getViews().length > 0){
        tabsNav.getByIndex(i).popToRoot();
      }
    }
  }
}
