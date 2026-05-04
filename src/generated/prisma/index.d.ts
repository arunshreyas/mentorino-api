
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
 * Model applications
 * 
 */
export type applications = $Result.DefaultSelection<Prisma.$applicationsPayload>
/**
 * Model profiles
 * 
 */
export type profiles = $Result.DefaultSelection<Prisma.$profilesPayload>
/**
 * Model bookings
 * 
 */
export type bookings = $Result.DefaultSelection<Prisma.$bookingsPayload>
/**
 * Model task_activities
 * 
 */
export type task_activities = $Result.DefaultSelection<Prisma.$task_activitiesPayload>
/**
 * Model events
 * 
 */
export type events = $Result.DefaultSelection<Prisma.$eventsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  MENTOR: 'MENTOR',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Applications
 * const applications = await prisma.applications.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Applications
   * const applications = await prisma.applications.findMany()
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
   * `prisma.applications`: Exposes CRUD operations for the **applications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.applications.findMany()
    * ```
    */
  get applications(): Prisma.applicationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profiles`: Exposes CRUD operations for the **profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profiles.findMany()
    * ```
    */
  get profiles(): Prisma.profilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookings`: Exposes CRUD operations for the **bookings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.bookings.findMany()
    * ```
    */
  get bookings(): Prisma.bookingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task_activities`: Exposes CRUD operations for the **task_activities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Task_activities
    * const task_activities = await prisma.task_activities.findMany()
    * ```
    */
  get task_activities(): Prisma.task_activitiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.events`: Exposes CRUD operations for the **events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.eventsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    applications: 'applications',
    profiles: 'profiles',
    bookings: 'bookings',
    task_activities: 'task_activities',
    events: 'events'
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
      modelProps: "applications" | "profiles" | "bookings" | "task_activities" | "events"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      applications: {
        payload: Prisma.$applicationsPayload<ExtArgs>
        fields: Prisma.applicationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.applicationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.applicationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationsPayload>
          }
          findFirst: {
            args: Prisma.applicationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.applicationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationsPayload>
          }
          findMany: {
            args: Prisma.applicationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationsPayload>[]
          }
          create: {
            args: Prisma.applicationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationsPayload>
          }
          createMany: {
            args: Prisma.applicationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.applicationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationsPayload>[]
          }
          delete: {
            args: Prisma.applicationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationsPayload>
          }
          update: {
            args: Prisma.applicationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationsPayload>
          }
          deleteMany: {
            args: Prisma.applicationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.applicationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.applicationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationsPayload>[]
          }
          upsert: {
            args: Prisma.applicationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationsPayload>
          }
          aggregate: {
            args: Prisma.ApplicationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplications>
          }
          groupBy: {
            args: Prisma.applicationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.applicationsCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationsCountAggregateOutputType> | number
          }
        }
      }
      profiles: {
        payload: Prisma.$profilesPayload<ExtArgs>
        fields: Prisma.profilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          findFirst: {
            args: Prisma.profilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          findMany: {
            args: Prisma.profilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>[]
          }
          create: {
            args: Prisma.profilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          createMany: {
            args: Prisma.profilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.profilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>[]
          }
          delete: {
            args: Prisma.profilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          update: {
            args: Prisma.profilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          deleteMany: {
            args: Prisma.profilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.profilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.profilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>[]
          }
          upsert: {
            args: Prisma.profilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          aggregate: {
            args: Prisma.ProfilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfiles>
          }
          groupBy: {
            args: Prisma.profilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.profilesCountArgs<ExtArgs>
            result: $Utils.Optional<ProfilesCountAggregateOutputType> | number
          }
        }
      }
      bookings: {
        payload: Prisma.$bookingsPayload<ExtArgs>
        fields: Prisma.bookingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          findFirst: {
            args: Prisma.bookingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          findMany: {
            args: Prisma.bookingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          create: {
            args: Prisma.bookingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          createMany: {
            args: Prisma.bookingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bookingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          delete: {
            args: Prisma.bookingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          update: {
            args: Prisma.bookingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          deleteMany: {
            args: Prisma.bookingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bookingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          upsert: {
            args: Prisma.bookingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          aggregate: {
            args: Prisma.BookingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookings>
          }
          groupBy: {
            args: Prisma.bookingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookingsCountArgs<ExtArgs>
            result: $Utils.Optional<BookingsCountAggregateOutputType> | number
          }
        }
      }
      task_activities: {
        payload: Prisma.$task_activitiesPayload<ExtArgs>
        fields: Prisma.task_activitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.task_activitiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_activitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.task_activitiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_activitiesPayload>
          }
          findFirst: {
            args: Prisma.task_activitiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_activitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.task_activitiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_activitiesPayload>
          }
          findMany: {
            args: Prisma.task_activitiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_activitiesPayload>[]
          }
          create: {
            args: Prisma.task_activitiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_activitiesPayload>
          }
          createMany: {
            args: Prisma.task_activitiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.task_activitiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_activitiesPayload>[]
          }
          delete: {
            args: Prisma.task_activitiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_activitiesPayload>
          }
          update: {
            args: Prisma.task_activitiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_activitiesPayload>
          }
          deleteMany: {
            args: Prisma.task_activitiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.task_activitiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.task_activitiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_activitiesPayload>[]
          }
          upsert: {
            args: Prisma.task_activitiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_activitiesPayload>
          }
          aggregate: {
            args: Prisma.Task_activitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask_activities>
          }
          groupBy: {
            args: Prisma.task_activitiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Task_activitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.task_activitiesCountArgs<ExtArgs>
            result: $Utils.Optional<Task_activitiesCountAggregateOutputType> | number
          }
        }
      }
      events: {
        payload: Prisma.$eventsPayload<ExtArgs>
        fields: Prisma.eventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          findFirst: {
            args: Prisma.eventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          findMany: {
            args: Prisma.eventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          create: {
            args: Prisma.eventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          createMany: {
            args: Prisma.eventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.eventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          delete: {
            args: Prisma.eventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          update: {
            args: Prisma.eventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          deleteMany: {
            args: Prisma.eventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.eventsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          upsert: {
            args: Prisma.eventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          aggregate: {
            args: Prisma.EventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvents>
          }
          groupBy: {
            args: Prisma.eventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventsCountArgs<ExtArgs>
            result: $Utils.Optional<EventsCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    applications?: applicationsOmit
    profiles?: profilesOmit
    bookings?: bookingsOmit
    task_activities?: task_activitiesOmit
    events?: eventsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ProfilesCountOutputType
   */

  export type ProfilesCountOutputType = {
    bookings: number
    task_activities: number
  }

  export type ProfilesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ProfilesCountOutputTypeCountBookingsArgs
    task_activities?: boolean | ProfilesCountOutputTypeCountTask_activitiesArgs
  }

  // Custom InputTypes
  /**
   * ProfilesCountOutputType without action
   */
  export type ProfilesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilesCountOutputType
     */
    select?: ProfilesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfilesCountOutputType without action
   */
  export type ProfilesCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
  }

  /**
   * ProfilesCountOutputType without action
   */
  export type ProfilesCountOutputTypeCountTask_activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: task_activitiesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model applications
   */

  export type AggregateApplications = {
    _count: ApplicationsCountAggregateOutputType | null
    _min: ApplicationsMinAggregateOutputType | null
    _max: ApplicationsMaxAggregateOutputType | null
  }

  export type ApplicationsMinAggregateOutputType = {
    id: string | null
    user_email: string | null
    mentor_type: string | null
    status: string | null
    created_at: Date | null
  }

  export type ApplicationsMaxAggregateOutputType = {
    id: string | null
    user_email: string | null
    mentor_type: string | null
    status: string | null
    created_at: Date | null
  }

  export type ApplicationsCountAggregateOutputType = {
    id: number
    user_email: number
    mentor_type: number
    responses: number
    status: number
    created_at: number
    _all: number
  }


  export type ApplicationsMinAggregateInputType = {
    id?: true
    user_email?: true
    mentor_type?: true
    status?: true
    created_at?: true
  }

  export type ApplicationsMaxAggregateInputType = {
    id?: true
    user_email?: true
    mentor_type?: true
    status?: true
    created_at?: true
  }

  export type ApplicationsCountAggregateInputType = {
    id?: true
    user_email?: true
    mentor_type?: true
    responses?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type ApplicationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which applications to aggregate.
     */
    where?: applicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationsOrderByWithRelationInput | applicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: applicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned applications
    **/
    _count?: true | ApplicationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationsMaxAggregateInputType
  }

  export type GetApplicationsAggregateType<T extends ApplicationsAggregateArgs> = {
        [P in keyof T & keyof AggregateApplications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplications[P]>
      : GetScalarType<T[P], AggregateApplications[P]>
  }




  export type applicationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applicationsWhereInput
    orderBy?: applicationsOrderByWithAggregationInput | applicationsOrderByWithAggregationInput[]
    by: ApplicationsScalarFieldEnum[] | ApplicationsScalarFieldEnum
    having?: applicationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationsCountAggregateInputType | true
    _min?: ApplicationsMinAggregateInputType
    _max?: ApplicationsMaxAggregateInputType
  }

  export type ApplicationsGroupByOutputType = {
    id: string
    user_email: string
    mentor_type: string | null
    responses: JsonValue | null
    status: string
    created_at: Date
    _count: ApplicationsCountAggregateOutputType | null
    _min: ApplicationsMinAggregateOutputType | null
    _max: ApplicationsMaxAggregateOutputType | null
  }

  type GetApplicationsGroupByPayload<T extends applicationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationsGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationsGroupByOutputType[P]>
        }
      >
    >


  export type applicationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_email?: boolean
    mentor_type?: boolean
    responses?: boolean
    status?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["applications"]>

  export type applicationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_email?: boolean
    mentor_type?: boolean
    responses?: boolean
    status?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["applications"]>

  export type applicationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_email?: boolean
    mentor_type?: boolean
    responses?: boolean
    status?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["applications"]>

  export type applicationsSelectScalar = {
    id?: boolean
    user_email?: boolean
    mentor_type?: boolean
    responses?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type applicationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_email" | "mentor_type" | "responses" | "status" | "created_at", ExtArgs["result"]["applications"]>

  export type $applicationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "applications"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_email: string
      mentor_type: string | null
      responses: Prisma.JsonValue | null
      status: string
      created_at: Date
    }, ExtArgs["result"]["applications"]>
    composites: {}
  }

  type applicationsGetPayload<S extends boolean | null | undefined | applicationsDefaultArgs> = $Result.GetResult<Prisma.$applicationsPayload, S>

  type applicationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<applicationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationsCountAggregateInputType | true
    }

  export interface applicationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['applications'], meta: { name: 'applications' } }
    /**
     * Find zero or one Applications that matches the filter.
     * @param {applicationsFindUniqueArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends applicationsFindUniqueArgs>(args: SelectSubset<T, applicationsFindUniqueArgs<ExtArgs>>): Prisma__applicationsClient<$Result.GetResult<Prisma.$applicationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Applications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {applicationsFindUniqueOrThrowArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends applicationsFindUniqueOrThrowArgs>(args: SelectSubset<T, applicationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__applicationsClient<$Result.GetResult<Prisma.$applicationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationsFindFirstArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends applicationsFindFirstArgs>(args?: SelectSubset<T, applicationsFindFirstArgs<ExtArgs>>): Prisma__applicationsClient<$Result.GetResult<Prisma.$applicationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationsFindFirstOrThrowArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends applicationsFindFirstOrThrowArgs>(args?: SelectSubset<T, applicationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__applicationsClient<$Result.GetResult<Prisma.$applicationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.applications.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.applications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationsWithIdOnly = await prisma.applications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends applicationsFindManyArgs>(args?: SelectSubset<T, applicationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Applications.
     * @param {applicationsCreateArgs} args - Arguments to create a Applications.
     * @example
     * // Create one Applications
     * const Applications = await prisma.applications.create({
     *   data: {
     *     // ... data to create a Applications
     *   }
     * })
     * 
     */
    create<T extends applicationsCreateArgs>(args: SelectSubset<T, applicationsCreateArgs<ExtArgs>>): Prisma__applicationsClient<$Result.GetResult<Prisma.$applicationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {applicationsCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const applications = await prisma.applications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends applicationsCreateManyArgs>(args?: SelectSubset<T, applicationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {applicationsCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const applications = await prisma.applications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationsWithIdOnly = await prisma.applications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends applicationsCreateManyAndReturnArgs>(args?: SelectSubset<T, applicationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Applications.
     * @param {applicationsDeleteArgs} args - Arguments to delete one Applications.
     * @example
     * // Delete one Applications
     * const Applications = await prisma.applications.delete({
     *   where: {
     *     // ... filter to delete one Applications
     *   }
     * })
     * 
     */
    delete<T extends applicationsDeleteArgs>(args: SelectSubset<T, applicationsDeleteArgs<ExtArgs>>): Prisma__applicationsClient<$Result.GetResult<Prisma.$applicationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Applications.
     * @param {applicationsUpdateArgs} args - Arguments to update one Applications.
     * @example
     * // Update one Applications
     * const applications = await prisma.applications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends applicationsUpdateArgs>(args: SelectSubset<T, applicationsUpdateArgs<ExtArgs>>): Prisma__applicationsClient<$Result.GetResult<Prisma.$applicationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {applicationsDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.applications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends applicationsDeleteManyArgs>(args?: SelectSubset<T, applicationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const applications = await prisma.applications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends applicationsUpdateManyArgs>(args: SelectSubset<T, applicationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {applicationsUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const applications = await prisma.applications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationsWithIdOnly = await prisma.applications.updateManyAndReturn({
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
    updateManyAndReturn<T extends applicationsUpdateManyAndReturnArgs>(args: SelectSubset<T, applicationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Applications.
     * @param {applicationsUpsertArgs} args - Arguments to update or create a Applications.
     * @example
     * // Update or create a Applications
     * const applications = await prisma.applications.upsert({
     *   create: {
     *     // ... data to create a Applications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Applications we want to update
     *   }
     * })
     */
    upsert<T extends applicationsUpsertArgs>(args: SelectSubset<T, applicationsUpsertArgs<ExtArgs>>): Prisma__applicationsClient<$Result.GetResult<Prisma.$applicationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationsCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.applications.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends applicationsCountArgs>(
      args?: Subset<T, applicationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicationsAggregateArgs>(args: Subset<T, ApplicationsAggregateArgs>): Prisma.PrismaPromise<GetApplicationsAggregateType<T>>

    /**
     * Group by Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationsGroupByArgs} args - Group by arguments.
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
      T extends applicationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: applicationsGroupByArgs['orderBy'] }
        : { orderBy?: applicationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, applicationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the applications model
   */
  readonly fields: applicationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for applications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__applicationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the applications model
   */
  interface applicationsFieldRefs {
    readonly id: FieldRef<"applications", 'String'>
    readonly user_email: FieldRef<"applications", 'String'>
    readonly mentor_type: FieldRef<"applications", 'String'>
    readonly responses: FieldRef<"applications", 'Json'>
    readonly status: FieldRef<"applications", 'String'>
    readonly created_at: FieldRef<"applications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * applications findUnique
   */
  export type applicationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applications
     */
    select?: applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applications
     */
    omit?: applicationsOmit<ExtArgs> | null
    /**
     * Filter, which applications to fetch.
     */
    where: applicationsWhereUniqueInput
  }

  /**
   * applications findUniqueOrThrow
   */
  export type applicationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applications
     */
    select?: applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applications
     */
    omit?: applicationsOmit<ExtArgs> | null
    /**
     * Filter, which applications to fetch.
     */
    where: applicationsWhereUniqueInput
  }

  /**
   * applications findFirst
   */
  export type applicationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applications
     */
    select?: applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applications
     */
    omit?: applicationsOmit<ExtArgs> | null
    /**
     * Filter, which applications to fetch.
     */
    where?: applicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationsOrderByWithRelationInput | applicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for applications.
     */
    cursor?: applicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of applications.
     */
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * applications findFirstOrThrow
   */
  export type applicationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applications
     */
    select?: applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applications
     */
    omit?: applicationsOmit<ExtArgs> | null
    /**
     * Filter, which applications to fetch.
     */
    where?: applicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationsOrderByWithRelationInput | applicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for applications.
     */
    cursor?: applicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of applications.
     */
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * applications findMany
   */
  export type applicationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applications
     */
    select?: applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applications
     */
    omit?: applicationsOmit<ExtArgs> | null
    /**
     * Filter, which applications to fetch.
     */
    where?: applicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationsOrderByWithRelationInput | applicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing applications.
     */
    cursor?: applicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applications.
     */
    skip?: number
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * applications create
   */
  export type applicationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applications
     */
    select?: applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applications
     */
    omit?: applicationsOmit<ExtArgs> | null
    /**
     * The data needed to create a applications.
     */
    data: XOR<applicationsCreateInput, applicationsUncheckedCreateInput>
  }

  /**
   * applications createMany
   */
  export type applicationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many applications.
     */
    data: applicationsCreateManyInput | applicationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * applications createManyAndReturn
   */
  export type applicationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applications
     */
    select?: applicationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the applications
     */
    omit?: applicationsOmit<ExtArgs> | null
    /**
     * The data used to create many applications.
     */
    data: applicationsCreateManyInput | applicationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * applications update
   */
  export type applicationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applications
     */
    select?: applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applications
     */
    omit?: applicationsOmit<ExtArgs> | null
    /**
     * The data needed to update a applications.
     */
    data: XOR<applicationsUpdateInput, applicationsUncheckedUpdateInput>
    /**
     * Choose, which applications to update.
     */
    where: applicationsWhereUniqueInput
  }

  /**
   * applications updateMany
   */
  export type applicationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update applications.
     */
    data: XOR<applicationsUpdateManyMutationInput, applicationsUncheckedUpdateManyInput>
    /**
     * Filter which applications to update
     */
    where?: applicationsWhereInput
    /**
     * Limit how many applications to update.
     */
    limit?: number
  }

  /**
   * applications updateManyAndReturn
   */
  export type applicationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applications
     */
    select?: applicationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the applications
     */
    omit?: applicationsOmit<ExtArgs> | null
    /**
     * The data used to update applications.
     */
    data: XOR<applicationsUpdateManyMutationInput, applicationsUncheckedUpdateManyInput>
    /**
     * Filter which applications to update
     */
    where?: applicationsWhereInput
    /**
     * Limit how many applications to update.
     */
    limit?: number
  }

  /**
   * applications upsert
   */
  export type applicationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applications
     */
    select?: applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applications
     */
    omit?: applicationsOmit<ExtArgs> | null
    /**
     * The filter to search for the applications to update in case it exists.
     */
    where: applicationsWhereUniqueInput
    /**
     * In case the applications found by the `where` argument doesn't exist, create a new applications with this data.
     */
    create: XOR<applicationsCreateInput, applicationsUncheckedCreateInput>
    /**
     * In case the applications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<applicationsUpdateInput, applicationsUncheckedUpdateInput>
  }

  /**
   * applications delete
   */
  export type applicationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applications
     */
    select?: applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applications
     */
    omit?: applicationsOmit<ExtArgs> | null
    /**
     * Filter which applications to delete.
     */
    where: applicationsWhereUniqueInput
  }

  /**
   * applications deleteMany
   */
  export type applicationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which applications to delete
     */
    where?: applicationsWhereInput
    /**
     * Limit how many applications to delete.
     */
    limit?: number
  }

  /**
   * applications without action
   */
  export type applicationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applications
     */
    select?: applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applications
     */
    omit?: applicationsOmit<ExtArgs> | null
  }


  /**
   * Model profiles
   */

  export type AggregateProfiles = {
    _count: ProfilesCountAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  export type ProfilesMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    created_at: Date | null
  }

  export type ProfilesMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    created_at: Date | null
  }

  export type ProfilesCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    role: number
    tasks: number
    created_at: number
    _all: number
  }


  export type ProfilesMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    created_at?: true
  }

  export type ProfilesMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    created_at?: true
  }

  export type ProfilesCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    tasks?: true
    created_at?: true
    _all?: true
  }

  export type ProfilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profiles to aggregate.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profiles
    **/
    _count?: true | ProfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfilesMaxAggregateInputType
  }

  export type GetProfilesAggregateType<T extends ProfilesAggregateArgs> = {
        [P in keyof T & keyof AggregateProfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfiles[P]>
      : GetScalarType<T[P], AggregateProfiles[P]>
  }




  export type profilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profilesWhereInput
    orderBy?: profilesOrderByWithAggregationInput | profilesOrderByWithAggregationInput[]
    by: ProfilesScalarFieldEnum[] | ProfilesScalarFieldEnum
    having?: profilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfilesCountAggregateInputType | true
    _min?: ProfilesMinAggregateInputType
    _max?: ProfilesMaxAggregateInputType
  }

  export type ProfilesGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string | null
    role: $Enums.Role
    tasks: JsonValue
    created_at: Date
    _count: ProfilesCountAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  type GetProfilesGroupByPayload<T extends profilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
            : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
        }
      >
    >


  export type profilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    tasks?: boolean
    created_at?: boolean
    bookings?: boolean | profiles$bookingsArgs<ExtArgs>
    task_activities?: boolean | profiles$task_activitiesArgs<ExtArgs>
    _count?: boolean | ProfilesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profiles"]>

  export type profilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    tasks?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["profiles"]>

  export type profilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    tasks?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["profiles"]>

  export type profilesSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    tasks?: boolean
    created_at?: boolean
  }

  export type profilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "role" | "tasks" | "created_at", ExtArgs["result"]["profiles"]>
  export type profilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | profiles$bookingsArgs<ExtArgs>
    task_activities?: boolean | profiles$task_activitiesArgs<ExtArgs>
    _count?: boolean | ProfilesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type profilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type profilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $profilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profiles"
    objects: {
      bookings: Prisma.$bookingsPayload<ExtArgs>[]
      task_activities: Prisma.$task_activitiesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string | null
      role: $Enums.Role
      tasks: Prisma.JsonValue
      created_at: Date
    }, ExtArgs["result"]["profiles"]>
    composites: {}
  }

  type profilesGetPayload<S extends boolean | null | undefined | profilesDefaultArgs> = $Result.GetResult<Prisma.$profilesPayload, S>

  type profilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<profilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfilesCountAggregateInputType | true
    }

  export interface profilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profiles'], meta: { name: 'profiles' } }
    /**
     * Find zero or one Profiles that matches the filter.
     * @param {profilesFindUniqueArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profilesFindUniqueArgs>(args: SelectSubset<T, profilesFindUniqueArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profilesFindUniqueOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profilesFindUniqueOrThrowArgs>(args: SelectSubset<T, profilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindFirstArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profilesFindFirstArgs>(args?: SelectSubset<T, profilesFindFirstArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindFirstOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profilesFindFirstOrThrowArgs>(args?: SelectSubset<T, profilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profiles.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profilesWithIdOnly = await prisma.profiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends profilesFindManyArgs>(args?: SelectSubset<T, profilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profiles.
     * @param {profilesCreateArgs} args - Arguments to create a Profiles.
     * @example
     * // Create one Profiles
     * const Profiles = await prisma.profiles.create({
     *   data: {
     *     // ... data to create a Profiles
     *   }
     * })
     * 
     */
    create<T extends profilesCreateArgs>(args: SelectSubset<T, profilesCreateArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {profilesCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends profilesCreateManyArgs>(args?: SelectSubset<T, profilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {profilesCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profilesWithIdOnly = await prisma.profiles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends profilesCreateManyAndReturnArgs>(args?: SelectSubset<T, profilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profiles.
     * @param {profilesDeleteArgs} args - Arguments to delete one Profiles.
     * @example
     * // Delete one Profiles
     * const Profiles = await prisma.profiles.delete({
     *   where: {
     *     // ... filter to delete one Profiles
     *   }
     * })
     * 
     */
    delete<T extends profilesDeleteArgs>(args: SelectSubset<T, profilesDeleteArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profiles.
     * @param {profilesUpdateArgs} args - Arguments to update one Profiles.
     * @example
     * // Update one Profiles
     * const profiles = await prisma.profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends profilesUpdateArgs>(args: SelectSubset<T, profilesUpdateArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {profilesDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends profilesDeleteManyArgs>(args?: SelectSubset<T, profilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends profilesUpdateManyArgs>(args: SelectSubset<T, profilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {profilesUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profilesWithIdOnly = await prisma.profiles.updateManyAndReturn({
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
    updateManyAndReturn<T extends profilesUpdateManyAndReturnArgs>(args: SelectSubset<T, profilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profiles.
     * @param {profilesUpsertArgs} args - Arguments to update or create a Profiles.
     * @example
     * // Update or create a Profiles
     * const profiles = await prisma.profiles.upsert({
     *   create: {
     *     // ... data to create a Profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profiles we want to update
     *   }
     * })
     */
    upsert<T extends profilesUpsertArgs>(args: SelectSubset<T, profilesUpsertArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profiles.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends profilesCountArgs>(
      args?: Subset<T, profilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfilesAggregateArgs>(args: Subset<T, ProfilesAggregateArgs>): Prisma.PrismaPromise<GetProfilesAggregateType<T>>

    /**
     * Group by Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesGroupByArgs} args - Group by arguments.
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
      T extends profilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profilesGroupByArgs['orderBy'] }
        : { orderBy?: profilesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, profilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profiles model
   */
  readonly fields: profilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends profiles$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, profiles$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    task_activities<T extends profiles$task_activitiesArgs<ExtArgs> = {}>(args?: Subset<T, profiles$task_activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_activitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the profiles model
   */
  interface profilesFieldRefs {
    readonly id: FieldRef<"profiles", 'String'>
    readonly email: FieldRef<"profiles", 'String'>
    readonly name: FieldRef<"profiles", 'String'>
    readonly password: FieldRef<"profiles", 'String'>
    readonly role: FieldRef<"profiles", 'Role'>
    readonly tasks: FieldRef<"profiles", 'Json'>
    readonly created_at: FieldRef<"profiles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * profiles findUnique
   */
  export type profilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles findUniqueOrThrow
   */
  export type profilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles findFirst
   */
  export type profilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles findFirstOrThrow
   */
  export type profilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles findMany
   */
  export type profilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles create
   */
  export type profilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * The data needed to create a profiles.
     */
    data: XOR<profilesCreateInput, profilesUncheckedCreateInput>
  }

  /**
   * profiles createMany
   */
  export type profilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profiles.
     */
    data: profilesCreateManyInput | profilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profiles createManyAndReturn
   */
  export type profilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * The data used to create many profiles.
     */
    data: profilesCreateManyInput | profilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profiles update
   */
  export type profilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * The data needed to update a profiles.
     */
    data: XOR<profilesUpdateInput, profilesUncheckedUpdateInput>
    /**
     * Choose, which profiles to update.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles updateMany
   */
  export type profilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profiles.
     */
    data: XOR<profilesUpdateManyMutationInput, profilesUncheckedUpdateManyInput>
    /**
     * Filter which profiles to update
     */
    where?: profilesWhereInput
    /**
     * Limit how many profiles to update.
     */
    limit?: number
  }

  /**
   * profiles updateManyAndReturn
   */
  export type profilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * The data used to update profiles.
     */
    data: XOR<profilesUpdateManyMutationInput, profilesUncheckedUpdateManyInput>
    /**
     * Filter which profiles to update
     */
    where?: profilesWhereInput
    /**
     * Limit how many profiles to update.
     */
    limit?: number
  }

  /**
   * profiles upsert
   */
  export type profilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * The filter to search for the profiles to update in case it exists.
     */
    where: profilesWhereUniqueInput
    /**
     * In case the profiles found by the `where` argument doesn't exist, create a new profiles with this data.
     */
    create: XOR<profilesCreateInput, profilesUncheckedCreateInput>
    /**
     * In case the profiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profilesUpdateInput, profilesUncheckedUpdateInput>
  }

  /**
   * profiles delete
   */
  export type profilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter which profiles to delete.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles deleteMany
   */
  export type profilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profiles to delete
     */
    where?: profilesWhereInput
    /**
     * Limit how many profiles to delete.
     */
    limit?: number
  }

  /**
   * profiles.bookings
   */
  export type profiles$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    cursor?: bookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * profiles.task_activities
   */
  export type profiles$task_activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_activities
     */
    select?: task_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_activities
     */
    omit?: task_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_activitiesInclude<ExtArgs> | null
    where?: task_activitiesWhereInput
    orderBy?: task_activitiesOrderByWithRelationInput | task_activitiesOrderByWithRelationInput[]
    cursor?: task_activitiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Task_activitiesScalarFieldEnum | Task_activitiesScalarFieldEnum[]
  }

  /**
   * profiles without action
   */
  export type profilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
  }


  /**
   * Model bookings
   */

  export type AggregateBookings = {
    _count: BookingsCountAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  export type BookingsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    user_name: string | null
    date: string | null
    time: string | null
    status: string | null
    notes: string | null
  }

  export type BookingsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    user_name: string | null
    date: string | null
    time: string | null
    status: string | null
    notes: string | null
  }

  export type BookingsCountAggregateOutputType = {
    id: number
    user_id: number
    user_name: number
    date: number
    time: number
    status: number
    notes: number
    _all: number
  }


  export type BookingsMinAggregateInputType = {
    id?: true
    user_id?: true
    user_name?: true
    date?: true
    time?: true
    status?: true
    notes?: true
  }

  export type BookingsMaxAggregateInputType = {
    id?: true
    user_id?: true
    user_name?: true
    date?: true
    time?: true
    status?: true
    notes?: true
  }

  export type BookingsCountAggregateInputType = {
    id?: true
    user_id?: true
    user_name?: true
    date?: true
    time?: true
    status?: true
    notes?: true
    _all?: true
  }

  export type BookingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to aggregate.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bookings
    **/
    _count?: true | BookingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingsMaxAggregateInputType
  }

  export type GetBookingsAggregateType<T extends BookingsAggregateArgs> = {
        [P in keyof T & keyof AggregateBookings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookings[P]>
      : GetScalarType<T[P], AggregateBookings[P]>
  }




  export type bookingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithAggregationInput | bookingsOrderByWithAggregationInput[]
    by: BookingsScalarFieldEnum[] | BookingsScalarFieldEnum
    having?: bookingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingsCountAggregateInputType | true
    _min?: BookingsMinAggregateInputType
    _max?: BookingsMaxAggregateInputType
  }

  export type BookingsGroupByOutputType = {
    id: string
    user_id: string
    user_name: string | null
    date: string
    time: string
    status: string
    notes: string | null
    _count: BookingsCountAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  type GetBookingsGroupByPayload<T extends bookingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingsGroupByOutputType[P]>
            : GetScalarType<T[P], BookingsGroupByOutputType[P]>
        }
      >
    >


  export type bookingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    user_name?: boolean
    date?: boolean
    time?: boolean
    status?: boolean
    notes?: boolean
    user?: boolean | profilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    user_name?: boolean
    date?: boolean
    time?: boolean
    status?: boolean
    notes?: boolean
    user?: boolean | profilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    user_name?: boolean
    date?: boolean
    time?: boolean
    status?: boolean
    notes?: boolean
    user?: boolean | profilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectScalar = {
    id?: boolean
    user_id?: boolean
    user_name?: boolean
    date?: boolean
    time?: boolean
    status?: boolean
    notes?: boolean
  }

  export type bookingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "user_name" | "date" | "time" | "status" | "notes", ExtArgs["result"]["bookings"]>
  export type bookingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | profilesDefaultArgs<ExtArgs>
  }
  export type bookingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | profilesDefaultArgs<ExtArgs>
  }
  export type bookingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | profilesDefaultArgs<ExtArgs>
  }

  export type $bookingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bookings"
    objects: {
      user: Prisma.$profilesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      user_name: string | null
      date: string
      time: string
      status: string
      notes: string | null
    }, ExtArgs["result"]["bookings"]>
    composites: {}
  }

  type bookingsGetPayload<S extends boolean | null | undefined | bookingsDefaultArgs> = $Result.GetResult<Prisma.$bookingsPayload, S>

  type bookingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingsCountAggregateInputType | true
    }

  export interface bookingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bookings'], meta: { name: 'bookings' } }
    /**
     * Find zero or one Bookings that matches the filter.
     * @param {bookingsFindUniqueArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookingsFindUniqueArgs>(args: SelectSubset<T, bookingsFindUniqueArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookingsFindUniqueOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookingsFindUniqueOrThrowArgs>(args: SelectSubset<T, bookingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindFirstArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookingsFindFirstArgs>(args?: SelectSubset<T, bookingsFindFirstArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindFirstOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookingsFindFirstOrThrowArgs>(args?: SelectSubset<T, bookingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.bookings.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.bookings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingsWithIdOnly = await prisma.bookings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bookingsFindManyArgs>(args?: SelectSubset<T, bookingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookings.
     * @param {bookingsCreateArgs} args - Arguments to create a Bookings.
     * @example
     * // Create one Bookings
     * const Bookings = await prisma.bookings.create({
     *   data: {
     *     // ... data to create a Bookings
     *   }
     * })
     * 
     */
    create<T extends bookingsCreateArgs>(args: SelectSubset<T, bookingsCreateArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {bookingsCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookingsCreateManyArgs>(args?: SelectSubset<T, bookingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {bookingsCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingsWithIdOnly = await prisma.bookings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bookingsCreateManyAndReturnArgs>(args?: SelectSubset<T, bookingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bookings.
     * @param {bookingsDeleteArgs} args - Arguments to delete one Bookings.
     * @example
     * // Delete one Bookings
     * const Bookings = await prisma.bookings.delete({
     *   where: {
     *     // ... filter to delete one Bookings
     *   }
     * })
     * 
     */
    delete<T extends bookingsDeleteArgs>(args: SelectSubset<T, bookingsDeleteArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookings.
     * @param {bookingsUpdateArgs} args - Arguments to update one Bookings.
     * @example
     * // Update one Bookings
     * const bookings = await prisma.bookings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookingsUpdateArgs>(args: SelectSubset<T, bookingsUpdateArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {bookingsDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.bookings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookingsDeleteManyArgs>(args?: SelectSubset<T, bookingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookingsUpdateManyArgs>(args: SelectSubset<T, bookingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {bookingsUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingsWithIdOnly = await prisma.bookings.updateManyAndReturn({
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
    updateManyAndReturn<T extends bookingsUpdateManyAndReturnArgs>(args: SelectSubset<T, bookingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bookings.
     * @param {bookingsUpsertArgs} args - Arguments to update or create a Bookings.
     * @example
     * // Update or create a Bookings
     * const bookings = await prisma.bookings.upsert({
     *   create: {
     *     // ... data to create a Bookings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookings we want to update
     *   }
     * })
     */
    upsert<T extends bookingsUpsertArgs>(args: SelectSubset<T, bookingsUpsertArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.bookings.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends bookingsCountArgs>(
      args?: Subset<T, bookingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingsAggregateArgs>(args: Subset<T, BookingsAggregateArgs>): Prisma.PrismaPromise<GetBookingsAggregateType<T>>

    /**
     * Group by Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsGroupByArgs} args - Group by arguments.
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
      T extends bookingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookingsGroupByArgs['orderBy'] }
        : { orderBy?: bookingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bookingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bookings model
   */
  readonly fields: bookingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bookings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends profilesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, profilesDefaultArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the bookings model
   */
  interface bookingsFieldRefs {
    readonly id: FieldRef<"bookings", 'String'>
    readonly user_id: FieldRef<"bookings", 'String'>
    readonly user_name: FieldRef<"bookings", 'String'>
    readonly date: FieldRef<"bookings", 'String'>
    readonly time: FieldRef<"bookings", 'String'>
    readonly status: FieldRef<"bookings", 'String'>
    readonly notes: FieldRef<"bookings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * bookings findUnique
   */
  export type bookingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings findUniqueOrThrow
   */
  export type bookingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings findFirst
   */
  export type bookingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings findFirstOrThrow
   */
  export type bookingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings findMany
   */
  export type bookingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings create
   */
  export type bookingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The data needed to create a bookings.
     */
    data: XOR<bookingsCreateInput, bookingsUncheckedCreateInput>
  }

  /**
   * bookings createMany
   */
  export type bookingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookings.
     */
    data: bookingsCreateManyInput | bookingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bookings createManyAndReturn
   */
  export type bookingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * The data used to create many bookings.
     */
    data: bookingsCreateManyInput | bookingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookings update
   */
  export type bookingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The data needed to update a bookings.
     */
    data: XOR<bookingsUpdateInput, bookingsUncheckedUpdateInput>
    /**
     * Choose, which bookings to update.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings updateMany
   */
  export type bookingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
  }

  /**
   * bookings updateManyAndReturn
   */
  export type bookingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookings upsert
   */
  export type bookingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The filter to search for the bookings to update in case it exists.
     */
    where: bookingsWhereUniqueInput
    /**
     * In case the bookings found by the `where` argument doesn't exist, create a new bookings with this data.
     */
    create: XOR<bookingsCreateInput, bookingsUncheckedCreateInput>
    /**
     * In case the bookings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookingsUpdateInput, bookingsUncheckedUpdateInput>
  }

  /**
   * bookings delete
   */
  export type bookingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter which bookings to delete.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings deleteMany
   */
  export type bookingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to delete
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to delete.
     */
    limit?: number
  }

  /**
   * bookings without action
   */
  export type bookingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
  }


  /**
   * Model task_activities
   */

  export type AggregateTask_activities = {
    _count: Task_activitiesCountAggregateOutputType | null
    _min: Task_activitiesMinAggregateOutputType | null
    _max: Task_activitiesMaxAggregateOutputType | null
  }

  export type Task_activitiesMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    user_name: string | null
    status: string | null
    admin_response: string | null
    pb_card_details: string | null
    pb_linkedin_url: string | null
    pb_resume_link: string | null
    pb_cover_letter_link: string | null
    pb_dress_code_notes: string | null
    pb_greeting_intro_notes: string | null
    net_attended_event: string | null
    net_people_met: string | null
    net_contact_info: string | null
    net_panel_summary: string | null
    pw_introduction: string | null
    pw_volunteer_hours: string | null
    cert_topic: string | null
    roadmap_topic: string | null
    interview_recommendation: string | null
    created_at: Date | null
  }

  export type Task_activitiesMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    user_name: string | null
    status: string | null
    admin_response: string | null
    pb_card_details: string | null
    pb_linkedin_url: string | null
    pb_resume_link: string | null
    pb_cover_letter_link: string | null
    pb_dress_code_notes: string | null
    pb_greeting_intro_notes: string | null
    net_attended_event: string | null
    net_people_met: string | null
    net_contact_info: string | null
    net_panel_summary: string | null
    pw_introduction: string | null
    pw_volunteer_hours: string | null
    cert_topic: string | null
    roadmap_topic: string | null
    interview_recommendation: string | null
    created_at: Date | null
  }

  export type Task_activitiesCountAggregateOutputType = {
    id: number
    user_id: number
    user_name: number
    status: number
    admin_response: number
    pb_card_details: number
    pb_linkedin_url: number
    pb_resume_link: number
    pb_cover_letter_link: number
    pb_dress_code_notes: number
    pb_greeting_intro_notes: number
    net_attended_event: number
    net_people_met: number
    net_contact_info: number
    net_panel_summary: number
    pw_introduction: number
    pw_volunteer_hours: number
    cert_topic: number
    roadmap_topic: number
    interview_recommendation: number
    created_at: number
    _all: number
  }


  export type Task_activitiesMinAggregateInputType = {
    id?: true
    user_id?: true
    user_name?: true
    status?: true
    admin_response?: true
    pb_card_details?: true
    pb_linkedin_url?: true
    pb_resume_link?: true
    pb_cover_letter_link?: true
    pb_dress_code_notes?: true
    pb_greeting_intro_notes?: true
    net_attended_event?: true
    net_people_met?: true
    net_contact_info?: true
    net_panel_summary?: true
    pw_introduction?: true
    pw_volunteer_hours?: true
    cert_topic?: true
    roadmap_topic?: true
    interview_recommendation?: true
    created_at?: true
  }

  export type Task_activitiesMaxAggregateInputType = {
    id?: true
    user_id?: true
    user_name?: true
    status?: true
    admin_response?: true
    pb_card_details?: true
    pb_linkedin_url?: true
    pb_resume_link?: true
    pb_cover_letter_link?: true
    pb_dress_code_notes?: true
    pb_greeting_intro_notes?: true
    net_attended_event?: true
    net_people_met?: true
    net_contact_info?: true
    net_panel_summary?: true
    pw_introduction?: true
    pw_volunteer_hours?: true
    cert_topic?: true
    roadmap_topic?: true
    interview_recommendation?: true
    created_at?: true
  }

  export type Task_activitiesCountAggregateInputType = {
    id?: true
    user_id?: true
    user_name?: true
    status?: true
    admin_response?: true
    pb_card_details?: true
    pb_linkedin_url?: true
    pb_resume_link?: true
    pb_cover_letter_link?: true
    pb_dress_code_notes?: true
    pb_greeting_intro_notes?: true
    net_attended_event?: true
    net_people_met?: true
    net_contact_info?: true
    net_panel_summary?: true
    pw_introduction?: true
    pw_volunteer_hours?: true
    cert_topic?: true
    roadmap_topic?: true
    interview_recommendation?: true
    created_at?: true
    _all?: true
  }

  export type Task_activitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task_activities to aggregate.
     */
    where?: task_activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_activities to fetch.
     */
    orderBy?: task_activitiesOrderByWithRelationInput | task_activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: task_activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned task_activities
    **/
    _count?: true | Task_activitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Task_activitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Task_activitiesMaxAggregateInputType
  }

  export type GetTask_activitiesAggregateType<T extends Task_activitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateTask_activities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask_activities[P]>
      : GetScalarType<T[P], AggregateTask_activities[P]>
  }




  export type task_activitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: task_activitiesWhereInput
    orderBy?: task_activitiesOrderByWithAggregationInput | task_activitiesOrderByWithAggregationInput[]
    by: Task_activitiesScalarFieldEnum[] | Task_activitiesScalarFieldEnum
    having?: task_activitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Task_activitiesCountAggregateInputType | true
    _min?: Task_activitiesMinAggregateInputType
    _max?: Task_activitiesMaxAggregateInputType
  }

  export type Task_activitiesGroupByOutputType = {
    id: string
    user_id: string
    user_name: string | null
    status: string
    admin_response: string | null
    pb_card_details: string | null
    pb_linkedin_url: string | null
    pb_resume_link: string | null
    pb_cover_letter_link: string | null
    pb_dress_code_notes: string | null
    pb_greeting_intro_notes: string | null
    net_attended_event: string | null
    net_people_met: string | null
    net_contact_info: string | null
    net_panel_summary: string | null
    pw_introduction: string | null
    pw_volunteer_hours: string | null
    cert_topic: string | null
    roadmap_topic: string | null
    interview_recommendation: string | null
    created_at: Date
    _count: Task_activitiesCountAggregateOutputType | null
    _min: Task_activitiesMinAggregateOutputType | null
    _max: Task_activitiesMaxAggregateOutputType | null
  }

  type GetTask_activitiesGroupByPayload<T extends task_activitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Task_activitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Task_activitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Task_activitiesGroupByOutputType[P]>
            : GetScalarType<T[P], Task_activitiesGroupByOutputType[P]>
        }
      >
    >


  export type task_activitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    user_name?: boolean
    status?: boolean
    admin_response?: boolean
    pb_card_details?: boolean
    pb_linkedin_url?: boolean
    pb_resume_link?: boolean
    pb_cover_letter_link?: boolean
    pb_dress_code_notes?: boolean
    pb_greeting_intro_notes?: boolean
    net_attended_event?: boolean
    net_people_met?: boolean
    net_contact_info?: boolean
    net_panel_summary?: boolean
    pw_introduction?: boolean
    pw_volunteer_hours?: boolean
    cert_topic?: boolean
    roadmap_topic?: boolean
    interview_recommendation?: boolean
    created_at?: boolean
    user?: boolean | profilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task_activities"]>

  export type task_activitiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    user_name?: boolean
    status?: boolean
    admin_response?: boolean
    pb_card_details?: boolean
    pb_linkedin_url?: boolean
    pb_resume_link?: boolean
    pb_cover_letter_link?: boolean
    pb_dress_code_notes?: boolean
    pb_greeting_intro_notes?: boolean
    net_attended_event?: boolean
    net_people_met?: boolean
    net_contact_info?: boolean
    net_panel_summary?: boolean
    pw_introduction?: boolean
    pw_volunteer_hours?: boolean
    cert_topic?: boolean
    roadmap_topic?: boolean
    interview_recommendation?: boolean
    created_at?: boolean
    user?: boolean | profilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task_activities"]>

  export type task_activitiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    user_name?: boolean
    status?: boolean
    admin_response?: boolean
    pb_card_details?: boolean
    pb_linkedin_url?: boolean
    pb_resume_link?: boolean
    pb_cover_letter_link?: boolean
    pb_dress_code_notes?: boolean
    pb_greeting_intro_notes?: boolean
    net_attended_event?: boolean
    net_people_met?: boolean
    net_contact_info?: boolean
    net_panel_summary?: boolean
    pw_introduction?: boolean
    pw_volunteer_hours?: boolean
    cert_topic?: boolean
    roadmap_topic?: boolean
    interview_recommendation?: boolean
    created_at?: boolean
    user?: boolean | profilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task_activities"]>

  export type task_activitiesSelectScalar = {
    id?: boolean
    user_id?: boolean
    user_name?: boolean
    status?: boolean
    admin_response?: boolean
    pb_card_details?: boolean
    pb_linkedin_url?: boolean
    pb_resume_link?: boolean
    pb_cover_letter_link?: boolean
    pb_dress_code_notes?: boolean
    pb_greeting_intro_notes?: boolean
    net_attended_event?: boolean
    net_people_met?: boolean
    net_contact_info?: boolean
    net_panel_summary?: boolean
    pw_introduction?: boolean
    pw_volunteer_hours?: boolean
    cert_topic?: boolean
    roadmap_topic?: boolean
    interview_recommendation?: boolean
    created_at?: boolean
  }

  export type task_activitiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "user_name" | "status" | "admin_response" | "pb_card_details" | "pb_linkedin_url" | "pb_resume_link" | "pb_cover_letter_link" | "pb_dress_code_notes" | "pb_greeting_intro_notes" | "net_attended_event" | "net_people_met" | "net_contact_info" | "net_panel_summary" | "pw_introduction" | "pw_volunteer_hours" | "cert_topic" | "roadmap_topic" | "interview_recommendation" | "created_at", ExtArgs["result"]["task_activities"]>
  export type task_activitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | profilesDefaultArgs<ExtArgs>
  }
  export type task_activitiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | profilesDefaultArgs<ExtArgs>
  }
  export type task_activitiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | profilesDefaultArgs<ExtArgs>
  }

  export type $task_activitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "task_activities"
    objects: {
      user: Prisma.$profilesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      user_name: string | null
      status: string
      admin_response: string | null
      pb_card_details: string | null
      pb_linkedin_url: string | null
      pb_resume_link: string | null
      pb_cover_letter_link: string | null
      pb_dress_code_notes: string | null
      pb_greeting_intro_notes: string | null
      net_attended_event: string | null
      net_people_met: string | null
      net_contact_info: string | null
      net_panel_summary: string | null
      pw_introduction: string | null
      pw_volunteer_hours: string | null
      cert_topic: string | null
      roadmap_topic: string | null
      interview_recommendation: string | null
      created_at: Date
    }, ExtArgs["result"]["task_activities"]>
    composites: {}
  }

  type task_activitiesGetPayload<S extends boolean | null | undefined | task_activitiesDefaultArgs> = $Result.GetResult<Prisma.$task_activitiesPayload, S>

  type task_activitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<task_activitiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Task_activitiesCountAggregateInputType | true
    }

  export interface task_activitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['task_activities'], meta: { name: 'task_activities' } }
    /**
     * Find zero or one Task_activities that matches the filter.
     * @param {task_activitiesFindUniqueArgs} args - Arguments to find a Task_activities
     * @example
     * // Get one Task_activities
     * const task_activities = await prisma.task_activities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends task_activitiesFindUniqueArgs>(args: SelectSubset<T, task_activitiesFindUniqueArgs<ExtArgs>>): Prisma__task_activitiesClient<$Result.GetResult<Prisma.$task_activitiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task_activities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {task_activitiesFindUniqueOrThrowArgs} args - Arguments to find a Task_activities
     * @example
     * // Get one Task_activities
     * const task_activities = await prisma.task_activities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends task_activitiesFindUniqueOrThrowArgs>(args: SelectSubset<T, task_activitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__task_activitiesClient<$Result.GetResult<Prisma.$task_activitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task_activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_activitiesFindFirstArgs} args - Arguments to find a Task_activities
     * @example
     * // Get one Task_activities
     * const task_activities = await prisma.task_activities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends task_activitiesFindFirstArgs>(args?: SelectSubset<T, task_activitiesFindFirstArgs<ExtArgs>>): Prisma__task_activitiesClient<$Result.GetResult<Prisma.$task_activitiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task_activities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_activitiesFindFirstOrThrowArgs} args - Arguments to find a Task_activities
     * @example
     * // Get one Task_activities
     * const task_activities = await prisma.task_activities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends task_activitiesFindFirstOrThrowArgs>(args?: SelectSubset<T, task_activitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__task_activitiesClient<$Result.GetResult<Prisma.$task_activitiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Task_activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_activitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Task_activities
     * const task_activities = await prisma.task_activities.findMany()
     * 
     * // Get first 10 Task_activities
     * const task_activities = await prisma.task_activities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const task_activitiesWithIdOnly = await prisma.task_activities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends task_activitiesFindManyArgs>(args?: SelectSubset<T, task_activitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_activitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task_activities.
     * @param {task_activitiesCreateArgs} args - Arguments to create a Task_activities.
     * @example
     * // Create one Task_activities
     * const Task_activities = await prisma.task_activities.create({
     *   data: {
     *     // ... data to create a Task_activities
     *   }
     * })
     * 
     */
    create<T extends task_activitiesCreateArgs>(args: SelectSubset<T, task_activitiesCreateArgs<ExtArgs>>): Prisma__task_activitiesClient<$Result.GetResult<Prisma.$task_activitiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Task_activities.
     * @param {task_activitiesCreateManyArgs} args - Arguments to create many Task_activities.
     * @example
     * // Create many Task_activities
     * const task_activities = await prisma.task_activities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends task_activitiesCreateManyArgs>(args?: SelectSubset<T, task_activitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Task_activities and returns the data saved in the database.
     * @param {task_activitiesCreateManyAndReturnArgs} args - Arguments to create many Task_activities.
     * @example
     * // Create many Task_activities
     * const task_activities = await prisma.task_activities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Task_activities and only return the `id`
     * const task_activitiesWithIdOnly = await prisma.task_activities.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends task_activitiesCreateManyAndReturnArgs>(args?: SelectSubset<T, task_activitiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_activitiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task_activities.
     * @param {task_activitiesDeleteArgs} args - Arguments to delete one Task_activities.
     * @example
     * // Delete one Task_activities
     * const Task_activities = await prisma.task_activities.delete({
     *   where: {
     *     // ... filter to delete one Task_activities
     *   }
     * })
     * 
     */
    delete<T extends task_activitiesDeleteArgs>(args: SelectSubset<T, task_activitiesDeleteArgs<ExtArgs>>): Prisma__task_activitiesClient<$Result.GetResult<Prisma.$task_activitiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task_activities.
     * @param {task_activitiesUpdateArgs} args - Arguments to update one Task_activities.
     * @example
     * // Update one Task_activities
     * const task_activities = await prisma.task_activities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends task_activitiesUpdateArgs>(args: SelectSubset<T, task_activitiesUpdateArgs<ExtArgs>>): Prisma__task_activitiesClient<$Result.GetResult<Prisma.$task_activitiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Task_activities.
     * @param {task_activitiesDeleteManyArgs} args - Arguments to filter Task_activities to delete.
     * @example
     * // Delete a few Task_activities
     * const { count } = await prisma.task_activities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends task_activitiesDeleteManyArgs>(args?: SelectSubset<T, task_activitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Task_activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_activitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Task_activities
     * const task_activities = await prisma.task_activities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends task_activitiesUpdateManyArgs>(args: SelectSubset<T, task_activitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Task_activities and returns the data updated in the database.
     * @param {task_activitiesUpdateManyAndReturnArgs} args - Arguments to update many Task_activities.
     * @example
     * // Update many Task_activities
     * const task_activities = await prisma.task_activities.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Task_activities and only return the `id`
     * const task_activitiesWithIdOnly = await prisma.task_activities.updateManyAndReturn({
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
    updateManyAndReturn<T extends task_activitiesUpdateManyAndReturnArgs>(args: SelectSubset<T, task_activitiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_activitiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task_activities.
     * @param {task_activitiesUpsertArgs} args - Arguments to update or create a Task_activities.
     * @example
     * // Update or create a Task_activities
     * const task_activities = await prisma.task_activities.upsert({
     *   create: {
     *     // ... data to create a Task_activities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task_activities we want to update
     *   }
     * })
     */
    upsert<T extends task_activitiesUpsertArgs>(args: SelectSubset<T, task_activitiesUpsertArgs<ExtArgs>>): Prisma__task_activitiesClient<$Result.GetResult<Prisma.$task_activitiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Task_activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_activitiesCountArgs} args - Arguments to filter Task_activities to count.
     * @example
     * // Count the number of Task_activities
     * const count = await prisma.task_activities.count({
     *   where: {
     *     // ... the filter for the Task_activities we want to count
     *   }
     * })
    **/
    count<T extends task_activitiesCountArgs>(
      args?: Subset<T, task_activitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Task_activitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task_activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Task_activitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Task_activitiesAggregateArgs>(args: Subset<T, Task_activitiesAggregateArgs>): Prisma.PrismaPromise<GetTask_activitiesAggregateType<T>>

    /**
     * Group by Task_activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_activitiesGroupByArgs} args - Group by arguments.
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
      T extends task_activitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: task_activitiesGroupByArgs['orderBy'] }
        : { orderBy?: task_activitiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, task_activitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTask_activitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the task_activities model
   */
  readonly fields: task_activitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for task_activities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__task_activitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends profilesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, profilesDefaultArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the task_activities model
   */
  interface task_activitiesFieldRefs {
    readonly id: FieldRef<"task_activities", 'String'>
    readonly user_id: FieldRef<"task_activities", 'String'>
    readonly user_name: FieldRef<"task_activities", 'String'>
    readonly status: FieldRef<"task_activities", 'String'>
    readonly admin_response: FieldRef<"task_activities", 'String'>
    readonly pb_card_details: FieldRef<"task_activities", 'String'>
    readonly pb_linkedin_url: FieldRef<"task_activities", 'String'>
    readonly pb_resume_link: FieldRef<"task_activities", 'String'>
    readonly pb_cover_letter_link: FieldRef<"task_activities", 'String'>
    readonly pb_dress_code_notes: FieldRef<"task_activities", 'String'>
    readonly pb_greeting_intro_notes: FieldRef<"task_activities", 'String'>
    readonly net_attended_event: FieldRef<"task_activities", 'String'>
    readonly net_people_met: FieldRef<"task_activities", 'String'>
    readonly net_contact_info: FieldRef<"task_activities", 'String'>
    readonly net_panel_summary: FieldRef<"task_activities", 'String'>
    readonly pw_introduction: FieldRef<"task_activities", 'String'>
    readonly pw_volunteer_hours: FieldRef<"task_activities", 'String'>
    readonly cert_topic: FieldRef<"task_activities", 'String'>
    readonly roadmap_topic: FieldRef<"task_activities", 'String'>
    readonly interview_recommendation: FieldRef<"task_activities", 'String'>
    readonly created_at: FieldRef<"task_activities", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * task_activities findUnique
   */
  export type task_activitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_activities
     */
    select?: task_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_activities
     */
    omit?: task_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_activitiesInclude<ExtArgs> | null
    /**
     * Filter, which task_activities to fetch.
     */
    where: task_activitiesWhereUniqueInput
  }

  /**
   * task_activities findUniqueOrThrow
   */
  export type task_activitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_activities
     */
    select?: task_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_activities
     */
    omit?: task_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_activitiesInclude<ExtArgs> | null
    /**
     * Filter, which task_activities to fetch.
     */
    where: task_activitiesWhereUniqueInput
  }

  /**
   * task_activities findFirst
   */
  export type task_activitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_activities
     */
    select?: task_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_activities
     */
    omit?: task_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_activitiesInclude<ExtArgs> | null
    /**
     * Filter, which task_activities to fetch.
     */
    where?: task_activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_activities to fetch.
     */
    orderBy?: task_activitiesOrderByWithRelationInput | task_activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for task_activities.
     */
    cursor?: task_activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of task_activities.
     */
    distinct?: Task_activitiesScalarFieldEnum | Task_activitiesScalarFieldEnum[]
  }

  /**
   * task_activities findFirstOrThrow
   */
  export type task_activitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_activities
     */
    select?: task_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_activities
     */
    omit?: task_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_activitiesInclude<ExtArgs> | null
    /**
     * Filter, which task_activities to fetch.
     */
    where?: task_activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_activities to fetch.
     */
    orderBy?: task_activitiesOrderByWithRelationInput | task_activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for task_activities.
     */
    cursor?: task_activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of task_activities.
     */
    distinct?: Task_activitiesScalarFieldEnum | Task_activitiesScalarFieldEnum[]
  }

  /**
   * task_activities findMany
   */
  export type task_activitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_activities
     */
    select?: task_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_activities
     */
    omit?: task_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_activitiesInclude<ExtArgs> | null
    /**
     * Filter, which task_activities to fetch.
     */
    where?: task_activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_activities to fetch.
     */
    orderBy?: task_activitiesOrderByWithRelationInput | task_activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing task_activities.
     */
    cursor?: task_activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_activities.
     */
    skip?: number
    distinct?: Task_activitiesScalarFieldEnum | Task_activitiesScalarFieldEnum[]
  }

  /**
   * task_activities create
   */
  export type task_activitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_activities
     */
    select?: task_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_activities
     */
    omit?: task_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_activitiesInclude<ExtArgs> | null
    /**
     * The data needed to create a task_activities.
     */
    data: XOR<task_activitiesCreateInput, task_activitiesUncheckedCreateInput>
  }

  /**
   * task_activities createMany
   */
  export type task_activitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many task_activities.
     */
    data: task_activitiesCreateManyInput | task_activitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * task_activities createManyAndReturn
   */
  export type task_activitiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_activities
     */
    select?: task_activitiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task_activities
     */
    omit?: task_activitiesOmit<ExtArgs> | null
    /**
     * The data used to create many task_activities.
     */
    data: task_activitiesCreateManyInput | task_activitiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_activitiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * task_activities update
   */
  export type task_activitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_activities
     */
    select?: task_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_activities
     */
    omit?: task_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_activitiesInclude<ExtArgs> | null
    /**
     * The data needed to update a task_activities.
     */
    data: XOR<task_activitiesUpdateInput, task_activitiesUncheckedUpdateInput>
    /**
     * Choose, which task_activities to update.
     */
    where: task_activitiesWhereUniqueInput
  }

  /**
   * task_activities updateMany
   */
  export type task_activitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update task_activities.
     */
    data: XOR<task_activitiesUpdateManyMutationInput, task_activitiesUncheckedUpdateManyInput>
    /**
     * Filter which task_activities to update
     */
    where?: task_activitiesWhereInput
    /**
     * Limit how many task_activities to update.
     */
    limit?: number
  }

  /**
   * task_activities updateManyAndReturn
   */
  export type task_activitiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_activities
     */
    select?: task_activitiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task_activities
     */
    omit?: task_activitiesOmit<ExtArgs> | null
    /**
     * The data used to update task_activities.
     */
    data: XOR<task_activitiesUpdateManyMutationInput, task_activitiesUncheckedUpdateManyInput>
    /**
     * Filter which task_activities to update
     */
    where?: task_activitiesWhereInput
    /**
     * Limit how many task_activities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_activitiesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * task_activities upsert
   */
  export type task_activitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_activities
     */
    select?: task_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_activities
     */
    omit?: task_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_activitiesInclude<ExtArgs> | null
    /**
     * The filter to search for the task_activities to update in case it exists.
     */
    where: task_activitiesWhereUniqueInput
    /**
     * In case the task_activities found by the `where` argument doesn't exist, create a new task_activities with this data.
     */
    create: XOR<task_activitiesCreateInput, task_activitiesUncheckedCreateInput>
    /**
     * In case the task_activities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<task_activitiesUpdateInput, task_activitiesUncheckedUpdateInput>
  }

  /**
   * task_activities delete
   */
  export type task_activitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_activities
     */
    select?: task_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_activities
     */
    omit?: task_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_activitiesInclude<ExtArgs> | null
    /**
     * Filter which task_activities to delete.
     */
    where: task_activitiesWhereUniqueInput
  }

  /**
   * task_activities deleteMany
   */
  export type task_activitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task_activities to delete
     */
    where?: task_activitiesWhereInput
    /**
     * Limit how many task_activities to delete.
     */
    limit?: number
  }

  /**
   * task_activities without action
   */
  export type task_activitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_activities
     */
    select?: task_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_activities
     */
    omit?: task_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_activitiesInclude<ExtArgs> | null
  }


  /**
   * Model events
   */

  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsMinAggregateOutputType = {
    id: string | null
    title: string | null
    date: string | null
    time: string | null
    location: string | null
    description: string | null
    link: string | null
    created_at: Date | null
  }

  export type EventsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    date: string | null
    time: string | null
    location: string | null
    description: string | null
    link: string | null
    created_at: Date | null
  }

  export type EventsCountAggregateOutputType = {
    id: number
    title: number
    date: number
    time: number
    location: number
    description: number
    link: number
    attendees: number
    created_at: number
    _all: number
  }


  export type EventsMinAggregateInputType = {
    id?: true
    title?: true
    date?: true
    time?: true
    location?: true
    description?: true
    link?: true
    created_at?: true
  }

  export type EventsMaxAggregateInputType = {
    id?: true
    title?: true
    date?: true
    time?: true
    location?: true
    description?: true
    link?: true
    created_at?: true
  }

  export type EventsCountAggregateInputType = {
    id?: true
    title?: true
    date?: true
    time?: true
    location?: true
    description?: true
    link?: true
    attendees?: true
    created_at?: true
    _all?: true
  }

  export type EventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to aggregate.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }




  export type eventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventsWhereInput
    orderBy?: eventsOrderByWithAggregationInput | eventsOrderByWithAggregationInput[]
    by: EventsScalarFieldEnum[] | EventsScalarFieldEnum
    having?: eventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }

  export type EventsGroupByOutputType = {
    id: string
    title: string
    date: string
    time: string
    location: string
    description: string
    link: string | null
    attendees: JsonValue
    created_at: Date
    _count: EventsCountAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends eventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      >
    >


  export type eventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    time?: boolean
    location?: boolean
    description?: boolean
    link?: boolean
    attendees?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["events"]>

  export type eventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    time?: boolean
    location?: boolean
    description?: boolean
    link?: boolean
    attendees?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["events"]>

  export type eventsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    time?: boolean
    location?: boolean
    description?: boolean
    link?: boolean
    attendees?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["events"]>

  export type eventsSelectScalar = {
    id?: boolean
    title?: boolean
    date?: boolean
    time?: boolean
    location?: boolean
    description?: boolean
    link?: boolean
    attendees?: boolean
    created_at?: boolean
  }

  export type eventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "date" | "time" | "location" | "description" | "link" | "attendees" | "created_at", ExtArgs["result"]["events"]>

  export type $eventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "events"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      date: string
      time: string
      location: string
      description: string
      link: string | null
      attendees: Prisma.JsonValue
      created_at: Date
    }, ExtArgs["result"]["events"]>
    composites: {}
  }

  type eventsGetPayload<S extends boolean | null | undefined | eventsDefaultArgs> = $Result.GetResult<Prisma.$eventsPayload, S>

  type eventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventsCountAggregateInputType | true
    }

  export interface eventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['events'], meta: { name: 'events' } }
    /**
     * Find zero or one Events that matches the filter.
     * @param {eventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventsFindUniqueArgs>(args: SelectSubset<T, eventsFindUniqueArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Events that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventsFindUniqueOrThrowArgs>(args: SelectSubset<T, eventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventsFindFirstArgs>(args?: SelectSubset<T, eventsFindFirstArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventsFindFirstOrThrowArgs>(args?: SelectSubset<T, eventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventsWithIdOnly = await prisma.events.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends eventsFindManyArgs>(args?: SelectSubset<T, eventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Events.
     * @param {eventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
     */
    create<T extends eventsCreateArgs>(args: SelectSubset<T, eventsCreateArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {eventsCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventsCreateManyArgs>(args?: SelectSubset<T, eventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {eventsCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends eventsCreateManyAndReturnArgs>(args?: SelectSubset<T, eventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Events.
     * @param {eventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
     */
    delete<T extends eventsDeleteArgs>(args: SelectSubset<T, eventsDeleteArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Events.
     * @param {eventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventsUpdateArgs>(args: SelectSubset<T, eventsUpdateArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {eventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventsDeleteManyArgs>(args?: SelectSubset<T, eventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventsUpdateManyArgs>(args: SelectSubset<T, eventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {eventsUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.updateManyAndReturn({
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
    updateManyAndReturn<T extends eventsUpdateManyAndReturnArgs>(args: SelectSubset<T, eventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Events.
     * @param {eventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
     */
    upsert<T extends eventsUpsertArgs>(args: SelectSubset<T, eventsUpsertArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends eventsCountArgs>(
      args?: Subset<T, eventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): Prisma.PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsGroupByArgs} args - Group by arguments.
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
      T extends eventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventsGroupByArgs['orderBy'] }
        : { orderBy?: eventsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, eventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the events model
   */
  readonly fields: eventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the events model
   */
  interface eventsFieldRefs {
    readonly id: FieldRef<"events", 'String'>
    readonly title: FieldRef<"events", 'String'>
    readonly date: FieldRef<"events", 'String'>
    readonly time: FieldRef<"events", 'String'>
    readonly location: FieldRef<"events", 'String'>
    readonly description: FieldRef<"events", 'String'>
    readonly link: FieldRef<"events", 'String'>
    readonly attendees: FieldRef<"events", 'Json'>
    readonly created_at: FieldRef<"events", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * events findUnique
   */
  export type eventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events findUniqueOrThrow
   */
  export type eventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events findFirst
   */
  export type eventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events findFirstOrThrow
   */
  export type eventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events findMany
   */
  export type eventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events create
   */
  export type eventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * The data needed to create a events.
     */
    data: XOR<eventsCreateInput, eventsUncheckedCreateInput>
  }

  /**
   * events createMany
   */
  export type eventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many events.
     */
    data: eventsCreateManyInput | eventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * events createManyAndReturn
   */
  export type eventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * The data used to create many events.
     */
    data: eventsCreateManyInput | eventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * events update
   */
  export type eventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * The data needed to update a events.
     */
    data: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
    /**
     * Choose, which events to update.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events updateMany
   */
  export type eventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update events.
     */
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyInput>
    /**
     * Filter which events to update
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to update.
     */
    limit?: number
  }

  /**
   * events updateManyAndReturn
   */
  export type eventsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * The data used to update events.
     */
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyInput>
    /**
     * Filter which events to update
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to update.
     */
    limit?: number
  }

  /**
   * events upsert
   */
  export type eventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * The filter to search for the events to update in case it exists.
     */
    where: eventsWhereUniqueInput
    /**
     * In case the events found by the `where` argument doesn't exist, create a new events with this data.
     */
    create: XOR<eventsCreateInput, eventsUncheckedCreateInput>
    /**
     * In case the events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
  }

  /**
   * events delete
   */
  export type eventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Filter which events to delete.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events deleteMany
   */
  export type eventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to delete
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to delete.
     */
    limit?: number
  }

  /**
   * events without action
   */
  export type eventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
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


  export const ApplicationsScalarFieldEnum: {
    id: 'id',
    user_email: 'user_email',
    mentor_type: 'mentor_type',
    responses: 'responses',
    status: 'status',
    created_at: 'created_at'
  };

  export type ApplicationsScalarFieldEnum = (typeof ApplicationsScalarFieldEnum)[keyof typeof ApplicationsScalarFieldEnum]


  export const ProfilesScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role',
    tasks: 'tasks',
    created_at: 'created_at'
  };

  export type ProfilesScalarFieldEnum = (typeof ProfilesScalarFieldEnum)[keyof typeof ProfilesScalarFieldEnum]


  export const BookingsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    user_name: 'user_name',
    date: 'date',
    time: 'time',
    status: 'status',
    notes: 'notes'
  };

  export type BookingsScalarFieldEnum = (typeof BookingsScalarFieldEnum)[keyof typeof BookingsScalarFieldEnum]


  export const Task_activitiesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    user_name: 'user_name',
    status: 'status',
    admin_response: 'admin_response',
    pb_card_details: 'pb_card_details',
    pb_linkedin_url: 'pb_linkedin_url',
    pb_resume_link: 'pb_resume_link',
    pb_cover_letter_link: 'pb_cover_letter_link',
    pb_dress_code_notes: 'pb_dress_code_notes',
    pb_greeting_intro_notes: 'pb_greeting_intro_notes',
    net_attended_event: 'net_attended_event',
    net_people_met: 'net_people_met',
    net_contact_info: 'net_contact_info',
    net_panel_summary: 'net_panel_summary',
    pw_introduction: 'pw_introduction',
    pw_volunteer_hours: 'pw_volunteer_hours',
    cert_topic: 'cert_topic',
    roadmap_topic: 'roadmap_topic',
    interview_recommendation: 'interview_recommendation',
    created_at: 'created_at'
  };

  export type Task_activitiesScalarFieldEnum = (typeof Task_activitiesScalarFieldEnum)[keyof typeof Task_activitiesScalarFieldEnum]


  export const EventsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    date: 'date',
    time: 'time',
    location: 'location',
    description: 'description',
    link: 'link',
    attendees: 'attendees',
    created_at: 'created_at'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type applicationsWhereInput = {
    AND?: applicationsWhereInput | applicationsWhereInput[]
    OR?: applicationsWhereInput[]
    NOT?: applicationsWhereInput | applicationsWhereInput[]
    id?: StringFilter<"applications"> | string
    user_email?: StringFilter<"applications"> | string
    mentor_type?: StringNullableFilter<"applications"> | string | null
    responses?: JsonNullableFilter<"applications">
    status?: StringFilter<"applications"> | string
    created_at?: DateTimeFilter<"applications"> | Date | string
  }

  export type applicationsOrderByWithRelationInput = {
    id?: SortOrder
    user_email?: SortOrder
    mentor_type?: SortOrderInput | SortOrder
    responses?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type applicationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_email?: string
    AND?: applicationsWhereInput | applicationsWhereInput[]
    OR?: applicationsWhereInput[]
    NOT?: applicationsWhereInput | applicationsWhereInput[]
    mentor_type?: StringNullableFilter<"applications"> | string | null
    responses?: JsonNullableFilter<"applications">
    status?: StringFilter<"applications"> | string
    created_at?: DateTimeFilter<"applications"> | Date | string
  }, "id" | "user_email">

  export type applicationsOrderByWithAggregationInput = {
    id?: SortOrder
    user_email?: SortOrder
    mentor_type?: SortOrderInput | SortOrder
    responses?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: applicationsCountOrderByAggregateInput
    _max?: applicationsMaxOrderByAggregateInput
    _min?: applicationsMinOrderByAggregateInput
  }

  export type applicationsScalarWhereWithAggregatesInput = {
    AND?: applicationsScalarWhereWithAggregatesInput | applicationsScalarWhereWithAggregatesInput[]
    OR?: applicationsScalarWhereWithAggregatesInput[]
    NOT?: applicationsScalarWhereWithAggregatesInput | applicationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"applications"> | string
    user_email?: StringWithAggregatesFilter<"applications"> | string
    mentor_type?: StringNullableWithAggregatesFilter<"applications"> | string | null
    responses?: JsonNullableWithAggregatesFilter<"applications">
    status?: StringWithAggregatesFilter<"applications"> | string
    created_at?: DateTimeWithAggregatesFilter<"applications"> | Date | string
  }

  export type profilesWhereInput = {
    AND?: profilesWhereInput | profilesWhereInput[]
    OR?: profilesWhereInput[]
    NOT?: profilesWhereInput | profilesWhereInput[]
    id?: StringFilter<"profiles"> | string
    email?: StringFilter<"profiles"> | string
    name?: StringFilter<"profiles"> | string
    password?: StringNullableFilter<"profiles"> | string | null
    role?: EnumRoleFilter<"profiles"> | $Enums.Role
    tasks?: JsonFilter<"profiles">
    created_at?: DateTimeFilter<"profiles"> | Date | string
    bookings?: BookingsListRelationFilter
    task_activities?: Task_activitiesListRelationFilter
  }

  export type profilesOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    tasks?: SortOrder
    created_at?: SortOrder
    bookings?: bookingsOrderByRelationAggregateInput
    task_activities?: task_activitiesOrderByRelationAggregateInput
  }

  export type profilesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: profilesWhereInput | profilesWhereInput[]
    OR?: profilesWhereInput[]
    NOT?: profilesWhereInput | profilesWhereInput[]
    name?: StringFilter<"profiles"> | string
    password?: StringNullableFilter<"profiles"> | string | null
    role?: EnumRoleFilter<"profiles"> | $Enums.Role
    tasks?: JsonFilter<"profiles">
    created_at?: DateTimeFilter<"profiles"> | Date | string
    bookings?: BookingsListRelationFilter
    task_activities?: Task_activitiesListRelationFilter
  }, "id" | "email">

  export type profilesOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    tasks?: SortOrder
    created_at?: SortOrder
    _count?: profilesCountOrderByAggregateInput
    _max?: profilesMaxOrderByAggregateInput
    _min?: profilesMinOrderByAggregateInput
  }

  export type profilesScalarWhereWithAggregatesInput = {
    AND?: profilesScalarWhereWithAggregatesInput | profilesScalarWhereWithAggregatesInput[]
    OR?: profilesScalarWhereWithAggregatesInput[]
    NOT?: profilesScalarWhereWithAggregatesInput | profilesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"profiles"> | string
    email?: StringWithAggregatesFilter<"profiles"> | string
    name?: StringWithAggregatesFilter<"profiles"> | string
    password?: StringNullableWithAggregatesFilter<"profiles"> | string | null
    role?: EnumRoleWithAggregatesFilter<"profiles"> | $Enums.Role
    tasks?: JsonWithAggregatesFilter<"profiles">
    created_at?: DateTimeWithAggregatesFilter<"profiles"> | Date | string
  }

  export type bookingsWhereInput = {
    AND?: bookingsWhereInput | bookingsWhereInput[]
    OR?: bookingsWhereInput[]
    NOT?: bookingsWhereInput | bookingsWhereInput[]
    id?: StringFilter<"bookings"> | string
    user_id?: StringFilter<"bookings"> | string
    user_name?: StringNullableFilter<"bookings"> | string | null
    date?: StringFilter<"bookings"> | string
    time?: StringFilter<"bookings"> | string
    status?: StringFilter<"bookings"> | string
    notes?: StringNullableFilter<"bookings"> | string | null
    user?: XOR<ProfilesScalarRelationFilter, profilesWhereInput>
  }

  export type bookingsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    user_name?: SortOrderInput | SortOrder
    date?: SortOrder
    time?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    user?: profilesOrderByWithRelationInput
  }

  export type bookingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: bookingsWhereInput | bookingsWhereInput[]
    OR?: bookingsWhereInput[]
    NOT?: bookingsWhereInput | bookingsWhereInput[]
    user_id?: StringFilter<"bookings"> | string
    user_name?: StringNullableFilter<"bookings"> | string | null
    date?: StringFilter<"bookings"> | string
    time?: StringFilter<"bookings"> | string
    status?: StringFilter<"bookings"> | string
    notes?: StringNullableFilter<"bookings"> | string | null
    user?: XOR<ProfilesScalarRelationFilter, profilesWhereInput>
  }, "id">

  export type bookingsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    user_name?: SortOrderInput | SortOrder
    date?: SortOrder
    time?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: bookingsCountOrderByAggregateInput
    _max?: bookingsMaxOrderByAggregateInput
    _min?: bookingsMinOrderByAggregateInput
  }

  export type bookingsScalarWhereWithAggregatesInput = {
    AND?: bookingsScalarWhereWithAggregatesInput | bookingsScalarWhereWithAggregatesInput[]
    OR?: bookingsScalarWhereWithAggregatesInput[]
    NOT?: bookingsScalarWhereWithAggregatesInput | bookingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"bookings"> | string
    user_id?: StringWithAggregatesFilter<"bookings"> | string
    user_name?: StringNullableWithAggregatesFilter<"bookings"> | string | null
    date?: StringWithAggregatesFilter<"bookings"> | string
    time?: StringWithAggregatesFilter<"bookings"> | string
    status?: StringWithAggregatesFilter<"bookings"> | string
    notes?: StringNullableWithAggregatesFilter<"bookings"> | string | null
  }

  export type task_activitiesWhereInput = {
    AND?: task_activitiesWhereInput | task_activitiesWhereInput[]
    OR?: task_activitiesWhereInput[]
    NOT?: task_activitiesWhereInput | task_activitiesWhereInput[]
    id?: StringFilter<"task_activities"> | string
    user_id?: StringFilter<"task_activities"> | string
    user_name?: StringNullableFilter<"task_activities"> | string | null
    status?: StringFilter<"task_activities"> | string
    admin_response?: StringNullableFilter<"task_activities"> | string | null
    pb_card_details?: StringNullableFilter<"task_activities"> | string | null
    pb_linkedin_url?: StringNullableFilter<"task_activities"> | string | null
    pb_resume_link?: StringNullableFilter<"task_activities"> | string | null
    pb_cover_letter_link?: StringNullableFilter<"task_activities"> | string | null
    pb_dress_code_notes?: StringNullableFilter<"task_activities"> | string | null
    pb_greeting_intro_notes?: StringNullableFilter<"task_activities"> | string | null
    net_attended_event?: StringNullableFilter<"task_activities"> | string | null
    net_people_met?: StringNullableFilter<"task_activities"> | string | null
    net_contact_info?: StringNullableFilter<"task_activities"> | string | null
    net_panel_summary?: StringNullableFilter<"task_activities"> | string | null
    pw_introduction?: StringNullableFilter<"task_activities"> | string | null
    pw_volunteer_hours?: StringNullableFilter<"task_activities"> | string | null
    cert_topic?: StringNullableFilter<"task_activities"> | string | null
    roadmap_topic?: StringNullableFilter<"task_activities"> | string | null
    interview_recommendation?: StringNullableFilter<"task_activities"> | string | null
    created_at?: DateTimeFilter<"task_activities"> | Date | string
    user?: XOR<ProfilesScalarRelationFilter, profilesWhereInput>
  }

  export type task_activitiesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    user_name?: SortOrderInput | SortOrder
    status?: SortOrder
    admin_response?: SortOrderInput | SortOrder
    pb_card_details?: SortOrderInput | SortOrder
    pb_linkedin_url?: SortOrderInput | SortOrder
    pb_resume_link?: SortOrderInput | SortOrder
    pb_cover_letter_link?: SortOrderInput | SortOrder
    pb_dress_code_notes?: SortOrderInput | SortOrder
    pb_greeting_intro_notes?: SortOrderInput | SortOrder
    net_attended_event?: SortOrderInput | SortOrder
    net_people_met?: SortOrderInput | SortOrder
    net_contact_info?: SortOrderInput | SortOrder
    net_panel_summary?: SortOrderInput | SortOrder
    pw_introduction?: SortOrderInput | SortOrder
    pw_volunteer_hours?: SortOrderInput | SortOrder
    cert_topic?: SortOrderInput | SortOrder
    roadmap_topic?: SortOrderInput | SortOrder
    interview_recommendation?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: profilesOrderByWithRelationInput
  }

  export type task_activitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: task_activitiesWhereInput | task_activitiesWhereInput[]
    OR?: task_activitiesWhereInput[]
    NOT?: task_activitiesWhereInput | task_activitiesWhereInput[]
    user_id?: StringFilter<"task_activities"> | string
    user_name?: StringNullableFilter<"task_activities"> | string | null
    status?: StringFilter<"task_activities"> | string
    admin_response?: StringNullableFilter<"task_activities"> | string | null
    pb_card_details?: StringNullableFilter<"task_activities"> | string | null
    pb_linkedin_url?: StringNullableFilter<"task_activities"> | string | null
    pb_resume_link?: StringNullableFilter<"task_activities"> | string | null
    pb_cover_letter_link?: StringNullableFilter<"task_activities"> | string | null
    pb_dress_code_notes?: StringNullableFilter<"task_activities"> | string | null
    pb_greeting_intro_notes?: StringNullableFilter<"task_activities"> | string | null
    net_attended_event?: StringNullableFilter<"task_activities"> | string | null
    net_people_met?: StringNullableFilter<"task_activities"> | string | null
    net_contact_info?: StringNullableFilter<"task_activities"> | string | null
    net_panel_summary?: StringNullableFilter<"task_activities"> | string | null
    pw_introduction?: StringNullableFilter<"task_activities"> | string | null
    pw_volunteer_hours?: StringNullableFilter<"task_activities"> | string | null
    cert_topic?: StringNullableFilter<"task_activities"> | string | null
    roadmap_topic?: StringNullableFilter<"task_activities"> | string | null
    interview_recommendation?: StringNullableFilter<"task_activities"> | string | null
    created_at?: DateTimeFilter<"task_activities"> | Date | string
    user?: XOR<ProfilesScalarRelationFilter, profilesWhereInput>
  }, "id">

  export type task_activitiesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    user_name?: SortOrderInput | SortOrder
    status?: SortOrder
    admin_response?: SortOrderInput | SortOrder
    pb_card_details?: SortOrderInput | SortOrder
    pb_linkedin_url?: SortOrderInput | SortOrder
    pb_resume_link?: SortOrderInput | SortOrder
    pb_cover_letter_link?: SortOrderInput | SortOrder
    pb_dress_code_notes?: SortOrderInput | SortOrder
    pb_greeting_intro_notes?: SortOrderInput | SortOrder
    net_attended_event?: SortOrderInput | SortOrder
    net_people_met?: SortOrderInput | SortOrder
    net_contact_info?: SortOrderInput | SortOrder
    net_panel_summary?: SortOrderInput | SortOrder
    pw_introduction?: SortOrderInput | SortOrder
    pw_volunteer_hours?: SortOrderInput | SortOrder
    cert_topic?: SortOrderInput | SortOrder
    roadmap_topic?: SortOrderInput | SortOrder
    interview_recommendation?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: task_activitiesCountOrderByAggregateInput
    _max?: task_activitiesMaxOrderByAggregateInput
    _min?: task_activitiesMinOrderByAggregateInput
  }

  export type task_activitiesScalarWhereWithAggregatesInput = {
    AND?: task_activitiesScalarWhereWithAggregatesInput | task_activitiesScalarWhereWithAggregatesInput[]
    OR?: task_activitiesScalarWhereWithAggregatesInput[]
    NOT?: task_activitiesScalarWhereWithAggregatesInput | task_activitiesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"task_activities"> | string
    user_id?: StringWithAggregatesFilter<"task_activities"> | string
    user_name?: StringNullableWithAggregatesFilter<"task_activities"> | string | null
    status?: StringWithAggregatesFilter<"task_activities"> | string
    admin_response?: StringNullableWithAggregatesFilter<"task_activities"> | string | null
    pb_card_details?: StringNullableWithAggregatesFilter<"task_activities"> | string | null
    pb_linkedin_url?: StringNullableWithAggregatesFilter<"task_activities"> | string | null
    pb_resume_link?: StringNullableWithAggregatesFilter<"task_activities"> | string | null
    pb_cover_letter_link?: StringNullableWithAggregatesFilter<"task_activities"> | string | null
    pb_dress_code_notes?: StringNullableWithAggregatesFilter<"task_activities"> | string | null
    pb_greeting_intro_notes?: StringNullableWithAggregatesFilter<"task_activities"> | string | null
    net_attended_event?: StringNullableWithAggregatesFilter<"task_activities"> | string | null
    net_people_met?: StringNullableWithAggregatesFilter<"task_activities"> | string | null
    net_contact_info?: StringNullableWithAggregatesFilter<"task_activities"> | string | null
    net_panel_summary?: StringNullableWithAggregatesFilter<"task_activities"> | string | null
    pw_introduction?: StringNullableWithAggregatesFilter<"task_activities"> | string | null
    pw_volunteer_hours?: StringNullableWithAggregatesFilter<"task_activities"> | string | null
    cert_topic?: StringNullableWithAggregatesFilter<"task_activities"> | string | null
    roadmap_topic?: StringNullableWithAggregatesFilter<"task_activities"> | string | null
    interview_recommendation?: StringNullableWithAggregatesFilter<"task_activities"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"task_activities"> | Date | string
  }

  export type eventsWhereInput = {
    AND?: eventsWhereInput | eventsWhereInput[]
    OR?: eventsWhereInput[]
    NOT?: eventsWhereInput | eventsWhereInput[]
    id?: StringFilter<"events"> | string
    title?: StringFilter<"events"> | string
    date?: StringFilter<"events"> | string
    time?: StringFilter<"events"> | string
    location?: StringFilter<"events"> | string
    description?: StringFilter<"events"> | string
    link?: StringNullableFilter<"events"> | string | null
    attendees?: JsonFilter<"events">
    created_at?: DateTimeFilter<"events"> | Date | string
  }

  export type eventsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    description?: SortOrder
    link?: SortOrderInput | SortOrder
    attendees?: SortOrder
    created_at?: SortOrder
  }

  export type eventsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: eventsWhereInput | eventsWhereInput[]
    OR?: eventsWhereInput[]
    NOT?: eventsWhereInput | eventsWhereInput[]
    title?: StringFilter<"events"> | string
    date?: StringFilter<"events"> | string
    time?: StringFilter<"events"> | string
    location?: StringFilter<"events"> | string
    description?: StringFilter<"events"> | string
    link?: StringNullableFilter<"events"> | string | null
    attendees?: JsonFilter<"events">
    created_at?: DateTimeFilter<"events"> | Date | string
  }, "id">

  export type eventsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    description?: SortOrder
    link?: SortOrderInput | SortOrder
    attendees?: SortOrder
    created_at?: SortOrder
    _count?: eventsCountOrderByAggregateInput
    _max?: eventsMaxOrderByAggregateInput
    _min?: eventsMinOrderByAggregateInput
  }

  export type eventsScalarWhereWithAggregatesInput = {
    AND?: eventsScalarWhereWithAggregatesInput | eventsScalarWhereWithAggregatesInput[]
    OR?: eventsScalarWhereWithAggregatesInput[]
    NOT?: eventsScalarWhereWithAggregatesInput | eventsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"events"> | string
    title?: StringWithAggregatesFilter<"events"> | string
    date?: StringWithAggregatesFilter<"events"> | string
    time?: StringWithAggregatesFilter<"events"> | string
    location?: StringWithAggregatesFilter<"events"> | string
    description?: StringWithAggregatesFilter<"events"> | string
    link?: StringNullableWithAggregatesFilter<"events"> | string | null
    attendees?: JsonWithAggregatesFilter<"events">
    created_at?: DateTimeWithAggregatesFilter<"events"> | Date | string
  }

  export type applicationsCreateInput = {
    id?: string
    user_email: string
    mentor_type?: string | null
    responses?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    created_at?: Date | string
  }

  export type applicationsUncheckedCreateInput = {
    id?: string
    user_email: string
    mentor_type?: string | null
    responses?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    created_at?: Date | string
  }

  export type applicationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    mentor_type?: NullableStringFieldUpdateOperationsInput | string | null
    responses?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type applicationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    mentor_type?: NullableStringFieldUpdateOperationsInput | string | null
    responses?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type applicationsCreateManyInput = {
    id?: string
    user_email: string
    mentor_type?: string | null
    responses?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    created_at?: Date | string
  }

  export type applicationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    mentor_type?: NullableStringFieldUpdateOperationsInput | string | null
    responses?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type applicationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    mentor_type?: NullableStringFieldUpdateOperationsInput | string | null
    responses?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type profilesCreateInput = {
    id: string
    email: string
    name: string
    password?: string | null
    role?: $Enums.Role
    tasks?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    bookings?: bookingsCreateNestedManyWithoutUserInput
    task_activities?: task_activitiesCreateNestedManyWithoutUserInput
  }

  export type profilesUncheckedCreateInput = {
    id: string
    email: string
    name: string
    password?: string | null
    role?: $Enums.Role
    tasks?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    bookings?: bookingsUncheckedCreateNestedManyWithoutUserInput
    task_activities?: task_activitiesUncheckedCreateNestedManyWithoutUserInput
  }

  export type profilesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    tasks?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUpdateManyWithoutUserNestedInput
    task_activities?: task_activitiesUpdateManyWithoutUserNestedInput
  }

  export type profilesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    tasks?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUncheckedUpdateManyWithoutUserNestedInput
    task_activities?: task_activitiesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type profilesCreateManyInput = {
    id: string
    email: string
    name: string
    password?: string | null
    role?: $Enums.Role
    tasks?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type profilesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    tasks?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type profilesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    tasks?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingsCreateInput = {
    id?: string
    user_name?: string | null
    date: string
    time: string
    status?: string
    notes?: string | null
    user: profilesCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateInput = {
    id?: string
    user_id: string
    user_name?: string | null
    date: string
    time: string
    status?: string
    notes?: string | null
  }

  export type bookingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: profilesUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bookingsCreateManyInput = {
    id?: string
    user_id: string
    user_name?: string | null
    date: string
    time: string
    status?: string
    notes?: string | null
  }

  export type bookingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bookingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type task_activitiesCreateInput = {
    id?: string
    user_name?: string | null
    status?: string
    admin_response?: string | null
    pb_card_details?: string | null
    pb_linkedin_url?: string | null
    pb_resume_link?: string | null
    pb_cover_letter_link?: string | null
    pb_dress_code_notes?: string | null
    pb_greeting_intro_notes?: string | null
    net_attended_event?: string | null
    net_people_met?: string | null
    net_contact_info?: string | null
    net_panel_summary?: string | null
    pw_introduction?: string | null
    pw_volunteer_hours?: string | null
    cert_topic?: string | null
    roadmap_topic?: string | null
    interview_recommendation?: string | null
    created_at?: Date | string
    user: profilesCreateNestedOneWithoutTask_activitiesInput
  }

  export type task_activitiesUncheckedCreateInput = {
    id?: string
    user_id: string
    user_name?: string | null
    status?: string
    admin_response?: string | null
    pb_card_details?: string | null
    pb_linkedin_url?: string | null
    pb_resume_link?: string | null
    pb_cover_letter_link?: string | null
    pb_dress_code_notes?: string | null
    pb_greeting_intro_notes?: string | null
    net_attended_event?: string | null
    net_people_met?: string | null
    net_contact_info?: string | null
    net_panel_summary?: string | null
    pw_introduction?: string | null
    pw_volunteer_hours?: string | null
    cert_topic?: string | null
    roadmap_topic?: string | null
    interview_recommendation?: string | null
    created_at?: Date | string
  }

  export type task_activitiesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    admin_response?: NullableStringFieldUpdateOperationsInput | string | null
    pb_card_details?: NullableStringFieldUpdateOperationsInput | string | null
    pb_linkedin_url?: NullableStringFieldUpdateOperationsInput | string | null
    pb_resume_link?: NullableStringFieldUpdateOperationsInput | string | null
    pb_cover_letter_link?: NullableStringFieldUpdateOperationsInput | string | null
    pb_dress_code_notes?: NullableStringFieldUpdateOperationsInput | string | null
    pb_greeting_intro_notes?: NullableStringFieldUpdateOperationsInput | string | null
    net_attended_event?: NullableStringFieldUpdateOperationsInput | string | null
    net_people_met?: NullableStringFieldUpdateOperationsInput | string | null
    net_contact_info?: NullableStringFieldUpdateOperationsInput | string | null
    net_panel_summary?: NullableStringFieldUpdateOperationsInput | string | null
    pw_introduction?: NullableStringFieldUpdateOperationsInput | string | null
    pw_volunteer_hours?: NullableStringFieldUpdateOperationsInput | string | null
    cert_topic?: NullableStringFieldUpdateOperationsInput | string | null
    roadmap_topic?: NullableStringFieldUpdateOperationsInput | string | null
    interview_recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: profilesUpdateOneRequiredWithoutTask_activitiesNestedInput
  }

  export type task_activitiesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    admin_response?: NullableStringFieldUpdateOperationsInput | string | null
    pb_card_details?: NullableStringFieldUpdateOperationsInput | string | null
    pb_linkedin_url?: NullableStringFieldUpdateOperationsInput | string | null
    pb_resume_link?: NullableStringFieldUpdateOperationsInput | string | null
    pb_cover_letter_link?: NullableStringFieldUpdateOperationsInput | string | null
    pb_dress_code_notes?: NullableStringFieldUpdateOperationsInput | string | null
    pb_greeting_intro_notes?: NullableStringFieldUpdateOperationsInput | string | null
    net_attended_event?: NullableStringFieldUpdateOperationsInput | string | null
    net_people_met?: NullableStringFieldUpdateOperationsInput | string | null
    net_contact_info?: NullableStringFieldUpdateOperationsInput | string | null
    net_panel_summary?: NullableStringFieldUpdateOperationsInput | string | null
    pw_introduction?: NullableStringFieldUpdateOperationsInput | string | null
    pw_volunteer_hours?: NullableStringFieldUpdateOperationsInput | string | null
    cert_topic?: NullableStringFieldUpdateOperationsInput | string | null
    roadmap_topic?: NullableStringFieldUpdateOperationsInput | string | null
    interview_recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type task_activitiesCreateManyInput = {
    id?: string
    user_id: string
    user_name?: string | null
    status?: string
    admin_response?: string | null
    pb_card_details?: string | null
    pb_linkedin_url?: string | null
    pb_resume_link?: string | null
    pb_cover_letter_link?: string | null
    pb_dress_code_notes?: string | null
    pb_greeting_intro_notes?: string | null
    net_attended_event?: string | null
    net_people_met?: string | null
    net_contact_info?: string | null
    net_panel_summary?: string | null
    pw_introduction?: string | null
    pw_volunteer_hours?: string | null
    cert_topic?: string | null
    roadmap_topic?: string | null
    interview_recommendation?: string | null
    created_at?: Date | string
  }

  export type task_activitiesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    admin_response?: NullableStringFieldUpdateOperationsInput | string | null
    pb_card_details?: NullableStringFieldUpdateOperationsInput | string | null
    pb_linkedin_url?: NullableStringFieldUpdateOperationsInput | string | null
    pb_resume_link?: NullableStringFieldUpdateOperationsInput | string | null
    pb_cover_letter_link?: NullableStringFieldUpdateOperationsInput | string | null
    pb_dress_code_notes?: NullableStringFieldUpdateOperationsInput | string | null
    pb_greeting_intro_notes?: NullableStringFieldUpdateOperationsInput | string | null
    net_attended_event?: NullableStringFieldUpdateOperationsInput | string | null
    net_people_met?: NullableStringFieldUpdateOperationsInput | string | null
    net_contact_info?: NullableStringFieldUpdateOperationsInput | string | null
    net_panel_summary?: NullableStringFieldUpdateOperationsInput | string | null
    pw_introduction?: NullableStringFieldUpdateOperationsInput | string | null
    pw_volunteer_hours?: NullableStringFieldUpdateOperationsInput | string | null
    cert_topic?: NullableStringFieldUpdateOperationsInput | string | null
    roadmap_topic?: NullableStringFieldUpdateOperationsInput | string | null
    interview_recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type task_activitiesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    admin_response?: NullableStringFieldUpdateOperationsInput | string | null
    pb_card_details?: NullableStringFieldUpdateOperationsInput | string | null
    pb_linkedin_url?: NullableStringFieldUpdateOperationsInput | string | null
    pb_resume_link?: NullableStringFieldUpdateOperationsInput | string | null
    pb_cover_letter_link?: NullableStringFieldUpdateOperationsInput | string | null
    pb_dress_code_notes?: NullableStringFieldUpdateOperationsInput | string | null
    pb_greeting_intro_notes?: NullableStringFieldUpdateOperationsInput | string | null
    net_attended_event?: NullableStringFieldUpdateOperationsInput | string | null
    net_people_met?: NullableStringFieldUpdateOperationsInput | string | null
    net_contact_info?: NullableStringFieldUpdateOperationsInput | string | null
    net_panel_summary?: NullableStringFieldUpdateOperationsInput | string | null
    pw_introduction?: NullableStringFieldUpdateOperationsInput | string | null
    pw_volunteer_hours?: NullableStringFieldUpdateOperationsInput | string | null
    cert_topic?: NullableStringFieldUpdateOperationsInput | string | null
    roadmap_topic?: NullableStringFieldUpdateOperationsInput | string | null
    interview_recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventsCreateInput = {
    id?: string
    title: string
    date: string
    time: string
    location: string
    description: string
    link?: string | null
    attendees?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type eventsUncheckedCreateInput = {
    id?: string
    title: string
    date: string
    time: string
    location: string
    description: string
    link?: string | null
    attendees?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type eventsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventsCreateManyInput = {
    id?: string
    title: string
    date: string
    time: string
    location: string
    description: string
    link?: string | null
    attendees?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type eventsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type applicationsCountOrderByAggregateInput = {
    id?: SortOrder
    user_email?: SortOrder
    mentor_type?: SortOrder
    responses?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type applicationsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_email?: SortOrder
    mentor_type?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type applicationsMinOrderByAggregateInput = {
    id?: SortOrder
    user_email?: SortOrder
    mentor_type?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type BookingsListRelationFilter = {
    every?: bookingsWhereInput
    some?: bookingsWhereInput
    none?: bookingsWhereInput
  }

  export type Task_activitiesListRelationFilter = {
    every?: task_activitiesWhereInput
    some?: task_activitiesWhereInput
    none?: task_activitiesWhereInput
  }

  export type bookingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type task_activitiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type profilesCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    tasks?: SortOrder
    created_at?: SortOrder
  }

  export type profilesMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type profilesMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type ProfilesScalarRelationFilter = {
    is?: profilesWhereInput
    isNot?: profilesWhereInput
  }

  export type bookingsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    user_name?: SortOrder
    date?: SortOrder
    time?: SortOrder
    status?: SortOrder
    notes?: SortOrder
  }

  export type bookingsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    user_name?: SortOrder
    date?: SortOrder
    time?: SortOrder
    status?: SortOrder
    notes?: SortOrder
  }

  export type bookingsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    user_name?: SortOrder
    date?: SortOrder
    time?: SortOrder
    status?: SortOrder
    notes?: SortOrder
  }

  export type task_activitiesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    user_name?: SortOrder
    status?: SortOrder
    admin_response?: SortOrder
    pb_card_details?: SortOrder
    pb_linkedin_url?: SortOrder
    pb_resume_link?: SortOrder
    pb_cover_letter_link?: SortOrder
    pb_dress_code_notes?: SortOrder
    pb_greeting_intro_notes?: SortOrder
    net_attended_event?: SortOrder
    net_people_met?: SortOrder
    net_contact_info?: SortOrder
    net_panel_summary?: SortOrder
    pw_introduction?: SortOrder
    pw_volunteer_hours?: SortOrder
    cert_topic?: SortOrder
    roadmap_topic?: SortOrder
    interview_recommendation?: SortOrder
    created_at?: SortOrder
  }

  export type task_activitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    user_name?: SortOrder
    status?: SortOrder
    admin_response?: SortOrder
    pb_card_details?: SortOrder
    pb_linkedin_url?: SortOrder
    pb_resume_link?: SortOrder
    pb_cover_letter_link?: SortOrder
    pb_dress_code_notes?: SortOrder
    pb_greeting_intro_notes?: SortOrder
    net_attended_event?: SortOrder
    net_people_met?: SortOrder
    net_contact_info?: SortOrder
    net_panel_summary?: SortOrder
    pw_introduction?: SortOrder
    pw_volunteer_hours?: SortOrder
    cert_topic?: SortOrder
    roadmap_topic?: SortOrder
    interview_recommendation?: SortOrder
    created_at?: SortOrder
  }

  export type task_activitiesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    user_name?: SortOrder
    status?: SortOrder
    admin_response?: SortOrder
    pb_card_details?: SortOrder
    pb_linkedin_url?: SortOrder
    pb_resume_link?: SortOrder
    pb_cover_letter_link?: SortOrder
    pb_dress_code_notes?: SortOrder
    pb_greeting_intro_notes?: SortOrder
    net_attended_event?: SortOrder
    net_people_met?: SortOrder
    net_contact_info?: SortOrder
    net_panel_summary?: SortOrder
    pw_introduction?: SortOrder
    pw_volunteer_hours?: SortOrder
    cert_topic?: SortOrder
    roadmap_topic?: SortOrder
    interview_recommendation?: SortOrder
    created_at?: SortOrder
  }

  export type eventsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    description?: SortOrder
    link?: SortOrder
    attendees?: SortOrder
    created_at?: SortOrder
  }

  export type eventsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    description?: SortOrder
    link?: SortOrder
    created_at?: SortOrder
  }

  export type eventsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    description?: SortOrder
    link?: SortOrder
    created_at?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type bookingsCreateNestedManyWithoutUserInput = {
    create?: XOR<bookingsCreateWithoutUserInput, bookingsUncheckedCreateWithoutUserInput> | bookingsCreateWithoutUserInput[] | bookingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUserInput | bookingsCreateOrConnectWithoutUserInput[]
    createMany?: bookingsCreateManyUserInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type task_activitiesCreateNestedManyWithoutUserInput = {
    create?: XOR<task_activitiesCreateWithoutUserInput, task_activitiesUncheckedCreateWithoutUserInput> | task_activitiesCreateWithoutUserInput[] | task_activitiesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: task_activitiesCreateOrConnectWithoutUserInput | task_activitiesCreateOrConnectWithoutUserInput[]
    createMany?: task_activitiesCreateManyUserInputEnvelope
    connect?: task_activitiesWhereUniqueInput | task_activitiesWhereUniqueInput[]
  }

  export type bookingsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<bookingsCreateWithoutUserInput, bookingsUncheckedCreateWithoutUserInput> | bookingsCreateWithoutUserInput[] | bookingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUserInput | bookingsCreateOrConnectWithoutUserInput[]
    createMany?: bookingsCreateManyUserInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type task_activitiesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<task_activitiesCreateWithoutUserInput, task_activitiesUncheckedCreateWithoutUserInput> | task_activitiesCreateWithoutUserInput[] | task_activitiesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: task_activitiesCreateOrConnectWithoutUserInput | task_activitiesCreateOrConnectWithoutUserInput[]
    createMany?: task_activitiesCreateManyUserInputEnvelope
    connect?: task_activitiesWhereUniqueInput | task_activitiesWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type bookingsUpdateManyWithoutUserNestedInput = {
    create?: XOR<bookingsCreateWithoutUserInput, bookingsUncheckedCreateWithoutUserInput> | bookingsCreateWithoutUserInput[] | bookingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUserInput | bookingsCreateOrConnectWithoutUserInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutUserInput | bookingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: bookingsCreateManyUserInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutUserInput | bookingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutUserInput | bookingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type task_activitiesUpdateManyWithoutUserNestedInput = {
    create?: XOR<task_activitiesCreateWithoutUserInput, task_activitiesUncheckedCreateWithoutUserInput> | task_activitiesCreateWithoutUserInput[] | task_activitiesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: task_activitiesCreateOrConnectWithoutUserInput | task_activitiesCreateOrConnectWithoutUserInput[]
    upsert?: task_activitiesUpsertWithWhereUniqueWithoutUserInput | task_activitiesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: task_activitiesCreateManyUserInputEnvelope
    set?: task_activitiesWhereUniqueInput | task_activitiesWhereUniqueInput[]
    disconnect?: task_activitiesWhereUniqueInput | task_activitiesWhereUniqueInput[]
    delete?: task_activitiesWhereUniqueInput | task_activitiesWhereUniqueInput[]
    connect?: task_activitiesWhereUniqueInput | task_activitiesWhereUniqueInput[]
    update?: task_activitiesUpdateWithWhereUniqueWithoutUserInput | task_activitiesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: task_activitiesUpdateManyWithWhereWithoutUserInput | task_activitiesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: task_activitiesScalarWhereInput | task_activitiesScalarWhereInput[]
  }

  export type bookingsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<bookingsCreateWithoutUserInput, bookingsUncheckedCreateWithoutUserInput> | bookingsCreateWithoutUserInput[] | bookingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUserInput | bookingsCreateOrConnectWithoutUserInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutUserInput | bookingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: bookingsCreateManyUserInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutUserInput | bookingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutUserInput | bookingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type task_activitiesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<task_activitiesCreateWithoutUserInput, task_activitiesUncheckedCreateWithoutUserInput> | task_activitiesCreateWithoutUserInput[] | task_activitiesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: task_activitiesCreateOrConnectWithoutUserInput | task_activitiesCreateOrConnectWithoutUserInput[]
    upsert?: task_activitiesUpsertWithWhereUniqueWithoutUserInput | task_activitiesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: task_activitiesCreateManyUserInputEnvelope
    set?: task_activitiesWhereUniqueInput | task_activitiesWhereUniqueInput[]
    disconnect?: task_activitiesWhereUniqueInput | task_activitiesWhereUniqueInput[]
    delete?: task_activitiesWhereUniqueInput | task_activitiesWhereUniqueInput[]
    connect?: task_activitiesWhereUniqueInput | task_activitiesWhereUniqueInput[]
    update?: task_activitiesUpdateWithWhereUniqueWithoutUserInput | task_activitiesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: task_activitiesUpdateManyWithWhereWithoutUserInput | task_activitiesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: task_activitiesScalarWhereInput | task_activitiesScalarWhereInput[]
  }

  export type profilesCreateNestedOneWithoutBookingsInput = {
    create?: XOR<profilesCreateWithoutBookingsInput, profilesUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: profilesCreateOrConnectWithoutBookingsInput
    connect?: profilesWhereUniqueInput
  }

  export type profilesUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<profilesCreateWithoutBookingsInput, profilesUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: profilesCreateOrConnectWithoutBookingsInput
    upsert?: profilesUpsertWithoutBookingsInput
    connect?: profilesWhereUniqueInput
    update?: XOR<XOR<profilesUpdateToOneWithWhereWithoutBookingsInput, profilesUpdateWithoutBookingsInput>, profilesUncheckedUpdateWithoutBookingsInput>
  }

  export type profilesCreateNestedOneWithoutTask_activitiesInput = {
    create?: XOR<profilesCreateWithoutTask_activitiesInput, profilesUncheckedCreateWithoutTask_activitiesInput>
    connectOrCreate?: profilesCreateOrConnectWithoutTask_activitiesInput
    connect?: profilesWhereUniqueInput
  }

  export type profilesUpdateOneRequiredWithoutTask_activitiesNestedInput = {
    create?: XOR<profilesCreateWithoutTask_activitiesInput, profilesUncheckedCreateWithoutTask_activitiesInput>
    connectOrCreate?: profilesCreateOrConnectWithoutTask_activitiesInput
    upsert?: profilesUpsertWithoutTask_activitiesInput
    connect?: profilesWhereUniqueInput
    update?: XOR<XOR<profilesUpdateToOneWithWhereWithoutTask_activitiesInput, profilesUpdateWithoutTask_activitiesInput>, profilesUncheckedUpdateWithoutTask_activitiesInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type bookingsCreateWithoutUserInput = {
    id?: string
    user_name?: string | null
    date: string
    time: string
    status?: string
    notes?: string | null
  }

  export type bookingsUncheckedCreateWithoutUserInput = {
    id?: string
    user_name?: string | null
    date: string
    time: string
    status?: string
    notes?: string | null
  }

  export type bookingsCreateOrConnectWithoutUserInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutUserInput, bookingsUncheckedCreateWithoutUserInput>
  }

  export type bookingsCreateManyUserInputEnvelope = {
    data: bookingsCreateManyUserInput | bookingsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type task_activitiesCreateWithoutUserInput = {
    id?: string
    user_name?: string | null
    status?: string
    admin_response?: string | null
    pb_card_details?: string | null
    pb_linkedin_url?: string | null
    pb_resume_link?: string | null
    pb_cover_letter_link?: string | null
    pb_dress_code_notes?: string | null
    pb_greeting_intro_notes?: string | null
    net_attended_event?: string | null
    net_people_met?: string | null
    net_contact_info?: string | null
    net_panel_summary?: string | null
    pw_introduction?: string | null
    pw_volunteer_hours?: string | null
    cert_topic?: string | null
    roadmap_topic?: string | null
    interview_recommendation?: string | null
    created_at?: Date | string
  }

  export type task_activitiesUncheckedCreateWithoutUserInput = {
    id?: string
    user_name?: string | null
    status?: string
    admin_response?: string | null
    pb_card_details?: string | null
    pb_linkedin_url?: string | null
    pb_resume_link?: string | null
    pb_cover_letter_link?: string | null
    pb_dress_code_notes?: string | null
    pb_greeting_intro_notes?: string | null
    net_attended_event?: string | null
    net_people_met?: string | null
    net_contact_info?: string | null
    net_panel_summary?: string | null
    pw_introduction?: string | null
    pw_volunteer_hours?: string | null
    cert_topic?: string | null
    roadmap_topic?: string | null
    interview_recommendation?: string | null
    created_at?: Date | string
  }

  export type task_activitiesCreateOrConnectWithoutUserInput = {
    where: task_activitiesWhereUniqueInput
    create: XOR<task_activitiesCreateWithoutUserInput, task_activitiesUncheckedCreateWithoutUserInput>
  }

  export type task_activitiesCreateManyUserInputEnvelope = {
    data: task_activitiesCreateManyUserInput | task_activitiesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type bookingsUpsertWithWhereUniqueWithoutUserInput = {
    where: bookingsWhereUniqueInput
    update: XOR<bookingsUpdateWithoutUserInput, bookingsUncheckedUpdateWithoutUserInput>
    create: XOR<bookingsCreateWithoutUserInput, bookingsUncheckedCreateWithoutUserInput>
  }

  export type bookingsUpdateWithWhereUniqueWithoutUserInput = {
    where: bookingsWhereUniqueInput
    data: XOR<bookingsUpdateWithoutUserInput, bookingsUncheckedUpdateWithoutUserInput>
  }

  export type bookingsUpdateManyWithWhereWithoutUserInput = {
    where: bookingsScalarWhereInput
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyWithoutUserInput>
  }

  export type bookingsScalarWhereInput = {
    AND?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
    OR?: bookingsScalarWhereInput[]
    NOT?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
    id?: StringFilter<"bookings"> | string
    user_id?: StringFilter<"bookings"> | string
    user_name?: StringNullableFilter<"bookings"> | string | null
    date?: StringFilter<"bookings"> | string
    time?: StringFilter<"bookings"> | string
    status?: StringFilter<"bookings"> | string
    notes?: StringNullableFilter<"bookings"> | string | null
  }

  export type task_activitiesUpsertWithWhereUniqueWithoutUserInput = {
    where: task_activitiesWhereUniqueInput
    update: XOR<task_activitiesUpdateWithoutUserInput, task_activitiesUncheckedUpdateWithoutUserInput>
    create: XOR<task_activitiesCreateWithoutUserInput, task_activitiesUncheckedCreateWithoutUserInput>
  }

  export type task_activitiesUpdateWithWhereUniqueWithoutUserInput = {
    where: task_activitiesWhereUniqueInput
    data: XOR<task_activitiesUpdateWithoutUserInput, task_activitiesUncheckedUpdateWithoutUserInput>
  }

  export type task_activitiesUpdateManyWithWhereWithoutUserInput = {
    where: task_activitiesScalarWhereInput
    data: XOR<task_activitiesUpdateManyMutationInput, task_activitiesUncheckedUpdateManyWithoutUserInput>
  }

  export type task_activitiesScalarWhereInput = {
    AND?: task_activitiesScalarWhereInput | task_activitiesScalarWhereInput[]
    OR?: task_activitiesScalarWhereInput[]
    NOT?: task_activitiesScalarWhereInput | task_activitiesScalarWhereInput[]
    id?: StringFilter<"task_activities"> | string
    user_id?: StringFilter<"task_activities"> | string
    user_name?: StringNullableFilter<"task_activities"> | string | null
    status?: StringFilter<"task_activities"> | string
    admin_response?: StringNullableFilter<"task_activities"> | string | null
    pb_card_details?: StringNullableFilter<"task_activities"> | string | null
    pb_linkedin_url?: StringNullableFilter<"task_activities"> | string | null
    pb_resume_link?: StringNullableFilter<"task_activities"> | string | null
    pb_cover_letter_link?: StringNullableFilter<"task_activities"> | string | null
    pb_dress_code_notes?: StringNullableFilter<"task_activities"> | string | null
    pb_greeting_intro_notes?: StringNullableFilter<"task_activities"> | string | null
    net_attended_event?: StringNullableFilter<"task_activities"> | string | null
    net_people_met?: StringNullableFilter<"task_activities"> | string | null
    net_contact_info?: StringNullableFilter<"task_activities"> | string | null
    net_panel_summary?: StringNullableFilter<"task_activities"> | string | null
    pw_introduction?: StringNullableFilter<"task_activities"> | string | null
    pw_volunteer_hours?: StringNullableFilter<"task_activities"> | string | null
    cert_topic?: StringNullableFilter<"task_activities"> | string | null
    roadmap_topic?: StringNullableFilter<"task_activities"> | string | null
    interview_recommendation?: StringNullableFilter<"task_activities"> | string | null
    created_at?: DateTimeFilter<"task_activities"> | Date | string
  }

  export type profilesCreateWithoutBookingsInput = {
    id: string
    email: string
    name: string
    password?: string | null
    role?: $Enums.Role
    tasks?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    task_activities?: task_activitiesCreateNestedManyWithoutUserInput
  }

  export type profilesUncheckedCreateWithoutBookingsInput = {
    id: string
    email: string
    name: string
    password?: string | null
    role?: $Enums.Role
    tasks?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    task_activities?: task_activitiesUncheckedCreateNestedManyWithoutUserInput
  }

  export type profilesCreateOrConnectWithoutBookingsInput = {
    where: profilesWhereUniqueInput
    create: XOR<profilesCreateWithoutBookingsInput, profilesUncheckedCreateWithoutBookingsInput>
  }

  export type profilesUpsertWithoutBookingsInput = {
    update: XOR<profilesUpdateWithoutBookingsInput, profilesUncheckedUpdateWithoutBookingsInput>
    create: XOR<profilesCreateWithoutBookingsInput, profilesUncheckedCreateWithoutBookingsInput>
    where?: profilesWhereInput
  }

  export type profilesUpdateToOneWithWhereWithoutBookingsInput = {
    where?: profilesWhereInput
    data: XOR<profilesUpdateWithoutBookingsInput, profilesUncheckedUpdateWithoutBookingsInput>
  }

  export type profilesUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    tasks?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task_activities?: task_activitiesUpdateManyWithoutUserNestedInput
  }

  export type profilesUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    tasks?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task_activities?: task_activitiesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type profilesCreateWithoutTask_activitiesInput = {
    id: string
    email: string
    name: string
    password?: string | null
    role?: $Enums.Role
    tasks?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    bookings?: bookingsCreateNestedManyWithoutUserInput
  }

  export type profilesUncheckedCreateWithoutTask_activitiesInput = {
    id: string
    email: string
    name: string
    password?: string | null
    role?: $Enums.Role
    tasks?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    bookings?: bookingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type profilesCreateOrConnectWithoutTask_activitiesInput = {
    where: profilesWhereUniqueInput
    create: XOR<profilesCreateWithoutTask_activitiesInput, profilesUncheckedCreateWithoutTask_activitiesInput>
  }

  export type profilesUpsertWithoutTask_activitiesInput = {
    update: XOR<profilesUpdateWithoutTask_activitiesInput, profilesUncheckedUpdateWithoutTask_activitiesInput>
    create: XOR<profilesCreateWithoutTask_activitiesInput, profilesUncheckedCreateWithoutTask_activitiesInput>
    where?: profilesWhereInput
  }

  export type profilesUpdateToOneWithWhereWithoutTask_activitiesInput = {
    where?: profilesWhereInput
    data: XOR<profilesUpdateWithoutTask_activitiesInput, profilesUncheckedUpdateWithoutTask_activitiesInput>
  }

  export type profilesUpdateWithoutTask_activitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    tasks?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUpdateManyWithoutUserNestedInput
  }

  export type profilesUncheckedUpdateWithoutTask_activitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    tasks?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type bookingsCreateManyUserInput = {
    id?: string
    user_name?: string | null
    date: string
    time: string
    status?: string
    notes?: string | null
  }

  export type task_activitiesCreateManyUserInput = {
    id?: string
    user_name?: string | null
    status?: string
    admin_response?: string | null
    pb_card_details?: string | null
    pb_linkedin_url?: string | null
    pb_resume_link?: string | null
    pb_cover_letter_link?: string | null
    pb_dress_code_notes?: string | null
    pb_greeting_intro_notes?: string | null
    net_attended_event?: string | null
    net_people_met?: string | null
    net_contact_info?: string | null
    net_panel_summary?: string | null
    pw_introduction?: string | null
    pw_volunteer_hours?: string | null
    cert_topic?: string | null
    roadmap_topic?: string | null
    interview_recommendation?: string | null
    created_at?: Date | string
  }

  export type bookingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bookingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bookingsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type task_activitiesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    admin_response?: NullableStringFieldUpdateOperationsInput | string | null
    pb_card_details?: NullableStringFieldUpdateOperationsInput | string | null
    pb_linkedin_url?: NullableStringFieldUpdateOperationsInput | string | null
    pb_resume_link?: NullableStringFieldUpdateOperationsInput | string | null
    pb_cover_letter_link?: NullableStringFieldUpdateOperationsInput | string | null
    pb_dress_code_notes?: NullableStringFieldUpdateOperationsInput | string | null
    pb_greeting_intro_notes?: NullableStringFieldUpdateOperationsInput | string | null
    net_attended_event?: NullableStringFieldUpdateOperationsInput | string | null
    net_people_met?: NullableStringFieldUpdateOperationsInput | string | null
    net_contact_info?: NullableStringFieldUpdateOperationsInput | string | null
    net_panel_summary?: NullableStringFieldUpdateOperationsInput | string | null
    pw_introduction?: NullableStringFieldUpdateOperationsInput | string | null
    pw_volunteer_hours?: NullableStringFieldUpdateOperationsInput | string | null
    cert_topic?: NullableStringFieldUpdateOperationsInput | string | null
    roadmap_topic?: NullableStringFieldUpdateOperationsInput | string | null
    interview_recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type task_activitiesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    admin_response?: NullableStringFieldUpdateOperationsInput | string | null
    pb_card_details?: NullableStringFieldUpdateOperationsInput | string | null
    pb_linkedin_url?: NullableStringFieldUpdateOperationsInput | string | null
    pb_resume_link?: NullableStringFieldUpdateOperationsInput | string | null
    pb_cover_letter_link?: NullableStringFieldUpdateOperationsInput | string | null
    pb_dress_code_notes?: NullableStringFieldUpdateOperationsInput | string | null
    pb_greeting_intro_notes?: NullableStringFieldUpdateOperationsInput | string | null
    net_attended_event?: NullableStringFieldUpdateOperationsInput | string | null
    net_people_met?: NullableStringFieldUpdateOperationsInput | string | null
    net_contact_info?: NullableStringFieldUpdateOperationsInput | string | null
    net_panel_summary?: NullableStringFieldUpdateOperationsInput | string | null
    pw_introduction?: NullableStringFieldUpdateOperationsInput | string | null
    pw_volunteer_hours?: NullableStringFieldUpdateOperationsInput | string | null
    cert_topic?: NullableStringFieldUpdateOperationsInput | string | null
    roadmap_topic?: NullableStringFieldUpdateOperationsInput | string | null
    interview_recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type task_activitiesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    admin_response?: NullableStringFieldUpdateOperationsInput | string | null
    pb_card_details?: NullableStringFieldUpdateOperationsInput | string | null
    pb_linkedin_url?: NullableStringFieldUpdateOperationsInput | string | null
    pb_resume_link?: NullableStringFieldUpdateOperationsInput | string | null
    pb_cover_letter_link?: NullableStringFieldUpdateOperationsInput | string | null
    pb_dress_code_notes?: NullableStringFieldUpdateOperationsInput | string | null
    pb_greeting_intro_notes?: NullableStringFieldUpdateOperationsInput | string | null
    net_attended_event?: NullableStringFieldUpdateOperationsInput | string | null
    net_people_met?: NullableStringFieldUpdateOperationsInput | string | null
    net_contact_info?: NullableStringFieldUpdateOperationsInput | string | null
    net_panel_summary?: NullableStringFieldUpdateOperationsInput | string | null
    pw_introduction?: NullableStringFieldUpdateOperationsInput | string | null
    pw_volunteer_hours?: NullableStringFieldUpdateOperationsInput | string | null
    cert_topic?: NullableStringFieldUpdateOperationsInput | string | null
    roadmap_topic?: NullableStringFieldUpdateOperationsInput | string | null
    interview_recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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