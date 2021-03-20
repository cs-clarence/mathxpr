import { DataCellMatrix } from "./data-cell";

export class DataTableModel {
  constructor(private _model?: DataCellMatrix) {}
  set model(model: DataCellMatrix) {
    this._model = model;
  }
  get model() {
    return (this._model as unknown) as DataCellMatrix;
  }
}
