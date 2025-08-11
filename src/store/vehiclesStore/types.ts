export interface ResultsType {
  make: string;
  model: string;
}

export interface DataFromAPI {
  total_count: number;
  results: ResultsType[];
}
