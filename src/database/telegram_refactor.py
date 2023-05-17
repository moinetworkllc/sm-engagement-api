import json

import pandas as pd

step_size = 50  # Level increased for every additional 50 messages.

df = pd.read_csv('telegram_raw_dump.csv')
df.to_json(r'telegram_raw_dump.json')

df = pd.read_json('telegram_raw_dump.json')
print(df)

msg_sum = df['MSG'].sum()

json_list = {"levels": []}
levels_data = json_list["levels"]
data = {}

for ind in df.index:
    username = df['Username'][ind]
    if username is None:
        continue
    level = (df['MSG'][ind] - 1) // (step_size) + 1
    if level > 10:
        level = 10  # Maximum level allowed is 10
    levels_data.append({"username": username[1:].strip(), "level": int(level)})

with open("telegram_db.json", "w") as outfile:
    json.dump(json_list, outfile, indent=4)
