export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  featured: boolean;
  image: string;
  technologies: string[];
  demoUrl: string;
}

export interface Persona {
  id: string;
  name: string;
  description: string;
  systemPrompt: string;
  avatar: string;
  examples: PersonaExample[];
}

export interface PersonaExample {
  user: string;
  assistant: string;
}
