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

    currentRoom?: Room;

    constructor(private roomService: RoomService) {
    }

    ngOnInit(): void {
        this.reloadList();
    }

    onEditRoom(room: Room): void {
        this.currentRoom = room;
    }

    onAddRoom(): void {
        this.currentRoom = new Room();
    }

    onDeleteRoom(roomToBeDeleted: Room): void {
        this.roomService.deleteRoom(roomToBeDeleted).subscribe(() => this.reloadList());
    }

    onSave(roomToBeSaved: Room): void {
        this.roomService.saveRoom(roomToBeSaved).subscribe(() => this.reloadList());
    }

    onCancel(): void {
        this.reloadList();
    }

    private reloadList(): void {
        this.currentRoom = null;
        this.roomService.listAllRooms().subscribe(rooms => this.rooms = rooms);
    }
}
