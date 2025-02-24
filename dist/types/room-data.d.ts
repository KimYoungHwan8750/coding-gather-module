import { DirectionType, LanguageType, ToolsType } from "./constant";
export declare class EditorData {
    private readonly direction;
    private language;
    private text;
    constructor(direction: DirectionType, language: LanguageType, text: string);
    getDirection(): DirectionType;
    getLanguage(): LanguageType;
    getText(): string;
    setLanguage(language: LanguageType): void;
    setText(text: string): void;
}
export declare class CanvasData {
    private url;
    private binary;
    private tool;
    getUrl(): string;
    getBinary(): number[];
    getTool(): ToolsType;
    setUrl(url: string): void;
    setBinary(binary: number[]): void;
    setTool(tool: ToolsType): ToolsType;
}
export type EditorDatasType = {
    topEditorData: EditorData;
    bottomEditorData: EditorData;
};
export declare class EditorDatas {
    topEditorData: EditorData;
    bottomEditorData: EditorData;
}
