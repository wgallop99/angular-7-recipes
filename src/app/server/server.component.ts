import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }

  getServerStatus() {
    return this.serverStatus;
  }

  updateOnServerName(event: any) {
    console.log(event);
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
