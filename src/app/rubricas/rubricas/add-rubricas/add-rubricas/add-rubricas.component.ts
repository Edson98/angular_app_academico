import { Component, OnInit } from '@angular/core';
import { Cursos } from '../../../rubricas/models/cursos';
import { RubricasService } from 'src/app/rubricas/rubricas/services/rubricas.service';
import { Router, ActivatedRoute } from "@angular/router";
import { Rubricas } from "src/app/rubricas/rubricas/models/rubricas";
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-add-rubricas',
  templateUrl: './add-rubricas.component.html',
  styleUrls: ['./add-rubricas.component.css']
})
export class AddRubricasComponent implements OnInit {
  curso: Cursos[];
  rubricas: Rubricas[];
  py_carga_id: any;
  id : any;
  constructor(public Rubrica: RubricasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCurso();
    this.getRubrica();
  }

  getCurso() {
    this.activatedRoute.params.subscribe(params => {
       this.id = params['id'];
      console.log( this.id);
      this.Rubrica.getCurso( this.id).subscribe(
        (data) => {
          console.log(data['cursos']);
          this.Rubrica.curso = data['cursos'] as Cursos[];
        }
      )
    });
  }
  getRubrica() {
    this.activatedRoute.params.subscribe(params => {
       this.id = params['id'];
      console.log(this.id);
      this.Rubrica.getRubrica(this.id).subscribe(
        (data) => {
          console.log(data);
          this.Rubrica.rubrica = data['rubricas'] as Rubricas[];
        }


      )


    })
  }
  ChooseCurso(value) {
    this.py_carga_id = value;
  }
  addRubrica(form: NgForm) {
    this.Rubrica.postRubrica(form.value).subscribe(
      (res) => {
        console.log(res);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Guardado Correcto!',
          showConfirmButton: false,
          timer: 1500
        })
        this.getRubrica();
      }
    )
  }

}








