import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  type = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }



  ngOnInit(): void {
    // 1
    this.type = +this.route.snapshot.paramMap.get('type');

    // 2
    this.route.paramMap.subscribe((params) => {
      this.type = +params.get('type');
    });
  }

  plusOne() {
    this.router.navigate(['../', ++this.type], {
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      queryParams: {
        page: 1,
      }
    });
  }
}
