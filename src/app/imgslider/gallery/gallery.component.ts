import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  imageObject = [
    {
      image: '/assets/Images/Home/clinic/chair.JPG',
      thumbImage: '/assets/Images/Home/clinic/chair.JPG',
    },
    {
      image: '/assets/Images/Home/clinic/door.JPG',
      thumbImage: '/assets/Images/Home/clinic/door.JPG',
    },
    {
      image: '/assets/Images/Home/clinic/front.JPG',
      thumbImage: 'assets/Images/Home/clinic/front.JPG',
    },
    {
      image: '/assets/Images/Home/clinic/chair2.JPG',
      thumbImage: '/assets/Images/Home/clinic/chair2.JPG',
    },
    {
      image: '/assets/Images/Home/clinic/hall.JPG',
      thumbImage: '/assets/Images/Home/clinic/hall.JPG',
    },
    {
      image: '/assets/Images/Home/clinic/room.JPG',
      thumbImage: '/assets/Images/Home/clinic/room.JPG',
    },
    {
      image: '/assets/Images/Home/clinic/front2.JPG',
      thumbImage: '/assets/Images/Home/clinic/front2.JPG',
    },
    {
      image: '/assets/Images/Home/clinic/hall2.JPG',
      thumbImage: '/assets/Images/Home/clinic/hall2.JPG',
    },
    {
      image: '/assets/Images/Home/clinic/room.JPG',
      thumbImage: '/assets/Images/Home/clinic/room.JPG',
    },
    {
      image: '/assets/Images/Home/clinic/room2.JPG',
      thumbImage: '/assets/Images/Home/clinic/room2.JPG',
    },
    {
      image: '/assets/Images/Home/clinic/room1.JPG',
      thumbImage: '/assets/Images/Home/clinic/room1.JPG',
    },
  ];
}
