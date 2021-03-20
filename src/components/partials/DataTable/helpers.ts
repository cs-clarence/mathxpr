import {
  DataCellModel,
  DataHeaderCellModel,
  DataCellMatrix,
} from "./data-cell";

export type CellMatrixParameters = {
  rows: number | DataHeaderCellModel[];
  cols: number | DataHeaderCellModel[];
  prototype?: DataCellModel;
  deriveBodyFromHeader?: "row" | "column";
};

export function createCellMatrixModel({
  rows,
  cols,
  prototype,
  deriveBodyFromHeader,
}: CellMatrixParameters) {
  deriveBodyFromHeader = deriveBodyFromHeader ?? "column";

  const body = [] as DataCellModel[][];
  if (typeof rows === "number") {
    if (typeof cols === "number") {
      for (let i = 0; i < rows; ++i) {
        body.push([]);
        for (let j = 0; j < cols; ++j) {
          body[i][j] = Object.assign({}, prototype) ?? { data: "" };
        }
      }
    } else {
      for (let i = 0; i < rows; ++i) {
        body.push([]);
        for (const [j, col] of cols.entries()) {
          body[i][j] = Object.assign({}, col.headMeta) ?? { data: "" };
        }
      }
    }
  } else {
    if (typeof cols === "number") {
      for (const [i, row] of rows.entries()) {
        body.push([]);
        for (let j = 0; j < cols; ++j) {
          body[i][j] = Object.assign({}, row.headMeta) ?? { data: "" };
        }
      }
    } else {
      for (const [i, row] of rows.entries()) {
        body.push([]);
        for (const [j, col] of cols.entries()) {
          body[i][j] = Object.assign(
            {},
            deriveBodyFromHeader === "row" ? row.headMeta : col.headMeta,
          ) ?? { data: "" };
        }
      }
    }
  }

  return new DataCellMatrix(
    body,
    typeof cols !== "number" ? cols : undefined,
    typeof rows !== "number" ? rows : undefined,
  );
}
