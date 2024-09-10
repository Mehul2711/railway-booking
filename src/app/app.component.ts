import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  seats: number[][] = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0],
  ];

  bookedSeats: string[] = [];

  reserveSeats(numSeats: number) {
    let booked = [];
    let seatsToBook = numSeats;

    for (let i = 0; i < this.seats.length; i++) {
      let availableSeats = this.seats[i].filter((seat) => seat === 0).length;

      if (availableSeats >= seatsToBook) {
        for (let j = 0; j < this.seats[i].length; j++) {
          if (this.seats[i][j] === 0 && seatsToBook > 0) {
            this.seats[i][j] = 1;
            booked.push(`Row ${i + 1} Seat ${j + 1}`);
            seatsToBook--;
          }
        }
        this.bookedSeats = booked;
        return;
      }
    }

    for (let i = 0; i < this.seats.length; i++) {
      for (let j = 0; j < this.seats[i].length; j++) {
        if (this.seats[i][j] === 0 && seatsToBook > 0) {
          this.seats[i][j] = 1;
          booked.push(`Row ${i + 1} Seat ${j + 1}`);
          seatsToBook--;
        }
      }
    }
    this.bookedSeats = booked;
  }
}
