from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Simularemos una "base de datos" temporal en memoria
usuarios = {}

@app.route('/', methods=['GET', 'POST'])
def home():
    mensaje = ""
    if request.method == 'POST':
        accion = request.form['accion']

        if accion == 'login':
            usuario = request.form['usuario']
            clave = request.form['clave']
            if usuario in usuarios and usuarios[usuario] == clave:
                mensaje = f"Bienvenido, {usuario}!"
            else:
                mensaje = "Usuario o contraseña incorrectos"

        elif accion == 'registro':
            nuevo_usuario = request.form['nuevo_usuario']
            nueva_clave = request.form['nueva_clave']
            if nuevo_usuario in usuarios:
                mensaje = "El usuario ya existe"
            else:
                usuarios[nuevo_usuario] = nueva_clave
                mensaje = "Usuario registrado con éxito"

    return render_template('index.html', mensaje=mensaje)

if __name__ == '__main__':
    app.run(debug=True)
