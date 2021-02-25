import { Injectable } from '@angular/core';
// import {SSE} from 'sse.js'

@Injectable({
  providedIn: 'root'
})
export class SseService {

  // eventSource:SSE;

  getEventSource(url:string):EventSource{
return new EventSource(url);
  }

}
