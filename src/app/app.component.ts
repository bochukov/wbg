import { Component } from '@angular/core';
import { faChartLine, faGlobe, faSatellite, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faChartLine = faChartLine;
  faGlobe = faGlobe;
  faSatellite = faSatellite;
  faSearch = faSearch;
  
  title = 'World Bank';

  public isCollapsed = true;
}
