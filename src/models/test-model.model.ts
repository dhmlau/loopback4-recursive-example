import {Model, model, property} from '@loopback/repository';

@model({settings: {}})
export class TestModel extends Model {
  @property({
    type: 'string',
  })
  name1?: string;

  @property({
    type: 'string',
  })
  name2?: string;


  constructor(data?: Partial<TestModel>) {
    super(data);
  }
}

export interface TestModelRelations {
  // describe navigational properties here
}

export type TestModelWithRelations = TestModel & TestModelRelations;
