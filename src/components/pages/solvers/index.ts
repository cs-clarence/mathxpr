import { RouteRecordRaw } from "vue-router";
const TruthTable = () => import("@/components/pages/solvers/TruthTable.vue");
const Apportionment = () =>
  import("@/components/pages/solvers/Apportionment.vue");
const SimpleInterest = () =>
  import("@/components/pages/solvers/SimpleInterest.vue");
const CompountInterest = () =>
  import("@/components/pages/solvers/CompoundInterest.vue");
const Correlation = () => import("@/components/pages/solvers/Correlation.vue");

type SolverMeta = {
  icon?: string;
  previewImage?: string;
  path: string;
  solverName: string;
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
      default: TruthTable,
    },
  },
  {
    path: "apportionment",
    name: "apportionment",
    icon: "favicon.svg",
    previewImage: "favicon.svg",
    get solverName() {
      return toTitleCase(this.path);
    },
    components: {
      default: Apportionment,
    },
  },
  {
    path: "correlation",
    name: "correlation",
    icon: "favicon.svg",
    previewImage: "favicon.svg",
    get solverName() {
      return toTitleCase(this.path);
    },
    components: {
      default: Correlation,
    },
  },
  {
    path: "compound_interest",
    name: "compound_interest",
    icon: "favicon.svg",
    previewImage: "favicon.svg",
    get solverName() {
      return toTitleCase(this.path);
    },
    components: {
      default: CompountInterest,
    },
  },
  {
    path: "simple_interest",
    name: "simple_interest",
    icon: "favicon.svg",
    previewImage: "favicon.svg",
    get solverName() {
      return toTitleCase(this.path);
    },
    components: {
      default: SimpleInterest,
    },
  },
];

export function fetchSolverRoutes() {
  return SolverRoutes;
}

export function fetchSolverMeta(): SolverMeta[] {
  return SolverRoutes;
}
