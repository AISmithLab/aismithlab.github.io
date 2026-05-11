export interface GroupPhoto {
  src: string;
  caption: string;
}

// replace with real group photos in /public/photos/group/
export const groupPhotos: GroupPhoto[] = [
  {
    src: "/photos/group/chi2026.jpg",
    caption: "CHI 2026",
  },
  {
    src: "/photos/group/barcelona.jpg",
    caption: "Barcelona",
  }
];
