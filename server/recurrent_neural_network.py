import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from sklearn.externals import joblib
from keras.models import Sequential
from keras.layers import Dense
from keras.layers import LSTM
from keras.layers import Dropout
from keras.models import load_model

def generate_model(stock_code):
    # ------ Data Preprocessing ------
    filename = "training_data_" + stock_code + ".csv"
    dataset_train = pd.read_csv(filename)
    training_set = dataset_train.iloc[:, 4:5].values
    
    # Feature Scaling

    sc = MinMaxScaler(feature_range = (0, 1))
    training_set_scaled = sc.fit_transform(training_set)
    
    scaler_filename = stock_code + ".scaler"
    joblib.dump(sc, scaler_filename)
    
    # Creating a data structure with 60 timesteps and 1 output
    x_train = []
    y_train = []
    for i in range(60, len(dataset_train)):
        x_train.append(training_set_scaled[i-60:i, 0])
        y_train.append(training_set_scaled[i, 0])
    x_train, y_train = np.array(x_train), np.array(y_train)
    
    # Reshaping
    x_train = np.reshape(x_train, (x_train.shape[0], x_train.shape[1], 1))
    
    # ----- Building RNN -----    
    regressor = Sequential()
    
    # Add LSTM layers and Droppout regularisation
    regressor.add(LSTM(units = 50, return_sequences = True, input_shape = (x_train.shape[1], 1)))
    regressor.add(Dropout(0.2))
    regressor.add(LSTM(units = 50, return_sequences = True))
    regressor.add(Dropout(0.2))
    regressor.add(LSTM(units = 50, return_sequences = True))
    regressor.add(Dropout(0.2))
    regressor.add(LSTM(units = 50))
    regressor.add(Dropout(0.2))
    
    # Add output layer
    regressor.add(Dense(units = 1))
    
    regressor.compile(optimizer = 'adam', loss = 'mean_squared_error')
    regressor.fit(x_train, y_train, epochs = 100, batch_size = 32)
    regressor.save("./" + stock_code + ".model")
    
def predict(stock_code):
    scaler_filename = stock_code + ".scaler"
    sc = joblib.load(scaler_filename) 
    
    regressor = load_model("./" + stock_code + ".model")
    dataset_test = pd.read_csv("test_data_" + stock_code + ".csv")

    dataset_total = dataset_test['close']
    inputs = dataset_total[len(dataset_total) - 60:].values
    inputs = inputs.reshape(-1, +1)
    inputs = sc.transform(inputs)

    X_test = []
    X_test.append(inputs[0:60, 0])
    X_test = np.array(X_test)
    X_test = np.reshape(X_test, (X_test.shape[0], X_test.shape[1], 1))

    predicted_stock_price = regressor.predict(X_test)
    predicted_stock_price = sc.inverse_transform(predicted_stock_price)
    return predicted_stock_price
