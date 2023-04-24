import json

import requests

print("### SM ENGAGEMENT API ###")
print("Downloading MEE6 Leaderboard data ...")
r = requests.get('https://mee6.xyz/api/plugins/levels/leaderboard/498831893018574858?limit=1000')

json_list = {"levels": []}
levels_data = json_list["levels"]
data = {}

if r.status_code == 200:
    print("Download successful!")
    res_data = r.json()
    members = res_data["players"]

    print("Parsing the downloaded data into desired form ...")
    for member in members:
        levels_data.append({"username": member["username"], "level": member["level"]})

    print("Here's the parsed data! :\n")
    print(json_list)

    print("Writing the parsed data to discord_db.json ...")
    with open("discord_db.json", "w") as outfile:
        json.dump(json_list, outfile, indent=4)
