import { BaseModel, identifier } from './base.model';

export class BaseCollection<T extends BaseModel> extends Array<T> {

  constructor(initialItems?: T[]) {
    super();
    this.push.apply(this, initialItems);
  }

  public findById(id: identifier): BaseModel {

    const found = this.find((model) => model.getIdentifier() === id);

    if (!found) {
      throw new Error(`Item with id [${id}] not in collection`);
    }

    return found;
  }

}
