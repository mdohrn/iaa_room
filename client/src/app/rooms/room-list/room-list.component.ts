import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Room} from '../shared/room';

@Component({
    selector: 'app-room-list',
    templateUrl: './room-list.component.html',
    styleUrls: ['./room-list.component.css']
})
export class RoomListComponent {

    @Input()
    rooms: Room[] = [];

    @Output()
    edit = new EventEmitter<Room>();

    @Output()
    add = new EventEmitter();

    @Output()
    delete = new EventEmitter<Room>();

    selectedRoom?: Room;

    constructor() {
    }

    onSelect(room: Room): void {
        this.selectedRoom = room;
    }

    onDelete(): void {
      this.delete.emit(this.selectedRoom);
    }

    onEdit(): void {
        this.edit.emit(this.selectedRoom);
    }

    onAdd(): void {
        this.add.emit();
    }

}
