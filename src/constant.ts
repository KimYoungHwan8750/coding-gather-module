// 타입 정의
export type DirectionType = "top" | "bottom";
export type ToolsType = "cursor" | "hand" | "pencil" | "eraser" | "zoomIn" | "zoomOut" | "scissors" | "reload" | "popStack" | "chatBubble";
export type LanguageType = "Plain Text" | "JavaScript" | "TypeScript" | "Python" | "Html" | "Css" | "Java" | "C";

// 상수 객체
export const Direction = {
  TOP: "top" as DirectionType,
  BOTTOM: "bottom" as DirectionType
} as const;

export const Tools = {
  CURSOR: "cursor" as ToolsType,
  HAND: "hand" as ToolsType,
  PENCIL: "pencil" as ToolsType,
  ERASER: "eraser" as ToolsType,
  ZOOM_IN: "zoomIn" as ToolsType,
  ZOOM_OUT: "zoomOut" as ToolsType,
  SCISSORS: "scissors" as ToolsType,
  RELOAD: "reload" as ToolsType,
  POP_STACK: "popStack" as ToolsType,
  CHAT_BUBBLE: "chatBubble" as ToolsType
} as const;

export const Language = {
  PLAIN_TEXT: "Plain Text" as LanguageType,
  JAVASCRIPT: "JavaScript" as LanguageType,
  TYPESCRIPT: "TypeScript" as LanguageType,
  PYTHON: "Python" as LanguageType,
  HTML: "Html" as LanguageType,
  CSS: "Css" as LanguageType,
  JAVA: "Java" as LanguageType,
  C: "C" as LanguageType
} as const;

export const WebsocketEvent = {
  INPUT_TEXT: "inputText",
  CHANGE_LANGUAGE: "changeLanguage",
  CHANGE_TOOL: "changeTool",
  SEARCH: "search",
} as const;

export const AppConstant = {
  direction: Direction,
  tools: Tools,
  language: Language,
  websocketEvent: WebsocketEvent
} as const;