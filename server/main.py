from flask import Flask, request, jsonify
from mltrain import *
import time
import json

app = Flask(__name__)

(models, X_test, y_test, dataset) = train()
# score(models, X_test, y_test)

@app.route("/get-detect/<address>")
def get_detect(address) :
    
    pre_time = time.time()
    (res, prob) = predict(models, dataset, address)
    post_time = time.time()
    time_used = str(post_time - pre_time) + "s"
    
    prob = str(prob) + ".0%"

    time_tuple = time.localtime(time.time())
    year = str(time_tuple.tm_year)
    mon = str(time_tuple.tm_mon)
    mday = str(time_tuple.tm_mday)
    hour = str(time_tuple.tm_hour)
    min = str(time_tuple.tm_min)
    finished_time = year + "." + mon + "." + mday + "  " + hour + ":" + min

    detect_data = {
        "CB": str(res[0]),
        "DT": str(res[1]),
        "RF": str(res[2]),
        "XGB": str(res[3]),
        "LGBM": str(res[4]),
        "prob": prob,
        "finished_time": finished_time,
        "time_used": time_used,
        "detected_address": address
    }
    
    extra = request.args.get("extra")
    if extra:
        detect_data["extra"] = extra
    
    return jsonify(detect_data), 200

if __name__ == "__main__" :
    app.run(debug = True)