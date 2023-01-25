import './styles.scss';
import './app/app.element.ts';

setTimeout(() => {
  import('interop-app')
    .then(() => import('addon-app'))
    .catch((err) => {
      console.error(err);
    });
});
