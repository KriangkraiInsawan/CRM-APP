import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Subject } from "rxjs";


@Component({
  selector: 'app-tablebase',
  templateUrl: './tablebase.component.html'
})
export class TablebaseComponent {
  @Input() dataSource: any;
  @Input() table: any;

  tableDataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Output() onDetailRow: EventEmitter<any> = new EventEmitter();
  @Output() onEditRow: EventEmitter<any> = new EventEmitter();
  @Output() onCloneRow: EventEmitter<any> = new EventEmitter();
  @Output() onDeleteRow: EventEmitter<any> = new EventEmitter();
  @Output() onPageEventChanged: EventEmitter<any> = new EventEmitter();
private _unsubscribeAll: Subject<any>;

constructor(){

}

}
