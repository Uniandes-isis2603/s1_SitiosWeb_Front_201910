import { Component, OnInit, Input } from '@angular/core';
import { DependenciesService } from '../dependencies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DependenciesDetail } from '../dependencies-detail';

@Component({
  selector: 'app-dependencies-detail',
  templateUrl: './dependencies-detail.component.html',
  styleUrls: ['./dependencies-detail.component.css']
})
export class DependenciesDetailComponent implements OnInit {

  constructor(
    private depService: DependenciesService,
    private route: ActivatedRoute,
  ) { }

  /**
  * The dependency whose details we want to show
  */
  depDetail: DependenciesDetail;

  expande: boolean;

  /**
  * The dependency's id retrieved from the address
  */
  dep_id: number;

  getDependencyDetail(): void {
    console.log(this.dep_id);
    this.depService.getDependencyDetail(this.dep_id)
      .subscribe(detail => {
        this.depDetail = detail
      });
      console.log(this.depDetail);
  }

  expandir(): void {
    this.expande = !this.expande;
  }

  deleteUser(): void {
    
  }

  ngOnInit() {
    this.dep_id =+ this.route.snapshot.paramMap.get('id');
    this.depDetail = new DependenciesDetail();
    this.getDependencyDetail();
    this.expande = false;
  }

}
