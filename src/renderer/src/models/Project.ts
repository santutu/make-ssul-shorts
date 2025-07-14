import { Expose, Type } from "class-transformer";
import { Scene } from "./Scene/Scene";
import { ScriptLine } from "./ScriptLine";
import { Character } from "./Scene/Character";

// 메인 프로젝트 클래스
export class Project {
  @Expose()
  name: string = "";
  // 프로젝트 파일 관리
  @Expose()
  projectPath: string = ""; // 프로젝트 저장 경로

  // Step 1: TTS 관련
  @Expose()
  originalScript: string = ""; // 원본 대본

  @Expose()
  @Type(() => ScriptLine)
  scriptLines: ScriptLine[] = []; // 구조화된 대본

  @Expose()
  typecastFilePath?: string; // 타입캐스트 txt 파일 경로

  @Expose()
  audioFilePath: string = ""; // TTS 오디오 파일

  @Expose()
  audioFilePaths: string[] = []; // TTS 오디오 파일들

  // Step 2: 캐릭터 정의
  @Expose()
  @Type(() => Character)
  characters: Character[] = [];

  // Step 3: 최종 결과물
  @Expose()
  @Type(() => Scene)
  scenes: Scene[] = []; // 누적 자막 장면들

  @Expose()
  currentStep: "script" | "character" | "scene" | "complete" = "script";

  // 크레딧 관리 (웹서버 연동)
  @Expose()
  creditsUsed: number = 0;

  constructor() {}

  // 프로젝트 상태 체크 메서드들
  isScriptComplete(): boolean {
    return this.scriptLines.length > 0;
  }
  isCharacterComplete(): boolean {
    return this.characters.length > 0;
  }

  isScenesComplete(): boolean {
    //todo
    throw new Error("Not implemented");
  }

  // 캐릭터 추출 헬퍼
  extractCharactersFromScript(): string[] {
    const characterNames = new Set<string>();
    this.scriptLines.forEach((line) => {
      if (line.speaker) {
        characterNames.add(line.speaker);
      }
    });
    return Array.from(characterNames);
  }
  getProgressPercentage(): number {
    let progress = 0;
    if (this.isScriptComplete()) progress += 33;
    if (this.isCharacterComplete()) progress += 33;
    if (this.isScenesComplete()) progress += 34;
    return progress;
  }
}
