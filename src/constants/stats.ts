import { Users, Heart, Map } from 'lucide-react';

export const stats = [
  {
    icon: Users,
    value: '+10.000',
    label: 'pets atendidos',
  },
  {
    icon: Heart,
    value: '98%',
    label: 'de satisfação',
  },
  {
    icon: Map,
    value: 'Brasil',
    label: 'atendemos em todo o país',
  },
] as const;