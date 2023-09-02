from flask import Flask, request, url_for, redirect, render_template 
import instaloader
app = Flask(__name__)
 
instaL = instaloader.Instaloader()
@app.route("/", methods =["POST", "GET"] )
def logInsta():
    
    if(request.method == "POST"):
        usern = request.form.get("username").strip()
        passw = request.form.get("password").strip()

        instaL.login("flask_test", "giordanobruno01")

        user = instaloader.Profile.from_username(instaL.context, "flask_test")

        followers = user.get_followers()

        # instaL.download_profile("flask_test", profile_pic_only=False)
       

        
    
        return render_template("index.html", name = followers)
    else: 
        return render_template("index.html")
# source auth/bin/activate
# export FLASK_APP=Unfollower_Instagram_Flask
# FLASK_APP="main.py"
# export FLASK_DEBUG=1
 

 
