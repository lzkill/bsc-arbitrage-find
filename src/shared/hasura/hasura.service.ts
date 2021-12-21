import { Injectable } from '@nestjs/common';
import { IOfferResult } from 'biscoint-api-node/dist/typings/biscoint';
import { GraphQLClient } from 'graphql-request';
import { AppConfigService } from 'src/config/config.service';
import { getSdk } from './hasura-sdk';

export interface CreateTradeArgs {
  owner: string;
  type: string;
  openOffer: IOfferResult;
  closeOffer: IOfferResult;
  status: string;
}

@Injectable()
export class HasuraService {
  private client;

  constructor(private config: AppConfigService) {
    this.client = new GraphQLClient(config.hasura.apiEndpoint, {
      headers: {
        [`x-hasura-admin-secret`]: config.hasura.adminSecret,
      },
    });
  }

  async createTrade(args: CreateTradeArgs) {
    const variables = {
      input: {
        owner: args.owner,
        type: args.type,
        openOffer: {
          data: { ...args.openOffer },
        },
        closeOffer: {
          data: { ...args.closeOffer },
        },
        status: args.status,
      },
    };

    return getSdk(this.client).createTrade(variables);
  }
}
