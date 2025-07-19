
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model EmailLog
 * 
 */
export type EmailLog = $Result.DefaultSelection<Prisma.$EmailLogPayload>
/**
 * Model SystemConfig
 * 
 */
export type SystemConfig = $Result.DefaultSelection<Prisma.$SystemConfigPayload>
/**
 * Model ConfigHistory
 * 
 */
export type ConfigHistory = $Result.DefaultSelection<Prisma.$ConfigHistoryPayload>
/**
 * Model AllowedIP
 * 
 */
export type AllowedIP = $Result.DefaultSelection<Prisma.$AllowedIPPayload>
/**
 * Model BlockedDomain
 * 
 */
export type BlockedDomain = $Result.DefaultSelection<Prisma.$BlockedDomainPayload>
/**
 * Model EmailTemplate
 * 
 */
export type EmailTemplate = $Result.DefaultSelection<Prisma.$EmailTemplatePayload>
/**
 * Model TemplateHistory
 * 
 */
export type TemplateHistory = $Result.DefaultSelection<Prisma.$TemplateHistoryPayload>
/**
 * Model WebhookConfig
 * 
 */
export type WebhookConfig = $Result.DefaultSelection<Prisma.$WebhookConfigPayload>
/**
 * Model WebhookLog
 * 
 */
export type WebhookLog = $Result.DefaultSelection<Prisma.$WebhookLogPayload>
/**
 * Model ApiKey
 * 
 */
export type ApiKey = $Result.DefaultSelection<Prisma.$ApiKeyPayload>
/**
 * Model ApiKeyUsage
 * 
 */
export type ApiKeyUsage = $Result.DefaultSelection<Prisma.$ApiKeyUsagePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EmailStatus: {
  PENDING: 'PENDING',
  SENT: 'SENT',
  FAILED: 'FAILED',
  RETRYING: 'RETRYING'
};

export type EmailStatus = (typeof EmailStatus)[keyof typeof EmailStatus]


export const SystemConfigType: {
  STRING: 'STRING',
  NUMBER: 'NUMBER',
  BOOLEAN: 'BOOLEAN',
  JSON: 'JSON',
  ARRAY: 'ARRAY'
};

export type SystemConfigType = (typeof SystemConfigType)[keyof typeof SystemConfigType]


export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type EmailStatus = $Enums.EmailStatus

export const EmailStatus: typeof $Enums.EmailStatus

export type SystemConfigType = $Enums.SystemConfigType

