import { RouteRecordRaw } from "vue-router";
const TruthTableSolver = () =>
  import("@/components/pages/solvers/TruthTableSolver.vue");

type SolverMeta = {
  icon: string;
  previewImage: string;
  path: string;
  readonly solverName: string;
};

type SolverRoute = RouteRecordRaw & SolverMeta;

function toTitleCase(str: string) {
  return str
    .split("_")
    .map((str) => str.trim()[0].toUpperCase() + str.slice(1))
    .join(" ");
}

const SolverRoutes: SolverRoute[] = [
  {
    path: "truth_table",
    name: "truth_table",
    icon: "favicon.svg",
    previewImage: "favicon.svg",
    get solverName() {
      return toTitleCase(this.path);
    },
    components: {
      default: TruthTableSolver,
    },
  },
];

export function fetchSolverRoutes() {
  return SolverRoutes;
}

export function fetchSolverMeta(): SolverMeta[] {
  return SolverRoutes;
}
