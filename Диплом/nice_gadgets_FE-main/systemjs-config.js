System.config({
  paths: {
    'npm:': 'node_modules/'
  },
  map: {
    // Пов'язуємо ваші залежності з файлами у папці node_modules
    'react': 'npm:react/umd/react.development.js',
    'react-dom': 'npm:react-dom/umd/react-dom.development.js',
    'react-router-dom': 'npm:react-router-dom/umd/react-router-dom.js',
    // Інші залежності тут, якщо є
  },
  packages: {
    // Пакети, які ви використовуєте, повинні мати шлях до відповідних модулів
    'src': {
      defaultExtension: 'js'
    }
  }
});
