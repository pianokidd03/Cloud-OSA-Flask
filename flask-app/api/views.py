from flask import Blueprint
import requests
import time
import json

main = Blueprint('main', __name__)
url = 'http://flaskosa.herokuapp.com/'


@main.route('/instrument_reading')
def instrument_reading():
    try:
        res = requests.get(url+'cmd/TRACE').json()
    except:
        dict = {
            "instrumentError": str(requests.get(url+'cmd/TRACE').text()),
            "xdata": [-1],
            "ydata": [-1]
        }

        res = json.dumps(dict)

    return res


@main.route('/start')
def start():
    headers = {'Accept-Encoding': 'identity'}
    res = requests.get(url+'cmd/START', headers=headers).content
    return str(res)
