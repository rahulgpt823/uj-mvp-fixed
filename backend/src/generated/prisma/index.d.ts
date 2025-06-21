
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
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Subcategory
 * 
 */
export type Subcategory = $Result.DefaultSelection<Prisma.$SubcategoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductVariant
 * 
 */
export type ProductVariant = $Result.DefaultSelection<Prisma.$ProductVariantPayload>
/**
 * Model Material
 * 
 */
export type Material = $Result.DefaultSelection<Prisma.$MaterialPayload>
/**
 * Model ProductMaterial
 * 
 */
export type ProductMaterial = $Result.DefaultSelection<Prisma.$ProductMaterialPayload>
/**
 * Model ProductTag
 * 
 */
export type ProductTag = $Result.DefaultSelection<Prisma.$ProductTagPayload>
/**
 * Model ProductTagMap
 * 
 */
export type ProductTagMap = $Result.DefaultSelection<Prisma.$ProductTagMapPayload>
/**
 * Model Flair
 * 
 */
export type Flair = $Result.DefaultSelection<Prisma.$FlairPayload>
/**
 * Model ProductFlairMap
 * 
 */
export type ProductFlairMap = $Result.DefaultSelection<Prisma.$ProductFlairMapPayload>
/**
 * Model ProductImage
 * 
 */
export type ProductImage = $Result.DefaultSelection<Prisma.$ProductImagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  Male: 'Male',
  Female: 'Female',
  Unisex: 'Unisex'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Karat: {
  k18: 'k18',
  k22: 'k22',
  k24: 'k24'
};

export type Karat = (typeof Karat)[keyof typeof Karat]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type Karat = $Enums.Karat

