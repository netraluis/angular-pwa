import { Component, OnInit } from "@angular/core";
import { ImagesService } from "src/app/services/images.service";
import { Image } from "../../models/image.interface";

@Component({
  selector: "app-image",
  templateUrl: "./image.component.html",
  styleUrls: ["./image.component.css"],
})
export class ImageComponent implements OnInit {
  images: Image[];
  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.imagesService
      .getAllImages()
      .subscribe((images) => (this.images = images));
  }
}
