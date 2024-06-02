window.onload = function () {
  const path = window.location.pathname.split('/');

  switch (path[1]) {
    case '': {
      loadPage('home');
      break;
    }
    case 'about': {
      loadPage('about');
      break;
    }
    case 'test': {
      loadPage('test');
      break;
    }
    case 'detail': {
      loadPage('detail');
      break;
    }
    default: {
      loadPage('page 404');
      break;
    }
  }

  document.querySelectorAll('.menu__item').forEach((item) => {
    item.addEventListener('click', function () {
      const path = item.getAttribute('value');
      loadPage(path);
      if (path == 'home') {
        window.history.pushState('', '', '/');
        return;
      }

      window.history.pushState('', '', path);
    });
  });

  function loadPage($path) {
    if ($path == '') return;

    const container = document.getElementById('container');

    const request = new XMLHttpRequest();
    request.open('GET', './pages' + '/' + $path + '/' + 'index' + '.html');
    console.log('GET', './pages' + '/' + $path + '/' + 'index' + '.html');

    const url = new URL(window.location.href);
    console.log('Pathname: ', url);
    request.send();
    request.onload = function () {
      if (request.status == 200) {
        container.innerHTML = request.responseText;
        document.title = $path;
      }
    };
  }
};
