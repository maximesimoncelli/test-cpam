export const MESSAGES = {
  PATTE: "Patte",
  TATRAS: "Tatras",
  PATTATRAS: "Pattatras",
} as const;

export type MessagesKeys = keyof typeof MESSAGES;
export type MessagesValues = (typeof MESSAGES)[MessagesKeys];
