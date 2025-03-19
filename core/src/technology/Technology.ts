import Project from '../project/Project';

export default interface Technology {
  id: number;
  name: string;
  description?: string;
  image: string;
  featured: boolean;
  projects: Project[];
  createdAt: Date;
  updatedAt: Date;
}
