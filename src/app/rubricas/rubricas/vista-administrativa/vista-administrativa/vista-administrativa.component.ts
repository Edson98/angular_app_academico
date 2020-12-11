import { Component, OnInit } from '@angular/core';
import { Cursos } from '../../../rubricas/models/cursos';
import { RubricasService } from 'src/app/rubricas/rubricas/services/rubricas.service';
import { Router, ActivatedRoute, ChildActivationStart } from "@angular/router";
import { Rubricas } from "src/app/rubricas/rubricas/models/rubricas";
import { Criterio } from "src/app/rubricas/rubricas/models/criterios";
import Swal from 'sweetalert2'
@Component({
  selector: 'app-vista-administrativa',
  templateUrl: './vista-administrativa.component.html',
  styleUrls: ['./vista-administrativa.component.css']
})
export class VistaAdministrativaComponent implements OnInit {
  rubricas: Rubricas[];
  criterios: any;
  py_id: any;
  rubri: any;
  separated = []
  vista_admin : any;
  constructor(public Rubrica: RubricasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getRubrica();

  }

  getRubrica() {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get('id1');
      let aidi = params.get('id2')
     
      this.Rubrica.getAllAdministrator(id , aidi).subscribe(
        (data) =>{
          console.log(data['vista_admin'])
          this.vista_admin = data['vista_admin'];
        }
      )
      
     







      




    })
  }




}
