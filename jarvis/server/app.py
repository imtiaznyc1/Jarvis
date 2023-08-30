from flask import Flask

app = Flask(__name__)

@app.route('/login')
def login():
    return "logged in user"

if __name__ == "__main__":
    app.run()