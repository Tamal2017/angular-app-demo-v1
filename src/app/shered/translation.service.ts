import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private translateService: TranslateService) { }
  init(locale = 'fr'): void {
    this.translateService.addLangs(['fr', 'en', 'de']);
    this.translateService.use(locale);
  }

}
