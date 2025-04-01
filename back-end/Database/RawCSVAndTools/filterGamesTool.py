# Tool used to filter out games that don't meet requirements
import csv

readFile = "steam_games.csv"
writeFile = "filter_steam_games.csv"

fields = []
rows = []

with open(readFile, "r") as csvfile:
    csvreader = csv.reader(csvfile)

    fields = next(csvreader)

    for row in csvreader:
        
        if (
            len(row[1]) <= 254 and 
            len(row[6]) <= 254 and 
            len(row[7]) <= 254 and 
            len(row[8]) <= 254 and
            len(row[1]) != 0
            ):
            rows.append(row)

with open(writeFile, "w") as csvFile:
    csvwriter = csv.writer(csvFile)

    csvwriter.writerow(fields)
    
    csvwriter.writerows(rows)