export function initTheme() {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    showSelected();
  });
  //собственно добавим сам класс, типа кликнули на выбор темы
  showSelected();
}

function showSelected() {
  if (theme == 'auto') {
    theme = getDetectTheme();
  }
  //надо засинхронить название input → class
  if (theme === 'light') {
    document.documentElement.classList.add("lightmode");
    // document.querySelector('meta[name=theme-color]').content = '#FFF';
  } else {
    document.documentElement.classList.remove("lightmode");
    // document.querySelector('meta[name=theme-color]').content = '#000';
  }
}

// ну тут я условно, ф-ия детектед и возвращает текущую тему
function getDetectTheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    colorScheme = 'light';
  } else {
    colorScheme = 'dark';
  }
  console.log(colorScheme);
  return colorScheme;
}
