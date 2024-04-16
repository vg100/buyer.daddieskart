export interface CheckboxItemProps {
  name: string;
  label: string;
  value: string;
}



export const filter = [

{
  label: "Color",
  value:"color",
  filter: [
    {
      name: 'color',
      label: 'Black',
      value: 'black'
    },
    {
      name: 'color',
      label: 'Blue',
      value: 'blue'
    },
    {
      name: 'color',
      label: 'Red',
      value: 'red'
    },
    {
      name: 'color',
      label: 'Green',
      value: 'green'
    },
    {
      name: 'color',
      label: 'Orange',
      value: 'orange'
    },
    {
      name: 'color',
      label: 'Pink',
      value: 'pink'
    }
  ]
},
{
  label: "Size",
  value:"size",
  filter: [
    {
      name: 'size',
      label: 'XS',
      value: 'xs'
    },
    {
      name: 'size',
      label: 'S',
      value: 's'
    },
    {
      name: 'size',
      label: 'M',
      value: 'm'
    },
    {
      name: 'size',
      label: 'L',
      value: 'l'
    },
    {
      name: 'size',
      label: 'XL',
      value: 'xl'
    },
    {
      name: 'size',
      label: '2XL',
      value: '2xl'
    },
    {
      name: 'size',
      label: '3XL',
      value: '3xl'
    },
    {
      name: 'size',
      label: '4XL',
      value: '4xl'
    },
    {
      name: 'size',
      label: '5XL',
      value: '5xl'
    },
    {
      name: 'size',
      label: '6XL',
      value: '6xl'
    },
  ]
},

{
  label: "Price range",
},
{
  label: "Rating",
  value:"rating",
  filter: [5, 4, 3, 2, 1]
}, 

{
  label: "Occasion",
  value:"occasion",
  filter: [
    {
      name: 'occasion',
      label: 'Graduation',
      value: 'graduation'
    },
    {
      name: 'occasion',
      label: 'Diwali',
      value: 'diwali'
    },


  ]
},

{
  label: "Lifestyle",
  value:"lifestyle",
  filter: [
    {
      name: 'lifestyle',
      label: 'Business Casual',
      value: 'business_casual'
    },
    {
      name: 'lifestyle',
      label: 'Casual',
      value: 'casual'
    },
    {
      name: 'lifestyle',
      label: 'Formal',
      value: 'formal'
    },


  ]
},

{
  label: "New Arrivals",
  value:"new_arrivals",
  filter: [
    {
      name: 'new_arrivals',
      label: 'Last 30 days',
      value: '30days'
    },
    {
      name: 'new_arrivals',
      label: 'Last 90 days',
      value: '90days'
    },


  ]
},

{
  label: "Discount",
  value:"offer",
  filter: [
    {
      name: 'offer',
      label: '10% off or more',
      value: '10%'
    },
    {
      name: 'offer',
      label: '25% off or more',
      value: '25%'
    },
    {
      name: 'offer',
      label: '35% off or more',
      value: '35%'
    },
    {
      name: 'offer',
      label: '60% off or more',
      value: '60%'
    },
  ]
},
{
  label: "Seller",
  value:"seller",
  filter: [
    {
      name: 'seller',
      label: 'Dell',
      value: 'dell'
    },
  ]
},
{
  label: "Availability",
  value:"availability",
  filter: [
    {
      name: 'availability',
      label: 'Include out of Stock',
      value: 'out_of_stock'
    },
  ]
}, 


]



export const availabiltyOptions: CheckboxItemProps[] = [
  {
    name: 'availability',
    label: 'In stock',
    value: 'in_stock'
  },
  {
    name: 'availability',
    label: 'Pre-book',
    value: 'pre_book'
  },
  {
    name: 'availability',
    label: 'Out of stock',
    value: 'out_of_stock'
  }
]

export const colorFamilyOptions: CheckboxItemProps[] = [
  {
    name: 'color',
    label: 'Black',
    value: 'black'
  },
  {
    name: 'color',
    label: 'Blue',
    value: 'blue'
  },
  {
    name: 'color',
    label: 'Red',
    value: 'red'
  }
];

