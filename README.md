Web dashboard written for the Department of Landscape Architecture Makerspace at Cornell, located on the fourth floor or Kennedy Hall in Ithaca, NY.  Pull requests are welcome and encouraged!  


- - -



#### The purpose of and inspiration for this project includes:
- Promote remote-first resources for students  
- Provide easy access to:
  - The space's staffing calendar
  - General DLA makerspace information & usage agreement
  - Jess when she is not on-site
  - Technical documentation
  - Livestream of active 3d prints (when active)
  - Discord ticketing system & discussion forum



 - - -



### Local setup:
```
## node:
npm install

## venv:
python3 -m venv dla_venv
source dla_venv/bin/activate
pip3 install -r requirements.txt

## setup:
npm run-script setup-app  # interactive setup and build

## (re)generate documentation:
npm run-script generate-docs  # you will need Ruby and the Kramdown superset CLI installed

## serve:
npm run-script serve-app  # interactive choose and launch WSGI (Waitress or Werkzeug)

## visit locally at:
# 127.0.0.1:8080 

## (re)transpile typescript source:
npm run-script dev-flex-card-animate

## cleanup:
npm run-script clean

```


### How to use this repository:

```console
.
├── app
│   ├── __init__.py
│   ├── main
│   │   ├── config
│   │   │   ├── config.cfg # config file is populated during setup-app script
│   │   │   └── config.cfg.sample
│   │   ├── dashboard
│   │   │   ├── __init__.py
│   │   │   └── routes.py  # all dashboard routes and endpoints live in here
│   │   ├── __init__.py
│   │   └── util
│   │       ├── config.py # misc server configurations, timouts, serverside user directory routes
│   │       └── trashd.py # serverside garbage collector
├── application.py #  main entry point; factory pattern
├── docs  # all live documentation lives here;
│   ├── _config.yml # used to support github pages and keep our kramdown url new tab escapes
│   ├── docs.md  # documentation page loaded by the "Docs" widget
│   ├── redirected_index.void  # this redirect lives at various qr endpoints around the space and web
│   └── usage.md # usage agreement for students and clients of the space
├── LICENSE
├── package.json  
├── Procfile  # deploys to heroku on main
├── pub
│   ├── *.j2  # Jinja2 view templates
│   └── static
│   │   ├── *favicons*
│   │   ├── *webmanifest*
│   │   └── style.css  # stylesheet lives here
├── README.md # you are here
├── requirements.txt
├── scripts # scripts called from package.json live here
│   ├── cleanup.sh
│   ├── serve_app.sh
│   └── setup_app.sh
├── src # typescript source lives here
│   └── flex_card_animate.ts
└── tsconfig.json # typescript rules live here
```
