import { Address, I18nString, RoleUser } from "./common";

export interface Supplier<T = unknown> {
  active: boolean;
  address: SupplierAddress[];
  bank: Bank;
  beta: boolean;
  billing: {
    address: Address;
    legal_name: string;
    registration_number: string | number;
    tax_number: string | number;
  };
  company_description: string;
  cost_price: number;
  created_date: Date;
  currency: string;
  default_warehouse_id: string;
  email: string;
  excluded_attributes: string[];
  excluded_brands: string[];
  excluded_categories: string[];
  handling_time: {
    from: number;
    to: number;
  };
  id: string;
  integrations: {
    data: {
      access_token: string;
      fields: T;
    };
    enabled: boolean;
    type: string;
  };
  jscrapper_urls: string[];
  key: string;
  languages: (keyof I18nString)[];
  last_translation_update: Date;
  logo: string;
  max_cost: number;
  min_cost: number;
  min_stock: number;
  name: string;
  project_key: string;
  sale_price: number;
  secret: string;
  skipping_words: string[];
  sku_prefix: string;
  source_type: string;
  translation_pipes: TranslationPipe[];
  translation_worker: boolean;
  updated_date: Date;
  url: string;
  users: RoleUser<"owner" | "accounting" | "products" | "orders">[];
  vat: number;
  vendor: string;
  xml_url: string[];
}

interface TranslationPipe {
  apply_to: "attributes" | "name" | "description" | "short_description";
  from: keyof I18nString;
  to: keyof I18nString;
}
interface SupplierAddress {
  city: string;
  country: string;
  line1: string;
  line2: string;
  post_code: string;
  state: string;
}
interface Bank {
  account_number: string;
  bank_branch: string;
  bank_country: string;
  iban_no: string;
  recipient_address: string;
  recipient_name: string;
  swift_code: string;
}
