import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @ViewChild('drawer') drawer: MatSidenav;
  search = '';
  data: any;

  private _unsubscribeAll: Subject<any>;
  constructor(public chatService: ChatService, private router: Router) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.chatService.getUserdata()
    this.data = this.chatService.getUserdata()
    console.log(this.data)

  }
  toggle() {
    this.drawer.toggle()
  }

  add(){
    this.router.navigateByUrl('/note')
  }

}
