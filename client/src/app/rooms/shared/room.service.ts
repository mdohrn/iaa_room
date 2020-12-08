import {Injectable} from '@angular/core';
import {Room} from './room';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const ROOMS_ENDPOINT = '/rest/rooms';

@Injectable({
    providedIn: 'root'
})
export class RoomService {

    constructor(private http: HttpClient) {
    }

    listAllRooms(): Observable<Room[]> {
        return this.http.get<Room[]>(ROOMS_ENDPOINT);
    }


    saveRoom(roomToBeSaved: Room): Observable<void> {
        return this.http.put<void>(ROOMS_ENDPOINT, roomToBeSaved);
    }

    deleteRoom(roomToBeDeleted: Room): Observable<void> {
        return this.http.delete<void>(`${ROOMS_ENDPOINT}/${roomToBeDeleted.building}-${roomToBeDeleted.roomNumber}`);
    }

}
