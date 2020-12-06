import {Injectable} from '@angular/core';
import {ROOMS} from './mock-rooms';
import {Room} from './room';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RoomService {

    private rooms: Room[] = ROOMS;

    listAllRooms(): Observable<Room[]> {
        return of(this.rooms);
    }

    saveRoom(roomToBeSaved: Room): Observable<Room[]> {
        this.deleteRoom(roomToBeSaved);
        this.rooms.push(roomToBeSaved);
        return of(this.rooms);
    }

    deleteRoom(roomToBeDeleted: Room): Observable<Room[]> {
        this.rooms = this.rooms.filter(room =>
          !(room.building === roomToBeDeleted.building && room.roomNumber === roomToBeDeleted.roomNumber));
        return of(this.rooms);
    }

}
