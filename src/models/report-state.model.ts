import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class ReportState extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property.array(ReportState, {})
  states: ReportState[];

  @property({
    type: 'string',
  })
  benchmarkId?: string;

  @property({
    type: 'string',
  })
  color?: string;

  constructor(data?: Partial<ReportState>) {
    super(data);
  }
}

export interface ReportStateRelations {
  // describe navigational properties here
}

export type ReportStateWithRelations = ReportState & ReportStateRelations;
