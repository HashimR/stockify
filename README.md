# Stockify

An application that predicts tomorrow's opening stock price.

## Instructions

Clone repository and run:
```
$ python server/server.py
```
Then start client:
```
$ yarn start
```

## Server
Recurrent Neural Network uses the open stock prices for the last 60 days to predict tomorrow's opening price.

To add and train a new stock model:
```python
import stock_data_generator as sdg
import recurrent_neural_network as rnn

sdg.generate_training_data("Stock Symbol")
rnn.generate_model("Stock Symbol")
```

To predict using an existing model:
```python
import recurrent_neural_network as rnn

rnn.predict("Stock Symbol")
```

API powered by: [IEX Trading](https://iextrading.com)