export const SystemConfigType: typeof $Enums.SystemConfigType

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more EmailLogs
 * const emailLogs = await prisma.emailLog.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more EmailLogs
   * const emailLogs = await prisma.emailLog.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.emailLog`: Exposes CRUD operations for the **EmailLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailLogs
    * const emailLogs = await prisma.emailLog.findMany()
    * ```
    */
  get emailLog(): Prisma.EmailLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemConfig`: Exposes CRUD operations for the **SystemConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemConfigs
    * const systemConfigs = await prisma.systemConfig.findMany()
    * ```
    */
  get systemConfig(): Prisma.SystemConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.configHistory`: Exposes CRUD operations for the **ConfigHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConfigHistories
    * const configHistories = await prisma.configHistory.findMany()
    * ```
    */
  get configHistory(): Prisma.ConfigHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.allowedIP`: Exposes CRUD operations for the **AllowedIP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AllowedIPS
    * const allowedIPS = await prisma.allowedIP.findMany()
    * ```
    */
  get allowedIP(): Prisma.AllowedIPDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blockedDomain`: Exposes CRUD operations for the **BlockedDomain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlockedDomains
    * const blockedDomains = await prisma.blockedDomain.findMany()
    * ```
    */
  get blockedDomain(): Prisma.BlockedDomainDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailTemplate`: Exposes CRUD operations for the **EmailTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailTemplates
    * const emailTemplates = await prisma.emailTemplate.findMany()
    * ```
    */
  get emailTemplate(): Prisma.EmailTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.templateHistory`: Exposes CRUD operations for the **TemplateHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemplateHistories
    * const templateHistories = await prisma.templateHistory.findMany()
    * ```
    */
  get templateHistory(): Prisma.TemplateHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webhookConfig`: Exposes CRUD operations for the **WebhookConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebhookConfigs
    * const webhookConfigs = await prisma.webhookConfig.findMany()
    * ```
    */
  get webhookConfig(): Prisma.WebhookConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webhookLog`: Exposes CRUD operations for the **WebhookLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebhookLogs
    * const webhookLogs = await prisma.webhookLog.findMany()
    * ```
    */
  get webhookLog(): Prisma.WebhookLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiKeyUsage`: Exposes CRUD operations for the **ApiKeyUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeyUsages
    * const apiKeyUsages = await prisma.apiKeyUsage.findMany()
    * ```
    */
  get apiKeyUsage(): Prisma.ApiKeyUsageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    EmailLog: 'EmailLog',
    SystemConfig: 'SystemConfig',
    ConfigHistory: 'ConfigHistory',
    AllowedIP: 'AllowedIP',
    BlockedDomain: 'BlockedDomain',
    EmailTemplate: 'EmailTemplate',
    TemplateHistory: 'TemplateHistory',
    WebhookConfig: 'WebhookConfig',
    WebhookLog: 'WebhookLog',
    ApiKey: 'ApiKey',
    ApiKeyUsage: 'ApiKeyUsage',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "emailLog" | "systemConfig" | "configHistory" | "allowedIP" | "blockedDomain" | "emailTemplate" | "templateHistory" | "webhookConfig" | "webhookLog" | "apiKey" | "apiKeyUsage" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      EmailLog: {
        payload: Prisma.$EmailLogPayload<ExtArgs>
        fields: Prisma.EmailLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          findFirst: {
            args: Prisma.EmailLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          findMany: {
            args: Prisma.EmailLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>[]
          }
          create: {
            args: Prisma.EmailLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          createMany: {
            args: Prisma.EmailLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>[]
          }
          delete: {
            args: Prisma.EmailLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          update: {
            args: Prisma.EmailLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          deleteMany: {
            args: Prisma.EmailLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>[]
          }
          upsert: {
            args: Prisma.EmailLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          aggregate: {
            args: Prisma.EmailLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailLog>
          }
          groupBy: {
            args: Prisma.EmailLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailLogCountArgs<ExtArgs>
            result: $Utils.Optional<EmailLogCountAggregateOutputType> | number
          }
        }
      }
      SystemConfig: {
        payload: Prisma.$SystemConfigPayload<ExtArgs>
        fields: Prisma.SystemConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          findFirst: {
            args: Prisma.SystemConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          findMany: {
            args: Prisma.SystemConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          create: {
            args: Prisma.SystemConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          createMany: {
            args: Prisma.SystemConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          delete: {
            args: Prisma.SystemConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          update: {
            args: Prisma.SystemConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          deleteMany: {
            args: Prisma.SystemConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          upsert: {
            args: Prisma.SystemConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          aggregate: {
            args: Prisma.SystemConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemConfig>
          }
          groupBy: {
            args: Prisma.SystemConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemConfigCountArgs<ExtArgs>
            result: $Utils.Optional<SystemConfigCountAggregateOutputType> | number
          }
        }
      }
      ConfigHistory: {
        payload: Prisma.$ConfigHistoryPayload<ExtArgs>
        fields: Prisma.ConfigHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfigHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfigHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigHistoryPayload>
          }
          findFirst: {
            args: Prisma.ConfigHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfigHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigHistoryPayload>
          }
          findMany: {
            args: Prisma.ConfigHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigHistoryPayload>[]
          }
          create: {
            args: Prisma.ConfigHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigHistoryPayload>
          }
          createMany: {
            args: Prisma.ConfigHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConfigHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigHistoryPayload>[]
          }
          delete: {
            args: Prisma.ConfigHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigHistoryPayload>
          }
          update: {
            args: Prisma.ConfigHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ConfigHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfigHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConfigHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ConfigHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigHistoryPayload>
          }
          aggregate: {
            args: Prisma.ConfigHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfigHistory>
          }
          groupBy: {
            args: Prisma.ConfigHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfigHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfigHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ConfigHistoryCountAggregateOutputType> | number
          }
        }
      }
      AllowedIP: {
        payload: Prisma.$AllowedIPPayload<ExtArgs>
        fields: Prisma.AllowedIPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AllowedIPFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllowedIPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AllowedIPFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllowedIPPayload>
          }
          findFirst: {
            args: Prisma.AllowedIPFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllowedIPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AllowedIPFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllowedIPPayload>
          }
          findMany: {
            args: Prisma.AllowedIPFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllowedIPPayload>[]
          }
          create: {
            args: Prisma.AllowedIPCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllowedIPPayload>
          }
          createMany: {
            args: Prisma.AllowedIPCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AllowedIPCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllowedIPPayload>[]
          }
          delete: {
            args: Prisma.AllowedIPDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllowedIPPayload>
          }
          update: {
            args: Prisma.AllowedIPUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllowedIPPayload>
          }
          deleteMany: {
            args: Prisma.AllowedIPDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AllowedIPUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AllowedIPUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllowedIPPayload>[]
          }
          upsert: {
            args: Prisma.AllowedIPUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllowedIPPayload>
          }
          aggregate: {
            args: Prisma.AllowedIPAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAllowedIP>
          }
          groupBy: {
            args: Prisma.AllowedIPGroupByArgs<ExtArgs>
            result: $Utils.Optional<AllowedIPGroupByOutputType>[]
          }
          count: {
            args: Prisma.AllowedIPCountArgs<ExtArgs>
            result: $Utils.Optional<AllowedIPCountAggregateOutputType> | number
          }
        }
      }
      BlockedDomain: {
        payload: Prisma.$BlockedDomainPayload<ExtArgs>
        fields: Prisma.BlockedDomainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockedDomainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedDomainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockedDomainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedDomainPayload>
          }
          findFirst: {
            args: Prisma.BlockedDomainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedDomainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockedDomainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedDomainPayload>
          }
          findMany: {
            args: Prisma.BlockedDomainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedDomainPayload>[]
          }
          create: {
            args: Prisma.BlockedDomainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedDomainPayload>
          }
          createMany: {
            args: Prisma.BlockedDomainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlockedDomainCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedDomainPayload>[]
          }
          delete: {
            args: Prisma.BlockedDomainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedDomainPayload>
          }
          update: {
            args: Prisma.BlockedDomainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedDomainPayload>
          }
          deleteMany: {
            args: Prisma.BlockedDomainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlockedDomainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlockedDomainUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedDomainPayload>[]
          }
          upsert: {
            args: Prisma.BlockedDomainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedDomainPayload>
          }
          aggregate: {
            args: Prisma.BlockedDomainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlockedDomain>
          }
          groupBy: {
            args: Prisma.BlockedDomainGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockedDomainGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockedDomainCountArgs<ExtArgs>
            result: $Utils.Optional<BlockedDomainCountAggregateOutputType> | number
          }
        }
      }
      EmailTemplate: {
        payload: Prisma.$EmailTemplatePayload<ExtArgs>
        fields: Prisma.EmailTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTemplatePayload>
          }
          findFirst: {
            args: Prisma.EmailTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTemplatePayload>
          }
          findMany: {
            args: Prisma.EmailTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTemplatePayload>[]
          }
          create: {
            args: Prisma.EmailTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTemplatePayload>
          }
          createMany: {
            args: Prisma.EmailTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTemplatePayload>[]
          }
          delete: {
            args: Prisma.EmailTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTemplatePayload>
          }
          update: {
            args: Prisma.EmailTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTemplatePayload>
          }
          deleteMany: {
            args: Prisma.EmailTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTemplatePayload>[]
          }
          upsert: {
            args: Prisma.EmailTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTemplatePayload>
          }
          aggregate: {
            args: Prisma.EmailTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailTemplate>
          }
          groupBy: {
            args: Prisma.EmailTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<EmailTemplateCountAggregateOutputType> | number
          }
        }
      }
      TemplateHistory: {
        payload: Prisma.$TemplateHistoryPayload<ExtArgs>
        fields: Prisma.TemplateHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateHistoryPayload>
          }
          findFirst: {
            args: Prisma.TemplateHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateHistoryPayload>
          }
          findMany: {
            args: Prisma.TemplateHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateHistoryPayload>[]
          }
          create: {
            args: Prisma.TemplateHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateHistoryPayload>
          }
          createMany: {
            args: Prisma.TemplateHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateHistoryPayload>[]
          }
          delete: {
            args: Prisma.TemplateHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateHistoryPayload>
          }
          update: {
            args: Prisma.TemplateHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TemplateHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateHistoryPayload>[]
          }
          upsert: {
            args: Prisma.TemplateHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateHistoryPayload>
          }
          aggregate: {
            args: Prisma.TemplateHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplateHistory>
          }
          groupBy: {
            args: Prisma.TemplateHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateHistoryCountAggregateOutputType> | number
          }
        }
      }
      WebhookConfig: {
        payload: Prisma.$WebhookConfigPayload<ExtArgs>
        fields: Prisma.WebhookConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookConfigPayload>
          }
          findFirst: {
            args: Prisma.WebhookConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookConfigPayload>
          }
          findMany: {
            args: Prisma.WebhookConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookConfigPayload>[]
          }
          create: {
            args: Prisma.WebhookConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookConfigPayload>
          }
          createMany: {
            args: Prisma.WebhookConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebhookConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookConfigPayload>[]
          }
          delete: {
            args: Prisma.WebhookConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookConfigPayload>
          }
          update: {
            args: Prisma.WebhookConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookConfigPayload>
          }
          deleteMany: {
            args: Prisma.WebhookConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebhookConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookConfigPayload>[]
          }
          upsert: {
            args: Prisma.WebhookConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookConfigPayload>
          }
          aggregate: {
            args: Prisma.WebhookConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhookConfig>
          }
          groupBy: {
            args: Prisma.WebhookConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookConfigCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookConfigCountAggregateOutputType> | number
          }
        }
      }
      WebhookLog: {
        payload: Prisma.$WebhookLogPayload<ExtArgs>
        fields: Prisma.WebhookLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          findFirst: {
            args: Prisma.WebhookLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          findMany: {
            args: Prisma.WebhookLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>[]
          }
          create: {
            args: Prisma.WebhookLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          createMany: {
            args: Prisma.WebhookLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebhookLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>[]
          }
          delete: {
            args: Prisma.WebhookLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          update: {
            args: Prisma.WebhookLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          deleteMany: {
            args: Prisma.WebhookLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebhookLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>[]
          }
          upsert: {
            args: Prisma.WebhookLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          aggregate: {
            args: Prisma.WebhookLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhookLog>
          }
          groupBy: {
            args: Prisma.WebhookLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookLogCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookLogCountAggregateOutputType> | number
          }
        }
      }
      ApiKey: {
        payload: Prisma.$ApiKeyPayload<ExtArgs>
        fields: Prisma.ApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findMany: {
            args: Prisma.ApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          update: {
            args: Prisma.ApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKey>
          }
          groupBy: {
            args: Prisma.ApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCountAggregateOutputType> | number
          }
        }
      }
      ApiKeyUsage: {
        payload: Prisma.$ApiKeyUsagePayload<ExtArgs>
        fields: Prisma.ApiKeyUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyUsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyUsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyUsagePayload>
          }
          findFirst: {
            args: Prisma.ApiKeyUsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyUsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyUsagePayload>
          }
          findMany: {
            args: Prisma.ApiKeyUsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyUsagePayload>[]
          }
          create: {
            args: Prisma.ApiKeyUsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyUsagePayload>
          }
          createMany: {
            args: Prisma.ApiKeyUsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyUsageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyUsagePayload>[]
          }
          delete: {
            args: Prisma.ApiKeyUsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyUsagePayload>
          }
          update: {
            args: Prisma.ApiKeyUsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyUsagePayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyUsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyUsageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyUsagePayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyUsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyUsagePayload>
          }
          aggregate: {
            args: Prisma.ApiKeyUsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKeyUsage>
          }
          groupBy: {
            args: Prisma.ApiKeyUsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyUsageCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyUsageCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    emailLog?: EmailLogOmit
    systemConfig?: SystemConfigOmit
    configHistory?: ConfigHistoryOmit
    allowedIP?: AllowedIPOmit
    blockedDomain?: BlockedDomainOmit
    emailTemplate?: EmailTemplateOmit
    templateHistory?: TemplateHistoryOmit
    webhookConfig?: WebhookConfigOmit
    webhookLog?: WebhookLogOmit
    apiKey?: ApiKeyOmit
    apiKeyUsage?: ApiKeyUsageOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EmailTemplateCountOutputType
   */

  export type EmailTemplateCountOutputType = {
    history: number
  }

  export type EmailTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | EmailTemplateCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * EmailTemplateCountOutputType without action
   */
  export type EmailTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTemplateCountOutputType
     */
    select?: EmailTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmailTemplateCountOutputType without action
   */
  export type EmailTemplateCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateHistoryWhereInput
  }


  /**
   * Count Type WebhookConfigCountOutputType
   */

  export type WebhookConfigCountOutputType = {
    logs: number
  }

  export type WebhookConfigCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | WebhookConfigCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * WebhookConfigCountOutputType without action
   */
  export type WebhookConfigCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookConfigCountOutputType
     */
    select?: WebhookConfigCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WebhookConfigCountOutputType without action
   */
  export type WebhookConfigCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookLogWhereInput
  }


  /**
   * Count Type ApiKeyCountOutputType
   */

  export type ApiKeyCountOutputType = {
    usage: number
  }

  export type ApiKeyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usage?: boolean | ApiKeyCountOutputTypeCountUsageArgs
  }

  // Custom InputTypes
  /**
   * ApiKeyCountOutputType without action
   */
  export type ApiKeyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyCountOutputType
     */
    select?: ApiKeyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApiKeyCountOutputType without action
   */
  export type ApiKeyCountOutputTypeCountUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyUsageWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    apiKeys: number
    emailLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKeys?: boolean | UserCountOutputTypeCountApiKeysArgs
    emailLogs?: boolean | UserCountOutputTypeCountEmailLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmailLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model EmailLog
   */

  export type AggregateEmailLog = {
    _count: EmailLogCountAggregateOutputType | null
    _avg: EmailLogAvgAggregateOutputType | null
    _sum: EmailLogSumAggregateOutputType | null
    _min: EmailLogMinAggregateOutputType | null
    _max: EmailLogMaxAggregateOutputType | null
  }

  export type EmailLogAvgAggregateOutputType = {
    attempts: number | null
    maxAttempts: number | null
  }

  export type EmailLogSumAggregateOutputType = {
    attempts: number | null
    maxAttempts: number | null
  }

  export type EmailLogMinAggregateOutputType = {
    id: string | null
    to: string | null
    subject: string | null
    template: string | null
    status: $Enums.EmailStatus | null
    provider: string | null
    errorMessage: string | null
    sentAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    attempts: number | null
    maxAttempts: number | null
    jobId: string | null
    userId: string | null
  }

  export type EmailLogMaxAggregateOutputType = {
    id: string | null
    to: string | null
    subject: string | null
    template: string | null
    status: $Enums.EmailStatus | null
    provider: string | null
    errorMessage: string | null
    sentAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    attempts: number | null
    maxAttempts: number | null
    jobId: string | null
    userId: string | null
  }

  export type EmailLogCountAggregateOutputType = {
    id: number
    to: number
    subject: number
    template: number
    variables: number
    status: number
    provider: number
    errorMessage: number
    sentAt: number
    createdAt: number
    updatedAt: number
    attempts: number
    maxAttempts: number
    jobId: number
    userId: number
    _all: number
  }


  export type EmailLogAvgAggregateInputType = {
    attempts?: true
    maxAttempts?: true
  }

  export type EmailLogSumAggregateInputType = {
    attempts?: true
    maxAttempts?: true
  }

  export type EmailLogMinAggregateInputType = {
    id?: true
    to?: true
    subject?: true
    template?: true
    status?: true
    provider?: true
    errorMessage?: true
    sentAt?: true
    createdAt?: true
    updatedAt?: true
    attempts?: true
    maxAttempts?: true
    jobId?: true
    userId?: true
  }

  export type EmailLogMaxAggregateInputType = {
    id?: true
    to?: true
    subject?: true
    template?: true
    status?: true
    provider?: true
    errorMessage?: true
    sentAt?: true
    createdAt?: true
    updatedAt?: true
    attempts?: true
    maxAttempts?: true
    jobId?: true
    userId?: true
  }

  export type EmailLogCountAggregateInputType = {
    id?: true
    to?: true
    subject?: true
    template?: true
    variables?: true
    status?: true
    provider?: true
    errorMessage?: true
    sentAt?: true
    createdAt?: true
    updatedAt?: true
    attempts?: true
    maxAttempts?: true
    jobId?: true
    userId?: true
    _all?: true
  }

  export type EmailLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailLog to aggregate.
     */
    where?: EmailLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLogs to fetch.
     */
    orderBy?: EmailLogOrderByWithRelationInput | EmailLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailLogs
    **/
    _count?: true | EmailLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailLogMaxAggregateInputType
  }

  export type GetEmailLogAggregateType<T extends EmailLogAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailLog[P]>
      : GetScalarType<T[P], AggregateEmailLog[P]>
  }




  export type EmailLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailLogWhereInput
    orderBy?: EmailLogOrderByWithAggregationInput | EmailLogOrderByWithAggregationInput[]
    by: EmailLogScalarFieldEnum[] | EmailLogScalarFieldEnum
    having?: EmailLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailLogCountAggregateInputType | true
    _avg?: EmailLogAvgAggregateInputType
    _sum?: EmailLogSumAggregateInputType
    _min?: EmailLogMinAggregateInputType
    _max?: EmailLogMaxAggregateInputType
  }

  export type EmailLogGroupByOutputType = {
    id: string
    to: string
    subject: string
    template: string
    variables: JsonValue | null
    status: $Enums.EmailStatus
    provider: string | null
    errorMessage: string | null
    sentAt: Date | null
    createdAt: Date
    updatedAt: Date | null
    attempts: number
    maxAttempts: number
    jobId: string | null
    userId: string | null
    _count: EmailLogCountAggregateOutputType | null
    _avg: EmailLogAvgAggregateOutputType | null
    _sum: EmailLogSumAggregateOutputType | null
    _min: EmailLogMinAggregateOutputType | null
    _max: EmailLogMaxAggregateOutputType | null
  }

  type GetEmailLogGroupByPayload<T extends EmailLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailLogGroupByOutputType[P]>
            : GetScalarType<T[P], EmailLogGroupByOutputType[P]>
        }
      >
    >


  export type EmailLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    to?: boolean
    subject?: boolean
    template?: boolean
    variables?: boolean
    status?: boolean
    provider?: boolean
    errorMessage?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    jobId?: boolean
    userId?: boolean
    User?: boolean | EmailLog$UserArgs<ExtArgs>
  }, ExtArgs["result"]["emailLog"]>

  export type EmailLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    to?: boolean
    subject?: boolean
    template?: boolean
    variables?: boolean
    status?: boolean
    provider?: boolean
    errorMessage?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    jobId?: boolean
    userId?: boolean
    User?: boolean | EmailLog$UserArgs<ExtArgs>
  }, ExtArgs["result"]["emailLog"]>

  export type EmailLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    to?: boolean
    subject?: boolean
    template?: boolean
    variables?: boolean
    status?: boolean
    provider?: boolean
    errorMessage?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    jobId?: boolean
    userId?: boolean
    User?: boolean | EmailLog$UserArgs<ExtArgs>
  }, ExtArgs["result"]["emailLog"]>

  export type EmailLogSelectScalar = {
    id?: boolean
    to?: boolean
    subject?: boolean
    template?: boolean
    variables?: boolean
    status?: boolean
    provider?: boolean
    errorMessage?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    jobId?: boolean
    userId?: boolean
  }

  export type EmailLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "to" | "subject" | "template" | "variables" | "status" | "provider" | "errorMessage" | "sentAt" | "createdAt" | "updatedAt" | "attempts" | "maxAttempts" | "jobId" | "userId", ExtArgs["result"]["emailLog"]>
  export type EmailLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | EmailLog$UserArgs<ExtArgs>
  }
  export type EmailLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | EmailLog$UserArgs<ExtArgs>
  }
  export type EmailLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | EmailLog$UserArgs<ExtArgs>
  }

  export type $EmailLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailLog"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      to: string
      subject: string
      template: string
      variables: Prisma.JsonValue | null
      status: $Enums.EmailStatus
      provider: string | null
      errorMessage: string | null
      sentAt: Date | null
      createdAt: Date
      updatedAt: Date | null
      attempts: number
      maxAttempts: number
      jobId: string | null
      userId: string | null
    }, ExtArgs["result"]["emailLog"]>
    composites: {}
  }

  type EmailLogGetPayload<S extends boolean | null | undefined | EmailLogDefaultArgs> = $Result.GetResult<Prisma.$EmailLogPayload, S>

  type EmailLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailLogCountAggregateInputType | true
    }

  export interface EmailLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailLog'], meta: { name: 'EmailLog' } }
    /**
     * Find zero or one EmailLog that matches the filter.
     * @param {EmailLogFindUniqueArgs} args - Arguments to find a EmailLog
     * @example
     * // Get one EmailLog
     * const emailLog = await prisma.emailLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailLogFindUniqueArgs>(args: SelectSubset<T, EmailLogFindUniqueArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailLogFindUniqueOrThrowArgs} args - Arguments to find a EmailLog
     * @example
     * // Get one EmailLog
     * const emailLog = await prisma.emailLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailLogFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogFindFirstArgs} args - Arguments to find a EmailLog
     * @example
     * // Get one EmailLog
     * const emailLog = await prisma.emailLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailLogFindFirstArgs>(args?: SelectSubset<T, EmailLogFindFirstArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogFindFirstOrThrowArgs} args - Arguments to find a EmailLog
     * @example
     * // Get one EmailLog
     * const emailLog = await prisma.emailLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailLogFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailLogs
     * const emailLogs = await prisma.emailLog.findMany()
     * 
     * // Get first 10 EmailLogs
     * const emailLogs = await prisma.emailLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailLogWithIdOnly = await prisma.emailLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailLogFindManyArgs>(args?: SelectSubset<T, EmailLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailLog.
     * @param {EmailLogCreateArgs} args - Arguments to create a EmailLog.
     * @example
     * // Create one EmailLog
     * const EmailLog = await prisma.emailLog.create({
     *   data: {
     *     // ... data to create a EmailLog
     *   }
     * })
     * 
     */
    create<T extends EmailLogCreateArgs>(args: SelectSubset<T, EmailLogCreateArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailLogs.
     * @param {EmailLogCreateManyArgs} args - Arguments to create many EmailLogs.
     * @example
     * // Create many EmailLogs
     * const emailLog = await prisma.emailLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailLogCreateManyArgs>(args?: SelectSubset<T, EmailLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailLogs and returns the data saved in the database.
     * @param {EmailLogCreateManyAndReturnArgs} args - Arguments to create many EmailLogs.
     * @example
     * // Create many EmailLogs
     * const emailLog = await prisma.emailLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailLogs and only return the `id`
     * const emailLogWithIdOnly = await prisma.emailLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailLogCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailLog.
     * @param {EmailLogDeleteArgs} args - Arguments to delete one EmailLog.
     * @example
     * // Delete one EmailLog
     * const EmailLog = await prisma.emailLog.delete({
     *   where: {
     *     // ... filter to delete one EmailLog
     *   }
     * })
     * 
     */
    delete<T extends EmailLogDeleteArgs>(args: SelectSubset<T, EmailLogDeleteArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailLog.
     * @param {EmailLogUpdateArgs} args - Arguments to update one EmailLog.
     * @example
     * // Update one EmailLog
     * const emailLog = await prisma.emailLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailLogUpdateArgs>(args: SelectSubset<T, EmailLogUpdateArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailLogs.
     * @param {EmailLogDeleteManyArgs} args - Arguments to filter EmailLogs to delete.
     * @example
     * // Delete a few EmailLogs
     * const { count } = await prisma.emailLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailLogDeleteManyArgs>(args?: SelectSubset<T, EmailLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailLogs
     * const emailLog = await prisma.emailLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailLogUpdateManyArgs>(args: SelectSubset<T, EmailLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailLogs and returns the data updated in the database.
     * @param {EmailLogUpdateManyAndReturnArgs} args - Arguments to update many EmailLogs.
     * @example
     * // Update many EmailLogs
     * const emailLog = await prisma.emailLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailLogs and only return the `id`
     * const emailLogWithIdOnly = await prisma.emailLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailLogUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailLog.
     * @param {EmailLogUpsertArgs} args - Arguments to update or create a EmailLog.
     * @example
     * // Update or create a EmailLog
     * const emailLog = await prisma.emailLog.upsert({
     *   create: {
     *     // ... data to create a EmailLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailLog we want to update
     *   }
     * })
     */
    upsert<T extends EmailLogUpsertArgs>(args: SelectSubset<T, EmailLogUpsertArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogCountArgs} args - Arguments to filter EmailLogs to count.
     * @example
     * // Count the number of EmailLogs
     * const count = await prisma.emailLog.count({
     *   where: {
     *     // ... the filter for the EmailLogs we want to count
     *   }
     * })
    **/
    count<T extends EmailLogCountArgs>(
      args?: Subset<T, EmailLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailLogAggregateArgs>(args: Subset<T, EmailLogAggregateArgs>): Prisma.PrismaPromise<GetEmailLogAggregateType<T>>

    /**
     * Group by EmailLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailLogGroupByArgs['orderBy'] }
        : { orderBy?: EmailLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailLog model
   */
  readonly fields: EmailLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends EmailLog$UserArgs<ExtArgs> = {}>(args?: Subset<T, EmailLog$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailLog model
   */
  interface EmailLogFieldRefs {
    readonly id: FieldRef<"EmailLog", 'String'>
    readonly to: FieldRef<"EmailLog", 'String'>
    readonly subject: FieldRef<"EmailLog", 'String'>
    readonly template: FieldRef<"EmailLog", 'String'>
    readonly variables: FieldRef<"EmailLog", 'Json'>
    readonly status: FieldRef<"EmailLog", 'EmailStatus'>
    readonly provider: FieldRef<"EmailLog", 'String'>
    readonly errorMessage: FieldRef<"EmailLog", 'String'>
    readonly sentAt: FieldRef<"EmailLog", 'DateTime'>
    readonly createdAt: FieldRef<"EmailLog", 'DateTime'>
    readonly updatedAt: FieldRef<"EmailLog", 'DateTime'>
    readonly attempts: FieldRef<"EmailLog", 'Int'>
    readonly maxAttempts: FieldRef<"EmailLog", 'Int'>
    readonly jobId: FieldRef<"EmailLog", 'String'>
    readonly userId: FieldRef<"EmailLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmailLog findUnique
   */
  export type EmailLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailLogInclude<ExtArgs> | null
    /**
     * Filter, which EmailLog to fetch.
     */
    where: EmailLogWhereUniqueInput
  }

  /**
   * EmailLog findUniqueOrThrow
   */
  export type EmailLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailLogInclude<ExtArgs> | null
    /**
     * Filter, which EmailLog to fetch.
     */
    where: EmailLogWhereUniqueInput
  }

  /**
   * EmailLog findFirst
   */
  export type EmailLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailLogInclude<ExtArgs> | null
    /**
     * Filter, which EmailLog to fetch.
     */
    where?: EmailLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLogs to fetch.
     */
    orderBy?: EmailLogOrderByWithRelationInput | EmailLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailLogs.
     */
    cursor?: EmailLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailLogs.
     */
    distinct?: EmailLogScalarFieldEnum | EmailLogScalarFieldEnum[]
  }

  /**
   * EmailLog findFirstOrThrow
   */
  export type EmailLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailLogInclude<ExtArgs> | null
    /**
     * Filter, which EmailLog to fetch.
     */
    where?: EmailLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLogs to fetch.
     */
    orderBy?: EmailLogOrderByWithRelationInput | EmailLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailLogs.
     */
    cursor?: EmailLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailLogs.
     */
    distinct?: EmailLogScalarFieldEnum | EmailLogScalarFieldEnum[]
  }

  /**
   * EmailLog findMany
   */
  export type EmailLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailLogInclude<ExtArgs> | null
    /**
     * Filter, which EmailLogs to fetch.
     */
    where?: EmailLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLogs to fetch.
     */
    orderBy?: EmailLogOrderByWithRelationInput | EmailLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailLogs.
     */
    cursor?: EmailLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLogs.
     */
    skip?: number
    distinct?: EmailLogScalarFieldEnum | EmailLogScalarFieldEnum[]
  }

  /**
   * EmailLog create
   */
  export type EmailLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailLogInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailLog.
     */
    data: XOR<EmailLogCreateInput, EmailLogUncheckedCreateInput>
  }

  /**
   * EmailLog createMany
   */
  export type EmailLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailLogs.
     */
    data: EmailLogCreateManyInput | EmailLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailLog createManyAndReturn
   */
  export type EmailLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * The data used to create many EmailLogs.
     */
    data: EmailLogCreateManyInput | EmailLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailLog update
   */
  export type EmailLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailLogInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailLog.
     */
    data: XOR<EmailLogUpdateInput, EmailLogUncheckedUpdateInput>
    /**
     * Choose, which EmailLog to update.
     */
    where: EmailLogWhereUniqueInput
  }

  /**
   * EmailLog updateMany
   */
  export type EmailLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailLogs.
     */
    data: XOR<EmailLogUpdateManyMutationInput, EmailLogUncheckedUpdateManyInput>
    /**
     * Filter which EmailLogs to update
     */
    where?: EmailLogWhereInput
    /**
     * Limit how many EmailLogs to update.
     */
    limit?: number
  }

  /**
   * EmailLog updateManyAndReturn
   */
  export type EmailLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * The data used to update EmailLogs.
     */
    data: XOR<EmailLogUpdateManyMutationInput, EmailLogUncheckedUpdateManyInput>
    /**
     * Filter which EmailLogs to update
     */
    where?: EmailLogWhereInput
    /**
     * Limit how many EmailLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailLog upsert
   */
  export type EmailLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailLogInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailLog to update in case it exists.
     */
    where: EmailLogWhereUniqueInput
    /**
     * In case the EmailLog found by the `where` argument doesn't exist, create a new EmailLog with this data.
     */
    create: XOR<EmailLogCreateInput, EmailLogUncheckedCreateInput>
    /**
     * In case the EmailLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailLogUpdateInput, EmailLogUncheckedUpdateInput>
  }

  /**
   * EmailLog delete
   */
  export type EmailLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailLogInclude<ExtArgs> | null
    /**
     * Filter which EmailLog to delete.
     */
    where: EmailLogWhereUniqueInput
  }

  /**
   * EmailLog deleteMany
   */
  export type EmailLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailLogs to delete
     */
    where?: EmailLogWhereInput
    /**
     * Limit how many EmailLogs to delete.
     */
    limit?: number
  }

  /**
   * EmailLog.User
   */
  export type EmailLog$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * EmailLog without action
   */
  export type EmailLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailLogInclude<ExtArgs> | null
  }


  /**
   * Model SystemConfig
   */

  export type AggregateSystemConfig = {
    _count: SystemConfigCountAggregateOutputType | null
    _min: SystemConfigMinAggregateOutputType | null
    _max: SystemConfigMaxAggregateOutputType | null
  }

  export type SystemConfigMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    type: $Enums.SystemConfigType | null
    description: string | null
    category: string | null
    isActive: boolean | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
  }

  export type SystemConfigMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    type: $Enums.SystemConfigType | null
    description: string | null
    category: string | null
    isActive: boolean | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
  }

  export type SystemConfigCountAggregateOutputType = {
    id: number
    key: number
    value: number
    type: number
    description: number
    category: number
    isActive: number
    isPublic: number
    createdAt: number
    updatedAt: number
    createdBy: number
    updatedBy: number
    _all: number
  }


  export type SystemConfigMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    type?: true
    description?: true
    category?: true
    isActive?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
  }

  export type SystemConfigMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    type?: true
    description?: true
    category?: true
    isActive?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
  }

  export type SystemConfigCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    type?: true
    description?: true
    category?: true
    isActive?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
    _all?: true
  }

  export type SystemConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemConfig to aggregate.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemConfigs
    **/
    _count?: true | SystemConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemConfigMaxAggregateInputType
  }

  export type GetSystemConfigAggregateType<T extends SystemConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemConfig[P]>
      : GetScalarType<T[P], AggregateSystemConfig[P]>
  }




  export type SystemConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemConfigWhereInput
    orderBy?: SystemConfigOrderByWithAggregationInput | SystemConfigOrderByWithAggregationInput[]
    by: SystemConfigScalarFieldEnum[] | SystemConfigScalarFieldEnum
    having?: SystemConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemConfigCountAggregateInputType | true
    _min?: SystemConfigMinAggregateInputType
    _max?: SystemConfigMaxAggregateInputType
  }

  export type SystemConfigGroupByOutputType = {
    id: string
    key: string
    value: string
    type: $Enums.SystemConfigType
    description: string | null
    category: string
    isActive: boolean
    isPublic: boolean
    createdAt: Date
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
    _count: SystemConfigCountAggregateOutputType | null
    _min: SystemConfigMinAggregateOutputType | null
    _max: SystemConfigMaxAggregateOutputType | null
  }

  type GetSystemConfigGroupByPayload<T extends SystemConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemConfigGroupByOutputType[P]>
            : GetScalarType<T[P], SystemConfigGroupByOutputType[P]>
        }
      >
    >


  export type SystemConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    type?: boolean
    description?: boolean
    category?: boolean
    isActive?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["systemConfig"]>

  export type SystemConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    type?: boolean
    description?: boolean
    category?: boolean
    isActive?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["systemConfig"]>

  export type SystemConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    type?: boolean
    description?: boolean
    category?: boolean
    isActive?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["systemConfig"]>

  export type SystemConfigSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    type?: boolean
    description?: boolean
    category?: boolean
    isActive?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
  }

  export type SystemConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "type" | "description" | "category" | "isActive" | "isPublic" | "createdAt" | "updatedAt" | "createdBy" | "updatedBy", ExtArgs["result"]["systemConfig"]>

  export type $SystemConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      type: $Enums.SystemConfigType
      description: string | null
      category: string
      isActive: boolean
      isPublic: boolean
      createdAt: Date
      updatedAt: Date | null
      createdBy: string | null
      updatedBy: string | null
    }, ExtArgs["result"]["systemConfig"]>
    composites: {}
  }

  type SystemConfigGetPayload<S extends boolean | null | undefined | SystemConfigDefaultArgs> = $Result.GetResult<Prisma.$SystemConfigPayload, S>

  type SystemConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemConfigCountAggregateInputType | true
    }

  export interface SystemConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemConfig'], meta: { name: 'SystemConfig' } }
    /**
     * Find zero or one SystemConfig that matches the filter.
     * @param {SystemConfigFindUniqueArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemConfigFindUniqueArgs>(args: SelectSubset<T, SystemConfigFindUniqueArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemConfigFindUniqueOrThrowArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindFirstArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemConfigFindFirstArgs>(args?: SelectSubset<T, SystemConfigFindFirstArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindFirstOrThrowArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemConfigs
     * const systemConfigs = await prisma.systemConfig.findMany()
     * 
     * // Get first 10 SystemConfigs
     * const systemConfigs = await prisma.systemConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemConfigFindManyArgs>(args?: SelectSubset<T, SystemConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemConfig.
     * @param {SystemConfigCreateArgs} args - Arguments to create a SystemConfig.
     * @example
     * // Create one SystemConfig
     * const SystemConfig = await prisma.systemConfig.create({
     *   data: {
     *     // ... data to create a SystemConfig
     *   }
     * })
     * 
     */
    create<T extends SystemConfigCreateArgs>(args: SelectSubset<T, SystemConfigCreateArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemConfigs.
     * @param {SystemConfigCreateManyArgs} args - Arguments to create many SystemConfigs.
     * @example
     * // Create many SystemConfigs
     * const systemConfig = await prisma.systemConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemConfigCreateManyArgs>(args?: SelectSubset<T, SystemConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemConfigs and returns the data saved in the database.
     * @param {SystemConfigCreateManyAndReturnArgs} args - Arguments to create many SystemConfigs.
     * @example
     * // Create many SystemConfigs
     * const systemConfig = await prisma.systemConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemConfigs and only return the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemConfig.
     * @param {SystemConfigDeleteArgs} args - Arguments to delete one SystemConfig.
     * @example
     * // Delete one SystemConfig
     * const SystemConfig = await prisma.systemConfig.delete({
     *   where: {
     *     // ... filter to delete one SystemConfig
     *   }
     * })
     * 
     */
    delete<T extends SystemConfigDeleteArgs>(args: SelectSubset<T, SystemConfigDeleteArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemConfig.
     * @param {SystemConfigUpdateArgs} args - Arguments to update one SystemConfig.
     * @example
     * // Update one SystemConfig
     * const systemConfig = await prisma.systemConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemConfigUpdateArgs>(args: SelectSubset<T, SystemConfigUpdateArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemConfigs.
     * @param {SystemConfigDeleteManyArgs} args - Arguments to filter SystemConfigs to delete.
     * @example
     * // Delete a few SystemConfigs
     * const { count } = await prisma.systemConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemConfigDeleteManyArgs>(args?: SelectSubset<T, SystemConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemConfigs
     * const systemConfig = await prisma.systemConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemConfigUpdateManyArgs>(args: SelectSubset<T, SystemConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemConfigs and returns the data updated in the database.
     * @param {SystemConfigUpdateManyAndReturnArgs} args - Arguments to update many SystemConfigs.
     * @example
     * // Update many SystemConfigs
     * const systemConfig = await prisma.systemConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemConfigs and only return the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SystemConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemConfig.
     * @param {SystemConfigUpsertArgs} args - Arguments to update or create a SystemConfig.
     * @example
     * // Update or create a SystemConfig
     * const systemConfig = await prisma.systemConfig.upsert({
     *   create: {
     *     // ... data to create a SystemConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemConfig we want to update
     *   }
     * })
     */
    upsert<T extends SystemConfigUpsertArgs>(args: SelectSubset<T, SystemConfigUpsertArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigCountArgs} args - Arguments to filter SystemConfigs to count.
     * @example
     * // Count the number of SystemConfigs
     * const count = await prisma.systemConfig.count({
     *   where: {
     *     // ... the filter for the SystemConfigs we want to count
     *   }
     * })
    **/
    count<T extends SystemConfigCountArgs>(
      args?: Subset<T, SystemConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemConfigAggregateArgs>(args: Subset<T, SystemConfigAggregateArgs>): Prisma.PrismaPromise<GetSystemConfigAggregateType<T>>

    /**
     * Group by SystemConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemConfigGroupByArgs['orderBy'] }
        : { orderBy?: SystemConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemConfig model
   */
  readonly fields: SystemConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemConfig model
   */
  interface SystemConfigFieldRefs {
    readonly id: FieldRef<"SystemConfig", 'String'>
    readonly key: FieldRef<"SystemConfig", 'String'>
    readonly value: FieldRef<"SystemConfig", 'String'>
    readonly type: FieldRef<"SystemConfig", 'SystemConfigType'>
    readonly description: FieldRef<"SystemConfig", 'String'>
    readonly category: FieldRef<"SystemConfig", 'String'>
    readonly isActive: FieldRef<"SystemConfig", 'Boolean'>
    readonly isPublic: FieldRef<"SystemConfig", 'Boolean'>
    readonly createdAt: FieldRef<"SystemConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"SystemConfig", 'DateTime'>
    readonly createdBy: FieldRef<"SystemConfig", 'String'>
    readonly updatedBy: FieldRef<"SystemConfig", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SystemConfig findUnique
   */
  export type SystemConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig findUniqueOrThrow
   */
  export type SystemConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig findFirst
   */
  export type SystemConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemConfigs.
     */
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig findFirstOrThrow
   */
  export type SystemConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemConfigs.
     */
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig findMany
   */
  export type SystemConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfigs to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig create
   */
  export type SystemConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemConfig.
     */
    data: XOR<SystemConfigCreateInput, SystemConfigUncheckedCreateInput>
  }

  /**
   * SystemConfig createMany
   */
  export type SystemConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemConfigs.
     */
    data: SystemConfigCreateManyInput | SystemConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemConfig createManyAndReturn
   */
  export type SystemConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data used to create many SystemConfigs.
     */
    data: SystemConfigCreateManyInput | SystemConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemConfig update
   */
  export type SystemConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemConfig.
     */
    data: XOR<SystemConfigUpdateInput, SystemConfigUncheckedUpdateInput>
    /**
     * Choose, which SystemConfig to update.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig updateMany
   */
  export type SystemConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemConfigs.
     */
    data: XOR<SystemConfigUpdateManyMutationInput, SystemConfigUncheckedUpdateManyInput>
    /**
     * Filter which SystemConfigs to update
     */
    where?: SystemConfigWhereInput
    /**
     * Limit how many SystemConfigs to update.
     */
    limit?: number
  }

  /**
   * SystemConfig updateManyAndReturn
   */
  export type SystemConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data used to update SystemConfigs.
     */
    data: XOR<SystemConfigUpdateManyMutationInput, SystemConfigUncheckedUpdateManyInput>
    /**
     * Filter which SystemConfigs to update
     */
    where?: SystemConfigWhereInput
    /**
     * Limit how many SystemConfigs to update.
     */
    limit?: number
  }

  /**
   * SystemConfig upsert
   */
  export type SystemConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemConfig to update in case it exists.
     */
    where: SystemConfigWhereUniqueInput
    /**
     * In case the SystemConfig found by the `where` argument doesn't exist, create a new SystemConfig with this data.
     */
    create: XOR<SystemConfigCreateInput, SystemConfigUncheckedCreateInput>
    /**
     * In case the SystemConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemConfigUpdateInput, SystemConfigUncheckedUpdateInput>
  }

  /**
   * SystemConfig delete
   */
  export type SystemConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter which SystemConfig to delete.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig deleteMany
   */
  export type SystemConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemConfigs to delete
     */
    where?: SystemConfigWhereInput
    /**
     * Limit how many SystemConfigs to delete.
     */
    limit?: number
  }

  /**
   * SystemConfig without action
   */
  export type SystemConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
  }


  /**
   * Model ConfigHistory
   */

  export type AggregateConfigHistory = {
    _count: ConfigHistoryCountAggregateOutputType | null
    _min: ConfigHistoryMinAggregateOutputType | null
    _max: ConfigHistoryMaxAggregateOutputType | null
  }

  export type ConfigHistoryMinAggregateOutputType = {
    id: string | null
    configKey: string | null
    oldValue: string | null
    newValue: string | null
    changedBy: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type ConfigHistoryMaxAggregateOutputType = {
    id: string | null
    configKey: string | null
    oldValue: string | null
    newValue: string | null
    changedBy: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type ConfigHistoryCountAggregateOutputType = {
    id: number
    configKey: number
    oldValue: number
    newValue: number
    changedBy: number
    reason: number
    createdAt: number
    _all: number
  }


  export type ConfigHistoryMinAggregateInputType = {
    id?: true
    configKey?: true
    oldValue?: true
    newValue?: true
    changedBy?: true
    reason?: true
    createdAt?: true
  }

  export type ConfigHistoryMaxAggregateInputType = {
    id?: true
    configKey?: true
    oldValue?: true
    newValue?: true
    changedBy?: true
    reason?: true
    createdAt?: true
  }

  export type ConfigHistoryCountAggregateInputType = {
    id?: true
    configKey?: true
    oldValue?: true
    newValue?: true
    changedBy?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type ConfigHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConfigHistory to aggregate.
     */
    where?: ConfigHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfigHistories to fetch.
     */
    orderBy?: ConfigHistoryOrderByWithRelationInput | ConfigHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfigHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfigHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfigHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConfigHistories
    **/
    _count?: true | ConfigHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfigHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfigHistoryMaxAggregateInputType
  }

  export type GetConfigHistoryAggregateType<T extends ConfigHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateConfigHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfigHistory[P]>
      : GetScalarType<T[P], AggregateConfigHistory[P]>
  }




  export type ConfigHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfigHistoryWhereInput
    orderBy?: ConfigHistoryOrderByWithAggregationInput | ConfigHistoryOrderByWithAggregationInput[]
    by: ConfigHistoryScalarFieldEnum[] | ConfigHistoryScalarFieldEnum
    having?: ConfigHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfigHistoryCountAggregateInputType | true
    _min?: ConfigHistoryMinAggregateInputType
    _max?: ConfigHistoryMaxAggregateInputType
  }

  export type ConfigHistoryGroupByOutputType = {
    id: string
    configKey: string
    oldValue: string | null
    newValue: string
    changedBy: string | null
    reason: string | null
    createdAt: Date
    _count: ConfigHistoryCountAggregateOutputType | null
    _min: ConfigHistoryMinAggregateOutputType | null
    _max: ConfigHistoryMaxAggregateOutputType | null
  }

  type GetConfigHistoryGroupByPayload<T extends ConfigHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfigHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfigHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfigHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ConfigHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ConfigHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    configKey?: boolean
    oldValue?: boolean
    newValue?: boolean
    changedBy?: boolean
    reason?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["configHistory"]>

  export type ConfigHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    configKey?: boolean
    oldValue?: boolean
    newValue?: boolean
    changedBy?: boolean
    reason?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["configHistory"]>

  export type ConfigHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    configKey?: boolean
    oldValue?: boolean
    newValue?: boolean
    changedBy?: boolean
    reason?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["configHistory"]>

  export type ConfigHistorySelectScalar = {
    id?: boolean
    configKey?: boolean
    oldValue?: boolean
    newValue?: boolean
    changedBy?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type ConfigHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "configKey" | "oldValue" | "newValue" | "changedBy" | "reason" | "createdAt", ExtArgs["result"]["configHistory"]>

  export type $ConfigHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConfigHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      configKey: string
      oldValue: string | null
      newValue: string
      changedBy: string | null
      reason: string | null
      createdAt: Date
    }, ExtArgs["result"]["configHistory"]>
    composites: {}
  }

  type ConfigHistoryGetPayload<S extends boolean | null | undefined | ConfigHistoryDefaultArgs> = $Result.GetResult<Prisma.$ConfigHistoryPayload, S>

  type ConfigHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfigHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfigHistoryCountAggregateInputType | true
    }

  export interface ConfigHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConfigHistory'], meta: { name: 'ConfigHistory' } }
    /**
     * Find zero or one ConfigHistory that matches the filter.
     * @param {ConfigHistoryFindUniqueArgs} args - Arguments to find a ConfigHistory
     * @example
     * // Get one ConfigHistory
     * const configHistory = await prisma.configHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfigHistoryFindUniqueArgs>(args: SelectSubset<T, ConfigHistoryFindUniqueArgs<ExtArgs>>): Prisma__ConfigHistoryClient<$Result.GetResult<Prisma.$ConfigHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConfigHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfigHistoryFindUniqueOrThrowArgs} args - Arguments to find a ConfigHistory
     * @example
     * // Get one ConfigHistory
     * const configHistory = await prisma.configHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfigHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfigHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfigHistoryClient<$Result.GetResult<Prisma.$ConfigHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConfigHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigHistoryFindFirstArgs} args - Arguments to find a ConfigHistory
     * @example
     * // Get one ConfigHistory
     * const configHistory = await prisma.configHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfigHistoryFindFirstArgs>(args?: SelectSubset<T, ConfigHistoryFindFirstArgs<ExtArgs>>): Prisma__ConfigHistoryClient<$Result.GetResult<Prisma.$ConfigHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConfigHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigHistoryFindFirstOrThrowArgs} args - Arguments to find a ConfigHistory
     * @example
     * // Get one ConfigHistory
     * const configHistory = await prisma.configHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfigHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfigHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfigHistoryClient<$Result.GetResult<Prisma.$ConfigHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConfigHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConfigHistories
     * const configHistories = await prisma.configHistory.findMany()
     * 
     * // Get first 10 ConfigHistories
     * const configHistories = await prisma.configHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configHistoryWithIdOnly = await prisma.configHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConfigHistoryFindManyArgs>(args?: SelectSubset<T, ConfigHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConfigHistory.
     * @param {ConfigHistoryCreateArgs} args - Arguments to create a ConfigHistory.
     * @example
     * // Create one ConfigHistory
     * const ConfigHistory = await prisma.configHistory.create({
     *   data: {
     *     // ... data to create a ConfigHistory
     *   }
     * })
     * 
     */
    create<T extends ConfigHistoryCreateArgs>(args: SelectSubset<T, ConfigHistoryCreateArgs<ExtArgs>>): Prisma__ConfigHistoryClient<$Result.GetResult<Prisma.$ConfigHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConfigHistories.
     * @param {ConfigHistoryCreateManyArgs} args - Arguments to create many ConfigHistories.
     * @example
     * // Create many ConfigHistories
     * const configHistory = await prisma.configHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfigHistoryCreateManyArgs>(args?: SelectSubset<T, ConfigHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConfigHistories and returns the data saved in the database.
     * @param {ConfigHistoryCreateManyAndReturnArgs} args - Arguments to create many ConfigHistories.
     * @example
     * // Create many ConfigHistories
     * const configHistory = await prisma.configHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConfigHistories and only return the `id`
     * const configHistoryWithIdOnly = await prisma.configHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConfigHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ConfigHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConfigHistory.
     * @param {ConfigHistoryDeleteArgs} args - Arguments to delete one ConfigHistory.
     * @example
     * // Delete one ConfigHistory
     * const ConfigHistory = await prisma.configHistory.delete({
     *   where: {
     *     // ... filter to delete one ConfigHistory
     *   }
     * })
     * 
     */
    delete<T extends ConfigHistoryDeleteArgs>(args: SelectSubset<T, ConfigHistoryDeleteArgs<ExtArgs>>): Prisma__ConfigHistoryClient<$Result.GetResult<Prisma.$ConfigHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConfigHistory.
     * @param {ConfigHistoryUpdateArgs} args - Arguments to update one ConfigHistory.
     * @example
     * // Update one ConfigHistory
     * const configHistory = await prisma.configHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfigHistoryUpdateArgs>(args: SelectSubset<T, ConfigHistoryUpdateArgs<ExtArgs>>): Prisma__ConfigHistoryClient<$Result.GetResult<Prisma.$ConfigHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConfigHistories.
     * @param {ConfigHistoryDeleteManyArgs} args - Arguments to filter ConfigHistories to delete.
     * @example
     * // Delete a few ConfigHistories
     * const { count } = await prisma.configHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfigHistoryDeleteManyArgs>(args?: SelectSubset<T, ConfigHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConfigHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConfigHistories
     * const configHistory = await prisma.configHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfigHistoryUpdateManyArgs>(args: SelectSubset<T, ConfigHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConfigHistories and returns the data updated in the database.
     * @param {ConfigHistoryUpdateManyAndReturnArgs} args - Arguments to update many ConfigHistories.
     * @example
     * // Update many ConfigHistories
     * const configHistory = await prisma.configHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConfigHistories and only return the `id`
     * const configHistoryWithIdOnly = await prisma.configHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConfigHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ConfigHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConfigHistory.
     * @param {ConfigHistoryUpsertArgs} args - Arguments to update or create a ConfigHistory.
     * @example
     * // Update or create a ConfigHistory
     * const configHistory = await prisma.configHistory.upsert({
     *   create: {
     *     // ... data to create a ConfigHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConfigHistory we want to update
     *   }
     * })
     */
    upsert<T extends ConfigHistoryUpsertArgs>(args: SelectSubset<T, ConfigHistoryUpsertArgs<ExtArgs>>): Prisma__ConfigHistoryClient<$Result.GetResult<Prisma.$ConfigHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConfigHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigHistoryCountArgs} args - Arguments to filter ConfigHistories to count.
     * @example
     * // Count the number of ConfigHistories
     * const count = await prisma.configHistory.count({
     *   where: {
     *     // ... the filter for the ConfigHistories we want to count
     *   }
     * })
    **/
    count<T extends ConfigHistoryCountArgs>(
      args?: Subset<T, ConfigHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfigHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConfigHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConfigHistoryAggregateArgs>(args: Subset<T, ConfigHistoryAggregateArgs>): Prisma.PrismaPromise<GetConfigHistoryAggregateType<T>>

    /**
     * Group by ConfigHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConfigHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfigHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ConfigHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConfigHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfigHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConfigHistory model
   */
  readonly fields: ConfigHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConfigHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfigHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConfigHistory model
   */
  interface ConfigHistoryFieldRefs {
    readonly id: FieldRef<"ConfigHistory", 'String'>
    readonly configKey: FieldRef<"ConfigHistory", 'String'>
    readonly oldValue: FieldRef<"ConfigHistory", 'String'>
    readonly newValue: FieldRef<"ConfigHistory", 'String'>
    readonly changedBy: FieldRef<"ConfigHistory", 'String'>
    readonly reason: FieldRef<"ConfigHistory", 'String'>
    readonly createdAt: FieldRef<"ConfigHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConfigHistory findUnique
   */
  export type ConfigHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigHistory
     */
    select?: ConfigHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfigHistory
     */
    omit?: ConfigHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ConfigHistory to fetch.
     */
    where: ConfigHistoryWhereUniqueInput
  }

  /**
   * ConfigHistory findUniqueOrThrow
   */
  export type ConfigHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigHistory
     */
    select?: ConfigHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfigHistory
     */
    omit?: ConfigHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ConfigHistory to fetch.
     */
    where: ConfigHistoryWhereUniqueInput
  }

  /**
   * ConfigHistory findFirst
   */
  export type ConfigHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigHistory
     */
    select?: ConfigHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfigHistory
     */
    omit?: ConfigHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ConfigHistory to fetch.
     */
    where?: ConfigHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfigHistories to fetch.
     */
    orderBy?: ConfigHistoryOrderByWithRelationInput | ConfigHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfigHistories.
     */
    cursor?: ConfigHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfigHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfigHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfigHistories.
     */
    distinct?: ConfigHistoryScalarFieldEnum | ConfigHistoryScalarFieldEnum[]
  }

  /**
   * ConfigHistory findFirstOrThrow
   */
  export type ConfigHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigHistory
     */
    select?: ConfigHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfigHistory
     */
    omit?: ConfigHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ConfigHistory to fetch.
     */
    where?: ConfigHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfigHistories to fetch.
     */
    orderBy?: ConfigHistoryOrderByWithRelationInput | ConfigHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfigHistories.
     */
    cursor?: ConfigHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfigHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfigHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfigHistories.
     */
    distinct?: ConfigHistoryScalarFieldEnum | ConfigHistoryScalarFieldEnum[]
  }

  /**
   * ConfigHistory findMany
   */
  export type ConfigHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigHistory
     */
    select?: ConfigHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfigHistory
     */
    omit?: ConfigHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ConfigHistories to fetch.
     */
    where?: ConfigHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfigHistories to fetch.
     */
    orderBy?: ConfigHistoryOrderByWithRelationInput | ConfigHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConfigHistories.
     */
    cursor?: ConfigHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfigHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfigHistories.
     */
    skip?: number
    distinct?: ConfigHistoryScalarFieldEnum | ConfigHistoryScalarFieldEnum[]
  }

  /**
   * ConfigHistory create
   */
  export type ConfigHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigHistory
     */
    select?: ConfigHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfigHistory
     */
    omit?: ConfigHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a ConfigHistory.
     */
    data: XOR<ConfigHistoryCreateInput, ConfigHistoryUncheckedCreateInput>
  }

  /**
   * ConfigHistory createMany
   */
  export type ConfigHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConfigHistories.
     */
    data: ConfigHistoryCreateManyInput | ConfigHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConfigHistory createManyAndReturn
   */
  export type ConfigHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigHistory
     */
    select?: ConfigHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConfigHistory
     */
    omit?: ConfigHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ConfigHistories.
     */
    data: ConfigHistoryCreateManyInput | ConfigHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConfigHistory update
   */
  export type ConfigHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigHistory
     */
    select?: ConfigHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfigHistory
     */
    omit?: ConfigHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a ConfigHistory.
     */
    data: XOR<ConfigHistoryUpdateInput, ConfigHistoryUncheckedUpdateInput>
    /**
     * Choose, which ConfigHistory to update.
     */
    where: ConfigHistoryWhereUniqueInput
  }

  /**
   * ConfigHistory updateMany
   */
  export type ConfigHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConfigHistories.
     */
    data: XOR<ConfigHistoryUpdateManyMutationInput, ConfigHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ConfigHistories to update
     */
    where?: ConfigHistoryWhereInput
    /**
     * Limit how many ConfigHistories to update.
     */
    limit?: number
  }

  /**
   * ConfigHistory updateManyAndReturn
   */
  export type ConfigHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigHistory
     */
    select?: ConfigHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConfigHistory
     */
    omit?: ConfigHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ConfigHistories.
     */
    data: XOR<ConfigHistoryUpdateManyMutationInput, ConfigHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ConfigHistories to update
     */
    where?: ConfigHistoryWhereInput
    /**
     * Limit how many ConfigHistories to update.
     */
    limit?: number
  }

  /**
   * ConfigHistory upsert
   */
  export type ConfigHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigHistory
     */
    select?: ConfigHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfigHistory
     */
    omit?: ConfigHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the ConfigHistory to update in case it exists.
     */
    where: ConfigHistoryWhereUniqueInput
    /**
     * In case the ConfigHistory found by the `where` argument doesn't exist, create a new ConfigHistory with this data.
     */
    create: XOR<ConfigHistoryCreateInput, ConfigHistoryUncheckedCreateInput>
    /**
     * In case the ConfigHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfigHistoryUpdateInput, ConfigHistoryUncheckedUpdateInput>
  }

  /**
   * ConfigHistory delete
   */
  export type ConfigHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigHistory
     */
    select?: ConfigHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfigHistory
     */
    omit?: ConfigHistoryOmit<ExtArgs> | null
    /**
     * Filter which ConfigHistory to delete.
     */
    where: ConfigHistoryWhereUniqueInput
  }

  /**
   * ConfigHistory deleteMany
   */
  export type ConfigHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConfigHistories to delete
     */
    where?: ConfigHistoryWhereInput
    /**
     * Limit how many ConfigHistories to delete.
     */
    limit?: number
  }

  /**
   * ConfigHistory without action
   */
  export type ConfigHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigHistory
     */
    select?: ConfigHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfigHistory
     */
    omit?: ConfigHistoryOmit<ExtArgs> | null
  }


  /**
   * Model AllowedIP
   */

  export type AggregateAllowedIP = {
    _count: AllowedIPCountAggregateOutputType | null
    _avg: AllowedIPAvgAggregateOutputType | null
    _sum: AllowedIPSumAggregateOutputType | null
    _min: AllowedIPMinAggregateOutputType | null
    _max: AllowedIPMaxAggregateOutputType | null
  }

  export type AllowedIPAvgAggregateOutputType = {
    usageCount: number | null
  }

  export type AllowedIPSumAggregateOutputType = {
    usageCount: number | null
  }

  export type AllowedIPMinAggregateOutputType = {
    id: string | null
    ipAddress: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lastUsed: Date | null
    usageCount: number | null
    createdBy: string | null
  }

  export type AllowedIPMaxAggregateOutputType = {
    id: string | null
    ipAddress: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lastUsed: Date | null
    usageCount: number | null
    createdBy: string | null
  }

  export type AllowedIPCountAggregateOutputType = {
    id: number
    ipAddress: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    lastUsed: number
    usageCount: number
    createdBy: number
    _all: number
  }


  export type AllowedIPAvgAggregateInputType = {
    usageCount?: true
  }

  export type AllowedIPSumAggregateInputType = {
    usageCount?: true
  }

  export type AllowedIPMinAggregateInputType = {
    id?: true
    ipAddress?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    lastUsed?: true
    usageCount?: true
    createdBy?: true
  }

  export type AllowedIPMaxAggregateInputType = {
    id?: true
    ipAddress?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    lastUsed?: true
    usageCount?: true
    createdBy?: true
  }

  export type AllowedIPCountAggregateInputType = {
    id?: true
    ipAddress?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    lastUsed?: true
    usageCount?: true
    createdBy?: true
    _all?: true
  }

  export type AllowedIPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AllowedIP to aggregate.
     */
    where?: AllowedIPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllowedIPS to fetch.
     */
    orderBy?: AllowedIPOrderByWithRelationInput | AllowedIPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AllowedIPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllowedIPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllowedIPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AllowedIPS
    **/
    _count?: true | AllowedIPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AllowedIPAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AllowedIPSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AllowedIPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AllowedIPMaxAggregateInputType
  }

  export type GetAllowedIPAggregateType<T extends AllowedIPAggregateArgs> = {
        [P in keyof T & keyof AggregateAllowedIP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAllowedIP[P]>
      : GetScalarType<T[P], AggregateAllowedIP[P]>
  }




  export type AllowedIPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AllowedIPWhereInput
    orderBy?: AllowedIPOrderByWithAggregationInput | AllowedIPOrderByWithAggregationInput[]
    by: AllowedIPScalarFieldEnum[] | AllowedIPScalarFieldEnum
    having?: AllowedIPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AllowedIPCountAggregateInputType | true
    _avg?: AllowedIPAvgAggregateInputType
    _sum?: AllowedIPSumAggregateInputType
    _min?: AllowedIPMinAggregateInputType
    _max?: AllowedIPMaxAggregateInputType
  }

  export type AllowedIPGroupByOutputType = {
    id: string
    ipAddress: string
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date | null
    lastUsed: Date | null
    usageCount: number
    createdBy: string | null
    _count: AllowedIPCountAggregateOutputType | null
    _avg: AllowedIPAvgAggregateOutputType | null
    _sum: AllowedIPSumAggregateOutputType | null
    _min: AllowedIPMinAggregateOutputType | null
    _max: AllowedIPMaxAggregateOutputType | null
  }

  type GetAllowedIPGroupByPayload<T extends AllowedIPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AllowedIPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AllowedIPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AllowedIPGroupByOutputType[P]>
            : GetScalarType<T[P], AllowedIPGroupByOutputType[P]>
        }
      >
    >


  export type AllowedIPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ipAddress?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastUsed?: boolean
    usageCount?: boolean
    createdBy?: boolean
  }, ExtArgs["result"]["allowedIP"]>

  export type AllowedIPSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ipAddress?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastUsed?: boolean
    usageCount?: boolean
    createdBy?: boolean
  }, ExtArgs["result"]["allowedIP"]>

  export type AllowedIPSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ipAddress?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastUsed?: boolean
    usageCount?: boolean
    createdBy?: boolean
  }, ExtArgs["result"]["allowedIP"]>

  export type AllowedIPSelectScalar = {
    id?: boolean
    ipAddress?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastUsed?: boolean
    usageCount?: boolean
    createdBy?: boolean
  }

  export type AllowedIPOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ipAddress" | "description" | "isActive" | "createdAt" | "updatedAt" | "lastUsed" | "usageCount" | "createdBy", ExtArgs["result"]["allowedIP"]>

  export type $AllowedIPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AllowedIP"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ipAddress: string
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date | null
      lastUsed: Date | null
      usageCount: number
      createdBy: string | null
    }, ExtArgs["result"]["allowedIP"]>
    composites: {}
  }

  type AllowedIPGetPayload<S extends boolean | null | undefined | AllowedIPDefaultArgs> = $Result.GetResult<Prisma.$AllowedIPPayload, S>

  type AllowedIPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AllowedIPFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AllowedIPCountAggregateInputType | true
    }

  export interface AllowedIPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AllowedIP'], meta: { name: 'AllowedIP' } }
    /**
     * Find zero or one AllowedIP that matches the filter.
     * @param {AllowedIPFindUniqueArgs} args - Arguments to find a AllowedIP
     * @example
     * // Get one AllowedIP
     * const allowedIP = await prisma.allowedIP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AllowedIPFindUniqueArgs>(args: SelectSubset<T, AllowedIPFindUniqueArgs<ExtArgs>>): Prisma__AllowedIPClient<$Result.GetResult<Prisma.$AllowedIPPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AllowedIP that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AllowedIPFindUniqueOrThrowArgs} args - Arguments to find a AllowedIP
     * @example
     * // Get one AllowedIP
     * const allowedIP = await prisma.allowedIP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AllowedIPFindUniqueOrThrowArgs>(args: SelectSubset<T, AllowedIPFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AllowedIPClient<$Result.GetResult<Prisma.$AllowedIPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AllowedIP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllowedIPFindFirstArgs} args - Arguments to find a AllowedIP
     * @example
     * // Get one AllowedIP
     * const allowedIP = await prisma.allowedIP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AllowedIPFindFirstArgs>(args?: SelectSubset<T, AllowedIPFindFirstArgs<ExtArgs>>): Prisma__AllowedIPClient<$Result.GetResult<Prisma.$AllowedIPPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AllowedIP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllowedIPFindFirstOrThrowArgs} args - Arguments to find a AllowedIP
     * @example
     * // Get one AllowedIP
     * const allowedIP = await prisma.allowedIP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AllowedIPFindFirstOrThrowArgs>(args?: SelectSubset<T, AllowedIPFindFirstOrThrowArgs<ExtArgs>>): Prisma__AllowedIPClient<$Result.GetResult<Prisma.$AllowedIPPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AllowedIPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllowedIPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AllowedIPS
     * const allowedIPS = await prisma.allowedIP.findMany()
     * 
     * // Get first 10 AllowedIPS
     * const allowedIPS = await prisma.allowedIP.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const allowedIPWithIdOnly = await prisma.allowedIP.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AllowedIPFindManyArgs>(args?: SelectSubset<T, AllowedIPFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllowedIPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AllowedIP.
     * @param {AllowedIPCreateArgs} args - Arguments to create a AllowedIP.
     * @example
     * // Create one AllowedIP
     * const AllowedIP = await prisma.allowedIP.create({
     *   data: {
     *     // ... data to create a AllowedIP
     *   }
     * })
     * 
     */
    create<T extends AllowedIPCreateArgs>(args: SelectSubset<T, AllowedIPCreateArgs<ExtArgs>>): Prisma__AllowedIPClient<$Result.GetResult<Prisma.$AllowedIPPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AllowedIPS.
     * @param {AllowedIPCreateManyArgs} args - Arguments to create many AllowedIPS.
     * @example
     * // Create many AllowedIPS
     * const allowedIP = await prisma.allowedIP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AllowedIPCreateManyArgs>(args?: SelectSubset<T, AllowedIPCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AllowedIPS and returns the data saved in the database.
     * @param {AllowedIPCreateManyAndReturnArgs} args - Arguments to create many AllowedIPS.
     * @example
     * // Create many AllowedIPS
     * const allowedIP = await prisma.allowedIP.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AllowedIPS and only return the `id`
     * const allowedIPWithIdOnly = await prisma.allowedIP.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AllowedIPCreateManyAndReturnArgs>(args?: SelectSubset<T, AllowedIPCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllowedIPPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AllowedIP.
     * @param {AllowedIPDeleteArgs} args - Arguments to delete one AllowedIP.
     * @example
     * // Delete one AllowedIP
     * const AllowedIP = await prisma.allowedIP.delete({
     *   where: {
     *     // ... filter to delete one AllowedIP
     *   }
     * })
     * 
     */
    delete<T extends AllowedIPDeleteArgs>(args: SelectSubset<T, AllowedIPDeleteArgs<ExtArgs>>): Prisma__AllowedIPClient<$Result.GetResult<Prisma.$AllowedIPPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AllowedIP.
     * @param {AllowedIPUpdateArgs} args - Arguments to update one AllowedIP.
     * @example
     * // Update one AllowedIP
     * const allowedIP = await prisma.allowedIP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AllowedIPUpdateArgs>(args: SelectSubset<T, AllowedIPUpdateArgs<ExtArgs>>): Prisma__AllowedIPClient<$Result.GetResult<Prisma.$AllowedIPPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AllowedIPS.
     * @param {AllowedIPDeleteManyArgs} args - Arguments to filter AllowedIPS to delete.
     * @example
     * // Delete a few AllowedIPS
     * const { count } = await prisma.allowedIP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AllowedIPDeleteManyArgs>(args?: SelectSubset<T, AllowedIPDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AllowedIPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllowedIPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AllowedIPS
     * const allowedIP = await prisma.allowedIP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AllowedIPUpdateManyArgs>(args: SelectSubset<T, AllowedIPUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AllowedIPS and returns the data updated in the database.
     * @param {AllowedIPUpdateManyAndReturnArgs} args - Arguments to update many AllowedIPS.
     * @example
     * // Update many AllowedIPS
     * const allowedIP = await prisma.allowedIP.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AllowedIPS and only return the `id`
     * const allowedIPWithIdOnly = await prisma.allowedIP.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AllowedIPUpdateManyAndReturnArgs>(args: SelectSubset<T, AllowedIPUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllowedIPPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AllowedIP.
     * @param {AllowedIPUpsertArgs} args - Arguments to update or create a AllowedIP.
     * @example
     * // Update or create a AllowedIP
     * const allowedIP = await prisma.allowedIP.upsert({
     *   create: {
     *     // ... data to create a AllowedIP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AllowedIP we want to update
     *   }
     * })
     */
    upsert<T extends AllowedIPUpsertArgs>(args: SelectSubset<T, AllowedIPUpsertArgs<ExtArgs>>): Prisma__AllowedIPClient<$Result.GetResult<Prisma.$AllowedIPPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AllowedIPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllowedIPCountArgs} args - Arguments to filter AllowedIPS to count.
     * @example
     * // Count the number of AllowedIPS
     * const count = await prisma.allowedIP.count({
     *   where: {
     *     // ... the filter for the AllowedIPS we want to count
     *   }
     * })
    **/
    count<T extends AllowedIPCountArgs>(
      args?: Subset<T, AllowedIPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AllowedIPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AllowedIP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllowedIPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AllowedIPAggregateArgs>(args: Subset<T, AllowedIPAggregateArgs>): Prisma.PrismaPromise<GetAllowedIPAggregateType<T>>

    /**
     * Group by AllowedIP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllowedIPGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AllowedIPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AllowedIPGroupByArgs['orderBy'] }
        : { orderBy?: AllowedIPGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AllowedIPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAllowedIPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AllowedIP model
   */
  readonly fields: AllowedIPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AllowedIP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AllowedIPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AllowedIP model
   */
  interface AllowedIPFieldRefs {
    readonly id: FieldRef<"AllowedIP", 'String'>
    readonly ipAddress: FieldRef<"AllowedIP", 'String'>
    readonly description: FieldRef<"AllowedIP", 'String'>
    readonly isActive: FieldRef<"AllowedIP", 'Boolean'>
    readonly createdAt: FieldRef<"AllowedIP", 'DateTime'>
    readonly updatedAt: FieldRef<"AllowedIP", 'DateTime'>
    readonly lastUsed: FieldRef<"AllowedIP", 'DateTime'>
    readonly usageCount: FieldRef<"AllowedIP", 'Int'>
    readonly createdBy: FieldRef<"AllowedIP", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AllowedIP findUnique
   */
  export type AllowedIPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowedIP
     */
    select?: AllowedIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllowedIP
     */
    omit?: AllowedIPOmit<ExtArgs> | null
    /**
     * Filter, which AllowedIP to fetch.
     */
    where: AllowedIPWhereUniqueInput
  }

  /**
   * AllowedIP findUniqueOrThrow
   */
  export type AllowedIPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowedIP
     */
    select?: AllowedIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllowedIP
     */
    omit?: AllowedIPOmit<ExtArgs> | null
    /**
     * Filter, which AllowedIP to fetch.
     */
    where: AllowedIPWhereUniqueInput
  }

  /**
   * AllowedIP findFirst
   */
  export type AllowedIPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowedIP
     */
    select?: AllowedIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllowedIP
     */
    omit?: AllowedIPOmit<ExtArgs> | null
    /**
     * Filter, which AllowedIP to fetch.
     */
    where?: AllowedIPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllowedIPS to fetch.
     */
    orderBy?: AllowedIPOrderByWithRelationInput | AllowedIPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AllowedIPS.
     */
    cursor?: AllowedIPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllowedIPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllowedIPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AllowedIPS.
     */
    distinct?: AllowedIPScalarFieldEnum | AllowedIPScalarFieldEnum[]
  }

  /**
   * AllowedIP findFirstOrThrow
   */
  export type AllowedIPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowedIP
     */
    select?: AllowedIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllowedIP
     */
    omit?: AllowedIPOmit<ExtArgs> | null
    /**
     * Filter, which AllowedIP to fetch.
     */
    where?: AllowedIPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllowedIPS to fetch.
     */
    orderBy?: AllowedIPOrderByWithRelationInput | AllowedIPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AllowedIPS.
     */
    cursor?: AllowedIPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllowedIPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllowedIPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AllowedIPS.
     */
    distinct?: AllowedIPScalarFieldEnum | AllowedIPScalarFieldEnum[]
  }

  /**
   * AllowedIP findMany
   */
  export type AllowedIPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowedIP
     */
    select?: AllowedIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllowedIP
     */
    omit?: AllowedIPOmit<ExtArgs> | null
    /**
     * Filter, which AllowedIPS to fetch.
     */
    where?: AllowedIPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllowedIPS to fetch.
     */
    orderBy?: AllowedIPOrderByWithRelationInput | AllowedIPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AllowedIPS.
     */
    cursor?: AllowedIPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllowedIPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllowedIPS.
     */
    skip?: number
    distinct?: AllowedIPScalarFieldEnum | AllowedIPScalarFieldEnum[]
  }

  /**
   * AllowedIP create
   */
  export type AllowedIPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowedIP
     */
    select?: AllowedIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllowedIP
     */
    omit?: AllowedIPOmit<ExtArgs> | null
    /**
     * The data needed to create a AllowedIP.
     */
    data: XOR<AllowedIPCreateInput, AllowedIPUncheckedCreateInput>
  }

  /**
   * AllowedIP createMany
   */
  export type AllowedIPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AllowedIPS.
     */
    data: AllowedIPCreateManyInput | AllowedIPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AllowedIP createManyAndReturn
   */
  export type AllowedIPCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowedIP
     */
    select?: AllowedIPSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AllowedIP
     */
    omit?: AllowedIPOmit<ExtArgs> | null
    /**
     * The data used to create many AllowedIPS.
     */
    data: AllowedIPCreateManyInput | AllowedIPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AllowedIP update
   */
  export type AllowedIPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowedIP
     */
    select?: AllowedIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllowedIP
     */
    omit?: AllowedIPOmit<ExtArgs> | null
    /**
     * The data needed to update a AllowedIP.
     */
    data: XOR<AllowedIPUpdateInput, AllowedIPUncheckedUpdateInput>
    /**
     * Choose, which AllowedIP to update.
     */
    where: AllowedIPWhereUniqueInput
  }

  /**
   * AllowedIP updateMany
   */
  export type AllowedIPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AllowedIPS.
     */
    data: XOR<AllowedIPUpdateManyMutationInput, AllowedIPUncheckedUpdateManyInput>
    /**
     * Filter which AllowedIPS to update
     */
    where?: AllowedIPWhereInput
    /**
     * Limit how many AllowedIPS to update.
     */
    limit?: number
  }

  /**
   * AllowedIP updateManyAndReturn
   */
  export type AllowedIPUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowedIP
     */
    select?: AllowedIPSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AllowedIP
     */
    omit?: AllowedIPOmit<ExtArgs> | null
    /**
     * The data used to update AllowedIPS.
     */
    data: XOR<AllowedIPUpdateManyMutationInput, AllowedIPUncheckedUpdateManyInput>
    /**
     * Filter which AllowedIPS to update
     */
    where?: AllowedIPWhereInput
    /**
     * Limit how many AllowedIPS to update.
     */
    limit?: number
  }

  /**
   * AllowedIP upsert
   */
  export type AllowedIPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowedIP
     */
    select?: AllowedIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllowedIP
     */
    omit?: AllowedIPOmit<ExtArgs> | null
    /**
     * The filter to search for the AllowedIP to update in case it exists.
     */
    where: AllowedIPWhereUniqueInput
    /**
     * In case the AllowedIP found by the `where` argument doesn't exist, create a new AllowedIP with this data.
     */
    create: XOR<AllowedIPCreateInput, AllowedIPUncheckedCreateInput>
    /**
     * In case the AllowedIP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AllowedIPUpdateInput, AllowedIPUncheckedUpdateInput>
  }

  /**
   * AllowedIP delete
   */
  export type AllowedIPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowedIP
     */
    select?: AllowedIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllowedIP
     */
    omit?: AllowedIPOmit<ExtArgs> | null
    /**
     * Filter which AllowedIP to delete.
     */
    where: AllowedIPWhereUniqueInput
  }

  /**
   * AllowedIP deleteMany
   */
  export type AllowedIPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AllowedIPS to delete
     */
    where?: AllowedIPWhereInput
    /**
     * Limit how many AllowedIPS to delete.
     */
    limit?: number
  }

  /**
   * AllowedIP without action
   */
  export type AllowedIPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowedIP
     */
    select?: AllowedIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllowedIP
     */
    omit?: AllowedIPOmit<ExtArgs> | null
  }


  /**
   * Model BlockedDomain
   */

  export type AggregateBlockedDomain = {
    _count: BlockedDomainCountAggregateOutputType | null
    _min: BlockedDomainMinAggregateOutputType | null
    _max: BlockedDomainMaxAggregateOutputType | null
  }

  export type BlockedDomainMinAggregateOutputType = {
    id: string | null
    domain: string | null
    reason: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    blockedBy: string | null
  }

  export type BlockedDomainMaxAggregateOutputType = {
    id: string | null
    domain: string | null
    reason: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    blockedBy: string | null
  }

  export type BlockedDomainCountAggregateOutputType = {
    id: number
    domain: number
    reason: number
    isActive: number
    createdAt: number
    updatedAt: number
    blockedBy: number
    _all: number
  }


  export type BlockedDomainMinAggregateInputType = {
    id?: true
    domain?: true
    reason?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    blockedBy?: true
  }

  export type BlockedDomainMaxAggregateInputType = {
    id?: true
    domain?: true
    reason?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    blockedBy?: true
  }

  export type BlockedDomainCountAggregateInputType = {
    id?: true
    domain?: true
    reason?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    blockedBy?: true
    _all?: true
  }

  export type BlockedDomainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockedDomain to aggregate.
     */
    where?: BlockedDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedDomains to fetch.
     */
    orderBy?: BlockedDomainOrderByWithRelationInput | BlockedDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockedDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedDomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlockedDomains
    **/
    _count?: true | BlockedDomainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockedDomainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockedDomainMaxAggregateInputType
  }

  export type GetBlockedDomainAggregateType<T extends BlockedDomainAggregateArgs> = {
        [P in keyof T & keyof AggregateBlockedDomain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlockedDomain[P]>
      : GetScalarType<T[P], AggregateBlockedDomain[P]>
  }




  export type BlockedDomainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockedDomainWhereInput
    orderBy?: BlockedDomainOrderByWithAggregationInput | BlockedDomainOrderByWithAggregationInput[]
    by: BlockedDomainScalarFieldEnum[] | BlockedDomainScalarFieldEnum
    having?: BlockedDomainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockedDomainCountAggregateInputType | true
    _min?: BlockedDomainMinAggregateInputType
    _max?: BlockedDomainMaxAggregateInputType
  }

  export type BlockedDomainGroupByOutputType = {
    id: string
    domain: string
    reason: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date | null
    blockedBy: string | null
    _count: BlockedDomainCountAggregateOutputType | null
    _min: BlockedDomainMinAggregateOutputType | null
    _max: BlockedDomainMaxAggregateOutputType | null
  }

  type GetBlockedDomainGroupByPayload<T extends BlockedDomainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockedDomainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockedDomainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockedDomainGroupByOutputType[P]>
            : GetScalarType<T[P], BlockedDomainGroupByOutputType[P]>
        }
      >
    >


  export type BlockedDomainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    reason?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blockedBy?: boolean
  }, ExtArgs["result"]["blockedDomain"]>

  export type BlockedDomainSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    reason?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blockedBy?: boolean
  }, ExtArgs["result"]["blockedDomain"]>

  export type BlockedDomainSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    reason?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blockedBy?: boolean
  }, ExtArgs["result"]["blockedDomain"]>

  export type BlockedDomainSelectScalar = {
    id?: boolean
    domain?: boolean
    reason?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blockedBy?: boolean
  }

  export type BlockedDomainOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "domain" | "reason" | "isActive" | "createdAt" | "updatedAt" | "blockedBy", ExtArgs["result"]["blockedDomain"]>

  export type $BlockedDomainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlockedDomain"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      domain: string
      reason: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date | null
      blockedBy: string | null
    }, ExtArgs["result"]["blockedDomain"]>
    composites: {}
  }

  type BlockedDomainGetPayload<S extends boolean | null | undefined | BlockedDomainDefaultArgs> = $Result.GetResult<Prisma.$BlockedDomainPayload, S>

  type BlockedDomainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlockedDomainFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlockedDomainCountAggregateInputType | true
    }

  export interface BlockedDomainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlockedDomain'], meta: { name: 'BlockedDomain' } }
    /**
     * Find zero or one BlockedDomain that matches the filter.
     * @param {BlockedDomainFindUniqueArgs} args - Arguments to find a BlockedDomain
     * @example
     * // Get one BlockedDomain
     * const blockedDomain = await prisma.blockedDomain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockedDomainFindUniqueArgs>(args: SelectSubset<T, BlockedDomainFindUniqueArgs<ExtArgs>>): Prisma__BlockedDomainClient<$Result.GetResult<Prisma.$BlockedDomainPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlockedDomain that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlockedDomainFindUniqueOrThrowArgs} args - Arguments to find a BlockedDomain
     * @example
     * // Get one BlockedDomain
     * const blockedDomain = await prisma.blockedDomain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockedDomainFindUniqueOrThrowArgs>(args: SelectSubset<T, BlockedDomainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlockedDomainClient<$Result.GetResult<Prisma.$BlockedDomainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockedDomain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedDomainFindFirstArgs} args - Arguments to find a BlockedDomain
     * @example
     * // Get one BlockedDomain
     * const blockedDomain = await prisma.blockedDomain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockedDomainFindFirstArgs>(args?: SelectSubset<T, BlockedDomainFindFirstArgs<ExtArgs>>): Prisma__BlockedDomainClient<$Result.GetResult<Prisma.$BlockedDomainPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockedDomain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedDomainFindFirstOrThrowArgs} args - Arguments to find a BlockedDomain
     * @example
     * // Get one BlockedDomain
     * const blockedDomain = await prisma.blockedDomain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockedDomainFindFirstOrThrowArgs>(args?: SelectSubset<T, BlockedDomainFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlockedDomainClient<$Result.GetResult<Prisma.$BlockedDomainPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlockedDomains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedDomainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlockedDomains
     * const blockedDomains = await prisma.blockedDomain.findMany()
     * 
     * // Get first 10 BlockedDomains
     * const blockedDomains = await prisma.blockedDomain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockedDomainWithIdOnly = await prisma.blockedDomain.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlockedDomainFindManyArgs>(args?: SelectSubset<T, BlockedDomainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedDomainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlockedDomain.
     * @param {BlockedDomainCreateArgs} args - Arguments to create a BlockedDomain.
     * @example
     * // Create one BlockedDomain
     * const BlockedDomain = await prisma.blockedDomain.create({
     *   data: {
     *     // ... data to create a BlockedDomain
     *   }
     * })
     * 
     */
    create<T extends BlockedDomainCreateArgs>(args: SelectSubset<T, BlockedDomainCreateArgs<ExtArgs>>): Prisma__BlockedDomainClient<$Result.GetResult<Prisma.$BlockedDomainPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlockedDomains.
     * @param {BlockedDomainCreateManyArgs} args - Arguments to create many BlockedDomains.
     * @example
     * // Create many BlockedDomains
     * const blockedDomain = await prisma.blockedDomain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlockedDomainCreateManyArgs>(args?: SelectSubset<T, BlockedDomainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlockedDomains and returns the data saved in the database.
     * @param {BlockedDomainCreateManyAndReturnArgs} args - Arguments to create many BlockedDomains.
     * @example
     * // Create many BlockedDomains
     * const blockedDomain = await prisma.blockedDomain.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlockedDomains and only return the `id`
     * const blockedDomainWithIdOnly = await prisma.blockedDomain.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlockedDomainCreateManyAndReturnArgs>(args?: SelectSubset<T, BlockedDomainCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedDomainPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlockedDomain.
     * @param {BlockedDomainDeleteArgs} args - Arguments to delete one BlockedDomain.
     * @example
     * // Delete one BlockedDomain
     * const BlockedDomain = await prisma.blockedDomain.delete({
     *   where: {
     *     // ... filter to delete one BlockedDomain
     *   }
     * })
     * 
     */
    delete<T extends BlockedDomainDeleteArgs>(args: SelectSubset<T, BlockedDomainDeleteArgs<ExtArgs>>): Prisma__BlockedDomainClient<$Result.GetResult<Prisma.$BlockedDomainPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlockedDomain.
     * @param {BlockedDomainUpdateArgs} args - Arguments to update one BlockedDomain.
     * @example
     * // Update one BlockedDomain
     * const blockedDomain = await prisma.blockedDomain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlockedDomainUpdateArgs>(args: SelectSubset<T, BlockedDomainUpdateArgs<ExtArgs>>): Prisma__BlockedDomainClient<$Result.GetResult<Prisma.$BlockedDomainPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlockedDomains.
     * @param {BlockedDomainDeleteManyArgs} args - Arguments to filter BlockedDomains to delete.
     * @example
     * // Delete a few BlockedDomains
     * const { count } = await prisma.blockedDomain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlockedDomainDeleteManyArgs>(args?: SelectSubset<T, BlockedDomainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockedDomains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedDomainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlockedDomains
     * const blockedDomain = await prisma.blockedDomain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlockedDomainUpdateManyArgs>(args: SelectSubset<T, BlockedDomainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockedDomains and returns the data updated in the database.
     * @param {BlockedDomainUpdateManyAndReturnArgs} args - Arguments to update many BlockedDomains.
     * @example
     * // Update many BlockedDomains
     * const blockedDomain = await prisma.blockedDomain.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlockedDomains and only return the `id`
     * const blockedDomainWithIdOnly = await prisma.blockedDomain.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlockedDomainUpdateManyAndReturnArgs>(args: SelectSubset<T, BlockedDomainUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedDomainPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlockedDomain.
     * @param {BlockedDomainUpsertArgs} args - Arguments to update or create a BlockedDomain.
     * @example
     * // Update or create a BlockedDomain
     * const blockedDomain = await prisma.blockedDomain.upsert({
     *   create: {
     *     // ... data to create a BlockedDomain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlockedDomain we want to update
     *   }
     * })
     */
    upsert<T extends BlockedDomainUpsertArgs>(args: SelectSubset<T, BlockedDomainUpsertArgs<ExtArgs>>): Prisma__BlockedDomainClient<$Result.GetResult<Prisma.$BlockedDomainPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlockedDomains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedDomainCountArgs} args - Arguments to filter BlockedDomains to count.
     * @example
     * // Count the number of BlockedDomains
     * const count = await prisma.blockedDomain.count({
     *   where: {
     *     // ... the filter for the BlockedDomains we want to count
     *   }
     * })
    **/
    count<T extends BlockedDomainCountArgs>(
      args?: Subset<T, BlockedDomainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockedDomainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlockedDomain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedDomainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlockedDomainAggregateArgs>(args: Subset<T, BlockedDomainAggregateArgs>): Prisma.PrismaPromise<GetBlockedDomainAggregateType<T>>

    /**
     * Group by BlockedDomain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedDomainGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlockedDomainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockedDomainGroupByArgs['orderBy'] }
        : { orderBy?: BlockedDomainGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlockedDomainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockedDomainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlockedDomain model
   */
  readonly fields: BlockedDomainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlockedDomain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockedDomainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlockedDomain model
   */
  interface BlockedDomainFieldRefs {
    readonly id: FieldRef<"BlockedDomain", 'String'>
    readonly domain: FieldRef<"BlockedDomain", 'String'>
    readonly reason: FieldRef<"BlockedDomain", 'String'>
    readonly isActive: FieldRef<"BlockedDomain", 'Boolean'>
    readonly createdAt: FieldRef<"BlockedDomain", 'DateTime'>
    readonly updatedAt: FieldRef<"BlockedDomain", 'DateTime'>
    readonly blockedBy: FieldRef<"BlockedDomain", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BlockedDomain findUnique
   */
  export type BlockedDomainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedDomain
     */
    select?: BlockedDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedDomain
     */
    omit?: BlockedDomainOmit<ExtArgs> | null
    /**
     * Filter, which BlockedDomain to fetch.
     */
    where: BlockedDomainWhereUniqueInput
  }

  /**
   * BlockedDomain findUniqueOrThrow
   */
  export type BlockedDomainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedDomain
     */
    select?: BlockedDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedDomain
     */
    omit?: BlockedDomainOmit<ExtArgs> | null
    /**
     * Filter, which BlockedDomain to fetch.
     */
    where: BlockedDomainWhereUniqueInput
  }

  /**
   * BlockedDomain findFirst
   */
  export type BlockedDomainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedDomain
     */
    select?: BlockedDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedDomain
     */
    omit?: BlockedDomainOmit<ExtArgs> | null
    /**
     * Filter, which BlockedDomain to fetch.
     */
    where?: BlockedDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedDomains to fetch.
     */
    orderBy?: BlockedDomainOrderByWithRelationInput | BlockedDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockedDomains.
     */
    cursor?: BlockedDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedDomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockedDomains.
     */
    distinct?: BlockedDomainScalarFieldEnum | BlockedDomainScalarFieldEnum[]
  }

  /**
   * BlockedDomain findFirstOrThrow
   */
  export type BlockedDomainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedDomain
     */
    select?: BlockedDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedDomain
     */
    omit?: BlockedDomainOmit<ExtArgs> | null
    /**
     * Filter, which BlockedDomain to fetch.
     */
    where?: BlockedDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedDomains to fetch.
     */
    orderBy?: BlockedDomainOrderByWithRelationInput | BlockedDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockedDomains.
     */
    cursor?: BlockedDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedDomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockedDomains.
     */
    distinct?: BlockedDomainScalarFieldEnum | BlockedDomainScalarFieldEnum[]
  }

  /**
   * BlockedDomain findMany
   */
  export type BlockedDomainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedDomain
     */
    select?: BlockedDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedDomain
     */
    omit?: BlockedDomainOmit<ExtArgs> | null
    /**
     * Filter, which BlockedDomains to fetch.
     */
    where?: BlockedDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedDomains to fetch.
     */
    orderBy?: BlockedDomainOrderByWithRelationInput | BlockedDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlockedDomains.
     */
    cursor?: BlockedDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedDomains.
     */
    skip?: number
    distinct?: BlockedDomainScalarFieldEnum | BlockedDomainScalarFieldEnum[]
  }

  /**
   * BlockedDomain create
   */
  export type BlockedDomainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedDomain
     */
    select?: BlockedDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedDomain
     */
    omit?: BlockedDomainOmit<ExtArgs> | null
    /**
     * The data needed to create a BlockedDomain.
     */
    data: XOR<BlockedDomainCreateInput, BlockedDomainUncheckedCreateInput>
  }

  /**
   * BlockedDomain createMany
   */
  export type BlockedDomainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlockedDomains.
     */
    data: BlockedDomainCreateManyInput | BlockedDomainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlockedDomain createManyAndReturn
   */
  export type BlockedDomainCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedDomain
     */
    select?: BlockedDomainSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedDomain
     */
    omit?: BlockedDomainOmit<ExtArgs> | null
    /**
     * The data used to create many BlockedDomains.
     */
    data: BlockedDomainCreateManyInput | BlockedDomainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlockedDomain update
   */
  export type BlockedDomainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedDomain
     */
    select?: BlockedDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedDomain
     */
    omit?: BlockedDomainOmit<ExtArgs> | null
    /**
     * The data needed to update a BlockedDomain.
     */
    data: XOR<BlockedDomainUpdateInput, BlockedDomainUncheckedUpdateInput>
    /**
     * Choose, which BlockedDomain to update.
     */
    where: BlockedDomainWhereUniqueInput
  }

  /**
   * BlockedDomain updateMany
   */
  export type BlockedDomainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlockedDomains.
     */
    data: XOR<BlockedDomainUpdateManyMutationInput, BlockedDomainUncheckedUpdateManyInput>
    /**
     * Filter which BlockedDomains to update
     */
    where?: BlockedDomainWhereInput
    /**
     * Limit how many BlockedDomains to update.
     */
    limit?: number
  }

  /**
   * BlockedDomain updateManyAndReturn
   */
  export type BlockedDomainUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedDomain
     */
    select?: BlockedDomainSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedDomain
     */
    omit?: BlockedDomainOmit<ExtArgs> | null
    /**
     * The data used to update BlockedDomains.
     */
    data: XOR<BlockedDomainUpdateManyMutationInput, BlockedDomainUncheckedUpdateManyInput>
    /**
     * Filter which BlockedDomains to update
     */
    where?: BlockedDomainWhereInput
    /**
     * Limit how many BlockedDomains to update.
     */
    limit?: number
  }

  /**
   * BlockedDomain upsert
   */
  export type BlockedDomainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedDomain
     */
    select?: BlockedDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedDomain
     */
    omit?: BlockedDomainOmit<ExtArgs> | null
    /**
     * The filter to search for the BlockedDomain to update in case it exists.
     */
    where: BlockedDomainWhereUniqueInput
    /**
     * In case the BlockedDomain found by the `where` argument doesn't exist, create a new BlockedDomain with this data.
     */
    create: XOR<BlockedDomainCreateInput, BlockedDomainUncheckedCreateInput>
    /**
     * In case the BlockedDomain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockedDomainUpdateInput, BlockedDomainUncheckedUpdateInput>
  }

  /**
   * BlockedDomain delete
   */
  export type BlockedDomainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedDomain
     */
    select?: BlockedDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedDomain
     */
    omit?: BlockedDomainOmit<ExtArgs> | null
    /**
     * Filter which BlockedDomain to delete.
     */
    where: BlockedDomainWhereUniqueInput
  }

  /**
   * BlockedDomain deleteMany
   */
  export type BlockedDomainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockedDomains to delete
     */
    where?: BlockedDomainWhereInput
    /**
     * Limit how many BlockedDomains to delete.
     */
    limit?: number
  }

  /**
   * BlockedDomain without action
   */
  export type BlockedDomainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedDomain
     */
    select?: BlockedDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedDomain
     */
    omit?: BlockedDomainOmit<ExtArgs> | null
  }


  /**
   * Model EmailTemplate
   */

  export type AggregateEmailTemplate = {
    _count: EmailTemplateCountAggregateOutputType | null
    _avg: EmailTemplateAvgAggregateOutputType | null
    _sum: EmailTemplateSumAggregateOutputType | null
    _min: EmailTemplateMinAggregateOutputType | null
    _max: EmailTemplateMaxAggregateOutputType | null
  }

  export type EmailTemplateAvgAggregateOutputType = {
    version: number | null
  }

  export type EmailTemplateSumAggregateOutputType = {
    version: number | null
  }

  export type EmailTemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    subject: string | null
    content: string | null
    description: string | null
    isActive: boolean | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
  }

  export type EmailTemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    subject: string | null
    content: string | null
    description: string | null
    isActive: boolean | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
  }

  export type EmailTemplateCountAggregateOutputType = {
    id: number
    name: number
    subject: number
    content: number
    description: number
    variables: number
    isActive: number
    version: number
    createdAt: number
    updatedAt: number
    createdBy: number
    updatedBy: number
    _all: number
  }


  export type EmailTemplateAvgAggregateInputType = {
    version?: true
  }

  export type EmailTemplateSumAggregateInputType = {
    version?: true
  }

  export type EmailTemplateMinAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    content?: true
    description?: true
    isActive?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
  }

  export type EmailTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    content?: true
    description?: true
    isActive?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
  }

  export type EmailTemplateCountAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    content?: true
    description?: true
    variables?: true
    isActive?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
    _all?: true
  }

  export type EmailTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailTemplate to aggregate.
     */
    where?: EmailTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailTemplates to fetch.
     */
    orderBy?: EmailTemplateOrderByWithRelationInput | EmailTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailTemplates
    **/
    _count?: true | EmailTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailTemplateMaxAggregateInputType
  }

  export type GetEmailTemplateAggregateType<T extends EmailTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailTemplate[P]>
      : GetScalarType<T[P], AggregateEmailTemplate[P]>
  }




  export type EmailTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailTemplateWhereInput
    orderBy?: EmailTemplateOrderByWithAggregationInput | EmailTemplateOrderByWithAggregationInput[]
    by: EmailTemplateScalarFieldEnum[] | EmailTemplateScalarFieldEnum
    having?: EmailTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailTemplateCountAggregateInputType | true
    _avg?: EmailTemplateAvgAggregateInputType
    _sum?: EmailTemplateSumAggregateInputType
    _min?: EmailTemplateMinAggregateInputType
    _max?: EmailTemplateMaxAggregateInputType
  }

  export type EmailTemplateGroupByOutputType = {
    id: string
    name: string
    subject: string
    content: string
    description: string | null
    variables: JsonValue | null
    isActive: boolean
    version: number
    createdAt: Date
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
    _count: EmailTemplateCountAggregateOutputType | null
    _avg: EmailTemplateAvgAggregateOutputType | null
    _sum: EmailTemplateSumAggregateOutputType | null
    _min: EmailTemplateMinAggregateOutputType | null
    _max: EmailTemplateMaxAggregateOutputType | null
  }

  type GetEmailTemplateGroupByPayload<T extends EmailTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], EmailTemplateGroupByOutputType[P]>
        }
      >
    >


  export type EmailTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subject?: boolean
    content?: boolean
    description?: boolean
    variables?: boolean
    isActive?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    history?: boolean | EmailTemplate$historyArgs<ExtArgs>
    _count?: boolean | EmailTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailTemplate"]>

  export type EmailTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subject?: boolean
    content?: boolean
    description?: boolean
    variables?: boolean
    isActive?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["emailTemplate"]>

  export type EmailTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subject?: boolean
    content?: boolean
    description?: boolean
    variables?: boolean
    isActive?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["emailTemplate"]>

  export type EmailTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    subject?: boolean
    content?: boolean
    description?: boolean
    variables?: boolean
    isActive?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
  }

  export type EmailTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "subject" | "content" | "description" | "variables" | "isActive" | "version" | "createdAt" | "updatedAt" | "createdBy" | "updatedBy", ExtArgs["result"]["emailTemplate"]>
  export type EmailTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | EmailTemplate$historyArgs<ExtArgs>
    _count?: boolean | EmailTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmailTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmailTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmailTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailTemplate"
    objects: {
      history: Prisma.$TemplateHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      subject: string
      content: string
      description: string | null
      variables: Prisma.JsonValue | null
      isActive: boolean
      version: number
      createdAt: Date
      updatedAt: Date | null
      createdBy: string | null
      updatedBy: string | null
    }, ExtArgs["result"]["emailTemplate"]>
    composites: {}
  }

  type EmailTemplateGetPayload<S extends boolean | null | undefined | EmailTemplateDefaultArgs> = $Result.GetResult<Prisma.$EmailTemplatePayload, S>

  type EmailTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailTemplateCountAggregateInputType | true
    }

  export interface EmailTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailTemplate'], meta: { name: 'EmailTemplate' } }
    /**
     * Find zero or one EmailTemplate that matches the filter.
     * @param {EmailTemplateFindUniqueArgs} args - Arguments to find a EmailTemplate
     * @example
     * // Get one EmailTemplate
     * const emailTemplate = await prisma.emailTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailTemplateFindUniqueArgs>(args: SelectSubset<T, EmailTemplateFindUniqueArgs<ExtArgs>>): Prisma__EmailTemplateClient<$Result.GetResult<Prisma.$EmailTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailTemplateFindUniqueOrThrowArgs} args - Arguments to find a EmailTemplate
     * @example
     * // Get one EmailTemplate
     * const emailTemplate = await prisma.emailTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailTemplateClient<$Result.GetResult<Prisma.$EmailTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTemplateFindFirstArgs} args - Arguments to find a EmailTemplate
     * @example
     * // Get one EmailTemplate
     * const emailTemplate = await prisma.emailTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailTemplateFindFirstArgs>(args?: SelectSubset<T, EmailTemplateFindFirstArgs<ExtArgs>>): Prisma__EmailTemplateClient<$Result.GetResult<Prisma.$EmailTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTemplateFindFirstOrThrowArgs} args - Arguments to find a EmailTemplate
     * @example
     * // Get one EmailTemplate
     * const emailTemplate = await prisma.emailTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailTemplateClient<$Result.GetResult<Prisma.$EmailTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailTemplates
     * const emailTemplates = await prisma.emailTemplate.findMany()
     * 
     * // Get first 10 EmailTemplates
     * const emailTemplates = await prisma.emailTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailTemplateWithIdOnly = await prisma.emailTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailTemplateFindManyArgs>(args?: SelectSubset<T, EmailTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailTemplate.
     * @param {EmailTemplateCreateArgs} args - Arguments to create a EmailTemplate.
     * @example
     * // Create one EmailTemplate
     * const EmailTemplate = await prisma.emailTemplate.create({
     *   data: {
     *     // ... data to create a EmailTemplate
     *   }
     * })
     * 
     */
    create<T extends EmailTemplateCreateArgs>(args: SelectSubset<T, EmailTemplateCreateArgs<ExtArgs>>): Prisma__EmailTemplateClient<$Result.GetResult<Prisma.$EmailTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailTemplates.
     * @param {EmailTemplateCreateManyArgs} args - Arguments to create many EmailTemplates.
     * @example
     * // Create many EmailTemplates
     * const emailTemplate = await prisma.emailTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailTemplateCreateManyArgs>(args?: SelectSubset<T, EmailTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailTemplates and returns the data saved in the database.
     * @param {EmailTemplateCreateManyAndReturnArgs} args - Arguments to create many EmailTemplates.
     * @example
     * // Create many EmailTemplates
     * const emailTemplate = await prisma.emailTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailTemplates and only return the `id`
     * const emailTemplateWithIdOnly = await prisma.emailTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailTemplate.
     * @param {EmailTemplateDeleteArgs} args - Arguments to delete one EmailTemplate.
     * @example
     * // Delete one EmailTemplate
     * const EmailTemplate = await prisma.emailTemplate.delete({
     *   where: {
     *     // ... filter to delete one EmailTemplate
     *   }
     * })
     * 
     */
    delete<T extends EmailTemplateDeleteArgs>(args: SelectSubset<T, EmailTemplateDeleteArgs<ExtArgs>>): Prisma__EmailTemplateClient<$Result.GetResult<Prisma.$EmailTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailTemplate.
     * @param {EmailTemplateUpdateArgs} args - Arguments to update one EmailTemplate.
     * @example
     * // Update one EmailTemplate
     * const emailTemplate = await prisma.emailTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailTemplateUpdateArgs>(args: SelectSubset<T, EmailTemplateUpdateArgs<ExtArgs>>): Prisma__EmailTemplateClient<$Result.GetResult<Prisma.$EmailTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailTemplates.
     * @param {EmailTemplateDeleteManyArgs} args - Arguments to filter EmailTemplates to delete.
     * @example
     * // Delete a few EmailTemplates
     * const { count } = await prisma.emailTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailTemplateDeleteManyArgs>(args?: SelectSubset<T, EmailTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailTemplates
     * const emailTemplate = await prisma.emailTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailTemplateUpdateManyArgs>(args: SelectSubset<T, EmailTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailTemplates and returns the data updated in the database.
     * @param {EmailTemplateUpdateManyAndReturnArgs} args - Arguments to update many EmailTemplates.
     * @example
     * // Update many EmailTemplates
     * const emailTemplate = await prisma.emailTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailTemplates and only return the `id`
     * const emailTemplateWithIdOnly = await prisma.emailTemplate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailTemplate.
     * @param {EmailTemplateUpsertArgs} args - Arguments to update or create a EmailTemplate.
     * @example
     * // Update or create a EmailTemplate
     * const emailTemplate = await prisma.emailTemplate.upsert({
     *   create: {
     *     // ... data to create a EmailTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailTemplate we want to update
     *   }
     * })
     */
    upsert<T extends EmailTemplateUpsertArgs>(args: SelectSubset<T, EmailTemplateUpsertArgs<ExtArgs>>): Prisma__EmailTemplateClient<$Result.GetResult<Prisma.$EmailTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTemplateCountArgs} args - Arguments to filter EmailTemplates to count.
     * @example
     * // Count the number of EmailTemplates
     * const count = await prisma.emailTemplate.count({
     *   where: {
     *     // ... the filter for the EmailTemplates we want to count
     *   }
     * })
    **/
    count<T extends EmailTemplateCountArgs>(
      args?: Subset<T, EmailTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailTemplateAggregateArgs>(args: Subset<T, EmailTemplateAggregateArgs>): Prisma.PrismaPromise<GetEmailTemplateAggregateType<T>>

    /**
     * Group by EmailTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailTemplateGroupByArgs['orderBy'] }
        : { orderBy?: EmailTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailTemplate model
   */
  readonly fields: EmailTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    history<T extends EmailTemplate$historyArgs<ExtArgs> = {}>(args?: Subset<T, EmailTemplate$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailTemplate model
   */
  interface EmailTemplateFieldRefs {
    readonly id: FieldRef<"EmailTemplate", 'String'>
    readonly name: FieldRef<"EmailTemplate", 'String'>
    readonly subject: FieldRef<"EmailTemplate", 'String'>
    readonly content: FieldRef<"EmailTemplate", 'String'>
    readonly description: FieldRef<"EmailTemplate", 'String'>
    readonly variables: FieldRef<"EmailTemplate", 'Json'>
    readonly isActive: FieldRef<"EmailTemplate", 'Boolean'>
    readonly version: FieldRef<"EmailTemplate", 'Int'>
    readonly createdAt: FieldRef<"EmailTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"EmailTemplate", 'DateTime'>
    readonly createdBy: FieldRef<"EmailTemplate", 'String'>
    readonly updatedBy: FieldRef<"EmailTemplate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmailTemplate findUnique
   */
  export type EmailTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTemplate
     */
    select?: EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailTemplate
     */
    omit?: EmailTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailTemplateInclude<ExtArgs> | null
    /**
     * Filter, which EmailTemplate to fetch.
     */
    where: EmailTemplateWhereUniqueInput
  }

  /**
   * EmailTemplate findUniqueOrThrow
   */
  export type EmailTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTemplate
     */
    select?: EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailTemplate
     */
    omit?: EmailTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailTemplateInclude<ExtArgs> | null
    /**
     * Filter, which EmailTemplate to fetch.
     */
    where: EmailTemplateWhereUniqueInput
  }

  /**
   * EmailTemplate findFirst
   */
  export type EmailTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTemplate
     */
    select?: EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailTemplate
     */
    omit?: EmailTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailTemplateInclude<ExtArgs> | null
    /**
     * Filter, which EmailTemplate to fetch.
     */
    where?: EmailTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailTemplates to fetch.
     */
    orderBy?: EmailTemplateOrderByWithRelationInput | EmailTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailTemplates.
     */
    cursor?: EmailTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailTemplates.
     */
    distinct?: EmailTemplateScalarFieldEnum | EmailTemplateScalarFieldEnum[]
  }

  /**
   * EmailTemplate findFirstOrThrow
   */
  export type EmailTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTemplate
     */
    select?: EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailTemplate
     */
    omit?: EmailTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailTemplateInclude<ExtArgs> | null
    /**
     * Filter, which EmailTemplate to fetch.
     */
    where?: EmailTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailTemplates to fetch.
     */
    orderBy?: EmailTemplateOrderByWithRelationInput | EmailTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailTemplates.
     */
    cursor?: EmailTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailTemplates.
     */
    distinct?: EmailTemplateScalarFieldEnum | EmailTemplateScalarFieldEnum[]
  }

  /**
   * EmailTemplate findMany
   */
  export type EmailTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTemplate
     */
    select?: EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailTemplate
     */
    omit?: EmailTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailTemplateInclude<ExtArgs> | null
    /**
     * Filter, which EmailTemplates to fetch.
     */
    where?: EmailTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailTemplates to fetch.
     */
    orderBy?: EmailTemplateOrderByWithRelationInput | EmailTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailTemplates.
     */
    cursor?: EmailTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailTemplates.
     */
    skip?: number
    distinct?: EmailTemplateScalarFieldEnum | EmailTemplateScalarFieldEnum[]
  }

  /**
   * EmailTemplate create
   */
  export type EmailTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTemplate
     */
    select?: EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailTemplate
     */
    omit?: EmailTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailTemplate.
     */
    data: XOR<EmailTemplateCreateInput, EmailTemplateUncheckedCreateInput>
  }

  /**
   * EmailTemplate createMany
   */
  export type EmailTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailTemplates.
     */
    data: EmailTemplateCreateManyInput | EmailTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailTemplate createManyAndReturn
   */
  export type EmailTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTemplate
     */
    select?: EmailTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailTemplate
     */
    omit?: EmailTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many EmailTemplates.
     */
    data: EmailTemplateCreateManyInput | EmailTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailTemplate update
   */
  export type EmailTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTemplate
     */
    select?: EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailTemplate
     */
    omit?: EmailTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailTemplate.
     */
    data: XOR<EmailTemplateUpdateInput, EmailTemplateUncheckedUpdateInput>
    /**
     * Choose, which EmailTemplate to update.
     */
    where: EmailTemplateWhereUniqueInput
  }

  /**
   * EmailTemplate updateMany
   */
  export type EmailTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailTemplates.
     */
    data: XOR<EmailTemplateUpdateManyMutationInput, EmailTemplateUncheckedUpdateManyInput>
    /**
     * Filter which EmailTemplates to update
     */
    where?: EmailTemplateWhereInput
    /**
     * Limit how many EmailTemplates to update.
     */
    limit?: number
  }

  /**
   * EmailTemplate updateManyAndReturn
   */
  export type EmailTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTemplate
     */
    select?: EmailTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailTemplate
     */
    omit?: EmailTemplateOmit<ExtArgs> | null
    /**
     * The data used to update EmailTemplates.
     */
    data: XOR<EmailTemplateUpdateManyMutationInput, EmailTemplateUncheckedUpdateManyInput>
    /**
     * Filter which EmailTemplates to update
     */
    where?: EmailTemplateWhereInput
    /**
     * Limit how many EmailTemplates to update.
     */
    limit?: number
  }

  /**
   * EmailTemplate upsert
   */
  export type EmailTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTemplate
     */
    select?: EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailTemplate
     */
    omit?: EmailTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailTemplate to update in case it exists.
     */
    where: EmailTemplateWhereUniqueInput
    /**
     * In case the EmailTemplate found by the `where` argument doesn't exist, create a new EmailTemplate with this data.
     */
    create: XOR<EmailTemplateCreateInput, EmailTemplateUncheckedCreateInput>
    /**
     * In case the EmailTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailTemplateUpdateInput, EmailTemplateUncheckedUpdateInput>
  }

  /**
   * EmailTemplate delete
   */
  export type EmailTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTemplate
     */
    select?: EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailTemplate
     */
    omit?: EmailTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailTemplateInclude<ExtArgs> | null
    /**
     * Filter which EmailTemplate to delete.
     */
    where: EmailTemplateWhereUniqueInput
  }

  /**
   * EmailTemplate deleteMany
   */
  export type EmailTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailTemplates to delete
     */
    where?: EmailTemplateWhereInput
    /**
     * Limit how many EmailTemplates to delete.
     */
    limit?: number
  }

  /**
   * EmailTemplate.history
   */
  export type EmailTemplate$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateHistory
     */
    select?: TemplateHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateHistory
     */
    omit?: TemplateHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateHistoryInclude<ExtArgs> | null
    where?: TemplateHistoryWhereInput
    orderBy?: TemplateHistoryOrderByWithRelationInput | TemplateHistoryOrderByWithRelationInput[]
    cursor?: TemplateHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateHistoryScalarFieldEnum | TemplateHistoryScalarFieldEnum[]
  }

  /**
   * EmailTemplate without action
   */
  export type EmailTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTemplate
     */
    select?: EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailTemplate
     */
    omit?: EmailTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailTemplateInclude<ExtArgs> | null
  }


  /**
   * Model TemplateHistory
   */

  export type AggregateTemplateHistory = {
    _count: TemplateHistoryCountAggregateOutputType | null
    _avg: TemplateHistoryAvgAggregateOutputType | null
    _sum: TemplateHistorySumAggregateOutputType | null
    _min: TemplateHistoryMinAggregateOutputType | null
    _max: TemplateHistoryMaxAggregateOutputType | null
  }

  export type TemplateHistoryAvgAggregateOutputType = {
    version: number | null
  }

  export type TemplateHistorySumAggregateOutputType = {
    version: number | null
  }

  export type TemplateHistoryMinAggregateOutputType = {
    id: string | null
    templateId: string | null
    name: string | null
    subject: string | null
    content: string | null
    version: number | null
    changedBy: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type TemplateHistoryMaxAggregateOutputType = {
    id: string | null
    templateId: string | null
    name: string | null
    subject: string | null
    content: string | null
    version: number | null
    changedBy: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type TemplateHistoryCountAggregateOutputType = {
    id: number
    templateId: number
    name: number
    subject: number
    content: number
    version: number
    changedBy: number
    reason: number
    createdAt: number
    _all: number
  }


  export type TemplateHistoryAvgAggregateInputType = {
    version?: true
  }

  export type TemplateHistorySumAggregateInputType = {
    version?: true
  }

  export type TemplateHistoryMinAggregateInputType = {
    id?: true
    templateId?: true
    name?: true
    subject?: true
    content?: true
    version?: true
    changedBy?: true
    reason?: true
    createdAt?: true
  }

  export type TemplateHistoryMaxAggregateInputType = {
    id?: true
    templateId?: true
    name?: true
    subject?: true
    content?: true
    version?: true
    changedBy?: true
    reason?: true
    createdAt?: true
  }

  export type TemplateHistoryCountAggregateInputType = {
    id?: true
    templateId?: true
    name?: true
    subject?: true
    content?: true
    version?: true
    changedBy?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type TemplateHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateHistory to aggregate.
     */
    where?: TemplateHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateHistories to fetch.
     */
    orderBy?: TemplateHistoryOrderByWithRelationInput | TemplateHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemplateHistories
    **/
    _count?: true | TemplateHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplateHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplateHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateHistoryMaxAggregateInputType
  }

  export type GetTemplateHistoryAggregateType<T extends TemplateHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplateHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplateHistory[P]>
      : GetScalarType<T[P], AggregateTemplateHistory[P]>
  }




  export type TemplateHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateHistoryWhereInput
    orderBy?: TemplateHistoryOrderByWithAggregationInput | TemplateHistoryOrderByWithAggregationInput[]
    by: TemplateHistoryScalarFieldEnum[] | TemplateHistoryScalarFieldEnum
    having?: TemplateHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateHistoryCountAggregateInputType | true
    _avg?: TemplateHistoryAvgAggregateInputType
    _sum?: TemplateHistorySumAggregateInputType
    _min?: TemplateHistoryMinAggregateInputType
    _max?: TemplateHistoryMaxAggregateInputType
  }

  export type TemplateHistoryGroupByOutputType = {
    id: string
    templateId: string
    name: string
    subject: string
    content: string
    version: number
    changedBy: string | null
    reason: string | null
    createdAt: Date
    _count: TemplateHistoryCountAggregateOutputType | null
    _avg: TemplateHistoryAvgAggregateOutputType | null
    _sum: TemplateHistorySumAggregateOutputType | null
    _min: TemplateHistoryMinAggregateOutputType | null
    _max: TemplateHistoryMaxAggregateOutputType | null
  }

  type GetTemplateHistoryGroupByPayload<T extends TemplateHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TemplateHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    name?: boolean
    subject?: boolean
    content?: boolean
    version?: boolean
    changedBy?: boolean
    reason?: boolean
    createdAt?: boolean
    template?: boolean | EmailTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateHistory"]>

  export type TemplateHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    name?: boolean
    subject?: boolean
    content?: boolean
    version?: boolean
    changedBy?: boolean
    reason?: boolean
    createdAt?: boolean
    template?: boolean | EmailTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateHistory"]>

  export type TemplateHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    name?: boolean
    subject?: boolean
    content?: boolean
    version?: boolean
    changedBy?: boolean
    reason?: boolean
    createdAt?: boolean
    template?: boolean | EmailTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateHistory"]>

  export type TemplateHistorySelectScalar = {
    id?: boolean
    templateId?: boolean
    name?: boolean
    subject?: boolean
    content?: boolean
    version?: boolean
    changedBy?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type TemplateHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "templateId" | "name" | "subject" | "content" | "version" | "changedBy" | "reason" | "createdAt", ExtArgs["result"]["templateHistory"]>
  export type TemplateHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | EmailTemplateDefaultArgs<ExtArgs>
  }
  export type TemplateHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | EmailTemplateDefaultArgs<ExtArgs>
  }
  export type TemplateHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | EmailTemplateDefaultArgs<ExtArgs>
  }

  export type $TemplateHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemplateHistory"
    objects: {
      template: Prisma.$EmailTemplatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      templateId: string
      name: string
      subject: string
      content: string
      version: number
      changedBy: string | null
      reason: string | null
      createdAt: Date
    }, ExtArgs["result"]["templateHistory"]>
    composites: {}
  }

  type TemplateHistoryGetPayload<S extends boolean | null | undefined | TemplateHistoryDefaultArgs> = $Result.GetResult<Prisma.$TemplateHistoryPayload, S>

  type TemplateHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateHistoryCountAggregateInputType | true
    }

  export interface TemplateHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemplateHistory'], meta: { name: 'TemplateHistory' } }
    /**
     * Find zero or one TemplateHistory that matches the filter.
     * @param {TemplateHistoryFindUniqueArgs} args - Arguments to find a TemplateHistory
     * @example
     * // Get one TemplateHistory
     * const templateHistory = await prisma.templateHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateHistoryFindUniqueArgs>(args: SelectSubset<T, TemplateHistoryFindUniqueArgs<ExtArgs>>): Prisma__TemplateHistoryClient<$Result.GetResult<Prisma.$TemplateHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TemplateHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateHistoryFindUniqueOrThrowArgs} args - Arguments to find a TemplateHistory
     * @example
     * // Get one TemplateHistory
     * const templateHistory = await prisma.templateHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateHistoryClient<$Result.GetResult<Prisma.$TemplateHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemplateHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateHistoryFindFirstArgs} args - Arguments to find a TemplateHistory
     * @example
     * // Get one TemplateHistory
     * const templateHistory = await prisma.templateHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateHistoryFindFirstArgs>(args?: SelectSubset<T, TemplateHistoryFindFirstArgs<ExtArgs>>): Prisma__TemplateHistoryClient<$Result.GetResult<Prisma.$TemplateHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemplateHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateHistoryFindFirstOrThrowArgs} args - Arguments to find a TemplateHistory
     * @example
     * // Get one TemplateHistory
     * const templateHistory = await prisma.templateHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateHistoryClient<$Result.GetResult<Prisma.$TemplateHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TemplateHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemplateHistories
     * const templateHistories = await prisma.templateHistory.findMany()
     * 
     * // Get first 10 TemplateHistories
     * const templateHistories = await prisma.templateHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateHistoryWithIdOnly = await prisma.templateHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateHistoryFindManyArgs>(args?: SelectSubset<T, TemplateHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TemplateHistory.
     * @param {TemplateHistoryCreateArgs} args - Arguments to create a TemplateHistory.
     * @example
     * // Create one TemplateHistory
     * const TemplateHistory = await prisma.templateHistory.create({
     *   data: {
     *     // ... data to create a TemplateHistory
     *   }
     * })
     * 
     */
    create<T extends TemplateHistoryCreateArgs>(args: SelectSubset<T, TemplateHistoryCreateArgs<ExtArgs>>): Prisma__TemplateHistoryClient<$Result.GetResult<Prisma.$TemplateHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TemplateHistories.
     * @param {TemplateHistoryCreateManyArgs} args - Arguments to create many TemplateHistories.
     * @example
     * // Create many TemplateHistories
     * const templateHistory = await prisma.templateHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateHistoryCreateManyArgs>(args?: SelectSubset<T, TemplateHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TemplateHistories and returns the data saved in the database.
     * @param {TemplateHistoryCreateManyAndReturnArgs} args - Arguments to create many TemplateHistories.
     * @example
     * // Create many TemplateHistories
     * const templateHistory = await prisma.templateHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TemplateHistories and only return the `id`
     * const templateHistoryWithIdOnly = await prisma.templateHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TemplateHistory.
     * @param {TemplateHistoryDeleteArgs} args - Arguments to delete one TemplateHistory.
     * @example
     * // Delete one TemplateHistory
     * const TemplateHistory = await prisma.templateHistory.delete({
     *   where: {
     *     // ... filter to delete one TemplateHistory
     *   }
     * })
     * 
     */
    delete<T extends TemplateHistoryDeleteArgs>(args: SelectSubset<T, TemplateHistoryDeleteArgs<ExtArgs>>): Prisma__TemplateHistoryClient<$Result.GetResult<Prisma.$TemplateHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TemplateHistory.
     * @param {TemplateHistoryUpdateArgs} args - Arguments to update one TemplateHistory.
     * @example
     * // Update one TemplateHistory
     * const templateHistory = await prisma.templateHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateHistoryUpdateArgs>(args: SelectSubset<T, TemplateHistoryUpdateArgs<ExtArgs>>): Prisma__TemplateHistoryClient<$Result.GetResult<Prisma.$TemplateHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TemplateHistories.
     * @param {TemplateHistoryDeleteManyArgs} args - Arguments to filter TemplateHistories to delete.
     * @example
     * // Delete a few TemplateHistories
     * const { count } = await prisma.templateHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateHistoryDeleteManyArgs>(args?: SelectSubset<T, TemplateHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemplateHistories
     * const templateHistory = await prisma.templateHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateHistoryUpdateManyArgs>(args: SelectSubset<T, TemplateHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateHistories and returns the data updated in the database.
     * @param {TemplateHistoryUpdateManyAndReturnArgs} args - Arguments to update many TemplateHistories.
     * @example
     * // Update many TemplateHistories
     * const templateHistory = await prisma.templateHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TemplateHistories and only return the `id`
     * const templateHistoryWithIdOnly = await prisma.templateHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TemplateHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TemplateHistory.
     * @param {TemplateHistoryUpsertArgs} args - Arguments to update or create a TemplateHistory.
     * @example
     * // Update or create a TemplateHistory
     * const templateHistory = await prisma.templateHistory.upsert({
     *   create: {
     *     // ... data to create a TemplateHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemplateHistory we want to update
     *   }
     * })
     */
    upsert<T extends TemplateHistoryUpsertArgs>(args: SelectSubset<T, TemplateHistoryUpsertArgs<ExtArgs>>): Prisma__TemplateHistoryClient<$Result.GetResult<Prisma.$TemplateHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TemplateHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateHistoryCountArgs} args - Arguments to filter TemplateHistories to count.
     * @example
     * // Count the number of TemplateHistories
     * const count = await prisma.templateHistory.count({
     *   where: {
     *     // ... the filter for the TemplateHistories we want to count
     *   }
     * })
    **/
    count<T extends TemplateHistoryCountArgs>(
      args?: Subset<T, TemplateHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemplateHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemplateHistoryAggregateArgs>(args: Subset<T, TemplateHistoryAggregateArgs>): Prisma.PrismaPromise<GetTemplateHistoryAggregateType<T>>

    /**
     * Group by TemplateHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TemplateHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TemplateHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TemplateHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemplateHistory model
   */
  readonly fields: TemplateHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemplateHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    template<T extends EmailTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmailTemplateDefaultArgs<ExtArgs>>): Prisma__EmailTemplateClient<$Result.GetResult<Prisma.$EmailTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TemplateHistory model
   */
  interface TemplateHistoryFieldRefs {
    readonly id: FieldRef<"TemplateHistory", 'String'>
    readonly templateId: FieldRef<"TemplateHistory", 'String'>
    readonly name: FieldRef<"TemplateHistory", 'String'>
    readonly subject: FieldRef<"TemplateHistory", 'String'>
    readonly content: FieldRef<"TemplateHistory", 'String'>
    readonly version: FieldRef<"TemplateHistory", 'Int'>
    readonly changedBy: FieldRef<"TemplateHistory", 'String'>
    readonly reason: FieldRef<"TemplateHistory", 'String'>
    readonly createdAt: FieldRef<"TemplateHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TemplateHistory findUnique
   */
  export type TemplateHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateHistory
     */
    select?: TemplateHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateHistory
     */
    omit?: TemplateHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TemplateHistory to fetch.
     */
    where: TemplateHistoryWhereUniqueInput
  }

  /**
   * TemplateHistory findUniqueOrThrow
   */
  export type TemplateHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateHistory
     */
    select?: TemplateHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateHistory
     */
    omit?: TemplateHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TemplateHistory to fetch.
     */
    where: TemplateHistoryWhereUniqueInput
  }

  /**
   * TemplateHistory findFirst
   */
  export type TemplateHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateHistory
     */
    select?: TemplateHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateHistory
     */
    omit?: TemplateHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TemplateHistory to fetch.
     */
    where?: TemplateHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateHistories to fetch.
     */
    orderBy?: TemplateHistoryOrderByWithRelationInput | TemplateHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateHistories.
     */
    cursor?: TemplateHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateHistories.
     */
    distinct?: TemplateHistoryScalarFieldEnum | TemplateHistoryScalarFieldEnum[]
  }

  /**
   * TemplateHistory findFirstOrThrow
   */
  export type TemplateHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateHistory
     */
    select?: TemplateHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateHistory
     */
    omit?: TemplateHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TemplateHistory to fetch.
     */
    where?: TemplateHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateHistories to fetch.
     */
    orderBy?: TemplateHistoryOrderByWithRelationInput | TemplateHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateHistories.
     */
    cursor?: TemplateHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateHistories.
     */
    distinct?: TemplateHistoryScalarFieldEnum | TemplateHistoryScalarFieldEnum[]
  }

  /**
   * TemplateHistory findMany
   */
  export type TemplateHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateHistory
     */
    select?: TemplateHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateHistory
     */
    omit?: TemplateHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TemplateHistories to fetch.
     */
    where?: TemplateHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateHistories to fetch.
     */
    orderBy?: TemplateHistoryOrderByWithRelationInput | TemplateHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemplateHistories.
     */
    cursor?: TemplateHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateHistories.
     */
    skip?: number
    distinct?: TemplateHistoryScalarFieldEnum | TemplateHistoryScalarFieldEnum[]
  }

  /**
   * TemplateHistory create
   */
  export type TemplateHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateHistory
     */
    select?: TemplateHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateHistory
     */
    omit?: TemplateHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TemplateHistory.
     */
    data: XOR<TemplateHistoryCreateInput, TemplateHistoryUncheckedCreateInput>
  }

  /**
   * TemplateHistory createMany
   */
  export type TemplateHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemplateHistories.
     */
    data: TemplateHistoryCreateManyInput | TemplateHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemplateHistory createManyAndReturn
   */
  export type TemplateHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateHistory
     */
    select?: TemplateHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateHistory
     */
    omit?: TemplateHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many TemplateHistories.
     */
    data: TemplateHistoryCreateManyInput | TemplateHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TemplateHistory update
   */
  export type TemplateHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateHistory
     */
    select?: TemplateHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateHistory
     */
    omit?: TemplateHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TemplateHistory.
     */
    data: XOR<TemplateHistoryUpdateInput, TemplateHistoryUncheckedUpdateInput>
    /**
     * Choose, which TemplateHistory to update.
     */
    where: TemplateHistoryWhereUniqueInput
  }

  /**
   * TemplateHistory updateMany
   */
  export type TemplateHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemplateHistories.
     */
    data: XOR<TemplateHistoryUpdateManyMutationInput, TemplateHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TemplateHistories to update
     */
    where?: TemplateHistoryWhereInput
    /**
     * Limit how many TemplateHistories to update.
     */
    limit?: number
  }

  /**
   * TemplateHistory updateManyAndReturn
   */
  export type TemplateHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateHistory
     */
    select?: TemplateHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateHistory
     */
    omit?: TemplateHistoryOmit<ExtArgs> | null
    /**
     * The data used to update TemplateHistories.
     */
    data: XOR<TemplateHistoryUpdateManyMutationInput, TemplateHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TemplateHistories to update
     */
    where?: TemplateHistoryWhereInput
    /**
     * Limit how many TemplateHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TemplateHistory upsert
   */
  export type TemplateHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateHistory
     */
    select?: TemplateHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateHistory
     */
    omit?: TemplateHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TemplateHistory to update in case it exists.
     */
    where: TemplateHistoryWhereUniqueInput
    /**
     * In case the TemplateHistory found by the `where` argument doesn't exist, create a new TemplateHistory with this data.
     */
    create: XOR<TemplateHistoryCreateInput, TemplateHistoryUncheckedCreateInput>
    /**
     * In case the TemplateHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateHistoryUpdateInput, TemplateHistoryUncheckedUpdateInput>
  }

  /**
   * TemplateHistory delete
   */
  export type TemplateHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateHistory
     */
    select?: TemplateHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateHistory
     */
    omit?: TemplateHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateHistoryInclude<ExtArgs> | null
    /**
     * Filter which TemplateHistory to delete.
     */
    where: TemplateHistoryWhereUniqueInput
  }

  /**
   * TemplateHistory deleteMany
   */
  export type TemplateHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateHistories to delete
     */
    where?: TemplateHistoryWhereInput
    /**
     * Limit how many TemplateHistories to delete.
     */
    limit?: number
  }

  /**
   * TemplateHistory without action
   */
  export type TemplateHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateHistory
     */
    select?: TemplateHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateHistory
     */
    omit?: TemplateHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateHistoryInclude<ExtArgs> | null
  }


  /**
   * Model WebhookConfig
   */

  export type AggregateWebhookConfig = {
    _count: WebhookConfigCountAggregateOutputType | null
    _avg: WebhookConfigAvgAggregateOutputType | null
    _sum: WebhookConfigSumAggregateOutputType | null
    _min: WebhookConfigMinAggregateOutputType | null
    _max: WebhookConfigMaxAggregateOutputType | null
  }

  export type WebhookConfigAvgAggregateOutputType = {
    retryCount: number | null
    timeout: number | null
    successCount: number | null
    failureCount: number | null
  }

  export type WebhookConfigSumAggregateOutputType = {
    retryCount: number | null
    timeout: number | null
    successCount: number | null
    failureCount: number | null
  }

  export type WebhookConfigMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    secret: string | null
    isActive: boolean | null
    retryCount: number | null
    timeout: number | null
    createdAt: Date | null
    updatedAt: Date | null
    lastUsed: Date | null
    successCount: number | null
    failureCount: number | null
  }

  export type WebhookConfigMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    secret: string | null
    isActive: boolean | null
    retryCount: number | null
    timeout: number | null
    createdAt: Date | null
    updatedAt: Date | null
    lastUsed: Date | null
    successCount: number | null
    failureCount: number | null
  }

  export type WebhookConfigCountAggregateOutputType = {
    id: number
    name: number
    url: number
    secret: number
    events: number
    isActive: number
    retryCount: number
    timeout: number
    headers: number
    createdAt: number
    updatedAt: number
    lastUsed: number
    successCount: number
    failureCount: number
    _all: number
  }


  export type WebhookConfigAvgAggregateInputType = {
    retryCount?: true
    timeout?: true
    successCount?: true
    failureCount?: true
  }

  export type WebhookConfigSumAggregateInputType = {
    retryCount?: true
    timeout?: true
    successCount?: true
    failureCount?: true
  }

  export type WebhookConfigMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    secret?: true
    isActive?: true
    retryCount?: true
    timeout?: true
    createdAt?: true
    updatedAt?: true
    lastUsed?: true
    successCount?: true
    failureCount?: true
  }

  export type WebhookConfigMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    secret?: true
    isActive?: true
    retryCount?: true
    timeout?: true
    createdAt?: true
    updatedAt?: true
    lastUsed?: true
    successCount?: true
    failureCount?: true
  }

  export type WebhookConfigCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    secret?: true
    events?: true
    isActive?: true
    retryCount?: true
    timeout?: true
    headers?: true
    createdAt?: true
    updatedAt?: true
    lastUsed?: true
    successCount?: true
    failureCount?: true
    _all?: true
  }

  export type WebhookConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookConfig to aggregate.
     */
    where?: WebhookConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookConfigs to fetch.
     */
    orderBy?: WebhookConfigOrderByWithRelationInput | WebhookConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebhookConfigs
    **/
    _count?: true | WebhookConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebhookConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebhookConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookConfigMaxAggregateInputType
  }

  export type GetWebhookConfigAggregateType<T extends WebhookConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhookConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhookConfig[P]>
      : GetScalarType<T[P], AggregateWebhookConfig[P]>
  }




  export type WebhookConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookConfigWhereInput
    orderBy?: WebhookConfigOrderByWithAggregationInput | WebhookConfigOrderByWithAggregationInput[]
    by: WebhookConfigScalarFieldEnum[] | WebhookConfigScalarFieldEnum
    having?: WebhookConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookConfigCountAggregateInputType | true
    _avg?: WebhookConfigAvgAggregateInputType
    _sum?: WebhookConfigSumAggregateInputType
    _min?: WebhookConfigMinAggregateInputType
    _max?: WebhookConfigMaxAggregateInputType
  }

  export type WebhookConfigGroupByOutputType = {
    id: string
    name: string
    url: string
    secret: string | null
    events: string[]
    isActive: boolean
    retryCount: number
    timeout: number
    headers: JsonValue | null
    createdAt: Date
    updatedAt: Date | null
    lastUsed: Date | null
    successCount: number
    failureCount: number
    _count: WebhookConfigCountAggregateOutputType | null
    _avg: WebhookConfigAvgAggregateOutputType | null
    _sum: WebhookConfigSumAggregateOutputType | null
    _min: WebhookConfigMinAggregateOutputType | null
    _max: WebhookConfigMaxAggregateOutputType | null
  }

  type GetWebhookConfigGroupByPayload<T extends WebhookConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookConfigGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookConfigGroupByOutputType[P]>
        }
      >
    >


  export type WebhookConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    secret?: boolean
    events?: boolean
    isActive?: boolean
    retryCount?: boolean
    timeout?: boolean
    headers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastUsed?: boolean
    successCount?: boolean
    failureCount?: boolean
    logs?: boolean | WebhookConfig$logsArgs<ExtArgs>
    _count?: boolean | WebhookConfigCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookConfig"]>

  export type WebhookConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    secret?: boolean
    events?: boolean
    isActive?: boolean
    retryCount?: boolean
    timeout?: boolean
    headers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastUsed?: boolean
    successCount?: boolean
    failureCount?: boolean
  }, ExtArgs["result"]["webhookConfig"]>

  export type WebhookConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    secret?: boolean
    events?: boolean
    isActive?: boolean
    retryCount?: boolean
    timeout?: boolean
    headers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastUsed?: boolean
    successCount?: boolean
    failureCount?: boolean
  }, ExtArgs["result"]["webhookConfig"]>

  export type WebhookConfigSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    secret?: boolean
    events?: boolean
    isActive?: boolean
    retryCount?: boolean
    timeout?: boolean
    headers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastUsed?: boolean
    successCount?: boolean
    failureCount?: boolean
  }

  export type WebhookConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "secret" | "events" | "isActive" | "retryCount" | "timeout" | "headers" | "createdAt" | "updatedAt" | "lastUsed" | "successCount" | "failureCount", ExtArgs["result"]["webhookConfig"]>
  export type WebhookConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | WebhookConfig$logsArgs<ExtArgs>
    _count?: boolean | WebhookConfigCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WebhookConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WebhookConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WebhookConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebhookConfig"
    objects: {
      logs: Prisma.$WebhookLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      url: string
      secret: string | null
      events: string[]
      isActive: boolean
      retryCount: number
      timeout: number
      headers: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date | null
      lastUsed: Date | null
      successCount: number
      failureCount: number
    }, ExtArgs["result"]["webhookConfig"]>
    composites: {}
  }

  type WebhookConfigGetPayload<S extends boolean | null | undefined | WebhookConfigDefaultArgs> = $Result.GetResult<Prisma.$WebhookConfigPayload, S>

  type WebhookConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebhookConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebhookConfigCountAggregateInputType | true
    }

  export interface WebhookConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebhookConfig'], meta: { name: 'WebhookConfig' } }
    /**
     * Find zero or one WebhookConfig that matches the filter.
     * @param {WebhookConfigFindUniqueArgs} args - Arguments to find a WebhookConfig
     * @example
     * // Get one WebhookConfig
     * const webhookConfig = await prisma.webhookConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookConfigFindUniqueArgs>(args: SelectSubset<T, WebhookConfigFindUniqueArgs<ExtArgs>>): Prisma__WebhookConfigClient<$Result.GetResult<Prisma.$WebhookConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebhookConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebhookConfigFindUniqueOrThrowArgs} args - Arguments to find a WebhookConfig
     * @example
     * // Get one WebhookConfig
     * const webhookConfig = await prisma.webhookConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookConfigClient<$Result.GetResult<Prisma.$WebhookConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookConfigFindFirstArgs} args - Arguments to find a WebhookConfig
     * @example
     * // Get one WebhookConfig
     * const webhookConfig = await prisma.webhookConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookConfigFindFirstArgs>(args?: SelectSubset<T, WebhookConfigFindFirstArgs<ExtArgs>>): Prisma__WebhookConfigClient<$Result.GetResult<Prisma.$WebhookConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookConfigFindFirstOrThrowArgs} args - Arguments to find a WebhookConfig
     * @example
     * // Get one WebhookConfig
     * const webhookConfig = await prisma.webhookConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookConfigClient<$Result.GetResult<Prisma.$WebhookConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebhookConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebhookConfigs
     * const webhookConfigs = await prisma.webhookConfig.findMany()
     * 
     * // Get first 10 WebhookConfigs
     * const webhookConfigs = await prisma.webhookConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookConfigWithIdOnly = await prisma.webhookConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookConfigFindManyArgs>(args?: SelectSubset<T, WebhookConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebhookConfig.
     * @param {WebhookConfigCreateArgs} args - Arguments to create a WebhookConfig.
     * @example
     * // Create one WebhookConfig
     * const WebhookConfig = await prisma.webhookConfig.create({
     *   data: {
     *     // ... data to create a WebhookConfig
     *   }
     * })
     * 
     */
    create<T extends WebhookConfigCreateArgs>(args: SelectSubset<T, WebhookConfigCreateArgs<ExtArgs>>): Prisma__WebhookConfigClient<$Result.GetResult<Prisma.$WebhookConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebhookConfigs.
     * @param {WebhookConfigCreateManyArgs} args - Arguments to create many WebhookConfigs.
     * @example
     * // Create many WebhookConfigs
     * const webhookConfig = await prisma.webhookConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookConfigCreateManyArgs>(args?: SelectSubset<T, WebhookConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebhookConfigs and returns the data saved in the database.
     * @param {WebhookConfigCreateManyAndReturnArgs} args - Arguments to create many WebhookConfigs.
     * @example
     * // Create many WebhookConfigs
     * const webhookConfig = await prisma.webhookConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebhookConfigs and only return the `id`
     * const webhookConfigWithIdOnly = await prisma.webhookConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebhookConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, WebhookConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WebhookConfig.
     * @param {WebhookConfigDeleteArgs} args - Arguments to delete one WebhookConfig.
     * @example
     * // Delete one WebhookConfig
     * const WebhookConfig = await prisma.webhookConfig.delete({
     *   where: {
     *     // ... filter to delete one WebhookConfig
     *   }
     * })
     * 
     */
    delete<T extends WebhookConfigDeleteArgs>(args: SelectSubset<T, WebhookConfigDeleteArgs<ExtArgs>>): Prisma__WebhookConfigClient<$Result.GetResult<Prisma.$WebhookConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebhookConfig.
     * @param {WebhookConfigUpdateArgs} args - Arguments to update one WebhookConfig.
     * @example
     * // Update one WebhookConfig
     * const webhookConfig = await prisma.webhookConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookConfigUpdateArgs>(args: SelectSubset<T, WebhookConfigUpdateArgs<ExtArgs>>): Prisma__WebhookConfigClient<$Result.GetResult<Prisma.$WebhookConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebhookConfigs.
     * @param {WebhookConfigDeleteManyArgs} args - Arguments to filter WebhookConfigs to delete.
     * @example
     * // Delete a few WebhookConfigs
     * const { count } = await prisma.webhookConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookConfigDeleteManyArgs>(args?: SelectSubset<T, WebhookConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebhookConfigs
     * const webhookConfig = await prisma.webhookConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookConfigUpdateManyArgs>(args: SelectSubset<T, WebhookConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookConfigs and returns the data updated in the database.
     * @param {WebhookConfigUpdateManyAndReturnArgs} args - Arguments to update many WebhookConfigs.
     * @example
     * // Update many WebhookConfigs
     * const webhookConfig = await prisma.webhookConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebhookConfigs and only return the `id`
     * const webhookConfigWithIdOnly = await prisma.webhookConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebhookConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, WebhookConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WebhookConfig.
     * @param {WebhookConfigUpsertArgs} args - Arguments to update or create a WebhookConfig.
     * @example
     * // Update or create a WebhookConfig
     * const webhookConfig = await prisma.webhookConfig.upsert({
     *   create: {
     *     // ... data to create a WebhookConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebhookConfig we want to update
     *   }
     * })
     */
    upsert<T extends WebhookConfigUpsertArgs>(args: SelectSubset<T, WebhookConfigUpsertArgs<ExtArgs>>): Prisma__WebhookConfigClient<$Result.GetResult<Prisma.$WebhookConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebhookConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookConfigCountArgs} args - Arguments to filter WebhookConfigs to count.
     * @example
     * // Count the number of WebhookConfigs
     * const count = await prisma.webhookConfig.count({
     *   where: {
     *     // ... the filter for the WebhookConfigs we want to count
     *   }
     * })
    **/
    count<T extends WebhookConfigCountArgs>(
      args?: Subset<T, WebhookConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebhookConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebhookConfigAggregateArgs>(args: Subset<T, WebhookConfigAggregateArgs>): Prisma.PrismaPromise<GetWebhookConfigAggregateType<T>>

    /**
     * Group by WebhookConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebhookConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookConfigGroupByArgs['orderBy'] }
        : { orderBy?: WebhookConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebhookConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebhookConfig model
   */
  readonly fields: WebhookConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebhookConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    logs<T extends WebhookConfig$logsArgs<ExtArgs> = {}>(args?: Subset<T, WebhookConfig$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WebhookConfig model
   */
  interface WebhookConfigFieldRefs {
    readonly id: FieldRef<"WebhookConfig", 'String'>
    readonly name: FieldRef<"WebhookConfig", 'String'>
    readonly url: FieldRef<"WebhookConfig", 'String'>
    readonly secret: FieldRef<"WebhookConfig", 'String'>
    readonly events: FieldRef<"WebhookConfig", 'String[]'>
    readonly isActive: FieldRef<"WebhookConfig", 'Boolean'>
    readonly retryCount: FieldRef<"WebhookConfig", 'Int'>
    readonly timeout: FieldRef<"WebhookConfig", 'Int'>
    readonly headers: FieldRef<"WebhookConfig", 'Json'>
    readonly createdAt: FieldRef<"WebhookConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"WebhookConfig", 'DateTime'>
    readonly lastUsed: FieldRef<"WebhookConfig", 'DateTime'>
    readonly successCount: FieldRef<"WebhookConfig", 'Int'>
    readonly failureCount: FieldRef<"WebhookConfig", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WebhookConfig findUnique
   */
  export type WebhookConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookConfig
     */
    select?: WebhookConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookConfig
     */
    omit?: WebhookConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookConfigInclude<ExtArgs> | null
    /**
     * Filter, which WebhookConfig to fetch.
     */
    where: WebhookConfigWhereUniqueInput
  }

  /**
   * WebhookConfig findUniqueOrThrow
   */
  export type WebhookConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookConfig
     */
    select?: WebhookConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookConfig
     */
    omit?: WebhookConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookConfigInclude<ExtArgs> | null
    /**
     * Filter, which WebhookConfig to fetch.
     */
    where: WebhookConfigWhereUniqueInput
  }

  /**
   * WebhookConfig findFirst
   */
  export type WebhookConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookConfig
     */
    select?: WebhookConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookConfig
     */
    omit?: WebhookConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookConfigInclude<ExtArgs> | null
    /**
     * Filter, which WebhookConfig to fetch.
     */
    where?: WebhookConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookConfigs to fetch.
     */
    orderBy?: WebhookConfigOrderByWithRelationInput | WebhookConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookConfigs.
     */
    cursor?: WebhookConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookConfigs.
     */
    distinct?: WebhookConfigScalarFieldEnum | WebhookConfigScalarFieldEnum[]
  }

  /**
   * WebhookConfig findFirstOrThrow
   */
  export type WebhookConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookConfig
     */
    select?: WebhookConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookConfig
     */
    omit?: WebhookConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookConfigInclude<ExtArgs> | null
    /**
     * Filter, which WebhookConfig to fetch.
     */
    where?: WebhookConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookConfigs to fetch.
     */
    orderBy?: WebhookConfigOrderByWithRelationInput | WebhookConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookConfigs.
     */
    cursor?: WebhookConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookConfigs.
     */
    distinct?: WebhookConfigScalarFieldEnum | WebhookConfigScalarFieldEnum[]
  }

  /**
   * WebhookConfig findMany
   */
  export type WebhookConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookConfig
     */
    select?: WebhookConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookConfig
     */
    omit?: WebhookConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookConfigInclude<ExtArgs> | null
    /**
     * Filter, which WebhookConfigs to fetch.
     */
    where?: WebhookConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookConfigs to fetch.
     */
    orderBy?: WebhookConfigOrderByWithRelationInput | WebhookConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebhookConfigs.
     */
    cursor?: WebhookConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookConfigs.
     */
    skip?: number
    distinct?: WebhookConfigScalarFieldEnum | WebhookConfigScalarFieldEnum[]
  }

  /**
   * WebhookConfig create
   */
  export type WebhookConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookConfig
     */
    select?: WebhookConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookConfig
     */
    omit?: WebhookConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a WebhookConfig.
     */
    data: XOR<WebhookConfigCreateInput, WebhookConfigUncheckedCreateInput>
  }

  /**
   * WebhookConfig createMany
   */
  export type WebhookConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebhookConfigs.
     */
    data: WebhookConfigCreateManyInput | WebhookConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookConfig createManyAndReturn
   */
  export type WebhookConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookConfig
     */
    select?: WebhookConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookConfig
     */
    omit?: WebhookConfigOmit<ExtArgs> | null
    /**
     * The data used to create many WebhookConfigs.
     */
    data: WebhookConfigCreateManyInput | WebhookConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookConfig update
   */
  export type WebhookConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookConfig
     */
    select?: WebhookConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookConfig
     */
    omit?: WebhookConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a WebhookConfig.
     */
    data: XOR<WebhookConfigUpdateInput, WebhookConfigUncheckedUpdateInput>
    /**
     * Choose, which WebhookConfig to update.
     */
    where: WebhookConfigWhereUniqueInput
  }

  /**
   * WebhookConfig updateMany
   */
  export type WebhookConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebhookConfigs.
     */
    data: XOR<WebhookConfigUpdateManyMutationInput, WebhookConfigUncheckedUpdateManyInput>
    /**
     * Filter which WebhookConfigs to update
     */
    where?: WebhookConfigWhereInput
    /**
     * Limit how many WebhookConfigs to update.
     */
    limit?: number
  }

  /**
   * WebhookConfig updateManyAndReturn
   */
  export type WebhookConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookConfig
     */
    select?: WebhookConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookConfig
     */
    omit?: WebhookConfigOmit<ExtArgs> | null
    /**
     * The data used to update WebhookConfigs.
     */
    data: XOR<WebhookConfigUpdateManyMutationInput, WebhookConfigUncheckedUpdateManyInput>
    /**
     * Filter which WebhookConfigs to update
     */
    where?: WebhookConfigWhereInput
    /**
     * Limit how many WebhookConfigs to update.
     */
    limit?: number
  }

  /**
   * WebhookConfig upsert
   */
  export type WebhookConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookConfig
     */
    select?: WebhookConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookConfig
     */
    omit?: WebhookConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the WebhookConfig to update in case it exists.
     */
    where: WebhookConfigWhereUniqueInput
    /**
     * In case the WebhookConfig found by the `where` argument doesn't exist, create a new WebhookConfig with this data.
     */
    create: XOR<WebhookConfigCreateInput, WebhookConfigUncheckedCreateInput>
    /**
     * In case the WebhookConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookConfigUpdateInput, WebhookConfigUncheckedUpdateInput>
  }

  /**
   * WebhookConfig delete
   */
  export type WebhookConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookConfig
     */
    select?: WebhookConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookConfig
     */
    omit?: WebhookConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookConfigInclude<ExtArgs> | null
    /**
     * Filter which WebhookConfig to delete.
     */
    where: WebhookConfigWhereUniqueInput
  }

  /**
   * WebhookConfig deleteMany
   */
  export type WebhookConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookConfigs to delete
     */
    where?: WebhookConfigWhereInput
    /**
     * Limit how many WebhookConfigs to delete.
     */
    limit?: number
  }

  /**
   * WebhookConfig.logs
   */
  export type WebhookConfig$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    where?: WebhookLogWhereInput
    orderBy?: WebhookLogOrderByWithRelationInput | WebhookLogOrderByWithRelationInput[]
    cursor?: WebhookLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebhookLogScalarFieldEnum | WebhookLogScalarFieldEnum[]
  }

  /**
   * WebhookConfig without action
   */
  export type WebhookConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookConfig
     */
    select?: WebhookConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookConfig
     */
    omit?: WebhookConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookConfigInclude<ExtArgs> | null
  }


  /**
   * Model WebhookLog
   */

  export type AggregateWebhookLog = {
    _count: WebhookLogCountAggregateOutputType | null
    _avg: WebhookLogAvgAggregateOutputType | null
    _sum: WebhookLogSumAggregateOutputType | null
    _min: WebhookLogMinAggregateOutputType | null
    _max: WebhookLogMaxAggregateOutputType | null
  }

  export type WebhookLogAvgAggregateOutputType = {
    statusCode: number | null
    responseTime: number | null
  }

  export type WebhookLogSumAggregateOutputType = {
    statusCode: number | null
    responseTime: number | null
  }

  export type WebhookLogMinAggregateOutputType = {
    id: string | null
    webhookId: string | null
    event: string | null
    url: string | null
    response: string | null
    statusCode: number | null
    success: boolean | null
    errorMessage: string | null
    responseTime: number | null
    createdAt: Date | null
  }

  export type WebhookLogMaxAggregateOutputType = {
    id: string | null
    webhookId: string | null
    event: string | null
    url: string | null
    response: string | null
    statusCode: number | null
    success: boolean | null
    errorMessage: string | null
    responseTime: number | null
    createdAt: Date | null
  }

  export type WebhookLogCountAggregateOutputType = {
    id: number
    webhookId: number
    event: number
    url: number
    payload: number
    response: number
    statusCode: number
    success: number
    errorMessage: number
    responseTime: number
    createdAt: number
    _all: number
  }


  export type WebhookLogAvgAggregateInputType = {
    statusCode?: true
    responseTime?: true
  }

  export type WebhookLogSumAggregateInputType = {
    statusCode?: true
    responseTime?: true
  }

  export type WebhookLogMinAggregateInputType = {
    id?: true
    webhookId?: true
    event?: true
    url?: true
    response?: true
    statusCode?: true
    success?: true
    errorMessage?: true
    responseTime?: true
    createdAt?: true
  }

  export type WebhookLogMaxAggregateInputType = {
    id?: true
    webhookId?: true
    event?: true
    url?: true
    response?: true
    statusCode?: true
    success?: true
    errorMessage?: true
    responseTime?: true
    createdAt?: true
  }

  export type WebhookLogCountAggregateInputType = {
    id?: true
    webhookId?: true
    event?: true
    url?: true
    payload?: true
    response?: true
    statusCode?: true
    success?: true
    errorMessage?: true
    responseTime?: true
    createdAt?: true
    _all?: true
  }

  export type WebhookLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookLog to aggregate.
     */
    where?: WebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookLogs to fetch.
     */
    orderBy?: WebhookLogOrderByWithRelationInput | WebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebhookLogs
    **/
    _count?: true | WebhookLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebhookLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebhookLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookLogMaxAggregateInputType
  }

  export type GetWebhookLogAggregateType<T extends WebhookLogAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhookLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhookLog[P]>
      : GetScalarType<T[P], AggregateWebhookLog[P]>
  }




  export type WebhookLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookLogWhereInput
    orderBy?: WebhookLogOrderByWithAggregationInput | WebhookLogOrderByWithAggregationInput[]
    by: WebhookLogScalarFieldEnum[] | WebhookLogScalarFieldEnum
    having?: WebhookLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookLogCountAggregateInputType | true
    _avg?: WebhookLogAvgAggregateInputType
    _sum?: WebhookLogSumAggregateInputType
    _min?: WebhookLogMinAggregateInputType
    _max?: WebhookLogMaxAggregateInputType
  }

  export type WebhookLogGroupByOutputType = {
    id: string
    webhookId: string
    event: string
    url: string
    payload: JsonValue
    response: string | null
    statusCode: number | null
    success: boolean
    errorMessage: string | null
    responseTime: number | null
    createdAt: Date
    _count: WebhookLogCountAggregateOutputType | null
    _avg: WebhookLogAvgAggregateOutputType | null
    _sum: WebhookLogSumAggregateOutputType | null
    _min: WebhookLogMinAggregateOutputType | null
    _max: WebhookLogMaxAggregateOutputType | null
  }

  type GetWebhookLogGroupByPayload<T extends WebhookLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookLogGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookLogGroupByOutputType[P]>
        }
      >
    >


  export type WebhookLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webhookId?: boolean
    event?: boolean
    url?: boolean
    payload?: boolean
    response?: boolean
    statusCode?: boolean
    success?: boolean
    errorMessage?: boolean
    responseTime?: boolean
    createdAt?: boolean
    webhook?: boolean | WebhookConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookLog"]>

  export type WebhookLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webhookId?: boolean
    event?: boolean
    url?: boolean
    payload?: boolean
    response?: boolean
    statusCode?: boolean
    success?: boolean
    errorMessage?: boolean
    responseTime?: boolean
    createdAt?: boolean
    webhook?: boolean | WebhookConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookLog"]>

  export type WebhookLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webhookId?: boolean
    event?: boolean
    url?: boolean
    payload?: boolean
    response?: boolean
    statusCode?: boolean
    success?: boolean
    errorMessage?: boolean
    responseTime?: boolean
    createdAt?: boolean
    webhook?: boolean | WebhookConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookLog"]>

  export type WebhookLogSelectScalar = {
    id?: boolean
    webhookId?: boolean
    event?: boolean
    url?: boolean
    payload?: boolean
    response?: boolean
    statusCode?: boolean
    success?: boolean
    errorMessage?: boolean
    responseTime?: boolean
    createdAt?: boolean
  }

  export type WebhookLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "webhookId" | "event" | "url" | "payload" | "response" | "statusCode" | "success" | "errorMessage" | "responseTime" | "createdAt", ExtArgs["result"]["webhookLog"]>
  export type WebhookLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    webhook?: boolean | WebhookConfigDefaultArgs<ExtArgs>
  }
  export type WebhookLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    webhook?: boolean | WebhookConfigDefaultArgs<ExtArgs>
  }
  export type WebhookLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    webhook?: boolean | WebhookConfigDefaultArgs<ExtArgs>
  }

  export type $WebhookLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebhookLog"
    objects: {
      webhook: Prisma.$WebhookConfigPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      webhookId: string
      event: string
      url: string
      payload: Prisma.JsonValue
      response: string | null
      statusCode: number | null
      success: boolean
      errorMessage: string | null
      responseTime: number | null
      createdAt: Date
    }, ExtArgs["result"]["webhookLog"]>
    composites: {}
  }

  type WebhookLogGetPayload<S extends boolean | null | undefined | WebhookLogDefaultArgs> = $Result.GetResult<Prisma.$WebhookLogPayload, S>

  type WebhookLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebhookLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebhookLogCountAggregateInputType | true
    }

  export interface WebhookLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebhookLog'], meta: { name: 'WebhookLog' } }
    /**
     * Find zero or one WebhookLog that matches the filter.
     * @param {WebhookLogFindUniqueArgs} args - Arguments to find a WebhookLog
     * @example
     * // Get one WebhookLog
     * const webhookLog = await prisma.webhookLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookLogFindUniqueArgs>(args: SelectSubset<T, WebhookLogFindUniqueArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebhookLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebhookLogFindUniqueOrThrowArgs} args - Arguments to find a WebhookLog
     * @example
     * // Get one WebhookLog
     * const webhookLog = await prisma.webhookLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookLogFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogFindFirstArgs} args - Arguments to find a WebhookLog
     * @example
     * // Get one WebhookLog
     * const webhookLog = await prisma.webhookLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookLogFindFirstArgs>(args?: SelectSubset<T, WebhookLogFindFirstArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogFindFirstOrThrowArgs} args - Arguments to find a WebhookLog
     * @example
     * // Get one WebhookLog
     * const webhookLog = await prisma.webhookLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookLogFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebhookLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebhookLogs
     * const webhookLogs = await prisma.webhookLog.findMany()
     * 
     * // Get first 10 WebhookLogs
     * const webhookLogs = await prisma.webhookLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookLogWithIdOnly = await prisma.webhookLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookLogFindManyArgs>(args?: SelectSubset<T, WebhookLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebhookLog.
     * @param {WebhookLogCreateArgs} args - Arguments to create a WebhookLog.
     * @example
     * // Create one WebhookLog
     * const WebhookLog = await prisma.webhookLog.create({
     *   data: {
     *     // ... data to create a WebhookLog
     *   }
     * })
     * 
     */
    create<T extends WebhookLogCreateArgs>(args: SelectSubset<T, WebhookLogCreateArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebhookLogs.
     * @param {WebhookLogCreateManyArgs} args - Arguments to create many WebhookLogs.
     * @example
     * // Create many WebhookLogs
     * const webhookLog = await prisma.webhookLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookLogCreateManyArgs>(args?: SelectSubset<T, WebhookLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebhookLogs and returns the data saved in the database.
     * @param {WebhookLogCreateManyAndReturnArgs} args - Arguments to create many WebhookLogs.
     * @example
     * // Create many WebhookLogs
     * const webhookLog = await prisma.webhookLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebhookLogs and only return the `id`
     * const webhookLogWithIdOnly = await prisma.webhookLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebhookLogCreateManyAndReturnArgs>(args?: SelectSubset<T, WebhookLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WebhookLog.
     * @param {WebhookLogDeleteArgs} args - Arguments to delete one WebhookLog.
     * @example
     * // Delete one WebhookLog
     * const WebhookLog = await prisma.webhookLog.delete({
     *   where: {
     *     // ... filter to delete one WebhookLog
     *   }
     * })
     * 
     */
    delete<T extends WebhookLogDeleteArgs>(args: SelectSubset<T, WebhookLogDeleteArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebhookLog.
     * @param {WebhookLogUpdateArgs} args - Arguments to update one WebhookLog.
     * @example
     * // Update one WebhookLog
     * const webhookLog = await prisma.webhookLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookLogUpdateArgs>(args: SelectSubset<T, WebhookLogUpdateArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebhookLogs.
     * @param {WebhookLogDeleteManyArgs} args - Arguments to filter WebhookLogs to delete.
     * @example
     * // Delete a few WebhookLogs
     * const { count } = await prisma.webhookLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookLogDeleteManyArgs>(args?: SelectSubset<T, WebhookLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebhookLogs
     * const webhookLog = await prisma.webhookLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookLogUpdateManyArgs>(args: SelectSubset<T, WebhookLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookLogs and returns the data updated in the database.
     * @param {WebhookLogUpdateManyAndReturnArgs} args - Arguments to update many WebhookLogs.
     * @example
     * // Update many WebhookLogs
     * const webhookLog = await prisma.webhookLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebhookLogs and only return the `id`
     * const webhookLogWithIdOnly = await prisma.webhookLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebhookLogUpdateManyAndReturnArgs>(args: SelectSubset<T, WebhookLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WebhookLog.
     * @param {WebhookLogUpsertArgs} args - Arguments to update or create a WebhookLog.
     * @example
     * // Update or create a WebhookLog
     * const webhookLog = await prisma.webhookLog.upsert({
     *   create: {
     *     // ... data to create a WebhookLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebhookLog we want to update
     *   }
     * })
     */
    upsert<T extends WebhookLogUpsertArgs>(args: SelectSubset<T, WebhookLogUpsertArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebhookLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogCountArgs} args - Arguments to filter WebhookLogs to count.
     * @example
     * // Count the number of WebhookLogs
     * const count = await prisma.webhookLog.count({
     *   where: {
     *     // ... the filter for the WebhookLogs we want to count
     *   }
     * })
    **/
    count<T extends WebhookLogCountArgs>(
      args?: Subset<T, WebhookLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebhookLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebhookLogAggregateArgs>(args: Subset<T, WebhookLogAggregateArgs>): Prisma.PrismaPromise<GetWebhookLogAggregateType<T>>

    /**
     * Group by WebhookLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebhookLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookLogGroupByArgs['orderBy'] }
        : { orderBy?: WebhookLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebhookLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebhookLog model
   */
  readonly fields: WebhookLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebhookLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    webhook<T extends WebhookConfigDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WebhookConfigDefaultArgs<ExtArgs>>): Prisma__WebhookConfigClient<$Result.GetResult<Prisma.$WebhookConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WebhookLog model
   */
  interface WebhookLogFieldRefs {
    readonly id: FieldRef<"WebhookLog", 'String'>
    readonly webhookId: FieldRef<"WebhookLog", 'String'>
    readonly event: FieldRef<"WebhookLog", 'String'>
    readonly url: FieldRef<"WebhookLog", 'String'>
    readonly payload: FieldRef<"WebhookLog", 'Json'>
    readonly response: FieldRef<"WebhookLog", 'String'>
    readonly statusCode: FieldRef<"WebhookLog", 'Int'>
    readonly success: FieldRef<"WebhookLog", 'Boolean'>
    readonly errorMessage: FieldRef<"WebhookLog", 'String'>
    readonly responseTime: FieldRef<"WebhookLog", 'Int'>
    readonly createdAt: FieldRef<"WebhookLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebhookLog findUnique
   */
  export type WebhookLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * Filter, which WebhookLog to fetch.
     */
    where: WebhookLogWhereUniqueInput
  }

  /**
   * WebhookLog findUniqueOrThrow
   */
  export type WebhookLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * Filter, which WebhookLog to fetch.
     */
    where: WebhookLogWhereUniqueInput
  }

  /**
   * WebhookLog findFirst
   */
  export type WebhookLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * Filter, which WebhookLog to fetch.
     */
    where?: WebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookLogs to fetch.
     */
    orderBy?: WebhookLogOrderByWithRelationInput | WebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookLogs.
     */
    cursor?: WebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookLogs.
     */
    distinct?: WebhookLogScalarFieldEnum | WebhookLogScalarFieldEnum[]
  }

  /**
   * WebhookLog findFirstOrThrow
   */
  export type WebhookLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * Filter, which WebhookLog to fetch.
     */
    where?: WebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookLogs to fetch.
     */
    orderBy?: WebhookLogOrderByWithRelationInput | WebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookLogs.
     */
    cursor?: WebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookLogs.
     */
    distinct?: WebhookLogScalarFieldEnum | WebhookLogScalarFieldEnum[]
  }

  /**
   * WebhookLog findMany
   */
  export type WebhookLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * Filter, which WebhookLogs to fetch.
     */
    where?: WebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookLogs to fetch.
     */
    orderBy?: WebhookLogOrderByWithRelationInput | WebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebhookLogs.
     */
    cursor?: WebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookLogs.
     */
    skip?: number
    distinct?: WebhookLogScalarFieldEnum | WebhookLogScalarFieldEnum[]
  }

  /**
   * WebhookLog create
   */
  export type WebhookLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * The data needed to create a WebhookLog.
     */
    data: XOR<WebhookLogCreateInput, WebhookLogUncheckedCreateInput>
  }

  /**
   * WebhookLog createMany
   */
  export type WebhookLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebhookLogs.
     */
    data: WebhookLogCreateManyInput | WebhookLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookLog createManyAndReturn
   */
  export type WebhookLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * The data used to create many WebhookLogs.
     */
    data: WebhookLogCreateManyInput | WebhookLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebhookLog update
   */
  export type WebhookLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * The data needed to update a WebhookLog.
     */
    data: XOR<WebhookLogUpdateInput, WebhookLogUncheckedUpdateInput>
    /**
     * Choose, which WebhookLog to update.
     */
    where: WebhookLogWhereUniqueInput
  }

  /**
   * WebhookLog updateMany
   */
  export type WebhookLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebhookLogs.
     */
    data: XOR<WebhookLogUpdateManyMutationInput, WebhookLogUncheckedUpdateManyInput>
    /**
     * Filter which WebhookLogs to update
     */
    where?: WebhookLogWhereInput
    /**
     * Limit how many WebhookLogs to update.
     */
    limit?: number
  }

  /**
   * WebhookLog updateManyAndReturn
   */
  export type WebhookLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * The data used to update WebhookLogs.
     */
    data: XOR<WebhookLogUpdateManyMutationInput, WebhookLogUncheckedUpdateManyInput>
    /**
     * Filter which WebhookLogs to update
     */
    where?: WebhookLogWhereInput
    /**
     * Limit how many WebhookLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebhookLog upsert
   */
  export type WebhookLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * The filter to search for the WebhookLog to update in case it exists.
     */
    where: WebhookLogWhereUniqueInput
    /**
     * In case the WebhookLog found by the `where` argument doesn't exist, create a new WebhookLog with this data.
     */
    create: XOR<WebhookLogCreateInput, WebhookLogUncheckedCreateInput>
    /**
     * In case the WebhookLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookLogUpdateInput, WebhookLogUncheckedUpdateInput>
  }

  /**
   * WebhookLog delete
   */
  export type WebhookLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * Filter which WebhookLog to delete.
     */
    where: WebhookLogWhereUniqueInput
  }

  /**
   * WebhookLog deleteMany
   */
  export type WebhookLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookLogs to delete
     */
    where?: WebhookLogWhereInput
    /**
     * Limit how many WebhookLogs to delete.
     */
    limit?: number
  }

  /**
   * WebhookLog without action
   */
  export type WebhookLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
  }


  /**
   * Model ApiKey
   */

  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _avg: ApiKeyAvgAggregateOutputType | null
    _sum: ApiKeySumAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyAvgAggregateOutputType = {
    usageCount: number | null
  }

  export type ApiKeySumAggregateOutputType = {
    usageCount: number | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    hashedKey: string | null
    keyPreview: string | null
    isActive: boolean | null
    expiresAt: Date | null
    lastUsed: Date | null
    usageCount: number | null
    createdAt: Date | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    hashedKey: string | null
    keyPreview: string | null
    isActive: boolean | null
    expiresAt: Date | null
    lastUsed: Date | null
    usageCount: number | null
    createdAt: Date | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    hashedKey: number
    keyPreview: number
    isActive: number
    expiresAt: number
    lastUsed: number
    usageCount: number
    createdAt: number
    _all: number
  }


  export type ApiKeyAvgAggregateInputType = {
    usageCount?: true
  }

  export type ApiKeySumAggregateInputType = {
    usageCount?: true
  }

  export type ApiKeyMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    hashedKey?: true
    keyPreview?: true
    isActive?: true
    expiresAt?: true
    lastUsed?: true
    usageCount?: true
    createdAt?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    hashedKey?: true
    keyPreview?: true
    isActive?: true
    expiresAt?: true
    lastUsed?: true
    usageCount?: true
    createdAt?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    hashedKey?: true
    keyPreview?: true
    isActive?: true
    expiresAt?: true
    lastUsed?: true
    usageCount?: true
    createdAt?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKey to aggregate.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiKeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiKeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithAggregationInput | ApiKeyOrderByWithAggregationInput[]
    by: ApiKeyScalarFieldEnum[] | ApiKeyScalarFieldEnum
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _avg?: ApiKeyAvgAggregateInputType
    _sum?: ApiKeySumAggregateInputType
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }

  export type ApiKeyGroupByOutputType = {
    id: string
    userId: string
    name: string
    hashedKey: string
    keyPreview: string
    isActive: boolean
    expiresAt: Date | null
    lastUsed: Date | null
    usageCount: number
    createdAt: Date
    _count: ApiKeyCountAggregateOutputType | null
    _avg: ApiKeyAvgAggregateOutputType | null
    _sum: ApiKeySumAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    hashedKey?: boolean
    keyPreview?: boolean
    isActive?: boolean
    expiresAt?: boolean
    lastUsed?: boolean
    usageCount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    usage?: boolean | ApiKey$usageArgs<ExtArgs>
    _count?: boolean | ApiKeyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    hashedKey?: boolean
    keyPreview?: boolean
    isActive?: boolean
    expiresAt?: boolean
    lastUsed?: boolean
    usageCount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    hashedKey?: boolean
    keyPreview?: boolean
    isActive?: boolean
    expiresAt?: boolean
    lastUsed?: boolean
    usageCount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    hashedKey?: boolean
    keyPreview?: boolean
    isActive?: boolean
    expiresAt?: boolean
    lastUsed?: boolean
    usageCount?: boolean
    createdAt?: boolean
  }

  export type ApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "hashedKey" | "keyPreview" | "isActive" | "expiresAt" | "lastUsed" | "usageCount" | "createdAt", ExtArgs["result"]["apiKey"]>
  export type ApiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    usage?: boolean | ApiKey$usageArgs<ExtArgs>
    _count?: boolean | ApiKeyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      usage: Prisma.$ApiKeyUsagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      hashedKey: string
      keyPreview: string
      isActive: boolean
      expiresAt: Date | null
      lastUsed: Date | null
      usageCount: number
      createdAt: Date
    }, ExtArgs["result"]["apiKey"]>
    composites: {}
  }

  type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPayload, S>

  type ApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyCountAggregateInputType | true
    }

  export interface ApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'], meta: { name: 'ApiKey' } }
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyFindUniqueArgs>(args: SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyFindFirstArgs>(args?: SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyFindManyArgs>(args?: SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreateArgs>(args: SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeys.
     * @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeys and returns the data saved in the database.
     * @param {ApiKeyCreateManyAndReturnArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyDeleteArgs>(args: SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUpdateArgs>(args: SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUpdateManyArgs>(args: SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys and returns the data updated in the database.
     * @param {ApiKeyUpdateManyAndReturnArgs} args - Arguments to update many ApiKeys.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUpsertArgs>(args: SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKey model
   */
  readonly fields: ApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usage<T extends ApiKey$usageArgs<ExtArgs> = {}>(args?: Subset<T, ApiKey$usageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiKey model
   */
  interface ApiKeyFieldRefs {
    readonly id: FieldRef<"ApiKey", 'String'>
    readonly userId: FieldRef<"ApiKey", 'String'>
    readonly name: FieldRef<"ApiKey", 'String'>
    readonly hashedKey: FieldRef<"ApiKey", 'String'>
    readonly keyPreview: FieldRef<"ApiKey", 'String'>
    readonly isActive: FieldRef<"ApiKey", 'Boolean'>
    readonly expiresAt: FieldRef<"ApiKey", 'DateTime'>
    readonly lastUsed: FieldRef<"ApiKey", 'DateTime'>
    readonly usageCount: FieldRef<"ApiKey", 'Int'>
    readonly createdAt: FieldRef<"ApiKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiKey findUnique
   */
  export type ApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findFirst
   */
  export type ApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeys to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKey.
     */
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }

  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey createManyAndReturn
   */
  export type ApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKey.
     */
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey updateManyAndReturn
   */
  export type ApiKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     */
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     */
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }

  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter which ApiKey to delete.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeys to delete
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to delete.
     */
    limit?: number
  }

  /**
   * ApiKey.usage
   */
  export type ApiKey$usageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyUsage
     */
    select?: ApiKeyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyUsage
     */
    omit?: ApiKeyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyUsageInclude<ExtArgs> | null
    where?: ApiKeyUsageWhereInput
    orderBy?: ApiKeyUsageOrderByWithRelationInput | ApiKeyUsageOrderByWithRelationInput[]
    cursor?: ApiKeyUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyUsageScalarFieldEnum | ApiKeyUsageScalarFieldEnum[]
  }

  /**
   * ApiKey without action
   */
  export type ApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
  }


  /**
   * Model ApiKeyUsage
   */

  export type AggregateApiKeyUsage = {
    _count: ApiKeyUsageCountAggregateOutputType | null
    _avg: ApiKeyUsageAvgAggregateOutputType | null
    _sum: ApiKeyUsageSumAggregateOutputType | null
    _min: ApiKeyUsageMinAggregateOutputType | null
    _max: ApiKeyUsageMaxAggregateOutputType | null
  }

  export type ApiKeyUsageAvgAggregateOutputType = {
    statusCode: number | null
    responseTime: number | null
  }

  export type ApiKeyUsageSumAggregateOutputType = {
    statusCode: number | null
    responseTime: number | null
  }

  export type ApiKeyUsageMinAggregateOutputType = {
    id: string | null
    apiKeyId: string | null
    endpoint: string | null
    method: string | null
    ipAddress: string | null
    userAgent: string | null
    statusCode: number | null
    responseTime: number | null
    createdAt: Date | null
  }

  export type ApiKeyUsageMaxAggregateOutputType = {
    id: string | null
    apiKeyId: string | null
    endpoint: string | null
    method: string | null
    ipAddress: string | null
    userAgent: string | null
    statusCode: number | null
    responseTime: number | null
    createdAt: Date | null
  }

  export type ApiKeyUsageCountAggregateOutputType = {
    id: number
    apiKeyId: number
    endpoint: number
    method: number
    ipAddress: number
    userAgent: number
    statusCode: number
    responseTime: number
    createdAt: number
    _all: number
  }


  export type ApiKeyUsageAvgAggregateInputType = {
    statusCode?: true
    responseTime?: true
  }

  export type ApiKeyUsageSumAggregateInputType = {
    statusCode?: true
    responseTime?: true
  }

  export type ApiKeyUsageMinAggregateInputType = {
    id?: true
    apiKeyId?: true
    endpoint?: true
    method?: true
    ipAddress?: true
    userAgent?: true
    statusCode?: true
    responseTime?: true
    createdAt?: true
  }

  export type ApiKeyUsageMaxAggregateInputType = {
    id?: true
    apiKeyId?: true
    endpoint?: true
    method?: true
    ipAddress?: true
    userAgent?: true
    statusCode?: true
    responseTime?: true
    createdAt?: true
  }

  export type ApiKeyUsageCountAggregateInputType = {
    id?: true
    apiKeyId?: true
    endpoint?: true
    method?: true
    ipAddress?: true
    userAgent?: true
    statusCode?: true
    responseTime?: true
    createdAt?: true
    _all?: true
  }

  export type ApiKeyUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeyUsage to aggregate.
     */
    where?: ApiKeyUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeyUsages to fetch.
     */
    orderBy?: ApiKeyUsageOrderByWithRelationInput | ApiKeyUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeyUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeyUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeyUsages
    **/
    _count?: true | ApiKeyUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiKeyUsageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiKeyUsageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyUsageMaxAggregateInputType
  }

  export type GetApiKeyUsageAggregateType<T extends ApiKeyUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKeyUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKeyUsage[P]>
      : GetScalarType<T[P], AggregateApiKeyUsage[P]>
  }




  export type ApiKeyUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyUsageWhereInput
    orderBy?: ApiKeyUsageOrderByWithAggregationInput | ApiKeyUsageOrderByWithAggregationInput[]
    by: ApiKeyUsageScalarFieldEnum[] | ApiKeyUsageScalarFieldEnum
    having?: ApiKeyUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyUsageCountAggregateInputType | true
    _avg?: ApiKeyUsageAvgAggregateInputType
    _sum?: ApiKeyUsageSumAggregateInputType
    _min?: ApiKeyUsageMinAggregateInputType
    _max?: ApiKeyUsageMaxAggregateInputType
  }

  export type ApiKeyUsageGroupByOutputType = {
    id: string
    apiKeyId: string
    endpoint: string
    method: string
    ipAddress: string | null
    userAgent: string | null
    statusCode: number
    responseTime: number | null
    createdAt: Date
    _count: ApiKeyUsageCountAggregateOutputType | null
    _avg: ApiKeyUsageAvgAggregateOutputType | null
    _sum: ApiKeyUsageSumAggregateOutputType | null
    _min: ApiKeyUsageMinAggregateOutputType | null
    _max: ApiKeyUsageMaxAggregateOutputType | null
  }

  type GetApiKeyUsageGroupByPayload<T extends ApiKeyUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyUsageGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyUsageGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeyUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKeyId?: boolean
    endpoint?: boolean
    method?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    statusCode?: boolean
    responseTime?: boolean
    createdAt?: boolean
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKeyUsage"]>

  export type ApiKeyUsageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKeyId?: boolean
    endpoint?: boolean
    method?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    statusCode?: boolean
    responseTime?: boolean
    createdAt?: boolean
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKeyUsage"]>

  export type ApiKeyUsageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKeyId?: boolean
    endpoint?: boolean
    method?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    statusCode?: boolean
    responseTime?: boolean
    createdAt?: boolean
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKeyUsage"]>

  export type ApiKeyUsageSelectScalar = {
    id?: boolean
    apiKeyId?: boolean
    endpoint?: boolean
    method?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    statusCode?: boolean
    responseTime?: boolean
    createdAt?: boolean
  }

  export type ApiKeyUsageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "apiKeyId" | "endpoint" | "method" | "ipAddress" | "userAgent" | "statusCode" | "responseTime" | "createdAt", ExtArgs["result"]["apiKeyUsage"]>
  export type ApiKeyUsageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }
  export type ApiKeyUsageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }
  export type ApiKeyUsageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }

  export type $ApiKeyUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKeyUsage"
    objects: {
      apiKey: Prisma.$ApiKeyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      apiKeyId: string
      endpoint: string
      method: string
      ipAddress: string | null
      userAgent: string | null
      statusCode: number
      responseTime: number | null
      createdAt: Date
    }, ExtArgs["result"]["apiKeyUsage"]>
    composites: {}
  }

  type ApiKeyUsageGetPayload<S extends boolean | null | undefined | ApiKeyUsageDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyUsagePayload, S>

  type ApiKeyUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyUsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyUsageCountAggregateInputType | true
    }

  export interface ApiKeyUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKeyUsage'], meta: { name: 'ApiKeyUsage' } }
    /**
     * Find zero or one ApiKeyUsage that matches the filter.
     * @param {ApiKeyUsageFindUniqueArgs} args - Arguments to find a ApiKeyUsage
     * @example
     * // Get one ApiKeyUsage
     * const apiKeyUsage = await prisma.apiKeyUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyUsageFindUniqueArgs>(args: SelectSubset<T, ApiKeyUsageFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyUsageClient<$Result.GetResult<Prisma.$ApiKeyUsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKeyUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyUsageFindUniqueOrThrowArgs} args - Arguments to find a ApiKeyUsage
     * @example
     * // Get one ApiKeyUsage
     * const apiKeyUsage = await prisma.apiKeyUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyUsageFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyUsageClient<$Result.GetResult<Prisma.$ApiKeyUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKeyUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUsageFindFirstArgs} args - Arguments to find a ApiKeyUsage
     * @example
     * // Get one ApiKeyUsage
     * const apiKeyUsage = await prisma.apiKeyUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyUsageFindFirstArgs>(args?: SelectSubset<T, ApiKeyUsageFindFirstArgs<ExtArgs>>): Prisma__ApiKeyUsageClient<$Result.GetResult<Prisma.$ApiKeyUsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKeyUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUsageFindFirstOrThrowArgs} args - Arguments to find a ApiKeyUsage
     * @example
     * // Get one ApiKeyUsage
     * const apiKeyUsage = await prisma.apiKeyUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyUsageFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyUsageClient<$Result.GetResult<Prisma.$ApiKeyUsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeyUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeyUsages
     * const apiKeyUsages = await prisma.apiKeyUsage.findMany()
     * 
     * // Get first 10 ApiKeyUsages
     * const apiKeyUsages = await prisma.apiKeyUsage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyUsageWithIdOnly = await prisma.apiKeyUsage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyUsageFindManyArgs>(args?: SelectSubset<T, ApiKeyUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKeyUsage.
     * @param {ApiKeyUsageCreateArgs} args - Arguments to create a ApiKeyUsage.
     * @example
     * // Create one ApiKeyUsage
     * const ApiKeyUsage = await prisma.apiKeyUsage.create({
     *   data: {
     *     // ... data to create a ApiKeyUsage
     *   }
     * })
     * 
     */
    create<T extends ApiKeyUsageCreateArgs>(args: SelectSubset<T, ApiKeyUsageCreateArgs<ExtArgs>>): Prisma__ApiKeyUsageClient<$Result.GetResult<Prisma.$ApiKeyUsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeyUsages.
     * @param {ApiKeyUsageCreateManyArgs} args - Arguments to create many ApiKeyUsages.
     * @example
     * // Create many ApiKeyUsages
     * const apiKeyUsage = await prisma.apiKeyUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyUsageCreateManyArgs>(args?: SelectSubset<T, ApiKeyUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeyUsages and returns the data saved in the database.
     * @param {ApiKeyUsageCreateManyAndReturnArgs} args - Arguments to create many ApiKeyUsages.
     * @example
     * // Create many ApiKeyUsages
     * const apiKeyUsage = await prisma.apiKeyUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeyUsages and only return the `id`
     * const apiKeyUsageWithIdOnly = await prisma.apiKeyUsage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyUsageCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyUsagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKeyUsage.
     * @param {ApiKeyUsageDeleteArgs} args - Arguments to delete one ApiKeyUsage.
     * @example
     * // Delete one ApiKeyUsage
     * const ApiKeyUsage = await prisma.apiKeyUsage.delete({
     *   where: {
     *     // ... filter to delete one ApiKeyUsage
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyUsageDeleteArgs>(args: SelectSubset<T, ApiKeyUsageDeleteArgs<ExtArgs>>): Prisma__ApiKeyUsageClient<$Result.GetResult<Prisma.$ApiKeyUsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKeyUsage.
     * @param {ApiKeyUsageUpdateArgs} args - Arguments to update one ApiKeyUsage.
     * @example
     * // Update one ApiKeyUsage
     * const apiKeyUsage = await prisma.apiKeyUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUsageUpdateArgs>(args: SelectSubset<T, ApiKeyUsageUpdateArgs<ExtArgs>>): Prisma__ApiKeyUsageClient<$Result.GetResult<Prisma.$ApiKeyUsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeyUsages.
     * @param {ApiKeyUsageDeleteManyArgs} args - Arguments to filter ApiKeyUsages to delete.
     * @example
     * // Delete a few ApiKeyUsages
     * const { count } = await prisma.apiKeyUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyUsageDeleteManyArgs>(args?: SelectSubset<T, ApiKeyUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeyUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeyUsages
     * const apiKeyUsage = await prisma.apiKeyUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUsageUpdateManyArgs>(args: SelectSubset<T, ApiKeyUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeyUsages and returns the data updated in the database.
     * @param {ApiKeyUsageUpdateManyAndReturnArgs} args - Arguments to update many ApiKeyUsages.
     * @example
     * // Update many ApiKeyUsages
     * const apiKeyUsage = await prisma.apiKeyUsage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeyUsages and only return the `id`
     * const apiKeyUsageWithIdOnly = await prisma.apiKeyUsage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiKeyUsageUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyUsageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyUsagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKeyUsage.
     * @param {ApiKeyUsageUpsertArgs} args - Arguments to update or create a ApiKeyUsage.
     * @example
     * // Update or create a ApiKeyUsage
     * const apiKeyUsage = await prisma.apiKeyUsage.upsert({
     *   create: {
     *     // ... data to create a ApiKeyUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKeyUsage we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUsageUpsertArgs>(args: SelectSubset<T, ApiKeyUsageUpsertArgs<ExtArgs>>): Prisma__ApiKeyUsageClient<$Result.GetResult<Prisma.$ApiKeyUsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeyUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUsageCountArgs} args - Arguments to filter ApiKeyUsages to count.
     * @example
     * // Count the number of ApiKeyUsages
     * const count = await prisma.apiKeyUsage.count({
     *   where: {
     *     // ... the filter for the ApiKeyUsages we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyUsageCountArgs>(
      args?: Subset<T, ApiKeyUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKeyUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiKeyUsageAggregateArgs>(args: Subset<T, ApiKeyUsageAggregateArgs>): Prisma.PrismaPromise<GetApiKeyUsageAggregateType<T>>

    /**
     * Group by ApiKeyUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUsageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiKeyUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyUsageGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyUsageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiKeyUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKeyUsage model
   */
  readonly fields: ApiKeyUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKeyUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apiKey<T extends ApiKeyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApiKeyDefaultArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiKeyUsage model
   */
  interface ApiKeyUsageFieldRefs {
    readonly id: FieldRef<"ApiKeyUsage", 'String'>
    readonly apiKeyId: FieldRef<"ApiKeyUsage", 'String'>
    readonly endpoint: FieldRef<"ApiKeyUsage", 'String'>
    readonly method: FieldRef<"ApiKeyUsage", 'String'>
    readonly ipAddress: FieldRef<"ApiKeyUsage", 'String'>
    readonly userAgent: FieldRef<"ApiKeyUsage", 'String'>
    readonly statusCode: FieldRef<"ApiKeyUsage", 'Int'>
    readonly responseTime: FieldRef<"ApiKeyUsage", 'Int'>
    readonly createdAt: FieldRef<"ApiKeyUsage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiKeyUsage findUnique
   */
  export type ApiKeyUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyUsage
     */
    select?: ApiKeyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyUsage
     */
    omit?: ApiKeyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyUsageInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeyUsage to fetch.
     */
    where: ApiKeyUsageWhereUniqueInput
  }

  /**
   * ApiKeyUsage findUniqueOrThrow
   */
  export type ApiKeyUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyUsage
     */
    select?: ApiKeyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyUsage
     */
    omit?: ApiKeyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyUsageInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeyUsage to fetch.
     */
    where: ApiKeyUsageWhereUniqueInput
  }

  /**
   * ApiKeyUsage findFirst
   */
  export type ApiKeyUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyUsage
     */
    select?: ApiKeyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyUsage
     */
    omit?: ApiKeyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyUsageInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeyUsage to fetch.
     */
    where?: ApiKeyUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeyUsages to fetch.
     */
    orderBy?: ApiKeyUsageOrderByWithRelationInput | ApiKeyUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeyUsages.
     */
    cursor?: ApiKeyUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeyUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeyUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeyUsages.
     */
    distinct?: ApiKeyUsageScalarFieldEnum | ApiKeyUsageScalarFieldEnum[]
  }

  /**
   * ApiKeyUsage findFirstOrThrow
   */
  export type ApiKeyUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyUsage
     */
    select?: ApiKeyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyUsage
     */
    omit?: ApiKeyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyUsageInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeyUsage to fetch.
     */
    where?: ApiKeyUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeyUsages to fetch.
     */
    orderBy?: ApiKeyUsageOrderByWithRelationInput | ApiKeyUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeyUsages.
     */
    cursor?: ApiKeyUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeyUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeyUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeyUsages.
     */
    distinct?: ApiKeyUsageScalarFieldEnum | ApiKeyUsageScalarFieldEnum[]
  }

  /**
   * ApiKeyUsage findMany
   */
  export type ApiKeyUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyUsage
     */
    select?: ApiKeyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyUsage
     */
    omit?: ApiKeyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyUsageInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeyUsages to fetch.
     */
    where?: ApiKeyUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeyUsages to fetch.
     */
    orderBy?: ApiKeyUsageOrderByWithRelationInput | ApiKeyUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeyUsages.
     */
    cursor?: ApiKeyUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeyUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeyUsages.
     */
    skip?: number
    distinct?: ApiKeyUsageScalarFieldEnum | ApiKeyUsageScalarFieldEnum[]
  }

  /**
   * ApiKeyUsage create
   */
  export type ApiKeyUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyUsage
     */
    select?: ApiKeyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyUsage
     */
    omit?: ApiKeyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyUsageInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKeyUsage.
     */
    data: XOR<ApiKeyUsageCreateInput, ApiKeyUsageUncheckedCreateInput>
  }

  /**
   * ApiKeyUsage createMany
   */
  export type ApiKeyUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeyUsages.
     */
    data: ApiKeyUsageCreateManyInput | ApiKeyUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKeyUsage createManyAndReturn
   */
  export type ApiKeyUsageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyUsage
     */
    select?: ApiKeyUsageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyUsage
     */
    omit?: ApiKeyUsageOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeyUsages.
     */
    data: ApiKeyUsageCreateManyInput | ApiKeyUsageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyUsageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKeyUsage update
   */
  export type ApiKeyUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyUsage
     */
    select?: ApiKeyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyUsage
     */
    omit?: ApiKeyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyUsageInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKeyUsage.
     */
    data: XOR<ApiKeyUsageUpdateInput, ApiKeyUsageUncheckedUpdateInput>
    /**
     * Choose, which ApiKeyUsage to update.
     */
    where: ApiKeyUsageWhereUniqueInput
  }

  /**
   * ApiKeyUsage updateMany
   */
  export type ApiKeyUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeyUsages.
     */
    data: XOR<ApiKeyUsageUpdateManyMutationInput, ApiKeyUsageUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeyUsages to update
     */
    where?: ApiKeyUsageWhereInput
    /**
     * Limit how many ApiKeyUsages to update.
     */
    limit?: number
  }

  /**
   * ApiKeyUsage updateManyAndReturn
   */
  export type ApiKeyUsageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyUsage
     */
    select?: ApiKeyUsageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyUsage
     */
    omit?: ApiKeyUsageOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeyUsages.
     */
    data: XOR<ApiKeyUsageUpdateManyMutationInput, ApiKeyUsageUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeyUsages to update
     */
    where?: ApiKeyUsageWhereInput
    /**
     * Limit how many ApiKeyUsages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyUsageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKeyUsage upsert
   */
  export type ApiKeyUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyUsage
     */
    select?: ApiKeyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyUsage
     */
    omit?: ApiKeyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyUsageInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKeyUsage to update in case it exists.
     */
    where: ApiKeyUsageWhereUniqueInput
    /**
     * In case the ApiKeyUsage found by the `where` argument doesn't exist, create a new ApiKeyUsage with this data.
     */
    create: XOR<ApiKeyUsageCreateInput, ApiKeyUsageUncheckedCreateInput>
    /**
     * In case the ApiKeyUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUsageUpdateInput, ApiKeyUsageUncheckedUpdateInput>
  }

  /**
   * ApiKeyUsage delete
   */
  export type ApiKeyUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyUsage
     */
    select?: ApiKeyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyUsage
     */
    omit?: ApiKeyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyUsageInclude<ExtArgs> | null
    /**
     * Filter which ApiKeyUsage to delete.
     */
    where: ApiKeyUsageWhereUniqueInput
  }

  /**
   * ApiKeyUsage deleteMany
   */
  export type ApiKeyUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeyUsages to delete
     */
    where?: ApiKeyUsageWhereInput
    /**
     * Limit how many ApiKeyUsages to delete.
     */
    limit?: number
  }

  /**
   * ApiKeyUsage without action
   */
  export type ApiKeyUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyUsage
     */
    select?: ApiKeyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyUsage
     */
    omit?: ApiKeyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyUsageInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    lastLogin: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    isActive: boolean
    createdAt: Date
    updatedAt: Date | null
    lastLogin: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    apiKeys?: boolean | User$apiKeysArgs<ExtArgs>
    emailLogs?: boolean | User$emailLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "role" | "isActive" | "createdAt" | "updatedAt" | "lastLogin", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKeys?: boolean | User$apiKeysArgs<ExtArgs>
    emailLogs?: boolean | User$emailLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      apiKeys: Prisma.$ApiKeyPayload<ExtArgs>[]
      emailLogs: Prisma.$EmailLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      role: $Enums.UserRole
      isActive: boolean
      createdAt: Date
      updatedAt: Date | null
      lastLogin: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apiKeys<T extends User$apiKeysArgs<ExtArgs> = {}>(args?: Subset<T, User$apiKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emailLogs<T extends User$emailLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$emailLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.apiKeys
   */
  export type User$apiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    cursor?: ApiKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * User.emailLogs
   */
  export type User$emailLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailLogInclude<ExtArgs> | null
    where?: EmailLogWhereInput
    orderBy?: EmailLogOrderByWithRelationInput | EmailLogOrderByWithRelationInput[]
    cursor?: EmailLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailLogScalarFieldEnum | EmailLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EmailLogScalarFieldEnum: {
    id: 'id',
    to: 'to',
    subject: 'subject',
    template: 'template',
    variables: 'variables',
    status: 'status',
    provider: 'provider',
    errorMessage: 'errorMessage',
    sentAt: 'sentAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    attempts: 'attempts',
    maxAttempts: 'maxAttempts',
    jobId: 'jobId',
    userId: 'userId'
  };

  export type EmailLogScalarFieldEnum = (typeof EmailLogScalarFieldEnum)[keyof typeof EmailLogScalarFieldEnum]


  export const SystemConfigScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    type: 'type',
    description: 'description',
    category: 'category',
    isActive: 'isActive',
    isPublic: 'isPublic',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy'
  };

  export type SystemConfigScalarFieldEnum = (typeof SystemConfigScalarFieldEnum)[keyof typeof SystemConfigScalarFieldEnum]


  export const ConfigHistoryScalarFieldEnum: {
    id: 'id',
    configKey: 'configKey',
    oldValue: 'oldValue',
    newValue: 'newValue',
    changedBy: 'changedBy',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type ConfigHistoryScalarFieldEnum = (typeof ConfigHistoryScalarFieldEnum)[keyof typeof ConfigHistoryScalarFieldEnum]


  export const AllowedIPScalarFieldEnum: {
    id: 'id',
    ipAddress: 'ipAddress',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastUsed: 'lastUsed',
    usageCount: 'usageCount',
    createdBy: 'createdBy'
  };

  export type AllowedIPScalarFieldEnum = (typeof AllowedIPScalarFieldEnum)[keyof typeof AllowedIPScalarFieldEnum]


  export const BlockedDomainScalarFieldEnum: {
    id: 'id',
    domain: 'domain',
    reason: 'reason',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    blockedBy: 'blockedBy'
  };

  export type BlockedDomainScalarFieldEnum = (typeof BlockedDomainScalarFieldEnum)[keyof typeof BlockedDomainScalarFieldEnum]


  export const EmailTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    subject: 'subject',
    content: 'content',
    description: 'description',
    variables: 'variables',
    isActive: 'isActive',
    version: 'version',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy'
  };

  export type EmailTemplateScalarFieldEnum = (typeof EmailTemplateScalarFieldEnum)[keyof typeof EmailTemplateScalarFieldEnum]


  export const TemplateHistoryScalarFieldEnum: {
    id: 'id',
    templateId: 'templateId',
    name: 'name',
    subject: 'subject',
    content: 'content',
    version: 'version',
    changedBy: 'changedBy',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type TemplateHistoryScalarFieldEnum = (typeof TemplateHistoryScalarFieldEnum)[keyof typeof TemplateHistoryScalarFieldEnum]


  export const WebhookConfigScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    secret: 'secret',
    events: 'events',
    isActive: 'isActive',
    retryCount: 'retryCount',
    timeout: 'timeout',
    headers: 'headers',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastUsed: 'lastUsed',
    successCount: 'successCount',
    failureCount: 'failureCount'
  };

  export type WebhookConfigScalarFieldEnum = (typeof WebhookConfigScalarFieldEnum)[keyof typeof WebhookConfigScalarFieldEnum]


  export const WebhookLogScalarFieldEnum: {
    id: 'id',
    webhookId: 'webhookId',
    event: 'event',
    url: 'url',
    payload: 'payload',
    response: 'response',
    statusCode: 'statusCode',
    success: 'success',
    errorMessage: 'errorMessage',
    responseTime: 'responseTime',
    createdAt: 'createdAt'
  };

  export type WebhookLogScalarFieldEnum = (typeof WebhookLogScalarFieldEnum)[keyof typeof WebhookLogScalarFieldEnum]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    hashedKey: 'hashedKey',
    keyPreview: 'keyPreview',
    isActive: 'isActive',
    expiresAt: 'expiresAt',
    lastUsed: 'lastUsed',
    usageCount: 'usageCount',
    createdAt: 'createdAt'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const ApiKeyUsageScalarFieldEnum: {
    id: 'id',
    apiKeyId: 'apiKeyId',
    endpoint: 'endpoint',
    method: 'method',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    statusCode: 'statusCode',
    responseTime: 'responseTime',
    createdAt: 'createdAt'
  };

  export type ApiKeyUsageScalarFieldEnum = (typeof ApiKeyUsageScalarFieldEnum)[keyof typeof ApiKeyUsageScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastLogin: 'lastLogin'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'EmailStatus'
   */
  export type EnumEmailStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmailStatus'>
    


  /**
   * Reference to a field of type 'EmailStatus[]'
   */
  export type ListEnumEmailStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmailStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'SystemConfigType'
   */
  export type EnumSystemConfigTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SystemConfigType'>
    


  /**
   * Reference to a field of type 'SystemConfigType[]'
   */
  export type ListEnumSystemConfigTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SystemConfigType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type EmailLogWhereInput = {
    AND?: EmailLogWhereInput | EmailLogWhereInput[]
    OR?: EmailLogWhereInput[]
    NOT?: EmailLogWhereInput | EmailLogWhereInput[]
    id?: UuidFilter<"EmailLog"> | string
    to?: StringFilter<"EmailLog"> | string
    subject?: StringFilter<"EmailLog"> | string
    template?: StringFilter<"EmailLog"> | string
    variables?: JsonNullableFilter<"EmailLog">
    status?: EnumEmailStatusFilter<"EmailLog"> | $Enums.EmailStatus
    provider?: StringNullableFilter<"EmailLog"> | string | null
    errorMessage?: StringNullableFilter<"EmailLog"> | string | null
    sentAt?: DateTimeNullableFilter<"EmailLog"> | Date | string | null
    createdAt?: DateTimeFilter<"EmailLog"> | Date | string
    updatedAt?: DateTimeNullableFilter<"EmailLog"> | Date | string | null
    attempts?: IntFilter<"EmailLog"> | number
    maxAttempts?: IntFilter<"EmailLog"> | number
    jobId?: StringNullableFilter<"EmailLog"> | string | null
    userId?: UuidNullableFilter<"EmailLog"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type EmailLogOrderByWithRelationInput = {
    id?: SortOrder
    to?: SortOrder
    subject?: SortOrder
    template?: SortOrder
    variables?: SortOrderInput | SortOrder
    status?: SortOrder
    provider?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    jobId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type EmailLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    jobId?: string
    AND?: EmailLogWhereInput | EmailLogWhereInput[]
    OR?: EmailLogWhereInput[]
    NOT?: EmailLogWhereInput | EmailLogWhereInput[]
    to?: StringFilter<"EmailLog"> | string
    subject?: StringFilter<"EmailLog"> | string
    template?: StringFilter<"EmailLog"> | string
    variables?: JsonNullableFilter<"EmailLog">
    status?: EnumEmailStatusFilter<"EmailLog"> | $Enums.EmailStatus
    provider?: StringNullableFilter<"EmailLog"> | string | null
    errorMessage?: StringNullableFilter<"EmailLog"> | string | null
    sentAt?: DateTimeNullableFilter<"EmailLog"> | Date | string | null
    createdAt?: DateTimeFilter<"EmailLog"> | Date | string
    updatedAt?: DateTimeNullableFilter<"EmailLog"> | Date | string | null
    attempts?: IntFilter<"EmailLog"> | number
    maxAttempts?: IntFilter<"EmailLog"> | number
    userId?: UuidNullableFilter<"EmailLog"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "jobId">

  export type EmailLogOrderByWithAggregationInput = {
    id?: SortOrder
    to?: SortOrder
    subject?: SortOrder
    template?: SortOrder
    variables?: SortOrderInput | SortOrder
    status?: SortOrder
    provider?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    jobId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: EmailLogCountOrderByAggregateInput
    _avg?: EmailLogAvgOrderByAggregateInput
    _max?: EmailLogMaxOrderByAggregateInput
    _min?: EmailLogMinOrderByAggregateInput
    _sum?: EmailLogSumOrderByAggregateInput
  }

  export type EmailLogScalarWhereWithAggregatesInput = {
    AND?: EmailLogScalarWhereWithAggregatesInput | EmailLogScalarWhereWithAggregatesInput[]
    OR?: EmailLogScalarWhereWithAggregatesInput[]
    NOT?: EmailLogScalarWhereWithAggregatesInput | EmailLogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"EmailLog"> | string
    to?: StringWithAggregatesFilter<"EmailLog"> | string
    subject?: StringWithAggregatesFilter<"EmailLog"> | string
    template?: StringWithAggregatesFilter<"EmailLog"> | string
    variables?: JsonNullableWithAggregatesFilter<"EmailLog">
    status?: EnumEmailStatusWithAggregatesFilter<"EmailLog"> | $Enums.EmailStatus
    provider?: StringNullableWithAggregatesFilter<"EmailLog"> | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"EmailLog"> | string | null
    sentAt?: DateTimeNullableWithAggregatesFilter<"EmailLog"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmailLog"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"EmailLog"> | Date | string | null
    attempts?: IntWithAggregatesFilter<"EmailLog"> | number
    maxAttempts?: IntWithAggregatesFilter<"EmailLog"> | number
    jobId?: StringNullableWithAggregatesFilter<"EmailLog"> | string | null
    userId?: UuidNullableWithAggregatesFilter<"EmailLog"> | string | null
  }

  export type SystemConfigWhereInput = {
    AND?: SystemConfigWhereInput | SystemConfigWhereInput[]
    OR?: SystemConfigWhereInput[]
    NOT?: SystemConfigWhereInput | SystemConfigWhereInput[]
    id?: UuidFilter<"SystemConfig"> | string
    key?: StringFilter<"SystemConfig"> | string
    value?: StringFilter<"SystemConfig"> | string
    type?: EnumSystemConfigTypeFilter<"SystemConfig"> | $Enums.SystemConfigType
    description?: StringNullableFilter<"SystemConfig"> | string | null
    category?: StringFilter<"SystemConfig"> | string
    isActive?: BoolFilter<"SystemConfig"> | boolean
    isPublic?: BoolFilter<"SystemConfig"> | boolean
    createdAt?: DateTimeFilter<"SystemConfig"> | Date | string
    updatedAt?: DateTimeNullableFilter<"SystemConfig"> | Date | string | null
    createdBy?: StringNullableFilter<"SystemConfig"> | string | null
    updatedBy?: StringNullableFilter<"SystemConfig"> | string | null
  }

  export type SystemConfigOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    isActive?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
  }

  export type SystemConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: SystemConfigWhereInput | SystemConfigWhereInput[]
    OR?: SystemConfigWhereInput[]
    NOT?: SystemConfigWhereInput | SystemConfigWhereInput[]
    value?: StringFilter<"SystemConfig"> | string
    type?: EnumSystemConfigTypeFilter<"SystemConfig"> | $Enums.SystemConfigType
    description?: StringNullableFilter<"SystemConfig"> | string | null
    category?: StringFilter<"SystemConfig"> | string
    isActive?: BoolFilter<"SystemConfig"> | boolean
    isPublic?: BoolFilter<"SystemConfig"> | boolean
    createdAt?: DateTimeFilter<"SystemConfig"> | Date | string
    updatedAt?: DateTimeNullableFilter<"SystemConfig"> | Date | string | null
    createdBy?: StringNullableFilter<"SystemConfig"> | string | null
    updatedBy?: StringNullableFilter<"SystemConfig"> | string | null
  }, "id" | "key">

  export type SystemConfigOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    isActive?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    _count?: SystemConfigCountOrderByAggregateInput
    _max?: SystemConfigMaxOrderByAggregateInput
    _min?: SystemConfigMinOrderByAggregateInput
  }

  export type SystemConfigScalarWhereWithAggregatesInput = {
    AND?: SystemConfigScalarWhereWithAggregatesInput | SystemConfigScalarWhereWithAggregatesInput[]
    OR?: SystemConfigScalarWhereWithAggregatesInput[]
    NOT?: SystemConfigScalarWhereWithAggregatesInput | SystemConfigScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SystemConfig"> | string
    key?: StringWithAggregatesFilter<"SystemConfig"> | string
    value?: StringWithAggregatesFilter<"SystemConfig"> | string
    type?: EnumSystemConfigTypeWithAggregatesFilter<"SystemConfig"> | $Enums.SystemConfigType
    description?: StringNullableWithAggregatesFilter<"SystemConfig"> | string | null
    category?: StringWithAggregatesFilter<"SystemConfig"> | string
    isActive?: BoolWithAggregatesFilter<"SystemConfig"> | boolean
    isPublic?: BoolWithAggregatesFilter<"SystemConfig"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SystemConfig"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"SystemConfig"> | Date | string | null
    createdBy?: StringNullableWithAggregatesFilter<"SystemConfig"> | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"SystemConfig"> | string | null
  }

  export type ConfigHistoryWhereInput = {
    AND?: ConfigHistoryWhereInput | ConfigHistoryWhereInput[]
    OR?: ConfigHistoryWhereInput[]
    NOT?: ConfigHistoryWhereInput | ConfigHistoryWhereInput[]
    id?: UuidFilter<"ConfigHistory"> | string
    configKey?: StringFilter<"ConfigHistory"> | string
    oldValue?: StringNullableFilter<"ConfigHistory"> | string | null
    newValue?: StringFilter<"ConfigHistory"> | string
    changedBy?: StringNullableFilter<"ConfigHistory"> | string | null
    reason?: StringNullableFilter<"ConfigHistory"> | string | null
    createdAt?: DateTimeFilter<"ConfigHistory"> | Date | string
  }

  export type ConfigHistoryOrderByWithRelationInput = {
    id?: SortOrder
    configKey?: SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrder
    changedBy?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ConfigHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConfigHistoryWhereInput | ConfigHistoryWhereInput[]
    OR?: ConfigHistoryWhereInput[]
    NOT?: ConfigHistoryWhereInput | ConfigHistoryWhereInput[]
    configKey?: StringFilter<"ConfigHistory"> | string
    oldValue?: StringNullableFilter<"ConfigHistory"> | string | null
    newValue?: StringFilter<"ConfigHistory"> | string
    changedBy?: StringNullableFilter<"ConfigHistory"> | string | null
    reason?: StringNullableFilter<"ConfigHistory"> | string | null
    createdAt?: DateTimeFilter<"ConfigHistory"> | Date | string
  }, "id">

  export type ConfigHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    configKey?: SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrder
    changedBy?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ConfigHistoryCountOrderByAggregateInput
    _max?: ConfigHistoryMaxOrderByAggregateInput
    _min?: ConfigHistoryMinOrderByAggregateInput
  }

  export type ConfigHistoryScalarWhereWithAggregatesInput = {
    AND?: ConfigHistoryScalarWhereWithAggregatesInput | ConfigHistoryScalarWhereWithAggregatesInput[]
    OR?: ConfigHistoryScalarWhereWithAggregatesInput[]
    NOT?: ConfigHistoryScalarWhereWithAggregatesInput | ConfigHistoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ConfigHistory"> | string
    configKey?: StringWithAggregatesFilter<"ConfigHistory"> | string
    oldValue?: StringNullableWithAggregatesFilter<"ConfigHistory"> | string | null
    newValue?: StringWithAggregatesFilter<"ConfigHistory"> | string
    changedBy?: StringNullableWithAggregatesFilter<"ConfigHistory"> | string | null
    reason?: StringNullableWithAggregatesFilter<"ConfigHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ConfigHistory"> | Date | string
  }

  export type AllowedIPWhereInput = {
    AND?: AllowedIPWhereInput | AllowedIPWhereInput[]
    OR?: AllowedIPWhereInput[]
    NOT?: AllowedIPWhereInput | AllowedIPWhereInput[]
    id?: UuidFilter<"AllowedIP"> | string
    ipAddress?: StringFilter<"AllowedIP"> | string
    description?: StringNullableFilter<"AllowedIP"> | string | null
    isActive?: BoolFilter<"AllowedIP"> | boolean
    createdAt?: DateTimeFilter<"AllowedIP"> | Date | string
    updatedAt?: DateTimeNullableFilter<"AllowedIP"> | Date | string | null
    lastUsed?: DateTimeNullableFilter<"AllowedIP"> | Date | string | null
    usageCount?: IntFilter<"AllowedIP"> | number
    createdBy?: StringNullableFilter<"AllowedIP"> | string | null
  }

  export type AllowedIPOrderByWithRelationInput = {
    id?: SortOrder
    ipAddress?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    lastUsed?: SortOrderInput | SortOrder
    usageCount?: SortOrder
    createdBy?: SortOrderInput | SortOrder
  }

  export type AllowedIPWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ipAddress?: string
    AND?: AllowedIPWhereInput | AllowedIPWhereInput[]
    OR?: AllowedIPWhereInput[]
    NOT?: AllowedIPWhereInput | AllowedIPWhereInput[]
    description?: StringNullableFilter<"AllowedIP"> | string | null
    isActive?: BoolFilter<"AllowedIP"> | boolean
    createdAt?: DateTimeFilter<"AllowedIP"> | Date | string
    updatedAt?: DateTimeNullableFilter<"AllowedIP"> | Date | string | null
    lastUsed?: DateTimeNullableFilter<"AllowedIP"> | Date | string | null
    usageCount?: IntFilter<"AllowedIP"> | number
    createdBy?: StringNullableFilter<"AllowedIP"> | string | null
  }, "id" | "ipAddress">

  export type AllowedIPOrderByWithAggregationInput = {
    id?: SortOrder
    ipAddress?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    lastUsed?: SortOrderInput | SortOrder
    usageCount?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    _count?: AllowedIPCountOrderByAggregateInput
    _avg?: AllowedIPAvgOrderByAggregateInput
    _max?: AllowedIPMaxOrderByAggregateInput
    _min?: AllowedIPMinOrderByAggregateInput
    _sum?: AllowedIPSumOrderByAggregateInput
  }

  export type AllowedIPScalarWhereWithAggregatesInput = {
    AND?: AllowedIPScalarWhereWithAggregatesInput | AllowedIPScalarWhereWithAggregatesInput[]
    OR?: AllowedIPScalarWhereWithAggregatesInput[]
    NOT?: AllowedIPScalarWhereWithAggregatesInput | AllowedIPScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"AllowedIP"> | string
    ipAddress?: StringWithAggregatesFilter<"AllowedIP"> | string
    description?: StringNullableWithAggregatesFilter<"AllowedIP"> | string | null
    isActive?: BoolWithAggregatesFilter<"AllowedIP"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AllowedIP"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"AllowedIP"> | Date | string | null
    lastUsed?: DateTimeNullableWithAggregatesFilter<"AllowedIP"> | Date | string | null
    usageCount?: IntWithAggregatesFilter<"AllowedIP"> | number
    createdBy?: StringNullableWithAggregatesFilter<"AllowedIP"> | string | null
  }

  export type BlockedDomainWhereInput = {
    AND?: BlockedDomainWhereInput | BlockedDomainWhereInput[]
    OR?: BlockedDomainWhereInput[]
    NOT?: BlockedDomainWhereInput | BlockedDomainWhereInput[]
    id?: UuidFilter<"BlockedDomain"> | string
    domain?: StringFilter<"BlockedDomain"> | string
    reason?: StringNullableFilter<"BlockedDomain"> | string | null
    isActive?: BoolFilter<"BlockedDomain"> | boolean
    createdAt?: DateTimeFilter<"BlockedDomain"> | Date | string
    updatedAt?: DateTimeNullableFilter<"BlockedDomain"> | Date | string | null
    blockedBy?: StringNullableFilter<"BlockedDomain"> | string | null
  }

  export type BlockedDomainOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    reason?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    blockedBy?: SortOrderInput | SortOrder
  }

  export type BlockedDomainWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    domain?: string
    AND?: BlockedDomainWhereInput | BlockedDomainWhereInput[]
    OR?: BlockedDomainWhereInput[]
    NOT?: BlockedDomainWhereInput | BlockedDomainWhereInput[]
    reason?: StringNullableFilter<"BlockedDomain"> | string | null
    isActive?: BoolFilter<"BlockedDomain"> | boolean
    createdAt?: DateTimeFilter<"BlockedDomain"> | Date | string
    updatedAt?: DateTimeNullableFilter<"BlockedDomain"> | Date | string | null
    blockedBy?: StringNullableFilter<"BlockedDomain"> | string | null
  }, "id" | "domain">

  export type BlockedDomainOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    reason?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    blockedBy?: SortOrderInput | SortOrder
    _count?: BlockedDomainCountOrderByAggregateInput
    _max?: BlockedDomainMaxOrderByAggregateInput
    _min?: BlockedDomainMinOrderByAggregateInput
  }

  export type BlockedDomainScalarWhereWithAggregatesInput = {
    AND?: BlockedDomainScalarWhereWithAggregatesInput | BlockedDomainScalarWhereWithAggregatesInput[]
    OR?: BlockedDomainScalarWhereWithAggregatesInput[]
    NOT?: BlockedDomainScalarWhereWithAggregatesInput | BlockedDomainScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"BlockedDomain"> | string
    domain?: StringWithAggregatesFilter<"BlockedDomain"> | string
    reason?: StringNullableWithAggregatesFilter<"BlockedDomain"> | string | null
    isActive?: BoolWithAggregatesFilter<"BlockedDomain"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"BlockedDomain"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"BlockedDomain"> | Date | string | null
    blockedBy?: StringNullableWithAggregatesFilter<"BlockedDomain"> | string | null
  }

  export type EmailTemplateWhereInput = {
    AND?: EmailTemplateWhereInput | EmailTemplateWhereInput[]
    OR?: EmailTemplateWhereInput[]
    NOT?: EmailTemplateWhereInput | EmailTemplateWhereInput[]
    id?: UuidFilter<"EmailTemplate"> | string
    name?: StringFilter<"EmailTemplate"> | string
    subject?: StringFilter<"EmailTemplate"> | string
    content?: StringFilter<"EmailTemplate"> | string
    description?: StringNullableFilter<"EmailTemplate"> | string | null
    variables?: JsonNullableFilter<"EmailTemplate">
    isActive?: BoolFilter<"EmailTemplate"> | boolean
    version?: IntFilter<"EmailTemplate"> | number
    createdAt?: DateTimeFilter<"EmailTemplate"> | Date | string
    updatedAt?: DateTimeNullableFilter<"EmailTemplate"> | Date | string | null
    createdBy?: StringNullableFilter<"EmailTemplate"> | string | null
    updatedBy?: StringNullableFilter<"EmailTemplate"> | string | null
    history?: TemplateHistoryListRelationFilter
  }

  export type EmailTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    description?: SortOrderInput | SortOrder
    variables?: SortOrderInput | SortOrder
    isActive?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    history?: TemplateHistoryOrderByRelationAggregateInput
  }

  export type EmailTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: EmailTemplateWhereInput | EmailTemplateWhereInput[]
    OR?: EmailTemplateWhereInput[]
    NOT?: EmailTemplateWhereInput | EmailTemplateWhereInput[]
    subject?: StringFilter<"EmailTemplate"> | string
    content?: StringFilter<"EmailTemplate"> | string
    description?: StringNullableFilter<"EmailTemplate"> | string | null
    variables?: JsonNullableFilter<"EmailTemplate">
    isActive?: BoolFilter<"EmailTemplate"> | boolean
    version?: IntFilter<"EmailTemplate"> | number
    createdAt?: DateTimeFilter<"EmailTemplate"> | Date | string
    updatedAt?: DateTimeNullableFilter<"EmailTemplate"> | Date | string | null
    createdBy?: StringNullableFilter<"EmailTemplate"> | string | null
    updatedBy?: StringNullableFilter<"EmailTemplate"> | string | null
    history?: TemplateHistoryListRelationFilter
  }, "id" | "name">

  export type EmailTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    description?: SortOrderInput | SortOrder
    variables?: SortOrderInput | SortOrder
    isActive?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    _count?: EmailTemplateCountOrderByAggregateInput
    _avg?: EmailTemplateAvgOrderByAggregateInput
    _max?: EmailTemplateMaxOrderByAggregateInput
    _min?: EmailTemplateMinOrderByAggregateInput
    _sum?: EmailTemplateSumOrderByAggregateInput
  }

  export type EmailTemplateScalarWhereWithAggregatesInput = {
    AND?: EmailTemplateScalarWhereWithAggregatesInput | EmailTemplateScalarWhereWithAggregatesInput[]
    OR?: EmailTemplateScalarWhereWithAggregatesInput[]
    NOT?: EmailTemplateScalarWhereWithAggregatesInput | EmailTemplateScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"EmailTemplate"> | string
    name?: StringWithAggregatesFilter<"EmailTemplate"> | string
    subject?: StringWithAggregatesFilter<"EmailTemplate"> | string
    content?: StringWithAggregatesFilter<"EmailTemplate"> | string
    description?: StringNullableWithAggregatesFilter<"EmailTemplate"> | string | null
    variables?: JsonNullableWithAggregatesFilter<"EmailTemplate">
    isActive?: BoolWithAggregatesFilter<"EmailTemplate"> | boolean
    version?: IntWithAggregatesFilter<"EmailTemplate"> | number
    createdAt?: DateTimeWithAggregatesFilter<"EmailTemplate"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"EmailTemplate"> | Date | string | null
    createdBy?: StringNullableWithAggregatesFilter<"EmailTemplate"> | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"EmailTemplate"> | string | null
  }

  export type TemplateHistoryWhereInput = {
    AND?: TemplateHistoryWhereInput | TemplateHistoryWhereInput[]
    OR?: TemplateHistoryWhereInput[]
    NOT?: TemplateHistoryWhereInput | TemplateHistoryWhereInput[]
    id?: UuidFilter<"TemplateHistory"> | string
    templateId?: UuidFilter<"TemplateHistory"> | string
    name?: StringFilter<"TemplateHistory"> | string
    subject?: StringFilter<"TemplateHistory"> | string
    content?: StringFilter<"TemplateHistory"> | string
    version?: IntFilter<"TemplateHistory"> | number
    changedBy?: StringNullableFilter<"TemplateHistory"> | string | null
    reason?: StringNullableFilter<"TemplateHistory"> | string | null
    createdAt?: DateTimeFilter<"TemplateHistory"> | Date | string
    template?: XOR<EmailTemplateScalarRelationFilter, EmailTemplateWhereInput>
  }

  export type TemplateHistoryOrderByWithRelationInput = {
    id?: SortOrder
    templateId?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    version?: SortOrder
    changedBy?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    template?: EmailTemplateOrderByWithRelationInput
  }

  export type TemplateHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TemplateHistoryWhereInput | TemplateHistoryWhereInput[]
    OR?: TemplateHistoryWhereInput[]
    NOT?: TemplateHistoryWhereInput | TemplateHistoryWhereInput[]
    templateId?: UuidFilter<"TemplateHistory"> | string
    name?: StringFilter<"TemplateHistory"> | string
    subject?: StringFilter<"TemplateHistory"> | string
    content?: StringFilter<"TemplateHistory"> | string
    version?: IntFilter<"TemplateHistory"> | number
    changedBy?: StringNullableFilter<"TemplateHistory"> | string | null
    reason?: StringNullableFilter<"TemplateHistory"> | string | null
    createdAt?: DateTimeFilter<"TemplateHistory"> | Date | string
    template?: XOR<EmailTemplateScalarRelationFilter, EmailTemplateWhereInput>
  }, "id">

  export type TemplateHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    templateId?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    version?: SortOrder
    changedBy?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TemplateHistoryCountOrderByAggregateInput
    _avg?: TemplateHistoryAvgOrderByAggregateInput
    _max?: TemplateHistoryMaxOrderByAggregateInput
    _min?: TemplateHistoryMinOrderByAggregateInput
    _sum?: TemplateHistorySumOrderByAggregateInput
  }

  export type TemplateHistoryScalarWhereWithAggregatesInput = {
    AND?: TemplateHistoryScalarWhereWithAggregatesInput | TemplateHistoryScalarWhereWithAggregatesInput[]
    OR?: TemplateHistoryScalarWhereWithAggregatesInput[]
    NOT?: TemplateHistoryScalarWhereWithAggregatesInput | TemplateHistoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TemplateHistory"> | string
    templateId?: UuidWithAggregatesFilter<"TemplateHistory"> | string
    name?: StringWithAggregatesFilter<"TemplateHistory"> | string
    subject?: StringWithAggregatesFilter<"TemplateHistory"> | string
    content?: StringWithAggregatesFilter<"TemplateHistory"> | string
    version?: IntWithAggregatesFilter<"TemplateHistory"> | number
    changedBy?: StringNullableWithAggregatesFilter<"TemplateHistory"> | string | null
    reason?: StringNullableWithAggregatesFilter<"TemplateHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TemplateHistory"> | Date | string
  }

  export type WebhookConfigWhereInput = {
    AND?: WebhookConfigWhereInput | WebhookConfigWhereInput[]
    OR?: WebhookConfigWhereInput[]
    NOT?: WebhookConfigWhereInput | WebhookConfigWhereInput[]
    id?: UuidFilter<"WebhookConfig"> | string
    name?: StringFilter<"WebhookConfig"> | string
    url?: StringFilter<"WebhookConfig"> | string
    secret?: StringNullableFilter<"WebhookConfig"> | string | null
    events?: StringNullableListFilter<"WebhookConfig">
    isActive?: BoolFilter<"WebhookConfig"> | boolean
    retryCount?: IntFilter<"WebhookConfig"> | number
    timeout?: IntFilter<"WebhookConfig"> | number
    headers?: JsonNullableFilter<"WebhookConfig">
    createdAt?: DateTimeFilter<"WebhookConfig"> | Date | string
    updatedAt?: DateTimeNullableFilter<"WebhookConfig"> | Date | string | null
    lastUsed?: DateTimeNullableFilter<"WebhookConfig"> | Date | string | null
    successCount?: IntFilter<"WebhookConfig"> | number
    failureCount?: IntFilter<"WebhookConfig"> | number
    logs?: WebhookLogListRelationFilter
  }

  export type WebhookConfigOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    secret?: SortOrderInput | SortOrder
    events?: SortOrder
    isActive?: SortOrder
    retryCount?: SortOrder
    timeout?: SortOrder
    headers?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    lastUsed?: SortOrderInput | SortOrder
    successCount?: SortOrder
    failureCount?: SortOrder
    logs?: WebhookLogOrderByRelationAggregateInput
  }

  export type WebhookConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebhookConfigWhereInput | WebhookConfigWhereInput[]
    OR?: WebhookConfigWhereInput[]
    NOT?: WebhookConfigWhereInput | WebhookConfigWhereInput[]
    name?: StringFilter<"WebhookConfig"> | string
    url?: StringFilter<"WebhookConfig"> | string
    secret?: StringNullableFilter<"WebhookConfig"> | string | null
    events?: StringNullableListFilter<"WebhookConfig">
    isActive?: BoolFilter<"WebhookConfig"> | boolean
    retryCount?: IntFilter<"WebhookConfig"> | number
    timeout?: IntFilter<"WebhookConfig"> | number
    headers?: JsonNullableFilter<"WebhookConfig">
    createdAt?: DateTimeFilter<"WebhookConfig"> | Date | string
    updatedAt?: DateTimeNullableFilter<"WebhookConfig"> | Date | string | null
    lastUsed?: DateTimeNullableFilter<"WebhookConfig"> | Date | string | null
    successCount?: IntFilter<"WebhookConfig"> | number
    failureCount?: IntFilter<"WebhookConfig"> | number
    logs?: WebhookLogListRelationFilter
  }, "id">

  export type WebhookConfigOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    secret?: SortOrderInput | SortOrder
    events?: SortOrder
    isActive?: SortOrder
    retryCount?: SortOrder
    timeout?: SortOrder
    headers?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    lastUsed?: SortOrderInput | SortOrder
    successCount?: SortOrder
    failureCount?: SortOrder
    _count?: WebhookConfigCountOrderByAggregateInput
    _avg?: WebhookConfigAvgOrderByAggregateInput
    _max?: WebhookConfigMaxOrderByAggregateInput
    _min?: WebhookConfigMinOrderByAggregateInput
    _sum?: WebhookConfigSumOrderByAggregateInput
  }

  export type WebhookConfigScalarWhereWithAggregatesInput = {
    AND?: WebhookConfigScalarWhereWithAggregatesInput | WebhookConfigScalarWhereWithAggregatesInput[]
    OR?: WebhookConfigScalarWhereWithAggregatesInput[]
    NOT?: WebhookConfigScalarWhereWithAggregatesInput | WebhookConfigScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"WebhookConfig"> | string
    name?: StringWithAggregatesFilter<"WebhookConfig"> | string
    url?: StringWithAggregatesFilter<"WebhookConfig"> | string
    secret?: StringNullableWithAggregatesFilter<"WebhookConfig"> | string | null
    events?: StringNullableListFilter<"WebhookConfig">
    isActive?: BoolWithAggregatesFilter<"WebhookConfig"> | boolean
    retryCount?: IntWithAggregatesFilter<"WebhookConfig"> | number
    timeout?: IntWithAggregatesFilter<"WebhookConfig"> | number
    headers?: JsonNullableWithAggregatesFilter<"WebhookConfig">
    createdAt?: DateTimeWithAggregatesFilter<"WebhookConfig"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"WebhookConfig"> | Date | string | null
    lastUsed?: DateTimeNullableWithAggregatesFilter<"WebhookConfig"> | Date | string | null
    successCount?: IntWithAggregatesFilter<"WebhookConfig"> | number
    failureCount?: IntWithAggregatesFilter<"WebhookConfig"> | number
  }

  export type WebhookLogWhereInput = {
    AND?: WebhookLogWhereInput | WebhookLogWhereInput[]
    OR?: WebhookLogWhereInput[]
    NOT?: WebhookLogWhereInput | WebhookLogWhereInput[]
    id?: UuidFilter<"WebhookLog"> | string
    webhookId?: UuidFilter<"WebhookLog"> | string
    event?: StringFilter<"WebhookLog"> | string
    url?: StringFilter<"WebhookLog"> | string
    payload?: JsonFilter<"WebhookLog">
    response?: StringNullableFilter<"WebhookLog"> | string | null
    statusCode?: IntNullableFilter<"WebhookLog"> | number | null
    success?: BoolFilter<"WebhookLog"> | boolean
    errorMessage?: StringNullableFilter<"WebhookLog"> | string | null
    responseTime?: IntNullableFilter<"WebhookLog"> | number | null
    createdAt?: DateTimeFilter<"WebhookLog"> | Date | string
    webhook?: XOR<WebhookConfigScalarRelationFilter, WebhookConfigWhereInput>
  }

  export type WebhookLogOrderByWithRelationInput = {
    id?: SortOrder
    webhookId?: SortOrder
    event?: SortOrder
    url?: SortOrder
    payload?: SortOrder
    response?: SortOrderInput | SortOrder
    statusCode?: SortOrderInput | SortOrder
    success?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    responseTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    webhook?: WebhookConfigOrderByWithRelationInput
  }

  export type WebhookLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebhookLogWhereInput | WebhookLogWhereInput[]
    OR?: WebhookLogWhereInput[]
    NOT?: WebhookLogWhereInput | WebhookLogWhereInput[]
    webhookId?: UuidFilter<"WebhookLog"> | string
    event?: StringFilter<"WebhookLog"> | string
    url?: StringFilter<"WebhookLog"> | string
    payload?: JsonFilter<"WebhookLog">
    response?: StringNullableFilter<"WebhookLog"> | string | null
    statusCode?: IntNullableFilter<"WebhookLog"> | number | null
    success?: BoolFilter<"WebhookLog"> | boolean
    errorMessage?: StringNullableFilter<"WebhookLog"> | string | null
    responseTime?: IntNullableFilter<"WebhookLog"> | number | null
    createdAt?: DateTimeFilter<"WebhookLog"> | Date | string
    webhook?: XOR<WebhookConfigScalarRelationFilter, WebhookConfigWhereInput>
  }, "id">

  export type WebhookLogOrderByWithAggregationInput = {
    id?: SortOrder
    webhookId?: SortOrder
    event?: SortOrder
    url?: SortOrder
    payload?: SortOrder
    response?: SortOrderInput | SortOrder
    statusCode?: SortOrderInput | SortOrder
    success?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    responseTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WebhookLogCountOrderByAggregateInput
    _avg?: WebhookLogAvgOrderByAggregateInput
    _max?: WebhookLogMaxOrderByAggregateInput
    _min?: WebhookLogMinOrderByAggregateInput
    _sum?: WebhookLogSumOrderByAggregateInput
  }

  export type WebhookLogScalarWhereWithAggregatesInput = {
    AND?: WebhookLogScalarWhereWithAggregatesInput | WebhookLogScalarWhereWithAggregatesInput[]
    OR?: WebhookLogScalarWhereWithAggregatesInput[]
    NOT?: WebhookLogScalarWhereWithAggregatesInput | WebhookLogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"WebhookLog"> | string
    webhookId?: UuidWithAggregatesFilter<"WebhookLog"> | string
    event?: StringWithAggregatesFilter<"WebhookLog"> | string
    url?: StringWithAggregatesFilter<"WebhookLog"> | string
    payload?: JsonWithAggregatesFilter<"WebhookLog">
    response?: StringNullableWithAggregatesFilter<"WebhookLog"> | string | null
    statusCode?: IntNullableWithAggregatesFilter<"WebhookLog"> | number | null
    success?: BoolWithAggregatesFilter<"WebhookLog"> | boolean
    errorMessage?: StringNullableWithAggregatesFilter<"WebhookLog"> | string | null
    responseTime?: IntNullableWithAggregatesFilter<"WebhookLog"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"WebhookLog"> | Date | string
  }

  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: UuidFilter<"ApiKey"> | string
    userId?: UuidFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    hashedKey?: StringFilter<"ApiKey"> | string
    keyPreview?: StringFilter<"ApiKey"> | string
    isActive?: BoolFilter<"ApiKey"> | boolean
    expiresAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    lastUsed?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    usageCount?: IntFilter<"ApiKey"> | number
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    usage?: ApiKeyUsageListRelationFilter
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    hashedKey?: SortOrder
    keyPreview?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    lastUsed?: SortOrderInput | SortOrder
    usageCount?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    usage?: ApiKeyUsageOrderByRelationAggregateInput
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    userId?: UuidFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    hashedKey?: StringFilter<"ApiKey"> | string
    keyPreview?: StringFilter<"ApiKey"> | string
    isActive?: BoolFilter<"ApiKey"> | boolean
    expiresAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    lastUsed?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    usageCount?: IntFilter<"ApiKey"> | number
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    usage?: ApiKeyUsageListRelationFilter
  }, "id">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    hashedKey?: SortOrder
    keyPreview?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    lastUsed?: SortOrderInput | SortOrder
    usageCount?: SortOrder
    createdAt?: SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _avg?: ApiKeyAvgOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
    _sum?: ApiKeySumOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ApiKey"> | string
    userId?: UuidWithAggregatesFilter<"ApiKey"> | string
    name?: StringWithAggregatesFilter<"ApiKey"> | string
    hashedKey?: StringWithAggregatesFilter<"ApiKey"> | string
    keyPreview?: StringWithAggregatesFilter<"ApiKey"> | string
    isActive?: BoolWithAggregatesFilter<"ApiKey"> | boolean
    expiresAt?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    lastUsed?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    usageCount?: IntWithAggregatesFilter<"ApiKey"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
  }

  export type ApiKeyUsageWhereInput = {
    AND?: ApiKeyUsageWhereInput | ApiKeyUsageWhereInput[]
    OR?: ApiKeyUsageWhereInput[]
    NOT?: ApiKeyUsageWhereInput | ApiKeyUsageWhereInput[]
    id?: StringFilter<"ApiKeyUsage"> | string
    apiKeyId?: StringFilter<"ApiKeyUsage"> | string
    endpoint?: StringFilter<"ApiKeyUsage"> | string
    method?: StringFilter<"ApiKeyUsage"> | string
    ipAddress?: StringNullableFilter<"ApiKeyUsage"> | string | null
    userAgent?: StringNullableFilter<"ApiKeyUsage"> | string | null
    statusCode?: IntFilter<"ApiKeyUsage"> | number
    responseTime?: IntNullableFilter<"ApiKeyUsage"> | number | null
    createdAt?: DateTimeFilter<"ApiKeyUsage"> | Date | string
    apiKey?: XOR<ApiKeyScalarRelationFilter, ApiKeyWhereInput>
  }

  export type ApiKeyUsageOrderByWithRelationInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    statusCode?: SortOrder
    responseTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    apiKey?: ApiKeyOrderByWithRelationInput
  }

  export type ApiKeyUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApiKeyUsageWhereInput | ApiKeyUsageWhereInput[]
    OR?: ApiKeyUsageWhereInput[]
    NOT?: ApiKeyUsageWhereInput | ApiKeyUsageWhereInput[]
    apiKeyId?: StringFilter<"ApiKeyUsage"> | string
    endpoint?: StringFilter<"ApiKeyUsage"> | string
    method?: StringFilter<"ApiKeyUsage"> | string
    ipAddress?: StringNullableFilter<"ApiKeyUsage"> | string | null
    userAgent?: StringNullableFilter<"ApiKeyUsage"> | string | null
    statusCode?: IntFilter<"ApiKeyUsage"> | number
    responseTime?: IntNullableFilter<"ApiKeyUsage"> | number | null
    createdAt?: DateTimeFilter<"ApiKeyUsage"> | Date | string
    apiKey?: XOR<ApiKeyScalarRelationFilter, ApiKeyWhereInput>
  }, "id">

  export type ApiKeyUsageOrderByWithAggregationInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    statusCode?: SortOrder
    responseTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ApiKeyUsageCountOrderByAggregateInput
    _avg?: ApiKeyUsageAvgOrderByAggregateInput
    _max?: ApiKeyUsageMaxOrderByAggregateInput
    _min?: ApiKeyUsageMinOrderByAggregateInput
    _sum?: ApiKeyUsageSumOrderByAggregateInput
  }

  export type ApiKeyUsageScalarWhereWithAggregatesInput = {
    AND?: ApiKeyUsageScalarWhereWithAggregatesInput | ApiKeyUsageScalarWhereWithAggregatesInput[]
    OR?: ApiKeyUsageScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyUsageScalarWhereWithAggregatesInput | ApiKeyUsageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKeyUsage"> | string
    apiKeyId?: StringWithAggregatesFilter<"ApiKeyUsage"> | string
    endpoint?: StringWithAggregatesFilter<"ApiKeyUsage"> | string
    method?: StringWithAggregatesFilter<"ApiKeyUsage"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"ApiKeyUsage"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"ApiKeyUsage"> | string | null
    statusCode?: IntWithAggregatesFilter<"ApiKeyUsage"> | number
    responseTime?: IntNullableWithAggregatesFilter<"ApiKeyUsage"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ApiKeyUsage"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    apiKeys?: ApiKeyListRelationFilter
    emailLogs?: EmailLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    apiKeys?: ApiKeyOrderByRelationAggregateInput
    emailLogs?: EmailLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    apiKeys?: ApiKeyListRelationFilter
    emailLogs?: EmailLogListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type EmailLogCreateInput = {
    id?: string
    to: string
    subject: string
    template: string
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.EmailStatus
    provider?: string | null
    errorMessage?: string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    attempts?: number
    maxAttempts?: number
    jobId?: string | null
    User?: UserCreateNestedOneWithoutEmailLogsInput
  }

  export type EmailLogUncheckedCreateInput = {
    id?: string
    to: string
    subject: string
    template: string
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.EmailStatus
    provider?: string | null
    errorMessage?: string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    attempts?: number
    maxAttempts?: number
    jobId?: string | null
    userId?: string | null
  }

  export type EmailLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutEmailLogsNestedInput
  }

  export type EmailLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailLogCreateManyInput = {
    id?: string
    to: string
    subject: string
    template: string
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.EmailStatus
    provider?: string | null
    errorMessage?: string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    attempts?: number
    maxAttempts?: number
    jobId?: string | null
    userId?: string | null
  }

  export type EmailLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SystemConfigCreateInput = {
    id?: string
    key: string
    value: string
    type?: $Enums.SystemConfigType
    description?: string | null
    category: string
    isActive?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
  }

  export type SystemConfigUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    type?: $Enums.SystemConfigType
    description?: string | null
    category: string
    isActive?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
  }

  export type SystemConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: EnumSystemConfigTypeFieldUpdateOperationsInput | $Enums.SystemConfigType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SystemConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: EnumSystemConfigTypeFieldUpdateOperationsInput | $Enums.SystemConfigType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SystemConfigCreateManyInput = {
    id?: string
    key: string
    value: string
    type?: $Enums.SystemConfigType
    description?: string | null
    category: string
    isActive?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
  }

  export type SystemConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: EnumSystemConfigTypeFieldUpdateOperationsInput | $Enums.SystemConfigType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SystemConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: EnumSystemConfigTypeFieldUpdateOperationsInput | $Enums.SystemConfigType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConfigHistoryCreateInput = {
    id?: string
    configKey: string
    oldValue?: string | null
    newValue: string
    changedBy?: string | null
    reason?: string | null
    createdAt?: Date | string
  }

  export type ConfigHistoryUncheckedCreateInput = {
    id?: string
    configKey: string
    oldValue?: string | null
    newValue: string
    changedBy?: string | null
    reason?: string | null
    createdAt?: Date | string
  }

  export type ConfigHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    configKey?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: StringFieldUpdateOperationsInput | string
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    configKey?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: StringFieldUpdateOperationsInput | string
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigHistoryCreateManyInput = {
    id?: string
    configKey: string
    oldValue?: string | null
    newValue: string
    changedBy?: string | null
    reason?: string | null
    createdAt?: Date | string
  }

  export type ConfigHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    configKey?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: StringFieldUpdateOperationsInput | string
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    configKey?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: StringFieldUpdateOperationsInput | string
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AllowedIPCreateInput = {
    id?: string
    ipAddress: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    lastUsed?: Date | string | null
    usageCount?: number
    createdBy?: string | null
  }

  export type AllowedIPUncheckedCreateInput = {
    id?: string
    ipAddress: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    lastUsed?: Date | string | null
    usageCount?: number
    createdBy?: string | null
  }

  export type AllowedIPUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageCount?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AllowedIPUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageCount?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AllowedIPCreateManyInput = {
    id?: string
    ipAddress: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    lastUsed?: Date | string | null
    usageCount?: number
    createdBy?: string | null
  }

  export type AllowedIPUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageCount?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AllowedIPUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageCount?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlockedDomainCreateInput = {
    id?: string
    domain: string
    reason?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    blockedBy?: string | null
  }

  export type BlockedDomainUncheckedCreateInput = {
    id?: string
    domain: string
    reason?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    blockedBy?: string | null
  }

  export type BlockedDomainUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlockedDomainUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlockedDomainCreateManyInput = {
    id?: string
    domain: string
    reason?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    blockedBy?: string | null
  }

  export type BlockedDomainUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlockedDomainUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailTemplateCreateInput = {
    id?: string
    name: string
    subject: string
    content: string
    description?: string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    history?: TemplateHistoryCreateNestedManyWithoutTemplateInput
  }

  export type EmailTemplateUncheckedCreateInput = {
    id?: string
    name: string
    subject: string
    content: string
    description?: string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    history?: TemplateHistoryUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type EmailTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    history?: TemplateHistoryUpdateManyWithoutTemplateNestedInput
  }

  export type EmailTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    history?: TemplateHistoryUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type EmailTemplateCreateManyInput = {
    id?: string
    name: string
    subject: string
    content: string
    description?: string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
  }

  export type EmailTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TemplateHistoryCreateInput = {
    id?: string
    name: string
    subject: string
    content: string
    version: number
    changedBy?: string | null
    reason?: string | null
    createdAt?: Date | string
    template: EmailTemplateCreateNestedOneWithoutHistoryInput
  }

  export type TemplateHistoryUncheckedCreateInput = {
    id?: string
    templateId: string
    name: string
    subject: string
    content: string
    version: number
    changedBy?: string | null
    reason?: string | null
    createdAt?: Date | string
  }

  export type TemplateHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: EmailTemplateUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type TemplateHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateHistoryCreateManyInput = {
    id?: string
    templateId: string
    name: string
    subject: string
    content: string
    version: number
    changedBy?: string | null
    reason?: string | null
    createdAt?: Date | string
  }

  export type TemplateHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookConfigCreateInput = {
    id?: string
    name: string
    url: string
    secret?: string | null
    events?: WebhookConfigCreateeventsInput | string[]
    isActive?: boolean
    retryCount?: number
    timeout?: number
    headers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
    lastUsed?: Date | string | null
    successCount?: number
    failureCount?: number
    logs?: WebhookLogCreateNestedManyWithoutWebhookInput
  }

  export type WebhookConfigUncheckedCreateInput = {
    id?: string
    name: string
    url: string
    secret?: string | null
    events?: WebhookConfigCreateeventsInput | string[]
    isActive?: boolean
    retryCount?: number
    timeout?: number
    headers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
    lastUsed?: Date | string | null
    successCount?: number
    failureCount?: number
    logs?: WebhookLogUncheckedCreateNestedManyWithoutWebhookInput
  }

  export type WebhookConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: NullableStringFieldUpdateOperationsInput | string | null
    events?: WebhookConfigUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    retryCount?: IntFieldUpdateOperationsInput | number
    timeout?: IntFieldUpdateOperationsInput | number
    headers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    successCount?: IntFieldUpdateOperationsInput | number
    failureCount?: IntFieldUpdateOperationsInput | number
    logs?: WebhookLogUpdateManyWithoutWebhookNestedInput
  }

  export type WebhookConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: NullableStringFieldUpdateOperationsInput | string | null
    events?: WebhookConfigUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    retryCount?: IntFieldUpdateOperationsInput | number
    timeout?: IntFieldUpdateOperationsInput | number
    headers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    successCount?: IntFieldUpdateOperationsInput | number
    failureCount?: IntFieldUpdateOperationsInput | number
    logs?: WebhookLogUncheckedUpdateManyWithoutWebhookNestedInput
  }

  export type WebhookConfigCreateManyInput = {
    id?: string
    name: string
    url: string
    secret?: string | null
    events?: WebhookConfigCreateeventsInput | string[]
    isActive?: boolean
    retryCount?: number
    timeout?: number
    headers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
    lastUsed?: Date | string | null
    successCount?: number
    failureCount?: number
  }

  export type WebhookConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: NullableStringFieldUpdateOperationsInput | string | null
    events?: WebhookConfigUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    retryCount?: IntFieldUpdateOperationsInput | number
    timeout?: IntFieldUpdateOperationsInput | number
    headers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    successCount?: IntFieldUpdateOperationsInput | number
    failureCount?: IntFieldUpdateOperationsInput | number
  }

  export type WebhookConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: NullableStringFieldUpdateOperationsInput | string | null
    events?: WebhookConfigUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    retryCount?: IntFieldUpdateOperationsInput | number
    timeout?: IntFieldUpdateOperationsInput | number
    headers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    successCount?: IntFieldUpdateOperationsInput | number
    failureCount?: IntFieldUpdateOperationsInput | number
  }

  export type WebhookLogCreateInput = {
    id?: string
    event: string
    url: string
    payload: JsonNullValueInput | InputJsonValue
    response?: string | null
    statusCode?: number | null
    success: boolean
    errorMessage?: string | null
    responseTime?: number | null
    createdAt?: Date | string
    webhook: WebhookConfigCreateNestedOneWithoutLogsInput
  }

  export type WebhookLogUncheckedCreateInput = {
    id?: string
    webhookId: string
    event: string
    url: string
    payload: JsonNullValueInput | InputJsonValue
    response?: string | null
    statusCode?: number | null
    success: boolean
    errorMessage?: string | null
    responseTime?: number | null
    createdAt?: Date | string
  }

  export type WebhookLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    response?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    webhook?: WebhookConfigUpdateOneRequiredWithoutLogsNestedInput
  }

  export type WebhookLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhookId?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    response?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookLogCreateManyInput = {
    id?: string
    webhookId: string
    event: string
    url: string
    payload: JsonNullValueInput | InputJsonValue
    response?: string | null
    statusCode?: number | null
    success: boolean
    errorMessage?: string | null
    responseTime?: number | null
    createdAt?: Date | string
  }

  export type WebhookLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    response?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhookId?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    response?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateInput = {
    id?: string
    name: string
    hashedKey: string
    keyPreview: string
    isActive?: boolean
    expiresAt?: Date | string | null
    lastUsed?: Date | string | null
    usageCount?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutApiKeysInput
    usage?: ApiKeyUsageCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    hashedKey: string
    keyPreview: string
    isActive?: boolean
    expiresAt?: Date | string | null
    lastUsed?: Date | string | null
    usageCount?: number
    createdAt?: Date | string
    usage?: ApiKeyUsageUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hashedKey?: StringFieldUpdateOperationsInput | string
    keyPreview?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApiKeysNestedInput
    usage?: ApiKeyUsageUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hashedKey?: StringFieldUpdateOperationsInput | string
    keyPreview?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usage?: ApiKeyUsageUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyCreateManyInput = {
    id?: string
    userId: string
    name: string
    hashedKey: string
    keyPreview: string
    isActive?: boolean
    expiresAt?: Date | string | null
    lastUsed?: Date | string | null
    usageCount?: number
    createdAt?: Date | string
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hashedKey?: StringFieldUpdateOperationsInput | string
    keyPreview?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hashedKey?: StringFieldUpdateOperationsInput | string
    keyPreview?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUsageCreateInput = {
    id?: string
    endpoint: string
    method: string
    ipAddress?: string | null
    userAgent?: string | null
    statusCode: number
    responseTime?: number | null
    createdAt?: Date | string
    apiKey: ApiKeyCreateNestedOneWithoutUsageInput
  }

  export type ApiKeyUsageUncheckedCreateInput = {
    id?: string
    apiKeyId: string
    endpoint: string
    method: string
    ipAddress?: string | null
    userAgent?: string | null
    statusCode: number
    responseTime?: number | null
    createdAt?: Date | string
  }

  export type ApiKeyUsageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKey?: ApiKeyUpdateOneRequiredWithoutUsageNestedInput
  }

  export type ApiKeyUsageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUsageCreateManyInput = {
    id?: string
    apiKeyId: string
    endpoint: string
    method: string
    ipAddress?: string | null
    userAgent?: string | null
    statusCode: number
    responseTime?: number | null
    createdAt?: Date | string
  }

  export type ApiKeyUsageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUsageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    lastLogin?: Date | string | null
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
    emailLogs?: EmailLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    lastLogin?: Date | string | null
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    emailLogs?: EmailLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
    emailLogs?: EmailLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    emailLogs?: EmailLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    lastLogin?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumEmailStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailStatus | EnumEmailStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailStatusFilter<$PrismaModel> | $Enums.EmailStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmailLogCountOrderByAggregateInput = {
    id?: SortOrder
    to?: SortOrder
    subject?: SortOrder
    template?: SortOrder
    variables?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    errorMessage?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    jobId?: SortOrder
    userId?: SortOrder
  }

  export type EmailLogAvgOrderByAggregateInput = {
    attempts?: SortOrder
    maxAttempts?: SortOrder
  }

  export type EmailLogMaxOrderByAggregateInput = {
    id?: SortOrder
    to?: SortOrder
    subject?: SortOrder
    template?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    errorMessage?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    jobId?: SortOrder
    userId?: SortOrder
  }

  export type EmailLogMinOrderByAggregateInput = {
    id?: SortOrder
    to?: SortOrder
    subject?: SortOrder
    template?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    errorMessage?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    jobId?: SortOrder
    userId?: SortOrder
  }

  export type EmailLogSumOrderByAggregateInput = {
    attempts?: SortOrder
    maxAttempts?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumEmailStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailStatus | EnumEmailStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmailStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmailStatusFilter<$PrismaModel>
    _max?: NestedEnumEmailStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSystemConfigTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemConfigType | EnumSystemConfigTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SystemConfigType[] | ListEnumSystemConfigTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SystemConfigType[] | ListEnumSystemConfigTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSystemConfigTypeFilter<$PrismaModel> | $Enums.SystemConfigType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SystemConfigCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    type?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isActive?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type SystemConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    type?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isActive?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type SystemConfigMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    type?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isActive?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type EnumSystemConfigTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemConfigType | EnumSystemConfigTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SystemConfigType[] | ListEnumSystemConfigTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SystemConfigType[] | ListEnumSystemConfigTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSystemConfigTypeWithAggregatesFilter<$PrismaModel> | $Enums.SystemConfigType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSystemConfigTypeFilter<$PrismaModel>
    _max?: NestedEnumSystemConfigTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ConfigHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    configKey?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    changedBy?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type ConfigHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    configKey?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    changedBy?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type ConfigHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    configKey?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    changedBy?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type AllowedIPCountOrderByAggregateInput = {
    id?: SortOrder
    ipAddress?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastUsed?: SortOrder
    usageCount?: SortOrder
    createdBy?: SortOrder
  }

  export type AllowedIPAvgOrderByAggregateInput = {
    usageCount?: SortOrder
  }

  export type AllowedIPMaxOrderByAggregateInput = {
    id?: SortOrder
    ipAddress?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastUsed?: SortOrder
    usageCount?: SortOrder
    createdBy?: SortOrder
  }

  export type AllowedIPMinOrderByAggregateInput = {
    id?: SortOrder
    ipAddress?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastUsed?: SortOrder
    usageCount?: SortOrder
    createdBy?: SortOrder
  }

  export type AllowedIPSumOrderByAggregateInput = {
    usageCount?: SortOrder
  }

  export type BlockedDomainCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    reason?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blockedBy?: SortOrder
  }

  export type BlockedDomainMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    reason?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blockedBy?: SortOrder
  }

  export type BlockedDomainMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    reason?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blockedBy?: SortOrder
  }

  export type TemplateHistoryListRelationFilter = {
    every?: TemplateHistoryWhereInput
    some?: TemplateHistoryWhereInput
    none?: TemplateHistoryWhereInput
  }

  export type TemplateHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmailTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    description?: SortOrder
    variables?: SortOrder
    isActive?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type EmailTemplateAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type EmailTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type EmailTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type EmailTemplateSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type EmailTemplateScalarRelationFilter = {
    is?: EmailTemplateWhereInput
    isNot?: EmailTemplateWhereInput
  }

  export type TemplateHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    version?: SortOrder
    changedBy?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type TemplateHistoryAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type TemplateHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    version?: SortOrder
    changedBy?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type TemplateHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    version?: SortOrder
    changedBy?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type TemplateHistorySumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type WebhookLogListRelationFilter = {
    every?: WebhookLogWhereInput
    some?: WebhookLogWhereInput
    none?: WebhookLogWhereInput
  }

  export type WebhookLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WebhookConfigCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    secret?: SortOrder
    events?: SortOrder
    isActive?: SortOrder
    retryCount?: SortOrder
    timeout?: SortOrder
    headers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastUsed?: SortOrder
    successCount?: SortOrder
    failureCount?: SortOrder
  }

  export type WebhookConfigAvgOrderByAggregateInput = {
    retryCount?: SortOrder
    timeout?: SortOrder
    successCount?: SortOrder
    failureCount?: SortOrder
  }

  export type WebhookConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    secret?: SortOrder
    isActive?: SortOrder
    retryCount?: SortOrder
    timeout?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastUsed?: SortOrder
    successCount?: SortOrder
    failureCount?: SortOrder
  }

  export type WebhookConfigMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    secret?: SortOrder
    isActive?: SortOrder
    retryCount?: SortOrder
    timeout?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastUsed?: SortOrder
    successCount?: SortOrder
    failureCount?: SortOrder
  }

  export type WebhookConfigSumOrderByAggregateInput = {
    retryCount?: SortOrder
    timeout?: SortOrder
    successCount?: SortOrder
    failureCount?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type WebhookConfigScalarRelationFilter = {
    is?: WebhookConfigWhereInput
    isNot?: WebhookConfigWhereInput
  }

  export type WebhookLogCountOrderByAggregateInput = {
    id?: SortOrder
    webhookId?: SortOrder
    event?: SortOrder
    url?: SortOrder
    payload?: SortOrder
    response?: SortOrder
    statusCode?: SortOrder
    success?: SortOrder
    errorMessage?: SortOrder
    responseTime?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookLogAvgOrderByAggregateInput = {
    statusCode?: SortOrder
    responseTime?: SortOrder
  }

  export type WebhookLogMaxOrderByAggregateInput = {
    id?: SortOrder
    webhookId?: SortOrder
    event?: SortOrder
    url?: SortOrder
    response?: SortOrder
    statusCode?: SortOrder
    success?: SortOrder
    errorMessage?: SortOrder
    responseTime?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookLogMinOrderByAggregateInput = {
    id?: SortOrder
    webhookId?: SortOrder
    event?: SortOrder
    url?: SortOrder
    response?: SortOrder
    statusCode?: SortOrder
    success?: SortOrder
    errorMessage?: SortOrder
    responseTime?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookLogSumOrderByAggregateInput = {
    statusCode?: SortOrder
    responseTime?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ApiKeyUsageListRelationFilter = {
    every?: ApiKeyUsageWhereInput
    some?: ApiKeyUsageWhereInput
    none?: ApiKeyUsageWhereInput
  }

  export type ApiKeyUsageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    hashedKey?: SortOrder
    keyPreview?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    lastUsed?: SortOrder
    usageCount?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiKeyAvgOrderByAggregateInput = {
    usageCount?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    hashedKey?: SortOrder
    keyPreview?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    lastUsed?: SortOrder
    usageCount?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    hashedKey?: SortOrder
    keyPreview?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    lastUsed?: SortOrder
    usageCount?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiKeySumOrderByAggregateInput = {
    usageCount?: SortOrder
  }

  export type ApiKeyScalarRelationFilter = {
    is?: ApiKeyWhereInput
    isNot?: ApiKeyWhereInput
  }

  export type ApiKeyUsageCountOrderByAggregateInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    statusCode?: SortOrder
    responseTime?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiKeyUsageAvgOrderByAggregateInput = {
    statusCode?: SortOrder
    responseTime?: SortOrder
  }

  export type ApiKeyUsageMaxOrderByAggregateInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    statusCode?: SortOrder
    responseTime?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiKeyUsageMinOrderByAggregateInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    statusCode?: SortOrder
    responseTime?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiKeyUsageSumOrderByAggregateInput = {
    statusCode?: SortOrder
    responseTime?: SortOrder
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type ApiKeyListRelationFilter = {
    every?: ApiKeyWhereInput
    some?: ApiKeyWhereInput
    none?: ApiKeyWhereInput
  }

  export type EmailLogListRelationFilter = {
    every?: EmailLogWhereInput
    some?: EmailLogWhereInput
    none?: EmailLogWhereInput
  }

  export type ApiKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmailLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutEmailLogsInput = {
    create?: XOR<UserCreateWithoutEmailLogsInput, UserUncheckedCreateWithoutEmailLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailLogsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumEmailStatusFieldUpdateOperationsInput = {
    set?: $Enums.EmailStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutEmailLogsNestedInput = {
    create?: XOR<UserCreateWithoutEmailLogsInput, UserUncheckedCreateWithoutEmailLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailLogsInput
    upsert?: UserUpsertWithoutEmailLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmailLogsInput, UserUpdateWithoutEmailLogsInput>, UserUncheckedUpdateWithoutEmailLogsInput>
  }

  export type EnumSystemConfigTypeFieldUpdateOperationsInput = {
    set?: $Enums.SystemConfigType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TemplateHistoryCreateNestedManyWithoutTemplateInput = {
    create?: XOR<TemplateHistoryCreateWithoutTemplateInput, TemplateHistoryUncheckedCreateWithoutTemplateInput> | TemplateHistoryCreateWithoutTemplateInput[] | TemplateHistoryUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateHistoryCreateOrConnectWithoutTemplateInput | TemplateHistoryCreateOrConnectWithoutTemplateInput[]
    createMany?: TemplateHistoryCreateManyTemplateInputEnvelope
    connect?: TemplateHistoryWhereUniqueInput | TemplateHistoryWhereUniqueInput[]
  }

  export type TemplateHistoryUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<TemplateHistoryCreateWithoutTemplateInput, TemplateHistoryUncheckedCreateWithoutTemplateInput> | TemplateHistoryCreateWithoutTemplateInput[] | TemplateHistoryUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateHistoryCreateOrConnectWithoutTemplateInput | TemplateHistoryCreateOrConnectWithoutTemplateInput[]
    createMany?: TemplateHistoryCreateManyTemplateInputEnvelope
    connect?: TemplateHistoryWhereUniqueInput | TemplateHistoryWhereUniqueInput[]
  }

  export type TemplateHistoryUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<TemplateHistoryCreateWithoutTemplateInput, TemplateHistoryUncheckedCreateWithoutTemplateInput> | TemplateHistoryCreateWithoutTemplateInput[] | TemplateHistoryUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateHistoryCreateOrConnectWithoutTemplateInput | TemplateHistoryCreateOrConnectWithoutTemplateInput[]
    upsert?: TemplateHistoryUpsertWithWhereUniqueWithoutTemplateInput | TemplateHistoryUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: TemplateHistoryCreateManyTemplateInputEnvelope
    set?: TemplateHistoryWhereUniqueInput | TemplateHistoryWhereUniqueInput[]
    disconnect?: TemplateHistoryWhereUniqueInput | TemplateHistoryWhereUniqueInput[]
    delete?: TemplateHistoryWhereUniqueInput | TemplateHistoryWhereUniqueInput[]
    connect?: TemplateHistoryWhereUniqueInput | TemplateHistoryWhereUniqueInput[]
    update?: TemplateHistoryUpdateWithWhereUniqueWithoutTemplateInput | TemplateHistoryUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: TemplateHistoryUpdateManyWithWhereWithoutTemplateInput | TemplateHistoryUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: TemplateHistoryScalarWhereInput | TemplateHistoryScalarWhereInput[]
  }

  export type TemplateHistoryUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<TemplateHistoryCreateWithoutTemplateInput, TemplateHistoryUncheckedCreateWithoutTemplateInput> | TemplateHistoryCreateWithoutTemplateInput[] | TemplateHistoryUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateHistoryCreateOrConnectWithoutTemplateInput | TemplateHistoryCreateOrConnectWithoutTemplateInput[]
    upsert?: TemplateHistoryUpsertWithWhereUniqueWithoutTemplateInput | TemplateHistoryUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: TemplateHistoryCreateManyTemplateInputEnvelope
    set?: TemplateHistoryWhereUniqueInput | TemplateHistoryWhereUniqueInput[]
    disconnect?: TemplateHistoryWhereUniqueInput | TemplateHistoryWhereUniqueInput[]
    delete?: TemplateHistoryWhereUniqueInput | TemplateHistoryWhereUniqueInput[]
    connect?: TemplateHistoryWhereUniqueInput | TemplateHistoryWhereUniqueInput[]
    update?: TemplateHistoryUpdateWithWhereUniqueWithoutTemplateInput | TemplateHistoryUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: TemplateHistoryUpdateManyWithWhereWithoutTemplateInput | TemplateHistoryUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: TemplateHistoryScalarWhereInput | TemplateHistoryScalarWhereInput[]
  }

  export type EmailTemplateCreateNestedOneWithoutHistoryInput = {
    create?: XOR<EmailTemplateCreateWithoutHistoryInput, EmailTemplateUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: EmailTemplateCreateOrConnectWithoutHistoryInput
    connect?: EmailTemplateWhereUniqueInput
  }

  export type EmailTemplateUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<EmailTemplateCreateWithoutHistoryInput, EmailTemplateUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: EmailTemplateCreateOrConnectWithoutHistoryInput
    upsert?: EmailTemplateUpsertWithoutHistoryInput
    connect?: EmailTemplateWhereUniqueInput
    update?: XOR<XOR<EmailTemplateUpdateToOneWithWhereWithoutHistoryInput, EmailTemplateUpdateWithoutHistoryInput>, EmailTemplateUncheckedUpdateWithoutHistoryInput>
  }

  export type WebhookConfigCreateeventsInput = {
    set: string[]
  }

  export type WebhookLogCreateNestedManyWithoutWebhookInput = {
    create?: XOR<WebhookLogCreateWithoutWebhookInput, WebhookLogUncheckedCreateWithoutWebhookInput> | WebhookLogCreateWithoutWebhookInput[] | WebhookLogUncheckedCreateWithoutWebhookInput[]
    connectOrCreate?: WebhookLogCreateOrConnectWithoutWebhookInput | WebhookLogCreateOrConnectWithoutWebhookInput[]
    createMany?: WebhookLogCreateManyWebhookInputEnvelope
    connect?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
  }

  export type WebhookLogUncheckedCreateNestedManyWithoutWebhookInput = {
    create?: XOR<WebhookLogCreateWithoutWebhookInput, WebhookLogUncheckedCreateWithoutWebhookInput> | WebhookLogCreateWithoutWebhookInput[] | WebhookLogUncheckedCreateWithoutWebhookInput[]
    connectOrCreate?: WebhookLogCreateOrConnectWithoutWebhookInput | WebhookLogCreateOrConnectWithoutWebhookInput[]
    createMany?: WebhookLogCreateManyWebhookInputEnvelope
    connect?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
  }

  export type WebhookConfigUpdateeventsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type WebhookLogUpdateManyWithoutWebhookNestedInput = {
    create?: XOR<WebhookLogCreateWithoutWebhookInput, WebhookLogUncheckedCreateWithoutWebhookInput> | WebhookLogCreateWithoutWebhookInput[] | WebhookLogUncheckedCreateWithoutWebhookInput[]
    connectOrCreate?: WebhookLogCreateOrConnectWithoutWebhookInput | WebhookLogCreateOrConnectWithoutWebhookInput[]
    upsert?: WebhookLogUpsertWithWhereUniqueWithoutWebhookInput | WebhookLogUpsertWithWhereUniqueWithoutWebhookInput[]
    createMany?: WebhookLogCreateManyWebhookInputEnvelope
    set?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    disconnect?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    delete?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    connect?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    update?: WebhookLogUpdateWithWhereUniqueWithoutWebhookInput | WebhookLogUpdateWithWhereUniqueWithoutWebhookInput[]
    updateMany?: WebhookLogUpdateManyWithWhereWithoutWebhookInput | WebhookLogUpdateManyWithWhereWithoutWebhookInput[]
    deleteMany?: WebhookLogScalarWhereInput | WebhookLogScalarWhereInput[]
  }

  export type WebhookLogUncheckedUpdateManyWithoutWebhookNestedInput = {
    create?: XOR<WebhookLogCreateWithoutWebhookInput, WebhookLogUncheckedCreateWithoutWebhookInput> | WebhookLogCreateWithoutWebhookInput[] | WebhookLogUncheckedCreateWithoutWebhookInput[]
    connectOrCreate?: WebhookLogCreateOrConnectWithoutWebhookInput | WebhookLogCreateOrConnectWithoutWebhookInput[]
    upsert?: WebhookLogUpsertWithWhereUniqueWithoutWebhookInput | WebhookLogUpsertWithWhereUniqueWithoutWebhookInput[]
    createMany?: WebhookLogCreateManyWebhookInputEnvelope
    set?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    disconnect?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    delete?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    connect?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    update?: WebhookLogUpdateWithWhereUniqueWithoutWebhookInput | WebhookLogUpdateWithWhereUniqueWithoutWebhookInput[]
    updateMany?: WebhookLogUpdateManyWithWhereWithoutWebhookInput | WebhookLogUpdateManyWithWhereWithoutWebhookInput[]
    deleteMany?: WebhookLogScalarWhereInput | WebhookLogScalarWhereInput[]
  }

  export type WebhookConfigCreateNestedOneWithoutLogsInput = {
    create?: XOR<WebhookConfigCreateWithoutLogsInput, WebhookConfigUncheckedCreateWithoutLogsInput>
    connectOrCreate?: WebhookConfigCreateOrConnectWithoutLogsInput
    connect?: WebhookConfigWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WebhookConfigUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<WebhookConfigCreateWithoutLogsInput, WebhookConfigUncheckedCreateWithoutLogsInput>
    connectOrCreate?: WebhookConfigCreateOrConnectWithoutLogsInput
    upsert?: WebhookConfigUpsertWithoutLogsInput
    connect?: WebhookConfigWhereUniqueInput
    update?: XOR<XOR<WebhookConfigUpdateToOneWithWhereWithoutLogsInput, WebhookConfigUpdateWithoutLogsInput>, WebhookConfigUncheckedUpdateWithoutLogsInput>
  }

  export type UserCreateNestedOneWithoutApiKeysInput = {
    create?: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiKeysInput
    connect?: UserWhereUniqueInput
  }

  export type ApiKeyUsageCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<ApiKeyUsageCreateWithoutApiKeyInput, ApiKeyUsageUncheckedCreateWithoutApiKeyInput> | ApiKeyUsageCreateWithoutApiKeyInput[] | ApiKeyUsageUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: ApiKeyUsageCreateOrConnectWithoutApiKeyInput | ApiKeyUsageCreateOrConnectWithoutApiKeyInput[]
    createMany?: ApiKeyUsageCreateManyApiKeyInputEnvelope
    connect?: ApiKeyUsageWhereUniqueInput | ApiKeyUsageWhereUniqueInput[]
  }

  export type ApiKeyUsageUncheckedCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<ApiKeyUsageCreateWithoutApiKeyInput, ApiKeyUsageUncheckedCreateWithoutApiKeyInput> | ApiKeyUsageCreateWithoutApiKeyInput[] | ApiKeyUsageUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: ApiKeyUsageCreateOrConnectWithoutApiKeyInput | ApiKeyUsageCreateOrConnectWithoutApiKeyInput[]
    createMany?: ApiKeyUsageCreateManyApiKeyInputEnvelope
    connect?: ApiKeyUsageWhereUniqueInput | ApiKeyUsageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutApiKeysNestedInput = {
    create?: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiKeysInput
    upsert?: UserUpsertWithoutApiKeysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApiKeysInput, UserUpdateWithoutApiKeysInput>, UserUncheckedUpdateWithoutApiKeysInput>
  }

  export type ApiKeyUsageUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<ApiKeyUsageCreateWithoutApiKeyInput, ApiKeyUsageUncheckedCreateWithoutApiKeyInput> | ApiKeyUsageCreateWithoutApiKeyInput[] | ApiKeyUsageUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: ApiKeyUsageCreateOrConnectWithoutApiKeyInput | ApiKeyUsageCreateOrConnectWithoutApiKeyInput[]
    upsert?: ApiKeyUsageUpsertWithWhereUniqueWithoutApiKeyInput | ApiKeyUsageUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: ApiKeyUsageCreateManyApiKeyInputEnvelope
    set?: ApiKeyUsageWhereUniqueInput | ApiKeyUsageWhereUniqueInput[]
    disconnect?: ApiKeyUsageWhereUniqueInput | ApiKeyUsageWhereUniqueInput[]
    delete?: ApiKeyUsageWhereUniqueInput | ApiKeyUsageWhereUniqueInput[]
    connect?: ApiKeyUsageWhereUniqueInput | ApiKeyUsageWhereUniqueInput[]
    update?: ApiKeyUsageUpdateWithWhereUniqueWithoutApiKeyInput | ApiKeyUsageUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: ApiKeyUsageUpdateManyWithWhereWithoutApiKeyInput | ApiKeyUsageUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: ApiKeyUsageScalarWhereInput | ApiKeyUsageScalarWhereInput[]
  }

  export type ApiKeyUsageUncheckedUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<ApiKeyUsageCreateWithoutApiKeyInput, ApiKeyUsageUncheckedCreateWithoutApiKeyInput> | ApiKeyUsageCreateWithoutApiKeyInput[] | ApiKeyUsageUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: ApiKeyUsageCreateOrConnectWithoutApiKeyInput | ApiKeyUsageCreateOrConnectWithoutApiKeyInput[]
    upsert?: ApiKeyUsageUpsertWithWhereUniqueWithoutApiKeyInput | ApiKeyUsageUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: ApiKeyUsageCreateManyApiKeyInputEnvelope
    set?: ApiKeyUsageWhereUniqueInput | ApiKeyUsageWhereUniqueInput[]
    disconnect?: ApiKeyUsageWhereUniqueInput | ApiKeyUsageWhereUniqueInput[]
    delete?: ApiKeyUsageWhereUniqueInput | ApiKeyUsageWhereUniqueInput[]
    connect?: ApiKeyUsageWhereUniqueInput | ApiKeyUsageWhereUniqueInput[]
    update?: ApiKeyUsageUpdateWithWhereUniqueWithoutApiKeyInput | ApiKeyUsageUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: ApiKeyUsageUpdateManyWithWhereWithoutApiKeyInput | ApiKeyUsageUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: ApiKeyUsageScalarWhereInput | ApiKeyUsageScalarWhereInput[]
  }

  export type ApiKeyCreateNestedOneWithoutUsageInput = {
    create?: XOR<ApiKeyCreateWithoutUsageInput, ApiKeyUncheckedCreateWithoutUsageInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUsageInput
    connect?: ApiKeyWhereUniqueInput
  }

  export type ApiKeyUpdateOneRequiredWithoutUsageNestedInput = {
    create?: XOR<ApiKeyCreateWithoutUsageInput, ApiKeyUncheckedCreateWithoutUsageInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUsageInput
    upsert?: ApiKeyUpsertWithoutUsageInput
    connect?: ApiKeyWhereUniqueInput
    update?: XOR<XOR<ApiKeyUpdateToOneWithWhereWithoutUsageInput, ApiKeyUpdateWithoutUsageInput>, ApiKeyUncheckedUpdateWithoutUsageInput>
  }

  export type ApiKeyCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type EmailLogCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailLogCreateWithoutUserInput, EmailLogUncheckedCreateWithoutUserInput> | EmailLogCreateWithoutUserInput[] | EmailLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailLogCreateOrConnectWithoutUserInput | EmailLogCreateOrConnectWithoutUserInput[]
    createMany?: EmailLogCreateManyUserInputEnvelope
    connect?: EmailLogWhereUniqueInput | EmailLogWhereUniqueInput[]
  }

  export type ApiKeyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type EmailLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailLogCreateWithoutUserInput, EmailLogUncheckedCreateWithoutUserInput> | EmailLogCreateWithoutUserInput[] | EmailLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailLogCreateOrConnectWithoutUserInput | EmailLogCreateOrConnectWithoutUserInput[]
    createMany?: EmailLogCreateManyUserInputEnvelope
    connect?: EmailLogWhereUniqueInput | EmailLogWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type ApiKeyUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutUserInput | ApiKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutUserInput | ApiKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutUserInput | ApiKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type EmailLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailLogCreateWithoutUserInput, EmailLogUncheckedCreateWithoutUserInput> | EmailLogCreateWithoutUserInput[] | EmailLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailLogCreateOrConnectWithoutUserInput | EmailLogCreateOrConnectWithoutUserInput[]
    upsert?: EmailLogUpsertWithWhereUniqueWithoutUserInput | EmailLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailLogCreateManyUserInputEnvelope
    set?: EmailLogWhereUniqueInput | EmailLogWhereUniqueInput[]
    disconnect?: EmailLogWhereUniqueInput | EmailLogWhereUniqueInput[]
    delete?: EmailLogWhereUniqueInput | EmailLogWhereUniqueInput[]
    connect?: EmailLogWhereUniqueInput | EmailLogWhereUniqueInput[]
    update?: EmailLogUpdateWithWhereUniqueWithoutUserInput | EmailLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailLogUpdateManyWithWhereWithoutUserInput | EmailLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailLogScalarWhereInput | EmailLogScalarWhereInput[]
  }

  export type ApiKeyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutUserInput | ApiKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutUserInput | ApiKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutUserInput | ApiKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type EmailLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailLogCreateWithoutUserInput, EmailLogUncheckedCreateWithoutUserInput> | EmailLogCreateWithoutUserInput[] | EmailLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailLogCreateOrConnectWithoutUserInput | EmailLogCreateOrConnectWithoutUserInput[]
    upsert?: EmailLogUpsertWithWhereUniqueWithoutUserInput | EmailLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailLogCreateManyUserInputEnvelope
    set?: EmailLogWhereUniqueInput | EmailLogWhereUniqueInput[]
    disconnect?: EmailLogWhereUniqueInput | EmailLogWhereUniqueInput[]
    delete?: EmailLogWhereUniqueInput | EmailLogWhereUniqueInput[]
    connect?: EmailLogWhereUniqueInput | EmailLogWhereUniqueInput[]
    update?: EmailLogUpdateWithWhereUniqueWithoutUserInput | EmailLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailLogUpdateManyWithWhereWithoutUserInput | EmailLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailLogScalarWhereInput | EmailLogScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumEmailStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailStatus | EnumEmailStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailStatusFilter<$PrismaModel> | $Enums.EmailStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumEmailStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailStatus | EnumEmailStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmailStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmailStatusFilter<$PrismaModel>
    _max?: NestedEnumEmailStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumSystemConfigTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemConfigType | EnumSystemConfigTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SystemConfigType[] | ListEnumSystemConfigTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SystemConfigType[] | ListEnumSystemConfigTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSystemConfigTypeFilter<$PrismaModel> | $Enums.SystemConfigType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumSystemConfigTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemConfigType | EnumSystemConfigTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SystemConfigType[] | ListEnumSystemConfigTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SystemConfigType[] | ListEnumSystemConfigTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSystemConfigTypeWithAggregatesFilter<$PrismaModel> | $Enums.SystemConfigType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSystemConfigTypeFilter<$PrismaModel>
    _max?: NestedEnumSystemConfigTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type UserCreateWithoutEmailLogsInput = {
    id?: string
    username: string
    email: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    lastLogin?: Date | string | null
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmailLogsInput = {
    id?: string
    username: string
    email: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    lastLogin?: Date | string | null
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmailLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmailLogsInput, UserUncheckedCreateWithoutEmailLogsInput>
  }

  export type UserUpsertWithoutEmailLogsInput = {
    update: XOR<UserUpdateWithoutEmailLogsInput, UserUncheckedUpdateWithoutEmailLogsInput>
    create: XOR<UserCreateWithoutEmailLogsInput, UserUncheckedCreateWithoutEmailLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmailLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmailLogsInput, UserUncheckedUpdateWithoutEmailLogsInput>
  }

  export type UserUpdateWithoutEmailLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmailLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TemplateHistoryCreateWithoutTemplateInput = {
    id?: string
    name: string
    subject: string
    content: string
    version: number
    changedBy?: string | null
    reason?: string | null
    createdAt?: Date | string
  }

  export type TemplateHistoryUncheckedCreateWithoutTemplateInput = {
    id?: string
    name: string
    subject: string
    content: string
    version: number
    changedBy?: string | null
    reason?: string | null
    createdAt?: Date | string
  }

  export type TemplateHistoryCreateOrConnectWithoutTemplateInput = {
    where: TemplateHistoryWhereUniqueInput
    create: XOR<TemplateHistoryCreateWithoutTemplateInput, TemplateHistoryUncheckedCreateWithoutTemplateInput>
  }

  export type TemplateHistoryCreateManyTemplateInputEnvelope = {
    data: TemplateHistoryCreateManyTemplateInput | TemplateHistoryCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type TemplateHistoryUpsertWithWhereUniqueWithoutTemplateInput = {
    where: TemplateHistoryWhereUniqueInput
    update: XOR<TemplateHistoryUpdateWithoutTemplateInput, TemplateHistoryUncheckedUpdateWithoutTemplateInput>
    create: XOR<TemplateHistoryCreateWithoutTemplateInput, TemplateHistoryUncheckedCreateWithoutTemplateInput>
  }

  export type TemplateHistoryUpdateWithWhereUniqueWithoutTemplateInput = {
    where: TemplateHistoryWhereUniqueInput
    data: XOR<TemplateHistoryUpdateWithoutTemplateInput, TemplateHistoryUncheckedUpdateWithoutTemplateInput>
  }

  export type TemplateHistoryUpdateManyWithWhereWithoutTemplateInput = {
    where: TemplateHistoryScalarWhereInput
    data: XOR<TemplateHistoryUpdateManyMutationInput, TemplateHistoryUncheckedUpdateManyWithoutTemplateInput>
  }

  export type TemplateHistoryScalarWhereInput = {
    AND?: TemplateHistoryScalarWhereInput | TemplateHistoryScalarWhereInput[]
    OR?: TemplateHistoryScalarWhereInput[]
    NOT?: TemplateHistoryScalarWhereInput | TemplateHistoryScalarWhereInput[]
    id?: UuidFilter<"TemplateHistory"> | string
    templateId?: UuidFilter<"TemplateHistory"> | string
    name?: StringFilter<"TemplateHistory"> | string
    subject?: StringFilter<"TemplateHistory"> | string
    content?: StringFilter<"TemplateHistory"> | string
    version?: IntFilter<"TemplateHistory"> | number
    changedBy?: StringNullableFilter<"TemplateHistory"> | string | null
    reason?: StringNullableFilter<"TemplateHistory"> | string | null
    createdAt?: DateTimeFilter<"TemplateHistory"> | Date | string
  }

  export type EmailTemplateCreateWithoutHistoryInput = {
    id?: string
    name: string
    subject: string
    content: string
    description?: string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
  }

  export type EmailTemplateUncheckedCreateWithoutHistoryInput = {
    id?: string
    name: string
    subject: string
    content: string
    description?: string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
  }

  export type EmailTemplateCreateOrConnectWithoutHistoryInput = {
    where: EmailTemplateWhereUniqueInput
    create: XOR<EmailTemplateCreateWithoutHistoryInput, EmailTemplateUncheckedCreateWithoutHistoryInput>
  }

  export type EmailTemplateUpsertWithoutHistoryInput = {
    update: XOR<EmailTemplateUpdateWithoutHistoryInput, EmailTemplateUncheckedUpdateWithoutHistoryInput>
    create: XOR<EmailTemplateCreateWithoutHistoryInput, EmailTemplateUncheckedCreateWithoutHistoryInput>
    where?: EmailTemplateWhereInput
  }

  export type EmailTemplateUpdateToOneWithWhereWithoutHistoryInput = {
    where?: EmailTemplateWhereInput
    data: XOR<EmailTemplateUpdateWithoutHistoryInput, EmailTemplateUncheckedUpdateWithoutHistoryInput>
  }

  export type EmailTemplateUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailTemplateUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WebhookLogCreateWithoutWebhookInput = {
    id?: string
    event: string
    url: string
    payload: JsonNullValueInput | InputJsonValue
    response?: string | null
    statusCode?: number | null
    success: boolean
    errorMessage?: string | null
    responseTime?: number | null
    createdAt?: Date | string
  }

  export type WebhookLogUncheckedCreateWithoutWebhookInput = {
    id?: string
    event: string
    url: string
    payload: JsonNullValueInput | InputJsonValue
    response?: string | null
    statusCode?: number | null
    success: boolean
    errorMessage?: string | null
    responseTime?: number | null
    createdAt?: Date | string
  }

  export type WebhookLogCreateOrConnectWithoutWebhookInput = {
    where: WebhookLogWhereUniqueInput
    create: XOR<WebhookLogCreateWithoutWebhookInput, WebhookLogUncheckedCreateWithoutWebhookInput>
  }

  export type WebhookLogCreateManyWebhookInputEnvelope = {
    data: WebhookLogCreateManyWebhookInput | WebhookLogCreateManyWebhookInput[]
    skipDuplicates?: boolean
  }

  export type WebhookLogUpsertWithWhereUniqueWithoutWebhookInput = {
    where: WebhookLogWhereUniqueInput
    update: XOR<WebhookLogUpdateWithoutWebhookInput, WebhookLogUncheckedUpdateWithoutWebhookInput>
    create: XOR<WebhookLogCreateWithoutWebhookInput, WebhookLogUncheckedCreateWithoutWebhookInput>
  }

  export type WebhookLogUpdateWithWhereUniqueWithoutWebhookInput = {
    where: WebhookLogWhereUniqueInput
    data: XOR<WebhookLogUpdateWithoutWebhookInput, WebhookLogUncheckedUpdateWithoutWebhookInput>
  }

  export type WebhookLogUpdateManyWithWhereWithoutWebhookInput = {
    where: WebhookLogScalarWhereInput
    data: XOR<WebhookLogUpdateManyMutationInput, WebhookLogUncheckedUpdateManyWithoutWebhookInput>
  }

  export type WebhookLogScalarWhereInput = {
    AND?: WebhookLogScalarWhereInput | WebhookLogScalarWhereInput[]
    OR?: WebhookLogScalarWhereInput[]
    NOT?: WebhookLogScalarWhereInput | WebhookLogScalarWhereInput[]
    id?: UuidFilter<"WebhookLog"> | string
    webhookId?: UuidFilter<"WebhookLog"> | string
    event?: StringFilter<"WebhookLog"> | string
    url?: StringFilter<"WebhookLog"> | string
    payload?: JsonFilter<"WebhookLog">
    response?: StringNullableFilter<"WebhookLog"> | string | null
    statusCode?: IntNullableFilter<"WebhookLog"> | number | null
    success?: BoolFilter<"WebhookLog"> | boolean
    errorMessage?: StringNullableFilter<"WebhookLog"> | string | null
    responseTime?: IntNullableFilter<"WebhookLog"> | number | null
    createdAt?: DateTimeFilter<"WebhookLog"> | Date | string
  }

  export type WebhookConfigCreateWithoutLogsInput = {
    id?: string
    name: string
    url: string
    secret?: string | null
    events?: WebhookConfigCreateeventsInput | string[]
    isActive?: boolean
    retryCount?: number
    timeout?: number
    headers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
    lastUsed?: Date | string | null
    successCount?: number
    failureCount?: number
  }

  export type WebhookConfigUncheckedCreateWithoutLogsInput = {
    id?: string
    name: string
    url: string
    secret?: string | null
    events?: WebhookConfigCreateeventsInput | string[]
    isActive?: boolean
    retryCount?: number
    timeout?: number
    headers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
    lastUsed?: Date | string | null
    successCount?: number
    failureCount?: number
  }

  export type WebhookConfigCreateOrConnectWithoutLogsInput = {
    where: WebhookConfigWhereUniqueInput
    create: XOR<WebhookConfigCreateWithoutLogsInput, WebhookConfigUncheckedCreateWithoutLogsInput>
  }

  export type WebhookConfigUpsertWithoutLogsInput = {
    update: XOR<WebhookConfigUpdateWithoutLogsInput, WebhookConfigUncheckedUpdateWithoutLogsInput>
    create: XOR<WebhookConfigCreateWithoutLogsInput, WebhookConfigUncheckedCreateWithoutLogsInput>
    where?: WebhookConfigWhereInput
  }

  export type WebhookConfigUpdateToOneWithWhereWithoutLogsInput = {
    where?: WebhookConfigWhereInput
    data: XOR<WebhookConfigUpdateWithoutLogsInput, WebhookConfigUncheckedUpdateWithoutLogsInput>
  }

  export type WebhookConfigUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: NullableStringFieldUpdateOperationsInput | string | null
    events?: WebhookConfigUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    retryCount?: IntFieldUpdateOperationsInput | number
    timeout?: IntFieldUpdateOperationsInput | number
    headers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    successCount?: IntFieldUpdateOperationsInput | number
    failureCount?: IntFieldUpdateOperationsInput | number
  }

  export type WebhookConfigUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: NullableStringFieldUpdateOperationsInput | string | null
    events?: WebhookConfigUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    retryCount?: IntFieldUpdateOperationsInput | number
    timeout?: IntFieldUpdateOperationsInput | number
    headers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    successCount?: IntFieldUpdateOperationsInput | number
    failureCount?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutApiKeysInput = {
    id?: string
    username: string
    email: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    lastLogin?: Date | string | null
    emailLogs?: EmailLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApiKeysInput = {
    id?: string
    username: string
    email: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    lastLogin?: Date | string | null
    emailLogs?: EmailLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApiKeysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
  }

  export type ApiKeyUsageCreateWithoutApiKeyInput = {
    id?: string
    endpoint: string
    method: string
    ipAddress?: string | null
    userAgent?: string | null
    statusCode: number
    responseTime?: number | null
    createdAt?: Date | string
  }

  export type ApiKeyUsageUncheckedCreateWithoutApiKeyInput = {
    id?: string
    endpoint: string
    method: string
    ipAddress?: string | null
    userAgent?: string | null
    statusCode: number
    responseTime?: number | null
    createdAt?: Date | string
  }

  export type ApiKeyUsageCreateOrConnectWithoutApiKeyInput = {
    where: ApiKeyUsageWhereUniqueInput
    create: XOR<ApiKeyUsageCreateWithoutApiKeyInput, ApiKeyUsageUncheckedCreateWithoutApiKeyInput>
  }

  export type ApiKeyUsageCreateManyApiKeyInputEnvelope = {
    data: ApiKeyUsageCreateManyApiKeyInput | ApiKeyUsageCreateManyApiKeyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutApiKeysInput = {
    update: XOR<UserUpdateWithoutApiKeysInput, UserUncheckedUpdateWithoutApiKeysInput>
    create: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApiKeysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApiKeysInput, UserUncheckedUpdateWithoutApiKeysInput>
  }

  export type UserUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailLogs?: EmailLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailLogs?: EmailLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ApiKeyUsageUpsertWithWhereUniqueWithoutApiKeyInput = {
    where: ApiKeyUsageWhereUniqueInput
    update: XOR<ApiKeyUsageUpdateWithoutApiKeyInput, ApiKeyUsageUncheckedUpdateWithoutApiKeyInput>
    create: XOR<ApiKeyUsageCreateWithoutApiKeyInput, ApiKeyUsageUncheckedCreateWithoutApiKeyInput>
  }

  export type ApiKeyUsageUpdateWithWhereUniqueWithoutApiKeyInput = {
    where: ApiKeyUsageWhereUniqueInput
    data: XOR<ApiKeyUsageUpdateWithoutApiKeyInput, ApiKeyUsageUncheckedUpdateWithoutApiKeyInput>
  }

  export type ApiKeyUsageUpdateManyWithWhereWithoutApiKeyInput = {
    where: ApiKeyUsageScalarWhereInput
    data: XOR<ApiKeyUsageUpdateManyMutationInput, ApiKeyUsageUncheckedUpdateManyWithoutApiKeyInput>
  }

  export type ApiKeyUsageScalarWhereInput = {
    AND?: ApiKeyUsageScalarWhereInput | ApiKeyUsageScalarWhereInput[]
    OR?: ApiKeyUsageScalarWhereInput[]
    NOT?: ApiKeyUsageScalarWhereInput | ApiKeyUsageScalarWhereInput[]
    id?: StringFilter<"ApiKeyUsage"> | string
    apiKeyId?: StringFilter<"ApiKeyUsage"> | string
    endpoint?: StringFilter<"ApiKeyUsage"> | string
    method?: StringFilter<"ApiKeyUsage"> | string
    ipAddress?: StringNullableFilter<"ApiKeyUsage"> | string | null
    userAgent?: StringNullableFilter<"ApiKeyUsage"> | string | null
    statusCode?: IntFilter<"ApiKeyUsage"> | number
    responseTime?: IntNullableFilter<"ApiKeyUsage"> | number | null
    createdAt?: DateTimeFilter<"ApiKeyUsage"> | Date | string
  }

  export type ApiKeyCreateWithoutUsageInput = {
    id?: string
    name: string
    hashedKey: string
    keyPreview: string
    isActive?: boolean
    expiresAt?: Date | string | null
    lastUsed?: Date | string | null
    usageCount?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutApiKeysInput
  }

  export type ApiKeyUncheckedCreateWithoutUsageInput = {
    id?: string
    userId: string
    name: string
    hashedKey: string
    keyPreview: string
    isActive?: boolean
    expiresAt?: Date | string | null
    lastUsed?: Date | string | null
    usageCount?: number
    createdAt?: Date | string
  }

  export type ApiKeyCreateOrConnectWithoutUsageInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutUsageInput, ApiKeyUncheckedCreateWithoutUsageInput>
  }

  export type ApiKeyUpsertWithoutUsageInput = {
    update: XOR<ApiKeyUpdateWithoutUsageInput, ApiKeyUncheckedUpdateWithoutUsageInput>
    create: XOR<ApiKeyCreateWithoutUsageInput, ApiKeyUncheckedCreateWithoutUsageInput>
    where?: ApiKeyWhereInput
  }

  export type ApiKeyUpdateToOneWithWhereWithoutUsageInput = {
    where?: ApiKeyWhereInput
    data: XOR<ApiKeyUpdateWithoutUsageInput, ApiKeyUncheckedUpdateWithoutUsageInput>
  }

  export type ApiKeyUpdateWithoutUsageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hashedKey?: StringFieldUpdateOperationsInput | string
    keyPreview?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApiKeysNestedInput
  }

  export type ApiKeyUncheckedUpdateWithoutUsageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hashedKey?: StringFieldUpdateOperationsInput | string
    keyPreview?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateWithoutUserInput = {
    id?: string
    name: string
    hashedKey: string
    keyPreview: string
    isActive?: boolean
    expiresAt?: Date | string | null
    lastUsed?: Date | string | null
    usageCount?: number
    createdAt?: Date | string
    usage?: ApiKeyUsageCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    hashedKey: string
    keyPreview: string
    isActive?: boolean
    expiresAt?: Date | string | null
    lastUsed?: Date | string | null
    usageCount?: number
    createdAt?: Date | string
    usage?: ApiKeyUsageUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyCreateOrConnectWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput>
  }

  export type ApiKeyCreateManyUserInputEnvelope = {
    data: ApiKeyCreateManyUserInput | ApiKeyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmailLogCreateWithoutUserInput = {
    id?: string
    to: string
    subject: string
    template: string
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.EmailStatus
    provider?: string | null
    errorMessage?: string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    attempts?: number
    maxAttempts?: number
    jobId?: string | null
  }

  export type EmailLogUncheckedCreateWithoutUserInput = {
    id?: string
    to: string
    subject: string
    template: string
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.EmailStatus
    provider?: string | null
    errorMessage?: string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    attempts?: number
    maxAttempts?: number
    jobId?: string | null
  }

  export type EmailLogCreateOrConnectWithoutUserInput = {
    where: EmailLogWhereUniqueInput
    create: XOR<EmailLogCreateWithoutUserInput, EmailLogUncheckedCreateWithoutUserInput>
  }

  export type EmailLogCreateManyUserInputEnvelope = {
    data: EmailLogCreateManyUserInput | EmailLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApiKeyUpsertWithWhereUniqueWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    update: XOR<ApiKeyUpdateWithoutUserInput, ApiKeyUncheckedUpdateWithoutUserInput>
    create: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput>
  }

  export type ApiKeyUpdateWithWhereUniqueWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    data: XOR<ApiKeyUpdateWithoutUserInput, ApiKeyUncheckedUpdateWithoutUserInput>
  }

  export type ApiKeyUpdateManyWithWhereWithoutUserInput = {
    where: ApiKeyScalarWhereInput
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyWithoutUserInput>
  }

  export type ApiKeyScalarWhereInput = {
    AND?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    OR?: ApiKeyScalarWhereInput[]
    NOT?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    id?: UuidFilter<"ApiKey"> | string
    userId?: UuidFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    hashedKey?: StringFilter<"ApiKey"> | string
    keyPreview?: StringFilter<"ApiKey"> | string
    isActive?: BoolFilter<"ApiKey"> | boolean
    expiresAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    lastUsed?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    usageCount?: IntFilter<"ApiKey"> | number
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
  }

  export type EmailLogUpsertWithWhereUniqueWithoutUserInput = {
    where: EmailLogWhereUniqueInput
    update: XOR<EmailLogUpdateWithoutUserInput, EmailLogUncheckedUpdateWithoutUserInput>
    create: XOR<EmailLogCreateWithoutUserInput, EmailLogUncheckedCreateWithoutUserInput>
  }

  export type EmailLogUpdateWithWhereUniqueWithoutUserInput = {
    where: EmailLogWhereUniqueInput
    data: XOR<EmailLogUpdateWithoutUserInput, EmailLogUncheckedUpdateWithoutUserInput>
  }

  export type EmailLogUpdateManyWithWhereWithoutUserInput = {
    where: EmailLogScalarWhereInput
    data: XOR<EmailLogUpdateManyMutationInput, EmailLogUncheckedUpdateManyWithoutUserInput>
  }

  export type EmailLogScalarWhereInput = {
    AND?: EmailLogScalarWhereInput | EmailLogScalarWhereInput[]
    OR?: EmailLogScalarWhereInput[]
    NOT?: EmailLogScalarWhereInput | EmailLogScalarWhereInput[]
    id?: UuidFilter<"EmailLog"> | string
    to?: StringFilter<"EmailLog"> | string
    subject?: StringFilter<"EmailLog"> | string
    template?: StringFilter<"EmailLog"> | string
    variables?: JsonNullableFilter<"EmailLog">
    status?: EnumEmailStatusFilter<"EmailLog"> | $Enums.EmailStatus
    provider?: StringNullableFilter<"EmailLog"> | string | null
    errorMessage?: StringNullableFilter<"EmailLog"> | string | null
    sentAt?: DateTimeNullableFilter<"EmailLog"> | Date | string | null
    createdAt?: DateTimeFilter<"EmailLog"> | Date | string
    updatedAt?: DateTimeNullableFilter<"EmailLog"> | Date | string | null
    attempts?: IntFilter<"EmailLog"> | number
    maxAttempts?: IntFilter<"EmailLog"> | number
    jobId?: StringNullableFilter<"EmailLog"> | string | null
    userId?: UuidNullableFilter<"EmailLog"> | string | null
  }

  export type TemplateHistoryCreateManyTemplateInput = {
    id?: string
    name: string
    subject: string
    content: string
    version: number
    changedBy?: string | null
    reason?: string | null
    createdAt?: Date | string
  }

  export type TemplateHistoryUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateHistoryUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateHistoryUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookLogCreateManyWebhookInput = {
    id?: string
    event: string
    url: string
    payload: JsonNullValueInput | InputJsonValue
    response?: string | null
    statusCode?: number | null
    success: boolean
    errorMessage?: string | null
    responseTime?: number | null
    createdAt?: Date | string
  }

  export type WebhookLogUpdateWithoutWebhookInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    response?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookLogUncheckedUpdateWithoutWebhookInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    response?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookLogUncheckedUpdateManyWithoutWebhookInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    response?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUsageCreateManyApiKeyInput = {
    id?: string
    endpoint: string
    method: string
    ipAddress?: string | null
    userAgent?: string | null
    statusCode: number
    responseTime?: number | null
    createdAt?: Date | string
  }

  export type ApiKeyUsageUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUsageUncheckedUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUsageUncheckedUpdateManyWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateManyUserInput = {
    id?: string
    name: string
    hashedKey: string
    keyPreview: string
    isActive?: boolean
    expiresAt?: Date | string | null
    lastUsed?: Date | string | null
    usageCount?: number
    createdAt?: Date | string
  }

  export type EmailLogCreateManyUserInput = {
    id?: string
    to: string
    subject: string
    template: string
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.EmailStatus
    provider?: string | null
    errorMessage?: string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    attempts?: number
    maxAttempts?: number
    jobId?: string | null
  }

  export type ApiKeyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hashedKey?: StringFieldUpdateOperationsInput | string
    keyPreview?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usage?: ApiKeyUsageUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hashedKey?: StringFieldUpdateOperationsInput | string
    keyPreview?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usage?: ApiKeyUsageUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hashedKey?: StringFieldUpdateOperationsInput | string
    keyPreview?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}