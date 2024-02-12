import { Component, OnInit} from '@angular/core';
import { TableRow, TableColumn, TABLE_DATA } from '../data';

@Component({
  selector: 'app-virtual-scrolling-grid',
  templateUrl: './virtual-scrolling-grid.component.html',
  styleUrls: ['./virtual-scrolling-grid.component.scss']
})
export class VirtualScrollingGridComponent  implements OnInit{
  items = Array.from({ length: 10000 }).map((_, i) => `Item ${i}`);
  displayedColumns: string[] = ['id', 'name', 'age', 'city']; // Add column names
  dataSource: TableRow[] = TABLE_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  //method to print prime numbers upto n

  printPrime(n: number){
    let i,j;
    for(i=2;i<=n;i++)
    {
      for(j=2;j<i;j++)
      {
        if(i%j==0)
          break;
      }
      if(j==i)
        console.log(i);
    }
  }

  //method to print A to Z

  printAlphabet(){
    let i;
    for(i=65;i<=90;i++)
    {
      console.log(String.fromCharCode(i));
    }
  }


  //method to find out greater value from colection

  greaterValue(a:number,b:number){
    if(a>b)
      return a;
    else
      return b;
  }

  //method to sort collection

  sortCollection(collection:any[]){
    collection.sort();
    return collection;
  }

  // method to change file name of the image

  changeFileName(fileName:string){
    return fileName.replace(' ', '-');
  }
  
    // return fileName.replace(' ', '-').toLowerCase();

    // method to create dynamic form field
    createFormField(fieldName:string, fieldType:string, fieldValue:string){
      return {fieldName, fieldType, fieldValue};
    }

    // method to create dynamic form fields by typing number in the field
    createFormFields(fieldName:string, fieldType:string, fieldValue:string){
      return {fieldName, fieldType, fieldValue};
    
      // return {fieldName, fieldType, fieldValue: fieldValue.toString()};
    
    }

    // method to add two numbers
     addTwoNumbers(a:number,b:number){
       return a+b;
     }

}
