import { LanguageType } from "./constant"

export type AllPayload = InputTextPayload | ChangeLanguagePayload | SearchPayload | string

export type InputTextPayload = {
  direction: string
  text: string
}

export type ChangeLanguagePayload = {
  direction: string
  language: LanguageType

}

export type SearchPayload = {
  url: string
}