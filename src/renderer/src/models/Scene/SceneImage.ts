import { Expose, Type } from "class-transformer";
import type { ImageAnimation } from "./ImageAnimation";

// 장면별 이미지 정보

export class SceneImage {
  @Expose()
  status: ImageStatus = ImageStatus.NoImage;

  @Expose()
  type: ImageType = ImageType.NoImage;

  @Expose()
  prompt: string = "";

  @Expose()
  originalPrompt: string = "";

  @Expose()
  reason: string = "";

  @Expose()
  imagePath?: string; // 생성된 이미지 파일 경로

  @Expose()
  imagePaths: string[] = []; // 이미지 생성 히스토리

  @Expose()
  animation: ImageAnimation = {
    type: "none",
  };

  @Expose()
  imageGenerationCount: number = 1;

  @Expose()
  promptFixExplanation: string = ""; // 프롬프트 수정이유
}

export enum ImageStatus {
  NoImage = "no_image", // 이미지 없음
  HasImage = "has_image", // 이미지 있음
  GeneratingImage = "generating_image", // 이미지 생성중
  ImageGenerationError = "image_generation_error", // 이미지 생성중 에러
  ImageFiltered = "image_filtered", // 이미지 필터링 걸림
  ImageRequired = "image_required", // 이미지 필요 상태
}

export enum ImageType {
  NewImage = "newImage",
  ContinueImage = "continueImage",
  NoImage = "noImage",
}
