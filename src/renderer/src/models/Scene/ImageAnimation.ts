
// 줌 애니메이션
export interface ZoomAnimation {
  type: "zoom";
  speed: number; // 애니메이션 속도
  intensity: number; // 줌 강도
  zoomIn: boolean; // true: 확대, false: 축소
}

// 이동 애니메이션
export interface MoveAnimation {
  type: "move";
  speed: number; // 애니메이션 속도
  direction: "left" | "right" | "up" | "down";
  distance: number; // 이동 거리 (픽셀)
}

// 애니메이션 없음
export interface NoneAnimation {
  type: "none";
}

// 애니메이션 타입 유니온
export type ImageAnimation = ZoomAnimation | MoveAnimation | NoneAnimation;
