import { Observable } from 'rxjs';
import { MembersService } from './../../_services/members.service';
import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
 members$: Observable<Member[]> | undefined;
  //members: Member[] = [];

  constructor(private membersService: MembersService) { }

  ngOnInit(): void {
    this.members$ = this.membersService.getMembers();
    //this.loadMembers();
  }

  // loadMembers() {
  //   this.membersService.getMembers().subscribe(members => {
  //     this.members = members;   //AL AKO OOV VRACAMO, NE BRISEMO GORNJI RED, TREBAJU NAM OBA
  //   })

  // }

}
