export interface Project {
  id: string;
  title: string;
  tagline: string;
  tags: string[];
  thumbnail: string;
  overview: string;
  problem: string;
  solution: string;
  outcome: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  images: string[];
}
