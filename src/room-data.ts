import { AppConstant, DirectionType, LanguageType, Tools, ToolsType } from "./constant"

export class EditorData {

  constructor(private readonly direction: DirectionType, private language: LanguageType, private text: string) {
    this.direction = direction;
    this.language = language;
    this.text = text;
  }

  getDirection() {
    return this.direction;
  }

  getLanguage() {
    return this.language;
  }

  getText() {
    return this.text;
  }

  setLanguage(language: LanguageType) {
    this.language = language;
  }

  setText(text: string) {
    this.text = text;
  }

  toString() {
    return `direction: ${this.direction}\n` +
    `language: ${this.language}\n` +
    `text: ${this.text}`;
  }

  withLanguage(language: LanguageType) {
    return new EditorData(this.direction, language, this.text);
  }

  withText(text: string) {
    return new EditorData(this.direction, this.language, text);
  }

  withDirection(direction: DirectionType) {
    return new EditorData(direction, this.language, this.text);
  }

}

export class CanvasData {
  private url: string = "";
  private binary: Uint8Array = Uint8Array.from([]);
  private tool: ToolsType = Tools.CURSOR;
  private pending: boolean = false;

  getUrl() {
    return this.url;
  }

  getBinary() {
    return this.binary;
  }

  getTool() {
    return this.tool;
  }

  setUrl(url: string) {
    this.url = url;
  }

  setBinary(binary: Uint8Array) {
    this.binary = binary;
  }

  setTool(tool: ToolsType) {
    this.tool = tool;
    return tool;
  }

  isPending() {
    return this.pending;
  }

  setPending(pending: boolean) {
    this.pending = pending;
  }

  toString() {
    return `url: ${this.url}\n` +
    `tools: ${this.tool}`;
  }

  withUrl(url: string) {
    const canvas = new CanvasData();
    canvas.setUrl(url);
    canvas.setBinary(this.binary);
    canvas.setTool(this.tool);
    canvas.setPending(this.pending);
    return canvas;
  }

  withBinary(binary: Uint8Array) {
    const canvas = new CanvasData();
    canvas.setUrl(this.url);
    canvas.setBinary(binary);
    canvas.setTool(this.tool);
    canvas.setPending(this.pending);
    return canvas;
  }

  withTool(tool: ToolsType) {
    const canvas = new CanvasData();
    canvas.setUrl(this.url);
    canvas.setBinary(this.binary);
    canvas.setTool(tool);
    canvas.setPending(this.pending);
    return canvas;
  }

  withPending(pending: boolean) {
    const canvas = new CanvasData();
    canvas.setUrl(this.url);
    canvas.setBinary(this.binary);
    canvas.setTool(this.tool);
    canvas.setPending(pending);
    return canvas;
  }
}

export type EditorDatasType = {
  topEditorData: EditorData
  bottomEditorData: EditorData
}
export class EditorDatas{
  topEditorData: EditorData = new EditorData(AppConstant.direction.TOP, AppConstant.language.PLAIN_TEXT, "");
  bottomEditorData: EditorData = new EditorData(AppConstant.direction.BOTTOM, AppConstant.language.PLAIN_TEXT, "");

  getCorrectDirectionEditor(direction: DirectionType): EditorData {
    return direction === AppConstant.direction.TOP ? this.topEditorData : this.bottomEditorData;
  }
}