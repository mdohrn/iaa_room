package de.nordakademie.iaa.roommgmt.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Objects;

@Entity
public class Room implements Serializable {

    private static final long serialVersionUID = -6075199928524065274L;

    private Long id;
    private String building;
    private Integer roomNumber;
    private Integer seats;
    private Boolean projectorPresent;

    public Room() {
        // Do nothing
    }

    public Room(String building, int roomNumber, int seats, boolean projectorPresent) {
        this.building = building;
        this.roomNumber = roomNumber;
        this.seats = seats;
        this.projectorPresent = projectorPresent;
    }

    @Column(nullable = false)
    public String getBuilding() {
        return building;
    }

    public void setBuilding(String building) {
        this.building = building;
    }

    @Column(name = "ROOM_NUMBER", nullable = false)
    public Integer getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(Integer roomNumber) {
        this.roomNumber = roomNumber;
    }

    @Column(nullable = false)
    public Integer getSeats() {
        return seats;
    }

    public void setSeats(Integer seats) {
        this.seats = seats;
    }

    @Column(name = "PROJECTOR_PRESENT")
    public Boolean getProjectorPresent() {
        return projectorPresent;
    }

    public void setProjectorPresent(Boolean projectorPresent) {
        this.projectorPresent = projectorPresent;
    }

    @Id
    @GeneratedValue
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Room room = (Room) o;
        return roomNumber == room.roomNumber &&
                building.equals(room.building);
    }

    @Override
    public int hashCode() {
        return Objects.hash(building, roomNumber);
    }
}
