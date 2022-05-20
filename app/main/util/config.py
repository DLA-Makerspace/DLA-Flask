import os
import time
import secrets

# set `devel = False` for deployment
devel = False
devport = 5000
devhost = '127.0.0.1'
verbose = False

# where user file uploads go, on a per-user basis:
user_upload_dir = 'pub/uploads'

# rendered html extension:
ext = '_render.html'
static = "./demos/"

# default html chunks:
header = static + 'templates/header.html'
footer = static + 'templates/footer.html'

# uploaded files are placed in temporary server-side directories:
live_app_list = {}
start_time = time.time()

# how often should the garbage collector remove old directories?
collection_int = 30  # secs
collection_trash = 30  # secs

# recyclable serverside directories-

# serverside paths:
rootpath = os.path.abspath(os.curdir)

# temporary user directories go in here:
inpath = os.path.join(rootpath, user_upload_dir)
outpath = os.path.join(rootpath, 'downloads')

## file uploads:

# placeholders for usr hash:
usr_id = ''


def new_client():
    return secrets.token_hex(15)


def new_client_dir(usrid):
    usr_dir = os.path.join(inpath, usrid)

    # make user a temporary directory:
    try:
        os.mkdir(usr_dir)
    except:
        pass

    return usr_dir


def vprint(text):
    if verbose:
        print(text)
