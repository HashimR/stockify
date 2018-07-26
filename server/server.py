import flask
from flask_cors import CORS
import io
import stock_data_generator as sdg
import recurrent_neural_network as rnn

app = flask.Flask(__name__)
model = None
CORS(app)

@app.route("/predict", methods=["GET"])
def predict():
    data = {"success": False}
    request = flask.request
    
    if request.method == "GET":
        stock = request.args.get('stock')
        if stock:
            sdg.generate_test_data(stock)
            print("Generated stock")
            data = rnn.predict(stock)[0][0]
            formatted_price = ("%.2f" % data)
            print("Predicted")
    return flask.jsonify(price = formatted_price)

if __name__ == "__main__":
    print(("* Loading Keras model and starting server..."))
    app.run()