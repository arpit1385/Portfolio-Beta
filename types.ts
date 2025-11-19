export interface SkillModule {
  name: string;
  category: 'core' | 'tools' | 'foundation' | 'cert' | 'infra';
  level?: number; // 1-100
  description?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  type: 'internship' | 'work' | 'project';
  description: string[];
  status: 'active' | 'inactive' | 'cached';
}

export interface ProjectItem {
  id: string;
  title: string;
  tags: string[];
  description: string;
  longDescription: {
    problem: string;
    approach: string;
    impact: string;
    futureImprovements?: string;
  };
  link?: string;
}

export interface BootLog {
  id: number;
  text: string;
  delay: number;
  type: 'info' | 'warning' | 'success' | 'error' | 'system';
}