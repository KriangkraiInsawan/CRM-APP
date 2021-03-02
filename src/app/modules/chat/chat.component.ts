import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
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
  messages: any = [];
  profile: any = [];
  message: string;

  private _unsubscribeAll: Subject<any>;

  bodydata = [
    {
      "createby": "Theerasak Tubrit",
      "_id": "601180e128d90332b8ee5535",
      "contactName": "watcharapong",
      "contactImg": "https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.0-9/134913096_3530000260440242_7114700459074630105_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFelJSEvEL715OyqHxVuF9qe62trROoDGV7ra2tE6gMZQ3zqRGd4FoQaVvM7yMVdAoE6epsYKTydGplRLVUCmyh&_nc_ohc=791vf3mzxFAAX_NypbP&_nc_ht=scontent.fbkk13-2.fna&oh=0daafb52ffaf727923e529b171aa9ba1&oe=60410BF6",
      "contactCompany": "บริษัท ละมุนภัณฑ์ เทรดดิ้ง จำกัด",
      "contactPhoneNo": "0623235361",
      "contactEmail": "pee.ch2014@gmail.com",
      "contactLineId": "ppwatchara",
      "contactAddress": "65-1",
      "contactChat": [],
      "chat": "สวัสดี",
      "chatDate": "1/12/2020",
      "created": "2021-01-27T15:04:01.496Z",
      "__v": 0,
      "id": "601180e128d90332b8ee5535",
      "updateby": "Theerasak Tubrit"
    },
  ]

  constructor(public chatService: ChatService, private router: Router) {
    this._unsubscribeAll = new Subject();
  }



  ngOnInit(): void {
    this.chatService.getUserdata()
    this.data = this.chatService.getUserdata()
    this.chatService.getServerEventSource('http://localhost:3000/events')
      .subscribe((chat) => {
        console.log(chat)
        let data = JSON.parse(chat.data);
        if (data.lenght > 0) {
          data.forEach(chatsend => {
            //  console.log(chatsend)
            this.bodydata[0].contactChat.push(chatsend);
          });
          this.messages = this.bodydata[0].contactChat;
        } else {
          console.log("hi")
          this.messages.push(data)
        }
      });

    this.chatService.getProfile().then((profilechat) => {
      let profile = profilechat.data;
      console.log(profile)
      // this.profile = data
      // console.log( this.profile)
    })

    // this.chatService.getServerEventSource('http://localhost:3000/getprofile')
    // .subscribe((chat) =>{
    //   console.log(chat)
    // });

  }

  async sendMessage() {
    let body = {
      "messaging_type": "RESPONSE",
      "recipient": {
        "id": "3760179757373146"
      },
      "message": {
        "text": this.message
      }
    }
    this.chatService.sendData(body).then(() => {
      this.message = '';

    })



  }

  toggle() {
    this.drawer.toggle()
  }

  add() {
    this.router.navigateByUrl('/note')
  }

}
