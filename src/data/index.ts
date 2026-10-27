import type { SiteContent } from './types';
import * as fr from './fr';
import * as en from './en';
import * as ar from './ar';

const content: Record<string, SiteContent> = { fr, en, ar };

export function getContent(locale: string): SiteContent {
  return content[locale] ?? content.fr;
}

export type { SiteContent };
export * from './types';
