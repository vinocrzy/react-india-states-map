# react-india-states-map

> Datamaps for indian States

## Usage

```tsx
import React, { useState } from "react";

import ReactDatamaps from "react-india-states-map";

const STATES = {
  Maharashtra: {
    value: 50,
    content: {
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam quae laboriosam sed magni aliquam dolore sequi libero harum, hic nihil. Omnis eos deserunt molestiae harum, cum nemo et temporibus?",
    },
  },
};

const Example = () => {
  const [activeState, setactiveState] = useState({
    data: STATES.Maharashtra,
    name: "India",
  });

  const [stateLists, setStateLists] = useState(STATES);

  const stateOnClick = (data, name) => {
    setactiveState({ data, name });
  };

  return (
    <ReactDatamaps
      regionData={stateLists}
      mapLayout={{
        hoverTitle: "Count",
        noDataColor: "#D36418",
        borderColor: "#ffffff",
        hoverBorderColor: "pink",
        hoverColor: "green",
      }}
      hoverComponent={({ value }) => {
        return (
          <>
            <p>{value.name}</p>
          </>
        );
      }}
      onClick={stateOnClick}
    />
  );
};
```

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
