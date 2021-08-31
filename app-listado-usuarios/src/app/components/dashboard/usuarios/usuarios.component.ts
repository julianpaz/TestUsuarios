import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { responseI } from 'src/app/models/usuarios/response.interface';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'email', 'first_name', 'last_name','avatar'];
  public dataSource: responseI;
  public page: number;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private api:UsuariosService) {
    this.dataSource = {
      "page": 0,
      "per_page": 1,
      "total": 0,
      "total_pages":0,
      "paginator": [],
      "data": []
    };
    this.page = 1;
  }

  ngOnInit(): void {
    this.loadData(this.page)
  }
  ngAfterViewInit() {
    this.dataSource.data = this.dataSource.paginator;
  }

  loadData(page:number){
    this.api.getUsuarios(page).subscribe((res) => {
      this.dataSource = res;
    })
  }

  upPage(event:any){
    console.log(event);
  }

}
