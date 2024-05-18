const addToggleMenu = () => {
  const OPENED_CLASS = 'is-opened';
  const OPENING_CLASS = 'is-opening';
  const CLOSING_CLASS = 'is-closing';
  const LINK_CLASS = '.nav__link';
  const BUTTON_CLASS = '.header__toggle';
  const root = document.querySelector('.header');
  const toggle = root.querySelector('.toggle');
  const nav = root.querySelector('.header__nav');

  const onDocumentKeydown = (evt) => {
    if (evt.key === 'Escape') {
      closeMenu();
    }
  };

  const onLinkClick = (evt) => {
    if (evt.target.matches(LINK_CLASS) || evt.target.matches(BUTTON_CLASS)) {
      closeMenu();
    }
  };

  const isMenu = (evt) => {
    if (
      evt.target.closest('.header') &&
      (evt.target.closest('.toggle') || evt.target.closest('.header__nav'))
    ) {
      evt.preventDefault();
    } else {
      closeMenu();
    }
  };

  const openMenu = () => {
    nav.classList.remove(CLOSING_CLASS);
    nav.classList.add(OPENING_CLASS);
    root.classList.add(OPENED_CLASS);
    toggle.classList.add(OPENED_CLASS);
    nav.classList.add(OPENED_CLASS);
    document.addEventListener('keydown', onDocumentKeydown);
    nav.addEventListener('click', onLinkClick);
    document.addEventListener('click', isMenu);
    document.addEventListener('click', onDocumentOutside);
  };

  const closeMenu = () => {
    nav.classList.remove(OPENING_CLASS);
    nav.classList.add(CLOSING_CLASS);
    setTimeout(() => {
      nav.classList.remove(CLOSING_CLASS);
      root.classList.remove(OPENED_CLASS);
      toggle.classList.remove(OPENED_CLASS);
      nav.classList.remove(OPENED_CLASS);
    }, 200);

    document.removeEventListener('keydown', onDocumentKeydown);
    nav.removeEventListener('click', onLinkClick);
    document.removeEventListener('click', isMenu);
    document.removeEventListener('click', onDocumentOutside);
  };

  const onDocumentOutside = (evt) => {
    if (
      evt.target !== toggle && !toggle.contains(evt.target) &&
      evt.target !== nav && !nav.contains(evt.target)
    ) {
      closeMenu();
    }
  };

  toggle.addEventListener('click', () => {
    if (!toggle.classList.contains(OPENED_CLASS)) {
      openMenu();
    } else {
      closeMenu();
    }
  });
};

export {addToggleMenu};
