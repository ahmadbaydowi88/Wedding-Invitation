export interface RsvpFormData {
  name: string;
  email: string;
  attendance: 'yes' | 'no';
  guests: number;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Wish {
  id: string;
  name: string;
  message: string;
  date: string;
  attendance: 'yes' | 'no';
}