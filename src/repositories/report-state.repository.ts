import {DefaultCrudRepository} from '@loopback/repository';
import {ReportState, ReportStateRelations} from '../models';
import {DsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ReportStateRepository extends DefaultCrudRepository<
  ReportState,
  typeof ReportState.prototype.id,
  ReportStateRelations
> {
  constructor(
    @inject('datasources.ds') dataSource: DsDataSource,
  ) {
    super(ReportState, dataSource);
  }
}
