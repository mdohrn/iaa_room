# Angular Roommanagement

In dieser Übung wollen wir unsere NAK Raumverwaltung mit Hilfe von Angular umsetzen. 
Das Prinzip ist dabei das gleiche wie in den Aufgaben zu Struts. Wir verwalten Räume, die wir zu Beginn 
tabellarisch darstellen wollen. Durch unterschiedliche Buttons (*Erstellen*, *Bearbeiten*, *Löschen*) springen wir, wenn nötig,
in die einzelnen Masken. 


## Aufbau und Vorbereitung

Schauen Sie sich die Ordnerstruktur des Projektes an. Wir haben nun zwei Ordner auf der höchsten Ebene. Einen mit dem Namen `client` und einen weiteren mit dem Namen `server`.
Der Ordner `client` ist uns bereits bekannt. Im Ordner `server` befindet sich unser REST-Backend, von dem wir im Laufe der Übung
unsere Daten beziehen möchten. 

Wir wollen unsere Verwaltung der Raummaske in unterschiedliche Komponenten aufteilen. 

Die endgültige Struktur soll dabei wie folgt aussehen: 

- `app`-Modul (root)
  - `rooms`-Component 
    - `room-list`-Component (Tabellarische Anzeige der Räume) --- Haben wir bereits in der vorherigen Übung implementiert.
    - `room-form`-Component (Komponente zur Bearbeitung/Erstellung eines Raums) 

Wir wollen nun also die Bearbeitung von Räumen implementieren. Hierzu wollen wir die `room-form`-Komponenten erstellen und nachfolgend
implementieren. 

## Entwicklung der `room-form`-Komponente

Diese Komponente wird sich letztendlich an der Implementation aus unserer Struts-Übung orientieren. 

**1.** Erstellen Sie mit Hilfe der Angular-CLI (`ng genereate`) die Komponenten `room-form` im Ordner `rooms`.

Beginnen wir mit der TypeScript-Implementation der Klasse in der `room-form.component.ts`.

### Implementieren der Logik für die `room-form`-Komponente

Unsere Komponente soll genau einen Raum bearbeiten können und darüberliegende Komponenten können 
sich über zwei unterschiedliche Events informieren lassen: `save` und `cancel`. 

**2.** Fügen Sie der Implementation eine public property mit dem Namen `room` und den entsprechenden Typ hinzu. 
Setzen Sie dabei auch gleich den `@Input`-Dekorator. 

**3.** Erstellen Sie zwei `EventEmitter` als public property für unsere Ausgaben. 
Die Namen sind entsprechend `save` bzw. `cancel`. Setzen Sie auch hier gleich den `@Output`-Dekorator. 

Tipp: Im Grunde unterscheiden sich die `EventEmitter` nur darin, dass `save` einen Raum zurück gibt, wohingegen `cancel` 
unseren Raum nicht zurückgeben muss.

**4.** Damit wir aus dem UI auf unsere `EventEmitter` zugreifen können, benötigen wir noch zwei Methoden. Erzeugen Sie `onSubmit()`
und `onCancel()`. 

Die Implementation dieser Methoden ist Ihnen bereits aus der vorherigen Übung bekannt. Nutzen Sie auf dem `EventEmitter`
die Methode `emit(value?: any)` und übergeben Sie unseren Raum, dort wo es sinnvoll ist. 

**5.** Implementieren Sie die eben beschriebenen Methoden.

### Implementieren der View für die `room-form`-Komponente

Zur Bearbeitung eines Raumes nutzen wir die bekannten HTML-Tags und erweitern diese mit den entsprechenden Angular 
Built-in Direktiven. 

**1.** Öffnen Sie die `room-form.component.html`, löschen Sie dessen Inhalt und fügen Sie eine Headline hinzu. Beispielsweise  mit dem Inhalt "Room Details". 

**2.** Erstellen Sie ein Formular `<form>...</form>`, fügen Sie einen Submit-Button hinzu und verwenden Sie das `ngSubmit` event binding, wie 
in der Vorlesung gezeigt. 

Nun wollen wir die eigentlichen Attribute eines Raums innerhalb des Formulars bearbeitbar machen. Hierzu bendienen wir uns wieder den altbekannten
HTML-Tags für Formulare. Das erste Eingabefeld für das Gebäude könnte also wie folgt aussehen: 
`````html
    <p>
        <label for="building">Building:</label>
        <input id="building" name="building" [(ngModel)]="room.building">
    </p>
`````

**3.** Orientieren Sie sich am gezeigten Beispiel und implementieren Sie die noch fehlenden Attribute innerhalb des Formulars. 

Tipp: Verwenden Sie bei `projectorPresent` ein Eingabefeld mit `type="checkbox"`. 

