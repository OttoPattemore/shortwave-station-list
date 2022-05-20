# Shortwave Station List
A list of shortwave stations.
This list is intended for [a plugin for SDR++](https://github.com/OttoPattemore/shortwave-station-list-sdrpp).

The data is in the json format and is a mix of the EIBI database and custom stations.

## API
The database can be downloaded from https://ottopattemore.github.io/shortwave-station-list/db/type.json

Types:
* am.json
* eibi.json
* fm.json

### Structure:
```json
{
  "stations": [
    {
      "name": "JXN Marine Norway",
      "frequency": 16.4,
      "is_location_real": false,
      "country": "Norway",
      "power": 0,
      "notes": "",
      "location": [
          62.720953,
          10.180585
      ]
    }
  ]
}
```
