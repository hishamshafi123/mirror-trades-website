import 'server-only'

const dictionaries: { [key: string]: () => Promise<Record<string, unknown>> } = {
  en: () => import('@/content/en.json').then((module) => module.default),
  el: () => import('@/content/el.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => dictionaries[locale]()
