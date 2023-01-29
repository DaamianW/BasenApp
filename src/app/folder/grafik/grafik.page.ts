import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grafik',
  templateUrl: './grafik.page.html',
  styleUrls: ['./grafik.page.scss'],
})
export class GrafikPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  grafikNastepny() {
    this.router.navigate(['folder/grafik-nastepny-dzien']);
  }
}
