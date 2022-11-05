import { Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { interval, take } from 'rxjs';
import { EsnCarouselService } from './esn-carousel.service';

@Component({
  selector: 'esn-carousel',
  templateUrl: `esn-carousel.component.html`,
  styleUrls: ['esn-carousel.scss']
})
export class EsnCarouselComponent implements OnInit {
  @ViewChild('frame') frame: ElementRef;
  @Input() data;
  left = 0;
  count = 0;
  numberOfPage;
  constructor(private serv: EsnCarouselService, private render: Renderer2) { }


  ngOnInit(): void {
    this.numberOfPage = this.data.numberOfPage
    let tmp = this.numberOfPage
    if (this.data.autoPlay)
      interval(2000).
        pipe(take(this.data.numberOfPage)).
        subscribe(d => {
          this.scroll(0)
          this.count++;
          if (this.count === tmp)
            this.render.setStyle(this.frame.nativeElement, 'left', '0px')

        })

  }

  addToWishlist(j) {
    this.serv.addToWishlist(this.data.wishlistApi + this.data.info[j].key)
    this.data.info[j].wishlist = !this.data.info[j].wishlist;
  }

  open(url) {
    window.open(url)
  }

  scroll(val) {
    if (val === 1) {
      this.left += this.data.Speed
      this.numberOfPage++;
    }
    else {
      this.numberOfPage--;
      this.left -= this.data.Speed
    }
    if (this.numberOfPage) {
      let i = interval(1)
        .pipe(take(50))
      i.subscribe(d => {
        if (val === 1) {
          this.left += this.data.Speed
          this.data.numberOfPage++;
        }
        else {
          this.data.numberOfPage--;
          this.left -= this.data.Speed
        }
        this.render.setStyle(this.frame.nativeElement, 'left', this.left + 'px')
      })
    }
    else {
      this.numberOfPage = this.data.numberOfPage;
      this.left = 0;
    }
  }
}
