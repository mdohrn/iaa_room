import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RoomsComponent} from './rooms/rooms.component';
import {RoomListComponent} from './rooms/room-list/room-list.component';
import {RoomFormComponent} from './rooms/room-form/room-form.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MinValidatorDirective } from './rooms/shared/min-validator.directive';

@NgModule({
    declarations: [
        AppComponent,
        RoomsComponent,
        RoomListComponent,
        RoomFormComponent,
        MinValidatorDirective
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
