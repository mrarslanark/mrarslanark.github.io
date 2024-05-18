export interface IAchievement {
  id: string;
  title: string;
  description: string;
}

export interface IEducation {
  id: string;
  title: string;
  institute: string;
  address: string;
  start_year: string;
  end_year: string;
  achievements: Array<IAchievement>;
}
