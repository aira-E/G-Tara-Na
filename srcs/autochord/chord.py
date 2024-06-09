from flask import Flask
import autochord

app = Flask(__name__)

@app.route('/')
def hello():
    chord = autochord.recognize('A_Major.mp3')
    return chord

if __name__ == '__main__':
    app.run(host="127.0.0.1", port=5000)