import {
  createRouter,
  createWebHistory,
  isNavigationFailure,
  RouteLocationNormalized,
} from "vue-router";

import Home from "@/components/pages/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   name: "notfound",
    //   path: "/:notFound(.*)",
    //   components: { default: NotFoundGeneric },
    // },
    {
      name: "home",
      path: "/",
      alias: "/home",
      components: { default: Home },
    },
    // {
    //   name: "about",
    //   path: "/about",
    //   components: { default: About },
    // },
    // {
    //   name: "contact",
    //   path: "/contact",
    //   components: { default: Contact },
    // },
    // {
    //   name: "projects",
    //   path: "/projects",
    //   components: { default: Projects },
    // },
    // { path: "/", redirect: { name: "home" } },
  ],
  scrollBehavior(to) {
    if (to.hash)
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    // always scroll to top, smoothly
    return { top: 0, behavior: "smooth" };
  },
});

router.afterEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    failure,
  ): void => {
    if (!isNavigationFailure(failure)) {
      const title: string = to.path.split("/").pop() ?? "ERROR";
      const fixedTitle =
        to.path == "/" ? "" : title[0].toUpperCase() + title.slice(1);

      document.title = fixedTitle ? fixedTitle + " - MathXpr" : "MathXpr";
    }
  },
);

export default router;
