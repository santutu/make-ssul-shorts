import { Exclude, Expose } from 'class-transformer'

export class User {
  @Expose()
  name: string = ''

  @Exclude()
  age: number = 2
}
