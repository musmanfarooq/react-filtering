export interface Model {
    id: string;
    name: string;
    variants: Variant[];
    description?: string;
    price?: string;
  }
  
  export interface Variant {
    id: string;
    name: string;
  }
  
  export interface Brand {
    id: string;
    name: string;
    models: Model[];
  }
  
  export interface Products {
    id: string;
    name: string;
    brands: Brand[];
  }
  
  export const products: Products[] = [
    {
      id: "1",
      name: "Phone",
      brands: [
        {
          id: "1",
          name: "iPhone",
          models: [
            {
              id: "1",
              name: "iPhone 15",
              description:
                "The iPhone 15 comes with a stunning 6.1-inch OLED display, offering vibrant colors and deep blacks. Powered by the A16 Bionic chip, it delivers lightning-fast performance and energy efficiency. The dual-camera system ensures high-quality photos with advanced computational photography. It also supports 5G connectivity for super-fast downloads and streaming. Available in 128 GB, 256 GB, and 512 GB storage options.",
              variants: [
                { id: "1", name: "128 GB" },
                { id: "2", name: "256 GB" },
                { id: "3", name: "512 GB" },
              ],
              price: "Buy $ 1,050",
            },
            {
              id: "2",
              name: "iPhone 15 Pro",
              description:
                "The iPhone 15 Pro features a 6.1-inch ProMotion display with adaptive refresh rates up to 120Hz for smoother scrolling. Equipped with the A16 Bionic chip, it delivers top-tier performance for gaming and multitasking. The triple-camera system includes a telephoto lens, offering enhanced zoom capabilities. It also boasts advanced AR features and MagSafe technology. Choose from 128 GB, 256 GB, or 512 GB of storage.",
              variants: [
                { id: "4", name: "128 GB" },
                { id: "5", name: "256 GB" },
                { id: "6", name: "512 GB" },
              ],
              price: "Buy $ 1,050",
            },
            {
              id: "3",
              name: "iPhone 15 Pro Max",
              description:
                "The iPhone 15 Pro Max is the pinnacle of iPhone technology, featuring a 6.7-inch ProMotion display and a durable ceramic shield front cover. The A16 Bionic chip and 5-core GPU provide exceptional graphics performance. Its advanced triple-camera system includes a LiDAR scanner for enhanced AR experiences. Additionally, it supports ProRAW and ProRes video recording for professional-grade content creation. Available in 128 GB, 256 GB, and 512 GB variants.",
              variants: [
                { id: "7", name: "128 GB" },
                { id: "8", name: "256 GB" },
                { id: "9", name: "512 GB" },
              ],
              price: "Buy $ 1,050",
            },
          ],
        },
        {
          id: "2",
          name: "Samsung",
          models: [
            {
              id: "4",
              name: "S24 Ultra",
              description:
                "The Samsung S24 Ultra features a 6.8-inch Dynamic AMOLED display with 120Hz refresh rate, offering a smooth and vibrant visual experience. Powered by the Exynos 2200 processor, it handles intensive tasks with ease. The quad-camera setup includes a 108MP main sensor for stunning detail in every shot. It also supports S Pen functionality, making it perfect for productivity on the go. Available in a 128 GB variant.",
              variants: [{ id: "10", name: "128 GB" }],
              price: "Buy $ 1,050",
            },
            {
              id: "5",
              name: "S23 Ultra",
              description:
                "The Samsung S23 Ultra offers a 6.8-inch QHD+ display with HDR10+ support for brilliant colors and contrast. It is powered by the Snapdragon 8 Gen 1 processor, ensuring fast performance and efficient multitasking. The camera system includes a 108MP main camera, 10x optical zoom, and 8K video recording. It also comes with an IP68 rating for water and dust resistance. Available in 128 GB, 256 GB, and 512 GB storage options.",
              variants: [
                { id: "11", name: "128 GB" },
                { id: "12", name: "256 GB" },
                { id: "13", name: "512 GB" },
              ],
              price: "Buy $ 1,050",
            },
            {
              id: "6",
              name: "S22 Light",
              description:
                "The Samsung S22 Light is a more affordable option, featuring a 6.2-inch FHD+ AMOLED display. It is powered by the Snapdragon 870 processor, providing a good balance between performance and battery life. The dual-camera setup includes a 50MP main sensor and an ultra-wide lens for versatile photography. It supports fast charging and comes with a sleek design. Available in a 256 GB variant.",
              variants: [{ id: "14", name: "256 GB" }],
              price: "Buy $ 1,050",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      name: "Laptop",
      brands: [
        {
          id: "3",
          name: "Apple",
          models: [
            {
              id: "7",
              name: "MacBook Pro",
              description:
                "The MacBook Pro is a high-performance laptop designed for professionals. It features a 14-inch Retina display with True Tone technology, offering stunning visuals. Powered by the M1 Pro chip, it delivers incredible performance and battery life. The laptop includes a Magic Keyboard with Touch ID and an advanced thermal system. Available in 256 SSD and 500 GB storage options, it’s perfect for creative workflows.",
              variants: [
                { id: "15", name: "256 SSD" },
                { id: "16", name: "500 GB" },
              ],
              price: "Buy $ 1,050",
            },
            {
              id: "8",
              name: "MacBook Air",
              description:
                "The MacBook Air is an ultra-thin and lightweight laptop, ideal for everyday use. It comes with a 13.3-inch Retina display and is powered by the M1 chip, providing efficient performance with minimal power consumption. The laptop features a fanless design, ensuring silent operation, and a battery that lasts up to 18 hours. Available in 256 SSD and 500 GB variants, it’s perfect for students and professionals on the go.",
              variants: [
                { id: "17", name: "256 SSD" },
                { id: "18", name: "500 GB" },
              ],
              price: "Buy $ 1,050",
            },
          ],
        },
        {
          id: "4",
          name: "HP",
          models: [
            {
              id: "9",
              name: "Elite Book",
              description:
                "The HP Elite Book is a robust business laptop with a 14-inch FHD display. It is powered by the Intel Core i7 processor, ensuring smooth performance for demanding tasks. The laptop includes advanced security features such as HP Sure Start and HP Sure View for privacy. It also offers long battery life and fast charging, making it ideal for professionals on the move. Available in 500 GB and 1 TB storage options.",
              variants: [
                { id: "19", name: "500 GB" },
                { id: "20", name: "1 TB" },
              ],
              price: "Buy $ 1,050",
            },
          ],
        },
      ],
    },
  ];
  