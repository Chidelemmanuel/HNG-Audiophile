// import { features } from "process";

type product = {
  id: string;
  name: string;
  category: string;
  isNew: boolean;
  image: string;
  description: string;
  description2: string;
  description3: string;
  description4: string;
  price: string;
  features: string;
  features2: string;
  box1: string;
  box2: string;
  box3: string;
  box4: string;
  box5: string;
  Pic1: string;
  Pic2?: string;
  Pic3?: string;
};

export const products = [
  {
    id: "xx99-mark-ii",
    name: "XX99 Mark II Headphones",
    category: "Headphones",
    isNew: true,
    image: "/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg",
    description: "The new XX99 Mark II headphones is the pinnacle of pristine", 
    description2: "audio. It redefines your premium headphone experience by",
    description3: "reproducing the balanced depth and precision of studio-quality",
    description4: "sound.",
    price: "$2,999",
    features: "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
    features2: "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    box1: "Headphone Unit",
    box2: "Replacement Earcups",
    box3: "User Manual",
    box4: "3.5mm 5m Audio Cable", 
    box5: true,
    Pic1: "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg",
    Pic2: "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg",
    Pic3: "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg",
    SectionImg: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
    SectionImg2: "/assets/shared/desktop/image-xx59-headphones.jpg",
    SectionImg3: "/assets/shared/desktop/image-zx9-speaker.jpg"
  }, 
  {
    id: "xx99-mark-i",
    name: "XX99 Mark I Headphones",
    category: "Headphones",
    isNew: false,
    image: "/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
    description: " As the gold standard for headphones, the classic XX99 Mark I",
    description2: "offers detailed and accurate audio reproduction for",
    description3: "audiophiles, mixing engineers, and music aficionados alike in",
    description4: "studios and on the go.",
    price: "$1,750",
    features: "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
    features2: "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
    box1: "Headphone Unit",
    box2: "Replacement Earcups",
    box3: "User Manual",
    box4: "3.5mm 5m Audio Cable", 
    box5: false,
    Pic1: "/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg",
    Pic2: "/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg",
    Pic3: "/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg",
    SectionImg: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
    SectionImg2: "/assets/shared/desktop/image-xx59-headphones.jpg",
    SectionImg3: "/assets/shared/desktop/image-zx9-speaker.jpg"
  },
  {
    id: "xx59",
    name: "XX59 Headphones",
    category: "Headphones",
    isNew: false,
    image: "/assets/product-xx59-headphones/desktop/image-product.jpg",
    description: "Enjoy your audio almost anywhere and customize it to your",
    description2: "specific tastes with the XX59 headphones. The stylish yet",
    description3: "durable versatile wireless headset is a brilliant companion at",
    description4: "home or on the move.",
    price: "$899",
    features: "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
    features2: "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
    box1: "Headphone Unit",
    box2: "Replacement Earcups",
    box3: "User Manual",
    box4: "3.5mm 5m Audio Cable", 
    box5: false,
    Pic1: "/assets/product-xx59-headphones/desktop/image-gallery-1.jpg",
    Pic2: "/assets/product-xx59-headphones/desktop/image-gallery-2.jpg",
    Pic3: "/assets/product-xx59-headphones/desktop/image-gallery-3.jpg",
    SectionImg: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
    SectionImg2: "/assets/shared/desktop/image-xx59-headphones.jpg",
    SectionImg3: "/assets/shared/desktop/image-zx9-speaker.jpg"
  },
];
