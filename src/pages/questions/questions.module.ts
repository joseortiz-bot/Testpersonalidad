import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { QuestionsPage } from './questions';

@NgModule({
  declarations: [
    QuestionsPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionsPage),
    TranslateModule.forChild()
  ],
  exports: [
    QuestionsPage
  ]
})
export class QuestionsPageModule {}
