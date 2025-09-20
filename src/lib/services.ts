import services from '../../data/services.json';
import type { Service } from '../types';

export const allServices = services as Service[];

export function getServiceBySlug(slug: string) {
  return allServices.find((service) => service.slug === slug);
}
