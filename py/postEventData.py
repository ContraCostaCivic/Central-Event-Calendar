import json
import requests

URL = 'https://ccccalendar.appspot.com/api/events'


class ResultHandler:
    with open('eventsData.json') as f:
        events = json.load(f)
    for event in events:
        requests.post(URL, data={
            'title': event['title'],
            'start': event['start'],
            'end': event['end'],
            'details': event['description'],
            'url': event['url']
        })
