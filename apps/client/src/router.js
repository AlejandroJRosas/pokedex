export class Router {
  constructor(paths) {
    this.paths = paths;
    this.initRouter();
  }

  initRouter() {
    const url = new URL(window.location.href);
    const searchParams = url.searchParams;
    const URLold = url.pathname === '/' ? 'home' : url.pathname;
    console.log('Pathname: ', url.pathname);
    this.load(URLold, searchParams);
  }

  load(page = 'home', searchParams) {
    console.log('Search Params: ', searchParams);
    const { paths } = this;
    const { path, template } = paths[page] || paths.error;
    const $CONTAINER = document.querySelector('#content');
    $CONTAINER.innerHTML = template;
    window.history.pushState({}, 'done', path);
  }
}
