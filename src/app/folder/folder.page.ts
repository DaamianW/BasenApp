import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;

  features: any[] = [
    {
      id: 1,
      name: 'grafik',
      src: 'assets/icon/grafik(1).png',
      page: 'folder/grafik/grafik.module',
    },
    { id: 2, name: 'cennik', src: 'assets/icon/cennik(1).png', page: '' },
    {
      id: 3,
      name: 'regulamin',
      src: 'assets/icon/regulamin(1).png',
      page: '',
    },
    { id: 4, name: 'kontakt', src: 'assets/icon/kontakt(1).png', page: '' },
    { id: 5, name: 'mapa', src: 'assets/icon/mapa.png', page: '' },
    { id: 6, name: 'badanie wody', src: 'assets/icon/test.png', page: '' },
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
