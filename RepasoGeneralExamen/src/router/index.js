import { createRouter, createWebHistory } from 'vue-router';
import ListaTareas from '@/components/Ej1/ListaTareas.vue';
import AgendaPComponente from '@/components/Ej2/AgendaPComponente.vue';
import Ej3MensajePComponente from '@/components/Ej3/Ej3MensajePComponente.vue';
import BienvenidaComponente from '@/components/Ej4/BienvenidaComponente.vue';
import DetalleCategoriaComponente from '@/components/Ej4/DetalleCategoriaComponente.vue';
import HijoDetalleComponente from '@/components/Ej4/HijoDetalleComponente.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ListaTareas',
      name: 'ListaTareas',
      component: ListaTareas,
      props: true,
    },
    {
      path: '/AgendaPComponente',
      name: 'AgendaPComponente',
      component: AgendaPComponente,
      props: true,
    },
    {
      path: '/Ej3MensajePComponente',
      name: 'Ej3MensajePComponente',
      component: Ej3MensajePComponente,
      props: true,
    },
    {
      path: '/BienvenidaComponente',
      name: 'BienvenidaComponente',
      component: BienvenidaComponente,
      props: true,
      children: [
        {
          path: 'categories/:id',
          name: 'categories',
          component: DetalleCategoriaComponente,
          children: [
            {
              path: 'child/:childSlug',
              name: 'child-detail',
              component: HijoDetalleComponente,
            },
          ],
        },
      ],
    },
  ],
});

export default router;