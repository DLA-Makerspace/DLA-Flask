from .main import create_app
from flask_talisman import Talisman


if __name__ == "__main__":

    app = create_app()

    # using Talisman for ssl and lax csp enforcement
    Talisman(app, content_security_policy=None)

    app.run()
