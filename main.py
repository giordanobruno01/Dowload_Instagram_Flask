from flask import Flask, request, url_for, redirect, render_template 
import instaloader
app = Flask(__name__)

instaL = instaloader.Instaloader()
@app.route("/", methods =["POST, GET"] )
def logInsta():
    user = instaL.login(request.form.get("username"), request.form.get("password"))
    return render_template("index.html")
if(__name__ == "__main__"):
    app.run(debug=True)
# export FLASK_APP=Unfollower_Instagram_Flask
# export FLASK_DEBUG=1
# FLASK_APP="main.py"

