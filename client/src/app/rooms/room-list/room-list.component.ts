import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Room} from "../shared/room";

@Component({
    selector: 'app-room-list',
    templateUrl: './room-list.component.html',
    styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

    @Input()
    rooms: Room[] = [];

    selectedRoom?: Room;

    @Output()
    delete = new EventEmitter<Room>();

    constructor() {
    }

    ngOnInit(): void {
    }

    onSelect(room: Room): void {
        this.selectedRoom = room;
    }

    onDelete(): void {
        this.delete.emit(this.selectedRoom);
    }

}
