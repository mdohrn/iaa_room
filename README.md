# Angular Roommanagement

In dieser Übung wollen wir unsere NAK Raumverwaltung mit Hilfe von Angular in einer Drei-Schichten-Architektur umsetzen.
Dabei bauen wir auf dem Stand des letzten Semesters auf. Die REST-Ressourcen im Backend müssen also um die Prozessschicht sowie
die Datenhaltungsschicht erweitert werden.


## Aufbau und Vorbereitung

Schauen Sie sich die Ordnerstruktur des Projektes an. Wir haben nun zwei Ordner auf der höchsten Ebene. Einen mit dem
Namen `client` und einen weiteren mit dem Namen `server`.
Der Ordner `client` ist die Angular Applikation abgelegt. Im Ordner `server` befindet sich unser REST-Backend,
von dem wir im Laufe der Übung
unsere Daten beziehen möchten. Diese Daten sollen künftig aus unserer Datenbank geladen und in diese abgespeichert werden.

## Umsetzung der Drei-Schichten-Architektur

***1.*** Richten Sie zunächst den Tomcat Server in IntelliJ ein und starten Sie die Anwendung testweise.
Rufen Sie dann `http://localhost:8080/rest/rooms` auf. Hier sollten Sie einige Räume zurückerhalten.

***2.*** Da wir die REST-Endpunkte mit SpringMVC RestControllern umsetzen, müssen wir in der `web.xml` das
Dispatcher-Servlet konfigurieren. Legen Sie die Datei `web.xml` dazu im Verzeichnis
src/main/webapp/WEB-INF/ an. Die Vorlesungsfolien geben Ihnen zur Konfiguration des Dispatcher-Servlets Auskunft.

***3.*** Legen Sie die Datei `spring-config.xml` an und übernehmen Sie das Transactionshandling aus der Übung
`roommgmt-orm` in die `spring-config.xml`. Zudem richten wir die annotationsbasierte Konfiguration für SpringMVC
ein. Die Vorlesungsfolien helfen Ihnen bzgl. der Konfiguration weiter.

***4.*** Übernehmen Sie den `RoomService` sowie die dazugehörigen Exceptions von der Übung `roommgmt-orm`. Stellen Sie sicher,
dass der `RoomService` als Bean definiert ist.

***5.*** Übernehmen Sie den `RoomDAO` sowie die dazugehörigen Exceptions von der Übung `roommgmt-orm`. Stellen Sie auch hier sicher,
dass der `RoomDAO` als Bean definiert ist.

***6.*** Versehen Sie das `Room`-Model mit den notwendigen Annotationen einer Entity. Denken Sie auch an die Property ID
und das Serializable Interface. Eine Umstellung auf Wrapper-Klassen (Integer statt int) ist sinnvoll,
wenn Werte nullable sind oder sein können.

***7.*** Im nächsten Schritt bauen wir den RestController ein. Dazu legen wir im Package `de.nordakademie.iaa.roommgmt.controller`
die Klasse `RoomController` an.
Anschließend annotieren wir die Klasse wie folgt. Danach implementieren Sie die CRUD-Operationen, welche auf den `RoomService`
zugreifen. Versehen Sie die Methoden mit dem analogen REST-Mapping wie die `RoomResource` mithilfe von `@RequestMapping`.

```java
@RestController
public class RoomController {

    @Inject
    private RoomService roomService;

    [...]
}
```

***8.*** Wir löschen nun noch die Klasse `RoomManagementApplication` und die Klasse `RoomResource`, da der neue RestController
diese Rolle übernimmt.

***9.*** Erstellen Sie eine neue Datei `import.sql` im Verzeichnis src/main/resources mit folgendem Inhalt:

 ```
-- Insert room test data
INSERT INTO ROOM (ID, BUILDING, ROOM_NUMBER, SEATS, PROJECTOR_PRESENT) VALUES (hibernate_sequence.nextval, 'A', '1', 45, TRUE);
INSERT INTO ROOM (ID, BUILDING, ROOM_NUMBER, SEATS, PROJECTOR_PRESENT) VALUES (hibernate_sequence.nextval, 'A', '2', 40, TRUE);
INSERT INTO ROOM (ID, BUILDING, ROOM_NUMBER, SEATS, PROJECTOR_PRESENT) VALUES (hibernate_sequence.nextval, 'B', '1', 15, TRUE);
INSERT INTO ROOM (ID, BUILDING, ROOM_NUMBER, SEATS, PROJECTOR_PRESENT) VALUES (hibernate_sequence.nextval, 'B', '2', 30, TRUE);
INSERT INTO ROOM (ID, BUILDING, ROOM_NUMBER, SEATS, PROJECTOR_PRESENT) VALUES (hibernate_sequence.nextval, 'H', '2', 10, FALSE);
 ```

***10.*** Beim Löschen von Räumen muss die Angular-Applikation noch angepasst werden.
Erweitern Sie die `app/rooms/shared/room.ts` um die ID. Stellen Sie in der Datei `room.service.ts` den Delete-Aufruf so um,
dass die ID statt `building` und `roomNumber`verwendet werden. In der Datei `app/rooms/shared/mock-rooms.ts` sind die
Räume entsprechend ebenfalls um die ID zu erweitern.

***11.*** Starten Sie nun den Tomcat und rufen Sie erneut `http://localhost:8080/rest/rooms` auf. Liefert der
Aufruf Daten zurück, starten Sie die Angular-Anwendung mit `ng serve`. Testen Sie Ihre Funktionalität und
nehmen Sie notwendige Anpassungen und/oder Korrekturen vor.
