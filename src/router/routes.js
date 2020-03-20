const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Index.vue"),
        name: "home",
        meta: {
          breadcrumb: [
            {
              titulo: "Gerências",
              icone: "fas fa-toolbox"
            }
          ]
        }
      },
      {
        path: "gerencia/:gerencia",
        component: () => import("pages/Gerencia.vue"),
        name: "gerencias",
        meta: {
          breadcrumb: [
            {
              titulo: "Gerências",
              icone: "fas fa-toolbox"
            },
            {
              titulo: "Áreas",
              icone: "fas fa-suitcase"
            }
          ]
        }
      },
      {
        path: "area/:area",
        component: () => import("pages/Area.vue"),
        name: "areas",
        meta: {
          breadcrumb: [
            {
              titulo: "Gerências",
              icone: "fas fa-toolbox"
            },
            {
              titulo: "Áreas",
              icone: "fas fa-suitcase"
            },
            {
              titulo: "Área"
            }
          ]
        }
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