Nun fehlt nur noch die Funktionalität, mit der wir eine Bearbeitung abbrechen und auf die `room-list` zurückspringen können. 

**4.** Fügen Sie einen *Cancel*-Button hinzu, welcher im `click` ein event binding auf unsere `onCancel()` Methode bekommt. 

 
## Erweitern der `room-list`-Komponenten

Wir wollen nun unsere Komponenten aus der letzten Übung anpassen, damit wir ausgewählte Räume bearbeiten oder neue Räume hinzufügen können. 

Hierzu soll die `room-list` nicht wirklich das Bearbeiten in die Wege leiten, denn sie ist nur dafür entwickelt worden Räume anzuzeigen. Sie soll aber 
Buttons ("Edit","New") inklusive der dazugehörigen `EventEmitter` anbieten, damit die darübergelgenene `rooms`-Komponente bei einem Klick auf die Buttons
die `room-list` ausblenden und den zu bearbeitenden Raum mit der `room-form` einblenden kann. 

### Erweitern der Logik in der `room-list`

Wir befinden uns in der Datei `room-list.component.ts`.

**1.** Erstellen Sie zwei neue, mit `@Output` dekorierten, public properties vom Type `EventEmitter` und den Namen `add` und `edit`. 
 
Tipp: Überlegen Sie auch hier, welche der `EventEmitter` wirklich einen Raum zurückgeben müssen. 

**2.** Implementieren Sie zwei neue Methoden für unser UI, die die jeweiligen `EventEmitter` aufrufen: `onEdit()` und `onAdd()`.

###  Erweitern der View in der `room-list`

Damit der Nutzer nun auch einen ausgewählten Raum editieren oder einen neuen Raum hinzufügen kann, benötigen wir für diese Funktionalitäten 
noch Buttons. 

**1.** Fügen Sie der `room-list.component.html` einen `Add`-Button hinzu und rufen Sie im entsprechenden `click` event binding unsere `onAdd()`-Methode auf. 

**2.** Fügen Sie der `room-list.component.html` einen `Edit`-Button hinzu und rufen Sie im entsprechenden `click` event binding unsere `onEdit()`-Methode auf.

Tipp: Überlegen Sie, welche der beiden Buttons ebenfalls nur anklickbar sein sollte, wenn ein Raum ausgewählt ist. 


## Erweitern der `rooms`-Komponente

Unsere `rooms`-Komponente steuert ihre eigenen Sub-Views. Die Idee ist nun, dass sich die `rooms`-Komponente an der `room-list`-Komponente anmeldet, um darüber benachrichtigt zu werden, wenn der Nutzer in der Liste auf "Add" oder "Edit" geklickt hat, um daraufhin die `room-form`-Komponenten einzublenden.
 
Im Prinzip ähnelt der Logikfluss der bereits Implementierten Löschfunktion. 


### Erweitern der Logik in der `room`-Komponente

**1.** Erstellen Sie in der `rooms.component.ts`-Komponente eine neue public property `currentRoom?: Room;` 

Hier wollen wir einen Raum speichern, der gerade bearbeitet wird. 

**2.** Erstellen Sie zwei Methoden: `onAddRoom()` sowie `onEditRoom(room: Room)` und implementieren Sie diese. 

Beide Methoden sollen einen Raum in `currentRoom` setzen. Entweder übernimmt die Methode den Raum aus den Methodenparameter 
oder es wird ein neuer erstellt.

Wir benötigen nun noch eine Methode, die uns einen Raum speichert bzw. aktualisiert, wenn die Bearbeitung in der `room-form`-Komponente
abgeschlossen ist.

**3.** Erstellen Sie die Methode `onSave(roomToBeSaved: Room);` und implementieren Sie diese so, dass Sie zum Speichern unsere
`roomService` verwendet.

**4**. Fügen Sie die Methode `onCancel()` hinzu. Diese ruft intern einfach die Methode `reloadList()` auf. 

**5.** Stellen Sie beim Neuladen in der Methode `reloadList()` sicher, dass wir den `currentRoom` auf `null` setzen. 

### Erweitern der View in der `room`-Komponente

Nun müssen wir noch die View `rooms.component.html` implementieren. Hier ist die Idee, dass wir die `<app-room-list>....</app-room-list>` Komponete immer dann anzeigen,
wenn `currentRoom` nicht gesetzt ist. Anderfalls wollen wir die  `<app-room-form>...</<app-room-form>`, welche wir gleich einfügen, anzeigen. 

**1.** Nutzen Sie `**ngIf**` um die `<app-room-list>` einzublenden, wenn `currentRoom` nicht gesetzt ist. 

