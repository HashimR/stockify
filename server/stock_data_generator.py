# Import test data for stock

import requests
import csv
import datetime
from pytz import timezone

baseURL = "https://api.iextrading.com/1.0/stock/"

def generate_data(filename, stock_code, timeframe):
    response = requests.get(baseURL + stock_code + "/chart/" + timeframe)
    data = response.json()
    with open(filename, 'w') as csvfile:
        fieldnames = ['date', 'open', 'high', 'low', 'close', 'volume', 'unadjustedVolume', 'change', 'changePercent', 'vwap', 'label', 'changeOverTime']
        writer = csv.DictWriter(csvfile, fieldnames)
        writer.writeheader()
        writer.writerows(data)
    
def generate_training_data(stock_code):
    filename = "training_data_" + stock_code + ".csv"
    generate_data(filename, stock_code, "5y")

def generate_test_data(stock_code):
    filename = "test_data_" + stock_code + ".csv"
    generate_data(filename, stock_code, "3m")