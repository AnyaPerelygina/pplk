import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {addToggleMenu} from './modules/header/toggle';
import {StickyHeader} from './modules/header/sticky-header';
import {initsSliderEmployees} from './modules/sliders/employees-slider';
import {initsSliderProducts} from './modules/sliders/products-slider';
import {initTabs} from './vendor/tabs/init-tabs';
import {initAccordions} from './vendor/accordions/init-accordion';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  addToggleMenu();
  initsSliderEmployees();
  initsSliderProducts();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initTabs();
    initAccordions();
    const form = new Form();
    window.form = form;
    form.init();
    const stickyHeader = new StickyHeader();
    stickyHeader.init();
  });
});
