export const homeMenuItems = [
  "HOME 1",
  "HOME 2",
  "HOME 3",
  "HOME 4",
  "HOME 5",
  "Home Fashion",
  "Home Fashion Light",
  "Home Jewellery Dark",
  "Home Jewellery Light",
];
export const pagesMenuItems = [
  { label: "CONTACT US", href: "/contact" },
  { label: "BLOG", href: "/blog" },
  { label: "ARTICLE PAGE", href: "/article" },
  { label: "FAQS", href: "/faq" },
  { label: "ABOUT US", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "GALLERY", href: "/gallery" },
  { label: "CARD", href: "/cart" },
  { label: "CHECKOUT", href: "/checkout" },
  { label: "WISHLIST", href: "/wishlist" },
  { label: "LOGIN", href: "/login" },
  { label: "REGISTER", href: "/register" },
  { label: "404", href: "/404" }
];




export interface ShopColumn {
  title: string;
  items: string[];
}
export interface LayoutColumn {
  title: string;
  items: string[];
}
export const shopColumns: ShopColumn[] = [
  {
    title: "WHEELS",
    items: ["Home", "Shop", "Featured", "Layouts", "Pages"],
  },
  {
    title: "DECORATION",
    items: ["Home", "Shop", "Featured", "Layouts", "Pages"],
  },
  {
    title: "ACCESSORIES",
    items: ["Home", "Shop", "Featured", "Layouts", "Pages"],
  },
  {
    title: "ENGINE",
    items: ["Home", "Shop", "Featured", "Layouts", "Pages"],
  },
];


export const layoutColumns: LayoutColumn[] = [
  {
    title: "COLLECTION LAYOUTS",
    items: ["LookBook", "LookBook-Selected", "Left Sidebar",
      "Right SideBar", "No Sidebar", "No Inner Page Header",
      "Image Header", "Color Header", "Pagination Layout", "Load More Scroll"],
  },

  {
    title: "PRODUCT LAYOUTS",
    items: ["Horizontal Thumbs", "Veritical Thumbs", "Veritical Thumbs-Right",
      "Image Rollover", "Horizontal Slider", "Horizontal Grid", "Subscriptions",
      "Preorder", "Video Thumb", "Deal Counter"]
  }
]