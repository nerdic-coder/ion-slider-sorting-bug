import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  @State() photos = [
    { photoId: 0 },
    { photoId: 1 },
    { photoId: 2 }
  ];

  ionSlideReachEnd(event: CustomEvent<void>) {
    console.log('ionSlideReachEnd', event);
    this.photos = [
      ...this.photos,
      { photoId: this.photos.length }
    ];

    console.log('this.photos', this.photos);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Ion Slider Sorting Bug</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <ion-slides
          onIonSlideReachEnd={event => this.ionSlideReachEnd(event)}
        >
          {this.photos.map(photo => (
            <ion-slide>
                {photo.photoId}
            </ion-slide>
          ))}
        </ion-slides>
      </ion-content>
    ];
  }
}