export const brandsOptions: CheckboxItemProps[] = [
  {
    name: 'brands',
    label: 'Blackberry',
    value: 'blackberry'
  },
  {
    name: 'brands',
    label: 'Apple',
    value: 'apple'
  },
  {
    name: 'brands',
    label: 'Nokia',
    value: 'nokia'
  },
  {
    name: 'brands',
    label: 'Sony',
    value: ',ony'
  },
  {
    name: 'brands',
    label: 'LG',
    value: 'lg'
  }
];

export const displyOptions: CheckboxItemProps[] = [
  {
    name: 'displayType',
    label: 'LCD',
    value: 'lcd'
  },
  {
    name: 'displayType',
    label: 'IPS',
    value: 'ips'
  },
  {
    name: 'displayType',
    label: 'OLED',
    value: 'oled'
  },
  {
    name: 'displayType',
    label: 'AMOLED',
    value: 'amoled'
  },
  {
    name: 'displayType',
    label: 'Retina',
    value: 'retina'
  }
];

export const deliveryOptions: CheckboxItemProps[] = [
  {
    name: 'delivery',
    label: 'Free Shipping',
    value: 'free_shipping'
  },
  {
    name: 'delivery',
    label: 'One-day Shipping',
    value: 'one-day_shipping'
  },
  {
    name: 'delivery',
    label: 'Cash on Delivery',
    value: 'cash_on_delivery'
  }
];

export const campaignOptions: CheckboxItemProps[] = [
  {
    name: 'campaign',
    label: 'Summer Sale',
    value: 'summer_sale'
  },
  {
    name: 'campaign',
    label: 'March Madness',
    value: 'march_madness'
  },
  {
    name: 'campaign',
    label: 'Flash Sale',
    value: 'flash_sale'
  },
  {
    name: 'campaign',
    label: 'BOGO Blast',
    value: 'bogo_blast'
  }
];
export const warrantyOptions: CheckboxItemProps[] = [
  {
    name: 'warranty',
    label: '3 months',
    value: '3_months'
  },
  {
    name: 'warranty',
    label: '6 months',
    value: '6_months'
  },
  {
    name: 'warranty',
    label: '1 year',
    value: '1_year'
  },
  {
    name: 'warranty',
    label: '2 years',
    value: '2_years'
  },
  {
    name: 'warranty',
    label: '3 years',
    value: '3_years'
  },
  {
    name: 'warranty',
    label: '5 years',
    value: '5_years'
  }
];

export const warrantyTypeOptions: CheckboxItemProps[] = [
  {
    name: 'warrantyType',
    label: 'Replacement',
    value: 'replacement'
  },
  {
    name: 'warrantyType',
    label: 'Service',
    value: 'service'
  },
  {
    name: 'warrantyType',
    label: 'Partial Coverage',
    value: 'partial_coverage'
  },
  {
    name: 'warrantyType',
    label: 'Apple Care',
    value: 'apple_care'
  },
  {
    name: 'warrantyType',
    label: 'Money back',
    value: 'money_back'
  },
  {
    name: 'warrantyType',
    label: 'Extendable',
    value: 'extendable'
  }
];

export const certificationOptions: CheckboxItemProps[] = [
  {
    name: 'certification',
    label: 'RoHS',
    value: 'rohs'
  },
  {
    name: 'certification',
    label: 'FCC',
    value: 'fcc'
  },
  {
    name: 'certification',
    label: 'Conflict Free',
    value: 'conflict_free'
  },
  {
    name: 'certification',
    label: 'ISO 9001:2015',
    value: 'iso_9001:2015'
  },
  {
    name: 'certification',
    label: 'ISO 27001:2013',
    value: 'iso_27001:2013'
  },
  {
    name: 'certification',
    label: 'IEC 61000-4-2',
    value: 'iec_61000-4-2'
  }
];





