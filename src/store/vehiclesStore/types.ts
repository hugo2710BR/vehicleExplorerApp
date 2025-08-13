export interface ResultsType {
  make: string;
  model: string;
  year: string;
}

export interface DataFromAPI {
  total_count: number;
  results: ResultsType[];
}
