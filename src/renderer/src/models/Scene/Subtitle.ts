import { Expose, Type } from "class-transformer";
import { SceneImage } from "./SceneImage";

export class Subtitle {
  @Expose()
  speaker: string = "";
  @Expose()
  text: string = ""; // 누적된 자막 텍스트

  // 누적된 자막 텍스트
  @Expose()
  @Type(() => SceneImage)
  image?: SceneImage; // 해당 장면의 이미지

  // 해당 장면의 이미지
  @Expose()
  startTime: number = 0;
}
