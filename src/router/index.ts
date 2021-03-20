import {
  createRouter,
  createWebHistory,
  isNavigationFailure,
  RouteLocationNormalized,
} from "vue-router";

import { fetchSolverRoutes } from "@/components/pages/solvers";

// const Home = () => import("@/components/pages/Home.vue");
const NotFoundGeneric = () => import("@/components/pages/NotFoundGeneric.vue");
const Solvers = () => import("@/components/pages/Solvers.vue");
const SolverGeneric = () => import("@/components/pages/SolverGeneric.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:notFound(.*)",
      components: { default: NotFoundGeneric },
    },
    {
      name: "home",
      path: "/",
      redirect: "/solvers",
      //   alias: "/home",
      //   components: { default: Home },
    },
    {
      name: "solvers",
      path: "/solvers",
      components: { default: Solvers },
    },
    {
      path: "/solvers",
      components: { default: SolverGeneric },
      children: fetchSolverRoutes(),
    },
    // {
    //   name: "projects",
    //   path: "/projects",
    //   components: { default: Projects },
    // },
    // { path: "/", redirect: { name: "home" } },
  ],
  scrollBehavior(to) {
    // if there is a hash in the url
    if (to.hash)
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    // always scroll to top, smoothly
    return { top: 0, behavior: "smooth" };
  },
});

// router.beforeEach()

function toTitleCase(str: string) {
  return str
    .split("_")
    .map((str) => str.trim()[0].toUpperCase() + str.slice(1))
    .join(" ");
}

router.afterEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    failure,
  ): void => {
    // console.log(to.params);
    if (!isNavigationFailure(failure)) {
      const title: string = to.path.split("/").pop() ?? "ERROR";
      const fixedTitle = to.path == "/" ? "" : toTitleCase(title);

      document.title = fixedTitle ? fixedTitle + " | MathXpr" : "MathXpr";
    }
  },
);

export default router;
