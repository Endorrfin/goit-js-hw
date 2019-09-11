import menus from '../menu.json';
import menuBuild from '../templates/menu-build.hbs';
import refs from './refs.js';

const item = menuBuild(menus);
refs.menuBuild.insertAdjacentHTML('beforeend', item);