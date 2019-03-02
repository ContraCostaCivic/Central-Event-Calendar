import requests
from bs4 import BeautifulSoup
import re
import json

links = ['https://www.eventbrite.com/d/ca--walnut-creek/events--this-month/?page=1', 'https://patch.com/california/walnutcreek']
finishedList = []

mainPage = requests.get(links[0])
soup = BeautifulSoup(mainPage.content, 'lxml') 
# print(soup.prettify()[:])

newlist = soup.find('script', {'type' : "application/ld+json"})
dataList = json.loads(newlist.get_text())  # convert JSON to python data

print(dataList)

for item in dataList:
  title = item['name']
  start = item['startDate']
  end = item['endDate']
  address = item['location']['address']['streetAddress'] + ', ' + item['location']['address']['addressLocality'] + ' ' + item['location']['address']['addressRegion']
  description = item['description']
  url = item['url']

  data = {}

  data['title'] = title
  data['start'] = start
  data['end'] = end
  data['address'] = address
  data['description'] = description
  data['url'] = url

  finishedList.append(data)

for data in finishedList:
  for k,v in data.items():
    print(k, ':', v)
  print()

with open('eventsData.json', 'w') as fh:
  json.dump(finishedList, fh, indent=3)
