import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

import { interval, Observable, Subscription } from 'rxjs';
import 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet.icon.glyph';
import 'leaflet-control-geocoder';
import 'leaflet.locatecontrol';
export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 'Hosur', name: 'Transporer 1', weight: '', symbol: '95455198789' },
  { position: 'Krishnagiri', name: '', weight: ' ', symbol: '' },
  { position: '', name: '', weight: '', symbol: '' },
  { position: '', name: '', weight: '', symbol: '' },
];
@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss'],
})
export class PendingComponent implements AfterViewInit {
  private map!: any;

  pt: any;

  coords: any;

  points: any = [new L.LatLng(12.732372161239473, 77.82553072879244)];

  polyline: any;

  dist: number = 0;
  totalkm: number = 0;
  remainingdist: number = 0;
  lat1: any;
  lon1: any;
  lat2: any;
  lon2: any;

  markerIcon:any = L.icon({ //add this new icon
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

  markers: L.Layer[] = [];
  subscription?: Subscription;
  data?: number[][];
  pts1: any = [];

  i = -1;

  private initMap(): void {
    this.map = L.map('map', {
      minZoom: 0,
      maxZoom: 18,
    }).setView(this.pt, 15);

    const tiles = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'Open Street Map',
      opacity: 0.7,
    }).addTo(this.map);

    tiles.addTo(this.map);
  }

  ngOnInit() {
    this.pt = [12.732372161239473, 77.82553072879244];
    this.data = [
      [
        12.73144246130947,
        77.82852172851562
      ],
      [
        12.725414518445126,
        77.85942077636719
      ],
      [
        12.710678944194393,
        77.89512634277344
      ],
      [
        12.69192334073348,
        77.92121887207031
      ],
      [
        12.677855730564929,
        77.96173095703125
      ],
      [
        12.662447456476103,
        78.01528930664062
      ],
      [
        12.638328289223328,
        78.0633544921875
      ],
      [
        12.611526544293113,
        78.0915069580078
      ],
      [
        12.60348547351586,
        78.12515258789062
      ],
      [
        12.578020418749885,
        78.15948486328125
      ],
      [
        12.555233755154099,
        78.19038391113281
      ],
      [
        12.53579647636693,
        78.2061767578125
      ],
      [
        12.504961924014806,
        78.22265625,
,      ]
    ];

    this.pts1 = {
      lat: 12.732372161239473,
      lng: 77.82553072879244,
    };

    this.lat1 = this.pts1.lat;
    this.lon1 = this.pts1.lng;

    this.subscription = interval(2000).subscribe(() => {
      if (this.data[this.i + 1]) {
        this.removeMarker(this.map, this.markers[this.i]);
        this.addMarker(this.data[this.i + 1][0], this.data[this.i + 1][1]);
        var lat = this.data[this.i + 1][0];
        var lng = this.data[this.i + 1][1];
        this.i++;

        let latlng: any = [];

        latlng.push(lat, lng);

        this.pushvalue(latlng);
      }
    });
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  ngAfterViewInit(): void {
    this.initMap();
  }

  pushvalue(pts: any) {
    this.points.push(pts);
    this.drawline(this.points);
  }

  drawline(pos: any) {
    this.polyline = L.polyline(pos, {
      color: 'red',
      opacity: 1,
      weight: 3,
      dashArray: '15,10',
      lineJoin: 'round',
    });

    this.polyline.addTo(this.map);
    console.log(pos);
  }

  removeMarker(map: L.Map, marker: any) {
    if (marker != undefined) map.removeLayer(marker);
  }

  addMarker(lat: any, lng: any) {
    const newMarker = L.marker([lat, lng], {
      icon: (L.icon as any).glyph({ glyph: 'Truck' }),
    });
    this.markers.push(newMarker);

    newMarker.addTo(this.map);

    var url = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

    newMarker.bindPopup("<img style='height:auto%;width:100%;border-radius:50px' src=" + url + '></img>');
    // .openPopup();
    this.map.panTo(new L.LatLng(lat, lng));

    this.lat2 = lat;
    this.lon2 = lng;
  }
}
