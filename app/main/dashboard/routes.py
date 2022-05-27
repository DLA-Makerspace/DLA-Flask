from flask import Blueprint, request
from flask import current_app as app
from flask import render_template, redirect

dashboard_blueprint = Blueprint("dashboard", __name__)


""" routing """


#  force ssl:
@app.before_request
def bfr_req():
    if not request.is_secure:
        url = request.url.replace('http://', 'https://', 1)
        code = 301
        return redirect(url, code=code)


# Index Routes:
@dashboard_blueprint.route("/")
def dash_index():
    return redirect("/dashboard/home", code=302)


@dashboard_blueprint.route('/home', methods=['GET'])
def dash_home():
    return render_template('home.j2')


@dashboard_blueprint.route('/usage', methods=['GET'])
def dash_usage():
    return render_template('usage.j2')


@dashboard_blueprint.route('/docs', methods=['GET'])
def dash_docs():
    return app.send_static_file('docs.html')


""" fetch static """


@dashboard_blueprint.route("<file>", methods=["GET", "POST"])
def dash_filex(file):
    return app.send_static_file(file)
