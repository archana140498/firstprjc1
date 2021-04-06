import { Component, OnInit } from '@angular/core';
import {Sort} from '@angular/material/sort';


export interface periodicElement {
  name:string;
  position:number;
  Fathername:string;
  Address:string;
  Phoneno:number;
  Email:string;

}

const ELEMENT_DATA: periodicElement[]=[
{position: 1, name: 'Archana', Fathername:'Mallesham', Address:'3-164', Phoneno:9010986327, Email:'archanaagone@gmail.com'},
{position: 2, name: 'Sindhu', Fathername:'Narsaiah', Address:'3-164', Phoneno:9010986327, Email:'archanaagone@gmail.com'},
{position: 3, name: 'Ashwini', Fathername:'Anjaiah', Address:'3-164', Phoneno:9010986327, Email:'archanaagone@gmail.com'},
{position: 4, name: 'Mamatha', Fathername:'Srinivas', Address:'3-164', Phoneno:9010986327, Email:'archanaagone@gmail.com'},
{position: 5, name: 'Rekha', Fathername:'Bumaiah', Address:'3-164', Phoneno:9010986327, Email:'archanaagone@gmail.com'},
{position: 6, name: 'Anusha', Fathername:'Suresh', Address:'3-164', Phoneno:9010986327, Email:'archanaagone@gmail.com'},
{position: 7, name: 'Manasa', Fathername:'suresh', Address:'3-164', Phoneno:9010986327, Email:'archanaagone@gmail.com'}

];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'Fathername', 'Address', 'Phoneno', 'Email'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
