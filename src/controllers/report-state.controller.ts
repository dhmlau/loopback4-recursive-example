import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {ReportState} from '../models';
import {ReportStateRepository} from '../repositories';

export class ReportStateController {
  constructor(
    @repository(ReportStateRepository)
    public reportStateRepository : ReportStateRepository,
  ) {}

  @post('/report-states', {
    responses: {
      '200': {
        description: 'ReportState model instance',
        content: {'application/json': {schema: getModelSchemaRef(ReportState)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReportState, {exclude: ['id']}),
        },
      },
    })
    reportState: Omit<ReportState, 'id'>,
  ): Promise<ReportState> {
    return this.reportStateRepository.create(reportState);
  }

  @get('/report-states/count', {
    responses: {
      '200': {
        description: 'ReportState model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(ReportState)) where?: Where<ReportState>,
  ): Promise<Count> {
    return this.reportStateRepository.count(where);
  }

  @get('/report-states', {
    responses: {
      '200': {
        description: 'Array of ReportState model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ReportState)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(ReportState)) filter?: Filter<ReportState>,
  ): Promise<ReportState[]> {
    return this.reportStateRepository.find(filter);
  }

  @patch('/report-states', {
    responses: {
      '200': {
        description: 'ReportState PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReportState, {partial: true}),
        },
      },
    })
    reportState: ReportState,
    @param.query.object('where', getWhereSchemaFor(ReportState)) where?: Where<ReportState>,
  ): Promise<Count> {
    return this.reportStateRepository.updateAll(reportState, where);
  }

  @get('/report-states/{id}', {
    responses: {
      '200': {
        description: 'ReportState model instance',
        content: {'application/json': {schema: getModelSchemaRef(ReportState)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<ReportState> {
    return this.reportStateRepository.findById(id);
  }

  @patch('/report-states/{id}', {
    responses: {
      '204': {
        description: 'ReportState PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReportState, {partial: true}),
        },
      },
    })
    reportState: ReportState,
  ): Promise<void> {
    await this.reportStateRepository.updateById(id, reportState);
  }

  @put('/report-states/{id}', {
    responses: {
      '204': {
        description: 'ReportState PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() reportState: ReportState,
  ): Promise<void> {
    await this.reportStateRepository.replaceById(id, reportState);
  }

  @del('/report-states/{id}', {
    responses: {
      '204': {
        description: 'ReportState DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.reportStateRepository.deleteById(id);
  }
}
