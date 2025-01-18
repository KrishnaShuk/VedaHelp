from flask import Flask, request, jsonify
from face import some_function_from_face
from eyes import some_function_from_eyes
from nail_colour import some_function_from_nail_colour
from nail_shape import some_function_from_nail_shape

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the ML API!"

@app.route('/process-face', methods=['POST'])
def process_face():
    data = request.json
    result = some_function_from_face(data)
    return jsonify({'result': result})

@app.route('/process-eyes', methods=['POST'])
def process_eyes():
    data = request.json
    result = some_function_from_eyes(data)
    return jsonify({'result': result})

@app.route('/process-nail-color', methods=['POST'])
def process_nail_color():
    data = request.json
    result = some_function_from_nail_colour(data)
    return jsonify({'result': result})

@app.route('/process-nail-shape', methods=['POST'])
def process_nail_shape():
    data = request.json
    result = some_function_from_nail_shape(data)
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)