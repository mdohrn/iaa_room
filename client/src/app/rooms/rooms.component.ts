import {Component, OnInit} from '@angular/core';
import {ROOMS} from './shared/mock-rooms';
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

    ngOnInit() {
        this.reloadList();
    }

    onEditRoom(room: Room) {
        this.currentRoom = room;
    }

    onAddRoom() {
        this.currentRoom = new Room();
    }

    onDeleteRoom(roomToBeDeleted: Room) {
        this.roomService.deleteRoom(roomToBeDeleted).subscribe(() => this.reloadList());
    }

    onSave(roomToBeSaved: Room) {
        this.roomService.saveRoom(roomToBeSaved).subscribe(() => this.reloadList());
    }

    onCancel() {
        this.reloadList();
    }

    private reloadList() {
        this.currentRoom = null;
        this.roomService.listAllRooms().subscribe(rooms => this.rooms = rooms);
    }
}
