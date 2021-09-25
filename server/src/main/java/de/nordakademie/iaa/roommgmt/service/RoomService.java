package de.nordakademie.iaa.roommgmt.service;

import de.nordakademie.iaa.roommgmt.dao.EntityAlreadyPresentException;
import de.nordakademie.iaa.roommgmt.dao.RoomDAO;
import de.nordakademie.iaa.roommgmt.model.Room;

import javax.inject.Inject;
import java.util.List;

public class RoomService {

    private RoomDAO roomDAO;

    @Inject
    public void setRoomDAO(RoomDAO roomDAO) {
        this.roomDAO = roomDAO;
    }

    public List<Room> listRooms() {
        return roomDAO.listRooms();
    }

    public void saveRoom(Room room) {
        try {
            if (room.getId() == null) {
                roomDAO.persistRoom(room);
            } else {
                roomDAO.mergeRoom(room);
            }
        } catch (EntityAlreadyPresentException e) {
            throw new ServiceException(e.getMessage());
        }
    }

    public void deleteRoom(Long id) {
        roomDAO.deleteRoom(id);
    }

    public Room loadRoom(Long id) {
        return roomDAO.loadRoom(id);
    }
}
