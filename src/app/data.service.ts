import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: string[] = [];

  constructor() {
    // Simulate data loading
    for (let i = 1; i <= 100; i++) {
      this.data.push(`Item ${i}`);
    }
  }

  getData(startIndex: number, batchSize: number): string[] {
    // Simulate fetching data from an API
    const newData = [];
    for (let i = startIndex + 1; i <= startIndex + batchSize; i++) {
      if (this.data[i]) {
        newData.push(this.data[i]);
      }
    }
    return newData;
  }
}