Tipp: Verwenden Sie die Direktive einfach in Verbindung mit einem ummantelnden HTML-Tag wie bspw. `<p>...</p>`.

**2.** Ergänzen Sie die event bindings `(add)` und `(edit)` in der `app-room-list` und verweisen Sie entsprechend auf die eben angelegten 
Methoden in der `rooms.component.ts`.

**3.** Fügen Sie nun unsere neue Komponente `<app-room-form>....</app-room-form>` hinzu. Setzen Sie das property binding `[room]` sowie die beiden 
event bindings `(save)` und `(cancel)` 

Tipp: Nutzen Sie die zuvor implementieren Methoden aus der `rooms.component.ts`.

**4.** Stellen Sie sicher, dass über die Direktive `**ngIf` gesteuert wird, dass `<app-room-form>...</app-room-form>` nur eingeblendet wird, 
wenn `currentRoom` gesetzt ist.

## Der `room`-Service
 
Wie Ihnen sicher schon aufgefallen ist, haben wir bereits einen Service, nämlich den `RoomService`. Er befindet sich im `shared` package. 
Wir haben diesen auch schon innerhalb der `rooms`-Komponente zum Speichern und Laden von Räumen genutzt. Leider arbeitet dieser noch mit Dummy-Daten und nicht 
wirklich mit unserem Backend zusammen. Die Daten kommen in Wirklichkeit aus der Datei `mock-rooms.ts`. 

Wir wollen nun unseren bestehenden Service so anpassen, dass die Daten von unserem Backend geladen werden. Dafür können wir die Schnittstelle so belassen
wie sie ist. Nur die Implementation muss angepasst werden. 

### Anpassen der `room`-Service Implementation

**1.** Löschen Sie die Datei `mock-rooms.ts`. 

Wir benötigen Sie nicht mehr und überall dort wo jetzt Fehler entstehen, müssen wir wohl eingreifen. So stellen wir sicher,
dass wir die Dummy-Daten auf keinen Fall mehr benutzen. 

**2.** Öffen Sie die `room.service.ts` und löschen Sie auch hier die private property `rooms` und die Implementationen der Methoden. 

**3.** Fügen Sie dem Konstruktor die Abhängigkeit zum Service `HttpClient` hinzu.

Wir benötigen diesen von Angular bereitgestellten Service, um Anfragen an das Backend abzusetzen. 

Tipp: Sie wissen nicht, wie Sie den Service als Abhängigkeit angeben können, schauen Sie hierzu in die Vorlesungsfolien.   

**4.** Fügen Sie folgende Konstante Ihrer `RoomService`-Implementation hinzu:  `const ROOMS_ENDPOINT = '/rest/rooms';`. 
 
Dies ist der Pfad zum Backend, den wir gleich zur Kommunikation nutzen wollen. 
 
**5.** Implementieren Sie die Methode `listAllRooms(): Observable<Room[]>` und nutzen Sie auf dem `HttpClient` die Methode `get`. 

Als Ziel des Aufrufs nutzen wir den `ROOMS_ENDPOINT` und erwarten den Typ `Room[]`. Da der `HttpClient` ebenfalls ein `Observable` zurückgibt, benötigen wir
keine weitere Logik, sondern können das `Observable` einfach durchreichen.   

**6.** Implementieren Sie nun `saveRoom(roomToBeSaved: Room): Observable<any>` und nutzen Sie die `put`-Methode vom `HttpClient`. 

Der Endpoint bleibt der gleiche. Wir müssen allerdings den `roomToBeSaved` als zweiten Parameter mitgeben. 

**7.** Implementieren Sie zu guter Letzt noch die `deleteRoom(roomToBeDeleted: Room): Observable<any>`-Methode und nutzen `delete` vom `HttpClient`.

Die aufzurufende URL ist hier etwas schwieriger, da wir noch keine Primärschlüssel in unserer Anwendung kennen. Nutzen Sie bitte folgendes Ziel
als ersten Parameter  `` `${ROOMS_ENDPOINT}/${roomToBeDeleted.building}-${roomToBeDeleted.roomNumber}` ``
 

## Starten des Backends und Testen, testen, testen, ...

Wenn Sie alles korrekt implementiert haben, steht der Benutzung der Raumverwaltung *fast* nichts mehr im Wege.

Dieses Projekt enthält einen Server für die Daten, unser Backend, welches mit Hilfe von Java implementiert wurde. Es
liegt im Ordner `server`. Sie sollten ja bereits damit vertraut sein, Webprojekte auf einem Tomcat-Server zu deployen. 

**1.** Legen Sie eine Run-Konfiguration für das Projekt an. Starten Sie das Backend und nachfolgend Ihr Angular Frontend mit
`ng serve`.
