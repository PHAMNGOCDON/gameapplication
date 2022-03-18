from flask import Flask, render_template
#
app = Flask("helloapp")

@app.route("/")
def hello():
    return render_template(
        'index.html'
        )

if __name__ == '__main__':
    app.debug = True
    app.run(host ='127.0.0.1')


# from flask import Flask, request, render_template
#
# app = Flask("helloapp")
#
# @app.route('/', methods = ['GET', 'POST'])
# def hello():
#     if request.method=='POST':
#         # msg = request.form['msg']
#         return render_template(
#             'index.html',
#             )
#     else:
#         return render_template(
#             'index.html'
#
#         )
#
#
# if __name__ == '__main__':
#     app.debug = True
#     app.run(host ='127.0.0.1')
