import {Injectable} from '@angular/core';
import {Product} from '../models/product';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private products: Product[] = [
  new Product(
    'ficus ginseng',
    'Ficus microcarpa',
    29.99,
    'https://bergamotte.imgix.net/2epeh2kddafi2iclcrrjbtad51rz?ixlib=rails-4.3.1&auto=format%2Ccompress&fit=crop&q=65&ar=1%3A1&w=2048',
    'Indoor plant',
    ['Winter','Summer']

  ),
    new Product(
      'ficus lyrata',
      'Ficus lyrata',
      39.99,
      'https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.xl.006-1-0106.jpg&w=1080&q=80',
      'Indoor plant',
      ['Autumn', 'Winter']
    ),
    new Product(
      'ficus elastica',
      'Ficus elastica',
      19.99,
      'https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.xl.019-1-0406.jpg&w=1080&q=80',
      'Indoor plant'
    ),
    new Product(
      'monstera deliciosa',
      'Monstera deliciosa',
      34.99,
      'https://images.unsplash.com/photo-1545165375-1b744b9ed444?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Indoor plant'
    ),
    new Product(
      'pothos doré',
      'Epipremnum aureum',
      19.99,
      'https://images.unsplash.com/photo-1630570345724-706a612c0425?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Indoor plant'
    ),
    new Product(
      'calathea zebrée',
      'Calathea zebrina',
      24.99,
      'https://www.thespruce.com/thmb/ywigpqNMCMXCQ0ToL0i6PxNhEgI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SPR-calathea-zebrina-plant-profile-7374039-06-912afa0b7d9643c5830a0e04e5b4c68e.jpg',
      'Indoor plant'
    ),
    new Product(
      'sansevieria',
      'Sansevieria trifasciata',
      17.99,
      'https://seedfella.com/cdn/shop/files/bird-nest-snake-plant.webp?v=1736431096',
      'Indoor plant'
    ),
    new Product(
      'fougère of Boston',
      'Nephrolepis exaltata',
      22.50,
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMEK-6YhSUwHgOPe9gfxkcakAWljhmGsEAQ&s',
      'Indoor plant'
    ),
    new Product(
      'zz plant',
      'Zamioculcas zamiifolia',
      27.00,
      'https://www.ugaoo.com/cdn/shop/files/1_af764eda-b091-4320-953d-e4de57387c54.jpg?v=1741698812&width=3840',
      'Indoor plant',
      ['Autumn', 'Winter']
    ),
    new Product(
      'pilea peperomioides',
      'Pilea peperomioides',
      21.99,
      'https://cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/Q5D6G53DNFA4LDFYEPKOMLZABE.jpg',
      'Indoor plant'
    ),
    new Product(
      'fittonia rose',
      'Fittonia albivenis',
      18.50,
      'https://monjungle.com/cdn/shop/files/1700683188102-01.jpg?v=1749556407',
      'Indoor plant'
    ),
    new Product(
      'ficus benjamina',
      'Ficus benjamina',
      31.99,
      'https://www.jardiner-malin.fr/wp-content/uploads/2023/01/ficus-benjamina.jpg',
      'Indoor plant'
    ),
    new Product(
      'spathiphyllum',
      'Spathiphyllum wallisii',
      23.99,
      'https://m.media-amazon.com/images/I/71+bkdSQVaL.jpg',
      'Indoor plant'
    ),
    new Product(
      'philodendron cœur',
      'Philodendron scandens',
      29.50,
      'https://bloomboxfrance.fr/cdn/shop/products/GreenSweetheart-hanging-17cm.jpg?v=1666868601',
      'Indoor plant'
    ),
    new Product(
      'orchidée phalaenopsis',
      'Phalaenopsis spp.',
      44.99,
      'https://bloomboxfrance.fr/cdn/shop/products/GreenSweetheart-hanging-17cm.jpg?v=1666868601',
      'Indoor plant'
    ),
    new Product(
      'broméliacée guzmania',
      'Guzmania lingulata',
      26.00,
      'https://bromelia.info/wp-content/uploads/2014/01/bromelia-Guzmania-01.jpg',
      'Indoor plant'
    ),
    new Product(
      'aglaonema silver queen',
      'Aglaonema commutatum',
      28.99,
      'https://budsnblush.com/cdn/shop/products/Aglaonemasilverqueen.jpg?v=1660309406&width=360',
      'Indoor plant'
    ),
    new Product(
      'cactus de Noël',
      'Schlumbergera truncata',
      20.00,
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaq1iQAIcyB5FNOOloJUuB3AxS9O368HUfoA&s',
      'Indoor plant'
    ),
    new Product(
      'alocasia zebrina',
      'Alocasia zebrina',
      39.99,
      'https://cdn.be.green/large/6386100b2ac33482411725.jpg',
      'Indoor plant'
    ),
    new Product(
      'maranta rouge',
      'Maranta leuconeura',
      25.50,
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_AE8pfJX87QWjN1KEsLeexJjz87MYzCNY-w&s',
      'Indoor plant'
    ),
    new Product(
      'fougère nid d’oiseau',
      'Asplenium nidus',
      23.00,
      'https://assets.jardiland.com/image/fetch/w_554,f_auto/https://enseignecompublicprd.blob.core.windows.net/enseignecompublicprd/Riversand/AssetExport/00826881.8715495855586.51799.40037502.jpg',
      'Indoor plant'
    ),
    new Product(
      'ceropegia string',
      'Ceropegia woodii',
      19.50,
      'https://fr.plantsfarm.com/uploads/202237056/string-of-hearts18050951279.jpg',
      'Indoor plant'
    ),
    new Product(
      'dracaena marginata',
      'Dracaena marginata',
      32.00,
      'https://green-bubble.com/cdn/shop/files/green-bubble-dracaena-marginata_9ade2b95-2243-41e5-b0c9-e5c44ce26cdb_1920x.jpg?v=1725440596',
      'Indoor plant'
    )
  ];

  getProducts(): Product[] {
    return [...this.products];
  }

  addToCartById(productId: string): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.incrementCartCount();
      alert(`${product.name} has been added to the cart!`);
    } else {
      alert('Product not found!');
    }
  }
}
