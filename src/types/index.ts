
export interface Car {
  availability: string;
  body_type: string;
  body_type_eng: string;
  booking_allowed: boolean;
  brand_rel: {
    count: number;
    name: string;
    slug: string;
  };
  color: string;
  color_eng: string;
  complectation_name: string;
  currency: string;
  custom: string;
  engine_power: string;
  engine_power_num: number;
  engine_type: string;
  engine_type_eng: string;
  engine_volume: number;
  exchange: string;
  extras: string;
  folder_id: string;
  gearbox: string;
  gearbox_eng: string;
  generation_name: string;
  generation_rel: {
    count: number;
    name: string;
    slug: string;
  };
  images: {
    image: string[];
  };
  images_amount: number;
  mark_cyrillic_name: string;
  mark_id: string;
  metallic: string;
  model_cyrillic_name: string;
  model_name: string;
  model_rel: {
    count: number;
    name: string;
    slug: string;
  };
  modification_id: string;
  offer_type: string;
  owners_number: string;
  owners_number_num: number;
  price: number;
  pts: string;
  registry_year: number;
  run: number;
  state: string;
  tech_param_id: number;
  unique_id: number;
  updated_at: string;
  vin: string;
  wheel: string;
  year: number;
}


export interface Meta {
  page: number;
  pageCount: number;
}
