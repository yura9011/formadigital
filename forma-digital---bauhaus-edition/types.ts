import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: 'red' | 'blue' | 'yellow' | 'black';
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export type ColorVariant = 'red' | 'blue' | 'yellow' | 'black' | 'white';