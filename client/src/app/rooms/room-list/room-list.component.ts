import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Room} from '../shared/room';

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

    onSelect(room: Room) {
        this.selectedRoom = room;
    }

    onDelete() {
        this.delete.emit(this.selectedRoom);
    }

    constructor() {
    }

    ngOnInit() {
    }

}
