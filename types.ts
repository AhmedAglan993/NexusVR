export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: number;
  client: string;
  title: string;
  image: string;
  description: string;
}

export interface PlannerFormData {
  teamSize: number;
  eventType: string;
  goals: string;
  duration: string;
}

export interface VRRecommendation {
  title: string;
  description: string;
  hardware: string;
  estimatedBudget: string;
  activities: string[];
}
