// Імпорт залежностей
import { registerApplication, start } from 'single-spa';
import { singleSpaReact } from 'single-spa-react'; // Додайте цей імпорт

// Імпорт кореневого компонента App
import App from './src/App';
import { Footer } from './src/components/Footer'; // Імпорт компонента Header
import { ShopByCategory } from './src/components/ShopByCategory'; // Імпорт компонента ShopByCategory
import { Header } from './src/components/Header'; // Імпорт компонента Footer

console.log('Before registerApplication');

function domElementGetter() {
  return document.getElementById("root"); // id контейнера, де буде рендеритись ваш додаток
}

const reactLifecycles = singleSpaReact({
  React: window.React, // Використовуйте змінну з глобального контексту
  ReactDOM: window.ReactDOM, // Також використовуйте змінну з глобального контексту
  rootComponent: App,
  domElementGetter,
});

// Реєстрація компонента Header
registerApplication(
  'header',
  () => Header,
  () => true // Показувати Header на всіх шляхах
);

// Реєстрація компонента ShopByCategory
registerApplication(
  'shop-by-category',
  () => ShopByCategory,
  () => true // Показувати ShopByCategory на всіх шляхах
);

// Реєстрація компонента Footer
registerApplication(
  'footer',
  () => Footer,
  () => true // Показувати Footer на всіх шляхах
);

registerApplication(
  'app-name',
  () => reactLifecycles,
  (location) => location.pathname.startsWith('/app')
);

console.log('After registerApplication');

start();

console.log('After start');

