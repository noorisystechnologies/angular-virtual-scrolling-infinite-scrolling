import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-infinite-scrolling-grid',
  templateUrl: './infinite-scrolling-grid.component.html',
  styleUrls: ['./infinite-scrolling-grid.component.scss']
})
export class InfiniteScrollingGridComponent implements OnInit{
  data: string[] = [];
  startIndex = 0;
  batchSize = 10;
  loading = false;

  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.loading = true;
    const newData = this.dataService.getData(this.startIndex, this.batchSize);
    setTimeout(() => {
      this.data = this.data.concat(newData);
      this.startIndex += this.batchSize;
      this.loading = false;
    }, 1000); // Simulate API call delay
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (this.shouldLoadData()) {
      this.loadData();
    }
  }

  shouldLoadData(): boolean {
    const container = this.scrollContainer.nativeElement;
    const scrollPosition = container.scrollTop + container.clientHeight;
    const contentHeight = container.scrollHeight;
    const distanceToBottom = contentHeight - scrollPosition;
    return distanceToBottom < 100 && !this.loading;
  }

}
