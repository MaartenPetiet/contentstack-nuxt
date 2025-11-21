type BuildTuple<T, N extends number, R extends T[] = []> = R["length"] extends N
  ? R
  : BuildTuple<T, N, [...R, T]>;

type TuplePrefixes<T extends any[]> = T extends [any, ...infer Rest]
  ? T | TuplePrefixes<Rest extends any[] ? Rest : []>
  : [];

type MaxTuple<T, N extends number> = TuplePrefixes<BuildTuple<T, N>>;

export interface PublishDetails {
  environment: string;
  locale: string;
  time: string;
  user: string;
}

export interface File {
  uid: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
  content_type: string;
  file_size: string;
  tags: string[];
  filename: string;
  url: string;
  ACL: any[] | object;
  is_dir: boolean;
  parent_uid: string;
  _version: number;
  title: string;
  _metadata?: object;
  description?: string;
  dimension?: {
    height: number;
    width: number;
  };
  publish_details: PublishDetails;
}

export interface Link {
  title: string;
  href: string;
}

export interface Taxonomy {
  taxonomy_uid: string;
  max_terms?: number;
  mandatory: boolean;
  non_localizable: boolean;
}

export type TaxonomyEntry = Taxonomy & { term_uid: string };

export interface CSLPAttribute {
  "data-cslp"?: string;
  "data-cslp-parent-field"?: string;
}
export type CSLPFieldMapping = CSLPAttribute | string;

export interface SystemFields {
  uid: string;
  created_at?: string;
  updated_at?: string;
  created_by?: string;
  updated_by?: string;
  _content_type_uid?: string;
  tags?: string[];
  ACL?: any[];
  _version?: number;
  _in_progress?: boolean;
  locale?: string;
  publish_details?: PublishDetails;
  title?: string;
}

export interface ListItems extends SystemFields {
  list_item: ListItem;
}

export interface List {
  /** Version */
  _version?: number;
  /** Type */
  type?: ("bullet" | "check" | "cross" | "ordered") | null;
  /** List items */
  list_items?: ListItems[];
  /** CSLP mapping for editable fields */
  $?: {
    type?: CSLPFieldMapping;
    list_items?: CSLPFieldMapping;
  };
}

export interface ListItem {
  /** Version */
  _version?: number;
  /** Text */
  text?: string;
  /** CSLP mapping for editable fields */
  $?: {
    text?: CSLPFieldMapping;
  };
}

export interface Alert {
  /** Version */
  _version?: number;
  /** Title */
  title?: string;
  /** Description */
  description?: string;
  /** CSLP mapping for editable fields */
  $?: {
    title?: CSLPFieldMapping;
    description?: CSLPFieldMapping;
  };
}

export interface Button {
  /** Version */
  _version?: number;
  /** Text */
  text?: string;
  /** Variant */
  variant?: ("primary" | "secondary" | "tertiary" | "text" | "brand") | null;
  /** Link */
  link?: Link;
  /** CSLP mapping for editable fields */
  $?: {
    text?: CSLPFieldMapping;
    variant?: CSLPFieldMapping;
    link?: CSLPFieldMapping;
  };
}

/** A block! */
export interface Block {
  /** Version */
  _version?: number;
  /** Title */
  title?: string;
  /** Copy */
  copy?: string;
  /** Image */
  image?: File | null;
  /** Layout */
  layout?: ("image_left" | "image_right") | null;
  /** CSLP mapping for editable fields */
  $?: {
    title?: CSLPFieldMapping;
    copy?: CSLPFieldMapping;
    image?: CSLPFieldMapping;
    layout?: CSLPFieldMapping;
  };
}

export interface Blocks extends SystemFields {
  block: Block;
  button: Button;
  list: List;
  alert: Alert;
}

export interface ContentPage extends SystemFields {
  /** Version */
  _version?: number;
  /** Title */
  title: string;
  /** URL */
  url?: string;
  /** Description */
  description?: string;
  /** Components */
  blocks?: Blocks[];
  /** CSLP mapping for editable fields */
  $?: {
    title?: CSLPFieldMapping;
    url?: CSLPFieldMapping;
    description?: CSLPFieldMapping;
    blocks?: CSLPFieldMapping;
  };
}

export interface CtaGroup extends SystemFields {
  /** Version */
  _version?: number;
  /** Title */
  title: string;
  /** Call to Action */
  call_to_action?: {
    /** Icon */
    icon?: File | null;
    /** Text */
    text?: string;
    /** Link */
    link?: Link;
    /** CSLP mapping for editable fields */
    $?: {
      icon?: CSLPFieldMapping;
      text?: CSLPFieldMapping;
      link?: CSLPFieldMapping;
    };
  };
  /** CSLP mapping for editable fields */
  $?: {
    title?: CSLPFieldMapping;
    call_to_action?: CSLPFieldMapping;
  };
}

export interface Blocks1 extends SystemFields {
  block: Block;
}

export interface Page extends SystemFields {
  /** Version */
  _version?: number;
  /** Title */
  title: string;
  /** URL */
  url?: string;
  /** Description */
  description?: string;
  /** Image */
  image?: File | null;
  /** Rich Text */
  rich_text?: string;
  /** Button */
  button?: Button;
  /** blocks */
  blocks?: Blocks1[];
  /** CSLP mapping for editable fields */
  $?: {
    title?: CSLPFieldMapping;
    url?: CSLPFieldMapping;
    description?: CSLPFieldMapping;
    image?: CSLPFieldMapping;
    rich_text?: CSLPFieldMapping;
    button?: CSLPFieldMapping;
    blocks?: CSLPFieldMapping;
  };
}
