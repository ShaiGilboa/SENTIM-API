export interface RequestStatus {
  status: 'sent' | 'error' | 'received' | 'idle',
  error?: any,
}

export interface RequestProp {
  requestStatus : RequestStatus,
  setRequestStatus : any,
}

export interface SentimentRes {
  polarity: number,
  type: "positive" | "neutral" | "negative"
}

export interface AssessmentSentence {
  sentence: string,
  sentiment: SentimentRes,
}

export interface Assessment {
  result: SentimentRes,
  sentences: AssessmentSentence[], 
}