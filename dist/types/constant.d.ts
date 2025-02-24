export type DirectionType = "top" | "bottom";
export type ToolsType = "cursor" | "hand" | "pencil" | "eraser" | "zoomIn" | "zoomOut" | "scissors" | "reload" | "popStack" | "chatBubble";
export type LanguageType = "Plain Text" | "JavaScript" | "TypeScript" | "Python" | "Html" | "Css" | "Java" | "C";
export declare const Direction: {
    readonly TOP: DirectionType;
    readonly BOTTOM: DirectionType;
};
export declare const Tools: {
    readonly CURSOR: ToolsType;
    readonly HAND: ToolsType;
    readonly PENCIL: ToolsType;
    readonly ERASER: ToolsType;
    readonly ZOOM_IN: ToolsType;
    readonly ZOOM_OUT: ToolsType;
    readonly SCISSORS: ToolsType;
    readonly RELOAD: ToolsType;
    readonly POP_STACK: ToolsType;
    readonly CHAT_BUBBLE: ToolsType;
};
export declare const Language: {
    readonly PLAIN_TEXT: LanguageType;
    readonly JAVASCRIPT: LanguageType;
    readonly TYPESCRIPT: LanguageType;
    readonly PYTHON: LanguageType;
    readonly HTML: LanguageType;
    readonly CSS: LanguageType;
    readonly JAVA: LanguageType;
    readonly C: LanguageType;
};
export declare const AppConstant: {
    readonly direction: {
        readonly TOP: DirectionType;
        readonly BOTTOM: DirectionType;
    };
    readonly tools: {
        readonly CURSOR: ToolsType;
        readonly HAND: ToolsType;
        readonly PENCIL: ToolsType;
        readonly ERASER: ToolsType;
        readonly ZOOM_IN: ToolsType;
        readonly ZOOM_OUT: ToolsType;
        readonly SCISSORS: ToolsType;
        readonly RELOAD: ToolsType;
        readonly POP_STACK: ToolsType;
        readonly CHAT_BUBBLE: ToolsType;
    };
    readonly language: {
        readonly PLAIN_TEXT: LanguageType;
        readonly JAVASCRIPT: LanguageType;
        readonly TYPESCRIPT: LanguageType;
        readonly PYTHON: LanguageType;
        readonly HTML: LanguageType;
        readonly CSS: LanguageType;
        readonly JAVA: LanguageType;
        readonly C: LanguageType;
    };
};
