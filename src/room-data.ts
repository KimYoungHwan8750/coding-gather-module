import { ChangeLanguagePayload, InputTextPayload } from "./payload-type";
import { AppConstant, Direction, DirectionType, Language, LanguageType, Tools, ToolsType } from "./constant"

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

}

export class CanvasData {
  private url: string = "";
  private binary: number[] = [];
  private tool: ToolsType = Tools.CURSOR;

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

  setBinary(binary: number[]) {
    this.binary = binary;
  }

  setTool(tool: ToolsType) {
    this.tool = tool;
    return tool;
  }
}

export type EditorDatasType = {
  topEditorData: EditorData
  bottomEditorData: EditorData
}
export class EditorDatas{
  topEditorData: EditorData = new EditorData(AppConstant.direction.TOP, AppConstant.language.PLAIN_TEXT, "");
  bottomEditorData: EditorData = new EditorData(AppConstant.direction.BOTTOM, AppConstant.language.PLAIN_TEXT, "");
}