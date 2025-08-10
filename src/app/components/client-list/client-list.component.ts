import { Component, OnInit } from '@angular/core';
import { ClientService, Client } from '../../services/client.service';
import {MatDivider, MatList, MatListItem, MatListItemIcon} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {MatLine} from '@angular/material/core';
import {NgForOf} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  standalone: true,
  imports: [
    MatIcon,
    MatLine,
    MatListItemIcon,
    MatListItem,
    MatList,
    NgForOf,
    MatButton,
    RouterLink,
    MatDivider,
  ],
  styleUrls: ['./client-list.component.sass']
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(data => {
      this.clients = data;
    });
  }
}
