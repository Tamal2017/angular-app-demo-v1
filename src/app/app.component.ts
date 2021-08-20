import { Component, OnInit } from '@angular/core';
import { TranslationService } from './shared/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-demo';

  constructor(private translationService: TranslationService) { }

  ngOnInit(): void {
    this.translationService.init('en');
  }
}
