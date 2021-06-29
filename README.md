# react-india-states-map

> Datamaps for india States

## Usage

```tsx
import * as React from 'react'

import DatamapsIndia from 'react-datamaps-india'

const Example = () => {
  return (
    <DatamapsIndia
      regionData={{
        Maharashtra: {
          value: 10
        }
      }}
      hoverComponent={({ value }) => {
        return <span>{value}</span>
      }}
      mapLayout={{
        title: 'Title',
        legendTitle: 'Legend Title',
        startColor: '#FFDAB9',
        endColor: '#FF6347'
        hoverTitle: 'Count',
        noDataColor: '#f5f5f5',
        borderColor: '#8D8D8D',
        hoverBorderColor: '#8D8D8D',
        hoverColor: 'green'
      }}
    />
  )
}
```

### Available Props

### regionData (optional)
#### Object of valid states with count. Find valid states below

### mapLayout (optional)
#### Object of map layout props

```
hoverTitle: 'Count',
noDataColor: '#f5f5f5',
borderColor: '#8D8D8D',
hoverColor: 'green'
hoverBorderColor: 'green'
```

### Valid States

```
Andaman & Nicobar Island
Andhra Pradesh
Arunanchal Pradesh
Assam
Bihar
Chandigarh
Chhattisgarh
Dadara & Nagar Haveli
Daman & Diu
Delhi
Goa
Gujarat
Haryana
Himachal Pradesh
Jammu & Kashmir
Jharkhand
Karnataka
Kerala
Lakshadweep
Madhya Pradesh
Maharashtra
Manipur
Meghalaya
Mizoram
Nagaland
Odisha
Puducherry
Punjab
Rajasthan
Sikkim
Tamil Nadu
Telangana
Tripura
Uttar Pradesh
Uttarakhand
West Bengal
```

## License

MIT © [vinocrzy](https://github.com/vinocrzy)
