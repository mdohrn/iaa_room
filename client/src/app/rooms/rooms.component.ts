import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-rooms',
    templateUrl: './rooms.component.html',
    styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

    ngOnInit() {
        this.reloadList();
    }

    private reloadList() {
        //This needs to be implemented. We want to load fill the rooms variable by calling a service method...
    }
}
