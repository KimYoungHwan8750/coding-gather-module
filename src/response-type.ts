import { LanguageType } from "./constant";
import { ChangeLanguagePayload, InputTextPayload } from "./payload-type";

export type SearchResponse = {
  code: 200 | 404
  binary: Uint8Array
  message?: string
}

export type InputTextResponse = {
  language: LanguageType
} & InputTextPayload

export type ChangeLanguageResponse = {

} & ChangeLanguagePayload