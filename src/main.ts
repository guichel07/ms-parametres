import 'tek-ms-ds/dist/style.css';
import { Parametres, type RenderInterface } from './parametres';

const app = document.querySelector<HTMLDivElement>('#app')!;

const parametres = new Parametres(app);

parametres.render({
  name: 'Amina M.',
  zone: '+221 77 512 30 84',
  phone: 'Zone Nord',
} as RenderInterface);
