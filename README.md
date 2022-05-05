# Shortwave Station List
A list of shortwave stations.
This list is intended for a plugin for SDR++. The plugin is currently under development.

[View the list](https://ottopattemore.github.io/shortwave-station-list)


## API
The database can be downloaded from https://ottopattemore.github.io/shortwave-station-list/sw.json

### Structure:
```json
{
  "stations": [
    {
      "name" : "Name",
      "frequency": 1000,
      "power": 1,
      "notes": "Blah",
      "language": "english",
      "location": [
        0,
        0
      ],
      "origin": "www.google.com"
    }
  ]
}
```
This station is broadcasting at 1000Khz using 1W at 0,0 lat, long.

If the power is unknown it will be set to 0.

Origin is where the information was sourced from.
It is used for correcting errors in the data.
