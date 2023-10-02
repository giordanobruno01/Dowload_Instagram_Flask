from flask import Flask, request, url_for, redirect, render_template, send_file, flash 
import instaloader, shutil, os
app = Flask(__name__)   
app.secret_key = "hellome"  
  
instaL = instaloader.Instaloader()
def deletezip(): 
    try:
        for i in os.listdir("."):
            if i.endswith(".zip"):
                os.remove(i)
    except:
        pass

@app.route("/", methods =["POST", "GET"] )
def logInsta():
    
    if(request.method == "POST"):
        try:
            usern = request.form.get("username").strip()
            # passw = request.form.get("password").strip()
        except:
            
            return render_template("index.html", name = "Provide a username")
        
        opt = request.form.get("opt")
        deletezip()
        try:
            if(opt =="stories"):
                # instaL.login(user = usern, passwd=passw)
                # instaL.download_stories(userids = [instaL.check_profile_id(usern)])
                instaL.download_storyitem()
            elif(opt =="profile"):
                instaL.download_profile(usern, profile_pic_only=False, download_stories=True)
            elif(opt=="reels"):
                instaL.download_videos()
                  
            elif(opt=="hashtag"):
                instaL.download_hashtag()
                
            elif(opt=="highlights"):
                instaL.download_highlights()
                
            elif(opt=="post"):
                instaL.download_post()
                
            elif(opt=="pictures"):
                instaL.download_pictures
                
            elif(opt=="igtv"):
                instaL.download_igtv()
                
        except:
            try:
                shutil.rmtree(usern)
            except:
                pass
            return render_template("index.html", name = str(usern + " is a private account"))
        shutil.make_archive(base_name=usern, format="zip", root_dir=usern)
        try:
            shutil.rmtree(usern)
        except:
            pass

        # instaL.download_feed_posts(max_count=2)

        return send_file(str(usern+".zip"),as_attachment=True)
    else: 
        return render_template("index.html")
    
# source auth/bin/activate
# export FLASK_APP=Unfollower_Instagram_Flask
# FLASK_APP="main.py"
# export FLASK_DEBUG=1
 

 
