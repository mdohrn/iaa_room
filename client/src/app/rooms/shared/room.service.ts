import {Injectable} from '@angular/core';
import {ROOMS} from './mock-rooms';
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


    saveRoom(roomToBeSaved: Room): Observable<any> {
        return this.http.put(ROOMS_ENDPOINT, roomToBeSaved);
    }

    deleteRoom(roomToBeDeleted: Room): Observable<any> {
        return this.http.delete(`${ROOMS_ENDPOINT}/${roomToBeDeleted.id}`);
    }

}
