export class Room {

    constructor(public building: String = null,
                public roomNumber: number = null,
                public seats: number = null,
                public projectorPresent: boolean = false) {
    }

    equals(other: Room): boolean {
        if (!other) {
            return false;
        }
        return this.building === other.building && this.roomNumber === other.roomNumber;
    }
}
