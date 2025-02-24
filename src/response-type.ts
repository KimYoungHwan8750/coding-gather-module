import { LanguageType } from "./constant";
import { ChangeLanguagePayload, InputTextPayload } from "./payload-type";

export type SearchResponse = {
  code: 200 | 404;
  data: string;
}

export type InputTextResponse = {
  language: LanguageType;
} & InputTextPayload

export type ChangeLanguageResponse = {

} & ChangeLanguagePayload