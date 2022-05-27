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

#### How to use this repository:

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
│   ├── _config.yml # we use kramdown as our markdown renderer so we can let github render our documentation for us and still be able to escape iframes containing hyperlinks... hacky af
│   ├── Docs.md  # documentation page loaded by the "Docs" widget
│   ├── redirected_index.void  # this redirect lives at various qr endpoints around the space and web
│   └── UsageAgreement.md # usage agreement for students and clients of the space
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




Build locally:
```
# node:
npm install

# venv:
python3 -m venv dla_venv
source dla_venv/bin/activate
pip3 install -r requirements.txt

# setup:
npm run-script setup-app  # interactive setup and build
npm run-script serve-app  # interactive choose and launch WSGI
```


- - -


*Todos:*
- add webpack, tree shaking
- add stripe endpoint for purchase of non-departmental filament (ie stuff sold by Jess / IG)
