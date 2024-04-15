import team10 from 'assets/img/team/40x40/10.webp';
import team12 from 'assets/img/team/40x40/12.webp';
import product60 from 'assets/img/products/60x60/3.png';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faChrome, faFirefoxBrowser } from '@fortawesome/free-brands-svg-icons';

type SearchItemCategory =
  | 'recently_searched'
  | 'products'
  | 'quick_links'
  | 'suggestion_files'
  | 'members'
  | 'related_search';

export type SearchResult = {
  url: string;
  name: string;
  category: SearchItemCategory;
  image?: string;
  details?: string;
  format?: string;
  avatar?: string;
  status?: string;
  icon?: IconProp;
};

export const searchItems: SearchResult[] = [
  {
    url: `/pf?keyword=apple`,
    name: 'Store Macbook',
    category: 'recently_searched'
  },
  {
    url: `/pf?keyword=mobile`,
    name: 'MacBook Air - 13″',
    category: 'recently_searched'
  },
  {
    url: `/p-d?pid=66131702d157bcd8e464b5cf`,
    image: product60,
    name: 'MacBook Air - 13″',
    details: '8GB Memory - 1.6GHz - 128GB Storage',
    category: 'products'
  },
  {
    url: `/p-d?pid=66131702d157bcd8e464b5cf`,
    image: product60,
    name: 'MacBook Pro - 13″',
    details: '30 Sep at 12:30 PM',
    category: 'products'
  },
];