export const Karat: typeof $Enums.Karat

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
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
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
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
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subcategory`: Exposes CRUD operations for the **Subcategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subcategories
    * const subcategories = await prisma.subcategory.findMany()
    * ```
    */
  get subcategory(): Prisma.SubcategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productVariant`: Exposes CRUD operations for the **ProductVariant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductVariants
    * const productVariants = await prisma.productVariant.findMany()
    * ```
    */
  get productVariant(): Prisma.ProductVariantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.material`: Exposes CRUD operations for the **Material** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.material.findMany()
    * ```
    */
  get material(): Prisma.MaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productMaterial`: Exposes CRUD operations for the **ProductMaterial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductMaterials
    * const productMaterials = await prisma.productMaterial.findMany()
    * ```
    */
  get productMaterial(): Prisma.ProductMaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productTag`: Exposes CRUD operations for the **ProductTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductTags
    * const productTags = await prisma.productTag.findMany()
    * ```
    */
  get productTag(): Prisma.ProductTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productTagMap`: Exposes CRUD operations for the **ProductTagMap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductTagMaps
    * const productTagMaps = await prisma.productTagMap.findMany()
    * ```
    */
  get productTagMap(): Prisma.ProductTagMapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flair`: Exposes CRUD operations for the **Flair** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flairs
    * const flairs = await prisma.flair.findMany()
    * ```
    */
  get flair(): Prisma.FlairDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productFlairMap`: Exposes CRUD operations for the **ProductFlairMap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductFlairMaps
    * const productFlairMaps = await prisma.productFlairMap.findMany()
    * ```
    */
  get productFlairMap(): Prisma.ProductFlairMapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productImage`: Exposes CRUD operations for the **ProductImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductImages
    * const productImages = await prisma.productImage.findMany()
    * ```
    */
  get productImage(): Prisma.ProductImageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Category: 'Category',
    Subcategory: 'Subcategory',
    Product: 'Product',
    ProductVariant: 'ProductVariant',
    Material: 'Material',
    ProductMaterial: 'ProductMaterial',
    ProductTag: 'ProductTag',
    ProductTagMap: 'ProductTagMap',
    Flair: 'Flair',
    ProductFlairMap: 'ProductFlairMap',
    ProductImage: 'ProductImage'
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
      modelProps: "category" | "subcategory" | "product" | "productVariant" | "material" | "productMaterial" | "productTag" | "productTagMap" | "flair" | "productFlairMap" | "productImage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Subcategory: {
        payload: Prisma.$SubcategoryPayload<ExtArgs>
        fields: Prisma.SubcategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubcategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubcategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          findFirst: {
            args: Prisma.SubcategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubcategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          findMany: {
            args: Prisma.SubcategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>[]
          }
          create: {
            args: Prisma.SubcategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          createMany: {
            args: Prisma.SubcategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubcategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>[]
          }
          delete: {
            args: Prisma.SubcategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          update: {
            args: Prisma.SubcategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          deleteMany: {
            args: Prisma.SubcategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubcategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubcategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>[]
          }
          upsert: {
            args: Prisma.SubcategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          aggregate: {
            args: Prisma.SubcategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubcategory>
          }
          groupBy: {
            args: Prisma.SubcategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubcategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubcategoryCountArgs<ExtArgs>
            result: $Utils.Optional<SubcategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductVariant: {
        payload: Prisma.$ProductVariantPayload<ExtArgs>
        fields: Prisma.ProductVariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductVariantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductVariantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findFirst: {
            args: Prisma.ProductVariantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductVariantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findMany: {
            args: Prisma.ProductVariantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          create: {
            args: Prisma.ProductVariantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          createMany: {
            args: Prisma.ProductVariantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductVariantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          delete: {
            args: Prisma.ProductVariantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          update: {
            args: Prisma.ProductVariantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          deleteMany: {
            args: Prisma.ProductVariantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductVariantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductVariantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          upsert: {
            args: Prisma.ProductVariantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          aggregate: {
            args: Prisma.ProductVariantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductVariant>
          }
          groupBy: {
            args: Prisma.ProductVariantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductVariantCountArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantCountAggregateOutputType> | number
          }
        }
      }
      Material: {
        payload: Prisma.$MaterialPayload<ExtArgs>
        fields: Prisma.MaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findFirst: {
            args: Prisma.MaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findMany: {
            args: Prisma.MaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          create: {
            args: Prisma.MaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          createMany: {
            args: Prisma.MaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          delete: {
            args: Prisma.MaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          update: {
            args: Prisma.MaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          deleteMany: {
            args: Prisma.MaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaterialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          upsert: {
            args: Prisma.MaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          aggregate: {
            args: Prisma.MaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterial>
          }
          groupBy: {
            args: Prisma.MaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialCountAggregateOutputType> | number
          }
        }
      }
      ProductMaterial: {
        payload: Prisma.$ProductMaterialPayload<ExtArgs>
        fields: Prisma.ProductMaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductMaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductMaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMaterialPayload>
          }
          findFirst: {
            args: Prisma.ProductMaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductMaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMaterialPayload>
          }
          findMany: {
            args: Prisma.ProductMaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMaterialPayload>[]
          }
          create: {
            args: Prisma.ProductMaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMaterialPayload>
          }
          createMany: {
            args: Prisma.ProductMaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductMaterialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMaterialPayload>[]
          }
          delete: {
            args: Prisma.ProductMaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMaterialPayload>
          }
          update: {
            args: Prisma.ProductMaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMaterialPayload>
          }
          deleteMany: {
            args: Prisma.ProductMaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductMaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductMaterialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMaterialPayload>[]
          }
          upsert: {
            args: Prisma.ProductMaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMaterialPayload>
          }
          aggregate: {
            args: Prisma.ProductMaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductMaterial>
          }
          groupBy: {
            args: Prisma.ProductMaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductMaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductMaterialCountArgs<ExtArgs>
            result: $Utils.Optional<ProductMaterialCountAggregateOutputType> | number
          }
        }
      }
      ProductTag: {
        payload: Prisma.$ProductTagPayload<ExtArgs>
        fields: Prisma.ProductTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagPayload>
          }
          findFirst: {
            args: Prisma.ProductTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagPayload>
          }
          findMany: {
            args: Prisma.ProductTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagPayload>[]
          }
          create: {
            args: Prisma.ProductTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagPayload>
          }
          createMany: {
            args: Prisma.ProductTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagPayload>[]
          }
          delete: {
            args: Prisma.ProductTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagPayload>
          }
          update: {
            args: Prisma.ProductTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagPayload>
          }
          deleteMany: {
            args: Prisma.ProductTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagPayload>[]
          }
          upsert: {
            args: Prisma.ProductTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagPayload>
          }
          aggregate: {
            args: Prisma.ProductTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductTag>
          }
          groupBy: {
            args: Prisma.ProductTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductTagCountArgs<ExtArgs>
            result: $Utils.Optional<ProductTagCountAggregateOutputType> | number
          }
        }
      }
      ProductTagMap: {
        payload: Prisma.$ProductTagMapPayload<ExtArgs>
        fields: Prisma.ProductTagMapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductTagMapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagMapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductTagMapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagMapPayload>
          }
          findFirst: {
            args: Prisma.ProductTagMapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagMapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductTagMapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagMapPayload>
          }
          findMany: {
            args: Prisma.ProductTagMapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagMapPayload>[]
          }
          create: {
            args: Prisma.ProductTagMapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagMapPayload>
          }
          createMany: {
            args: Prisma.ProductTagMapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductTagMapCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagMapPayload>[]
          }
          delete: {
            args: Prisma.ProductTagMapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagMapPayload>
          }
          update: {
            args: Prisma.ProductTagMapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagMapPayload>
          }
          deleteMany: {
            args: Prisma.ProductTagMapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductTagMapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductTagMapUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagMapPayload>[]
          }
          upsert: {
            args: Prisma.ProductTagMapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTagMapPayload>
          }
          aggregate: {
            args: Prisma.ProductTagMapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductTagMap>
          }
          groupBy: {
            args: Prisma.ProductTagMapGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductTagMapGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductTagMapCountArgs<ExtArgs>
            result: $Utils.Optional<ProductTagMapCountAggregateOutputType> | number
          }
        }
      }
      Flair: {
        payload: Prisma.$FlairPayload<ExtArgs>
        fields: Prisma.FlairFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlairFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlairPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlairFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlairPayload>
          }
          findFirst: {
            args: Prisma.FlairFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlairPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlairFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlairPayload>
          }
          findMany: {
            args: Prisma.FlairFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlairPayload>[]
          }
          create: {
            args: Prisma.FlairCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlairPayload>
          }
          createMany: {
            args: Prisma.FlairCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlairCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlairPayload>[]
          }
          delete: {
            args: Prisma.FlairDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlairPayload>
          }
          update: {
            args: Prisma.FlairUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlairPayload>
          }
          deleteMany: {
            args: Prisma.FlairDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlairUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlairUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlairPayload>[]
          }
          upsert: {
            args: Prisma.FlairUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlairPayload>
          }
          aggregate: {
            args: Prisma.FlairAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlair>
          }
          groupBy: {
            args: Prisma.FlairGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlairGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlairCountArgs<ExtArgs>
            result: $Utils.Optional<FlairCountAggregateOutputType> | number
          }
        }
      }
      ProductFlairMap: {
        payload: Prisma.$ProductFlairMapPayload<ExtArgs>
        fields: Prisma.ProductFlairMapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFlairMapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFlairMapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFlairMapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFlairMapPayload>
          }
          findFirst: {
            args: Prisma.ProductFlairMapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFlairMapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFlairMapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFlairMapPayload>
          }
          findMany: {
            args: Prisma.ProductFlairMapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFlairMapPayload>[]
          }
          create: {
            args: Prisma.ProductFlairMapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFlairMapPayload>
          }
          createMany: {
            args: Prisma.ProductFlairMapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductFlairMapCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFlairMapPayload>[]
          }
          delete: {
            args: Prisma.ProductFlairMapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFlairMapPayload>
          }
          update: {
            args: Prisma.ProductFlairMapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFlairMapPayload>
          }
          deleteMany: {
            args: Prisma.ProductFlairMapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductFlairMapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductFlairMapUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFlairMapPayload>[]
          }
          upsert: {
            args: Prisma.ProductFlairMapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFlairMapPayload>
          }
          aggregate: {
            args: Prisma.ProductFlairMapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductFlairMap>
          }
          groupBy: {
            args: Prisma.ProductFlairMapGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductFlairMapGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductFlairMapCountArgs<ExtArgs>
            result: $Utils.Optional<ProductFlairMapCountAggregateOutputType> | number
          }
        }
      }
      ProductImage: {
        payload: Prisma.$ProductImagePayload<ExtArgs>
        fields: Prisma.ProductImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findFirst: {
            args: Prisma.ProductImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findMany: {
            args: Prisma.ProductImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          create: {
            args: Prisma.ProductImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          createMany: {
            args: Prisma.ProductImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          delete: {
            args: Prisma.ProductImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          update: {
            args: Prisma.ProductImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          deleteMany: {
            args: Prisma.ProductImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          upsert: {
            args: Prisma.ProductImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          aggregate: {
            args: Prisma.ProductImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductImage>
          }
          groupBy: {
            args: Prisma.ProductImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductImageCountArgs<ExtArgs>
            result: $Utils.Optional<ProductImageCountAggregateOutputType> | number
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
    category?: CategoryOmit
    subcategory?: SubcategoryOmit
    product?: ProductOmit
    productVariant?: ProductVariantOmit
    material?: MaterialOmit
    productMaterial?: ProductMaterialOmit
    productTag?: ProductTagOmit
    productTagMap?: ProductTagMapOmit
    flair?: FlairOmit
    productFlairMap?: ProductFlairMapOmit
    productImage?: ProductImageOmit
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
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    subcategories: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategories?: boolean | CategoryCountOutputTypeCountSubcategoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSubcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubcategoryWhereInput
  }


  /**
   * Count Type SubcategoryCountOutputType
   */

  export type SubcategoryCountOutputType = {
    products: number
  }

  export type SubcategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | SubcategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * SubcategoryCountOutputType without action
   */
  export type SubcategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubcategoryCountOutputType
     */
    select?: SubcategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubcategoryCountOutputType without action
   */
  export type SubcategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    tags: number
    flairs: number
    images: number
    variants: number
    materials: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | ProductCountOutputTypeCountTagsArgs
    flairs?: boolean | ProductCountOutputTypeCountFlairsArgs
    images?: boolean | ProductCountOutputTypeCountImagesArgs
    variants?: boolean | ProductCountOutputTypeCountVariantsArgs
    materials?: boolean | ProductCountOutputTypeCountMaterialsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductTagMapWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountFlairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductFlairMapWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductMaterialWhereInput
  }


  /**
   * Count Type MaterialCountOutputType
   */

  export type MaterialCountOutputType = {
    products: number
  }

  export type MaterialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | MaterialCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCountOutputType
     */
    select?: MaterialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductMaterialWhereInput
  }


  /**
   * Count Type ProductTagCountOutputType
   */

  export type ProductTagCountOutputType = {
    products: number
  }

  export type ProductTagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductTagCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * ProductTagCountOutputType without action
   */
  export type ProductTagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTagCountOutputType
     */
    select?: ProductTagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductTagCountOutputType without action
   */
  export type ProductTagCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductTagMapWhereInput
  }


  /**
   * Count Type FlairCountOutputType
   */

  export type FlairCountOutputType = {
    products: number
  }

  export type FlairCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | FlairCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * FlairCountOutputType without action
   */
  export type FlairCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlairCountOutputType
     */
    select?: FlairCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlairCountOutputType without action
   */
  export type FlairCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductFlairMapWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    slug: string | null
    metaTitle: string | null
    metaDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    slug: string | null
    metaTitle: string | null
    metaDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    slug: number
    metaTitle: number
    metaDescription: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    slug?: true
    metaTitle?: true
    metaDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    slug?: true
    metaTitle?: true
    metaDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    slug?: true
    metaTitle?: true
    metaDescription?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    description: string | null
    slug: string
    metaTitle: string | null
    metaDescription: string | null
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    slug?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subcategories?: boolean | Category$subcategoriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    slug?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    slug?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    slug?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "slug" | "metaTitle" | "metaDescription" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategories?: boolean | Category$subcategoriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      subcategories: Prisma.$SubcategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      slug: string
      metaTitle: string | null
      metaDescription: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subcategories<T extends Category$subcategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Category$subcategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly metaTitle: FieldRef<"Category", 'String'>
    readonly metaDescription: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.subcategories
   */
  export type Category$subcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    where?: SubcategoryWhereInput
    orderBy?: SubcategoryOrderByWithRelationInput | SubcategoryOrderByWithRelationInput[]
    cursor?: SubcategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubcategoryScalarFieldEnum | SubcategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Subcategory
   */

  export type AggregateSubcategory = {
    _count: SubcategoryCountAggregateOutputType | null
    _avg: SubcategoryAvgAggregateOutputType | null
    _sum: SubcategorySumAggregateOutputType | null
    _min: SubcategoryMinAggregateOutputType | null
    _max: SubcategoryMaxAggregateOutputType | null
  }

  export type SubcategoryAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type SubcategorySumAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type SubcategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubcategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubcategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubcategoryAvgAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type SubcategorySumAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type SubcategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubcategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubcategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubcategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subcategory to aggregate.
     */
    where?: SubcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcategories to fetch.
     */
    orderBy?: SubcategoryOrderByWithRelationInput | SubcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subcategories
    **/
    _count?: true | SubcategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubcategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubcategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubcategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubcategoryMaxAggregateInputType
  }

  export type GetSubcategoryAggregateType<T extends SubcategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSubcategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubcategory[P]>
      : GetScalarType<T[P], AggregateSubcategory[P]>
  }




  export type SubcategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubcategoryWhereInput
    orderBy?: SubcategoryOrderByWithAggregationInput | SubcategoryOrderByWithAggregationInput[]
    by: SubcategoryScalarFieldEnum[] | SubcategoryScalarFieldEnum
    having?: SubcategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubcategoryCountAggregateInputType | true
    _avg?: SubcategoryAvgAggregateInputType
    _sum?: SubcategorySumAggregateInputType
    _min?: SubcategoryMinAggregateInputType
    _max?: SubcategoryMaxAggregateInputType
  }

  export type SubcategoryGroupByOutputType = {
    id: number
    name: string
    slug: string
    description: string | null
    categoryId: number
    createdAt: Date
    updatedAt: Date
    _count: SubcategoryCountAggregateOutputType | null
    _avg: SubcategoryAvgAggregateOutputType | null
    _sum: SubcategorySumAggregateOutputType | null
    _min: SubcategoryMinAggregateOutputType | null
    _max: SubcategoryMaxAggregateOutputType | null
  }

  type GetSubcategoryGroupByPayload<T extends SubcategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubcategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubcategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubcategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SubcategoryGroupByOutputType[P]>
        }
      >
    >


  export type SubcategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    products?: boolean | Subcategory$productsArgs<ExtArgs>
    _count?: boolean | SubcategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subcategory"]>

  export type SubcategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subcategory"]>

  export type SubcategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subcategory"]>

  export type SubcategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubcategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["subcategory"]>
  export type SubcategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    products?: boolean | Subcategory$productsArgs<ExtArgs>
    _count?: boolean | SubcategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubcategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type SubcategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $SubcategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subcategory"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      description: string | null
      categoryId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subcategory"]>
    composites: {}
  }

  type SubcategoryGetPayload<S extends boolean | null | undefined | SubcategoryDefaultArgs> = $Result.GetResult<Prisma.$SubcategoryPayload, S>

  type SubcategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubcategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubcategoryCountAggregateInputType | true
    }

  export interface SubcategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subcategory'], meta: { name: 'Subcategory' } }
    /**
     * Find zero or one Subcategory that matches the filter.
     * @param {SubcategoryFindUniqueArgs} args - Arguments to find a Subcategory
     * @example
     * // Get one Subcategory
     * const subcategory = await prisma.subcategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubcategoryFindUniqueArgs>(args: SelectSubset<T, SubcategoryFindUniqueArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subcategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubcategoryFindUniqueOrThrowArgs} args - Arguments to find a Subcategory
     * @example
     * // Get one Subcategory
     * const subcategory = await prisma.subcategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubcategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SubcategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subcategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryFindFirstArgs} args - Arguments to find a Subcategory
     * @example
     * // Get one Subcategory
     * const subcategory = await prisma.subcategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubcategoryFindFirstArgs>(args?: SelectSubset<T, SubcategoryFindFirstArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subcategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryFindFirstOrThrowArgs} args - Arguments to find a Subcategory
     * @example
     * // Get one Subcategory
     * const subcategory = await prisma.subcategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubcategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SubcategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subcategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subcategories
     * const subcategories = await prisma.subcategory.findMany()
     * 
     * // Get first 10 Subcategories
     * const subcategories = await prisma.subcategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subcategoryWithIdOnly = await prisma.subcategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubcategoryFindManyArgs>(args?: SelectSubset<T, SubcategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subcategory.
     * @param {SubcategoryCreateArgs} args - Arguments to create a Subcategory.
     * @example
     * // Create one Subcategory
     * const Subcategory = await prisma.subcategory.create({
     *   data: {
     *     // ... data to create a Subcategory
     *   }
     * })
     * 
     */
    create<T extends SubcategoryCreateArgs>(args: SelectSubset<T, SubcategoryCreateArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subcategories.
     * @param {SubcategoryCreateManyArgs} args - Arguments to create many Subcategories.
     * @example
     * // Create many Subcategories
     * const subcategory = await prisma.subcategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubcategoryCreateManyArgs>(args?: SelectSubset<T, SubcategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subcategories and returns the data saved in the database.
     * @param {SubcategoryCreateManyAndReturnArgs} args - Arguments to create many Subcategories.
     * @example
     * // Create many Subcategories
     * const subcategory = await prisma.subcategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subcategories and only return the `id`
     * const subcategoryWithIdOnly = await prisma.subcategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubcategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SubcategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subcategory.
     * @param {SubcategoryDeleteArgs} args - Arguments to delete one Subcategory.
     * @example
     * // Delete one Subcategory
     * const Subcategory = await prisma.subcategory.delete({
     *   where: {
     *     // ... filter to delete one Subcategory
     *   }
     * })
     * 
     */
    delete<T extends SubcategoryDeleteArgs>(args: SelectSubset<T, SubcategoryDeleteArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subcategory.
     * @param {SubcategoryUpdateArgs} args - Arguments to update one Subcategory.
     * @example
     * // Update one Subcategory
     * const subcategory = await prisma.subcategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubcategoryUpdateArgs>(args: SelectSubset<T, SubcategoryUpdateArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subcategories.
     * @param {SubcategoryDeleteManyArgs} args - Arguments to filter Subcategories to delete.
     * @example
     * // Delete a few Subcategories
     * const { count } = await prisma.subcategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubcategoryDeleteManyArgs>(args?: SelectSubset<T, SubcategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subcategories
     * const subcategory = await prisma.subcategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubcategoryUpdateManyArgs>(args: SelectSubset<T, SubcategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subcategories and returns the data updated in the database.
     * @param {SubcategoryUpdateManyAndReturnArgs} args - Arguments to update many Subcategories.
     * @example
     * // Update many Subcategories
     * const subcategory = await prisma.subcategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subcategories and only return the `id`
     * const subcategoryWithIdOnly = await prisma.subcategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubcategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, SubcategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subcategory.
     * @param {SubcategoryUpsertArgs} args - Arguments to update or create a Subcategory.
     * @example
     * // Update or create a Subcategory
     * const subcategory = await prisma.subcategory.upsert({
     *   create: {
     *     // ... data to create a Subcategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subcategory we want to update
     *   }
     * })
     */
    upsert<T extends SubcategoryUpsertArgs>(args: SelectSubset<T, SubcategoryUpsertArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryCountArgs} args - Arguments to filter Subcategories to count.
     * @example
     * // Count the number of Subcategories
     * const count = await prisma.subcategory.count({
     *   where: {
     *     // ... the filter for the Subcategories we want to count
     *   }
     * })
    **/
    count<T extends SubcategoryCountArgs>(
      args?: Subset<T, SubcategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubcategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subcategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubcategoryAggregateArgs>(args: Subset<T, SubcategoryAggregateArgs>): Prisma.PrismaPromise<GetSubcategoryAggregateType<T>>

    /**
     * Group by Subcategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryGroupByArgs} args - Group by arguments.
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
      T extends SubcategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubcategoryGroupByArgs['orderBy'] }
        : { orderBy?: SubcategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubcategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubcategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subcategory model
   */
  readonly fields: SubcategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subcategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubcategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends Subcategory$productsArgs<ExtArgs> = {}>(args?: Subset<T, Subcategory$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Subcategory model
   */
  interface SubcategoryFieldRefs {
    readonly id: FieldRef<"Subcategory", 'Int'>
    readonly name: FieldRef<"Subcategory", 'String'>
    readonly slug: FieldRef<"Subcategory", 'String'>
    readonly description: FieldRef<"Subcategory", 'String'>
    readonly categoryId: FieldRef<"Subcategory", 'Int'>
    readonly createdAt: FieldRef<"Subcategory", 'DateTime'>
    readonly updatedAt: FieldRef<"Subcategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subcategory findUnique
   */
  export type SubcategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Subcategory to fetch.
     */
    where: SubcategoryWhereUniqueInput
  }

  /**
   * Subcategory findUniqueOrThrow
   */
  export type SubcategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Subcategory to fetch.
     */
    where: SubcategoryWhereUniqueInput
  }

  /**
   * Subcategory findFirst
   */
  export type SubcategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Subcategory to fetch.
     */
    where?: SubcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcategories to fetch.
     */
    orderBy?: SubcategoryOrderByWithRelationInput | SubcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subcategories.
     */
    cursor?: SubcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subcategories.
     */
    distinct?: SubcategoryScalarFieldEnum | SubcategoryScalarFieldEnum[]
  }

  /**
   * Subcategory findFirstOrThrow
   */
  export type SubcategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Subcategory to fetch.
     */
    where?: SubcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcategories to fetch.
     */
    orderBy?: SubcategoryOrderByWithRelationInput | SubcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subcategories.
     */
    cursor?: SubcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subcategories.
     */
    distinct?: SubcategoryScalarFieldEnum | SubcategoryScalarFieldEnum[]
  }

  /**
   * Subcategory findMany
   */
  export type SubcategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Subcategories to fetch.
     */
    where?: SubcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcategories to fetch.
     */
    orderBy?: SubcategoryOrderByWithRelationInput | SubcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subcategories.
     */
    cursor?: SubcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcategories.
     */
    skip?: number
    distinct?: SubcategoryScalarFieldEnum | SubcategoryScalarFieldEnum[]
  }

  /**
   * Subcategory create
   */
  export type SubcategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Subcategory.
     */
    data: XOR<SubcategoryCreateInput, SubcategoryUncheckedCreateInput>
  }

  /**
   * Subcategory createMany
   */
  export type SubcategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subcategories.
     */
    data: SubcategoryCreateManyInput | SubcategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subcategory createManyAndReturn
   */
  export type SubcategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Subcategories.
     */
    data: SubcategoryCreateManyInput | SubcategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subcategory update
   */
  export type SubcategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Subcategory.
     */
    data: XOR<SubcategoryUpdateInput, SubcategoryUncheckedUpdateInput>
    /**
     * Choose, which Subcategory to update.
     */
    where: SubcategoryWhereUniqueInput
  }

  /**
   * Subcategory updateMany
   */
  export type SubcategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subcategories.
     */
    data: XOR<SubcategoryUpdateManyMutationInput, SubcategoryUncheckedUpdateManyInput>
    /**
     * Filter which Subcategories to update
     */
    where?: SubcategoryWhereInput
    /**
     * Limit how many Subcategories to update.
     */
    limit?: number
  }

  /**
   * Subcategory updateManyAndReturn
   */
  export type SubcategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * The data used to update Subcategories.
     */
    data: XOR<SubcategoryUpdateManyMutationInput, SubcategoryUncheckedUpdateManyInput>
    /**
     * Filter which Subcategories to update
     */
    where?: SubcategoryWhereInput
    /**
     * Limit how many Subcategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subcategory upsert
   */
  export type SubcategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Subcategory to update in case it exists.
     */
    where: SubcategoryWhereUniqueInput
    /**
     * In case the Subcategory found by the `where` argument doesn't exist, create a new Subcategory with this data.
     */
    create: XOR<SubcategoryCreateInput, SubcategoryUncheckedCreateInput>
    /**
     * In case the Subcategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubcategoryUpdateInput, SubcategoryUncheckedUpdateInput>
  }

  /**
   * Subcategory delete
   */
  export type SubcategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter which Subcategory to delete.
     */
    where: SubcategoryWhereUniqueInput
  }

  /**
   * Subcategory deleteMany
   */
  export type SubcategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subcategories to delete
     */
    where?: SubcategoryWhereInput
    /**
     * Limit how many Subcategories to delete.
     */
    limit?: number
  }

  /**
   * Subcategory.products
   */
  export type Subcategory$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Subcategory without action
   */
  export type SubcategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    netWeight: number | null
    grossWeight: number | null
    price: Decimal | null
    salePrice: Decimal | null
    stockQuantity: number | null
    subcategoryId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    netWeight: number | null
    grossWeight: number | null
    price: Decimal | null
    salePrice: Decimal | null
    stockQuantity: number | null
    subcategoryId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    gender: $Enums.Gender | null
    description: string | null
    netWeight: number | null
    grossWeight: number | null
    huid: string | null
    sku: string | null
    karat: $Enums.Karat | null
    price: Decimal | null
    salePrice: Decimal | null
    stockQuantity: number | null
    isPublished: boolean | null
    publishedAt: Date | null
    subcategoryId: number | null
    metaTitle: string | null
    metaDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    gender: $Enums.Gender | null
    description: string | null
    netWeight: number | null
    grossWeight: number | null
    huid: string | null
    sku: string | null
    karat: $Enums.Karat | null
    price: Decimal | null
    salePrice: Decimal | null
    stockQuantity: number | null
    isPublished: boolean | null
    publishedAt: Date | null
    subcategoryId: number | null
    metaTitle: string | null
    metaDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    gender: number
    description: number
    netWeight: number
    grossWeight: number
    huid: number
    sku: number
    karat: number
    price: number
    salePrice: number
    stockQuantity: number
    isPublished: number
    publishedAt: number
    subcategoryId: number
    metaTitle: number
    metaDescription: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    netWeight?: true
    grossWeight?: true
    price?: true
    salePrice?: true
    stockQuantity?: true
    subcategoryId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    netWeight?: true
    grossWeight?: true
    price?: true
    salePrice?: true
    stockQuantity?: true
    subcategoryId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    gender?: true
    description?: true
    netWeight?: true
    grossWeight?: true
    huid?: true
    sku?: true
    karat?: true
    price?: true
    salePrice?: true
    stockQuantity?: true
    isPublished?: true
    publishedAt?: true
    subcategoryId?: true
    metaTitle?: true
    metaDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    gender?: true
    description?: true
    netWeight?: true
    grossWeight?: true
    huid?: true
    sku?: true
    karat?: true
    price?: true
    salePrice?: true
    stockQuantity?: true
    isPublished?: true
    publishedAt?: true
    subcategoryId?: true
    metaTitle?: true
    metaDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    gender?: true
    description?: true
    netWeight?: true
    grossWeight?: true
    huid?: true
    sku?: true
    karat?: true
    price?: true
    salePrice?: true
    stockQuantity?: true
    isPublished?: true
    publishedAt?: true
    subcategoryId?: true
    metaTitle?: true
    metaDescription?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    slug: string
    gender: $Enums.Gender
    description: string | null
    netWeight: number
    grossWeight: number | null
    huid: string
    sku: string
    karat: $Enums.Karat
    price: Decimal
    salePrice: Decimal | null
    stockQuantity: number
    isPublished: boolean
    publishedAt: Date | null
    subcategoryId: number
    metaTitle: string | null
    metaDescription: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    gender?: boolean
    description?: boolean
    netWeight?: boolean
    grossWeight?: boolean
    huid?: boolean
    sku?: boolean
    karat?: boolean
    price?: boolean
    salePrice?: boolean
    stockQuantity?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    subcategoryId?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subcategory?: boolean | SubcategoryDefaultArgs<ExtArgs>
    tags?: boolean | Product$tagsArgs<ExtArgs>
    flairs?: boolean | Product$flairsArgs<ExtArgs>
    images?: boolean | Product$imagesArgs<ExtArgs>
    variants?: boolean | Product$variantsArgs<ExtArgs>
    materials?: boolean | Product$materialsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    gender?: boolean
    description?: boolean
    netWeight?: boolean
    grossWeight?: boolean
    huid?: boolean
    sku?: boolean
    karat?: boolean
    price?: boolean
    salePrice?: boolean
    stockQuantity?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    subcategoryId?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subcategory?: boolean | SubcategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    gender?: boolean
    description?: boolean
    netWeight?: boolean
    grossWeight?: boolean
    huid?: boolean
    sku?: boolean
    karat?: boolean
    price?: boolean
    salePrice?: boolean
    stockQuantity?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    subcategoryId?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subcategory?: boolean | SubcategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    gender?: boolean
    description?: boolean
    netWeight?: boolean
    grossWeight?: boolean
    huid?: boolean
    sku?: boolean
    karat?: boolean
    price?: boolean
    salePrice?: boolean
    stockQuantity?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    subcategoryId?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "gender" | "description" | "netWeight" | "grossWeight" | "huid" | "sku" | "karat" | "price" | "salePrice" | "stockQuantity" | "isPublished" | "publishedAt" | "subcategoryId" | "metaTitle" | "metaDescription" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategory?: boolean | SubcategoryDefaultArgs<ExtArgs>
    tags?: boolean | Product$tagsArgs<ExtArgs>
    flairs?: boolean | Product$flairsArgs<ExtArgs>
    images?: boolean | Product$imagesArgs<ExtArgs>
    variants?: boolean | Product$variantsArgs<ExtArgs>
    materials?: boolean | Product$materialsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategory?: boolean | SubcategoryDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategory?: boolean | SubcategoryDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      subcategory: Prisma.$SubcategoryPayload<ExtArgs>
      tags: Prisma.$ProductTagMapPayload<ExtArgs>[]
      flairs: Prisma.$ProductFlairMapPayload<ExtArgs>[]
      images: Prisma.$ProductImagePayload<ExtArgs>[]
      variants: Prisma.$ProductVariantPayload<ExtArgs>[]
      materials: Prisma.$ProductMaterialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      gender: $Enums.Gender
      description: string | null
      netWeight: number
      grossWeight: number | null
      huid: string
      sku: string
      karat: $Enums.Karat
      price: Prisma.Decimal
      salePrice: Prisma.Decimal | null
      stockQuantity: number
      isPublished: boolean
      publishedAt: Date | null
      subcategoryId: number
      metaTitle: string | null
      metaDescription: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subcategory<T extends SubcategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubcategoryDefaultArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends Product$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Product$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductTagMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flairs<T extends Product$flairsArgs<ExtArgs> = {}>(args?: Subset<T, Product$flairsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductFlairMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Product$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Product$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    variants<T extends Product$variantsArgs<ExtArgs> = {}>(args?: Subset<T, Product$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    materials<T extends Product$materialsArgs<ExtArgs> = {}>(args?: Subset<T, Product$materialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly gender: FieldRef<"Product", 'Gender'>
    readonly description: FieldRef<"Product", 'String'>
    readonly netWeight: FieldRef<"Product", 'Float'>
    readonly grossWeight: FieldRef<"Product", 'Float'>
    readonly huid: FieldRef<"Product", 'String'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly karat: FieldRef<"Product", 'Karat'>
    readonly price: FieldRef<"Product", 'Decimal'>
    readonly salePrice: FieldRef<"Product", 'Decimal'>
    readonly stockQuantity: FieldRef<"Product", 'Int'>
    readonly isPublished: FieldRef<"Product", 'Boolean'>
    readonly publishedAt: FieldRef<"Product", 'DateTime'>
    readonly subcategoryId: FieldRef<"Product", 'Int'>
    readonly metaTitle: FieldRef<"Product", 'String'>
    readonly metaDescription: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.tags
   */
  export type Product$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTagMap
     */
    select?: ProductTagMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTagMap
     */
    omit?: ProductTagMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTagMapInclude<ExtArgs> | null
    where?: ProductTagMapWhereInput
    orderBy?: ProductTagMapOrderByWithRelationInput | ProductTagMapOrderByWithRelationInput[]
    cursor?: ProductTagMapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductTagMapScalarFieldEnum | ProductTagMapScalarFieldEnum[]
  }

  /**
   * Product.flairs
   */
  export type Product$flairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFlairMap
     */
    select?: ProductFlairMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFlairMap
     */
    omit?: ProductFlairMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFlairMapInclude<ExtArgs> | null
    where?: ProductFlairMapWhereInput
    orderBy?: ProductFlairMapOrderByWithRelationInput | ProductFlairMapOrderByWithRelationInput[]
    cursor?: ProductFlairMapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductFlairMapScalarFieldEnum | ProductFlairMapScalarFieldEnum[]
  }

  /**
   * Product.images
   */
  export type Product$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    cursor?: ProductImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * Product.variants
   */
  export type Product$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    cursor?: ProductVariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * Product.materials
   */
  export type Product$materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMaterial
     */
    select?: ProductMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMaterial
     */
    omit?: ProductMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMaterialInclude<ExtArgs> | null
    where?: ProductMaterialWhereInput
    orderBy?: ProductMaterialOrderByWithRelationInput | ProductMaterialOrderByWithRelationInput[]
    cursor?: ProductMaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductMaterialScalarFieldEnum | ProductMaterialScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductVariant
   */

  export type AggregateProductVariant = {
    _count: ProductVariantCountAggregateOutputType | null
    _avg: ProductVariantAvgAggregateOutputType | null
    _sum: ProductVariantSumAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  export type ProductVariantAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    price: Decimal | null
    salePrice: Decimal | null
    stockQuantity: number | null
  }

  export type ProductVariantSumAggregateOutputType = {
    id: number | null
    productId: number | null
    price: Decimal | null
    salePrice: Decimal | null
    stockQuantity: number | null
  }

  export type ProductVariantMinAggregateOutputType = {
    id: number | null
    productId: number | null
    name: string | null
    size: string | null
    color: string | null
    price: Decimal | null
    salePrice: Decimal | null
    sku: string | null
    stockQuantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductVariantMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    name: string | null
    size: string | null
    color: string | null
    price: Decimal | null
    salePrice: Decimal | null
    sku: string | null
    stockQuantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductVariantCountAggregateOutputType = {
    id: number
    productId: number
    name: number
    size: number
    color: number
    price: number
    salePrice: number
    sku: number
    stockQuantity: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductVariantAvgAggregateInputType = {
    id?: true
    productId?: true
    price?: true
    salePrice?: true
    stockQuantity?: true
  }

  export type ProductVariantSumAggregateInputType = {
    id?: true
    productId?: true
    price?: true
    salePrice?: true
    stockQuantity?: true
  }

  export type ProductVariantMinAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    size?: true
    color?: true
    price?: true
    salePrice?: true
    sku?: true
    stockQuantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductVariantMaxAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    size?: true
    color?: true
    price?: true
    salePrice?: true
    sku?: true
    stockQuantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductVariantCountAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    size?: true
    color?: true
    price?: true
    salePrice?: true
    sku?: true
    stockQuantity?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductVariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariant to aggregate.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductVariants
    **/
    _count?: true | ProductVariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductVariantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductVariantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductVariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductVariantMaxAggregateInputType
  }

  export type GetProductVariantAggregateType<T extends ProductVariantAggregateArgs> = {
        [P in keyof T & keyof AggregateProductVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductVariant[P]>
      : GetScalarType<T[P], AggregateProductVariant[P]>
  }




  export type ProductVariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithAggregationInput | ProductVariantOrderByWithAggregationInput[]
    by: ProductVariantScalarFieldEnum[] | ProductVariantScalarFieldEnum
    having?: ProductVariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductVariantCountAggregateInputType | true
    _avg?: ProductVariantAvgAggregateInputType
    _sum?: ProductVariantSumAggregateInputType
    _min?: ProductVariantMinAggregateInputType
    _max?: ProductVariantMaxAggregateInputType
  }

  export type ProductVariantGroupByOutputType = {
    id: number
    productId: number
    name: string
    size: string | null
    color: string | null
    price: Decimal
    salePrice: Decimal | null
    sku: string
    stockQuantity: number
    createdAt: Date
    updatedAt: Date
    _count: ProductVariantCountAggregateOutputType | null
    _avg: ProductVariantAvgAggregateOutputType | null
    _sum: ProductVariantSumAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  type GetProductVariantGroupByPayload<T extends ProductVariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductVariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductVariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
            : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
        }
      >
    >


  export type ProductVariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    name?: boolean
    size?: boolean
    color?: boolean
    price?: boolean
    salePrice?: boolean
    sku?: boolean
    stockQuantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    name?: boolean
    size?: boolean
    color?: boolean
    price?: boolean
    salePrice?: boolean
    sku?: boolean
    stockQuantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    name?: boolean
    size?: boolean
    color?: boolean
    price?: boolean
    salePrice?: boolean
    sku?: boolean
    stockQuantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectScalar = {
    id?: boolean
    productId?: boolean
    name?: boolean
    size?: boolean
    color?: boolean
    price?: boolean
    salePrice?: boolean
    sku?: boolean
    stockQuantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductVariantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "name" | "size" | "color" | "price" | "salePrice" | "sku" | "stockQuantity" | "createdAt" | "updatedAt", ExtArgs["result"]["productVariant"]>
  export type ProductVariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductVariantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductVariantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductVariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductVariant"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      name: string
      size: string | null
      color: string | null
      price: Prisma.Decimal
      salePrice: Prisma.Decimal | null
      sku: string
      stockQuantity: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productVariant"]>
    composites: {}
  }

  type ProductVariantGetPayload<S extends boolean | null | undefined | ProductVariantDefaultArgs> = $Result.GetResult<Prisma.$ProductVariantPayload, S>

  type ProductVariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductVariantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductVariantCountAggregateInputType | true
    }

  export interface ProductVariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductVariant'], meta: { name: 'ProductVariant' } }
    /**
     * Find zero or one ProductVariant that matches the filter.
     * @param {ProductVariantFindUniqueArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductVariantFindUniqueArgs>(args: SelectSubset<T, ProductVariantFindUniqueArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductVariant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductVariantFindUniqueOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductVariantFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductVariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductVariantFindFirstArgs>(args?: SelectSubset<T, ProductVariantFindFirstArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductVariantFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductVariantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductVariants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductVariants
     * const productVariants = await prisma.productVariant.findMany()
     * 
     * // Get first 10 ProductVariants
     * const productVariants = await prisma.productVariant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductVariantFindManyArgs>(args?: SelectSubset<T, ProductVariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductVariant.
     * @param {ProductVariantCreateArgs} args - Arguments to create a ProductVariant.
     * @example
     * // Create one ProductVariant
     * const ProductVariant = await prisma.productVariant.create({
     *   data: {
     *     // ... data to create a ProductVariant
     *   }
     * })
     * 
     */
    create<T extends ProductVariantCreateArgs>(args: SelectSubset<T, ProductVariantCreateArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductVariants.
     * @param {ProductVariantCreateManyArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariant = await prisma.productVariant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductVariantCreateManyArgs>(args?: SelectSubset<T, ProductVariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductVariants and returns the data saved in the database.
     * @param {ProductVariantCreateManyAndReturnArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariant = await prisma.productVariant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductVariants and only return the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductVariantCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductVariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductVariant.
     * @param {ProductVariantDeleteArgs} args - Arguments to delete one ProductVariant.
     * @example
     * // Delete one ProductVariant
     * const ProductVariant = await prisma.productVariant.delete({
     *   where: {
     *     // ... filter to delete one ProductVariant
     *   }
     * })
     * 
     */
    delete<T extends ProductVariantDeleteArgs>(args: SelectSubset<T, ProductVariantDeleteArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductVariant.
     * @param {ProductVariantUpdateArgs} args - Arguments to update one ProductVariant.
     * @example
     * // Update one ProductVariant
     * const productVariant = await prisma.productVariant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductVariantUpdateArgs>(args: SelectSubset<T, ProductVariantUpdateArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductVariants.
     * @param {ProductVariantDeleteManyArgs} args - Arguments to filter ProductVariants to delete.
     * @example
     * // Delete a few ProductVariants
     * const { count } = await prisma.productVariant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductVariantDeleteManyArgs>(args?: SelectSubset<T, ProductVariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductVariants
     * const productVariant = await prisma.productVariant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductVariantUpdateManyArgs>(args: SelectSubset<T, ProductVariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariants and returns the data updated in the database.
     * @param {ProductVariantUpdateManyAndReturnArgs} args - Arguments to update many ProductVariants.
     * @example
     * // Update many ProductVariants
     * const productVariant = await prisma.productVariant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductVariants and only return the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductVariantUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductVariantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductVariant.
     * @param {ProductVariantUpsertArgs} args - Arguments to update or create a ProductVariant.
     * @example
     * // Update or create a ProductVariant
     * const productVariant = await prisma.productVariant.upsert({
     *   create: {
     *     // ... data to create a ProductVariant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductVariant we want to update
     *   }
     * })
     */
    upsert<T extends ProductVariantUpsertArgs>(args: SelectSubset<T, ProductVariantUpsertArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantCountArgs} args - Arguments to filter ProductVariants to count.
     * @example
     * // Count the number of ProductVariants
     * const count = await prisma.productVariant.count({
     *   where: {
     *     // ... the filter for the ProductVariants we want to count
     *   }
     * })
    **/
    count<T extends ProductVariantCountArgs>(
      args?: Subset<T, ProductVariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductVariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductVariantAggregateArgs>(args: Subset<T, ProductVariantAggregateArgs>): Prisma.PrismaPromise<GetProductVariantAggregateType<T>>

    /**
     * Group by ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantGroupByArgs} args - Group by arguments.
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
      T extends ProductVariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductVariantGroupByArgs['orderBy'] }
        : { orderBy?: ProductVariantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductVariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductVariant model
   */
  readonly fields: ProductVariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductVariant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductVariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductVariant model
   */
  interface ProductVariantFieldRefs {
    readonly id: FieldRef<"ProductVariant", 'Int'>
    readonly productId: FieldRef<"ProductVariant", 'Int'>
    readonly name: FieldRef<"ProductVariant", 'String'>
    readonly size: FieldRef<"ProductVariant", 'String'>
    readonly color: FieldRef<"ProductVariant", 'String'>
    readonly price: FieldRef<"ProductVariant", 'Decimal'>
    readonly salePrice: FieldRef<"ProductVariant", 'Decimal'>
    readonly sku: FieldRef<"ProductVariant", 'String'>
    readonly stockQuantity: FieldRef<"ProductVariant", 'Int'>
    readonly createdAt: FieldRef<"ProductVariant", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductVariant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductVariant findUnique
   */
  export type ProductVariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant findUniqueOrThrow
   */
  export type ProductVariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant findFirst
   */
  export type ProductVariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant findFirstOrThrow
   */
  export type ProductVariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant findMany
   */
  export type ProductVariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariants to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant create
   */
  export type ProductVariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductVariant.
     */
    data: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
  }

  /**
   * ProductVariant createMany
   */
  export type ProductVariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantCreateManyInput | ProductVariantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductVariant createManyAndReturn
   */
  export type ProductVariantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantCreateManyInput | ProductVariantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariant update
   */
  export type ProductVariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductVariant.
     */
    data: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
    /**
     * Choose, which ProductVariant to update.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant updateMany
   */
  export type ProductVariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductVariants.
     */
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariants to update
     */
    where?: ProductVariantWhereInput
    /**
     * Limit how many ProductVariants to update.
     */
    limit?: number
  }

  /**
   * ProductVariant updateManyAndReturn
   */
  export type ProductVariantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * The data used to update ProductVariants.
     */
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariants to update
     */
    where?: ProductVariantWhereInput
    /**
     * Limit how many ProductVariants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariant upsert
   */
  export type ProductVariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductVariant to update in case it exists.
     */
    where: ProductVariantWhereUniqueInput
    /**
     * In case the ProductVariant found by the `where` argument doesn't exist, create a new ProductVariant with this data.
     */
    create: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
    /**
     * In case the ProductVariant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
  }

  /**
   * ProductVariant delete
   */
  export type ProductVariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter which ProductVariant to delete.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant deleteMany
   */
  export type ProductVariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariants to delete
     */
    where?: ProductVariantWhereInput
    /**
     * Limit how many ProductVariants to delete.
     */
    limit?: number
  }

  /**
   * ProductVariant without action
   */
  export type ProductVariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
  }


  /**
   * Model Material
   */

  export type AggregateMaterial = {
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  export type MaterialAvgAggregateOutputType = {
    id: number | null
  }

  export type MaterialSumAggregateOutputType = {
    id: number | null
  }

  export type MaterialMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type MaterialMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type MaterialCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type MaterialAvgAggregateInputType = {
    id?: true
  }

  export type MaterialSumAggregateInputType = {
    id?: true
  }

  export type MaterialMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type MaterialMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type MaterialCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type MaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Material to aggregate.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materials
    **/
    _count?: true | MaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialMaxAggregateInputType
  }

  export type GetMaterialAggregateType<T extends MaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial[P]>
      : GetScalarType<T[P], AggregateMaterial[P]>
  }




  export type MaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithAggregationInput | MaterialOrderByWithAggregationInput[]
    by: MaterialScalarFieldEnum[] | MaterialScalarFieldEnum
    having?: MaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialCountAggregateInputType | true
    _avg?: MaterialAvgAggregateInputType
    _sum?: MaterialSumAggregateInputType
    _min?: MaterialMinAggregateInputType
    _max?: MaterialMaxAggregateInputType
  }

  export type MaterialGroupByOutputType = {
    id: number
    name: string
    description: string | null
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  type GetMaterialGroupByPayload<T extends MaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialGroupByOutputType[P]>
        }
      >
    >


  export type MaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    products?: boolean | Material$productsArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type MaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["material"]>
  export type MaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Material$productsArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MaterialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MaterialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Material"
    objects: {
      products: Prisma.$ProductMaterialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
    }, ExtArgs["result"]["material"]>
    composites: {}
  }

  type MaterialGetPayload<S extends boolean | null | undefined | MaterialDefaultArgs> = $Result.GetResult<Prisma.$MaterialPayload, S>

  type MaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialCountAggregateInputType | true
    }

  export interface MaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Material'], meta: { name: 'Material' } }
    /**
     * Find zero or one Material that matches the filter.
     * @param {MaterialFindUniqueArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialFindUniqueArgs>(args: SelectSubset<T, MaterialFindUniqueArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Material that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialFindUniqueOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialFindFirstArgs>(args?: SelectSubset<T, MaterialFindFirstArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.material.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.material.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialWithIdOnly = await prisma.material.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialFindManyArgs>(args?: SelectSubset<T, MaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Material.
     * @param {MaterialCreateArgs} args - Arguments to create a Material.
     * @example
     * // Create one Material
     * const Material = await prisma.material.create({
     *   data: {
     *     // ... data to create a Material
     *   }
     * })
     * 
     */
    create<T extends MaterialCreateArgs>(args: SelectSubset<T, MaterialCreateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materials.
     * @param {MaterialCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialCreateManyArgs>(args?: SelectSubset<T, MaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materials and returns the data saved in the database.
     * @param {MaterialCreateManyAndReturnArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Material.
     * @param {MaterialDeleteArgs} args - Arguments to delete one Material.
     * @example
     * // Delete one Material
     * const Material = await prisma.material.delete({
     *   where: {
     *     // ... filter to delete one Material
     *   }
     * })
     * 
     */
    delete<T extends MaterialDeleteArgs>(args: SelectSubset<T, MaterialDeleteArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Material.
     * @param {MaterialUpdateArgs} args - Arguments to update one Material.
     * @example
     * // Update one Material
     * const material = await prisma.material.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialUpdateArgs>(args: SelectSubset<T, MaterialUpdateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materials.
     * @param {MaterialDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.material.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialDeleteManyArgs>(args?: SelectSubset<T, MaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialUpdateManyArgs>(args: SelectSubset<T, MaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials and returns the data updated in the database.
     * @param {MaterialUpdateManyAndReturnArgs} args - Arguments to update many Materials.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.updateManyAndReturn({
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
    updateManyAndReturn<T extends MaterialUpdateManyAndReturnArgs>(args: SelectSubset<T, MaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Material.
     * @param {MaterialUpsertArgs} args - Arguments to update or create a Material.
     * @example
     * // Update or create a Material
     * const material = await prisma.material.upsert({
     *   create: {
     *     // ... data to create a Material
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material we want to update
     *   }
     * })
     */
    upsert<T extends MaterialUpsertArgs>(args: SelectSubset<T, MaterialUpsertArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.material.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends MaterialCountArgs>(
      args?: Subset<T, MaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialAggregateArgs>(args: Subset<T, MaterialAggregateArgs>): Prisma.PrismaPromise<GetMaterialAggregateType<T>>

    /**
     * Group by Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialGroupByArgs} args - Group by arguments.
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
      T extends MaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialGroupByArgs['orderBy'] }
        : { orderBy?: MaterialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Material model
   */
  readonly fields: MaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Material.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Material$productsArgs<ExtArgs> = {}>(args?: Subset<T, Material$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Material model
   */
  interface MaterialFieldRefs {
    readonly id: FieldRef<"Material", 'Int'>
    readonly name: FieldRef<"Material", 'String'>
    readonly description: FieldRef<"Material", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Material findUnique
   */
  export type MaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findUniqueOrThrow
   */
  export type MaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findFirst
   */
  export type MaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findFirstOrThrow
   */
  export type MaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findMany
   */
  export type MaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material create
   */
  export type MaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a Material.
     */
    data: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
  }

  /**
   * Material createMany
   */
  export type MaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Material createManyAndReturn
   */
  export type MaterialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Material update
   */
  export type MaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a Material.
     */
    data: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
    /**
     * Choose, which Material to update.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material updateMany
   */
  export type MaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
  }

  /**
   * Material updateManyAndReturn
   */
  export type MaterialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
  }

  /**
   * Material upsert
   */
  export type MaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the Material to update in case it exists.
     */
    where: MaterialWhereUniqueInput
    /**
     * In case the Material found by the `where` argument doesn't exist, create a new Material with this data.
     */
    create: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
    /**
     * In case the Material was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
  }

  /**
   * Material delete
   */
  export type MaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter which Material to delete.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material deleteMany
   */
  export type MaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to delete
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to delete.
     */
    limit?: number
  }

  /**
   * Material.products
   */
  export type Material$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMaterial
     */
    select?: ProductMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMaterial
     */
    omit?: ProductMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMaterialInclude<ExtArgs> | null
    where?: ProductMaterialWhereInput
    orderBy?: ProductMaterialOrderByWithRelationInput | ProductMaterialOrderByWithRelationInput[]
    cursor?: ProductMaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductMaterialScalarFieldEnum | ProductMaterialScalarFieldEnum[]
  }

  /**
   * Material without action
   */
  export type MaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
  }


  /**
   * Model ProductMaterial
   */

  export type AggregateProductMaterial = {
    _count: ProductMaterialCountAggregateOutputType | null
    _avg: ProductMaterialAvgAggregateOutputType | null
    _sum: ProductMaterialSumAggregateOutputType | null
    _min: ProductMaterialMinAggregateOutputType | null
    _max: ProductMaterialMaxAggregateOutputType | null
  }

  export type ProductMaterialAvgAggregateOutputType = {
    productId: number | null
    materialId: number | null
    percentage: number | null
  }

  export type ProductMaterialSumAggregateOutputType = {
    productId: number | null
    materialId: number | null
    percentage: number | null
  }

  export type ProductMaterialMinAggregateOutputType = {
    productId: number | null
    materialId: number | null
    percentage: number | null
  }

  export type ProductMaterialMaxAggregateOutputType = {
    productId: number | null
    materialId: number | null
    percentage: number | null
  }

  export type ProductMaterialCountAggregateOutputType = {
    productId: number
    materialId: number
    percentage: number
    _all: number
  }


  export type ProductMaterialAvgAggregateInputType = {
    productId?: true
    materialId?: true
    percentage?: true
  }

  export type ProductMaterialSumAggregateInputType = {
    productId?: true
    materialId?: true
    percentage?: true
  }

  export type ProductMaterialMinAggregateInputType = {
    productId?: true
    materialId?: true
    percentage?: true
  }

  export type ProductMaterialMaxAggregateInputType = {
    productId?: true
    materialId?: true
    percentage?: true
  }

  export type ProductMaterialCountAggregateInputType = {
    productId?: true
    materialId?: true
    percentage?: true
    _all?: true
  }

  export type ProductMaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductMaterial to aggregate.
     */
    where?: ProductMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMaterials to fetch.
     */
    orderBy?: ProductMaterialOrderByWithRelationInput | ProductMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductMaterials
    **/
    _count?: true | ProductMaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductMaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductMaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaterialMaxAggregateInputType
  }

  export type GetProductMaterialAggregateType<T extends ProductMaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateProductMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductMaterial[P]>
      : GetScalarType<T[P], AggregateProductMaterial[P]>
  }




  export type ProductMaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductMaterialWhereInput
    orderBy?: ProductMaterialOrderByWithAggregationInput | ProductMaterialOrderByWithAggregationInput[]
    by: ProductMaterialScalarFieldEnum[] | ProductMaterialScalarFieldEnum
    having?: ProductMaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductMaterialCountAggregateInputType | true
    _avg?: ProductMaterialAvgAggregateInputType
    _sum?: ProductMaterialSumAggregateInputType
    _min?: ProductMaterialMinAggregateInputType
    _max?: ProductMaterialMaxAggregateInputType
  }

  export type ProductMaterialGroupByOutputType = {
    productId: number
    materialId: number
    percentage: number | null
    _count: ProductMaterialCountAggregateOutputType | null
    _avg: ProductMaterialAvgAggregateOutputType | null
    _sum: ProductMaterialSumAggregateOutputType | null
    _min: ProductMaterialMinAggregateOutputType | null
    _max: ProductMaterialMaxAggregateOutputType | null
  }

  type GetProductMaterialGroupByPayload<T extends ProductMaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductMaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductMaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductMaterialGroupByOutputType[P]>
            : GetScalarType<T[P], ProductMaterialGroupByOutputType[P]>
        }
      >
    >


  export type ProductMaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    materialId?: boolean
    percentage?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productMaterial"]>

  export type ProductMaterialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    materialId?: boolean
    percentage?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productMaterial"]>

  export type ProductMaterialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    materialId?: boolean
    percentage?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productMaterial"]>

  export type ProductMaterialSelectScalar = {
    productId?: boolean
    materialId?: boolean
    percentage?: boolean
  }

  export type ProductMaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productId" | "materialId" | "percentage", ExtArgs["result"]["productMaterial"]>
  export type ProductMaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }
  export type ProductMaterialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }
  export type ProductMaterialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }

  export type $ProductMaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductMaterial"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      material: Prisma.$MaterialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productId: number
      materialId: number
      percentage: number | null
    }, ExtArgs["result"]["productMaterial"]>
    composites: {}
  }

  type ProductMaterialGetPayload<S extends boolean | null | undefined | ProductMaterialDefaultArgs> = $Result.GetResult<Prisma.$ProductMaterialPayload, S>

  type ProductMaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductMaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductMaterialCountAggregateInputType | true
    }

  export interface ProductMaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductMaterial'], meta: { name: 'ProductMaterial' } }
    /**
     * Find zero or one ProductMaterial that matches the filter.
     * @param {ProductMaterialFindUniqueArgs} args - Arguments to find a ProductMaterial
     * @example
     * // Get one ProductMaterial
     * const productMaterial = await prisma.productMaterial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductMaterialFindUniqueArgs>(args: SelectSubset<T, ProductMaterialFindUniqueArgs<ExtArgs>>): Prisma__ProductMaterialClient<$Result.GetResult<Prisma.$ProductMaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductMaterial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductMaterialFindUniqueOrThrowArgs} args - Arguments to find a ProductMaterial
     * @example
     * // Get one ProductMaterial
     * const productMaterial = await prisma.productMaterial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductMaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductMaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductMaterialClient<$Result.GetResult<Prisma.$ProductMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductMaterial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMaterialFindFirstArgs} args - Arguments to find a ProductMaterial
     * @example
     * // Get one ProductMaterial
     * const productMaterial = await prisma.productMaterial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductMaterialFindFirstArgs>(args?: SelectSubset<T, ProductMaterialFindFirstArgs<ExtArgs>>): Prisma__ProductMaterialClient<$Result.GetResult<Prisma.$ProductMaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductMaterial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMaterialFindFirstOrThrowArgs} args - Arguments to find a ProductMaterial
     * @example
     * // Get one ProductMaterial
     * const productMaterial = await prisma.productMaterial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductMaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductMaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductMaterialClient<$Result.GetResult<Prisma.$ProductMaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductMaterials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductMaterials
     * const productMaterials = await prisma.productMaterial.findMany()
     * 
     * // Get first 10 ProductMaterials
     * const productMaterials = await prisma.productMaterial.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const productMaterialWithProductIdOnly = await prisma.productMaterial.findMany({ select: { productId: true } })
     * 
     */
    findMany<T extends ProductMaterialFindManyArgs>(args?: SelectSubset<T, ProductMaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductMaterial.
     * @param {ProductMaterialCreateArgs} args - Arguments to create a ProductMaterial.
     * @example
     * // Create one ProductMaterial
     * const ProductMaterial = await prisma.productMaterial.create({
     *   data: {
     *     // ... data to create a ProductMaterial
     *   }
     * })
     * 
     */
    create<T extends ProductMaterialCreateArgs>(args: SelectSubset<T, ProductMaterialCreateArgs<ExtArgs>>): Prisma__ProductMaterialClient<$Result.GetResult<Prisma.$ProductMaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductMaterials.
     * @param {ProductMaterialCreateManyArgs} args - Arguments to create many ProductMaterials.
     * @example
     * // Create many ProductMaterials
     * const productMaterial = await prisma.productMaterial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductMaterialCreateManyArgs>(args?: SelectSubset<T, ProductMaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductMaterials and returns the data saved in the database.
     * @param {ProductMaterialCreateManyAndReturnArgs} args - Arguments to create many ProductMaterials.
     * @example
     * // Create many ProductMaterials
     * const productMaterial = await prisma.productMaterial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductMaterials and only return the `productId`
     * const productMaterialWithProductIdOnly = await prisma.productMaterial.createManyAndReturn({
     *   select: { productId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductMaterialCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductMaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductMaterial.
     * @param {ProductMaterialDeleteArgs} args - Arguments to delete one ProductMaterial.
     * @example
     * // Delete one ProductMaterial
     * const ProductMaterial = await prisma.productMaterial.delete({
     *   where: {
     *     // ... filter to delete one ProductMaterial
     *   }
     * })
     * 
     */
    delete<T extends ProductMaterialDeleteArgs>(args: SelectSubset<T, ProductMaterialDeleteArgs<ExtArgs>>): Prisma__ProductMaterialClient<$Result.GetResult<Prisma.$ProductMaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductMaterial.
     * @param {ProductMaterialUpdateArgs} args - Arguments to update one ProductMaterial.
     * @example
     * // Update one ProductMaterial
     * const productMaterial = await prisma.productMaterial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductMaterialUpdateArgs>(args: SelectSubset<T, ProductMaterialUpdateArgs<ExtArgs>>): Prisma__ProductMaterialClient<$Result.GetResult<Prisma.$ProductMaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductMaterials.
     * @param {ProductMaterialDeleteManyArgs} args - Arguments to filter ProductMaterials to delete.
     * @example
     * // Delete a few ProductMaterials
     * const { count } = await prisma.productMaterial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductMaterialDeleteManyArgs>(args?: SelectSubset<T, ProductMaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductMaterials
     * const productMaterial = await prisma.productMaterial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductMaterialUpdateManyArgs>(args: SelectSubset<T, ProductMaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductMaterials and returns the data updated in the database.
     * @param {ProductMaterialUpdateManyAndReturnArgs} args - Arguments to update many ProductMaterials.
     * @example
     * // Update many ProductMaterials
     * const productMaterial = await prisma.productMaterial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductMaterials and only return the `productId`
     * const productMaterialWithProductIdOnly = await prisma.productMaterial.updateManyAndReturn({
     *   select: { productId: true },
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
    updateManyAndReturn<T extends ProductMaterialUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductMaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductMaterial.
     * @param {ProductMaterialUpsertArgs} args - Arguments to update or create a ProductMaterial.
     * @example
     * // Update or create a ProductMaterial
     * const productMaterial = await prisma.productMaterial.upsert({
     *   create: {
     *     // ... data to create a ProductMaterial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductMaterial we want to update
     *   }
     * })
     */
    upsert<T extends ProductMaterialUpsertArgs>(args: SelectSubset<T, ProductMaterialUpsertArgs<ExtArgs>>): Prisma__ProductMaterialClient<$Result.GetResult<Prisma.$ProductMaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMaterialCountArgs} args - Arguments to filter ProductMaterials to count.
     * @example
     * // Count the number of ProductMaterials
     * const count = await prisma.productMaterial.count({
     *   where: {
     *     // ... the filter for the ProductMaterials we want to count
     *   }
     * })
    **/
    count<T extends ProductMaterialCountArgs>(
      args?: Subset<T, ProductMaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductMaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductMaterialAggregateArgs>(args: Subset<T, ProductMaterialAggregateArgs>): Prisma.PrismaPromise<GetProductMaterialAggregateType<T>>

    /**
     * Group by ProductMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMaterialGroupByArgs} args - Group by arguments.
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
      T extends ProductMaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductMaterialGroupByArgs['orderBy'] }
        : { orderBy?: ProductMaterialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductMaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductMaterial model
   */
  readonly fields: ProductMaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductMaterial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductMaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductMaterial model
   */
  interface ProductMaterialFieldRefs {
    readonly productId: FieldRef<"ProductMaterial", 'Int'>
    readonly materialId: FieldRef<"ProductMaterial", 'Int'>
    readonly percentage: FieldRef<"ProductMaterial", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ProductMaterial findUnique
   */
  export type ProductMaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMaterial
     */
    select?: ProductMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMaterial
     */
    omit?: ProductMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMaterialInclude<ExtArgs> | null
    /**
     * Filter, which ProductMaterial to fetch.
     */
    where: ProductMaterialWhereUniqueInput
  }

  /**
   * ProductMaterial findUniqueOrThrow
   */
  export type ProductMaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMaterial
     */
    select?: ProductMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMaterial
     */
    omit?: ProductMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMaterialInclude<ExtArgs> | null
    /**
     * Filter, which ProductMaterial to fetch.
     */
    where: ProductMaterialWhereUniqueInput
  }

  /**
   * ProductMaterial findFirst
   */
  export type ProductMaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMaterial
     */
    select?: ProductMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMaterial
     */
    omit?: ProductMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMaterialInclude<ExtArgs> | null
    /**
     * Filter, which ProductMaterial to fetch.
     */
    where?: ProductMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMaterials to fetch.
     */
    orderBy?: ProductMaterialOrderByWithRelationInput | ProductMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductMaterials.
     */
    cursor?: ProductMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductMaterials.
     */
    distinct?: ProductMaterialScalarFieldEnum | ProductMaterialScalarFieldEnum[]
  }

  /**
   * ProductMaterial findFirstOrThrow
   */
  export type ProductMaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMaterial
     */
    select?: ProductMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMaterial
     */
    omit?: ProductMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMaterialInclude<ExtArgs> | null
    /**
     * Filter, which ProductMaterial to fetch.
     */
    where?: ProductMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMaterials to fetch.
     */
    orderBy?: ProductMaterialOrderByWithRelationInput | ProductMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductMaterials.
     */
    cursor?: ProductMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductMaterials.
     */
    distinct?: ProductMaterialScalarFieldEnum | ProductMaterialScalarFieldEnum[]
  }

  /**
   * ProductMaterial findMany
   */
  export type ProductMaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMaterial
     */
    select?: ProductMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMaterial
     */
    omit?: ProductMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMaterialInclude<ExtArgs> | null
    /**
     * Filter, which ProductMaterials to fetch.
     */
    where?: ProductMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMaterials to fetch.
     */
    orderBy?: ProductMaterialOrderByWithRelationInput | ProductMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductMaterials.
     */
    cursor?: ProductMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMaterials.
     */
    skip?: number
    distinct?: ProductMaterialScalarFieldEnum | ProductMaterialScalarFieldEnum[]
  }

  /**
   * ProductMaterial create
   */
  export type ProductMaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMaterial
     */
    select?: ProductMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMaterial
     */
    omit?: ProductMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductMaterial.
     */
    data: XOR<ProductMaterialCreateInput, ProductMaterialUncheckedCreateInput>
  }

  /**
   * ProductMaterial createMany
   */
  export type ProductMaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductMaterials.
     */
    data: ProductMaterialCreateManyInput | ProductMaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductMaterial createManyAndReturn
   */
  export type ProductMaterialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMaterial
     */
    select?: ProductMaterialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMaterial
     */
    omit?: ProductMaterialOmit<ExtArgs> | null
    /**
     * The data used to create many ProductMaterials.
     */
    data: ProductMaterialCreateManyInput | ProductMaterialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMaterialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductMaterial update
   */
  export type ProductMaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMaterial
     */
    select?: ProductMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMaterial
     */
    omit?: ProductMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductMaterial.
     */
    data: XOR<ProductMaterialUpdateInput, ProductMaterialUncheckedUpdateInput>
    /**
     * Choose, which ProductMaterial to update.
     */
    where: ProductMaterialWhereUniqueInput
  }

  /**
   * ProductMaterial updateMany
   */
  export type ProductMaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductMaterials.
     */
    data: XOR<ProductMaterialUpdateManyMutationInput, ProductMaterialUncheckedUpdateManyInput>
    /**
     * Filter which ProductMaterials to update
     */
    where?: ProductMaterialWhereInput
    /**
     * Limit how many ProductMaterials to update.
     */
    limit?: number
  }

  /**
   * ProductMaterial updateManyAndReturn
   */
  export type ProductMaterialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMaterial
     */
    select?: ProductMaterialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMaterial
     */
    omit?: ProductMaterialOmit<ExtArgs> | null
    /**
     * The data used to update ProductMaterials.
     */
    data: XOR<ProductMaterialUpdateManyMutationInput, ProductMaterialUncheckedUpdateManyInput>
    /**
     * Filter which ProductMaterials to update
     */
    where?: ProductMaterialWhereInput
    /**
     * Limit how many ProductMaterials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMaterialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductMaterial upsert
   */
  export type ProductMaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMaterial
     */
    select?: ProductMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMaterial
     */
    omit?: ProductMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductMaterial to update in case it exists.
     */
    where: ProductMaterialWhereUniqueInput
    /**
     * In case the ProductMaterial found by the `where` argument doesn't exist, create a new ProductMaterial with this data.
     */
    create: XOR<ProductMaterialCreateInput, ProductMaterialUncheckedCreateInput>
    /**
     * In case the ProductMaterial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductMaterialUpdateInput, ProductMaterialUncheckedUpdateInput>
  }

  /**
   * ProductMaterial delete
   */
  export type ProductMaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMaterial
     */
    select?: ProductMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMaterial
     */
    omit?: ProductMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMaterialInclude<ExtArgs> | null
    /**
     * Filter which ProductMaterial to delete.
     */
    where: ProductMaterialWhereUniqueInput
  }

  /**
   * ProductMaterial deleteMany
   */
  export type ProductMaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductMaterials to delete
     */
    where?: ProductMaterialWhereInput
    /**
     * Limit how many ProductMaterials to delete.
     */
    limit?: number
  }

  /**
   * ProductMaterial without action
   */
  export type ProductMaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMaterial
     */
    select?: ProductMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMaterial
     */
    omit?: ProductMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMaterialInclude<ExtArgs> | null
  }


  /**
   * Model ProductTag
   */

  export type AggregateProductTag = {
    _count: ProductTagCountAggregateOutputType | null
    _avg: ProductTagAvgAggregateOutputType | null
    _sum: ProductTagSumAggregateOutputType | null
    _min: ProductTagMinAggregateOutputType | null
    _max: ProductTagMaxAggregateOutputType | null
  }

  export type ProductTagAvgAggregateOutputType = {
    id: number | null
  }

  export type ProductTagSumAggregateOutputType = {
    id: number | null
  }

  export type ProductTagMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
  }

  export type ProductTagMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
  }

  export type ProductTagCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    _all: number
  }


  export type ProductTagAvgAggregateInputType = {
    id?: true
  }

  export type ProductTagSumAggregateInputType = {
    id?: true
  }

  export type ProductTagMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
  }

  export type ProductTagMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
  }

  export type ProductTagCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    _all?: true
  }

  export type ProductTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductTag to aggregate.
     */
    where?: ProductTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTags to fetch.
     */
    orderBy?: ProductTagOrderByWithRelationInput | ProductTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductTags
    **/
    _count?: true | ProductTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductTagMaxAggregateInputType
  }

  export type GetProductTagAggregateType<T extends ProductTagAggregateArgs> = {
        [P in keyof T & keyof AggregateProductTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductTag[P]>
      : GetScalarType<T[P], AggregateProductTag[P]>
  }




  export type ProductTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductTagWhereInput
    orderBy?: ProductTagOrderByWithAggregationInput | ProductTagOrderByWithAggregationInput[]
    by: ProductTagScalarFieldEnum[] | ProductTagScalarFieldEnum
    having?: ProductTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductTagCountAggregateInputType | true
    _avg?: ProductTagAvgAggregateInputType
    _sum?: ProductTagSumAggregateInputType
    _min?: ProductTagMinAggregateInputType
    _max?: ProductTagMaxAggregateInputType
  }

  export type ProductTagGroupByOutputType = {
    id: number
    name: string
    slug: string
    _count: ProductTagCountAggregateOutputType | null
    _avg: ProductTagAvgAggregateOutputType | null
    _sum: ProductTagSumAggregateOutputType | null
    _min: ProductTagMinAggregateOutputType | null
    _max: ProductTagMaxAggregateOutputType | null
  }

  type GetProductTagGroupByPayload<T extends ProductTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductTagGroupByOutputType[P]>
            : GetScalarType<T[P], ProductTagGroupByOutputType[P]>
        }
      >
    >


  export type ProductTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    products?: boolean | ProductTag$productsArgs<ExtArgs>
    _count?: boolean | ProductTagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productTag"]>

  export type ProductTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["productTag"]>

  export type ProductTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["productTag"]>

  export type ProductTagSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
  }

  export type ProductTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug", ExtArgs["result"]["productTag"]>
  export type ProductTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductTag$productsArgs<ExtArgs>
    _count?: boolean | ProductTagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductTag"
    objects: {
      products: Prisma.$ProductTagMapPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
    }, ExtArgs["result"]["productTag"]>
    composites: {}
  }

  type ProductTagGetPayload<S extends boolean | null | undefined | ProductTagDefaultArgs> = $Result.GetResult<Prisma.$ProductTagPayload, S>

  type ProductTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductTagCountAggregateInputType | true
    }

  export interface ProductTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductTag'], meta: { name: 'ProductTag' } }
    /**
     * Find zero or one ProductTag that matches the filter.
     * @param {ProductTagFindUniqueArgs} args - Arguments to find a ProductTag
     * @example
     * // Get one ProductTag
     * const productTag = await prisma.productTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductTagFindUniqueArgs>(args: SelectSubset<T, ProductTagFindUniqueArgs<ExtArgs>>): Prisma__ProductTagClient<$Result.GetResult<Prisma.$ProductTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductTagFindUniqueOrThrowArgs} args - Arguments to find a ProductTag
     * @example
     * // Get one ProductTag
     * const productTag = await prisma.productTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductTagFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductTagClient<$Result.GetResult<Prisma.$ProductTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTagFindFirstArgs} args - Arguments to find a ProductTag
     * @example
     * // Get one ProductTag
     * const productTag = await prisma.productTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductTagFindFirstArgs>(args?: SelectSubset<T, ProductTagFindFirstArgs<ExtArgs>>): Prisma__ProductTagClient<$Result.GetResult<Prisma.$ProductTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTagFindFirstOrThrowArgs} args - Arguments to find a ProductTag
     * @example
     * // Get one ProductTag
     * const productTag = await prisma.productTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductTagFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductTagClient<$Result.GetResult<Prisma.$ProductTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductTags
     * const productTags = await prisma.productTag.findMany()
     * 
     * // Get first 10 ProductTags
     * const productTags = await prisma.productTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productTagWithIdOnly = await prisma.productTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductTagFindManyArgs>(args?: SelectSubset<T, ProductTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductTag.
     * @param {ProductTagCreateArgs} args - Arguments to create a ProductTag.
     * @example
     * // Create one ProductTag
     * const ProductTag = await prisma.productTag.create({
     *   data: {
     *     // ... data to create a ProductTag
     *   }
     * })
     * 
     */
    create<T extends ProductTagCreateArgs>(args: SelectSubset<T, ProductTagCreateArgs<ExtArgs>>): Prisma__ProductTagClient<$Result.GetResult<Prisma.$ProductTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductTags.
     * @param {ProductTagCreateManyArgs} args - Arguments to create many ProductTags.
     * @example
     * // Create many ProductTags
     * const productTag = await prisma.productTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductTagCreateManyArgs>(args?: SelectSubset<T, ProductTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductTags and returns the data saved in the database.
     * @param {ProductTagCreateManyAndReturnArgs} args - Arguments to create many ProductTags.
     * @example
     * // Create many ProductTags
     * const productTag = await prisma.productTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductTags and only return the `id`
     * const productTagWithIdOnly = await prisma.productTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductTagCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductTag.
     * @param {ProductTagDeleteArgs} args - Arguments to delete one ProductTag.
     * @example
     * // Delete one ProductTag
     * const ProductTag = await prisma.productTag.delete({
     *   where: {
     *     // ... filter to delete one ProductTag
     *   }
     * })
     * 
     */
    delete<T extends ProductTagDeleteArgs>(args: SelectSubset<T, ProductTagDeleteArgs<ExtArgs>>): Prisma__ProductTagClient<$Result.GetResult<Prisma.$ProductTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductTag.
     * @param {ProductTagUpdateArgs} args - Arguments to update one ProductTag.
     * @example
     * // Update one ProductTag
     * const productTag = await prisma.productTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductTagUpdateArgs>(args: SelectSubset<T, ProductTagUpdateArgs<ExtArgs>>): Prisma__ProductTagClient<$Result.GetResult<Prisma.$ProductTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductTags.
     * @param {ProductTagDeleteManyArgs} args - Arguments to filter ProductTags to delete.
     * @example
     * // Delete a few ProductTags
     * const { count } = await prisma.productTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductTagDeleteManyArgs>(args?: SelectSubset<T, ProductTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductTags
     * const productTag = await prisma.productTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductTagUpdateManyArgs>(args: SelectSubset<T, ProductTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductTags and returns the data updated in the database.
     * @param {ProductTagUpdateManyAndReturnArgs} args - Arguments to update many ProductTags.
     * @example
     * // Update many ProductTags
     * const productTag = await prisma.productTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductTags and only return the `id`
     * const productTagWithIdOnly = await prisma.productTag.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductTagUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductTag.
     * @param {ProductTagUpsertArgs} args - Arguments to update or create a ProductTag.
     * @example
     * // Update or create a ProductTag
     * const productTag = await prisma.productTag.upsert({
     *   create: {
     *     // ... data to create a ProductTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductTag we want to update
     *   }
     * })
     */
    upsert<T extends ProductTagUpsertArgs>(args: SelectSubset<T, ProductTagUpsertArgs<ExtArgs>>): Prisma__ProductTagClient<$Result.GetResult<Prisma.$ProductTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTagCountArgs} args - Arguments to filter ProductTags to count.
     * @example
     * // Count the number of ProductTags
     * const count = await prisma.productTag.count({
     *   where: {
     *     // ... the filter for the ProductTags we want to count
     *   }
     * })
    **/
    count<T extends ProductTagCountArgs>(
      args?: Subset<T, ProductTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductTagAggregateArgs>(args: Subset<T, ProductTagAggregateArgs>): Prisma.PrismaPromise<GetProductTagAggregateType<T>>

    /**
     * Group by ProductTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTagGroupByArgs} args - Group by arguments.
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
      T extends ProductTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductTagGroupByArgs['orderBy'] }
        : { orderBy?: ProductTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductTag model
   */
  readonly fields: ProductTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends ProductTag$productsArgs<ExtArgs> = {}>(args?: Subset<T, ProductTag$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductTagMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProductTag model
   */
  interface ProductTagFieldRefs {
    readonly id: FieldRef<"ProductTag", 'Int'>
    readonly name: FieldRef<"ProductTag", 'String'>
    readonly slug: FieldRef<"ProductTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductTag findUnique
   */
  export type ProductTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTag
     */
    select?: ProductTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTag
     */
    omit?: ProductTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTagInclude<ExtArgs> | null
    /**
     * Filter, which ProductTag to fetch.
     */
    where: ProductTagWhereUniqueInput
  }

  /**
   * ProductTag findUniqueOrThrow
   */
  export type ProductTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTag
     */
    select?: ProductTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTag
     */
    omit?: ProductTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTagInclude<ExtArgs> | null
    /**
     * Filter, which ProductTag to fetch.
     */
    where: ProductTagWhereUniqueInput
  }

  /**
   * ProductTag findFirst
   */
  export type ProductTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTag
     */
    select?: ProductTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTag
     */
    omit?: ProductTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTagInclude<ExtArgs> | null
    /**
     * Filter, which ProductTag to fetch.
     */
    where?: ProductTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTags to fetch.
     */
    orderBy?: ProductTagOrderByWithRelationInput | ProductTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductTags.
     */
    cursor?: ProductTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductTags.
     */
    distinct?: ProductTagScalarFieldEnum | ProductTagScalarFieldEnum[]
  }

  /**
   * ProductTag findFirstOrThrow
   */
  export type ProductTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTag
     */
    select?: ProductTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTag
     */
    omit?: ProductTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTagInclude<ExtArgs> | null
    /**
     * Filter, which ProductTag to fetch.
     */
    where?: ProductTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTags to fetch.
     */
    orderBy?: ProductTagOrderByWithRelationInput | ProductTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductTags.
     */
    cursor?: ProductTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductTags.
     */
    distinct?: ProductTagScalarFieldEnum | ProductTagScalarFieldEnum[]
  }

  /**
   * ProductTag findMany
   */
  export type ProductTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTag
     */
    select?: ProductTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTag
     */
    omit?: ProductTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTagInclude<ExtArgs> | null
    /**
     * Filter, which ProductTags to fetch.
     */
    where?: ProductTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTags to fetch.
     */
    orderBy?: ProductTagOrderByWithRelationInput | ProductTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductTags.
     */
    cursor?: ProductTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTags.
     */
    skip?: number
    distinct?: ProductTagScalarFieldEnum | ProductTagScalarFieldEnum[]
  }

  /**
   * ProductTag create
   */
  export type ProductTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTag
     */
    select?: ProductTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTag
     */
    omit?: ProductTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTagInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductTag.
     */
    data: XOR<ProductTagCreateInput, ProductTagUncheckedCreateInput>
  }

  /**
   * ProductTag createMany
   */
  export type ProductTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductTags.
     */
    data: ProductTagCreateManyInput | ProductTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductTag createManyAndReturn
   */
  export type ProductTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTag
     */
    select?: ProductTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTag
     */
    omit?: ProductTagOmit<ExtArgs> | null
    /**
     * The data used to create many ProductTags.
     */
    data: ProductTagCreateManyInput | ProductTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductTag update
   */
  export type ProductTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTag
     */
    select?: ProductTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTag
     */
    omit?: ProductTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTagInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductTag.
     */
    data: XOR<ProductTagUpdateInput, ProductTagUncheckedUpdateInput>
    /**
     * Choose, which ProductTag to update.
     */
    where: ProductTagWhereUniqueInput
  }

  /**
   * ProductTag updateMany
   */
  export type ProductTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductTags.
     */
    data: XOR<ProductTagUpdateManyMutationInput, ProductTagUncheckedUpdateManyInput>
    /**
     * Filter which ProductTags to update
     */
    where?: ProductTagWhereInput
    /**
     * Limit how many ProductTags to update.
     */
    limit?: number
  }

  /**
   * ProductTag updateManyAndReturn
   */
  export type ProductTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTag
     */
    select?: ProductTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTag
     */
    omit?: ProductTagOmit<ExtArgs> | null
    /**
     * The data used to update ProductTags.
     */
    data: XOR<ProductTagUpdateManyMutationInput, ProductTagUncheckedUpdateManyInput>
    /**
     * Filter which ProductTags to update
     */
    where?: ProductTagWhereInput
    /**
     * Limit how many ProductTags to update.
     */
    limit?: number
  }

  /**
   * ProductTag upsert
   */
  export type ProductTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTag
     */
    select?: ProductTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTag
     */
    omit?: ProductTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTagInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductTag to update in case it exists.
     */
    where: ProductTagWhereUniqueInput
    /**
     * In case the ProductTag found by the `where` argument doesn't exist, create a new ProductTag with this data.
     */
    create: XOR<ProductTagCreateInput, ProductTagUncheckedCreateInput>
    /**
     * In case the ProductTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductTagUpdateInput, ProductTagUncheckedUpdateInput>
  }

  /**
   * ProductTag delete
   */
  export type ProductTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTag
     */
    select?: ProductTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTag
     */
    omit?: ProductTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTagInclude<ExtArgs> | null
    /**
     * Filter which ProductTag to delete.
     */
    where: ProductTagWhereUniqueInput
  }

  /**
   * ProductTag deleteMany
   */
  export type ProductTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductTags to delete
     */
    where?: ProductTagWhereInput
    /**
     * Limit how many ProductTags to delete.
     */
    limit?: number
  }

  /**
   * ProductTag.products
   */
  export type ProductTag$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTagMap
     */
    select?: ProductTagMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTagMap
     */
    omit?: ProductTagMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTagMapInclude<ExtArgs> | null
    where?: ProductTagMapWhereInput
    orderBy?: ProductTagMapOrderByWithRelationInput | ProductTagMapOrderByWithRelationInput[]
    cursor?: ProductTagMapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductTagMapScalarFieldEnum | ProductTagMapScalarFieldEnum[]
  }

  /**
   * ProductTag without action
   */
  export type ProductTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTag
     */
    select?: ProductTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTag
     */
    omit?: ProductTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTagInclude<ExtArgs> | null
  }


  /**
   * Model ProductTagMap
   */

  export type AggregateProductTagMap = {
    _count: ProductTagMapCountAggregateOutputType | null
    _avg: ProductTagMapAvgAggregateOutputType | null
    _sum: ProductTagMapSumAggregateOutputType | null
    _min: ProductTagMapMinAggregateOutputType | null
    _max: ProductTagMapMaxAggregateOutputType | null
  }

  export type ProductTagMapAvgAggregateOutputType = {
    productId: number | null
    tagId: number | null
  }

  export type ProductTagMapSumAggregateOutputType = {
    productId: number | null
    tagId: number | null
  }

  export type ProductTagMapMinAggregateOutputType = {
    productId: number | null
    tagId: number | null
  }

  export type ProductTagMapMaxAggregateOutputType = {
    productId: number | null
    tagId: number | null
  }

  export type ProductTagMapCountAggregateOutputType = {
    productId: number
    tagId: number
    _all: number
  }


  export type ProductTagMapAvgAggregateInputType = {
    productId?: true
    tagId?: true
  }

  export type ProductTagMapSumAggregateInputType = {
    productId?: true
    tagId?: true
  }

  export type ProductTagMapMinAggregateInputType = {
    productId?: true
    tagId?: true
  }

  export type ProductTagMapMaxAggregateInputType = {
    productId?: true
    tagId?: true
  }

  export type ProductTagMapCountAggregateInputType = {
    productId?: true
    tagId?: true
    _all?: true
  }

  export type ProductTagMapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductTagMap to aggregate.
     */
    where?: ProductTagMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTagMaps to fetch.
     */
    orderBy?: ProductTagMapOrderByWithRelationInput | ProductTagMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductTagMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTagMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTagMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductTagMaps
    **/
    _count?: true | ProductTagMapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductTagMapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductTagMapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductTagMapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductTagMapMaxAggregateInputType
  }

  export type GetProductTagMapAggregateType<T extends ProductTagMapAggregateArgs> = {
        [P in keyof T & keyof AggregateProductTagMap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductTagMap[P]>
      : GetScalarType<T[P], AggregateProductTagMap[P]>
  }




  export type ProductTagMapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductTagMapWhereInput
    orderBy?: ProductTagMapOrderByWithAggregationInput | ProductTagMapOrderByWithAggregationInput[]
    by: ProductTagMapScalarFieldEnum[] | ProductTagMapScalarFieldEnum
    having?: ProductTagMapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductTagMapCountAggregateInputType | true
    _avg?: ProductTagMapAvgAggregateInputType
    _sum?: ProductTagMapSumAggregateInputType
    _min?: ProductTagMapMinAggregateInputType
    _max?: ProductTagMapMaxAggregateInputType
  }

  export type ProductTagMapGroupByOutputType = {
    productId: number
    tagId: number
    _count: ProductTagMapCountAggregateOutputType | null
    _avg: ProductTagMapAvgAggregateOutputType | null
    _sum: ProductTagMapSumAggregateOutputType | null
    _min: ProductTagMapMinAggregateOutputType | null
    _max: ProductTagMapMaxAggregateOutputType | null
  }

  type GetProductTagMapGroupByPayload<T extends ProductTagMapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductTagMapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductTagMapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductTagMapGroupByOutputType[P]>
            : GetScalarType<T[P], ProductTagMapGroupByOutputType[P]>
        }
      >
    >


  export type ProductTagMapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    tagId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    tag?: boolean | ProductTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productTagMap"]>

  export type ProductTagMapSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    tagId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    tag?: boolean | ProductTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productTagMap"]>

  export type ProductTagMapSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    tagId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    tag?: boolean | ProductTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productTagMap"]>

  export type ProductTagMapSelectScalar = {
    productId?: boolean
    tagId?: boolean
  }

  export type ProductTagMapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productId" | "tagId", ExtArgs["result"]["productTagMap"]>
  export type ProductTagMapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    tag?: boolean | ProductTagDefaultArgs<ExtArgs>
  }
  export type ProductTagMapIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    tag?: boolean | ProductTagDefaultArgs<ExtArgs>
  }
  export type ProductTagMapIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    tag?: boolean | ProductTagDefaultArgs<ExtArgs>
  }

  export type $ProductTagMapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductTagMap"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      tag: Prisma.$ProductTagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productId: number
      tagId: number
    }, ExtArgs["result"]["productTagMap"]>
    composites: {}
  }

  type ProductTagMapGetPayload<S extends boolean | null | undefined | ProductTagMapDefaultArgs> = $Result.GetResult<Prisma.$ProductTagMapPayload, S>

  type ProductTagMapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductTagMapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductTagMapCountAggregateInputType | true
    }

  export interface ProductTagMapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductTagMap'], meta: { name: 'ProductTagMap' } }
    /**
     * Find zero or one ProductTagMap that matches the filter.
     * @param {ProductTagMapFindUniqueArgs} args - Arguments to find a ProductTagMap
     * @example
     * // Get one ProductTagMap
     * const productTagMap = await prisma.productTagMap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductTagMapFindUniqueArgs>(args: SelectSubset<T, ProductTagMapFindUniqueArgs<ExtArgs>>): Prisma__ProductTagMapClient<$Result.GetResult<Prisma.$ProductTagMapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductTagMap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductTagMapFindUniqueOrThrowArgs} args - Arguments to find a ProductTagMap
     * @example
     * // Get one ProductTagMap
     * const productTagMap = await prisma.productTagMap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductTagMapFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductTagMapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductTagMapClient<$Result.GetResult<Prisma.$ProductTagMapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductTagMap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTagMapFindFirstArgs} args - Arguments to find a ProductTagMap
     * @example
     * // Get one ProductTagMap
     * const productTagMap = await prisma.productTagMap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductTagMapFindFirstArgs>(args?: SelectSubset<T, ProductTagMapFindFirstArgs<ExtArgs>>): Prisma__ProductTagMapClient<$Result.GetResult<Prisma.$ProductTagMapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductTagMap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTagMapFindFirstOrThrowArgs} args - Arguments to find a ProductTagMap
     * @example
     * // Get one ProductTagMap
     * const productTagMap = await prisma.productTagMap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductTagMapFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductTagMapFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductTagMapClient<$Result.GetResult<Prisma.$ProductTagMapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductTagMaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTagMapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductTagMaps
     * const productTagMaps = await prisma.productTagMap.findMany()
     * 
     * // Get first 10 ProductTagMaps
     * const productTagMaps = await prisma.productTagMap.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const productTagMapWithProductIdOnly = await prisma.productTagMap.findMany({ select: { productId: true } })
     * 
     */
    findMany<T extends ProductTagMapFindManyArgs>(args?: SelectSubset<T, ProductTagMapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductTagMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductTagMap.
     * @param {ProductTagMapCreateArgs} args - Arguments to create a ProductTagMap.
     * @example
     * // Create one ProductTagMap
     * const ProductTagMap = await prisma.productTagMap.create({
     *   data: {
     *     // ... data to create a ProductTagMap
     *   }
     * })
     * 
     */
    create<T extends ProductTagMapCreateArgs>(args: SelectSubset<T, ProductTagMapCreateArgs<ExtArgs>>): Prisma__ProductTagMapClient<$Result.GetResult<Prisma.$ProductTagMapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductTagMaps.
     * @param {ProductTagMapCreateManyArgs} args - Arguments to create many ProductTagMaps.
     * @example
     * // Create many ProductTagMaps
     * const productTagMap = await prisma.productTagMap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductTagMapCreateManyArgs>(args?: SelectSubset<T, ProductTagMapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductTagMaps and returns the data saved in the database.
     * @param {ProductTagMapCreateManyAndReturnArgs} args - Arguments to create many ProductTagMaps.
     * @example
     * // Create many ProductTagMaps
     * const productTagMap = await prisma.productTagMap.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductTagMaps and only return the `productId`
     * const productTagMapWithProductIdOnly = await prisma.productTagMap.createManyAndReturn({
     *   select: { productId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductTagMapCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductTagMapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductTagMapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductTagMap.
     * @param {ProductTagMapDeleteArgs} args - Arguments to delete one ProductTagMap.
     * @example
     * // Delete one ProductTagMap
     * const ProductTagMap = await prisma.productTagMap.delete({
     *   where: {
     *     // ... filter to delete one ProductTagMap
     *   }
     * })
     * 
     */
    delete<T extends ProductTagMapDeleteArgs>(args: SelectSubset<T, ProductTagMapDeleteArgs<ExtArgs>>): Prisma__ProductTagMapClient<$Result.GetResult<Prisma.$ProductTagMapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductTagMap.
     * @param {ProductTagMapUpdateArgs} args - Arguments to update one ProductTagMap.
     * @example
     * // Update one ProductTagMap
     * const productTagMap = await prisma.productTagMap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductTagMapUpdateArgs>(args: SelectSubset<T, ProductTagMapUpdateArgs<ExtArgs>>): Prisma__ProductTagMapClient<$Result.GetResult<Prisma.$ProductTagMapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductTagMaps.
     * @param {ProductTagMapDeleteManyArgs} args - Arguments to filter ProductTagMaps to delete.
     * @example
     * // Delete a few ProductTagMaps
     * const { count } = await prisma.productTagMap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductTagMapDeleteManyArgs>(args?: SelectSubset<T, ProductTagMapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductTagMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTagMapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductTagMaps
     * const productTagMap = await prisma.productTagMap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductTagMapUpdateManyArgs>(args: SelectSubset<T, ProductTagMapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductTagMaps and returns the data updated in the database.
     * @param {ProductTagMapUpdateManyAndReturnArgs} args - Arguments to update many ProductTagMaps.
     * @example
     * // Update many ProductTagMaps
     * const productTagMap = await prisma.productTagMap.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductTagMaps and only return the `productId`
     * const productTagMapWithProductIdOnly = await prisma.productTagMap.updateManyAndReturn({
     *   select: { productId: true },
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
    updateManyAndReturn<T extends ProductTagMapUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductTagMapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductTagMapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductTagMap.
     * @param {ProductTagMapUpsertArgs} args - Arguments to update or create a ProductTagMap.
     * @example
     * // Update or create a ProductTagMap
     * const productTagMap = await prisma.productTagMap.upsert({
     *   create: {
     *     // ... data to create a ProductTagMap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductTagMap we want to update
     *   }
     * })
     */
    upsert<T extends ProductTagMapUpsertArgs>(args: SelectSubset<T, ProductTagMapUpsertArgs<ExtArgs>>): Prisma__ProductTagMapClient<$Result.GetResult<Prisma.$ProductTagMapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductTagMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTagMapCountArgs} args - Arguments to filter ProductTagMaps to count.
     * @example
     * // Count the number of ProductTagMaps
     * const count = await prisma.productTagMap.count({
     *   where: {
     *     // ... the filter for the ProductTagMaps we want to count
     *   }
     * })
    **/
    count<T extends ProductTagMapCountArgs>(
      args?: Subset<T, ProductTagMapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductTagMapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductTagMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTagMapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductTagMapAggregateArgs>(args: Subset<T, ProductTagMapAggregateArgs>): Prisma.PrismaPromise<GetProductTagMapAggregateType<T>>

    /**
     * Group by ProductTagMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTagMapGroupByArgs} args - Group by arguments.
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
      T extends ProductTagMapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductTagMapGroupByArgs['orderBy'] }
        : { orderBy?: ProductTagMapGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductTagMapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductTagMapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductTagMap model
   */
  readonly fields: ProductTagMapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductTagMap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductTagMapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends ProductTagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductTagDefaultArgs<ExtArgs>>): Prisma__ProductTagClient<$Result.GetResult<Prisma.$ProductTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductTagMap model
   */
  interface ProductTagMapFieldRefs {
    readonly productId: FieldRef<"ProductTagMap", 'Int'>
    readonly tagId: FieldRef<"ProductTagMap", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductTagMap findUnique
   */
  export type ProductTagMapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTagMap
     */
    select?: ProductTagMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTagMap
     */
    omit?: ProductTagMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTagMapInclude<ExtArgs> | null
    /**
     * Filter, which ProductTagMap to fetch.
     */
    where: ProductTagMapWhereUniqueInput
  }

  /**
   * ProductTagMap findUniqueOrThrow
   */
  export type ProductTagMapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTagMap
     */
    select?: ProductTagMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTagMap
     */
    omit?: ProductTagMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTagMapInclude<ExtArgs> | null
    /**
     * Filter, which ProductTagMap to fetch.
     */
    where: ProductTagMapWhereUniqueInput
  }

  /**
   * ProductTagMap findFirst
   */
  export type ProductTagMapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTagMap
     */
    select?: ProductTagMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTagMap
     */
    omit?: ProductTagMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTagMapInclude<ExtArgs> | null
    /**
     * Filter, which ProductTagMap to fetch.
     */
    where?: ProductTagMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTagMaps to fetch.
     */
    orderBy?: ProductTagMapOrderByWithRelationInput | ProductTagMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductTagMaps.
     */
    cursor?: ProductTagMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTagMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTagMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductTagMaps.
     */
    distinct?: ProductTagMapScalarFieldEnum | ProductTagMapScalarFieldEnum[]
  }

  /**
   * ProductTagMap findFirstOrThrow
   */
  export type ProductTagMapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTagMap
     */
    select?: ProductTagMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTagMap
     */
    omit?: ProductTagMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTagMapInclude<ExtArgs> | null
    /**
     * Filter, which ProductTagMap to fetch.
     */
    where?: ProductTagMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTagMaps to fetch.
     */
    orderBy?: ProductTagMapOrderByWithRelationInput | ProductTagMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductTagMaps.
     */
    cursor?: ProductTagMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTagMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTagMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductTagMaps.
     */
    distinct?: ProductTagMapScalarFieldEnum | ProductTagMapScalarFieldEnum[]
  }

  /**
   * ProductTagMap findMany
   */
  export type ProductTagMapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTagMap
     */
    select?: ProductTagMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTagMap
     */
    omit?: ProductTagMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTagMapInclude<ExtArgs> | null
    /**
     * Filter, which ProductTagMaps to fetch.
     */
    where?: ProductTagMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTagMaps to fetch.
     */
    orderBy?: ProductTagMapOrderByWithRelationInput | ProductTagMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductTagMaps.
     */
    cursor?: ProductTagMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTagMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTagMaps.
     */
    skip?: number
    distinct?: ProductTagMapScalarFieldEnum | ProductTagMapScalarFieldEnum[]
  }

  /**
   * ProductTagMap create
   */
  export type ProductTagMapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTagMap
     */
    select?: ProductTagMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTagMap
     */
    omit?: ProductTagMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTagMapInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductTagMap.
     */
    data: XOR<ProductTagMapCreateInput, ProductTagMapUncheckedCreateInput>
  }

  /**
   * ProductTagMap createMany
   */
  export type ProductTagMapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductTagMaps.
     */
    data: ProductTagMapCreateManyInput | ProductTagMapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductTagMap createManyAndReturn
   */
  export type ProductTagMapCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTagMap
     */
    select?: ProductTagMapSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTagMap
     */
    omit?: ProductTagMapOmit<ExtArgs> | null
    /**
     * The data used to create many ProductTagMaps.
     */
    data: ProductTagMapCreateManyInput | ProductTagMapCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTagMapIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductTagMap update
   */
  export type ProductTagMapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTagMap
     */
    select?: ProductTagMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTagMap
     */
    omit?: ProductTagMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTagMapInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductTagMap.
     */
    data: XOR<ProductTagMapUpdateInput, ProductTagMapUncheckedUpdateInput>
    /**
     * Choose, which ProductTagMap to update.
     */
    where: ProductTagMapWhereUniqueInput
  }

  /**
   * ProductTagMap updateMany
   */
  export type ProductTagMapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductTagMaps.
     */
    data: XOR<ProductTagMapUpdateManyMutationInput, ProductTagMapUncheckedUpdateManyInput>
    /**
     * Filter which ProductTagMaps to update
     */
    where?: ProductTagMapWhereInput
    /**
     * Limit how many ProductTagMaps to update.
     */
    limit?: number
  }

  /**
   * ProductTagMap updateManyAndReturn
   */
  export type ProductTagMapUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTagMap
     */
    select?: ProductTagMapSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTagMap
     */
    omit?: ProductTagMapOmit<ExtArgs> | null
    /**
     * The data used to update ProductTagMaps.
     */
    data: XOR<ProductTagMapUpdateManyMutationInput, ProductTagMapUncheckedUpdateManyInput>
    /**
     * Filter which ProductTagMaps to update
     */
    where?: ProductTagMapWhereInput
    /**
     * Limit how many ProductTagMaps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTagMapIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductTagMap upsert
   */
  export type ProductTagMapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTagMap
     */
    select?: ProductTagMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTagMap
     */
    omit?: ProductTagMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTagMapInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductTagMap to update in case it exists.
     */
    where: ProductTagMapWhereUniqueInput
    /**
     * In case the ProductTagMap found by the `where` argument doesn't exist, create a new ProductTagMap with this data.
     */
    create: XOR<ProductTagMapCreateInput, ProductTagMapUncheckedCreateInput>
    /**
     * In case the ProductTagMap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductTagMapUpdateInput, ProductTagMapUncheckedUpdateInput>
  }

  /**
   * ProductTagMap delete
   */
  export type ProductTagMapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTagMap
     */
    select?: ProductTagMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTagMap
     */
    omit?: ProductTagMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTagMapInclude<ExtArgs> | null
    /**
     * Filter which ProductTagMap to delete.
     */
    where: ProductTagMapWhereUniqueInput
  }

  /**
   * ProductTagMap deleteMany
   */
  export type ProductTagMapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductTagMaps to delete
     */
    where?: ProductTagMapWhereInput
    /**
     * Limit how many ProductTagMaps to delete.
     */
    limit?: number
  }

  /**
   * ProductTagMap without action
   */
  export type ProductTagMapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTagMap
     */
    select?: ProductTagMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductTagMap
     */
    omit?: ProductTagMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTagMapInclude<ExtArgs> | null
  }


  /**
   * Model Flair
   */

  export type AggregateFlair = {
    _count: FlairCountAggregateOutputType | null
    _avg: FlairAvgAggregateOutputType | null
    _sum: FlairSumAggregateOutputType | null
    _min: FlairMinAggregateOutputType | null
    _max: FlairMaxAggregateOutputType | null
  }

  export type FlairAvgAggregateOutputType = {
    id: number | null
  }

  export type FlairSumAggregateOutputType = {
    id: number | null
  }

  export type FlairMinAggregateOutputType = {
    id: number | null
    name: string | null
    color: string | null
  }

  export type FlairMaxAggregateOutputType = {
    id: number | null
    name: string | null
    color: string | null
  }

  export type FlairCountAggregateOutputType = {
    id: number
    name: number
    color: number
    _all: number
  }


  export type FlairAvgAggregateInputType = {
    id?: true
  }

  export type FlairSumAggregateInputType = {
    id?: true
  }

  export type FlairMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
  }

  export type FlairMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
  }

  export type FlairCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    _all?: true
  }

  export type FlairAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flair to aggregate.
     */
    where?: FlairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flairs to fetch.
     */
    orderBy?: FlairOrderByWithRelationInput | FlairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flairs
    **/
    _count?: true | FlairCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlairAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlairSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlairMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlairMaxAggregateInputType
  }

  export type GetFlairAggregateType<T extends FlairAggregateArgs> = {
        [P in keyof T & keyof AggregateFlair]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlair[P]>
      : GetScalarType<T[P], AggregateFlair[P]>
  }




  export type FlairGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlairWhereInput
    orderBy?: FlairOrderByWithAggregationInput | FlairOrderByWithAggregationInput[]
    by: FlairScalarFieldEnum[] | FlairScalarFieldEnum
    having?: FlairScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlairCountAggregateInputType | true
    _avg?: FlairAvgAggregateInputType
    _sum?: FlairSumAggregateInputType
    _min?: FlairMinAggregateInputType
    _max?: FlairMaxAggregateInputType
  }

  export type FlairGroupByOutputType = {
    id: number
    name: string
    color: string | null
    _count: FlairCountAggregateOutputType | null
    _avg: FlairAvgAggregateOutputType | null
    _sum: FlairSumAggregateOutputType | null
    _min: FlairMinAggregateOutputType | null
    _max: FlairMaxAggregateOutputType | null
  }

  type GetFlairGroupByPayload<T extends FlairGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlairGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlairGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlairGroupByOutputType[P]>
            : GetScalarType<T[P], FlairGroupByOutputType[P]>
        }
      >
    >


  export type FlairSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    products?: boolean | Flair$productsArgs<ExtArgs>
    _count?: boolean | FlairCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flair"]>

  export type FlairSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
  }, ExtArgs["result"]["flair"]>

  export type FlairSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
  }, ExtArgs["result"]["flair"]>

  export type FlairSelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
  }

  export type FlairOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "color", ExtArgs["result"]["flair"]>
  export type FlairInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Flair$productsArgs<ExtArgs>
    _count?: boolean | FlairCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FlairIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FlairIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FlairPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flair"
    objects: {
      products: Prisma.$ProductFlairMapPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      color: string | null
    }, ExtArgs["result"]["flair"]>
    composites: {}
  }

  type FlairGetPayload<S extends boolean | null | undefined | FlairDefaultArgs> = $Result.GetResult<Prisma.$FlairPayload, S>

  type FlairCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlairFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlairCountAggregateInputType | true
    }

  export interface FlairDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flair'], meta: { name: 'Flair' } }
    /**
     * Find zero or one Flair that matches the filter.
     * @param {FlairFindUniqueArgs} args - Arguments to find a Flair
     * @example
     * // Get one Flair
     * const flair = await prisma.flair.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlairFindUniqueArgs>(args: SelectSubset<T, FlairFindUniqueArgs<ExtArgs>>): Prisma__FlairClient<$Result.GetResult<Prisma.$FlairPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flair that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlairFindUniqueOrThrowArgs} args - Arguments to find a Flair
     * @example
     * // Get one Flair
     * const flair = await prisma.flair.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlairFindUniqueOrThrowArgs>(args: SelectSubset<T, FlairFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlairClient<$Result.GetResult<Prisma.$FlairPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flair that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlairFindFirstArgs} args - Arguments to find a Flair
     * @example
     * // Get one Flair
     * const flair = await prisma.flair.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlairFindFirstArgs>(args?: SelectSubset<T, FlairFindFirstArgs<ExtArgs>>): Prisma__FlairClient<$Result.GetResult<Prisma.$FlairPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flair that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlairFindFirstOrThrowArgs} args - Arguments to find a Flair
     * @example
     * // Get one Flair
     * const flair = await prisma.flair.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlairFindFirstOrThrowArgs>(args?: SelectSubset<T, FlairFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlairClient<$Result.GetResult<Prisma.$FlairPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flairs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlairFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flairs
     * const flairs = await prisma.flair.findMany()
     * 
     * // Get first 10 Flairs
     * const flairs = await prisma.flair.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flairWithIdOnly = await prisma.flair.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlairFindManyArgs>(args?: SelectSubset<T, FlairFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flair.
     * @param {FlairCreateArgs} args - Arguments to create a Flair.
     * @example
     * // Create one Flair
     * const Flair = await prisma.flair.create({
     *   data: {
     *     // ... data to create a Flair
     *   }
     * })
     * 
     */
    create<T extends FlairCreateArgs>(args: SelectSubset<T, FlairCreateArgs<ExtArgs>>): Prisma__FlairClient<$Result.GetResult<Prisma.$FlairPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flairs.
     * @param {FlairCreateManyArgs} args - Arguments to create many Flairs.
     * @example
     * // Create many Flairs
     * const flair = await prisma.flair.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlairCreateManyArgs>(args?: SelectSubset<T, FlairCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flairs and returns the data saved in the database.
     * @param {FlairCreateManyAndReturnArgs} args - Arguments to create many Flairs.
     * @example
     * // Create many Flairs
     * const flair = await prisma.flair.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flairs and only return the `id`
     * const flairWithIdOnly = await prisma.flair.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlairCreateManyAndReturnArgs>(args?: SelectSubset<T, FlairCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlairPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flair.
     * @param {FlairDeleteArgs} args - Arguments to delete one Flair.
     * @example
     * // Delete one Flair
     * const Flair = await prisma.flair.delete({
     *   where: {
     *     // ... filter to delete one Flair
     *   }
     * })
     * 
     */
    delete<T extends FlairDeleteArgs>(args: SelectSubset<T, FlairDeleteArgs<ExtArgs>>): Prisma__FlairClient<$Result.GetResult<Prisma.$FlairPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flair.
     * @param {FlairUpdateArgs} args - Arguments to update one Flair.
     * @example
     * // Update one Flair
     * const flair = await prisma.flair.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlairUpdateArgs>(args: SelectSubset<T, FlairUpdateArgs<ExtArgs>>): Prisma__FlairClient<$Result.GetResult<Prisma.$FlairPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flairs.
     * @param {FlairDeleteManyArgs} args - Arguments to filter Flairs to delete.
     * @example
     * // Delete a few Flairs
     * const { count } = await prisma.flair.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlairDeleteManyArgs>(args?: SelectSubset<T, FlairDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlairUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flairs
     * const flair = await prisma.flair.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlairUpdateManyArgs>(args: SelectSubset<T, FlairUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flairs and returns the data updated in the database.
     * @param {FlairUpdateManyAndReturnArgs} args - Arguments to update many Flairs.
     * @example
     * // Update many Flairs
     * const flair = await prisma.flair.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Flairs and only return the `id`
     * const flairWithIdOnly = await prisma.flair.updateManyAndReturn({
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
    updateManyAndReturn<T extends FlairUpdateManyAndReturnArgs>(args: SelectSubset<T, FlairUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlairPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flair.
     * @param {FlairUpsertArgs} args - Arguments to update or create a Flair.
     * @example
     * // Update or create a Flair
     * const flair = await prisma.flair.upsert({
     *   create: {
     *     // ... data to create a Flair
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flair we want to update
     *   }
     * })
     */
    upsert<T extends FlairUpsertArgs>(args: SelectSubset<T, FlairUpsertArgs<ExtArgs>>): Prisma__FlairClient<$Result.GetResult<Prisma.$FlairPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlairCountArgs} args - Arguments to filter Flairs to count.
     * @example
     * // Count the number of Flairs
     * const count = await prisma.flair.count({
     *   where: {
     *     // ... the filter for the Flairs we want to count
     *   }
     * })
    **/
    count<T extends FlairCountArgs>(
      args?: Subset<T, FlairCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlairCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlairAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlairAggregateArgs>(args: Subset<T, FlairAggregateArgs>): Prisma.PrismaPromise<GetFlairAggregateType<T>>

    /**
     * Group by Flair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlairGroupByArgs} args - Group by arguments.
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
      T extends FlairGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlairGroupByArgs['orderBy'] }
        : { orderBy?: FlairGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlairGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlairGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flair model
   */
  readonly fields: FlairFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flair.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlairClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Flair$productsArgs<ExtArgs> = {}>(args?: Subset<T, Flair$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductFlairMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Flair model
   */
  interface FlairFieldRefs {
    readonly id: FieldRef<"Flair", 'Int'>
    readonly name: FieldRef<"Flair", 'String'>
    readonly color: FieldRef<"Flair", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Flair findUnique
   */
  export type FlairFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flair
     */
    select?: FlairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flair
     */
    omit?: FlairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlairInclude<ExtArgs> | null
    /**
     * Filter, which Flair to fetch.
     */
    where: FlairWhereUniqueInput
  }

  /**
   * Flair findUniqueOrThrow
   */
  export type FlairFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flair
     */
    select?: FlairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flair
     */
    omit?: FlairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlairInclude<ExtArgs> | null
    /**
     * Filter, which Flair to fetch.
     */
    where: FlairWhereUniqueInput
  }

  /**
   * Flair findFirst
   */
  export type FlairFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flair
     */
    select?: FlairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flair
     */
    omit?: FlairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlairInclude<ExtArgs> | null
    /**
     * Filter, which Flair to fetch.
     */
    where?: FlairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flairs to fetch.
     */
    orderBy?: FlairOrderByWithRelationInput | FlairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flairs.
     */
    cursor?: FlairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flairs.
     */
    distinct?: FlairScalarFieldEnum | FlairScalarFieldEnum[]
  }

  /**
   * Flair findFirstOrThrow
   */
  export type FlairFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flair
     */
    select?: FlairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flair
     */
    omit?: FlairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlairInclude<ExtArgs> | null
    /**
     * Filter, which Flair to fetch.
     */
    where?: FlairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flairs to fetch.
     */
    orderBy?: FlairOrderByWithRelationInput | FlairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flairs.
     */
    cursor?: FlairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flairs.
     */
    distinct?: FlairScalarFieldEnum | FlairScalarFieldEnum[]
  }

  /**
   * Flair findMany
   */
  export type FlairFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flair
     */
    select?: FlairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flair
     */
    omit?: FlairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlairInclude<ExtArgs> | null
    /**
     * Filter, which Flairs to fetch.
     */
    where?: FlairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flairs to fetch.
     */
    orderBy?: FlairOrderByWithRelationInput | FlairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flairs.
     */
    cursor?: FlairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flairs.
     */
    skip?: number
    distinct?: FlairScalarFieldEnum | FlairScalarFieldEnum[]
  }

  /**
   * Flair create
   */
  export type FlairCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flair
     */
    select?: FlairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flair
     */
    omit?: FlairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlairInclude<ExtArgs> | null
    /**
     * The data needed to create a Flair.
     */
    data: XOR<FlairCreateInput, FlairUncheckedCreateInput>
  }

  /**
   * Flair createMany
   */
  export type FlairCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flairs.
     */
    data: FlairCreateManyInput | FlairCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Flair createManyAndReturn
   */
  export type FlairCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flair
     */
    select?: FlairSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flair
     */
    omit?: FlairOmit<ExtArgs> | null
    /**
     * The data used to create many Flairs.
     */
    data: FlairCreateManyInput | FlairCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Flair update
   */
  export type FlairUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flair
     */
    select?: FlairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flair
     */
    omit?: FlairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlairInclude<ExtArgs> | null
    /**
     * The data needed to update a Flair.
     */
    data: XOR<FlairUpdateInput, FlairUncheckedUpdateInput>
    /**
     * Choose, which Flair to update.
     */
    where: FlairWhereUniqueInput
  }

  /**
   * Flair updateMany
   */
  export type FlairUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flairs.
     */
    data: XOR<FlairUpdateManyMutationInput, FlairUncheckedUpdateManyInput>
    /**
     * Filter which Flairs to update
     */
    where?: FlairWhereInput
    /**
     * Limit how many Flairs to update.
     */
    limit?: number
  }

  /**
   * Flair updateManyAndReturn
   */
  export type FlairUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flair
     */
    select?: FlairSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flair
     */
    omit?: FlairOmit<ExtArgs> | null
    /**
     * The data used to update Flairs.
     */
    data: XOR<FlairUpdateManyMutationInput, FlairUncheckedUpdateManyInput>
    /**
     * Filter which Flairs to update
     */
    where?: FlairWhereInput
    /**
     * Limit how many Flairs to update.
     */
    limit?: number
  }

  /**
   * Flair upsert
   */
  export type FlairUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flair
     */
    select?: FlairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flair
     */
    omit?: FlairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlairInclude<ExtArgs> | null
    /**
     * The filter to search for the Flair to update in case it exists.
     */
    where: FlairWhereUniqueInput
    /**
     * In case the Flair found by the `where` argument doesn't exist, create a new Flair with this data.
     */
    create: XOR<FlairCreateInput, FlairUncheckedCreateInput>
    /**
     * In case the Flair was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlairUpdateInput, FlairUncheckedUpdateInput>
  }

  /**
   * Flair delete
   */
  export type FlairDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flair
     */
    select?: FlairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flair
     */
    omit?: FlairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlairInclude<ExtArgs> | null
    /**
     * Filter which Flair to delete.
     */
    where: FlairWhereUniqueInput
  }

  /**
   * Flair deleteMany
   */
  export type FlairDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flairs to delete
     */
    where?: FlairWhereInput
    /**
     * Limit how many Flairs to delete.
     */
    limit?: number
  }

  /**
   * Flair.products
   */
  export type Flair$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFlairMap
     */
    select?: ProductFlairMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFlairMap
     */
    omit?: ProductFlairMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFlairMapInclude<ExtArgs> | null
    where?: ProductFlairMapWhereInput
    orderBy?: ProductFlairMapOrderByWithRelationInput | ProductFlairMapOrderByWithRelationInput[]
    cursor?: ProductFlairMapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductFlairMapScalarFieldEnum | ProductFlairMapScalarFieldEnum[]
  }

  /**
   * Flair without action
   */
  export type FlairDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flair
     */
    select?: FlairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flair
     */
    omit?: FlairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlairInclude<ExtArgs> | null
  }


  /**
   * Model ProductFlairMap
   */

  export type AggregateProductFlairMap = {
    _count: ProductFlairMapCountAggregateOutputType | null
    _avg: ProductFlairMapAvgAggregateOutputType | null
    _sum: ProductFlairMapSumAggregateOutputType | null
    _min: ProductFlairMapMinAggregateOutputType | null
    _max: ProductFlairMapMaxAggregateOutputType | null
  }

  export type ProductFlairMapAvgAggregateOutputType = {
    productId: number | null
    flairId: number | null
  }

  export type ProductFlairMapSumAggregateOutputType = {
    productId: number | null
    flairId: number | null
  }

  export type ProductFlairMapMinAggregateOutputType = {
    productId: number | null
    flairId: number | null
  }

  export type ProductFlairMapMaxAggregateOutputType = {
    productId: number | null
    flairId: number | null
  }

  export type ProductFlairMapCountAggregateOutputType = {
    productId: number
    flairId: number
    _all: number
  }


  export type ProductFlairMapAvgAggregateInputType = {
    productId?: true
    flairId?: true
  }

  export type ProductFlairMapSumAggregateInputType = {
    productId?: true
    flairId?: true
  }

  export type ProductFlairMapMinAggregateInputType = {
    productId?: true
    flairId?: true
  }

  export type ProductFlairMapMaxAggregateInputType = {
    productId?: true
    flairId?: true
  }

  export type ProductFlairMapCountAggregateInputType = {
    productId?: true
    flairId?: true
    _all?: true
  }

  export type ProductFlairMapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductFlairMap to aggregate.
     */
    where?: ProductFlairMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductFlairMaps to fetch.
     */
    orderBy?: ProductFlairMapOrderByWithRelationInput | ProductFlairMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductFlairMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductFlairMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductFlairMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductFlairMaps
    **/
    _count?: true | ProductFlairMapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductFlairMapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductFlairMapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductFlairMapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductFlairMapMaxAggregateInputType
  }

  export type GetProductFlairMapAggregateType<T extends ProductFlairMapAggregateArgs> = {
        [P in keyof T & keyof AggregateProductFlairMap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductFlairMap[P]>
      : GetScalarType<T[P], AggregateProductFlairMap[P]>
  }




  export type ProductFlairMapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductFlairMapWhereInput
    orderBy?: ProductFlairMapOrderByWithAggregationInput | ProductFlairMapOrderByWithAggregationInput[]
    by: ProductFlairMapScalarFieldEnum[] | ProductFlairMapScalarFieldEnum
    having?: ProductFlairMapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductFlairMapCountAggregateInputType | true
    _avg?: ProductFlairMapAvgAggregateInputType
    _sum?: ProductFlairMapSumAggregateInputType
    _min?: ProductFlairMapMinAggregateInputType
    _max?: ProductFlairMapMaxAggregateInputType
  }

  export type ProductFlairMapGroupByOutputType = {
    productId: number
    flairId: number
    _count: ProductFlairMapCountAggregateOutputType | null
    _avg: ProductFlairMapAvgAggregateOutputType | null
    _sum: ProductFlairMapSumAggregateOutputType | null
    _min: ProductFlairMapMinAggregateOutputType | null
    _max: ProductFlairMapMaxAggregateOutputType | null
  }

  type GetProductFlairMapGroupByPayload<T extends ProductFlairMapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductFlairMapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductFlairMapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductFlairMapGroupByOutputType[P]>
            : GetScalarType<T[P], ProductFlairMapGroupByOutputType[P]>
        }
      >
    >


  export type ProductFlairMapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    flairId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    flair?: boolean | FlairDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productFlairMap"]>

  export type ProductFlairMapSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    flairId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    flair?: boolean | FlairDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productFlairMap"]>

  export type ProductFlairMapSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    flairId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    flair?: boolean | FlairDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productFlairMap"]>

  export type ProductFlairMapSelectScalar = {
    productId?: boolean
    flairId?: boolean
  }

  export type ProductFlairMapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productId" | "flairId", ExtArgs["result"]["productFlairMap"]>
  export type ProductFlairMapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    flair?: boolean | FlairDefaultArgs<ExtArgs>
  }
  export type ProductFlairMapIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    flair?: boolean | FlairDefaultArgs<ExtArgs>
  }
  export type ProductFlairMapIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    flair?: boolean | FlairDefaultArgs<ExtArgs>
  }

  export type $ProductFlairMapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductFlairMap"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      flair: Prisma.$FlairPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productId: number
      flairId: number
    }, ExtArgs["result"]["productFlairMap"]>
    composites: {}
  }

  type ProductFlairMapGetPayload<S extends boolean | null | undefined | ProductFlairMapDefaultArgs> = $Result.GetResult<Prisma.$ProductFlairMapPayload, S>

  type ProductFlairMapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFlairMapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductFlairMapCountAggregateInputType | true
    }

  export interface ProductFlairMapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductFlairMap'], meta: { name: 'ProductFlairMap' } }
    /**
     * Find zero or one ProductFlairMap that matches the filter.
     * @param {ProductFlairMapFindUniqueArgs} args - Arguments to find a ProductFlairMap
     * @example
     * // Get one ProductFlairMap
     * const productFlairMap = await prisma.productFlairMap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFlairMapFindUniqueArgs>(args: SelectSubset<T, ProductFlairMapFindUniqueArgs<ExtArgs>>): Prisma__ProductFlairMapClient<$Result.GetResult<Prisma.$ProductFlairMapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductFlairMap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFlairMapFindUniqueOrThrowArgs} args - Arguments to find a ProductFlairMap
     * @example
     * // Get one ProductFlairMap
     * const productFlairMap = await prisma.productFlairMap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFlairMapFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFlairMapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductFlairMapClient<$Result.GetResult<Prisma.$ProductFlairMapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductFlairMap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFlairMapFindFirstArgs} args - Arguments to find a ProductFlairMap
     * @example
     * // Get one ProductFlairMap
     * const productFlairMap = await prisma.productFlairMap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFlairMapFindFirstArgs>(args?: SelectSubset<T, ProductFlairMapFindFirstArgs<ExtArgs>>): Prisma__ProductFlairMapClient<$Result.GetResult<Prisma.$ProductFlairMapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductFlairMap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFlairMapFindFirstOrThrowArgs} args - Arguments to find a ProductFlairMap
     * @example
     * // Get one ProductFlairMap
     * const productFlairMap = await prisma.productFlairMap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFlairMapFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFlairMapFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductFlairMapClient<$Result.GetResult<Prisma.$ProductFlairMapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductFlairMaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFlairMapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductFlairMaps
     * const productFlairMaps = await prisma.productFlairMap.findMany()
     * 
     * // Get first 10 ProductFlairMaps
     * const productFlairMaps = await prisma.productFlairMap.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const productFlairMapWithProductIdOnly = await prisma.productFlairMap.findMany({ select: { productId: true } })
     * 
     */
    findMany<T extends ProductFlairMapFindManyArgs>(args?: SelectSubset<T, ProductFlairMapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductFlairMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductFlairMap.
     * @param {ProductFlairMapCreateArgs} args - Arguments to create a ProductFlairMap.
     * @example
     * // Create one ProductFlairMap
     * const ProductFlairMap = await prisma.productFlairMap.create({
     *   data: {
     *     // ... data to create a ProductFlairMap
     *   }
     * })
     * 
     */
    create<T extends ProductFlairMapCreateArgs>(args: SelectSubset<T, ProductFlairMapCreateArgs<ExtArgs>>): Prisma__ProductFlairMapClient<$Result.GetResult<Prisma.$ProductFlairMapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductFlairMaps.
     * @param {ProductFlairMapCreateManyArgs} args - Arguments to create many ProductFlairMaps.
     * @example
     * // Create many ProductFlairMaps
     * const productFlairMap = await prisma.productFlairMap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductFlairMapCreateManyArgs>(args?: SelectSubset<T, ProductFlairMapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductFlairMaps and returns the data saved in the database.
     * @param {ProductFlairMapCreateManyAndReturnArgs} args - Arguments to create many ProductFlairMaps.
     * @example
     * // Create many ProductFlairMaps
     * const productFlairMap = await prisma.productFlairMap.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductFlairMaps and only return the `productId`
     * const productFlairMapWithProductIdOnly = await prisma.productFlairMap.createManyAndReturn({
     *   select: { productId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductFlairMapCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductFlairMapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductFlairMapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductFlairMap.
     * @param {ProductFlairMapDeleteArgs} args - Arguments to delete one ProductFlairMap.
     * @example
     * // Delete one ProductFlairMap
     * const ProductFlairMap = await prisma.productFlairMap.delete({
     *   where: {
     *     // ... filter to delete one ProductFlairMap
     *   }
     * })
     * 
     */
    delete<T extends ProductFlairMapDeleteArgs>(args: SelectSubset<T, ProductFlairMapDeleteArgs<ExtArgs>>): Prisma__ProductFlairMapClient<$Result.GetResult<Prisma.$ProductFlairMapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductFlairMap.
     * @param {ProductFlairMapUpdateArgs} args - Arguments to update one ProductFlairMap.
     * @example
     * // Update one ProductFlairMap
     * const productFlairMap = await prisma.productFlairMap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductFlairMapUpdateArgs>(args: SelectSubset<T, ProductFlairMapUpdateArgs<ExtArgs>>): Prisma__ProductFlairMapClient<$Result.GetResult<Prisma.$ProductFlairMapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductFlairMaps.
     * @param {ProductFlairMapDeleteManyArgs} args - Arguments to filter ProductFlairMaps to delete.
     * @example
     * // Delete a few ProductFlairMaps
     * const { count } = await prisma.productFlairMap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductFlairMapDeleteManyArgs>(args?: SelectSubset<T, ProductFlairMapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductFlairMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFlairMapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductFlairMaps
     * const productFlairMap = await prisma.productFlairMap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductFlairMapUpdateManyArgs>(args: SelectSubset<T, ProductFlairMapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductFlairMaps and returns the data updated in the database.
     * @param {ProductFlairMapUpdateManyAndReturnArgs} args - Arguments to update many ProductFlairMaps.
     * @example
     * // Update many ProductFlairMaps
     * const productFlairMap = await prisma.productFlairMap.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductFlairMaps and only return the `productId`
     * const productFlairMapWithProductIdOnly = await prisma.productFlairMap.updateManyAndReturn({
     *   select: { productId: true },
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
    updateManyAndReturn<T extends ProductFlairMapUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductFlairMapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductFlairMapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductFlairMap.
     * @param {ProductFlairMapUpsertArgs} args - Arguments to update or create a ProductFlairMap.
     * @example
     * // Update or create a ProductFlairMap
     * const productFlairMap = await prisma.productFlairMap.upsert({
     *   create: {
     *     // ... data to create a ProductFlairMap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductFlairMap we want to update
     *   }
     * })
     */
    upsert<T extends ProductFlairMapUpsertArgs>(args: SelectSubset<T, ProductFlairMapUpsertArgs<ExtArgs>>): Prisma__ProductFlairMapClient<$Result.GetResult<Prisma.$ProductFlairMapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductFlairMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFlairMapCountArgs} args - Arguments to filter ProductFlairMaps to count.
     * @example
     * // Count the number of ProductFlairMaps
     * const count = await prisma.productFlairMap.count({
     *   where: {
     *     // ... the filter for the ProductFlairMaps we want to count
     *   }
     * })
    **/
    count<T extends ProductFlairMapCountArgs>(
      args?: Subset<T, ProductFlairMapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductFlairMapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductFlairMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFlairMapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductFlairMapAggregateArgs>(args: Subset<T, ProductFlairMapAggregateArgs>): Prisma.PrismaPromise<GetProductFlairMapAggregateType<T>>

    /**
     * Group by ProductFlairMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFlairMapGroupByArgs} args - Group by arguments.
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
      T extends ProductFlairMapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductFlairMapGroupByArgs['orderBy'] }
        : { orderBy?: ProductFlairMapGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductFlairMapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductFlairMapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductFlairMap model
   */
  readonly fields: ProductFlairMapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductFlairMap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductFlairMapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    flair<T extends FlairDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlairDefaultArgs<ExtArgs>>): Prisma__FlairClient<$Result.GetResult<Prisma.$FlairPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductFlairMap model
   */
  interface ProductFlairMapFieldRefs {
    readonly productId: FieldRef<"ProductFlairMap", 'Int'>
    readonly flairId: FieldRef<"ProductFlairMap", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductFlairMap findUnique
   */
  export type ProductFlairMapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFlairMap
     */
    select?: ProductFlairMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFlairMap
     */
    omit?: ProductFlairMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFlairMapInclude<ExtArgs> | null
    /**
     * Filter, which ProductFlairMap to fetch.
     */
    where: ProductFlairMapWhereUniqueInput
  }

  /**
   * ProductFlairMap findUniqueOrThrow
   */
  export type ProductFlairMapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFlairMap
     */
    select?: ProductFlairMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFlairMap
     */
    omit?: ProductFlairMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFlairMapInclude<ExtArgs> | null
    /**
     * Filter, which ProductFlairMap to fetch.
     */
    where: ProductFlairMapWhereUniqueInput
  }

  /**
   * ProductFlairMap findFirst
   */
  export type ProductFlairMapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFlairMap
     */
    select?: ProductFlairMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFlairMap
     */
    omit?: ProductFlairMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFlairMapInclude<ExtArgs> | null
    /**
     * Filter, which ProductFlairMap to fetch.
     */
    where?: ProductFlairMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductFlairMaps to fetch.
     */
    orderBy?: ProductFlairMapOrderByWithRelationInput | ProductFlairMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductFlairMaps.
     */
    cursor?: ProductFlairMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductFlairMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductFlairMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductFlairMaps.
     */
    distinct?: ProductFlairMapScalarFieldEnum | ProductFlairMapScalarFieldEnum[]
  }

  /**
   * ProductFlairMap findFirstOrThrow
   */
  export type ProductFlairMapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFlairMap
     */
    select?: ProductFlairMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFlairMap
     */
    omit?: ProductFlairMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFlairMapInclude<ExtArgs> | null
    /**
     * Filter, which ProductFlairMap to fetch.
     */
    where?: ProductFlairMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductFlairMaps to fetch.
     */
    orderBy?: ProductFlairMapOrderByWithRelationInput | ProductFlairMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductFlairMaps.
     */
    cursor?: ProductFlairMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductFlairMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductFlairMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductFlairMaps.
     */
    distinct?: ProductFlairMapScalarFieldEnum | ProductFlairMapScalarFieldEnum[]
  }

  /**
   * ProductFlairMap findMany
   */
  export type ProductFlairMapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFlairMap
     */
    select?: ProductFlairMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFlairMap
     */
    omit?: ProductFlairMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFlairMapInclude<ExtArgs> | null
    /**
     * Filter, which ProductFlairMaps to fetch.
     */
    where?: ProductFlairMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductFlairMaps to fetch.
     */
    orderBy?: ProductFlairMapOrderByWithRelationInput | ProductFlairMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductFlairMaps.
     */
    cursor?: ProductFlairMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductFlairMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductFlairMaps.
     */
    skip?: number
    distinct?: ProductFlairMapScalarFieldEnum | ProductFlairMapScalarFieldEnum[]
  }

  /**
   * ProductFlairMap create
   */
  export type ProductFlairMapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFlairMap
     */
    select?: ProductFlairMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFlairMap
     */
    omit?: ProductFlairMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFlairMapInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductFlairMap.
     */
    data: XOR<ProductFlairMapCreateInput, ProductFlairMapUncheckedCreateInput>
  }

  /**
   * ProductFlairMap createMany
   */
  export type ProductFlairMapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductFlairMaps.
     */
    data: ProductFlairMapCreateManyInput | ProductFlairMapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductFlairMap createManyAndReturn
   */
  export type ProductFlairMapCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFlairMap
     */
    select?: ProductFlairMapSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFlairMap
     */
    omit?: ProductFlairMapOmit<ExtArgs> | null
    /**
     * The data used to create many ProductFlairMaps.
     */
    data: ProductFlairMapCreateManyInput | ProductFlairMapCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFlairMapIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductFlairMap update
   */
  export type ProductFlairMapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFlairMap
     */
    select?: ProductFlairMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFlairMap
     */
    omit?: ProductFlairMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFlairMapInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductFlairMap.
     */
    data: XOR<ProductFlairMapUpdateInput, ProductFlairMapUncheckedUpdateInput>
    /**
     * Choose, which ProductFlairMap to update.
     */
    where: ProductFlairMapWhereUniqueInput
  }

  /**
   * ProductFlairMap updateMany
   */
  export type ProductFlairMapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductFlairMaps.
     */
    data: XOR<ProductFlairMapUpdateManyMutationInput, ProductFlairMapUncheckedUpdateManyInput>
    /**
     * Filter which ProductFlairMaps to update
     */
    where?: ProductFlairMapWhereInput
    /**
     * Limit how many ProductFlairMaps to update.
     */
    limit?: number
  }

  /**
   * ProductFlairMap updateManyAndReturn
   */
  export type ProductFlairMapUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFlairMap
     */
    select?: ProductFlairMapSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFlairMap
     */
    omit?: ProductFlairMapOmit<ExtArgs> | null
    /**
     * The data used to update ProductFlairMaps.
     */
    data: XOR<ProductFlairMapUpdateManyMutationInput, ProductFlairMapUncheckedUpdateManyInput>
    /**
     * Filter which ProductFlairMaps to update
     */
    where?: ProductFlairMapWhereInput
    /**
     * Limit how many ProductFlairMaps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFlairMapIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductFlairMap upsert
   */
  export type ProductFlairMapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFlairMap
     */
    select?: ProductFlairMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFlairMap
     */
    omit?: ProductFlairMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFlairMapInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductFlairMap to update in case it exists.
     */
    where: ProductFlairMapWhereUniqueInput
    /**
     * In case the ProductFlairMap found by the `where` argument doesn't exist, create a new ProductFlairMap with this data.
     */
    create: XOR<ProductFlairMapCreateInput, ProductFlairMapUncheckedCreateInput>
    /**
     * In case the ProductFlairMap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductFlairMapUpdateInput, ProductFlairMapUncheckedUpdateInput>
  }

  /**
   * ProductFlairMap delete
   */
  export type ProductFlairMapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFlairMap
     */
    select?: ProductFlairMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFlairMap
     */
    omit?: ProductFlairMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFlairMapInclude<ExtArgs> | null
    /**
     * Filter which ProductFlairMap to delete.
     */
    where: ProductFlairMapWhereUniqueInput
  }

  /**
   * ProductFlairMap deleteMany
   */
  export type ProductFlairMapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductFlairMaps to delete
     */
    where?: ProductFlairMapWhereInput
    /**
     * Limit how many ProductFlairMaps to delete.
     */
    limit?: number
  }

  /**
   * ProductFlairMap without action
   */
  export type ProductFlairMapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFlairMap
     */
    select?: ProductFlairMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFlairMap
     */
    omit?: ProductFlairMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFlairMapInclude<ExtArgs> | null
  }


  /**
   * Model ProductImage
   */

  export type AggregateProductImage = {
    _count: ProductImageCountAggregateOutputType | null
    _avg: ProductImageAvgAggregateOutputType | null
    _sum: ProductImageSumAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  export type ProductImageAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    priority: number | null
    width: number | null
    height: number | null
  }

  export type ProductImageSumAggregateOutputType = {
    id: number | null
    productId: number | null
    priority: number | null
    width: number | null
    height: number | null
  }

  export type ProductImageMinAggregateOutputType = {
    id: number | null
    productId: number | null
    imageUrl: string | null
    cloudId: string | null
    alt: string | null
    priority: number | null
    width: number | null
    height: number | null
    isDefault: boolean | null
    createdAt: Date | null
  }

  export type ProductImageMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    imageUrl: string | null
    cloudId: string | null
    alt: string | null
    priority: number | null
    width: number | null
    height: number | null
    isDefault: boolean | null
    createdAt: Date | null
  }

  export type ProductImageCountAggregateOutputType = {
    id: number
    productId: number
    imageUrl: number
    cloudId: number
    alt: number
    priority: number
    width: number
    height: number
    isDefault: number
    createdAt: number
    _all: number
  }


  export type ProductImageAvgAggregateInputType = {
    id?: true
    productId?: true
    priority?: true
    width?: true
    height?: true
  }

  export type ProductImageSumAggregateInputType = {
    id?: true
    productId?: true
    priority?: true
    width?: true
    height?: true
  }

  export type ProductImageMinAggregateInputType = {
    id?: true
    productId?: true
    imageUrl?: true
    cloudId?: true
    alt?: true
    priority?: true
    width?: true
    height?: true
    isDefault?: true
    createdAt?: true
  }

  export type ProductImageMaxAggregateInputType = {
    id?: true
    productId?: true
    imageUrl?: true
    cloudId?: true
    alt?: true
    priority?: true
    width?: true
    height?: true
    isDefault?: true
    createdAt?: true
  }

  export type ProductImageCountAggregateInputType = {
    id?: true
    productId?: true
    imageUrl?: true
    cloudId?: true
    alt?: true
    priority?: true
    width?: true
    height?: true
    isDefault?: true
    createdAt?: true
    _all?: true
  }

  export type ProductImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImage to aggregate.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductImages
    **/
    _count?: true | ProductImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductImageMaxAggregateInputType
  }

  export type GetProductImageAggregateType<T extends ProductImageAggregateArgs> = {
        [P in keyof T & keyof AggregateProductImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductImage[P]>
      : GetScalarType<T[P], AggregateProductImage[P]>
  }




  export type ProductImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithAggregationInput | ProductImageOrderByWithAggregationInput[]
    by: ProductImageScalarFieldEnum[] | ProductImageScalarFieldEnum
    having?: ProductImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductImageCountAggregateInputType | true
    _avg?: ProductImageAvgAggregateInputType
    _sum?: ProductImageSumAggregateInputType
    _min?: ProductImageMinAggregateInputType
    _max?: ProductImageMaxAggregateInputType
  }

  export type ProductImageGroupByOutputType = {
    id: number
    productId: number
    imageUrl: string
    cloudId: string | null
    alt: string | null
    priority: number
    width: number | null
    height: number | null
    isDefault: boolean
    createdAt: Date
    _count: ProductImageCountAggregateOutputType | null
    _avg: ProductImageAvgAggregateOutputType | null
    _sum: ProductImageSumAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  type GetProductImageGroupByPayload<T extends ProductImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
            : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
        }
      >
    >


  export type ProductImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    imageUrl?: boolean
    cloudId?: boolean
    alt?: boolean
    priority?: boolean
    width?: boolean
    height?: boolean
    isDefault?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>

  export type ProductImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    imageUrl?: boolean
    cloudId?: boolean
    alt?: boolean
    priority?: boolean
    width?: boolean
    height?: boolean
    isDefault?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>

  export type ProductImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    imageUrl?: boolean
    cloudId?: boolean
    alt?: boolean
    priority?: boolean
    width?: boolean
    height?: boolean
    isDefault?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>

  export type ProductImageSelectScalar = {
    id?: boolean
    productId?: boolean
    imageUrl?: boolean
    cloudId?: boolean
    alt?: boolean
    priority?: boolean
    width?: boolean
    height?: boolean
    isDefault?: boolean
    createdAt?: boolean
  }

  export type ProductImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "imageUrl" | "cloudId" | "alt" | "priority" | "width" | "height" | "isDefault" | "createdAt", ExtArgs["result"]["productImage"]>
  export type ProductImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductImage"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      imageUrl: string
      cloudId: string | null
      alt: string | null
      priority: number
      width: number | null
      height: number | null
      isDefault: boolean
      createdAt: Date
    }, ExtArgs["result"]["productImage"]>
    composites: {}
  }

  type ProductImageGetPayload<S extends boolean | null | undefined | ProductImageDefaultArgs> = $Result.GetResult<Prisma.$ProductImagePayload, S>

  type ProductImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductImageCountAggregateInputType | true
    }

  export interface ProductImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductImage'], meta: { name: 'ProductImage' } }
    /**
     * Find zero or one ProductImage that matches the filter.
     * @param {ProductImageFindUniqueArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductImageFindUniqueArgs>(args: SelectSubset<T, ProductImageFindUniqueArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductImageFindUniqueOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductImageFindFirstArgs>(args?: SelectSubset<T, ProductImageFindFirstArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductImages
     * const productImages = await prisma.productImage.findMany()
     * 
     * // Get first 10 ProductImages
     * const productImages = await prisma.productImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productImageWithIdOnly = await prisma.productImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductImageFindManyArgs>(args?: SelectSubset<T, ProductImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductImage.
     * @param {ProductImageCreateArgs} args - Arguments to create a ProductImage.
     * @example
     * // Create one ProductImage
     * const ProductImage = await prisma.productImage.create({
     *   data: {
     *     // ... data to create a ProductImage
     *   }
     * })
     * 
     */
    create<T extends ProductImageCreateArgs>(args: SelectSubset<T, ProductImageCreateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductImages.
     * @param {ProductImageCreateManyArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImage = await prisma.productImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductImageCreateManyArgs>(args?: SelectSubset<T, ProductImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductImages and returns the data saved in the database.
     * @param {ProductImageCreateManyAndReturnArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImage = await prisma.productImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductImages and only return the `id`
     * const productImageWithIdOnly = await prisma.productImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductImage.
     * @param {ProductImageDeleteArgs} args - Arguments to delete one ProductImage.
     * @example
     * // Delete one ProductImage
     * const ProductImage = await prisma.productImage.delete({
     *   where: {
     *     // ... filter to delete one ProductImage
     *   }
     * })
     * 
     */
    delete<T extends ProductImageDeleteArgs>(args: SelectSubset<T, ProductImageDeleteArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductImage.
     * @param {ProductImageUpdateArgs} args - Arguments to update one ProductImage.
     * @example
     * // Update one ProductImage
     * const productImage = await prisma.productImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductImageUpdateArgs>(args: SelectSubset<T, ProductImageUpdateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductImages.
     * @param {ProductImageDeleteManyArgs} args - Arguments to filter ProductImages to delete.
     * @example
     * // Delete a few ProductImages
     * const { count } = await prisma.productImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductImageDeleteManyArgs>(args?: SelectSubset<T, ProductImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductImages
     * const productImage = await prisma.productImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductImageUpdateManyArgs>(args: SelectSubset<T, ProductImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages and returns the data updated in the database.
     * @param {ProductImageUpdateManyAndReturnArgs} args - Arguments to update many ProductImages.
     * @example
     * // Update many ProductImages
     * const productImage = await prisma.productImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductImages and only return the `id`
     * const productImageWithIdOnly = await prisma.productImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductImage.
     * @param {ProductImageUpsertArgs} args - Arguments to update or create a ProductImage.
     * @example
     * // Update or create a ProductImage
     * const productImage = await prisma.productImage.upsert({
     *   create: {
     *     // ... data to create a ProductImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductImage we want to update
     *   }
     * })
     */
    upsert<T extends ProductImageUpsertArgs>(args: SelectSubset<T, ProductImageUpsertArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageCountArgs} args - Arguments to filter ProductImages to count.
     * @example
     * // Count the number of ProductImages
     * const count = await prisma.productImage.count({
     *   where: {
     *     // ... the filter for the ProductImages we want to count
     *   }
     * })
    **/
    count<T extends ProductImageCountArgs>(
      args?: Subset<T, ProductImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductImageAggregateArgs>(args: Subset<T, ProductImageAggregateArgs>): Prisma.PrismaPromise<GetProductImageAggregateType<T>>

    /**
     * Group by ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageGroupByArgs} args - Group by arguments.
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
      T extends ProductImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductImageGroupByArgs['orderBy'] }
        : { orderBy?: ProductImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductImage model
   */
  readonly fields: ProductImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductImage model
   */
  interface ProductImageFieldRefs {
    readonly id: FieldRef<"ProductImage", 'Int'>
    readonly productId: FieldRef<"ProductImage", 'Int'>
    readonly imageUrl: FieldRef<"ProductImage", 'String'>
    readonly cloudId: FieldRef<"ProductImage", 'String'>
    readonly alt: FieldRef<"ProductImage", 'String'>
    readonly priority: FieldRef<"ProductImage", 'Int'>
    readonly width: FieldRef<"ProductImage", 'Int'>
    readonly height: FieldRef<"ProductImage", 'Int'>
    readonly isDefault: FieldRef<"ProductImage", 'Boolean'>
    readonly createdAt: FieldRef<"ProductImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductImage findUnique
   */
  export type ProductImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findUniqueOrThrow
   */
  export type ProductImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findFirst
   */
  export type ProductImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findFirstOrThrow
   */
  export type ProductImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findMany
   */
  export type ProductImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage create
   */
  export type ProductImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductImage.
     */
    data: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
  }

  /**
   * ProductImage createMany
   */
  export type ProductImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImageCreateManyInput | ProductImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductImage createManyAndReturn
   */
  export type ProductImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImageCreateManyInput | ProductImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductImage update
   */
  export type ProductImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductImage.
     */
    data: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
    /**
     * Choose, which ProductImage to update.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage updateMany
   */
  export type ProductImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to update.
     */
    limit?: number
  }

  /**
   * ProductImage updateManyAndReturn
   */
  export type ProductImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductImage upsert
   */
  export type ProductImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductImage to update in case it exists.
     */
    where: ProductImageWhereUniqueInput
    /**
     * In case the ProductImage found by the `where` argument doesn't exist, create a new ProductImage with this data.
     */
    create: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
    /**
     * In case the ProductImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
  }

  /**
   * ProductImage delete
   */
  export type ProductImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter which ProductImage to delete.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage deleteMany
   */
  export type ProductImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImages to delete
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to delete.
     */
    limit?: number
  }

  /**
   * ProductImage without action
   */
  export type ProductImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
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


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    slug: 'slug',
    metaTitle: 'metaTitle',
    metaDescription: 'metaDescription',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SubcategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubcategoryScalarFieldEnum = (typeof SubcategoryScalarFieldEnum)[keyof typeof SubcategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    gender: 'gender',
    description: 'description',
    netWeight: 'netWeight',
    grossWeight: 'grossWeight',
    huid: 'huid',
    sku: 'sku',
    karat: 'karat',
    price: 'price',
    salePrice: 'salePrice',
    stockQuantity: 'stockQuantity',
    isPublished: 'isPublished',
    publishedAt: 'publishedAt',
    subcategoryId: 'subcategoryId',
    metaTitle: 'metaTitle',
    metaDescription: 'metaDescription',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductVariantScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    name: 'name',
    size: 'size',
    color: 'color',
    price: 'price',
    salePrice: 'salePrice',
    sku: 'sku',
    stockQuantity: 'stockQuantity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductVariantScalarFieldEnum = (typeof ProductVariantScalarFieldEnum)[keyof typeof ProductVariantScalarFieldEnum]


  export const MaterialScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type MaterialScalarFieldEnum = (typeof MaterialScalarFieldEnum)[keyof typeof MaterialScalarFieldEnum]


  export const ProductMaterialScalarFieldEnum: {
    productId: 'productId',
    materialId: 'materialId',
    percentage: 'percentage'
  };

  export type ProductMaterialScalarFieldEnum = (typeof ProductMaterialScalarFieldEnum)[keyof typeof ProductMaterialScalarFieldEnum]


  export const ProductTagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug'
  };

  export type ProductTagScalarFieldEnum = (typeof ProductTagScalarFieldEnum)[keyof typeof ProductTagScalarFieldEnum]


  export const ProductTagMapScalarFieldEnum: {
    productId: 'productId',
    tagId: 'tagId'
  };

  export type ProductTagMapScalarFieldEnum = (typeof ProductTagMapScalarFieldEnum)[keyof typeof ProductTagMapScalarFieldEnum]


  export const FlairScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color'
  };

  export type FlairScalarFieldEnum = (typeof FlairScalarFieldEnum)[keyof typeof FlairScalarFieldEnum]


  export const ProductFlairMapScalarFieldEnum: {
    productId: 'productId',
    flairId: 'flairId'
  };

  export type ProductFlairMapScalarFieldEnum = (typeof ProductFlairMapScalarFieldEnum)[keyof typeof ProductFlairMapScalarFieldEnum]


  export const ProductImageScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    imageUrl: 'imageUrl',
    cloudId: 'cloudId',
    alt: 'alt',
    priority: 'priority',
    width: 'width',
    height: 'height',
    isDefault: 'isDefault',
    createdAt: 'createdAt'
  };

  export type ProductImageScalarFieldEnum = (typeof ProductImageScalarFieldEnum)[keyof typeof ProductImageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Karat'
   */
  export type EnumKaratFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Karat'>
    


  /**
   * Reference to a field of type 'Karat[]'
   */
  export type ListEnumKaratFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Karat[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    slug?: StringFilter<"Category"> | string
    metaTitle?: StringNullableFilter<"Category"> | string | null
    metaDescription?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    subcategories?: SubcategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    slug?: SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subcategories?: SubcategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    description?: StringNullableFilter<"Category"> | string | null
    metaTitle?: StringNullableFilter<"Category"> | string | null
    metaDescription?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    subcategories?: SubcategoryListRelationFilter
  }, "id" | "name" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    slug?: SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    slug?: StringWithAggregatesFilter<"Category"> | string
    metaTitle?: StringNullableWithAggregatesFilter<"Category"> | string | null
    metaDescription?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type SubcategoryWhereInput = {
    AND?: SubcategoryWhereInput | SubcategoryWhereInput[]
    OR?: SubcategoryWhereInput[]
    NOT?: SubcategoryWhereInput | SubcategoryWhereInput[]
    id?: IntFilter<"Subcategory"> | number
    name?: StringFilter<"Subcategory"> | string
    slug?: StringFilter<"Subcategory"> | string
    description?: StringNullableFilter<"Subcategory"> | string | null
    categoryId?: IntFilter<"Subcategory"> | number
    createdAt?: DateTimeFilter<"Subcategory"> | Date | string
    updatedAt?: DateTimeFilter<"Subcategory"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    products?: ProductListRelationFilter
  }

  export type SubcategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
  }

  export type SubcategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    categoryId_slug?: SubcategoryCategoryIdSlugCompoundUniqueInput
    AND?: SubcategoryWhereInput | SubcategoryWhereInput[]
    OR?: SubcategoryWhereInput[]
    NOT?: SubcategoryWhereInput | SubcategoryWhereInput[]
    name?: StringFilter<"Subcategory"> | string
    slug?: StringFilter<"Subcategory"> | string
    description?: StringNullableFilter<"Subcategory"> | string | null
    categoryId?: IntFilter<"Subcategory"> | number
    createdAt?: DateTimeFilter<"Subcategory"> | Date | string
    updatedAt?: DateTimeFilter<"Subcategory"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    products?: ProductListRelationFilter
  }, "id" | "categoryId_slug">

  export type SubcategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubcategoryCountOrderByAggregateInput
    _avg?: SubcategoryAvgOrderByAggregateInput
    _max?: SubcategoryMaxOrderByAggregateInput
    _min?: SubcategoryMinOrderByAggregateInput
    _sum?: SubcategorySumOrderByAggregateInput
  }

  export type SubcategoryScalarWhereWithAggregatesInput = {
    AND?: SubcategoryScalarWhereWithAggregatesInput | SubcategoryScalarWhereWithAggregatesInput[]
    OR?: SubcategoryScalarWhereWithAggregatesInput[]
    NOT?: SubcategoryScalarWhereWithAggregatesInput | SubcategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subcategory"> | number
    name?: StringWithAggregatesFilter<"Subcategory"> | string
    slug?: StringWithAggregatesFilter<"Subcategory"> | string
    description?: StringNullableWithAggregatesFilter<"Subcategory"> | string | null
    categoryId?: IntWithAggregatesFilter<"Subcategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Subcategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subcategory"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    gender?: EnumGenderFilter<"Product"> | $Enums.Gender
    description?: StringNullableFilter<"Product"> | string | null
    netWeight?: FloatFilter<"Product"> | number
    grossWeight?: FloatNullableFilter<"Product"> | number | null
    huid?: StringFilter<"Product"> | string
    sku?: StringFilter<"Product"> | string
    karat?: EnumKaratFilter<"Product"> | $Enums.Karat
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    stockQuantity?: IntFilter<"Product"> | number
    isPublished?: BoolFilter<"Product"> | boolean
    publishedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    subcategoryId?: IntFilter<"Product"> | number
    metaTitle?: StringNullableFilter<"Product"> | string | null
    metaDescription?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    subcategory?: XOR<SubcategoryScalarRelationFilter, SubcategoryWhereInput>
    tags?: ProductTagMapListRelationFilter
    flairs?: ProductFlairMapListRelationFilter
    images?: ProductImageListRelationFilter
    variants?: ProductVariantListRelationFilter
    materials?: ProductMaterialListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    gender?: SortOrder
    description?: SortOrderInput | SortOrder
    netWeight?: SortOrder
    grossWeight?: SortOrderInput | SortOrder
    huid?: SortOrder
    sku?: SortOrder
    karat?: SortOrder
    price?: SortOrder
    salePrice?: SortOrderInput | SortOrder
    stockQuantity?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    subcategoryId?: SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subcategory?: SubcategoryOrderByWithRelationInput
    tags?: ProductTagMapOrderByRelationAggregateInput
    flairs?: ProductFlairMapOrderByRelationAggregateInput
    images?: ProductImageOrderByRelationAggregateInput
    variants?: ProductVariantOrderByRelationAggregateInput
    materials?: ProductMaterialOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    huid?: string
    sku?: string
    subcategoryId_slug?: ProductSubcategoryIdSlugCompoundUniqueInput
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    gender?: EnumGenderFilter<"Product"> | $Enums.Gender
    description?: StringNullableFilter<"Product"> | string | null
    netWeight?: FloatFilter<"Product"> | number
    grossWeight?: FloatNullableFilter<"Product"> | number | null
    karat?: EnumKaratFilter<"Product"> | $Enums.Karat
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    stockQuantity?: IntFilter<"Product"> | number
    isPublished?: BoolFilter<"Product"> | boolean
    publishedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    subcategoryId?: IntFilter<"Product"> | number
    metaTitle?: StringNullableFilter<"Product"> | string | null
    metaDescription?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    subcategory?: XOR<SubcategoryScalarRelationFilter, SubcategoryWhereInput>
    tags?: ProductTagMapListRelationFilter
    flairs?: ProductFlairMapListRelationFilter
    images?: ProductImageListRelationFilter
    variants?: ProductVariantListRelationFilter
    materials?: ProductMaterialListRelationFilter
  }, "id" | "huid" | "sku" | "subcategoryId_slug">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    gender?: SortOrder
    description?: SortOrderInput | SortOrder
    netWeight?: SortOrder
    grossWeight?: SortOrderInput | SortOrder
    huid?: SortOrder
    sku?: SortOrder
    karat?: SortOrder
    price?: SortOrder
    salePrice?: SortOrderInput | SortOrder
    stockQuantity?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    subcategoryId?: SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    slug?: StringWithAggregatesFilter<"Product"> | string
    gender?: EnumGenderWithAggregatesFilter<"Product"> | $Enums.Gender
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    netWeight?: FloatWithAggregatesFilter<"Product"> | number
    grossWeight?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    huid?: StringWithAggregatesFilter<"Product"> | string
    sku?: StringWithAggregatesFilter<"Product"> | string
    karat?: EnumKaratWithAggregatesFilter<"Product"> | $Enums.Karat
    price?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalNullableWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    stockQuantity?: IntWithAggregatesFilter<"Product"> | number
    isPublished?: BoolWithAggregatesFilter<"Product"> | boolean
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    subcategoryId?: IntWithAggregatesFilter<"Product"> | number
    metaTitle?: StringNullableWithAggregatesFilter<"Product"> | string | null
    metaDescription?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductVariantWhereInput = {
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    id?: IntFilter<"ProductVariant"> | number
    productId?: IntFilter<"ProductVariant"> | number
    name?: StringFilter<"ProductVariant"> | string
    size?: StringNullableFilter<"ProductVariant"> | string | null
    color?: StringNullableFilter<"ProductVariant"> | string | null
    price?: DecimalFilter<"ProductVariant"> | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalNullableFilter<"ProductVariant"> | Decimal | DecimalJsLike | number | string | null
    sku?: StringFilter<"ProductVariant"> | string
    stockQuantity?: IntFilter<"ProductVariant"> | number
    createdAt?: DateTimeFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVariant"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductVariantOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    size?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    price?: SortOrder
    salePrice?: SortOrderInput | SortOrder
    sku?: SortOrder
    stockQuantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductVariantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sku?: string
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    productId?: IntFilter<"ProductVariant"> | number
    name?: StringFilter<"ProductVariant"> | string
    size?: StringNullableFilter<"ProductVariant"> | string | null
    color?: StringNullableFilter<"ProductVariant"> | string | null
    price?: DecimalFilter<"ProductVariant"> | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalNullableFilter<"ProductVariant"> | Decimal | DecimalJsLike | number | string | null
    stockQuantity?: IntFilter<"ProductVariant"> | number
    createdAt?: DateTimeFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVariant"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "sku">

  export type ProductVariantOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    size?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    price?: SortOrder
    salePrice?: SortOrderInput | SortOrder
    sku?: SortOrder
    stockQuantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductVariantCountOrderByAggregateInput
    _avg?: ProductVariantAvgOrderByAggregateInput
    _max?: ProductVariantMaxOrderByAggregateInput
    _min?: ProductVariantMinOrderByAggregateInput
    _sum?: ProductVariantSumOrderByAggregateInput
  }

  export type ProductVariantScalarWhereWithAggregatesInput = {
    AND?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    OR?: ProductVariantScalarWhereWithAggregatesInput[]
    NOT?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductVariant"> | number
    productId?: IntWithAggregatesFilter<"ProductVariant"> | number
    name?: StringWithAggregatesFilter<"ProductVariant"> | string
    size?: StringNullableWithAggregatesFilter<"ProductVariant"> | string | null
    color?: StringNullableWithAggregatesFilter<"ProductVariant"> | string | null
    price?: DecimalWithAggregatesFilter<"ProductVariant"> | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalNullableWithAggregatesFilter<"ProductVariant"> | Decimal | DecimalJsLike | number | string | null
    sku?: StringWithAggregatesFilter<"ProductVariant"> | string
    stockQuantity?: IntWithAggregatesFilter<"ProductVariant"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductVariant"> | Date | string
  }

  export type MaterialWhereInput = {
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    id?: IntFilter<"Material"> | number
    name?: StringFilter<"Material"> | string
    description?: StringNullableFilter<"Material"> | string | null
    products?: ProductMaterialListRelationFilter
  }

  export type MaterialOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    products?: ProductMaterialOrderByRelationAggregateInput
  }

  export type MaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    description?: StringNullableFilter<"Material"> | string | null
    products?: ProductMaterialListRelationFilter
  }, "id" | "name">

  export type MaterialOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: MaterialCountOrderByAggregateInput
    _avg?: MaterialAvgOrderByAggregateInput
    _max?: MaterialMaxOrderByAggregateInput
    _min?: MaterialMinOrderByAggregateInput
    _sum?: MaterialSumOrderByAggregateInput
  }

  export type MaterialScalarWhereWithAggregatesInput = {
    AND?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    OR?: MaterialScalarWhereWithAggregatesInput[]
    NOT?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Material"> | number
    name?: StringWithAggregatesFilter<"Material"> | string
    description?: StringNullableWithAggregatesFilter<"Material"> | string | null
  }

  export type ProductMaterialWhereInput = {
    AND?: ProductMaterialWhereInput | ProductMaterialWhereInput[]
    OR?: ProductMaterialWhereInput[]
    NOT?: ProductMaterialWhereInput | ProductMaterialWhereInput[]
    productId?: IntFilter<"ProductMaterial"> | number
    materialId?: IntFilter<"ProductMaterial"> | number
    percentage?: FloatNullableFilter<"ProductMaterial"> | number | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }

  export type ProductMaterialOrderByWithRelationInput = {
    productId?: SortOrder
    materialId?: SortOrder
    percentage?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
    material?: MaterialOrderByWithRelationInput
  }

  export type ProductMaterialWhereUniqueInput = Prisma.AtLeast<{
    productId_materialId?: ProductMaterialProductIdMaterialIdCompoundUniqueInput
    AND?: ProductMaterialWhereInput | ProductMaterialWhereInput[]
    OR?: ProductMaterialWhereInput[]
    NOT?: ProductMaterialWhereInput | ProductMaterialWhereInput[]
    productId?: IntFilter<"ProductMaterial"> | number
    materialId?: IntFilter<"ProductMaterial"> | number
    percentage?: FloatNullableFilter<"ProductMaterial"> | number | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }, "productId_materialId">

  export type ProductMaterialOrderByWithAggregationInput = {
    productId?: SortOrder
    materialId?: SortOrder
    percentage?: SortOrderInput | SortOrder
    _count?: ProductMaterialCountOrderByAggregateInput
    _avg?: ProductMaterialAvgOrderByAggregateInput
    _max?: ProductMaterialMaxOrderByAggregateInput
    _min?: ProductMaterialMinOrderByAggregateInput
    _sum?: ProductMaterialSumOrderByAggregateInput
  }

  export type ProductMaterialScalarWhereWithAggregatesInput = {
    AND?: ProductMaterialScalarWhereWithAggregatesInput | ProductMaterialScalarWhereWithAggregatesInput[]
    OR?: ProductMaterialScalarWhereWithAggregatesInput[]
    NOT?: ProductMaterialScalarWhereWithAggregatesInput | ProductMaterialScalarWhereWithAggregatesInput[]
    productId?: IntWithAggregatesFilter<"ProductMaterial"> | number
    materialId?: IntWithAggregatesFilter<"ProductMaterial"> | number
    percentage?: FloatNullableWithAggregatesFilter<"ProductMaterial"> | number | null
  }

  export type ProductTagWhereInput = {
    AND?: ProductTagWhereInput | ProductTagWhereInput[]
    OR?: ProductTagWhereInput[]
    NOT?: ProductTagWhereInput | ProductTagWhereInput[]
    id?: IntFilter<"ProductTag"> | number
    name?: StringFilter<"ProductTag"> | string
    slug?: StringFilter<"ProductTag"> | string
    products?: ProductTagMapListRelationFilter
  }

  export type ProductTagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    products?: ProductTagMapOrderByRelationAggregateInput
  }

  export type ProductTagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    slug?: string
    AND?: ProductTagWhereInput | ProductTagWhereInput[]
    OR?: ProductTagWhereInput[]
    NOT?: ProductTagWhereInput | ProductTagWhereInput[]
    products?: ProductTagMapListRelationFilter
  }, "id" | "name" | "slug">

  export type ProductTagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    _count?: ProductTagCountOrderByAggregateInput
    _avg?: ProductTagAvgOrderByAggregateInput
    _max?: ProductTagMaxOrderByAggregateInput
    _min?: ProductTagMinOrderByAggregateInput
    _sum?: ProductTagSumOrderByAggregateInput
  }

  export type ProductTagScalarWhereWithAggregatesInput = {
    AND?: ProductTagScalarWhereWithAggregatesInput | ProductTagScalarWhereWithAggregatesInput[]
    OR?: ProductTagScalarWhereWithAggregatesInput[]
    NOT?: ProductTagScalarWhereWithAggregatesInput | ProductTagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductTag"> | number
    name?: StringWithAggregatesFilter<"ProductTag"> | string
    slug?: StringWithAggregatesFilter<"ProductTag"> | string
  }

  export type ProductTagMapWhereInput = {
    AND?: ProductTagMapWhereInput | ProductTagMapWhereInput[]
    OR?: ProductTagMapWhereInput[]
    NOT?: ProductTagMapWhereInput | ProductTagMapWhereInput[]
    productId?: IntFilter<"ProductTagMap"> | number
    tagId?: IntFilter<"ProductTagMap"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    tag?: XOR<ProductTagScalarRelationFilter, ProductTagWhereInput>
  }

  export type ProductTagMapOrderByWithRelationInput = {
    productId?: SortOrder
    tagId?: SortOrder
    product?: ProductOrderByWithRelationInput
    tag?: ProductTagOrderByWithRelationInput
  }

  export type ProductTagMapWhereUniqueInput = Prisma.AtLeast<{
    productId_tagId?: ProductTagMapProductIdTagIdCompoundUniqueInput
    AND?: ProductTagMapWhereInput | ProductTagMapWhereInput[]
    OR?: ProductTagMapWhereInput[]
    NOT?: ProductTagMapWhereInput | ProductTagMapWhereInput[]
    productId?: IntFilter<"ProductTagMap"> | number
    tagId?: IntFilter<"ProductTagMap"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    tag?: XOR<ProductTagScalarRelationFilter, ProductTagWhereInput>
  }, "productId_tagId">

  export type ProductTagMapOrderByWithAggregationInput = {
    productId?: SortOrder
    tagId?: SortOrder
    _count?: ProductTagMapCountOrderByAggregateInput
    _avg?: ProductTagMapAvgOrderByAggregateInput
    _max?: ProductTagMapMaxOrderByAggregateInput
    _min?: ProductTagMapMinOrderByAggregateInput
    _sum?: ProductTagMapSumOrderByAggregateInput
  }

  export type ProductTagMapScalarWhereWithAggregatesInput = {
    AND?: ProductTagMapScalarWhereWithAggregatesInput | ProductTagMapScalarWhereWithAggregatesInput[]
    OR?: ProductTagMapScalarWhereWithAggregatesInput[]
    NOT?: ProductTagMapScalarWhereWithAggregatesInput | ProductTagMapScalarWhereWithAggregatesInput[]
    productId?: IntWithAggregatesFilter<"ProductTagMap"> | number
    tagId?: IntWithAggregatesFilter<"ProductTagMap"> | number
  }

  export type FlairWhereInput = {
    AND?: FlairWhereInput | FlairWhereInput[]
    OR?: FlairWhereInput[]
    NOT?: FlairWhereInput | FlairWhereInput[]
    id?: IntFilter<"Flair"> | number
    name?: StringFilter<"Flair"> | string
    color?: StringNullableFilter<"Flair"> | string | null
    products?: ProductFlairMapListRelationFilter
  }

  export type FlairOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    products?: ProductFlairMapOrderByRelationAggregateInput
  }

  export type FlairWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: FlairWhereInput | FlairWhereInput[]
    OR?: FlairWhereInput[]
    NOT?: FlairWhereInput | FlairWhereInput[]
    color?: StringNullableFilter<"Flair"> | string | null
    products?: ProductFlairMapListRelationFilter
  }, "id" | "name">

  export type FlairOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    _count?: FlairCountOrderByAggregateInput
    _avg?: FlairAvgOrderByAggregateInput
    _max?: FlairMaxOrderByAggregateInput
    _min?: FlairMinOrderByAggregateInput
    _sum?: FlairSumOrderByAggregateInput
  }

  export type FlairScalarWhereWithAggregatesInput = {
    AND?: FlairScalarWhereWithAggregatesInput | FlairScalarWhereWithAggregatesInput[]
    OR?: FlairScalarWhereWithAggregatesInput[]
    NOT?: FlairScalarWhereWithAggregatesInput | FlairScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Flair"> | number
    name?: StringWithAggregatesFilter<"Flair"> | string
    color?: StringNullableWithAggregatesFilter<"Flair"> | string | null
  }

  export type ProductFlairMapWhereInput = {
    AND?: ProductFlairMapWhereInput | ProductFlairMapWhereInput[]
    OR?: ProductFlairMapWhereInput[]
    NOT?: ProductFlairMapWhereInput | ProductFlairMapWhereInput[]
    productId?: IntFilter<"ProductFlairMap"> | number
    flairId?: IntFilter<"ProductFlairMap"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    flair?: XOR<FlairScalarRelationFilter, FlairWhereInput>
  }

  export type ProductFlairMapOrderByWithRelationInput = {
    productId?: SortOrder
    flairId?: SortOrder
    product?: ProductOrderByWithRelationInput
    flair?: FlairOrderByWithRelationInput
  }

  export type ProductFlairMapWhereUniqueInput = Prisma.AtLeast<{
    productId_flairId?: ProductFlairMapProductIdFlairIdCompoundUniqueInput
    AND?: ProductFlairMapWhereInput | ProductFlairMapWhereInput[]
    OR?: ProductFlairMapWhereInput[]
    NOT?: ProductFlairMapWhereInput | ProductFlairMapWhereInput[]
    productId?: IntFilter<"ProductFlairMap"> | number
    flairId?: IntFilter<"ProductFlairMap"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    flair?: XOR<FlairScalarRelationFilter, FlairWhereInput>
  }, "productId_flairId">

  export type ProductFlairMapOrderByWithAggregationInput = {
    productId?: SortOrder
    flairId?: SortOrder
    _count?: ProductFlairMapCountOrderByAggregateInput
    _avg?: ProductFlairMapAvgOrderByAggregateInput
    _max?: ProductFlairMapMaxOrderByAggregateInput
    _min?: ProductFlairMapMinOrderByAggregateInput
    _sum?: ProductFlairMapSumOrderByAggregateInput
  }

  export type ProductFlairMapScalarWhereWithAggregatesInput = {
    AND?: ProductFlairMapScalarWhereWithAggregatesInput | ProductFlairMapScalarWhereWithAggregatesInput[]
    OR?: ProductFlairMapScalarWhereWithAggregatesInput[]
    NOT?: ProductFlairMapScalarWhereWithAggregatesInput | ProductFlairMapScalarWhereWithAggregatesInput[]
    productId?: IntWithAggregatesFilter<"ProductFlairMap"> | number
    flairId?: IntWithAggregatesFilter<"ProductFlairMap"> | number
  }

  export type ProductImageWhereInput = {
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    id?: IntFilter<"ProductImage"> | number
    productId?: IntFilter<"ProductImage"> | number
    imageUrl?: StringFilter<"ProductImage"> | string
    cloudId?: StringNullableFilter<"ProductImage"> | string | null
    alt?: StringNullableFilter<"ProductImage"> | string | null
    priority?: IntFilter<"ProductImage"> | number
    width?: IntNullableFilter<"ProductImage"> | number | null
    height?: IntNullableFilter<"ProductImage"> | number | null
    isDefault?: BoolFilter<"ProductImage"> | boolean
    createdAt?: DateTimeFilter<"ProductImage"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductImageOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    imageUrl?: SortOrder
    cloudId?: SortOrderInput | SortOrder
    alt?: SortOrderInput | SortOrder
    priority?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    productId?: IntFilter<"ProductImage"> | number
    imageUrl?: StringFilter<"ProductImage"> | string
    cloudId?: StringNullableFilter<"ProductImage"> | string | null
    alt?: StringNullableFilter<"ProductImage"> | string | null
    priority?: IntFilter<"ProductImage"> | number
    width?: IntNullableFilter<"ProductImage"> | number | null
    height?: IntNullableFilter<"ProductImage"> | number | null
    isDefault?: BoolFilter<"ProductImage"> | boolean
    createdAt?: DateTimeFilter<"ProductImage"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductImageOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    imageUrl?: SortOrder
    cloudId?: SortOrderInput | SortOrder
    alt?: SortOrderInput | SortOrder
    priority?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    _count?: ProductImageCountOrderByAggregateInput
    _avg?: ProductImageAvgOrderByAggregateInput
    _max?: ProductImageMaxOrderByAggregateInput
    _min?: ProductImageMinOrderByAggregateInput
    _sum?: ProductImageSumOrderByAggregateInput
  }

  export type ProductImageScalarWhereWithAggregatesInput = {
    AND?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    OR?: ProductImageScalarWhereWithAggregatesInput[]
    NOT?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductImage"> | number
    productId?: IntWithAggregatesFilter<"ProductImage"> | number
    imageUrl?: StringWithAggregatesFilter<"ProductImage"> | string
    cloudId?: StringNullableWithAggregatesFilter<"ProductImage"> | string | null
    alt?: StringNullableWithAggregatesFilter<"ProductImage"> | string | null
    priority?: IntWithAggregatesFilter<"ProductImage"> | number
    width?: IntNullableWithAggregatesFilter<"ProductImage"> | number | null
    height?: IntNullableWithAggregatesFilter<"ProductImage"> | number | null
    isDefault?: BoolWithAggregatesFilter<"ProductImage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ProductImage"> | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    description?: string | null
    slug: string
    metaTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategories?: SubcategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    slug: string
    metaTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategories?: SubcategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategories?: SubcategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategories?: SubcategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    slug: string
    metaTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubcategoryCreateInput = {
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutSubcategoriesInput
    products?: ProductCreateNestedManyWithoutSubcategoryInput
  }

  export type SubcategoryUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutSubcategoryInput
  }

  export type SubcategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutSubcategoriesNestedInput
    products?: ProductUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubcategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubcategoryCreateManyInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubcategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubcategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    name: string
    slug: string
    gender: $Enums.Gender
    description?: string | null
    netWeight: number
    grossWeight?: number | null
    huid: string
    sku: string
    karat: $Enums.Karat
    price: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string | null
    stockQuantity?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    metaTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategory: SubcategoryCreateNestedOneWithoutProductsInput
    tags?: ProductTagMapCreateNestedManyWithoutProductInput
    flairs?: ProductFlairMapCreateNestedManyWithoutProductInput
    images?: ProductImageCreateNestedManyWithoutProductInput
    variants?: ProductVariantCreateNestedManyWithoutProductInput
    materials?: ProductMaterialCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    gender: $Enums.Gender
    description?: string | null
    netWeight: number
    grossWeight?: number | null
    huid: string
    sku: string
    karat: $Enums.Karat
    price: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string | null
    stockQuantity?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    subcategoryId: number
    metaTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: ProductTagMapUncheckedCreateNestedManyWithoutProductInput
    flairs?: ProductFlairMapUncheckedCreateNestedManyWithoutProductInput
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
    materials?: ProductMaterialUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    description?: NullableStringFieldUpdateOperationsInput | string | null
    netWeight?: FloatFieldUpdateOperationsInput | number
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    huid?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    karat?: EnumKaratFieldUpdateOperationsInput | $Enums.Karat
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategory?: SubcategoryUpdateOneRequiredWithoutProductsNestedInput
    tags?: ProductTagMapUpdateManyWithoutProductNestedInput
    flairs?: ProductFlairMapUpdateManyWithoutProductNestedInput
    images?: ProductImageUpdateManyWithoutProductNestedInput
    variants?: ProductVariantUpdateManyWithoutProductNestedInput
    materials?: ProductMaterialUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    description?: NullableStringFieldUpdateOperationsInput | string | null
    netWeight?: FloatFieldUpdateOperationsInput | number
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    huid?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    karat?: EnumKaratFieldUpdateOperationsInput | $Enums.Karat
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subcategoryId?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ProductTagMapUncheckedUpdateManyWithoutProductNestedInput
    flairs?: ProductFlairMapUncheckedUpdateManyWithoutProductNestedInput
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
    materials?: ProductMaterialUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    slug: string
    gender: $Enums.Gender
    description?: string | null
    netWeight: number
    grossWeight?: number | null
    huid: string
    sku: string
    karat: $Enums.Karat
    price: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string | null
    stockQuantity?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    subcategoryId: number
    metaTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    description?: NullableStringFieldUpdateOperationsInput | string | null
    netWeight?: FloatFieldUpdateOperationsInput | number
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    huid?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    karat?: EnumKaratFieldUpdateOperationsInput | $Enums.Karat
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    description?: NullableStringFieldUpdateOperationsInput | string | null
    netWeight?: FloatFieldUpdateOperationsInput | number
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    huid?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    karat?: EnumKaratFieldUpdateOperationsInput | $Enums.Karat
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subcategoryId?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantCreateInput = {
    name: string
    size?: string | null
    color?: string | null
    price: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string | null
    sku: string
    stockQuantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutVariantsInput
  }

  export type ProductVariantUncheckedCreateInput = {
    id?: number
    productId: number
    name: string
    size?: string | null
    color?: string | null
    price: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string | null
    sku: string
    stockQuantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductVariantUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sku?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
  }

  export type ProductVariantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sku?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantCreateManyInput = {
    id?: number
    productId: number
    name: string
    size?: string | null
    color?: string | null
    price: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string | null
    sku: string
    stockQuantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductVariantUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sku?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sku?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialCreateInput = {
    name: string
    description?: string | null
    products?: ProductMaterialCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    products?: ProductMaterialUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductMaterialUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductMaterialUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialCreateManyInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type MaterialUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaterialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductMaterialCreateInput = {
    percentage?: number | null
    product: ProductCreateNestedOneWithoutMaterialsInput
    material: MaterialCreateNestedOneWithoutProductsInput
  }

  export type ProductMaterialUncheckedCreateInput = {
    productId: number
    materialId: number
    percentage?: number | null
  }

  export type ProductMaterialUpdateInput = {
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    product?: ProductUpdateOneRequiredWithoutMaterialsNestedInput
    material?: MaterialUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductMaterialUncheckedUpdateInput = {
    productId?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductMaterialCreateManyInput = {
    productId: number
    materialId: number
    percentage?: number | null
  }

  export type ProductMaterialUpdateManyMutationInput = {
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductMaterialUncheckedUpdateManyInput = {
    productId?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductTagCreateInput = {
    name: string
    slug: string
    products?: ProductTagMapCreateNestedManyWithoutTagInput
  }

  export type ProductTagUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    products?: ProductTagMapUncheckedCreateNestedManyWithoutTagInput
  }

  export type ProductTagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    products?: ProductTagMapUpdateManyWithoutTagNestedInput
  }

  export type ProductTagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    products?: ProductTagMapUncheckedUpdateManyWithoutTagNestedInput
  }

  export type ProductTagCreateManyInput = {
    id?: number
    name: string
    slug: string
  }

  export type ProductTagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type ProductTagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type ProductTagMapCreateInput = {
    product: ProductCreateNestedOneWithoutTagsInput
    tag: ProductTagCreateNestedOneWithoutProductsInput
  }

  export type ProductTagMapUncheckedCreateInput = {
    productId: number
    tagId: number
  }

  export type ProductTagMapUpdateInput = {
    product?: ProductUpdateOneRequiredWithoutTagsNestedInput
    tag?: ProductTagUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductTagMapUncheckedUpdateInput = {
    productId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductTagMapCreateManyInput = {
    productId: number
    tagId: number
  }

  export type ProductTagMapUpdateManyMutationInput = {

  }

  export type ProductTagMapUncheckedUpdateManyInput = {
    productId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type FlairCreateInput = {
    name: string
    color?: string | null
    products?: ProductFlairMapCreateNestedManyWithoutFlairInput
  }

  export type FlairUncheckedCreateInput = {
    id?: number
    name: string
    color?: string | null
    products?: ProductFlairMapUncheckedCreateNestedManyWithoutFlairInput
  }

  export type FlairUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductFlairMapUpdateManyWithoutFlairNestedInput
  }

  export type FlairUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductFlairMapUncheckedUpdateManyWithoutFlairNestedInput
  }

  export type FlairCreateManyInput = {
    id?: number
    name: string
    color?: string | null
  }

  export type FlairUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FlairUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductFlairMapCreateInput = {
    product: ProductCreateNestedOneWithoutFlairsInput
    flair: FlairCreateNestedOneWithoutProductsInput
  }

  export type ProductFlairMapUncheckedCreateInput = {
    productId: number
    flairId: number
  }

  export type ProductFlairMapUpdateInput = {
    product?: ProductUpdateOneRequiredWithoutFlairsNestedInput
    flair?: FlairUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductFlairMapUncheckedUpdateInput = {
    productId?: IntFieldUpdateOperationsInput | number
    flairId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductFlairMapCreateManyInput = {
    productId: number
    flairId: number
  }

  export type ProductFlairMapUpdateManyMutationInput = {

  }

  export type ProductFlairMapUncheckedUpdateManyInput = {
    productId?: IntFieldUpdateOperationsInput | number
    flairId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductImageCreateInput = {
    imageUrl: string
    cloudId?: string | null
    alt?: string | null
    priority?: number
    width?: number | null
    height?: number | null
    isDefault?: boolean
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutImagesInput
  }

  export type ProductImageUncheckedCreateInput = {
    id?: number
    productId: number
    imageUrl: string
    cloudId?: string | null
    alt?: string | null
    priority?: number
    width?: number | null
    height?: number | null
    isDefault?: boolean
    createdAt?: Date | string
  }

  export type ProductImageUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    cloudId?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ProductImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    cloudId?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageCreateManyInput = {
    id?: number
    productId: number
    imageUrl: string
    cloudId?: string | null
    alt?: string | null
    priority?: number
    width?: number | null
    height?: number | null
    isDefault?: boolean
    createdAt?: Date | string
  }

  export type ProductImageUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    cloudId?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    cloudId?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SubcategoryListRelationFilter = {
    every?: SubcategoryWhereInput
    some?: SubcategoryWhereInput
    none?: SubcategoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SubcategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
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

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubcategoryCategoryIdSlugCompoundUniqueInput = {
    categoryId: number
    slug: string
  }

  export type SubcategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubcategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type SubcategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubcategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubcategorySumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumKaratFilter<$PrismaModel = never> = {
    equals?: $Enums.Karat | EnumKaratFieldRefInput<$PrismaModel>
    in?: $Enums.Karat[] | ListEnumKaratFieldRefInput<$PrismaModel>
    notIn?: $Enums.Karat[] | ListEnumKaratFieldRefInput<$PrismaModel>
    not?: NestedEnumKaratFilter<$PrismaModel> | $Enums.Karat
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SubcategoryScalarRelationFilter = {
    is?: SubcategoryWhereInput
    isNot?: SubcategoryWhereInput
  }

  export type ProductTagMapListRelationFilter = {
    every?: ProductTagMapWhereInput
    some?: ProductTagMapWhereInput
    none?: ProductTagMapWhereInput
  }

  export type ProductFlairMapListRelationFilter = {
    every?: ProductFlairMapWhereInput
    some?: ProductFlairMapWhereInput
    none?: ProductFlairMapWhereInput
  }

  export type ProductImageListRelationFilter = {
    every?: ProductImageWhereInput
    some?: ProductImageWhereInput
    none?: ProductImageWhereInput
  }

  export type ProductVariantListRelationFilter = {
    every?: ProductVariantWhereInput
    some?: ProductVariantWhereInput
    none?: ProductVariantWhereInput
  }

  export type ProductMaterialListRelationFilter = {
    every?: ProductMaterialWhereInput
    some?: ProductMaterialWhereInput
    none?: ProductMaterialWhereInput
  }

  export type ProductTagMapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductFlairMapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductVariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductMaterialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductSubcategoryIdSlugCompoundUniqueInput = {
    subcategoryId: number
    slug: string
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    gender?: SortOrder
    description?: SortOrder
    netWeight?: SortOrder
    grossWeight?: SortOrder
    huid?: SortOrder
    sku?: SortOrder
    karat?: SortOrder
    price?: SortOrder
    salePrice?: SortOrder
    stockQuantity?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    subcategoryId?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    netWeight?: SortOrder
    grossWeight?: SortOrder
    price?: SortOrder
    salePrice?: SortOrder
    stockQuantity?: SortOrder
    subcategoryId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    gender?: SortOrder
    description?: SortOrder
    netWeight?: SortOrder
    grossWeight?: SortOrder
    huid?: SortOrder
    sku?: SortOrder
    karat?: SortOrder
    price?: SortOrder
    salePrice?: SortOrder
    stockQuantity?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    subcategoryId?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    gender?: SortOrder
    description?: SortOrder
    netWeight?: SortOrder
    grossWeight?: SortOrder
    huid?: SortOrder
    sku?: SortOrder
    karat?: SortOrder
    price?: SortOrder
    salePrice?: SortOrder
    stockQuantity?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    subcategoryId?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    netWeight?: SortOrder
    grossWeight?: SortOrder
    price?: SortOrder
    salePrice?: SortOrder
    stockQuantity?: SortOrder
    subcategoryId?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumKaratWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Karat | EnumKaratFieldRefInput<$PrismaModel>
    in?: $Enums.Karat[] | ListEnumKaratFieldRefInput<$PrismaModel>
    notIn?: $Enums.Karat[] | ListEnumKaratFieldRefInput<$PrismaModel>
    not?: NestedEnumKaratWithAggregatesFilter<$PrismaModel> | $Enums.Karat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKaratFilter<$PrismaModel>
    _max?: NestedEnumKaratFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductVariantCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    size?: SortOrder
    color?: SortOrder
    price?: SortOrder
    salePrice?: SortOrder
    sku?: SortOrder
    stockQuantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariantAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    salePrice?: SortOrder
    stockQuantity?: SortOrder
  }

  export type ProductVariantMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    size?: SortOrder
    color?: SortOrder
    price?: SortOrder
    salePrice?: SortOrder
    sku?: SortOrder
    stockQuantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariantMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    size?: SortOrder
    color?: SortOrder
    price?: SortOrder
    salePrice?: SortOrder
    sku?: SortOrder
    stockQuantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariantSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    salePrice?: SortOrder
    stockQuantity?: SortOrder
  }

  export type MaterialCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type MaterialAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type MaterialMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type MaterialSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MaterialScalarRelationFilter = {
    is?: MaterialWhereInput
    isNot?: MaterialWhereInput
  }

  export type ProductMaterialProductIdMaterialIdCompoundUniqueInput = {
    productId: number
    materialId: number
  }

  export type ProductMaterialCountOrderByAggregateInput = {
    productId?: SortOrder
    materialId?: SortOrder
    percentage?: SortOrder
  }

  export type ProductMaterialAvgOrderByAggregateInput = {
    productId?: SortOrder
    materialId?: SortOrder
    percentage?: SortOrder
  }

  export type ProductMaterialMaxOrderByAggregateInput = {
    productId?: SortOrder
    materialId?: SortOrder
    percentage?: SortOrder
  }

  export type ProductMaterialMinOrderByAggregateInput = {
    productId?: SortOrder
    materialId?: SortOrder
    percentage?: SortOrder
  }

  export type ProductMaterialSumOrderByAggregateInput = {
    productId?: SortOrder
    materialId?: SortOrder
    percentage?: SortOrder
  }

  export type ProductTagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type ProductTagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductTagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type ProductTagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type ProductTagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductTagScalarRelationFilter = {
    is?: ProductTagWhereInput
    isNot?: ProductTagWhereInput
  }

  export type ProductTagMapProductIdTagIdCompoundUniqueInput = {
    productId: number
    tagId: number
  }

  export type ProductTagMapCountOrderByAggregateInput = {
    productId?: SortOrder
    tagId?: SortOrder
  }

  export type ProductTagMapAvgOrderByAggregateInput = {
    productId?: SortOrder
    tagId?: SortOrder
  }

  export type ProductTagMapMaxOrderByAggregateInput = {
    productId?: SortOrder
    tagId?: SortOrder
  }

  export type ProductTagMapMinOrderByAggregateInput = {
    productId?: SortOrder
    tagId?: SortOrder
  }

  export type ProductTagMapSumOrderByAggregateInput = {
    productId?: SortOrder
    tagId?: SortOrder
  }

  export type FlairCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
  }

  export type FlairAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FlairMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
  }

  export type FlairMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
  }

  export type FlairSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FlairScalarRelationFilter = {
    is?: FlairWhereInput
    isNot?: FlairWhereInput
  }

  export type ProductFlairMapProductIdFlairIdCompoundUniqueInput = {
    productId: number
    flairId: number
  }

  export type ProductFlairMapCountOrderByAggregateInput = {
    productId?: SortOrder
    flairId?: SortOrder
  }

  export type ProductFlairMapAvgOrderByAggregateInput = {
    productId?: SortOrder
    flairId?: SortOrder
  }

  export type ProductFlairMapMaxOrderByAggregateInput = {
    productId?: SortOrder
    flairId?: SortOrder
  }

  export type ProductFlairMapMinOrderByAggregateInput = {
    productId?: SortOrder
    flairId?: SortOrder
  }

  export type ProductFlairMapSumOrderByAggregateInput = {
    productId?: SortOrder
    flairId?: SortOrder
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

  export type ProductImageCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    imageUrl?: SortOrder
    cloudId?: SortOrder
    alt?: SortOrder
    priority?: SortOrder
    width?: SortOrder
    height?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductImageAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    priority?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type ProductImageMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    imageUrl?: SortOrder
    cloudId?: SortOrder
    alt?: SortOrder
    priority?: SortOrder
    width?: SortOrder
    height?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductImageMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    imageUrl?: SortOrder
    cloudId?: SortOrder
    alt?: SortOrder
    priority?: SortOrder
    width?: SortOrder
    height?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductImageSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    priority?: SortOrder
    width?: SortOrder
    height?: SortOrder
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

  export type SubcategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubcategoryCreateWithoutCategoryInput, SubcategoryUncheckedCreateWithoutCategoryInput> | SubcategoryCreateWithoutCategoryInput[] | SubcategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubcategoryCreateOrConnectWithoutCategoryInput | SubcategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SubcategoryCreateManyCategoryInputEnvelope
    connect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
  }

  export type SubcategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubcategoryCreateWithoutCategoryInput, SubcategoryUncheckedCreateWithoutCategoryInput> | SubcategoryCreateWithoutCategoryInput[] | SubcategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubcategoryCreateOrConnectWithoutCategoryInput | SubcategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SubcategoryCreateManyCategoryInputEnvelope
    connect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
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

  export type SubcategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubcategoryCreateWithoutCategoryInput, SubcategoryUncheckedCreateWithoutCategoryInput> | SubcategoryCreateWithoutCategoryInput[] | SubcategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubcategoryCreateOrConnectWithoutCategoryInput | SubcategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SubcategoryUpsertWithWhereUniqueWithoutCategoryInput | SubcategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubcategoryCreateManyCategoryInputEnvelope
    set?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    disconnect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    delete?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    connect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    update?: SubcategoryUpdateWithWhereUniqueWithoutCategoryInput | SubcategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubcategoryUpdateManyWithWhereWithoutCategoryInput | SubcategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubcategoryScalarWhereInput | SubcategoryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubcategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubcategoryCreateWithoutCategoryInput, SubcategoryUncheckedCreateWithoutCategoryInput> | SubcategoryCreateWithoutCategoryInput[] | SubcategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubcategoryCreateOrConnectWithoutCategoryInput | SubcategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SubcategoryUpsertWithWhereUniqueWithoutCategoryInput | SubcategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubcategoryCreateManyCategoryInputEnvelope
    set?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    disconnect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    delete?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    connect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    update?: SubcategoryUpdateWithWhereUniqueWithoutCategoryInput | SubcategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubcategoryUpdateManyWithWhereWithoutCategoryInput | SubcategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubcategoryScalarWhereInput | SubcategoryScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutSubcategoriesInput = {
    create?: XOR<CategoryCreateWithoutSubcategoriesInput, CategoryUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubcategoriesInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutSubcategoryInput = {
    create?: XOR<ProductCreateWithoutSubcategoryInput, ProductUncheckedCreateWithoutSubcategoryInput> | ProductCreateWithoutSubcategoryInput[] | ProductUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSubcategoryInput | ProductCreateOrConnectWithoutSubcategoryInput[]
    createMany?: ProductCreateManySubcategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutSubcategoryInput = {
    create?: XOR<ProductCreateWithoutSubcategoryInput, ProductUncheckedCreateWithoutSubcategoryInput> | ProductCreateWithoutSubcategoryInput[] | ProductUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSubcategoryInput | ProductCreateOrConnectWithoutSubcategoryInput[]
    createMany?: ProductCreateManySubcategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutSubcategoriesNestedInput = {
    create?: XOR<CategoryCreateWithoutSubcategoriesInput, CategoryUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubcategoriesInput
    upsert?: CategoryUpsertWithoutSubcategoriesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSubcategoriesInput, CategoryUpdateWithoutSubcategoriesInput>, CategoryUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type ProductUpdateManyWithoutSubcategoryNestedInput = {
    create?: XOR<ProductCreateWithoutSubcategoryInput, ProductUncheckedCreateWithoutSubcategoryInput> | ProductCreateWithoutSubcategoryInput[] | ProductUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSubcategoryInput | ProductCreateOrConnectWithoutSubcategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSubcategoryInput | ProductUpsertWithWhereUniqueWithoutSubcategoryInput[]
    createMany?: ProductCreateManySubcategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSubcategoryInput | ProductUpdateWithWhereUniqueWithoutSubcategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSubcategoryInput | ProductUpdateManyWithWhereWithoutSubcategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutSubcategoryNestedInput = {
    create?: XOR<ProductCreateWithoutSubcategoryInput, ProductUncheckedCreateWithoutSubcategoryInput> | ProductCreateWithoutSubcategoryInput[] | ProductUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSubcategoryInput | ProductCreateOrConnectWithoutSubcategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSubcategoryInput | ProductUpsertWithWhereUniqueWithoutSubcategoryInput[]
    createMany?: ProductCreateManySubcategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSubcategoryInput | ProductUpdateWithWhereUniqueWithoutSubcategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSubcategoryInput | ProductUpdateManyWithWhereWithoutSubcategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type SubcategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<SubcategoryCreateWithoutProductsInput, SubcategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SubcategoryCreateOrConnectWithoutProductsInput
    connect?: SubcategoryWhereUniqueInput
  }

  export type ProductTagMapCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductTagMapCreateWithoutProductInput, ProductTagMapUncheckedCreateWithoutProductInput> | ProductTagMapCreateWithoutProductInput[] | ProductTagMapUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductTagMapCreateOrConnectWithoutProductInput | ProductTagMapCreateOrConnectWithoutProductInput[]
    createMany?: ProductTagMapCreateManyProductInputEnvelope
    connect?: ProductTagMapWhereUniqueInput | ProductTagMapWhereUniqueInput[]
  }

  export type ProductFlairMapCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductFlairMapCreateWithoutProductInput, ProductFlairMapUncheckedCreateWithoutProductInput> | ProductFlairMapCreateWithoutProductInput[] | ProductFlairMapUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductFlairMapCreateOrConnectWithoutProductInput | ProductFlairMapCreateOrConnectWithoutProductInput[]
    createMany?: ProductFlairMapCreateManyProductInputEnvelope
    connect?: ProductFlairMapWhereUniqueInput | ProductFlairMapWhereUniqueInput[]
  }

  export type ProductImageCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type ProductVariantCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
  }

  export type ProductMaterialCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductMaterialCreateWithoutProductInput, ProductMaterialUncheckedCreateWithoutProductInput> | ProductMaterialCreateWithoutProductInput[] | ProductMaterialUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductMaterialCreateOrConnectWithoutProductInput | ProductMaterialCreateOrConnectWithoutProductInput[]
    createMany?: ProductMaterialCreateManyProductInputEnvelope
    connect?: ProductMaterialWhereUniqueInput | ProductMaterialWhereUniqueInput[]
  }

  export type ProductTagMapUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductTagMapCreateWithoutProductInput, ProductTagMapUncheckedCreateWithoutProductInput> | ProductTagMapCreateWithoutProductInput[] | ProductTagMapUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductTagMapCreateOrConnectWithoutProductInput | ProductTagMapCreateOrConnectWithoutProductInput[]
    createMany?: ProductTagMapCreateManyProductInputEnvelope
    connect?: ProductTagMapWhereUniqueInput | ProductTagMapWhereUniqueInput[]
  }

  export type ProductFlairMapUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductFlairMapCreateWithoutProductInput, ProductFlairMapUncheckedCreateWithoutProductInput> | ProductFlairMapCreateWithoutProductInput[] | ProductFlairMapUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductFlairMapCreateOrConnectWithoutProductInput | ProductFlairMapCreateOrConnectWithoutProductInput[]
    createMany?: ProductFlairMapCreateManyProductInputEnvelope
    connect?: ProductFlairMapWhereUniqueInput | ProductFlairMapWhereUniqueInput[]
  }

  export type ProductImageUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type ProductVariantUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
  }

  export type ProductMaterialUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductMaterialCreateWithoutProductInput, ProductMaterialUncheckedCreateWithoutProductInput> | ProductMaterialCreateWithoutProductInput[] | ProductMaterialUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductMaterialCreateOrConnectWithoutProductInput | ProductMaterialCreateOrConnectWithoutProductInput[]
    createMany?: ProductMaterialCreateManyProductInputEnvelope
    connect?: ProductMaterialWhereUniqueInput | ProductMaterialWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumKaratFieldUpdateOperationsInput = {
    set?: $Enums.Karat
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SubcategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<SubcategoryCreateWithoutProductsInput, SubcategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SubcategoryCreateOrConnectWithoutProductsInput
    upsert?: SubcategoryUpsertWithoutProductsInput
    connect?: SubcategoryWhereUniqueInput
    update?: XOR<XOR<SubcategoryUpdateToOneWithWhereWithoutProductsInput, SubcategoryUpdateWithoutProductsInput>, SubcategoryUncheckedUpdateWithoutProductsInput>
  }

  export type ProductTagMapUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductTagMapCreateWithoutProductInput, ProductTagMapUncheckedCreateWithoutProductInput> | ProductTagMapCreateWithoutProductInput[] | ProductTagMapUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductTagMapCreateOrConnectWithoutProductInput | ProductTagMapCreateOrConnectWithoutProductInput[]
    upsert?: ProductTagMapUpsertWithWhereUniqueWithoutProductInput | ProductTagMapUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductTagMapCreateManyProductInputEnvelope
    set?: ProductTagMapWhereUniqueInput | ProductTagMapWhereUniqueInput[]
    disconnect?: ProductTagMapWhereUniqueInput | ProductTagMapWhereUniqueInput[]
    delete?: ProductTagMapWhereUniqueInput | ProductTagMapWhereUniqueInput[]
    connect?: ProductTagMapWhereUniqueInput | ProductTagMapWhereUniqueInput[]
    update?: ProductTagMapUpdateWithWhereUniqueWithoutProductInput | ProductTagMapUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductTagMapUpdateManyWithWhereWithoutProductInput | ProductTagMapUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductTagMapScalarWhereInput | ProductTagMapScalarWhereInput[]
  }

  export type ProductFlairMapUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductFlairMapCreateWithoutProductInput, ProductFlairMapUncheckedCreateWithoutProductInput> | ProductFlairMapCreateWithoutProductInput[] | ProductFlairMapUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductFlairMapCreateOrConnectWithoutProductInput | ProductFlairMapCreateOrConnectWithoutProductInput[]
    upsert?: ProductFlairMapUpsertWithWhereUniqueWithoutProductInput | ProductFlairMapUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductFlairMapCreateManyProductInputEnvelope
    set?: ProductFlairMapWhereUniqueInput | ProductFlairMapWhereUniqueInput[]
    disconnect?: ProductFlairMapWhereUniqueInput | ProductFlairMapWhereUniqueInput[]
    delete?: ProductFlairMapWhereUniqueInput | ProductFlairMapWhereUniqueInput[]
    connect?: ProductFlairMapWhereUniqueInput | ProductFlairMapWhereUniqueInput[]
    update?: ProductFlairMapUpdateWithWhereUniqueWithoutProductInput | ProductFlairMapUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductFlairMapUpdateManyWithWhereWithoutProductInput | ProductFlairMapUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductFlairMapScalarWhereInput | ProductFlairMapScalarWhereInput[]
  }

  export type ProductImageUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutProductInput | ProductImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutProductInput | ProductImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutProductInput | ProductImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type ProductVariantUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariantUpsertWithWhereUniqueWithoutProductInput | ProductVariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    set?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    disconnect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    delete?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    update?: ProductVariantUpdateWithWhereUniqueWithoutProductInput | ProductVariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariantUpdateManyWithWhereWithoutProductInput | ProductVariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
  }

  export type ProductMaterialUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductMaterialCreateWithoutProductInput, ProductMaterialUncheckedCreateWithoutProductInput> | ProductMaterialCreateWithoutProductInput[] | ProductMaterialUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductMaterialCreateOrConnectWithoutProductInput | ProductMaterialCreateOrConnectWithoutProductInput[]
    upsert?: ProductMaterialUpsertWithWhereUniqueWithoutProductInput | ProductMaterialUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductMaterialCreateManyProductInputEnvelope
    set?: ProductMaterialWhereUniqueInput | ProductMaterialWhereUniqueInput[]
    disconnect?: ProductMaterialWhereUniqueInput | ProductMaterialWhereUniqueInput[]
    delete?: ProductMaterialWhereUniqueInput | ProductMaterialWhereUniqueInput[]
    connect?: ProductMaterialWhereUniqueInput | ProductMaterialWhereUniqueInput[]
    update?: ProductMaterialUpdateWithWhereUniqueWithoutProductInput | ProductMaterialUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductMaterialUpdateManyWithWhereWithoutProductInput | ProductMaterialUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductMaterialScalarWhereInput | ProductMaterialScalarWhereInput[]
  }

  export type ProductTagMapUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductTagMapCreateWithoutProductInput, ProductTagMapUncheckedCreateWithoutProductInput> | ProductTagMapCreateWithoutProductInput[] | ProductTagMapUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductTagMapCreateOrConnectWithoutProductInput | ProductTagMapCreateOrConnectWithoutProductInput[]
    upsert?: ProductTagMapUpsertWithWhereUniqueWithoutProductInput | ProductTagMapUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductTagMapCreateManyProductInputEnvelope
    set?: ProductTagMapWhereUniqueInput | ProductTagMapWhereUniqueInput[]
    disconnect?: ProductTagMapWhereUniqueInput | ProductTagMapWhereUniqueInput[]
    delete?: ProductTagMapWhereUniqueInput | ProductTagMapWhereUniqueInput[]
    connect?: ProductTagMapWhereUniqueInput | ProductTagMapWhereUniqueInput[]
    update?: ProductTagMapUpdateWithWhereUniqueWithoutProductInput | ProductTagMapUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductTagMapUpdateManyWithWhereWithoutProductInput | ProductTagMapUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductTagMapScalarWhereInput | ProductTagMapScalarWhereInput[]
  }

  export type ProductFlairMapUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductFlairMapCreateWithoutProductInput, ProductFlairMapUncheckedCreateWithoutProductInput> | ProductFlairMapCreateWithoutProductInput[] | ProductFlairMapUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductFlairMapCreateOrConnectWithoutProductInput | ProductFlairMapCreateOrConnectWithoutProductInput[]
    upsert?: ProductFlairMapUpsertWithWhereUniqueWithoutProductInput | ProductFlairMapUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductFlairMapCreateManyProductInputEnvelope
    set?: ProductFlairMapWhereUniqueInput | ProductFlairMapWhereUniqueInput[]
    disconnect?: ProductFlairMapWhereUniqueInput | ProductFlairMapWhereUniqueInput[]
    delete?: ProductFlairMapWhereUniqueInput | ProductFlairMapWhereUniqueInput[]
    connect?: ProductFlairMapWhereUniqueInput | ProductFlairMapWhereUniqueInput[]
    update?: ProductFlairMapUpdateWithWhereUniqueWithoutProductInput | ProductFlairMapUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductFlairMapUpdateManyWithWhereWithoutProductInput | ProductFlairMapUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductFlairMapScalarWhereInput | ProductFlairMapScalarWhereInput[]
  }

  export type ProductImageUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutProductInput | ProductImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutProductInput | ProductImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutProductInput | ProductImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type ProductVariantUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariantUpsertWithWhereUniqueWithoutProductInput | ProductVariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    set?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    disconnect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    delete?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    update?: ProductVariantUpdateWithWhereUniqueWithoutProductInput | ProductVariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariantUpdateManyWithWhereWithoutProductInput | ProductVariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
  }

  export type ProductMaterialUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductMaterialCreateWithoutProductInput, ProductMaterialUncheckedCreateWithoutProductInput> | ProductMaterialCreateWithoutProductInput[] | ProductMaterialUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductMaterialCreateOrConnectWithoutProductInput | ProductMaterialCreateOrConnectWithoutProductInput[]
    upsert?: ProductMaterialUpsertWithWhereUniqueWithoutProductInput | ProductMaterialUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductMaterialCreateManyProductInputEnvelope
    set?: ProductMaterialWhereUniqueInput | ProductMaterialWhereUniqueInput[]
    disconnect?: ProductMaterialWhereUniqueInput | ProductMaterialWhereUniqueInput[]
    delete?: ProductMaterialWhereUniqueInput | ProductMaterialWhereUniqueInput[]
    connect?: ProductMaterialWhereUniqueInput | ProductMaterialWhereUniqueInput[]
    update?: ProductMaterialUpdateWithWhereUniqueWithoutProductInput | ProductMaterialUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductMaterialUpdateManyWithWhereWithoutProductInput | ProductMaterialUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductMaterialScalarWhereInput | ProductMaterialScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutVariantsInput = {
    create?: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantsInput
    upsert?: ProductUpsertWithoutVariantsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutVariantsInput, ProductUpdateWithoutVariantsInput>, ProductUncheckedUpdateWithoutVariantsInput>
  }

  export type ProductMaterialCreateNestedManyWithoutMaterialInput = {
    create?: XOR<ProductMaterialCreateWithoutMaterialInput, ProductMaterialUncheckedCreateWithoutMaterialInput> | ProductMaterialCreateWithoutMaterialInput[] | ProductMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProductMaterialCreateOrConnectWithoutMaterialInput | ProductMaterialCreateOrConnectWithoutMaterialInput[]
    createMany?: ProductMaterialCreateManyMaterialInputEnvelope
    connect?: ProductMaterialWhereUniqueInput | ProductMaterialWhereUniqueInput[]
  }

  export type ProductMaterialUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<ProductMaterialCreateWithoutMaterialInput, ProductMaterialUncheckedCreateWithoutMaterialInput> | ProductMaterialCreateWithoutMaterialInput[] | ProductMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProductMaterialCreateOrConnectWithoutMaterialInput | ProductMaterialCreateOrConnectWithoutMaterialInput[]
    createMany?: ProductMaterialCreateManyMaterialInputEnvelope
    connect?: ProductMaterialWhereUniqueInput | ProductMaterialWhereUniqueInput[]
  }

  export type ProductMaterialUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<ProductMaterialCreateWithoutMaterialInput, ProductMaterialUncheckedCreateWithoutMaterialInput> | ProductMaterialCreateWithoutMaterialInput[] | ProductMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProductMaterialCreateOrConnectWithoutMaterialInput | ProductMaterialCreateOrConnectWithoutMaterialInput[]
    upsert?: ProductMaterialUpsertWithWhereUniqueWithoutMaterialInput | ProductMaterialUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: ProductMaterialCreateManyMaterialInputEnvelope
    set?: ProductMaterialWhereUniqueInput | ProductMaterialWhereUniqueInput[]
    disconnect?: ProductMaterialWhereUniqueInput | ProductMaterialWhereUniqueInput[]
    delete?: ProductMaterialWhereUniqueInput | ProductMaterialWhereUniqueInput[]
    connect?: ProductMaterialWhereUniqueInput | ProductMaterialWhereUniqueInput[]
    update?: ProductMaterialUpdateWithWhereUniqueWithoutMaterialInput | ProductMaterialUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: ProductMaterialUpdateManyWithWhereWithoutMaterialInput | ProductMaterialUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: ProductMaterialScalarWhereInput | ProductMaterialScalarWhereInput[]
  }

  export type ProductMaterialUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<ProductMaterialCreateWithoutMaterialInput, ProductMaterialUncheckedCreateWithoutMaterialInput> | ProductMaterialCreateWithoutMaterialInput[] | ProductMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProductMaterialCreateOrConnectWithoutMaterialInput | ProductMaterialCreateOrConnectWithoutMaterialInput[]
    upsert?: ProductMaterialUpsertWithWhereUniqueWithoutMaterialInput | ProductMaterialUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: ProductMaterialCreateManyMaterialInputEnvelope
    set?: ProductMaterialWhereUniqueInput | ProductMaterialWhereUniqueInput[]
    disconnect?: ProductMaterialWhereUniqueInput | ProductMaterialWhereUniqueInput[]
    delete?: ProductMaterialWhereUniqueInput | ProductMaterialWhereUniqueInput[]
    connect?: ProductMaterialWhereUniqueInput | ProductMaterialWhereUniqueInput[]
    update?: ProductMaterialUpdateWithWhereUniqueWithoutMaterialInput | ProductMaterialUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: ProductMaterialUpdateManyWithWhereWithoutMaterialInput | ProductMaterialUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: ProductMaterialScalarWhereInput | ProductMaterialScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutMaterialsInput = {
    create?: XOR<ProductCreateWithoutMaterialsInput, ProductUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutMaterialsInput
    connect?: ProductWhereUniqueInput
  }

  export type MaterialCreateNestedOneWithoutProductsInput = {
    create?: XOR<MaterialCreateWithoutProductsInput, MaterialUncheckedCreateWithoutProductsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutProductsInput
    connect?: MaterialWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutMaterialsNestedInput = {
    create?: XOR<ProductCreateWithoutMaterialsInput, ProductUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutMaterialsInput
    upsert?: ProductUpsertWithoutMaterialsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutMaterialsInput, ProductUpdateWithoutMaterialsInput>, ProductUncheckedUpdateWithoutMaterialsInput>
  }

  export type MaterialUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<MaterialCreateWithoutProductsInput, MaterialUncheckedCreateWithoutProductsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutProductsInput
    upsert?: MaterialUpsertWithoutProductsInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutProductsInput, MaterialUpdateWithoutProductsInput>, MaterialUncheckedUpdateWithoutProductsInput>
  }

  export type ProductTagMapCreateNestedManyWithoutTagInput = {
    create?: XOR<ProductTagMapCreateWithoutTagInput, ProductTagMapUncheckedCreateWithoutTagInput> | ProductTagMapCreateWithoutTagInput[] | ProductTagMapUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ProductTagMapCreateOrConnectWithoutTagInput | ProductTagMapCreateOrConnectWithoutTagInput[]
    createMany?: ProductTagMapCreateManyTagInputEnvelope
    connect?: ProductTagMapWhereUniqueInput | ProductTagMapWhereUniqueInput[]
  }

  export type ProductTagMapUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<ProductTagMapCreateWithoutTagInput, ProductTagMapUncheckedCreateWithoutTagInput> | ProductTagMapCreateWithoutTagInput[] | ProductTagMapUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ProductTagMapCreateOrConnectWithoutTagInput | ProductTagMapCreateOrConnectWithoutTagInput[]
    createMany?: ProductTagMapCreateManyTagInputEnvelope
    connect?: ProductTagMapWhereUniqueInput | ProductTagMapWhereUniqueInput[]
  }

  export type ProductTagMapUpdateManyWithoutTagNestedInput = {
    create?: XOR<ProductTagMapCreateWithoutTagInput, ProductTagMapUncheckedCreateWithoutTagInput> | ProductTagMapCreateWithoutTagInput[] | ProductTagMapUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ProductTagMapCreateOrConnectWithoutTagInput | ProductTagMapCreateOrConnectWithoutTagInput[]
    upsert?: ProductTagMapUpsertWithWhereUniqueWithoutTagInput | ProductTagMapUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: ProductTagMapCreateManyTagInputEnvelope
    set?: ProductTagMapWhereUniqueInput | ProductTagMapWhereUniqueInput[]
    disconnect?: ProductTagMapWhereUniqueInput | ProductTagMapWhereUniqueInput[]
    delete?: ProductTagMapWhereUniqueInput | ProductTagMapWhereUniqueInput[]
    connect?: ProductTagMapWhereUniqueInput | ProductTagMapWhereUniqueInput[]
    update?: ProductTagMapUpdateWithWhereUniqueWithoutTagInput | ProductTagMapUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: ProductTagMapUpdateManyWithWhereWithoutTagInput | ProductTagMapUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: ProductTagMapScalarWhereInput | ProductTagMapScalarWhereInput[]
  }

  export type ProductTagMapUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<ProductTagMapCreateWithoutTagInput, ProductTagMapUncheckedCreateWithoutTagInput> | ProductTagMapCreateWithoutTagInput[] | ProductTagMapUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ProductTagMapCreateOrConnectWithoutTagInput | ProductTagMapCreateOrConnectWithoutTagInput[]
    upsert?: ProductTagMapUpsertWithWhereUniqueWithoutTagInput | ProductTagMapUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: ProductTagMapCreateManyTagInputEnvelope
    set?: ProductTagMapWhereUniqueInput | ProductTagMapWhereUniqueInput[]
    disconnect?: ProductTagMapWhereUniqueInput | ProductTagMapWhereUniqueInput[]
    delete?: ProductTagMapWhereUniqueInput | ProductTagMapWhereUniqueInput[]
    connect?: ProductTagMapWhereUniqueInput | ProductTagMapWhereUniqueInput[]
    update?: ProductTagMapUpdateWithWhereUniqueWithoutTagInput | ProductTagMapUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: ProductTagMapUpdateManyWithWhereWithoutTagInput | ProductTagMapUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: ProductTagMapScalarWhereInput | ProductTagMapScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutTagsInput = {
    create?: XOR<ProductCreateWithoutTagsInput, ProductUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutTagsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductTagCreateNestedOneWithoutProductsInput = {
    create?: XOR<ProductTagCreateWithoutProductsInput, ProductTagUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ProductTagCreateOrConnectWithoutProductsInput
    connect?: ProductTagWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<ProductCreateWithoutTagsInput, ProductUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutTagsInput
    upsert?: ProductUpsertWithoutTagsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutTagsInput, ProductUpdateWithoutTagsInput>, ProductUncheckedUpdateWithoutTagsInput>
  }

  export type ProductTagUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<ProductTagCreateWithoutProductsInput, ProductTagUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ProductTagCreateOrConnectWithoutProductsInput
    upsert?: ProductTagUpsertWithoutProductsInput
    connect?: ProductTagWhereUniqueInput
    update?: XOR<XOR<ProductTagUpdateToOneWithWhereWithoutProductsInput, ProductTagUpdateWithoutProductsInput>, ProductTagUncheckedUpdateWithoutProductsInput>
  }

  export type ProductFlairMapCreateNestedManyWithoutFlairInput = {
    create?: XOR<ProductFlairMapCreateWithoutFlairInput, ProductFlairMapUncheckedCreateWithoutFlairInput> | ProductFlairMapCreateWithoutFlairInput[] | ProductFlairMapUncheckedCreateWithoutFlairInput[]
    connectOrCreate?: ProductFlairMapCreateOrConnectWithoutFlairInput | ProductFlairMapCreateOrConnectWithoutFlairInput[]
    createMany?: ProductFlairMapCreateManyFlairInputEnvelope
    connect?: ProductFlairMapWhereUniqueInput | ProductFlairMapWhereUniqueInput[]
  }

  export type ProductFlairMapUncheckedCreateNestedManyWithoutFlairInput = {
    create?: XOR<ProductFlairMapCreateWithoutFlairInput, ProductFlairMapUncheckedCreateWithoutFlairInput> | ProductFlairMapCreateWithoutFlairInput[] | ProductFlairMapUncheckedCreateWithoutFlairInput[]
    connectOrCreate?: ProductFlairMapCreateOrConnectWithoutFlairInput | ProductFlairMapCreateOrConnectWithoutFlairInput[]
    createMany?: ProductFlairMapCreateManyFlairInputEnvelope
    connect?: ProductFlairMapWhereUniqueInput | ProductFlairMapWhereUniqueInput[]
  }

  export type ProductFlairMapUpdateManyWithoutFlairNestedInput = {
    create?: XOR<ProductFlairMapCreateWithoutFlairInput, ProductFlairMapUncheckedCreateWithoutFlairInput> | ProductFlairMapCreateWithoutFlairInput[] | ProductFlairMapUncheckedCreateWithoutFlairInput[]
    connectOrCreate?: ProductFlairMapCreateOrConnectWithoutFlairInput | ProductFlairMapCreateOrConnectWithoutFlairInput[]
    upsert?: ProductFlairMapUpsertWithWhereUniqueWithoutFlairInput | ProductFlairMapUpsertWithWhereUniqueWithoutFlairInput[]
    createMany?: ProductFlairMapCreateManyFlairInputEnvelope
    set?: ProductFlairMapWhereUniqueInput | ProductFlairMapWhereUniqueInput[]
    disconnect?: ProductFlairMapWhereUniqueInput | ProductFlairMapWhereUniqueInput[]
    delete?: ProductFlairMapWhereUniqueInput | ProductFlairMapWhereUniqueInput[]
    connect?: ProductFlairMapWhereUniqueInput | ProductFlairMapWhereUniqueInput[]
    update?: ProductFlairMapUpdateWithWhereUniqueWithoutFlairInput | ProductFlairMapUpdateWithWhereUniqueWithoutFlairInput[]
    updateMany?: ProductFlairMapUpdateManyWithWhereWithoutFlairInput | ProductFlairMapUpdateManyWithWhereWithoutFlairInput[]
    deleteMany?: ProductFlairMapScalarWhereInput | ProductFlairMapScalarWhereInput[]
  }

  export type ProductFlairMapUncheckedUpdateManyWithoutFlairNestedInput = {
    create?: XOR<ProductFlairMapCreateWithoutFlairInput, ProductFlairMapUncheckedCreateWithoutFlairInput> | ProductFlairMapCreateWithoutFlairInput[] | ProductFlairMapUncheckedCreateWithoutFlairInput[]
    connectOrCreate?: ProductFlairMapCreateOrConnectWithoutFlairInput | ProductFlairMapCreateOrConnectWithoutFlairInput[]
    upsert?: ProductFlairMapUpsertWithWhereUniqueWithoutFlairInput | ProductFlairMapUpsertWithWhereUniqueWithoutFlairInput[]
    createMany?: ProductFlairMapCreateManyFlairInputEnvelope
    set?: ProductFlairMapWhereUniqueInput | ProductFlairMapWhereUniqueInput[]
    disconnect?: ProductFlairMapWhereUniqueInput | ProductFlairMapWhereUniqueInput[]
    delete?: ProductFlairMapWhereUniqueInput | ProductFlairMapWhereUniqueInput[]
    connect?: ProductFlairMapWhereUniqueInput | ProductFlairMapWhereUniqueInput[]
    update?: ProductFlairMapUpdateWithWhereUniqueWithoutFlairInput | ProductFlairMapUpdateWithWhereUniqueWithoutFlairInput[]
    updateMany?: ProductFlairMapUpdateManyWithWhereWithoutFlairInput | ProductFlairMapUpdateManyWithWhereWithoutFlairInput[]
    deleteMany?: ProductFlairMapScalarWhereInput | ProductFlairMapScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutFlairsInput = {
    create?: XOR<ProductCreateWithoutFlairsInput, ProductUncheckedCreateWithoutFlairsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutFlairsInput
    connect?: ProductWhereUniqueInput
  }

  export type FlairCreateNestedOneWithoutProductsInput = {
    create?: XOR<FlairCreateWithoutProductsInput, FlairUncheckedCreateWithoutProductsInput>
    connectOrCreate?: FlairCreateOrConnectWithoutProductsInput
    connect?: FlairWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutFlairsNestedInput = {
    create?: XOR<ProductCreateWithoutFlairsInput, ProductUncheckedCreateWithoutFlairsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutFlairsInput
    upsert?: ProductUpsertWithoutFlairsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutFlairsInput, ProductUpdateWithoutFlairsInput>, ProductUncheckedUpdateWithoutFlairsInput>
  }

  export type FlairUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<FlairCreateWithoutProductsInput, FlairUncheckedCreateWithoutProductsInput>
    connectOrCreate?: FlairCreateOrConnectWithoutProductsInput
    upsert?: FlairUpsertWithoutProductsInput
    connect?: FlairWhereUniqueInput
    update?: XOR<XOR<FlairUpdateToOneWithWhereWithoutProductsInput, FlairUpdateWithoutProductsInput>, FlairUncheckedUpdateWithoutProductsInput>
  }

  export type ProductCreateNestedOneWithoutImagesInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    connect?: ProductWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    upsert?: ProductUpsertWithoutImagesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutImagesInput, ProductUpdateWithoutImagesInput>, ProductUncheckedUpdateWithoutImagesInput>
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

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
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

  export type NestedEnumKaratFilter<$PrismaModel = never> = {
    equals?: $Enums.Karat | EnumKaratFieldRefInput<$PrismaModel>
    in?: $Enums.Karat[] | ListEnumKaratFieldRefInput<$PrismaModel>
    notIn?: $Enums.Karat[] | ListEnumKaratFieldRefInput<$PrismaModel>
    not?: NestedEnumKaratFilter<$PrismaModel> | $Enums.Karat
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumKaratWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Karat | EnumKaratFieldRefInput<$PrismaModel>
    in?: $Enums.Karat[] | ListEnumKaratFieldRefInput<$PrismaModel>
    notIn?: $Enums.Karat[] | ListEnumKaratFieldRefInput<$PrismaModel>
    not?: NestedEnumKaratWithAggregatesFilter<$PrismaModel> | $Enums.Karat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKaratFilter<$PrismaModel>
    _max?: NestedEnumKaratFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type SubcategoryCreateWithoutCategoryInput = {
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutSubcategoryInput
  }

  export type SubcategoryUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutSubcategoryInput
  }

  export type SubcategoryCreateOrConnectWithoutCategoryInput = {
    where: SubcategoryWhereUniqueInput
    create: XOR<SubcategoryCreateWithoutCategoryInput, SubcategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SubcategoryCreateManyCategoryInputEnvelope = {
    data: SubcategoryCreateManyCategoryInput | SubcategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type SubcategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SubcategoryWhereUniqueInput
    update: XOR<SubcategoryUpdateWithoutCategoryInput, SubcategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<SubcategoryCreateWithoutCategoryInput, SubcategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SubcategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SubcategoryWhereUniqueInput
    data: XOR<SubcategoryUpdateWithoutCategoryInput, SubcategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type SubcategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: SubcategoryScalarWhereInput
    data: XOR<SubcategoryUpdateManyMutationInput, SubcategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type SubcategoryScalarWhereInput = {
    AND?: SubcategoryScalarWhereInput | SubcategoryScalarWhereInput[]
    OR?: SubcategoryScalarWhereInput[]
    NOT?: SubcategoryScalarWhereInput | SubcategoryScalarWhereInput[]
    id?: IntFilter<"Subcategory"> | number
    name?: StringFilter<"Subcategory"> | string
    slug?: StringFilter<"Subcategory"> | string
    description?: StringNullableFilter<"Subcategory"> | string | null
    categoryId?: IntFilter<"Subcategory"> | number
    createdAt?: DateTimeFilter<"Subcategory"> | Date | string
    updatedAt?: DateTimeFilter<"Subcategory"> | Date | string
  }

  export type CategoryCreateWithoutSubcategoriesInput = {
    name: string
    description?: string | null
    slug: string
    metaTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutSubcategoriesInput = {
    id?: number
    name: string
    description?: string | null
    slug: string
    metaTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutSubcategoriesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSubcategoriesInput, CategoryUncheckedCreateWithoutSubcategoriesInput>
  }

  export type ProductCreateWithoutSubcategoryInput = {
    name: string
    slug: string
    gender: $Enums.Gender
    description?: string | null
    netWeight: number
    grossWeight?: number | null
    huid: string
    sku: string
    karat: $Enums.Karat
    price: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string | null
    stockQuantity?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    metaTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: ProductTagMapCreateNestedManyWithoutProductInput
    flairs?: ProductFlairMapCreateNestedManyWithoutProductInput
    images?: ProductImageCreateNestedManyWithoutProductInput
    variants?: ProductVariantCreateNestedManyWithoutProductInput
    materials?: ProductMaterialCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSubcategoryInput = {
    id?: number
    name: string
    slug: string
    gender: $Enums.Gender
    description?: string | null
    netWeight: number
    grossWeight?: number | null
    huid: string
    sku: string
    karat: $Enums.Karat
    price: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string | null
    stockQuantity?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    metaTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: ProductTagMapUncheckedCreateNestedManyWithoutProductInput
    flairs?: ProductFlairMapUncheckedCreateNestedManyWithoutProductInput
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
    materials?: ProductMaterialUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSubcategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSubcategoryInput, ProductUncheckedCreateWithoutSubcategoryInput>
  }

  export type ProductCreateManySubcategoryInputEnvelope = {
    data: ProductCreateManySubcategoryInput | ProductCreateManySubcategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutSubcategoriesInput = {
    update: XOR<CategoryUpdateWithoutSubcategoriesInput, CategoryUncheckedUpdateWithoutSubcategoriesInput>
    create: XOR<CategoryCreateWithoutSubcategoriesInput, CategoryUncheckedCreateWithoutSubcategoriesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSubcategoriesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSubcategoriesInput, CategoryUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type CategoryUpdateWithoutSubcategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutSubcategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutSubcategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutSubcategoryInput, ProductUncheckedUpdateWithoutSubcategoryInput>
    create: XOR<ProductCreateWithoutSubcategoryInput, ProductUncheckedCreateWithoutSubcategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutSubcategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutSubcategoryInput, ProductUncheckedUpdateWithoutSubcategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutSubcategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutSubcategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    gender?: EnumGenderFilter<"Product"> | $Enums.Gender
    description?: StringNullableFilter<"Product"> | string | null
    netWeight?: FloatFilter<"Product"> | number
    grossWeight?: FloatNullableFilter<"Product"> | number | null
    huid?: StringFilter<"Product"> | string
    sku?: StringFilter<"Product"> | string
    karat?: EnumKaratFilter<"Product"> | $Enums.Karat
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    stockQuantity?: IntFilter<"Product"> | number
    isPublished?: BoolFilter<"Product"> | boolean
    publishedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    subcategoryId?: IntFilter<"Product"> | number
    metaTitle?: StringNullableFilter<"Product"> | string | null
    metaDescription?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type SubcategoryCreateWithoutProductsInput = {
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutSubcategoriesInput
  }

  export type SubcategoryUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubcategoryCreateOrConnectWithoutProductsInput = {
    where: SubcategoryWhereUniqueInput
    create: XOR<SubcategoryCreateWithoutProductsInput, SubcategoryUncheckedCreateWithoutProductsInput>
  }

  export type ProductTagMapCreateWithoutProductInput = {
    tag: ProductTagCreateNestedOneWithoutProductsInput
  }

  export type ProductTagMapUncheckedCreateWithoutProductInput = {
    tagId: number
  }

  export type ProductTagMapCreateOrConnectWithoutProductInput = {
    where: ProductTagMapWhereUniqueInput
    create: XOR<ProductTagMapCreateWithoutProductInput, ProductTagMapUncheckedCreateWithoutProductInput>
  }

  export type ProductTagMapCreateManyProductInputEnvelope = {
    data: ProductTagMapCreateManyProductInput | ProductTagMapCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductFlairMapCreateWithoutProductInput = {
    flair: FlairCreateNestedOneWithoutProductsInput
  }

  export type ProductFlairMapUncheckedCreateWithoutProductInput = {
    flairId: number
  }

  export type ProductFlairMapCreateOrConnectWithoutProductInput = {
    where: ProductFlairMapWhereUniqueInput
    create: XOR<ProductFlairMapCreateWithoutProductInput, ProductFlairMapUncheckedCreateWithoutProductInput>
  }

  export type ProductFlairMapCreateManyProductInputEnvelope = {
    data: ProductFlairMapCreateManyProductInput | ProductFlairMapCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductImageCreateWithoutProductInput = {
    imageUrl: string
    cloudId?: string | null
    alt?: string | null
    priority?: number
    width?: number | null
    height?: number | null
    isDefault?: boolean
    createdAt?: Date | string
  }

  export type ProductImageUncheckedCreateWithoutProductInput = {
    id?: number
    imageUrl: string
    cloudId?: string | null
    alt?: string | null
    priority?: number
    width?: number | null
    height?: number | null
    isDefault?: boolean
    createdAt?: Date | string
  }

  export type ProductImageCreateOrConnectWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageCreateManyProductInputEnvelope = {
    data: ProductImageCreateManyProductInput | ProductImageCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductVariantCreateWithoutProductInput = {
    name: string
    size?: string | null
    color?: string | null
    price: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string | null
    sku: string
    stockQuantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductVariantUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    size?: string | null
    color?: string | null
    price: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string | null
    sku: string
    stockQuantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductVariantCreateOrConnectWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantCreateManyProductInputEnvelope = {
    data: ProductVariantCreateManyProductInput | ProductVariantCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductMaterialCreateWithoutProductInput = {
    percentage?: number | null
    material: MaterialCreateNestedOneWithoutProductsInput
  }

  export type ProductMaterialUncheckedCreateWithoutProductInput = {
    materialId: number
    percentage?: number | null
  }

  export type ProductMaterialCreateOrConnectWithoutProductInput = {
    where: ProductMaterialWhereUniqueInput
    create: XOR<ProductMaterialCreateWithoutProductInput, ProductMaterialUncheckedCreateWithoutProductInput>
  }

  export type ProductMaterialCreateManyProductInputEnvelope = {
    data: ProductMaterialCreateManyProductInput | ProductMaterialCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type SubcategoryUpsertWithoutProductsInput = {
    update: XOR<SubcategoryUpdateWithoutProductsInput, SubcategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<SubcategoryCreateWithoutProductsInput, SubcategoryUncheckedCreateWithoutProductsInput>
    where?: SubcategoryWhereInput
  }

  export type SubcategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: SubcategoryWhereInput
    data: XOR<SubcategoryUpdateWithoutProductsInput, SubcategoryUncheckedUpdateWithoutProductsInput>
  }

  export type SubcategoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutSubcategoriesNestedInput
  }

  export type SubcategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductTagMapUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductTagMapWhereUniqueInput
    update: XOR<ProductTagMapUpdateWithoutProductInput, ProductTagMapUncheckedUpdateWithoutProductInput>
    create: XOR<ProductTagMapCreateWithoutProductInput, ProductTagMapUncheckedCreateWithoutProductInput>
  }

  export type ProductTagMapUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductTagMapWhereUniqueInput
    data: XOR<ProductTagMapUpdateWithoutProductInput, ProductTagMapUncheckedUpdateWithoutProductInput>
  }

  export type ProductTagMapUpdateManyWithWhereWithoutProductInput = {
    where: ProductTagMapScalarWhereInput
    data: XOR<ProductTagMapUpdateManyMutationInput, ProductTagMapUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductTagMapScalarWhereInput = {
    AND?: ProductTagMapScalarWhereInput | ProductTagMapScalarWhereInput[]
    OR?: ProductTagMapScalarWhereInput[]
    NOT?: ProductTagMapScalarWhereInput | ProductTagMapScalarWhereInput[]
    productId?: IntFilter<"ProductTagMap"> | number
    tagId?: IntFilter<"ProductTagMap"> | number
  }

  export type ProductFlairMapUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductFlairMapWhereUniqueInput
    update: XOR<ProductFlairMapUpdateWithoutProductInput, ProductFlairMapUncheckedUpdateWithoutProductInput>
    create: XOR<ProductFlairMapCreateWithoutProductInput, ProductFlairMapUncheckedCreateWithoutProductInput>
  }

  export type ProductFlairMapUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductFlairMapWhereUniqueInput
    data: XOR<ProductFlairMapUpdateWithoutProductInput, ProductFlairMapUncheckedUpdateWithoutProductInput>
  }

  export type ProductFlairMapUpdateManyWithWhereWithoutProductInput = {
    where: ProductFlairMapScalarWhereInput
    data: XOR<ProductFlairMapUpdateManyMutationInput, ProductFlairMapUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductFlairMapScalarWhereInput = {
    AND?: ProductFlairMapScalarWhereInput | ProductFlairMapScalarWhereInput[]
    OR?: ProductFlairMapScalarWhereInput[]
    NOT?: ProductFlairMapScalarWhereInput | ProductFlairMapScalarWhereInput[]
    productId?: IntFilter<"ProductFlairMap"> | number
    flairId?: IntFilter<"ProductFlairMap"> | number
  }

  export type ProductImageUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    update: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    data: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
  }

  export type ProductImageUpdateManyWithWhereWithoutProductInput = {
    where: ProductImageScalarWhereInput
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductImageScalarWhereInput = {
    AND?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    OR?: ProductImageScalarWhereInput[]
    NOT?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    id?: IntFilter<"ProductImage"> | number
    productId?: IntFilter<"ProductImage"> | number
    imageUrl?: StringFilter<"ProductImage"> | string
    cloudId?: StringNullableFilter<"ProductImage"> | string | null
    alt?: StringNullableFilter<"ProductImage"> | string | null
    priority?: IntFilter<"ProductImage"> | number
    width?: IntNullableFilter<"ProductImage"> | number | null
    height?: IntNullableFilter<"ProductImage"> | number | null
    isDefault?: BoolFilter<"ProductImage"> | boolean
    createdAt?: DateTimeFilter<"ProductImage"> | Date | string
  }

  export type ProductVariantUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    update: XOR<ProductVariantUpdateWithoutProductInput, ProductVariantUncheckedUpdateWithoutProductInput>
    create: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    data: XOR<ProductVariantUpdateWithoutProductInput, ProductVariantUncheckedUpdateWithoutProductInput>
  }

  export type ProductVariantUpdateManyWithWhereWithoutProductInput = {
    where: ProductVariantScalarWhereInput
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductVariantScalarWhereInput = {
    AND?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
    OR?: ProductVariantScalarWhereInput[]
    NOT?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
    id?: IntFilter<"ProductVariant"> | number
    productId?: IntFilter<"ProductVariant"> | number
    name?: StringFilter<"ProductVariant"> | string
    size?: StringNullableFilter<"ProductVariant"> | string | null
    color?: StringNullableFilter<"ProductVariant"> | string | null
    price?: DecimalFilter<"ProductVariant"> | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalNullableFilter<"ProductVariant"> | Decimal | DecimalJsLike | number | string | null
    sku?: StringFilter<"ProductVariant"> | string
    stockQuantity?: IntFilter<"ProductVariant"> | number
    createdAt?: DateTimeFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVariant"> | Date | string
  }

  export type ProductMaterialUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductMaterialWhereUniqueInput
    update: XOR<ProductMaterialUpdateWithoutProductInput, ProductMaterialUncheckedUpdateWithoutProductInput>
    create: XOR<ProductMaterialCreateWithoutProductInput, ProductMaterialUncheckedCreateWithoutProductInput>
  }

  export type ProductMaterialUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductMaterialWhereUniqueInput
    data: XOR<ProductMaterialUpdateWithoutProductInput, ProductMaterialUncheckedUpdateWithoutProductInput>
  }

  export type ProductMaterialUpdateManyWithWhereWithoutProductInput = {
    where: ProductMaterialScalarWhereInput
    data: XOR<ProductMaterialUpdateManyMutationInput, ProductMaterialUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductMaterialScalarWhereInput = {
    AND?: ProductMaterialScalarWhereInput | ProductMaterialScalarWhereInput[]
    OR?: ProductMaterialScalarWhereInput[]
    NOT?: ProductMaterialScalarWhereInput | ProductMaterialScalarWhereInput[]
    productId?: IntFilter<"ProductMaterial"> | number
    materialId?: IntFilter<"ProductMaterial"> | number
    percentage?: FloatNullableFilter<"ProductMaterial"> | number | null
  }

  export type ProductCreateWithoutVariantsInput = {
    name: string
    slug: string
    gender: $Enums.Gender
    description?: string | null
    netWeight: number
    grossWeight?: number | null
    huid: string
    sku: string
    karat: $Enums.Karat
    price: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string | null
    stockQuantity?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    metaTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategory: SubcategoryCreateNestedOneWithoutProductsInput
    tags?: ProductTagMapCreateNestedManyWithoutProductInput
    flairs?: ProductFlairMapCreateNestedManyWithoutProductInput
    images?: ProductImageCreateNestedManyWithoutProductInput
    materials?: ProductMaterialCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutVariantsInput = {
    id?: number
    name: string
    slug: string
    gender: $Enums.Gender
    description?: string | null
    netWeight: number
    grossWeight?: number | null
    huid: string
    sku: string
    karat: $Enums.Karat
    price: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string | null
    stockQuantity?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    subcategoryId: number
    metaTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: ProductTagMapUncheckedCreateNestedManyWithoutProductInput
    flairs?: ProductFlairMapUncheckedCreateNestedManyWithoutProductInput
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    materials?: ProductMaterialUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutVariantsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
  }

  export type ProductUpsertWithoutVariantsInput = {
    update: XOR<ProductUpdateWithoutVariantsInput, ProductUncheckedUpdateWithoutVariantsInput>
    create: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutVariantsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutVariantsInput, ProductUncheckedUpdateWithoutVariantsInput>
  }

  export type ProductUpdateWithoutVariantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    description?: NullableStringFieldUpdateOperationsInput | string | null
    netWeight?: FloatFieldUpdateOperationsInput | number
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    huid?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    karat?: EnumKaratFieldUpdateOperationsInput | $Enums.Karat
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategory?: SubcategoryUpdateOneRequiredWithoutProductsNestedInput
    tags?: ProductTagMapUpdateManyWithoutProductNestedInput
    flairs?: ProductFlairMapUpdateManyWithoutProductNestedInput
    images?: ProductImageUpdateManyWithoutProductNestedInput
    materials?: ProductMaterialUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutVariantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    description?: NullableStringFieldUpdateOperationsInput | string | null
    netWeight?: FloatFieldUpdateOperationsInput | number
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    huid?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    karat?: EnumKaratFieldUpdateOperationsInput | $Enums.Karat
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subcategoryId?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ProductTagMapUncheckedUpdateManyWithoutProductNestedInput
    flairs?: ProductFlairMapUncheckedUpdateManyWithoutProductNestedInput
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    materials?: ProductMaterialUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductMaterialCreateWithoutMaterialInput = {
    percentage?: number | null
    product: ProductCreateNestedOneWithoutMaterialsInput
  }

  export type ProductMaterialUncheckedCreateWithoutMaterialInput = {
    productId: number
    percentage?: number | null
  }

  export type ProductMaterialCreateOrConnectWithoutMaterialInput = {
    where: ProductMaterialWhereUniqueInput
    create: XOR<ProductMaterialCreateWithoutMaterialInput, ProductMaterialUncheckedCreateWithoutMaterialInput>
  }

  export type ProductMaterialCreateManyMaterialInputEnvelope = {
    data: ProductMaterialCreateManyMaterialInput | ProductMaterialCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type ProductMaterialUpsertWithWhereUniqueWithoutMaterialInput = {
    where: ProductMaterialWhereUniqueInput
    update: XOR<ProductMaterialUpdateWithoutMaterialInput, ProductMaterialUncheckedUpdateWithoutMaterialInput>
    create: XOR<ProductMaterialCreateWithoutMaterialInput, ProductMaterialUncheckedCreateWithoutMaterialInput>
  }

  export type ProductMaterialUpdateWithWhereUniqueWithoutMaterialInput = {
    where: ProductMaterialWhereUniqueInput
    data: XOR<ProductMaterialUpdateWithoutMaterialInput, ProductMaterialUncheckedUpdateWithoutMaterialInput>
  }

  export type ProductMaterialUpdateManyWithWhereWithoutMaterialInput = {
    where: ProductMaterialScalarWhereInput
    data: XOR<ProductMaterialUpdateManyMutationInput, ProductMaterialUncheckedUpdateManyWithoutMaterialInput>
  }

  export type ProductCreateWithoutMaterialsInput = {
    name: string
    slug: string
    gender: $Enums.Gender
    description?: string | null
    netWeight: number
    grossWeight?: number | null
    huid: string
    sku: string
    karat: $Enums.Karat
    price: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string | null
    stockQuantity?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    metaTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategory: SubcategoryCreateNestedOneWithoutProductsInput
    tags?: ProductTagMapCreateNestedManyWithoutProductInput
    flairs?: ProductFlairMapCreateNestedManyWithoutProductInput
    images?: ProductImageCreateNestedManyWithoutProductInput
    variants?: ProductVariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutMaterialsInput = {
    id?: number
    name: string
    slug: string
    gender: $Enums.Gender
    description?: string | null
    netWeight: number
    grossWeight?: number | null
    huid: string
    sku: string
    karat: $Enums.Karat
    price: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string | null
    stockQuantity?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    subcategoryId: number
    metaTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: ProductTagMapUncheckedCreateNestedManyWithoutProductInput
    flairs?: ProductFlairMapUncheckedCreateNestedManyWithoutProductInput
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutMaterialsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutMaterialsInput, ProductUncheckedCreateWithoutMaterialsInput>
  }

  export type MaterialCreateWithoutProductsInput = {
    name: string
    description?: string | null
  }

  export type MaterialUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type MaterialCreateOrConnectWithoutProductsInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutProductsInput, MaterialUncheckedCreateWithoutProductsInput>
  }

  export type ProductUpsertWithoutMaterialsInput = {
    update: XOR<ProductUpdateWithoutMaterialsInput, ProductUncheckedUpdateWithoutMaterialsInput>
    create: XOR<ProductCreateWithoutMaterialsInput, ProductUncheckedCreateWithoutMaterialsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutMaterialsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutMaterialsInput, ProductUncheckedUpdateWithoutMaterialsInput>
  }

  export type ProductUpdateWithoutMaterialsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    description?: NullableStringFieldUpdateOperationsInput | string | null
    netWeight?: FloatFieldUpdateOperationsInput | number
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    huid?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    karat?: EnumKaratFieldUpdateOperationsInput | $Enums.Karat
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategory?: SubcategoryUpdateOneRequiredWithoutProductsNestedInput
    tags?: ProductTagMapUpdateManyWithoutProductNestedInput
    flairs?: ProductFlairMapUpdateManyWithoutProductNestedInput
    images?: ProductImageUpdateManyWithoutProductNestedInput
    variants?: ProductVariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutMaterialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    description?: NullableStringFieldUpdateOperationsInput | string | null
    netWeight?: FloatFieldUpdateOperationsInput | number
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    huid?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    karat?: EnumKaratFieldUpdateOperationsInput | $Enums.Karat
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subcategoryId?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ProductTagMapUncheckedUpdateManyWithoutProductNestedInput
    flairs?: ProductFlairMapUncheckedUpdateManyWithoutProductNestedInput
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type MaterialUpsertWithoutProductsInput = {
    update: XOR<MaterialUpdateWithoutProductsInput, MaterialUncheckedUpdateWithoutProductsInput>
    create: XOR<MaterialCreateWithoutProductsInput, MaterialUncheckedCreateWithoutProductsInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutProductsInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutProductsInput, MaterialUncheckedUpdateWithoutProductsInput>
  }

  export type MaterialUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaterialUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductTagMapCreateWithoutTagInput = {
    product: ProductCreateNestedOneWithoutTagsInput
  }

  export type ProductTagMapUncheckedCreateWithoutTagInput = {
    productId: number
  }

  export type ProductTagMapCreateOrConnectWithoutTagInput = {
    where: ProductTagMapWhereUniqueInput
    create: XOR<ProductTagMapCreateWithoutTagInput, ProductTagMapUncheckedCreateWithoutTagInput>
  }

  export type ProductTagMapCreateManyTagInputEnvelope = {
    data: ProductTagMapCreateManyTagInput | ProductTagMapCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type ProductTagMapUpsertWithWhereUniqueWithoutTagInput = {
    where: ProductTagMapWhereUniqueInput
    update: XOR<ProductTagMapUpdateWithoutTagInput, ProductTagMapUncheckedUpdateWithoutTagInput>
    create: XOR<ProductTagMapCreateWithoutTagInput, ProductTagMapUncheckedCreateWithoutTagInput>
  }

  export type ProductTagMapUpdateWithWhereUniqueWithoutTagInput = {
    where: ProductTagMapWhereUniqueInput
    data: XOR<ProductTagMapUpdateWithoutTagInput, ProductTagMapUncheckedUpdateWithoutTagInput>
  }

  export type ProductTagMapUpdateManyWithWhereWithoutTagInput = {
    where: ProductTagMapScalarWhereInput
    data: XOR<ProductTagMapUpdateManyMutationInput, ProductTagMapUncheckedUpdateManyWithoutTagInput>
  }

  export type ProductCreateWithoutTagsInput = {
    name: string
    slug: string
    gender: $Enums.Gender
    description?: string | null
    netWeight: number
    grossWeight?: number | null
    huid: string
    sku: string
    karat: $Enums.Karat
    price: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string | null
    stockQuantity?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    metaTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategory: SubcategoryCreateNestedOneWithoutProductsInput
    flairs?: ProductFlairMapCreateNestedManyWithoutProductInput
    images?: ProductImageCreateNestedManyWithoutProductInput
    variants?: ProductVariantCreateNestedManyWithoutProductInput
    materials?: ProductMaterialCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutTagsInput = {
    id?: number
    name: string
    slug: string
    gender: $Enums.Gender
    description?: string | null
    netWeight: number
    grossWeight?: number | null
    huid: string
    sku: string
    karat: $Enums.Karat
    price: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string | null
    stockQuantity?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    subcategoryId: number
    metaTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flairs?: ProductFlairMapUncheckedCreateNestedManyWithoutProductInput
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
    materials?: ProductMaterialUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutTagsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutTagsInput, ProductUncheckedCreateWithoutTagsInput>
  }

  export type ProductTagCreateWithoutProductsInput = {
    name: string
    slug: string
  }

  export type ProductTagUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    slug: string
  }

  export type ProductTagCreateOrConnectWithoutProductsInput = {
    where: ProductTagWhereUniqueInput
    create: XOR<ProductTagCreateWithoutProductsInput, ProductTagUncheckedCreateWithoutProductsInput>
  }

  export type ProductUpsertWithoutTagsInput = {
    update: XOR<ProductUpdateWithoutTagsInput, ProductUncheckedUpdateWithoutTagsInput>
    create: XOR<ProductCreateWithoutTagsInput, ProductUncheckedCreateWithoutTagsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutTagsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutTagsInput, ProductUncheckedUpdateWithoutTagsInput>
  }

  export type ProductUpdateWithoutTagsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    description?: NullableStringFieldUpdateOperationsInput | string | null
    netWeight?: FloatFieldUpdateOperationsInput | number
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    huid?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    karat?: EnumKaratFieldUpdateOperationsInput | $Enums.Karat
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategory?: SubcategoryUpdateOneRequiredWithoutProductsNestedInput
    flairs?: ProductFlairMapUpdateManyWithoutProductNestedInput
    images?: ProductImageUpdateManyWithoutProductNestedInput
    variants?: ProductVariantUpdateManyWithoutProductNestedInput
    materials?: ProductMaterialUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    description?: NullableStringFieldUpdateOperationsInput | string | null
    netWeight?: FloatFieldUpdateOperationsInput | number
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    huid?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    karat?: EnumKaratFieldUpdateOperationsInput | $Enums.Karat
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subcategoryId?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flairs?: ProductFlairMapUncheckedUpdateManyWithoutProductNestedInput
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
    materials?: ProductMaterialUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductTagUpsertWithoutProductsInput = {
    update: XOR<ProductTagUpdateWithoutProductsInput, ProductTagUncheckedUpdateWithoutProductsInput>
    create: XOR<ProductTagCreateWithoutProductsInput, ProductTagUncheckedCreateWithoutProductsInput>
    where?: ProductTagWhereInput
  }

  export type ProductTagUpdateToOneWithWhereWithoutProductsInput = {
    where?: ProductTagWhereInput
    data: XOR<ProductTagUpdateWithoutProductsInput, ProductTagUncheckedUpdateWithoutProductsInput>
  }

  export type ProductTagUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type ProductTagUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type ProductFlairMapCreateWithoutFlairInput = {
    product: ProductCreateNestedOneWithoutFlairsInput
  }

  export type ProductFlairMapUncheckedCreateWithoutFlairInput = {
    productId: number
  }

  export type ProductFlairMapCreateOrConnectWithoutFlairInput = {
    where: ProductFlairMapWhereUniqueInput
    create: XOR<ProductFlairMapCreateWithoutFlairInput, ProductFlairMapUncheckedCreateWithoutFlairInput>
  }

  export type ProductFlairMapCreateManyFlairInputEnvelope = {
    data: ProductFlairMapCreateManyFlairInput | ProductFlairMapCreateManyFlairInput[]
    skipDuplicates?: boolean
  }

  export type ProductFlairMapUpsertWithWhereUniqueWithoutFlairInput = {
    where: ProductFlairMapWhereUniqueInput
    update: XOR<ProductFlairMapUpdateWithoutFlairInput, ProductFlairMapUncheckedUpdateWithoutFlairInput>
    create: XOR<ProductFlairMapCreateWithoutFlairInput, ProductFlairMapUncheckedCreateWithoutFlairInput>
  }

  export type ProductFlairMapUpdateWithWhereUniqueWithoutFlairInput = {
    where: ProductFlairMapWhereUniqueInput
    data: XOR<ProductFlairMapUpdateWithoutFlairInput, ProductFlairMapUncheckedUpdateWithoutFlairInput>
  }

  export type ProductFlairMapUpdateManyWithWhereWithoutFlairInput = {
    where: ProductFlairMapScalarWhereInput
    data: XOR<ProductFlairMapUpdateManyMutationInput, ProductFlairMapUncheckedUpdateManyWithoutFlairInput>
  }

  export type ProductCreateWithoutFlairsInput = {
    name: string
    slug: string
    gender: $Enums.Gender
    description?: string | null
    netWeight: number
    grossWeight?: number | null
    huid: string
    sku: string
    karat: $Enums.Karat
    price: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string | null
    stockQuantity?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    metaTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategory: SubcategoryCreateNestedOneWithoutProductsInput
    tags?: ProductTagMapCreateNestedManyWithoutProductInput
    images?: ProductImageCreateNestedManyWithoutProductInput
    variants?: ProductVariantCreateNestedManyWithoutProductInput
    materials?: ProductMaterialCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutFlairsInput = {
    id?: number
    name: string
    slug: string
    gender: $Enums.Gender
    description?: string | null
    netWeight: number
    grossWeight?: number | null
    huid: string
    sku: string
    karat: $Enums.Karat
    price: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string | null
    stockQuantity?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    subcategoryId: number
    metaTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: ProductTagMapUncheckedCreateNestedManyWithoutProductInput
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
    materials?: ProductMaterialUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutFlairsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutFlairsInput, ProductUncheckedCreateWithoutFlairsInput>
  }

  export type FlairCreateWithoutProductsInput = {
    name: string
    color?: string | null
  }

  export type FlairUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    color?: string | null
  }

  export type FlairCreateOrConnectWithoutProductsInput = {
    where: FlairWhereUniqueInput
    create: XOR<FlairCreateWithoutProductsInput, FlairUncheckedCreateWithoutProductsInput>
  }

  export type ProductUpsertWithoutFlairsInput = {
    update: XOR<ProductUpdateWithoutFlairsInput, ProductUncheckedUpdateWithoutFlairsInput>
    create: XOR<ProductCreateWithoutFlairsInput, ProductUncheckedCreateWithoutFlairsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutFlairsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutFlairsInput, ProductUncheckedUpdateWithoutFlairsInput>
  }

  export type ProductUpdateWithoutFlairsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    description?: NullableStringFieldUpdateOperationsInput | string | null
    netWeight?: FloatFieldUpdateOperationsInput | number
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    huid?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    karat?: EnumKaratFieldUpdateOperationsInput | $Enums.Karat
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategory?: SubcategoryUpdateOneRequiredWithoutProductsNestedInput
    tags?: ProductTagMapUpdateManyWithoutProductNestedInput
    images?: ProductImageUpdateManyWithoutProductNestedInput
    variants?: ProductVariantUpdateManyWithoutProductNestedInput
    materials?: ProductMaterialUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutFlairsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    description?: NullableStringFieldUpdateOperationsInput | string | null
    netWeight?: FloatFieldUpdateOperationsInput | number
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    huid?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    karat?: EnumKaratFieldUpdateOperationsInput | $Enums.Karat
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subcategoryId?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ProductTagMapUncheckedUpdateManyWithoutProductNestedInput
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
    materials?: ProductMaterialUncheckedUpdateManyWithoutProductNestedInput
  }

  export type FlairUpsertWithoutProductsInput = {
    update: XOR<FlairUpdateWithoutProductsInput, FlairUncheckedUpdateWithoutProductsInput>
    create: XOR<FlairCreateWithoutProductsInput, FlairUncheckedCreateWithoutProductsInput>
    where?: FlairWhereInput
  }

  export type FlairUpdateToOneWithWhereWithoutProductsInput = {
    where?: FlairWhereInput
    data: XOR<FlairUpdateWithoutProductsInput, FlairUncheckedUpdateWithoutProductsInput>
  }

  export type FlairUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FlairUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductCreateWithoutImagesInput = {
    name: string
    slug: string
    gender: $Enums.Gender
    description?: string | null
    netWeight: number
    grossWeight?: number | null
    huid: string
    sku: string
    karat: $Enums.Karat
    price: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string | null
    stockQuantity?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    metaTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategory: SubcategoryCreateNestedOneWithoutProductsInput
    tags?: ProductTagMapCreateNestedManyWithoutProductInput
    flairs?: ProductFlairMapCreateNestedManyWithoutProductInput
    variants?: ProductVariantCreateNestedManyWithoutProductInput
    materials?: ProductMaterialCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutImagesInput = {
    id?: number
    name: string
    slug: string
    gender: $Enums.Gender
    description?: string | null
    netWeight: number
    grossWeight?: number | null
    huid: string
    sku: string
    karat: $Enums.Karat
    price: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string | null
    stockQuantity?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    subcategoryId: number
    metaTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: ProductTagMapUncheckedCreateNestedManyWithoutProductInput
    flairs?: ProductFlairMapUncheckedCreateNestedManyWithoutProductInput
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
    materials?: ProductMaterialUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutImagesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
  }

  export type ProductUpsertWithoutImagesInput = {
    update: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutImagesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type ProductUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    description?: NullableStringFieldUpdateOperationsInput | string | null
    netWeight?: FloatFieldUpdateOperationsInput | number
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    huid?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    karat?: EnumKaratFieldUpdateOperationsInput | $Enums.Karat
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategory?: SubcategoryUpdateOneRequiredWithoutProductsNestedInput
    tags?: ProductTagMapUpdateManyWithoutProductNestedInput
    flairs?: ProductFlairMapUpdateManyWithoutProductNestedInput
    variants?: ProductVariantUpdateManyWithoutProductNestedInput
    materials?: ProductMaterialUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    description?: NullableStringFieldUpdateOperationsInput | string | null
    netWeight?: FloatFieldUpdateOperationsInput | number
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    huid?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    karat?: EnumKaratFieldUpdateOperationsInput | $Enums.Karat
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subcategoryId?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ProductTagMapUncheckedUpdateManyWithoutProductNestedInput
    flairs?: ProductFlairMapUncheckedUpdateManyWithoutProductNestedInput
    variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
    materials?: ProductMaterialUncheckedUpdateManyWithoutProductNestedInput
  }

  export type SubcategoryCreateManyCategoryInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubcategoryUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubcategoryUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubcategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManySubcategoryInput = {
    id?: number
    name: string
    slug: string
    gender: $Enums.Gender
    description?: string | null
    netWeight: number
    grossWeight?: number | null
    huid: string
    sku: string
    karat: $Enums.Karat
    price: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string | null
    stockQuantity?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    metaTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutSubcategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    description?: NullableStringFieldUpdateOperationsInput | string | null
    netWeight?: FloatFieldUpdateOperationsInput | number
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    huid?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    karat?: EnumKaratFieldUpdateOperationsInput | $Enums.Karat
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ProductTagMapUpdateManyWithoutProductNestedInput
    flairs?: ProductFlairMapUpdateManyWithoutProductNestedInput
    images?: ProductImageUpdateManyWithoutProductNestedInput
    variants?: ProductVariantUpdateManyWithoutProductNestedInput
    materials?: ProductMaterialUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSubcategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    description?: NullableStringFieldUpdateOperationsInput | string | null
    netWeight?: FloatFieldUpdateOperationsInput | number
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    huid?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    karat?: EnumKaratFieldUpdateOperationsInput | $Enums.Karat
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ProductTagMapUncheckedUpdateManyWithoutProductNestedInput
    flairs?: ProductFlairMapUncheckedUpdateManyWithoutProductNestedInput
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
    materials?: ProductMaterialUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutSubcategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    description?: NullableStringFieldUpdateOperationsInput | string | null
    netWeight?: FloatFieldUpdateOperationsInput | number
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    huid?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    karat?: EnumKaratFieldUpdateOperationsInput | $Enums.Karat
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductTagMapCreateManyProductInput = {
    tagId: number
  }

  export type ProductFlairMapCreateManyProductInput = {
    flairId: number
  }

  export type ProductImageCreateManyProductInput = {
    id?: number
    imageUrl: string
    cloudId?: string | null
    alt?: string | null
    priority?: number
    width?: number | null
    height?: number | null
    isDefault?: boolean
    createdAt?: Date | string
  }

  export type ProductVariantCreateManyProductInput = {
    id?: number
    name: string
    size?: string | null
    color?: string | null
    price: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string | null
    sku: string
    stockQuantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductMaterialCreateManyProductInput = {
    materialId: number
    percentage?: number | null
  }

  export type ProductTagMapUpdateWithoutProductInput = {
    tag?: ProductTagUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductTagMapUncheckedUpdateWithoutProductInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductTagMapUncheckedUpdateManyWithoutProductInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductFlairMapUpdateWithoutProductInput = {
    flair?: FlairUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductFlairMapUncheckedUpdateWithoutProductInput = {
    flairId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductFlairMapUncheckedUpdateManyWithoutProductInput = {
    flairId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductImageUpdateWithoutProductInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    cloudId?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    cloudId?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    cloudId?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sku?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sku?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sku?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductMaterialUpdateWithoutProductInput = {
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    material?: MaterialUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductMaterialUncheckedUpdateWithoutProductInput = {
    materialId?: IntFieldUpdateOperationsInput | number
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductMaterialUncheckedUpdateManyWithoutProductInput = {
    materialId?: IntFieldUpdateOperationsInput | number
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductMaterialCreateManyMaterialInput = {
    productId: number
    percentage?: number | null
  }

  export type ProductMaterialUpdateWithoutMaterialInput = {
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    product?: ProductUpdateOneRequiredWithoutMaterialsNestedInput
  }

  export type ProductMaterialUncheckedUpdateWithoutMaterialInput = {
    productId?: IntFieldUpdateOperationsInput | number
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductMaterialUncheckedUpdateManyWithoutMaterialInput = {
    productId?: IntFieldUpdateOperationsInput | number
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductTagMapCreateManyTagInput = {
    productId: number
  }

  export type ProductTagMapUpdateWithoutTagInput = {
    product?: ProductUpdateOneRequiredWithoutTagsNestedInput
  }

  export type ProductTagMapUncheckedUpdateWithoutTagInput = {
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductTagMapUncheckedUpdateManyWithoutTagInput = {
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductFlairMapCreateManyFlairInput = {
    productId: number
  }

  export type ProductFlairMapUpdateWithoutFlairInput = {
    product?: ProductUpdateOneRequiredWithoutFlairsNestedInput
  }

  export type ProductFlairMapUncheckedUpdateWithoutFlairInput = {
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductFlairMapUncheckedUpdateManyWithoutFlairInput = {
    productId?: IntFieldUpdateOperationsInput | number
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