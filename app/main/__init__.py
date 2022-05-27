from flask import Flask, redirect, request
import os
from .util.trashd import Trash

# Import Routes
from .dashboard.routes import dashboard_blueprint


def create_app():

    # Flask Config
    app = Flask(__name__)

    app.config.from_pyfile("config/config.cfg")

    # set template & static paths:

    # this is where jinja templates live:
    app.template_folder = "../../pub/"

    # this is where manifest and css live:
    app.static_folder = "../../pub/static/"

    # upload --> classify config
    app.config['UPLOAD_EXTENSIONS'] = ['.mp3', '.wav', '.WAV', '.wave', '.WAVE']
    app.config['UPLOAD_PATH'] = 'demos'

    # misc Config
    os.environ["TZ"] = app.config["TIMEZONE"]

    # Register Blueprints
    app.register_blueprint(dashboard_blueprint, url_prefix="/dashboard")

    # start garbage collection daemon:
    Trash.truck()

    # fetch static at the root of the application:
    @app.route("/<f>/", methods=["GET"])
    def appclcfx(f):
        print(f)
        return app.send_static_file(f)

    @app.before_request
    def bfr_req():
        if not request.is_secure:
            url = request.url.replace('http://', 'https://', 1)
            code = 302
            return redirect(url, code=code)

    # Index Routes:
    @app.route("/")
    def index():
        if request.is_secure:
            return redirect("/dashboard/home", code=302)

    return app
