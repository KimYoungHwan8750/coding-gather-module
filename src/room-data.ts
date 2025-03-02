import { AppConstant, DirectionType, LanguageType, Tools, ToolsType } from "./constant"

export class EditorData {

  constructor(public readonly direction: DirectionType, public language: LanguageType, public text: string) {
    this.direction = direction;
    this.language = language;
    this.text = text;
  }
}

export class EditorController {
  private editorData: EditorData;
  constructor(direction: DirectionType) {
    this.editorData = new EditorData(direction, AppConstant.language.PLAIN_TEXT, "");
  }

  getDirection() {
    return this.editorData.direction;
  }

  getLanguage() {
    return this.editorData.language;
  }

  getText() {
    return this.editorData.text;
  }

  setLanguage(language: LanguageType) {
    this.editorData.language = language;
  }

  setText(text: string) {
    this.editorData.text = text;
  }

  toString() {
    return `direction: ${this.editorData.direction}\n` +
    `language: ${this.editorData.language}\n` +
    `text: ${this.editorData.text}`;
  }
}

export class CanvasData {
  public url: string = "";
  public tool: ToolsType = Tools.CURSOR;
  public pending: boolean = false;
}

export class CanvasController {
  private readonly canvasData: CanvasData = new CanvasData();
  getUrl() {
    return this.canvasData.url;
  }

  getTool() {
    return this.canvasData.tool;
  }

  setUrl(url: string) {
    this.canvasData.url = url;
  }

  setTool(tool: ToolsType) {
    this.canvasData.tool = tool;
    return tool;
  }

  isPending() {
    return this.canvasData.pending;
  }

  setPending(pending: boolean) {
    this.canvasData.pending = pending;
  }

  toString() {
    return `url: ${this.canvasData.url}\n` +
    `tools: ${this.canvasData.tool}`;
  }
}

export class DrawingCanvasData {
  imageData: ImageData | null = null;
}

export class DrawingCanvasDataController {

}

export type EditorsControllerType = {
  topEditorController: EditorController
  bottomEditorController: EditorController
}

export class EditorsController{
  topEditorController: EditorController = new EditorController(AppConstant.direction.TOP);
  bottomEditorController: EditorController = new EditorController(AppConstant.direction.BOTTOM);
}