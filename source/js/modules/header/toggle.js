const addToggleMenu = () => {
  const OPENED_CLASS = 'is-opened';
  const LINK_CLASS = '.nav__link';
  const BUTTON_CLASS = '.header__button';
  const root = document.querySelector('.header');
  const toggle = root.querySelector('.toggle');
  const nav = root.querySelector('.header__nav');

  const onDocumentKeydown = (evt) => {
    return evt.key === 'Escape' ? closeMenu() : null;
  };

  const onLinkClick = (evt) => {
    return evt.target.matches(LINK_CLASS) || evt.target.matches(BUTTON_CLASS) ? closeMenu() : null;
  };

  const isMenu = (evt) => {
    return (evt.target.closest('.header') && evt.target.closest('.toggle') || evt.target.closest('.header__nav')) ? evt.preventDefault() : closeMenu();
  };

  const openMenu = () => {
    root.classList.add(OPENED_CLASS);
    toggle.classList.add(OPENED_CLASS);
    nav.classList.add(OPENED_CLASS);
    document.addEventListener('keydown', onDocumentKeydown);
    nav.addEventListener('click', onLinkClick);
    document.addEventListener('click', isMenu);
    document.addEventListener('click', onDocumentOutside);
  };

  const closeMenu = () => {
    root.classList.remove(OPENED_CLASS);
    toggle.classList.remove(OPENED_CLASS);
    nav.classList.remove(OPENED_CLASS);
    document.removeEventListener('keydown', onDocumentKeydown);
    nav.removeEventListener('click', onLinkClick);
    document.removeEventListener('click', isMenu);
    document.removeEventListener('click', onDocumentOutside);
  };

  const onDocumentOutside = (evt) => {
    if (
      (evt.target !== toggle && !toggle.contains(evt.target)) &&
      (evt.target !== nav && !nav.contains(evt.target))
    ) {
      closeMenu();
    }
  };

  toggle.addEventListener('click', () => {
    return !toggle.classList.contains(OPENED_CLASS) ? openMenu() : closeMenu();
  });
};

export {addToggleMenu};
