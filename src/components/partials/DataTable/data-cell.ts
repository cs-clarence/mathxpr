import { cloneDeep, fill } from "lodash";

export interface DataCellModel {
  data?: string;
  input?: boolean;
  inputAttrs?: {
    type?: string;
    min?: number;
    max?: number;
    minlength?: number;
    maxlength?: number;
    required?: boolean;
  };
  textAlign?: "left" | "center" | "right";
  colspan?: number;
  rowspan?: number;
  scope?: string;
}

export interface DataHeaderCellModel extends DataCellModel {
  headMeta: DataCellModel;
}

export class DataCellMatrix {
  constructor(
    private _bodyCells?: DataCellModel[][],
    private _colHeaderCells?: DataHeaderCellModel[],
    private _rowHeaderCells?: DataHeaderCellModel[],
  ) {}
  set bodyCells(_bodyCells: DataCellModel[][]) {
    this._bodyCells = _bodyCells;
  }
  get bodyCells() {
    return this._bodyCells as DataCellModel[][];
  }
  set rowHeaderCells(_rowHeaders: DataHeaderCellModel[]) {
    this._rowHeaderCells = _rowHeaders;
  }
  get rowHeaderCells() {
    return this._rowHeaderCells as DataHeaderCellModel[];
  }
  set colHeaderCells(_colHeaders: DataHeaderCellModel[]) {
    this._colHeaderCells = _colHeaders;
  }
  get colHeaderCells() {
    return this._colHeaderCells as DataHeaderCellModel[];
  }
  get nCols() {
    return (
      (this._rowHeaderCells ? 1 : 0) +
      (this._bodyCells ? this.bodyCells[0].length : 0)
    );
  }
  get nRows() {
    let rows = this._colHeaderCells ? 1 : 0;
    if (this._bodyCells?.length) {
      for (let i = 0; i < this._bodyCells.length; ++i, ++rows);
    }

    return rows;
  }
  increaseRows(rows = 1, prototype?: DataCellModel) {
    for (let i = 0; i < rows; ++i) {
      if (this._bodyCells) {
        this._bodyCells.push(
          fill(Array(this._bodyCells[0].length), prototype ?? {}),
        );
      }
      if (this._colHeaderCells) {
        this._colHeaderCells.push({ headMeta: {} });
      }
    }
  }
  decreaseRows(rows = 1) {
    if (this._bodyCells) {
      for (let i = 0; i < rows && this._bodyCells.length !== 0; ++i) {
        this._bodyCells.pop();
      }
    }
    if (this._colHeaderCells) {
      this._colHeaderCells.pop();
    }
  }
  increaseColumns(cols = 1, prototype?: DataCellModel) {
    if (this._bodyCells) {
      for (let i = 0; i < cols; ++i) {
        for (const array of this._bodyCells) {
          array.push(prototype ?? {});
        }
      }
    }
    if (this._rowHeaderCells) {
      this._rowHeaderCells.push({ headMeta: {} });
    }
  }
  decreaseColumns(cols = 1) {
    if (this._bodyCells) {
      for (let i = 0; i < cols; ++i) {
        for (const array of this._bodyCells) {
          array.pop();
        }
      }
    }
    if (this._rowHeaderCells) {
      this._rowHeaderCells.pop();
    }
  }
  clone() {
    return cloneDeep(this);
  }
}
