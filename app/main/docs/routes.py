from flask import Blueprint
from flask import current_app as app
from flask import render_template

docs_blueprint = Blueprint("docs", __name__)


""" routing """


# Index Routes:
@docs_blueprint.route("/")
def docs_index():
    return render_template("static/docs.html")


# Index Routes:
@docs_blueprint.route("/usage")
def docs_usage():
    return render_template("static/usage.html")


""" fetch static """


@docs_blueprint.route("<file>", methods=["GET", "POST"])
def docs_filex(file):
    return app.send_static_file(file)
