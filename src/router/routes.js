const routes = [
  {
    path: "/home",
    component: () => import("src/layouts/LandingPage.vue"),
    children: [
      { path: "/home", component: () => import("src/pages/HomePage.vue") },
      { path: "/dashboard", component: () => import("src/pages/HomePage.vue") },
      { path: "/services", component: () => import("pages/ServicesPage.vue") },
      { path: "/members", component: () => import("pages/MembersPage.vue") },
      { path: "/aboutus", component: () => import("pages/AboutUs.vue") },
      {
        path: "/portfolio",
        component: () => import("pages/PortfolioPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
