import { Expose } from "class-transformer";

// TTS 대본 라인

export class ScriptLine {
    @Expose()
    text: string = "";

    @Expose()
    speaker?: string; // 원본 대본의 화자명
}
