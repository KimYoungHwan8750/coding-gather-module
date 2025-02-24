import { AppConstant, Tools } from "./constant";
export class EditorData {
    constructor(direction, language, text) {
        this.direction = direction;
        this.language = language;
        this.text = text;
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
    setLanguage(language) {
        this.language = language;
    }
    setText(text) {
        this.text = text;
    }
}
export class CanvasData {
    constructor() {
        this.url = "";
        this.binary = [];
        this.tool = Tools.CURSOR;
    }
    getUrl() {
        return this.url;
    }
    getBinary() {
        return this.binary;
    }
    getTool() {
        return this.tool;
    }
    setUrl(url) {
        this.url = url;
    }
    setBinary(binary) {
        this.binary = binary;
    }
    setTool(tool) {
        this.tool = tool;
        return tool;
    }
}
export class EditorDatas {
    constructor() {
        this.topEditorData = new EditorData(AppConstant.direction.TOP, AppConstant.language.PLAIN_TEXT, "");
        this.bottomEditorData = new EditorData(AppConstant.direction.BOTTOM, AppConstant.language.PLAIN_TEXT, "");
    }
}
