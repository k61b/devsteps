export interface CourseInstructor {
  name: string;
  title: string;
  bio: string;
  avatar: string;
}

export interface CourseLesson {
  title: string;
  duration: string;
  type: 'reading' | 'exercise' | 'project' | 'quiz';
  description: string;
  slug?: string; // MDX file slug
  completed?: boolean;
}

export interface CourseCurriculumDay {
  day: number;
  title: string;
  duration: string;
  lessons: CourseLesson[];
}

export interface CourseFeature {
  icon: string;
  title: string;
  description: string;
}

export interface CourseDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  language: 'en' | 'tr';
  duration: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedHours: number;
  lastUpdated: string;
  color: string;
  contributors: CourseInstructor[]; // Changed from instructors to contributors
  whatYouWillLearn: string[];
  requirements: string[];
  targetAudience: string[];
  curriculum: CourseCurriculumDay[];
  features: CourseFeature[];
  community?: {
    contributorsCount: number;
    githubRepo?: string;
  };
}
