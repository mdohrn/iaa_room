import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Room} from '../shared/room';

@Component({
    selector: 'app-room-form',
    templateUrl: './room-form.component.html',
    styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent {

    @Input()
    room: Room;

    @Output()
    save = new EventEmitter<Room>();

    @Output()
    cancel = new EventEmitter();

    constructor() {
    }

    onSubmit() {
        this.save.emit(this.room);
    }

    onCancel() {
        this.cancel.emit();
    }
}
