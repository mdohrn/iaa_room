import {Component, OnInit} from '@angular/core';
import {Room} from './shared/room';
import {RoomService} from './shared/room.service';

@Component({
    selector: 'app-rooms',
    templateUrl: './rooms.component.html',
    styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

    rooms: Room[];

    constructor(private roomService: RoomService) {
    }

    ngOnInit(): void {
        this.reloadList();
    }

    onDeleteRoom(roomToBeDeleted: Room): void {
        this.roomService.deleteRoom(roomToBeDeleted).subscribe(ignored => this.reloadList());
    }

    private reloadList(): void {
        this.roomService.listAllRooms().subscribe(rooms => {
            this.rooms = rooms;
        });
    }
}
