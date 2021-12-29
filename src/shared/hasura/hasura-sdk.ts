import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  timestamptz: Date;
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface BooleanComparisonExp {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface IntComparisonExp {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface StringComparisonExp {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
}

/** columns and relationships of "biscoint.offer" */
export interface BiscointOffer {
  anticipatedAmount?: Maybe<Scalars['String']>;
  anticipationFeeQuote?: Maybe<Scalars['String']>;
  apiKeyId: Scalars['String'];
  base: Scalars['String'];
  baseAmount: Scalars['String'];
  confirmedAt?: Maybe<Scalars['timestamptz']>;
  createdAt: Scalars['timestamptz'];
  efPrice: Scalars['String'];
  expiresAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  isQuote: Scalars['Boolean'];
  nextRecycleAt?: Maybe<Scalars['timestamptz']>;
  offerId: Scalars['String'];
  op: Scalars['String'];
  quote: Scalars['String'];
  quoteAmount: Scalars['String'];
}

/** aggregated selection of "biscoint.offer" */
export interface BiscointOfferAggregate {
  aggregate?: Maybe<BiscointOfferAggregateFields>;
  nodes: Array<BiscointOffer>;
}

/** aggregate fields of "biscoint.offer" */
export interface BiscointOfferAggregateFields {
  avg?: Maybe<BiscointOfferAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<BiscointOfferMaxFields>;
  min?: Maybe<BiscointOfferMinFields>;
  stddev?: Maybe<BiscointOfferStddevFields>;
  stddev_pop?: Maybe<BiscointOfferStddevPopFields>;
  stddev_samp?: Maybe<BiscointOfferStddevSampFields>;
  sum?: Maybe<BiscointOfferSumFields>;
  var_pop?: Maybe<BiscointOfferVarPopFields>;
  var_samp?: Maybe<BiscointOfferVarSampFields>;
  variance?: Maybe<BiscointOfferVarianceFields>;
}

/** aggregate fields of "biscoint.offer" */
export interface BiscointOfferAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<BiscointOfferSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** aggregate avg on columns */
export interface BiscointOfferAvgFields {
  id?: Maybe<Scalars['Float']>;
}

/** Boolean expression to filter rows from the table "biscoint.offer". All fields are combined with a logical 'AND'. */
export interface BiscointOfferBoolExp {
  _and?: InputMaybe<Array<BiscointOfferBoolExp>>;
  _not?: InputMaybe<BiscointOfferBoolExp>;
  _or?: InputMaybe<Array<BiscointOfferBoolExp>>;
  anticipatedAmount?: InputMaybe<StringComparisonExp>;
  anticipationFeeQuote?: InputMaybe<StringComparisonExp>;
  apiKeyId?: InputMaybe<StringComparisonExp>;
  base?: InputMaybe<StringComparisonExp>;
  baseAmount?: InputMaybe<StringComparisonExp>;
  confirmedAt?: InputMaybe<TimestamptzComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  efPrice?: InputMaybe<StringComparisonExp>;
  expiresAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  isQuote?: InputMaybe<BooleanComparisonExp>;
  nextRecycleAt?: InputMaybe<TimestamptzComparisonExp>;
  offerId?: InputMaybe<StringComparisonExp>;
  op?: InputMaybe<StringComparisonExp>;
  quote?: InputMaybe<StringComparisonExp>;
  quoteAmount?: InputMaybe<StringComparisonExp>;
}

/** unique or primary key constraints on table "biscoint.offer" */
export enum BiscointOfferConstraint {
  /** unique or primary key constraint */
  OfferOfferIdKey = 'offer_offerId_key',
  /** unique or primary key constraint */
  OfferPkey = 'offer_pkey',
}

/** input type for incrementing numeric columns in table "biscoint.offer" */
export interface BiscointOfferIncInput {
  id?: InputMaybe<Scalars['Int']>;
}

/** input type for inserting data into table "biscoint.offer" */
export interface BiscointOfferInsertInput {
  anticipatedAmount?: InputMaybe<Scalars['String']>;
  anticipationFeeQuote?: InputMaybe<Scalars['String']>;
  apiKeyId?: InputMaybe<Scalars['String']>;
  base?: InputMaybe<Scalars['String']>;
  baseAmount?: InputMaybe<Scalars['String']>;
  confirmedAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  efPrice?: InputMaybe<Scalars['String']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  isQuote?: InputMaybe<Scalars['Boolean']>;
  nextRecycleAt?: InputMaybe<Scalars['timestamptz']>;
  offerId?: InputMaybe<Scalars['String']>;
  op?: InputMaybe<Scalars['String']>;
  quote?: InputMaybe<Scalars['String']>;
  quoteAmount?: InputMaybe<Scalars['String']>;
}

/** aggregate max on columns */
export interface BiscointOfferMaxFields {
  anticipatedAmount?: Maybe<Scalars['String']>;
  anticipationFeeQuote?: Maybe<Scalars['String']>;
  apiKeyId?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  baseAmount?: Maybe<Scalars['String']>;
  confirmedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  efPrice?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nextRecycleAt?: Maybe<Scalars['timestamptz']>;
  offerId?: Maybe<Scalars['String']>;
  op?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
  quoteAmount?: Maybe<Scalars['String']>;
}

/** aggregate min on columns */
export interface BiscointOfferMinFields {
  anticipatedAmount?: Maybe<Scalars['String']>;
  anticipationFeeQuote?: Maybe<Scalars['String']>;
  apiKeyId?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  baseAmount?: Maybe<Scalars['String']>;
  confirmedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  efPrice?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nextRecycleAt?: Maybe<Scalars['timestamptz']>;
  offerId?: Maybe<Scalars['String']>;
  op?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
  quoteAmount?: Maybe<Scalars['String']>;
}

/** response of any mutation on the table "biscoint.offer" */
export interface BiscointOfferMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<BiscointOffer>;
}

/** input type for inserting object relation for remote table "biscoint.offer" */
export interface BiscointOfferObjRelInsertInput {
  data: BiscointOfferInsertInput;
  /** on conflict condition */
  on_conflict?: InputMaybe<BiscointOfferOnConflict>;
}

/** on conflict condition type for table "biscoint.offer" */
export interface BiscointOfferOnConflict {
  constraint: BiscointOfferConstraint;
  update_columns?: Array<BiscointOfferUpdateColumn>;
  where?: InputMaybe<BiscointOfferBoolExp>;
}

/** Ordering options when selecting data from "biscoint.offer". */
export interface BiscointOfferOrderBy {
  anticipatedAmount?: InputMaybe<OrderBy>;
  anticipationFeeQuote?: InputMaybe<OrderBy>;
  apiKeyId?: InputMaybe<OrderBy>;
  base?: InputMaybe<OrderBy>;
  baseAmount?: InputMaybe<OrderBy>;
  confirmedAt?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  efPrice?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isQuote?: InputMaybe<OrderBy>;
  nextRecycleAt?: InputMaybe<OrderBy>;
  offerId?: InputMaybe<OrderBy>;
  op?: InputMaybe<OrderBy>;
  quote?: InputMaybe<OrderBy>;
  quoteAmount?: InputMaybe<OrderBy>;
}

/** primary key columns input for table: biscoint_offer */
export interface BiscointOfferPkColumnsInput {
  id: Scalars['Int'];
}

/** select columns of table "biscoint.offer" */
export enum BiscointOfferSelectColumn {
  /** column name */
  AnticipatedAmount = 'anticipatedAmount',
  /** column name */
  AnticipationFeeQuote = 'anticipationFeeQuote',
  /** column name */
  ApiKeyId = 'apiKeyId',
  /** column name */
  Base = 'base',
  /** column name */
  BaseAmount = 'baseAmount',
  /** column name */
  ConfirmedAt = 'confirmedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EfPrice = 'efPrice',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsQuote = 'isQuote',
  /** column name */
  NextRecycleAt = 'nextRecycleAt',
  /** column name */
  OfferId = 'offerId',
  /** column name */
  Op = 'op',
  /** column name */
  Quote = 'quote',
  /** column name */
  QuoteAmount = 'quoteAmount',
}

/** input type for updating data in table "biscoint.offer" */
export interface BiscointOfferSetInput {
  anticipatedAmount?: InputMaybe<Scalars['String']>;
  anticipationFeeQuote?: InputMaybe<Scalars['String']>;
  apiKeyId?: InputMaybe<Scalars['String']>;
  base?: InputMaybe<Scalars['String']>;
  baseAmount?: InputMaybe<Scalars['String']>;
  confirmedAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  efPrice?: InputMaybe<Scalars['String']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  isQuote?: InputMaybe<Scalars['Boolean']>;
  nextRecycleAt?: InputMaybe<Scalars['timestamptz']>;
  offerId?: InputMaybe<Scalars['String']>;
  op?: InputMaybe<Scalars['String']>;
  quote?: InputMaybe<Scalars['String']>;
  quoteAmount?: InputMaybe<Scalars['String']>;
}

/** aggregate stddev on columns */
export interface BiscointOfferStddevFields {
  id?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_pop on columns */
export interface BiscointOfferStddevPopFields {
  id?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_samp on columns */
export interface BiscointOfferStddevSampFields {
  id?: Maybe<Scalars['Float']>;
}

/** aggregate sum on columns */
export interface BiscointOfferSumFields {
  id?: Maybe<Scalars['Int']>;
}

/** update columns of table "biscoint.offer" */
export enum BiscointOfferUpdateColumn {
  /** column name */
  AnticipatedAmount = 'anticipatedAmount',
  /** column name */
  AnticipationFeeQuote = 'anticipationFeeQuote',
  /** column name */
  ApiKeyId = 'apiKeyId',
  /** column name */
  Base = 'base',
  /** column name */
  BaseAmount = 'baseAmount',
  /** column name */
  ConfirmedAt = 'confirmedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EfPrice = 'efPrice',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsQuote = 'isQuote',
  /** column name */
  NextRecycleAt = 'nextRecycleAt',
  /** column name */
  OfferId = 'offerId',
  /** column name */
  Op = 'op',
  /** column name */
  Quote = 'quote',
  /** column name */
  QuoteAmount = 'quoteAmount',
}

/** aggregate var_pop on columns */
export interface BiscointOfferVarPopFields {
  id?: Maybe<Scalars['Float']>;
}

/** aggregate var_samp on columns */
export interface BiscointOfferVarSampFields {
  id?: Maybe<Scalars['Float']>;
}

/** aggregate variance on columns */
export interface BiscointOfferVarianceFields {
  id?: Maybe<Scalars['Float']>;
}

/** columns and relationships of "biscoint.order" */
export interface BiscointOrder {
  amount: Scalars['String'];
  base: Scalars['String'];
  checkedAt?: Maybe<Scalars['timestamptz']>;
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  isQuote: Scalars['Boolean'];
  notBefore?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  offer?: Maybe<BiscointOffer>;
  offerId?: Maybe<Scalars['Int']>;
  op: Scalars['String'];
  refPrice?: Maybe<Scalars['String']>;
  status: Scalars['String'];
}

/** aggregated selection of "biscoint.order" */
export interface BiscointOrderAggregate {
  aggregate?: Maybe<BiscointOrderAggregateFields>;
  nodes: Array<BiscointOrder>;
}

/** aggregate fields of "biscoint.order" */
export interface BiscointOrderAggregateFields {
  avg?: Maybe<BiscointOrderAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<BiscointOrderMaxFields>;
  min?: Maybe<BiscointOrderMinFields>;
  stddev?: Maybe<BiscointOrderStddevFields>;
  stddev_pop?: Maybe<BiscointOrderStddevPopFields>;
  stddev_samp?: Maybe<BiscointOrderStddevSampFields>;
  sum?: Maybe<BiscointOrderSumFields>;
  var_pop?: Maybe<BiscointOrderVarPopFields>;
  var_samp?: Maybe<BiscointOrderVarSampFields>;
  variance?: Maybe<BiscointOrderVarianceFields>;
}

/** aggregate fields of "biscoint.order" */
export interface BiscointOrderAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<BiscointOrderSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** aggregate avg on columns */
export interface BiscointOrderAvgFields {
  id?: Maybe<Scalars['Float']>;
  offerId?: Maybe<Scalars['Float']>;
}

/** Boolean expression to filter rows from the table "biscoint.order". All fields are combined with a logical 'AND'. */
export interface BiscointOrderBoolExp {
  _and?: InputMaybe<Array<BiscointOrderBoolExp>>;
  _not?: InputMaybe<BiscointOrderBoolExp>;
  _or?: InputMaybe<Array<BiscointOrderBoolExp>>;
  amount?: InputMaybe<StringComparisonExp>;
  base?: InputMaybe<StringComparisonExp>;
  checkedAt?: InputMaybe<TimestamptzComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  isQuote?: InputMaybe<BooleanComparisonExp>;
  notBefore?: InputMaybe<TimestamptzComparisonExp>;
  offer?: InputMaybe<BiscointOfferBoolExp>;
  offerId?: InputMaybe<IntComparisonExp>;
  op?: InputMaybe<StringComparisonExp>;
  refPrice?: InputMaybe<StringComparisonExp>;
  status?: InputMaybe<StringComparisonExp>;
}

/** unique or primary key constraints on table "biscoint.order" */
export enum BiscointOrderConstraint {
  /** unique or primary key constraint */
  SchedulePkey = 'schedule_pkey',
}

/** input type for incrementing numeric columns in table "biscoint.order" */
export interface BiscointOrderIncInput {
  id?: InputMaybe<Scalars['Int']>;
  offerId?: InputMaybe<Scalars['Int']>;
}

/** input type for inserting data into table "biscoint.order" */
export interface BiscointOrderInsertInput {
  amount?: InputMaybe<Scalars['String']>;
  base?: InputMaybe<Scalars['String']>;
  checkedAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  isQuote?: InputMaybe<Scalars['Boolean']>;
  notBefore?: InputMaybe<Scalars['timestamptz']>;
  offer?: InputMaybe<BiscointOfferObjRelInsertInput>;
  offerId?: InputMaybe<Scalars['Int']>;
  op?: InputMaybe<Scalars['String']>;
  refPrice?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
}

/** aggregate max on columns */
export interface BiscointOrderMaxFields {
  amount?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  checkedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  notBefore?: Maybe<Scalars['timestamptz']>;
  offerId?: Maybe<Scalars['Int']>;
  op?: Maybe<Scalars['String']>;
  refPrice?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
}

/** aggregate min on columns */
export interface BiscointOrderMinFields {
  amount?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  checkedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  notBefore?: Maybe<Scalars['timestamptz']>;
  offerId?: Maybe<Scalars['Int']>;
  op?: Maybe<Scalars['String']>;
  refPrice?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
}

/** response of any mutation on the table "biscoint.order" */
export interface BiscointOrderMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<BiscointOrder>;
}

/** on conflict condition type for table "biscoint.order" */
export interface BiscointOrderOnConflict {
  constraint: BiscointOrderConstraint;
  update_columns?: Array<BiscointOrderUpdateColumn>;
  where?: InputMaybe<BiscointOrderBoolExp>;
}

/** Ordering options when selecting data from "biscoint.order". */
export interface BiscointOrderOrderBy {
  amount?: InputMaybe<OrderBy>;
  base?: InputMaybe<OrderBy>;
  checkedAt?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isQuote?: InputMaybe<OrderBy>;
  notBefore?: InputMaybe<OrderBy>;
  offer?: InputMaybe<BiscointOfferOrderBy>;
  offerId?: InputMaybe<OrderBy>;
  op?: InputMaybe<OrderBy>;
  refPrice?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
}

/** primary key columns input for table: biscoint_order */
export interface BiscointOrderPkColumnsInput {
  id: Scalars['Int'];
}

/** select columns of table "biscoint.order" */
export enum BiscointOrderSelectColumn {
  /** column name */
  Amount = 'amount',
  /** column name */
  Base = 'base',
  /** column name */
  CheckedAt = 'checkedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsQuote = 'isQuote',
  /** column name */
  NotBefore = 'notBefore',
  /** column name */
  OfferId = 'offerId',
  /** column name */
  Op = 'op',
  /** column name */
  RefPrice = 'refPrice',
  /** column name */
  Status = 'status',
}

/** input type for updating data in table "biscoint.order" */
export interface BiscointOrderSetInput {
  amount?: InputMaybe<Scalars['String']>;
  base?: InputMaybe<Scalars['String']>;
  checkedAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  isQuote?: InputMaybe<Scalars['Boolean']>;
  notBefore?: InputMaybe<Scalars['timestamptz']>;
  offerId?: InputMaybe<Scalars['Int']>;
  op?: InputMaybe<Scalars['String']>;
  refPrice?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
}

/** aggregate stddev on columns */
export interface BiscointOrderStddevFields {
  id?: Maybe<Scalars['Float']>;
  offerId?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_pop on columns */
export interface BiscointOrderStddevPopFields {
  id?: Maybe<Scalars['Float']>;
  offerId?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_samp on columns */
export interface BiscointOrderStddevSampFields {
  id?: Maybe<Scalars['Float']>;
  offerId?: Maybe<Scalars['Float']>;
}

/** aggregate sum on columns */
export interface BiscointOrderSumFields {
  id?: Maybe<Scalars['Int']>;
  offerId?: Maybe<Scalars['Int']>;
}

/** update columns of table "biscoint.order" */
export enum BiscointOrderUpdateColumn {
  /** column name */
  Amount = 'amount',
  /** column name */
  Base = 'base',
  /** column name */
  CheckedAt = 'checkedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsQuote = 'isQuote',
  /** column name */
  NotBefore = 'notBefore',
  /** column name */
  OfferId = 'offerId',
  /** column name */
  Op = 'op',
  /** column name */
  RefPrice = 'refPrice',
  /** column name */
  Status = 'status',
}

/** aggregate var_pop on columns */
export interface BiscointOrderVarPopFields {
  id?: Maybe<Scalars['Float']>;
  offerId?: Maybe<Scalars['Float']>;
}

/** aggregate var_samp on columns */
export interface BiscointOrderVarSampFields {
  id?: Maybe<Scalars['Float']>;
  offerId?: Maybe<Scalars['Float']>;
}

/** aggregate variance on columns */
export interface BiscointOrderVarianceFields {
  id?: Maybe<Scalars['Float']>;
  offerId?: Maybe<Scalars['Float']>;
}

/** columns and relationships of "biscoint.profit" */
export interface BiscointProfit {
  btc?: Maybe<Scalars['numeric']>;
  eth?: Maybe<Scalars['numeric']>;
}

/** aggregated selection of "biscoint.profit" */
export interface BiscointProfitAggregate {
  aggregate?: Maybe<BiscointProfitAggregateFields>;
  nodes: Array<BiscointProfit>;
}

/** aggregate fields of "biscoint.profit" */
export interface BiscointProfitAggregateFields {
  avg?: Maybe<BiscointProfitAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<BiscointProfitMaxFields>;
  min?: Maybe<BiscointProfitMinFields>;
  stddev?: Maybe<BiscointProfitStddevFields>;
  stddev_pop?: Maybe<BiscointProfitStddevPopFields>;
  stddev_samp?: Maybe<BiscointProfitStddevSampFields>;
  sum?: Maybe<BiscointProfitSumFields>;
  var_pop?: Maybe<BiscointProfitVarPopFields>;
  var_samp?: Maybe<BiscointProfitVarSampFields>;
  variance?: Maybe<BiscointProfitVarianceFields>;
}

/** aggregate fields of "biscoint.profit" */
export interface BiscointProfitAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<BiscointProfitSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** aggregate avg on columns */
export interface BiscointProfitAvgFields {
  btc?: Maybe<Scalars['Float']>;
  eth?: Maybe<Scalars['Float']>;
}

/** Boolean expression to filter rows from the table "biscoint.profit". All fields are combined with a logical 'AND'. */
export interface BiscointProfitBoolExp {
  _and?: InputMaybe<Array<BiscointProfitBoolExp>>;
  _not?: InputMaybe<BiscointProfitBoolExp>;
  _or?: InputMaybe<Array<BiscointProfitBoolExp>>;
  btc?: InputMaybe<NumericComparisonExp>;
  eth?: InputMaybe<NumericComparisonExp>;
}

/** aggregate max on columns */
export interface BiscointProfitMaxFields {
  btc?: Maybe<Scalars['numeric']>;
  eth?: Maybe<Scalars['numeric']>;
}

/** aggregate min on columns */
export interface BiscointProfitMinFields {
  btc?: Maybe<Scalars['numeric']>;
  eth?: Maybe<Scalars['numeric']>;
}

/** Ordering options when selecting data from "biscoint.profit". */
export interface BiscointProfitOrderBy {
  btc?: InputMaybe<OrderBy>;
  eth?: InputMaybe<OrderBy>;
}

/** select columns of table "biscoint.profit" */
export enum BiscointProfitSelectColumn {
  /** column name */
  Btc = 'btc',
  /** column name */
  Eth = 'eth',
}

/** aggregate stddev on columns */
export interface BiscointProfitStddevFields {
  btc?: Maybe<Scalars['Float']>;
  eth?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_pop on columns */
export interface BiscointProfitStddevPopFields {
  btc?: Maybe<Scalars['Float']>;
  eth?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_samp on columns */
export interface BiscointProfitStddevSampFields {
  btc?: Maybe<Scalars['Float']>;
  eth?: Maybe<Scalars['Float']>;
}

/** aggregate sum on columns */
export interface BiscointProfitSumFields {
  btc?: Maybe<Scalars['numeric']>;
  eth?: Maybe<Scalars['numeric']>;
}

/** aggregate var_pop on columns */
export interface BiscointProfitVarPopFields {
  btc?: Maybe<Scalars['Float']>;
  eth?: Maybe<Scalars['Float']>;
}

/** aggregate var_samp on columns */
export interface BiscointProfitVarSampFields {
  btc?: Maybe<Scalars['Float']>;
  eth?: Maybe<Scalars['Float']>;
}

/** aggregate variance on columns */
export interface BiscointProfitVarianceFields {
  btc?: Maybe<Scalars['Float']>;
  eth?: Maybe<Scalars['Float']>;
}

/** columns and relationships of "biscoint.trade" */
export interface BiscointTrade {
  checkedAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  closeOffer?: Maybe<BiscointOffer>;
  closeOfferId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  /** An object relationship */
  openOffer: BiscointOffer;
  openOfferId: Scalars['Int'];
  owner?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  strategy?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}

/** aggregated selection of "biscoint.trade" */
export interface BiscointTradeAggregate {
  aggregate?: Maybe<BiscointTradeAggregateFields>;
  nodes: Array<BiscointTrade>;
}

/** aggregate fields of "biscoint.trade" */
export interface BiscointTradeAggregateFields {
  avg?: Maybe<BiscointTradeAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<BiscointTradeMaxFields>;
  min?: Maybe<BiscointTradeMinFields>;
  stddev?: Maybe<BiscointTradeStddevFields>;
  stddev_pop?: Maybe<BiscointTradeStddevPopFields>;
  stddev_samp?: Maybe<BiscointTradeStddevSampFields>;
  sum?: Maybe<BiscointTradeSumFields>;
  var_pop?: Maybe<BiscointTradeVarPopFields>;
  var_samp?: Maybe<BiscointTradeVarSampFields>;
  variance?: Maybe<BiscointTradeVarianceFields>;
}

/** aggregate fields of "biscoint.trade" */
export interface BiscointTradeAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<BiscointTradeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** aggregate avg on columns */
export interface BiscointTradeAvgFields {
  closeOfferId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  openOfferId?: Maybe<Scalars['Float']>;
}

/** Boolean expression to filter rows from the table "biscoint.trade". All fields are combined with a logical 'AND'. */
export interface BiscointTradeBoolExp {
  _and?: InputMaybe<Array<BiscointTradeBoolExp>>;
  _not?: InputMaybe<BiscointTradeBoolExp>;
  _or?: InputMaybe<Array<BiscointTradeBoolExp>>;
  checkedAt?: InputMaybe<TimestamptzComparisonExp>;
  closeOffer?: InputMaybe<BiscointOfferBoolExp>;
  closeOfferId?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  openOffer?: InputMaybe<BiscointOfferBoolExp>;
  openOfferId?: InputMaybe<IntComparisonExp>;
  owner?: InputMaybe<StringComparisonExp>;
  status?: InputMaybe<StringComparisonExp>;
  strategy?: InputMaybe<StringComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
}

/** unique or primary key constraints on table "biscoint.trade" */
export enum BiscointTradeConstraint {
  /** unique or primary key constraint */
  TradePkey = 'trade_pkey',
}

/** input type for incrementing numeric columns in table "biscoint.trade" */
export interface BiscointTradeIncInput {
  closeOfferId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  openOfferId?: InputMaybe<Scalars['Int']>;
}

/** input type for inserting data into table "biscoint.trade" */
export interface BiscointTradeInsertInput {
  checkedAt?: InputMaybe<Scalars['timestamptz']>;
  closeOffer?: InputMaybe<BiscointOfferObjRelInsertInput>;
  closeOfferId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  openOffer?: InputMaybe<BiscointOfferObjRelInsertInput>;
  openOfferId?: InputMaybe<Scalars['Int']>;
  owner?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  strategy?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
}

/** aggregate max on columns */
export interface BiscointTradeMaxFields {
  checkedAt?: Maybe<Scalars['timestamptz']>;
  closeOfferId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  openOfferId?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  strategy?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}

/** aggregate min on columns */
export interface BiscointTradeMinFields {
  checkedAt?: Maybe<Scalars['timestamptz']>;
  closeOfferId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  openOfferId?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  strategy?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}

/** response of any mutation on the table "biscoint.trade" */
export interface BiscointTradeMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<BiscointTrade>;
}

/** on conflict condition type for table "biscoint.trade" */
export interface BiscointTradeOnConflict {
  constraint: BiscointTradeConstraint;
  update_columns?: Array<BiscointTradeUpdateColumn>;
  where?: InputMaybe<BiscointTradeBoolExp>;
}

/** Ordering options when selecting data from "biscoint.trade". */
export interface BiscointTradeOrderBy {
  checkedAt?: InputMaybe<OrderBy>;
  closeOffer?: InputMaybe<BiscointOfferOrderBy>;
  closeOfferId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  openOffer?: InputMaybe<BiscointOfferOrderBy>;
  openOfferId?: InputMaybe<OrderBy>;
  owner?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  strategy?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
}

/** primary key columns input for table: biscoint_trade */
export interface BiscointTradePkColumnsInput {
  id: Scalars['Int'];
}

/** select columns of table "biscoint.trade" */
export enum BiscointTradeSelectColumn {
  /** column name */
  CheckedAt = 'checkedAt',
  /** column name */
  CloseOfferId = 'closeOfferId',
  /** column name */
  Id = 'id',
  /** column name */
  OpenOfferId = 'openOfferId',
  /** column name */
  Owner = 'owner',
  /** column name */
  Status = 'status',
  /** column name */
  Strategy = 'strategy',
  /** column name */
  Type = 'type',
}

/** input type for updating data in table "biscoint.trade" */
export interface BiscointTradeSetInput {
  checkedAt?: InputMaybe<Scalars['timestamptz']>;
  closeOfferId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  openOfferId?: InputMaybe<Scalars['Int']>;
  owner?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  strategy?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
}

/** aggregate stddev on columns */
export interface BiscointTradeStddevFields {
  closeOfferId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  openOfferId?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_pop on columns */
export interface BiscointTradeStddevPopFields {
  closeOfferId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  openOfferId?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_samp on columns */
export interface BiscointTradeStddevSampFields {
  closeOfferId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  openOfferId?: Maybe<Scalars['Float']>;
}

/** aggregate sum on columns */
export interface BiscointTradeSumFields {
  closeOfferId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  openOfferId?: Maybe<Scalars['Int']>;
}

/** update columns of table "biscoint.trade" */
export enum BiscointTradeUpdateColumn {
  /** column name */
  CheckedAt = 'checkedAt',
  /** column name */
  CloseOfferId = 'closeOfferId',
  /** column name */
  Id = 'id',
  /** column name */
  OpenOfferId = 'openOfferId',
  /** column name */
  Owner = 'owner',
  /** column name */
  Status = 'status',
  /** column name */
  Strategy = 'strategy',
  /** column name */
  Type = 'type',
}

/** aggregate var_pop on columns */
export interface BiscointTradeVarPopFields {
  closeOfferId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  openOfferId?: Maybe<Scalars['Float']>;
}

/** aggregate var_samp on columns */
export interface BiscointTradeVarSampFields {
  closeOfferId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  openOfferId?: Maybe<Scalars['Float']>;
}

/** aggregate variance on columns */
export interface BiscointTradeVarianceFields {
  closeOfferId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  openOfferId?: Maybe<Scalars['Float']>;
}

/** mutation root */
export interface MutationRoot {
  /** delete data from the table: "biscoint.offer" */
  delete_biscoint_offer?: Maybe<BiscointOfferMutationResponse>;
  /** delete single row from the table: "biscoint.offer" */
  delete_biscoint_offer_by_pk?: Maybe<BiscointOffer>;
  /** delete data from the table: "biscoint.order" */
  delete_biscoint_order?: Maybe<BiscointOrderMutationResponse>;
  /** delete single row from the table: "biscoint.order" */
  delete_biscoint_order_by_pk?: Maybe<BiscointOrder>;
  /** delete data from the table: "biscoint.trade" */
  delete_biscoint_trade?: Maybe<BiscointTradeMutationResponse>;
  /** delete single row from the table: "biscoint.trade" */
  delete_biscoint_trade_by_pk?: Maybe<BiscointTrade>;
  /** insert data into the table: "biscoint.offer" */
  insert_biscoint_offer?: Maybe<BiscointOfferMutationResponse>;
  /** insert a single row into the table: "biscoint.offer" */
  insert_biscoint_offer_one?: Maybe<BiscointOffer>;
  /** insert data into the table: "biscoint.order" */
  insert_biscoint_order?: Maybe<BiscointOrderMutationResponse>;
  /** insert a single row into the table: "biscoint.order" */
  insert_biscoint_order_one?: Maybe<BiscointOrder>;
  /** insert data into the table: "biscoint.trade" */
  insert_biscoint_trade?: Maybe<BiscointTradeMutationResponse>;
  /** insert a single row into the table: "biscoint.trade" */
  insert_biscoint_trade_one?: Maybe<BiscointTrade>;
  /** update data of the table: "biscoint.offer" */
  update_biscoint_offer?: Maybe<BiscointOfferMutationResponse>;
  /** update single row of the table: "biscoint.offer" */
  update_biscoint_offer_by_pk?: Maybe<BiscointOffer>;
  /** update data of the table: "biscoint.order" */
  update_biscoint_order?: Maybe<BiscointOrderMutationResponse>;
  /** update single row of the table: "biscoint.order" */
  update_biscoint_order_by_pk?: Maybe<BiscointOrder>;
  /** update data of the table: "biscoint.trade" */
  update_biscoint_trade?: Maybe<BiscointTradeMutationResponse>;
  /** update single row of the table: "biscoint.trade" */
  update_biscoint_trade_by_pk?: Maybe<BiscointTrade>;
}

/** mutation root */
export interface MutationRootDeleteBiscointOfferArgs {
  where: BiscointOfferBoolExp;
}

/** mutation root */
export interface MutationRootDeleteBiscointOfferByPkArgs {
  id: Scalars['Int'];
}

/** mutation root */
export interface MutationRootDeleteBiscointOrderArgs {
  where: BiscointOrderBoolExp;
}

/** mutation root */
export interface MutationRootDeleteBiscointOrderByPkArgs {
  id: Scalars['Int'];
}

/** mutation root */
export interface MutationRootDeleteBiscointTradeArgs {
  where: BiscointTradeBoolExp;
}

/** mutation root */
export interface MutationRootDeleteBiscointTradeByPkArgs {
  id: Scalars['Int'];
}

/** mutation root */
export interface MutationRootInsertBiscointOfferArgs {
  objects: Array<BiscointOfferInsertInput>;
  on_conflict?: InputMaybe<BiscointOfferOnConflict>;
}

/** mutation root */
export interface MutationRootInsertBiscointOfferOneArgs {
  object: BiscointOfferInsertInput;
  on_conflict?: InputMaybe<BiscointOfferOnConflict>;
}

/** mutation root */
export interface MutationRootInsertBiscointOrderArgs {
  objects: Array<BiscointOrderInsertInput>;
  on_conflict?: InputMaybe<BiscointOrderOnConflict>;
}

/** mutation root */
export interface MutationRootInsertBiscointOrderOneArgs {
  object: BiscointOrderInsertInput;
  on_conflict?: InputMaybe<BiscointOrderOnConflict>;
}

/** mutation root */
export interface MutationRootInsertBiscointTradeArgs {
  objects: Array<BiscointTradeInsertInput>;
  on_conflict?: InputMaybe<BiscointTradeOnConflict>;
}

/** mutation root */
export interface MutationRootInsertBiscointTradeOneArgs {
  object: BiscointTradeInsertInput;
  on_conflict?: InputMaybe<BiscointTradeOnConflict>;
}

/** mutation root */
export interface MutationRootUpdateBiscointOfferArgs {
  _inc?: InputMaybe<BiscointOfferIncInput>;
  _set?: InputMaybe<BiscointOfferSetInput>;
  where: BiscointOfferBoolExp;
}

/** mutation root */
export interface MutationRootUpdateBiscointOfferByPkArgs {
  _inc?: InputMaybe<BiscointOfferIncInput>;
  _set?: InputMaybe<BiscointOfferSetInput>;
  pk_columns: BiscointOfferPkColumnsInput;
}

/** mutation root */
export interface MutationRootUpdateBiscointOrderArgs {
  _inc?: InputMaybe<BiscointOrderIncInput>;
  _set?: InputMaybe<BiscointOrderSetInput>;
  where: BiscointOrderBoolExp;
}

/** mutation root */
export interface MutationRootUpdateBiscointOrderByPkArgs {
  _inc?: InputMaybe<BiscointOrderIncInput>;
  _set?: InputMaybe<BiscointOrderSetInput>;
  pk_columns: BiscointOrderPkColumnsInput;
}

/** mutation root */
export interface MutationRootUpdateBiscointTradeArgs {
  _inc?: InputMaybe<BiscointTradeIncInput>;
  _set?: InputMaybe<BiscointTradeSetInput>;
  where: BiscointTradeBoolExp;
}

/** mutation root */
export interface MutationRootUpdateBiscointTradeByPkArgs {
  _inc?: InputMaybe<BiscointTradeIncInput>;
  _set?: InputMaybe<BiscointTradeSetInput>;
  pk_columns: BiscointTradePkColumnsInput;
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export interface NumericComparisonExp {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
}

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

export interface QueryRoot {
  /** fetch data from the table: "biscoint.offer" */
  biscoint_offer: Array<BiscointOffer>;
  /** fetch aggregated fields from the table: "biscoint.offer" */
  biscoint_offer_aggregate: BiscointOfferAggregate;
  /** fetch data from the table: "biscoint.offer" using primary key columns */
  biscoint_offer_by_pk?: Maybe<BiscointOffer>;
  /** fetch data from the table: "biscoint.order" */
  biscoint_order: Array<BiscointOrder>;
  /** fetch aggregated fields from the table: "biscoint.order" */
  biscoint_order_aggregate: BiscointOrderAggregate;
  /** fetch data from the table: "biscoint.order" using primary key columns */
  biscoint_order_by_pk?: Maybe<BiscointOrder>;
  /** fetch data from the table: "biscoint.profit" */
  biscoint_profit: Array<BiscointProfit>;
  /** fetch aggregated fields from the table: "biscoint.profit" */
  biscoint_profit_aggregate: BiscointProfitAggregate;
  /** fetch data from the table: "biscoint.trade" */
  biscoint_trade: Array<BiscointTrade>;
  /** fetch aggregated fields from the table: "biscoint.trade" */
  biscoint_trade_aggregate: BiscointTradeAggregate;
  /** fetch data from the table: "biscoint.trade" using primary key columns */
  biscoint_trade_by_pk?: Maybe<BiscointTrade>;
}

export interface QueryRootBiscointOfferArgs {
  distinct_on?: InputMaybe<Array<BiscointOfferSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointOfferOrderBy>>;
  where?: InputMaybe<BiscointOfferBoolExp>;
}

export interface QueryRootBiscointOfferAggregateArgs {
  distinct_on?: InputMaybe<Array<BiscointOfferSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointOfferOrderBy>>;
  where?: InputMaybe<BiscointOfferBoolExp>;
}

export interface QueryRootBiscointOfferByPkArgs {
  id: Scalars['Int'];
}

export interface QueryRootBiscointOrderArgs {
  distinct_on?: InputMaybe<Array<BiscointOrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointOrderOrderBy>>;
  where?: InputMaybe<BiscointOrderBoolExp>;
}

export interface QueryRootBiscointOrderAggregateArgs {
  distinct_on?: InputMaybe<Array<BiscointOrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointOrderOrderBy>>;
  where?: InputMaybe<BiscointOrderBoolExp>;
}

export interface QueryRootBiscointOrderByPkArgs {
  id: Scalars['Int'];
}

export interface QueryRootBiscointProfitArgs {
  distinct_on?: InputMaybe<Array<BiscointProfitSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointProfitOrderBy>>;
  where?: InputMaybe<BiscointProfitBoolExp>;
}

export interface QueryRootBiscointProfitAggregateArgs {
  distinct_on?: InputMaybe<Array<BiscointProfitSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointProfitOrderBy>>;
  where?: InputMaybe<BiscointProfitBoolExp>;
}

export interface QueryRootBiscointTradeArgs {
  distinct_on?: InputMaybe<Array<BiscointTradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointTradeOrderBy>>;
  where?: InputMaybe<BiscointTradeBoolExp>;
}

export interface QueryRootBiscointTradeAggregateArgs {
  distinct_on?: InputMaybe<Array<BiscointTradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointTradeOrderBy>>;
  where?: InputMaybe<BiscointTradeBoolExp>;
}

export interface QueryRootBiscointTradeByPkArgs {
  id: Scalars['Int'];
}

export interface SubscriptionRoot {
  /** fetch data from the table: "biscoint.offer" */
  biscoint_offer: Array<BiscointOffer>;
  /** fetch aggregated fields from the table: "biscoint.offer" */
  biscoint_offer_aggregate: BiscointOfferAggregate;
  /** fetch data from the table: "biscoint.offer" using primary key columns */
  biscoint_offer_by_pk?: Maybe<BiscointOffer>;
  /** fetch data from the table: "biscoint.order" */
  biscoint_order: Array<BiscointOrder>;
  /** fetch aggregated fields from the table: "biscoint.order" */
  biscoint_order_aggregate: BiscointOrderAggregate;
  /** fetch data from the table: "biscoint.order" using primary key columns */
  biscoint_order_by_pk?: Maybe<BiscointOrder>;
  /** fetch data from the table: "biscoint.profit" */
  biscoint_profit: Array<BiscointProfit>;
  /** fetch aggregated fields from the table: "biscoint.profit" */
  biscoint_profit_aggregate: BiscointProfitAggregate;
  /** fetch data from the table: "biscoint.trade" */
  biscoint_trade: Array<BiscointTrade>;
  /** fetch aggregated fields from the table: "biscoint.trade" */
  biscoint_trade_aggregate: BiscointTradeAggregate;
  /** fetch data from the table: "biscoint.trade" using primary key columns */
  biscoint_trade_by_pk?: Maybe<BiscointTrade>;
}

export interface SubscriptionRootBiscointOfferArgs {
  distinct_on?: InputMaybe<Array<BiscointOfferSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointOfferOrderBy>>;
  where?: InputMaybe<BiscointOfferBoolExp>;
}

export interface SubscriptionRootBiscointOfferAggregateArgs {
  distinct_on?: InputMaybe<Array<BiscointOfferSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointOfferOrderBy>>;
  where?: InputMaybe<BiscointOfferBoolExp>;
}

export interface SubscriptionRootBiscointOfferByPkArgs {
  id: Scalars['Int'];
}

export interface SubscriptionRootBiscointOrderArgs {
  distinct_on?: InputMaybe<Array<BiscointOrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointOrderOrderBy>>;
  where?: InputMaybe<BiscointOrderBoolExp>;
}

export interface SubscriptionRootBiscointOrderAggregateArgs {
  distinct_on?: InputMaybe<Array<BiscointOrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointOrderOrderBy>>;
  where?: InputMaybe<BiscointOrderBoolExp>;
}

export interface SubscriptionRootBiscointOrderByPkArgs {
  id: Scalars['Int'];
}

export interface SubscriptionRootBiscointProfitArgs {
  distinct_on?: InputMaybe<Array<BiscointProfitSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointProfitOrderBy>>;
  where?: InputMaybe<BiscointProfitBoolExp>;
}

export interface SubscriptionRootBiscointProfitAggregateArgs {
  distinct_on?: InputMaybe<Array<BiscointProfitSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointProfitOrderBy>>;
  where?: InputMaybe<BiscointProfitBoolExp>;
}

export interface SubscriptionRootBiscointTradeArgs {
  distinct_on?: InputMaybe<Array<BiscointTradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointTradeOrderBy>>;
  where?: InputMaybe<BiscointTradeBoolExp>;
}

export interface SubscriptionRootBiscointTradeAggregateArgs {
  distinct_on?: InputMaybe<Array<BiscointTradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointTradeOrderBy>>;
  where?: InputMaybe<BiscointTradeBoolExp>;
}

export interface SubscriptionRootBiscointTradeByPkArgs {
  id: Scalars['Int'];
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface TimestamptzComparisonExp {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
}

export type CreateTradeMutationVariables = Exact<{
  input: BiscointTradeInsertInput;
}>;

export type CreateTradeMutation = {
  insert_biscoint_trade_one?: { id: number } | null | undefined;
};

export const CreateTradeDocument = gql`
  mutation createTrade($input: biscoint_trade_insert_input!) {
    insert_biscoint_trade_one(object: $input) {
      id
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    createTrade(
      variables: CreateTradeMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<CreateTradeMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateTradeMutation>(CreateTradeDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'createTrade',
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
