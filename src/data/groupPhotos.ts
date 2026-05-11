export interface GroupPhoto {
  src: string;
  caption: string;
}

// replace with real group photos in /public/photos/group/
export const groupPhotos: GroupPhoto[] = [
  {
    src: "/photos/group/lab-2025.jpg",
    caption: "lab outing, fall 2025",
  },
  {
    src: "/photos/group/lab-2024.jpg",
    caption: "end-of-year celebration, 2024",
  },
  {
    src: "/photos/group/lab-2023.jpg",
    caption: "first lab group photo, 2023",
  },
];
