import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RoomsComponent} from './rooms/rooms.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RoomListComponent } from './rooms/room-list/room-list.component';

@NgModule({
    declarations: [
        AppComponent,
        RoomsComponent,
        RoomListComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
