import Product from "../ models/product";

const PRODUCTS: Product[] = [
    new Product(
        'p1',
        'u1',
        'Gaming RGB Chair',
        'https://i.ebayimg.com/images/g/iVkAAOSwubRfWh7~/s-l1600.jpg',
        'A great chair for gaming!',
        999.99
    ),
    new Product(
        'p2',
        'u1',
        'Gaming PC',
        'https://www.memorypc.fr/media/image/33/7c/eb/553663gCDxK7pqF7jWL_600x600.webp',
        'Fast and furious gaming pc',
        3999.99
    ),
    new Product(
        'p3',
        'u2',
        'BENGOO Gaming Headset',
        'https://m.media-amazon.com/images/I/61CGHv6kmWL.jpg',
        'A great headset for gaming!',
        139.99
    ),
    new Product(
        'p4',
        'u3',
        'LG UltraGear 45” OLED Curved Monitor',
        'https://www.lg.com/fr/images/moniteurs/md07568248/gallery/lg-tv-45GR95QE-B-small03.jpg',
        "LG - UltraGear 45” OLED Curved WQHD 240Hz 0.03ms FreeSync and NVIDIA G-Sync Compatible Gaming Monitor with HDR10 - Black",
        1799.99
    ),
    new Product(
        'p5',
        'u3',
        'PowerBook',
        'https://get.pxhere.com/photo/laptop-computer-macbook-mac-screen-water-board-keyboard-technology-air-mouse-photo-airport-aircraft-tablet-aviation-office-black-monitor-keys-graphic-hardware-image-pc-exhibition-multimedia-calculator-vector-water-cooling-floppy-disk-phased-out-desktop-computer-netbook-personal-computer-computer-monitor-electronic-device-computer-hardware-display-device-448748.jpg',
        'Awesome hardware, crappy keyboard and a hefty price. Buy now before a new one is released!',
        2299.99
    ),
    new Product(
        'p6',
        'u1',
        'Mini Electric Oven',
        'https://media.conforama.fr/m/export/Medias/700000/10000/9000/700/10/G_719710_A.jpg',
        "A great oven for baking cakes, pies and even pizza!",
        159.49
    )
];

export default PRODUCTS;
