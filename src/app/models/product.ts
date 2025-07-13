export class Product {

  public floweringSeason?: string[];

  constructor(public name: string,
              public scientificName: string,
              public price: number,
              public imageUrl: string,
              public type: string,
              floweringSeason?: string[],
              public showDetails = false,
  ) {
    this.floweringSeason = floweringSeason;
  }
              public cartCount: number = 0;
              public id = crypto.randomUUID().substring(0, 8);


  setFloweringSeason(seasons: string[]) {
    this.floweringSeason = seasons;
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  incrementCartCount() {
    this.cartCount++;
  }
}
