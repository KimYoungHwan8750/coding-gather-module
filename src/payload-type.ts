import { DirectionType, LanguageType } from "./constant"

export type AllPayload = InputTextPayload | ChangeLanguagePayload | SearchPayload | string

export type InputTextPayload = {
  direction: DirectionType
  text: string
}

export type ChangeLanguagePayload = {
  direction: DirectionType
  language: LanguageType

}

export type SearchPayload = {
  url: string
}