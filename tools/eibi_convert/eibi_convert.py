# Header kHz:75;Time(UTC):93;Days:59;ITU:49;Station:201;Lng:49;Target:62;Remarks:135;P:35;Start:60;Stop:60;
import json
import eibi_tables
in_file = open("eibi.csv",errors="ignore")
result = {
    "stations" : [

    ]
}

for line in in_file:
    items = line.split(";")
    frequency = float(items[0])
    name = items[4]
    lat = 0
    lon = 0
    try:
        lat = eibi_tables.location_latlong_lookup[items[3]][0]
        lon = eibi_tables.location_latlong_lookup[items[3]][1]
    except:
        pass
    result["stations"].append({
        "name" : name,
        "frequency": frequency,
        "is_location_real" : False,
        "country": eibi_tables.location_code_lookup[items[3]],
        "power": 0,
        "notes": "",
        "location": [lat,lon]
    })
output_file = open("eibi.json","w")
output_file.write(json.dumps(result,indent=4))
output_file.close()