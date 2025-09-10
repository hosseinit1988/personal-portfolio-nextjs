
export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  longDescription: string;
  technologies: string[];
  liveLink?: string;
}

export enum View {
  Home = 'HOME',
  ProjectDetail = 'PROJECT_DETAIL',
  Contact = 'CONTACT',
}
