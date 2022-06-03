import os
from flask import request, flash, redirect, render_template


class Dashboard(object):

    @staticmethod
    def render_doc(url):
        url += 'index.html'
        return render_template(url)

    @staticmethod
    def uploader(usrpath):
        if request.method == 'POST':
            if 'file' not in request.files:
                flash('No file')
                return redirect(request.url)
            file = request.files['file']
            if file.filename == '':
                flash('No selected file')
                return redirect(request.url)
            if file:
                f = request.files['file']
                f.save(os.path.join(usrpath, f.filename))
