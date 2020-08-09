export interface RequestStatus {
  status: 'sent' | 'error' | 'received' | 'idle',
  error?: any,
}

export interface RequestProp {
  requestStatus : RequestStatus,
  setRequestStatus : any,
}