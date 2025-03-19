export default interface Technology {
  id: number;
  name: string;
  description?: string;
  image: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}
