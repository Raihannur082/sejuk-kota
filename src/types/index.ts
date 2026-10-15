export interface EnvironmentalMeasurement {
  id: string;
  temperature: number;
  humidity: number;
  aqi: number;
  pm25: number;
  source_name: string;
  measured_at: string;
}

export interface GreenSpace {
  id: string;
  name: string;
  description: string;
  address: string;
  facilities: string[];
  image_url: string;
  latitude: number;
  longitude: number;
}

export interface Report {
  id: string;
  title: string;
  category: string;
  description: string;
  location_text: string;
  status: 'menunggu' | 'diproses' | 'selesai';
  created_at: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  image_url: string;
  published_at: string;
}