from app import app
from flask import jsonify

@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"

@app.route('/ping', methods=['GET'])
def ping():
    return jsonify({
        'status': 'success',
        'message': 'pong'
    })