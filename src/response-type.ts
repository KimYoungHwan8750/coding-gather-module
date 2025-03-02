import { CanvasData, EditorData } from "room-data";
import { LanguageType } from "./constant";
import { ChangeLanguagePayload, InputTextPayload } from "./payload-type";
import { Mutable } from "util-type";

export type SearchResponse = {
  pending: boolean
}

export type InputTextResponse = {
  language: LanguageType
} & InputTextPayload

export type ChangeLanguageResponse = {

} & ChangeLanguagePayload

export type FirstJoinResponse = {
  topEditorData: Mutable<EditorData>
  bottomEditorData: Mutable<EditorData>
  canvasData: CanvasData
}