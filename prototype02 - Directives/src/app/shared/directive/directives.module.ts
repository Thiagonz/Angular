import { NgModule } from '@angular/core';

import { DataClearMaskDirective } from './data-clear-mask.directive';
import { DataMaskDirective } from './data-mask.directive';
import { FixWhitespaceDirective } from './fix-whitespace.directive';
import { OnlyalphanumericDescDirective } from './onlyalphanumeric-desc.directive';
import { OnlyalphanumericNoAccentsDirective } from './onlyalphanumeric-no-accents.directive';
import { OnlyalphanumericPointDirective } from './onlyalphanumeric-point.directive';
import { OnlyalphanumericDirective } from './onlyalphanumeric.directive';
import { OnlylettersNoAccentsDirective } from './onlyletters-no-accents.directive';
import { OnlylettersUpperDirective } from './onlyletters-upper.directive';
import { OnlylettersDirective } from './onlyletters.directive';
import { OnlynumberDirective } from './onlynumber.directive';
import { OnlyupperCaseDirective } from './onlyupper-case.directive';
import { PadleftDirective } from './padleft.directive';
import { SelectAutocompleteDirective } from './select-autocomplete.directive';
import { TooltipDirective } from './tooltip.directive';
import { CpfMaskDirective } from './cpf-mask.directive';
import { RgMaskDirective } from './rg-mask.directive';

@NgModule({
  declarations: [
    FixWhitespaceDirective,
    DataMaskDirective,
    OnlylettersDirective,
    OnlynumberDirective,
    OnlyalphanumericDirective,
    OnlyalphanumericDescDirective,
    OnlyalphanumericPointDirective,
    PadleftDirective,
    OnlylettersNoAccentsDirective,
    TooltipDirective,
    OnlylettersUpperDirective,
    OnlyupperCaseDirective,
    DataClearMaskDirective,
    OnlyalphanumericNoAccentsDirective,
    SelectAutocompleteDirective,
    CpfMaskDirective,
    RgMaskDirective
  ],
  exports: [
    FixWhitespaceDirective,
    DataMaskDirective,
    OnlylettersDirective,
    OnlylettersNoAccentsDirective,
    OnlynumberDirective,
    OnlyalphanumericDirective,
    OnlyalphanumericDescDirective,
    OnlyalphanumericPointDirective,
    PadleftDirective,
    TooltipDirective,
    OnlylettersUpperDirective,
    OnlyupperCaseDirective,
    DataClearMaskDirective,
    OnlyalphanumericNoAccentsDirective,
    SelectAutocompleteDirective,
    CpfMaskDirective,
    RgMaskDirective
  ]
})
export class DirectivesModule { }
