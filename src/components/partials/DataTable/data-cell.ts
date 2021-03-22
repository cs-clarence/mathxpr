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
    private _colHeaderCells?: DataHeaderCellModel[] | number,
    private _rowHeaderCells?: DataHeaderCellModel[] | number,
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
    if (typeof this._colHeaderCells === "number") {
      return this._colHeaderCells;
    } else {
      return (
        (this._rowHeaderCells ? 1 : 0) +
        (this._colHeaderCells?.length ??
          (this._bodyCells ? this._bodyCells[0]?.length ?? 0 : 0))
      );
    }
  }
  set nCols(n: number) {
    if (this.nCols > n) {
      this.decreaseRows(this.nCols - n);
    } else {
      this.increaseRows(n - this.nCols);
    }
  }

  get nRows() {
    let rows = this._colHeaderCells ? 1 : 0;
    if (this._bodyCells?.length) {
      for (let i = 0; i < this._bodyCells.length; ++i, ++rows);
    }

    return rows;
  }

  set nRows(n: number) {
    // console.log(`nRows: ${this.nRows}`);
    // console.log(n);
    if (this.nRows > n) {
      this.decreaseRows(this.nRows - n);
    } else {
      this.increaseRows(n - this.nRows);
    }
  }
  increaseRows(rows = 1, prototype?: DataCellModel) {
    for (let i = 0; i < rows; ++i) {
      if (typeof this._colHeaderCells === "number") {
        const model = prototype ?? {};
        if (this._bodyCells) {
          this._bodyCells.push(
            fill(
              Array(this._colHeaderCells ?? this._bodyCells[0]?.length) ?? 0,
              model,
            ),
          );
        }
      } else {
        if (this._bodyCells) {
          if (this._colHeaderCells) {
            this._bodyCells.push(this._colHeaderCells.map((el) => el.headMeta));
          }
        }
      }
      if (typeof this._rowHeaderCells === "number") {
        this._rowHeaderCells++;
      } else {
        if (this._rowHeaderCells) {
          this._rowHeaderCells.push({ headMeta: {} });
        }
      }
    }
  }
  decreaseRows(rows = 1) {
    for (let i = 0; i < rows; ++i) {
      if (this._bodyCells) {
        this._bodyCells.pop();
      }
      if (typeof this._rowHeaderCells === "number") {
        --this._rowHeaderCells;
      } else {
        if (this._rowHeaderCells) {
          this._rowHeaderCells.pop();
        }
      }
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
    if (typeof this._colHeaderCells === "number") {
      ++this._colHeaderCells;
    } else {
      if (this._colHeaderCells) {
        this._colHeaderCells.push({ headMeta: {} });
      }
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
    if (typeof this._colHeaderCells === "number") {
      --this._colHeaderCells;
    } else {
      if (this._colHeaderCells) {
        this._colHeaderCells.pop();
      }
    }
  }
  retrieveContent(headerKey: number | string) {
    if (typeof headerKey === "number") {
      return this._bodyCells?.map((el) => el[headerKey]);
    } else if (this._colHeaderCells) {
      if (typeof this._colHeaderCells !== "number") {
        for (const [index, el] of this._colHeaderCells.entries()) {
          if (el.data === headerKey) {
            return this._bodyCells?.map((el) => el[index]);
          }
        }
      }
    }
  }
  clone() {
    return cloneDeep(this);
  }
}
