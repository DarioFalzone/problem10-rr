# WEEK 14
La problemática de la semana 14 consiste en crear test automatizados para los formularios creados por ustedes en la problemática de la semana 10 y 11. En este caso no hay un % de cobertura definido, pero deberán crear al menos 2 test para cada sección del formulario.

----------------------------------------------------------

# IN COURSE:
	# ⚠️⚠️
		# ALL CLEAN
	# ⚠️⚠️

----------------------------------------------------------

✅ Changelog:

	# Fix 0.0.3:
	✔ Se implementa sistema de page object para poder reutilizar codigo
	✔ Se implementas mas casos de test para probar mas elementos

	# Fix 0.0.2:
	✔ Se agregan un total de tres validaciones a cada formulario con codigo no optimizado

	# Fix 0.0.1:
	✔ Validaciones correspondiente a la semana 10 funcionando

----------------------------------------------------------

📄 INFORMACION UTIL

- ✔ Login Page: (https://dariofalzone.github.io/problem10-rr/)
- ✔ Register Page: (https://dariofalzone.github.io/problem10-rr/register.html)

- ⚠️El back de la problematicá esta alojado en el repositorio de la Semana 11:
#	→→ (https://github.com/DarioFalzone/app-11)

----------------------------------------------------------

# Pasos a seguir para ejecutar los tests
	1 - Descargar repositorio
	2 - Ejecutar consola en carpeta
	3 - Tener instalado WDio y sus dependencias
	4 - npm run test
	5 - Se ejecutaran de manera automatica los test configurados por cada página

⊛ Formulario LOGEO validaciones:

		→ INPUT EMAIL
			- No nulo ✓
			- No puede estar vacio ✓
			- Debe respetar el formato email@email.com ✓

		→ INPUT PASSWORD
			- No nulo ✓
			- No puede estar vacio ✓
			- Menor a 8 caracteres ✓
			- Debe contener un numero minimamente ✓

⊛ Formulario REGISTRO validaciones:

		→ INPUT NAME
			- No nulo ✓
			- No puede estar vacio ✓
			- El valor ingresado debe ser menor a 6 caracteres ✓

		→ INPUT EMAIL
			- No nulo ✓
			- No puede estar vacio ✓
			- Debe respetar el formato email@email.com ✓

		→ INPUT PASSWORD
			- No nulo ✓
			- No puede estar vacio ✓
			- Menor a 8 caracteres ✓
			- Debe contener un numero minimamente ✓

		→ INPUT REPETIR PASSWORD

----------------------------------------------------------

# Test realizados con WDio ⬇⬇⬇
	⊛ Formulario LOGEO
		- Se verificá el titulo de la pagina de manera correcta
		- Se verifica que la url ingresada sea la correcta
		- Se ingresa informacion correcta a los campos, se presiona click en el boton "login", pass ok

	⊛ Formulario REGISTRO
		- Se verificá el titulo de la pagina de manera correcta
		- Se verifica que la url ingresada sea la correcta
		- Se ingresa informacion correcta a los campos, se presiona click en el boton "register", pass ok

----------------------------------------------------------

# Pasos a seguir para resolver la problematica:
	1) Dentro del repositorio de la semana 11 (o el más actual) que tengan realizado su formulario,instalar y configurar webdriverIO.
	2) Borrar todos los archivos innecesarios de WebdriverIO y organizar la estructura de carpetas correctamente.
	3) Crear todos los test que sean necesarios para lograr cumplir con el objetivo de la
	problemática.
	4) Los test deben estar correctamente ordenados en describe según secciones.
	5) Deben pasar todos correctamente y deben usar todas las herramientas explicadas (Page
	Objet).
	6) Además los selectores deben ser lo más exactos posibles (no usar el copy selector del inspect).

----------------------------------------------------------

# WEEK 10
# Descripción del problema a resolver
La problemática de la semana 10 consiste en tomar los formularios realizados en la problemática de la semana 09 y trabajar sobre ellos. Deberán introducir validaciones que se ejecutarán ante eventos. Cada campo tendrá una serie de condiciones que serán validadas. Por último, una vez que los campos del formulario sean válidos se deberá realizar el envío de datos ingresados a través de HTTP a una página ficticia.

# Validaciones:
1) Login form:
	a) Email: debe tener un formato de email válido.
	b) Password: Al menos 8 caracteres, formados por letras y números.
2) Register form:
	a) Full name: Debe tener más de 6 letras y al menos un espacio entre medio.
	b) Email: debe tener un formato de email válido.
	c) Password: Al menos 8 caracteres, formados por letras y números.
	d) Confirm password: debe ser igual al contenido del input Password.

La validación de cada campo se debe realizar en el evento “blur” de cada uno de los campos.

Además, si algún campo tiene un error de validación, en el evento “focus” de dicho campo debe desaparecer el mensaje porque se asume que el usuario está corrigiendo el error.

Al presionar el botón “Registrarse” o “Iniciar sesión”, se debe mostrar debajo del formulario dentro del div utilizado para mostrar los errores en la clase pasada, los valores ingresados en el formulario.

# PASOS:
	1) Continuando con los formularios de la semana 09, crear nuevos archivos javascript para las validaciones de los mismos.
	2) Agregar el código JavaScript necesario para capturar el evento “blur” de cada campo, validar el contenido y mostrar el mensaje de error correspondiente.
	3) Agregar el código JavaScript necesario para capturar el evento “focus” de cada campo y ocultar el mensaje de error si es que había uno.
	4) Agregar el código JavaScript necesario para mostrar los valores debajo del formularios y  realizar una HTTP Request  a través del método GET a la siguiente URL: https://jsonplaceholder.typicode.com/users?email=randomEmail@gmail.com, para enviar el valor del email del usuario a los Queryparam de la URL,  al presionar el botón “Registrarse” o “Iniciar sesión”.

----------------------------------------------------------

## Authors ✒️

* [Dario Falzone](https://www.linkedin.com/in/darioflz/)

## Gratitude 🎁

* Many thanks to the RadiumRocket team for the opportunity to be a part. 🤓
