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
    if(is_trading_hours):
        write_today_open(stock_code, filename)

def write_today_open(stock_code, filename):
    response = requests.get("https://api.iextrading.com/1.0/stock/" + stock_code + "/ohlc")
    data = response.json()
    price = data['open']['price']
    date = datetime.datetime.now()
    date = date.strftime('%Y-%m-%d')
    with open(filename, 'a') as csvfile:
        fieldnames = ['date', 'open', 'high', 'low', 'close', 'volume', 'unadjustedVolume', 'change', 'changePercent', 'vwap', 'label', 'changeOverTime']
        open_writer = csv.DictWriter(csvfile, fieldnames)
        open_writer.writerow({'date': date, 'open': price})
    
def generate_training_data(stock_code):
    filename = "training_data_" + stock_code + ".csv"
    generate_data(filename, stock_code, "5y")

def generate_test_data(stock_code):
    filename = "test_data_" + stock_code + ".csv"
    generate_data(filename, stock_code, "3m")

def is_trading_hours():
    tz = timezone('EST')
    return datetime.time(9, 30) < datetime.datetime.time(datetime.datetime.now(tz)) < datetime.time(16, 30)