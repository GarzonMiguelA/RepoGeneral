import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ListaTareas',
      name: 'ListaTareas',
      component: () => import('@/components/Ej1/ListaTareas.vue'),
    },
    {
      path: '/AgendaPComponente',
      name: 'AgendaPComponente',
      component: () => import('@/components/Ej2/AgendaPComponente.vue'),
    },
    {
      path: '/Ej3MensajePComponente',
      name: 'Ej3MensajePComponente',
      component: () => import('@/components/Ej3/Ej3MensajePComponente.vue'),
    },
    {
      path: '/BienvenidaComponente',
      name: 'BienvenidaComponente',
      component: () => import('@/components/Ej4/BienvenidaComponente.vue'),
      props: route=>({id:parseInt(route.params.id)}),
      children: [
        {
          path: 'categories/:id',
          name: 'categories',
          component: () => import('@/components/Ej4/DetalleCategoriaComponente.vue'),
          props: route=>({id:parseInt(route.params.id)}),
          children: [
            {
              path: 'child/:childSlug',
              name: 'child-detail',
              component: () => import('@/components/Ej4/HijoDetalleComponente.vue'),
              props: route=>({childSlug:parseInt(route.params.childSlug)}),
            },
          ],
        },
      ],
    },
  ],
});

export default router;