export type Role = "USER" | "ADMIN"; // expand if more roles exist

export interface Author {
  id: number;
  name: string;
  email: string;
  role: Role;
  phone: string;
  pictures: string | null;
  createdAt: string; // ISO date string
}

export interface IPost {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  isFeatured: boolean;
  tags: string[];
  views: number;
  authorId: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  author: Author;
}
