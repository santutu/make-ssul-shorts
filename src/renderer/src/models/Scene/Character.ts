import { Expose } from "class-transformer";

// 캐릭터 정의

export class Character {
  @Expose()
  name: string = "";

  @Expose()
  description: string = "";


}
