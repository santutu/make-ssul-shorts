import { Expose, Type } from "class-transformer";
import { Subtitle } from "./Subtitle";

// 누적 자막 장면

export class Scene {
  @Expose()
  @Type(() => Subtitle)
  subtitles: Subtitle[] = [];
}
