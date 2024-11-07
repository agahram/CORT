// web-speech-api.d.ts
interface Window {
  SpeechRecognition: SpeechRecognition;
  webkitSpeechRecognition: SpeechRecognition; // For Safari support
  mozSpeechRecognition: SpeechRecognition;
  msSpeechRecognition: SpeechRecognition;
}

declare var webkitSpeechRecognition: SpeechRecognition; // For Safari support

interface SpeechRecognition {
  new(): SpeechRecognition;
  grammars: any;
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  serviceURI: string;
  start(): void;
  stop(): void;
  abort(): void;
  onaudiostart: (this: SpeechRecognitionEvent) => any;
  onsoundstart: (this: SpeechRecognitionEvent) => any;
  onspeechstart: (this: SpeechRecognitionEvent) => any;
  onspeechend: (this: SpeechRecognitionEvent) => any;
  onsoundend: (this: SpeechRecognitionEvent) => any;
  onaudioend: (this: SpeechRecognitionEvent) => any;
  onresult: (this: SpeechRecognitionEvent) => any;
  onnomatch: (this: SpeechRecognitionEvent) => any;
  onerror: (this: SpeechRecognitionError) => any;
  onstart: (this: SpeechRecognitionEvent) => any;
  onend: (this: SpeechRecognitionEvent) => any;
}

interface SpeechRecognitionEvent extends Event {
  interpretation: any;
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

interface SpeechRecognitionError extends Event {
  error: string;
}

interface SpeechRecognitionResultList {
  item(index: number): SpeechRecognitionResult;
  length: number;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  item(index: number): SpeechRecognitionAlternative;
  length: number;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}
