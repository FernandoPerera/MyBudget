## **~ UD2 MyBudget ~**

<br/>

#### **- | Introducción al proyecto |**

<br/>

Tenemos que desarrollar una aplicación de transacciones que conste de :

- Se introduzcan 3 datos : 
- - Transacción, fecha y descripción.

<br/>

- Se muestre la última transacción realizada.

<br/>

- Haya una opción que permita visualizar al usuario una lista con cada una de las transacciones realizadas y con sus datos correspondientes.

<br/>

- Que cada transacción pueda ser eliminada o modificada por el usuario

<br/>

#### **- | Gestión de ramas |**

<br>

Creo la rama **development** donde iremos añadiendo las nuevas funcionalidades creadas en las ramas **introduceMovement** y **movementList**, para finalmente mergearlo todo al **main**.

<br/>

#### **- | Desarrollo de las ramas |**

<br/>

> main

- Mergeamos el código y la documentación finalizada desde **<code>development</code>** para pushearlo al origin.

<br/>

> development

<br/>

- Mergeamos el código con la funcionalidad añadida desde las ramas **<code>introduceMovement</code>** y **<code>movementList</code>**, y realizamos la documentación por medio de un **<code>Readme.md</code>**.

<br/>

> introduceMovement

<br/>

- En esta rama realizaremos la funcionalidad de que el usuario pueda añadir datos y que estos se reciban correctamente.
Para ello creamos el componente **<code>MovementInput.jsx</code>** donde usamos un **<code>useState</code>**, el que inicializaremos con un objeto con unas propiedades inicializadas de la siguiente manera:

- - <code>const [movement, setMovement] = useState( <br/>
    movement: 0, <br/>
    date: new Date(Date.now()), <br/>
    description: '' <br/>
  } )</code> 

<br/>

- También realizaremos dos **<code>TextInput</code>** a los que les asignaremos el value del **<code>useState</code>** que le corresponda a cada uno.

- Para el dato <code>date</code> decidí realizarlo con un **<code>DateTimePickerModal</code>** con dos funciones para mostrarlo y dejar de mostrarlo, para una mejor visualización y uso del usuario.
Para ello tuve que instalar la librería e importarla : 

- - <code>npm install react-native-modal-datetime-picker</code>
- - <code>import DateTimePickerModal from "react-native-modal-datetime-picker"</code>

<br/>

- Luego de esto recogía todos los datos al presionar un **<code>Pressable</code>**, lo que llama a la función **<code>addMovementHandler</code>** de este componente, en la que después de un control de errores manda los datos al componente **<code>App.js</code>** por medio de una función que recibe los datos y los va añadiendo a un array por medio de un **<code>useState</code>**.

<br/>

> MovementList

<br/>

- En esta rama desarrollaremos la función de mostrar una lista de todas las transacciones realizadas con sus datos correspondientes, y que cada una se pueda eliminar y modificar.

- Para ello, primero usamos un **<code>useState</code>** inicializado en false en el que controlaremos la visualización de un **<code>Modal</code>** el cual mostrará el componente  **<code>MovementList.jsx</code>**. Para esto colocaremos un **<code>Pressable</code>** en el componente **<code>App.js</code>** que al presionarlo cambiará el estado del **<code>Modal</code>** a true.

- Al componente **<code>MovementList.jsx</code>** le pasaremos el estado del array de objetos, y tres funciones :

<br/>

- - <code>changeVisibilityOfModal</code> => Será una función que será llamada en un         <code>Pressable</code> para cambiar el estado del <code>Modal</code> y volver a la pantalla principal.

- - <code>deleteMovement</code> => Se llamará esta función para borrar una transacción de la lista, recibiendo como parámetro el id de la transacción.

- - <code>modifyMovement</code> => Se llamará esta función para modificar una transacción de la lista, recibiendo como parámetro el id de la transacción y los nuevos datos.

<br/>

- Dentro del componente **<code>MovementList.jsx</code>** realizaremos los estilos de la lista y aplicaremos un **<code>FlatList</code>** al cual le asignaremos el estado del array de objetos y realizaremos una desectructuración de el estado, para pasarle los datos al componente **<code>Transaction.jsx</code>** y las funciones antes mencionadas, siendo este el encargado en representar cada transacción.

- En el componente **<code>Transaction.jsx</code>** diseñaremos como se verá cada transacción visualmente además de usar dos **<code>Pressable</code>** para llamar a las funciones de borrar y modificar transacción.

- Para la función de modificar transacción, decidí crear el componente **<code>EditMovement.jsx</code>** que se encontrará en un **<code>Modal</code>**, controlado por un **<code>useState</code>** inicializado a false.
El componente **<code>EditMovement.jsx</code>** recibirá el estado del modal, el id de la transacción y la función **<code>modifyMovement</code>**.
Coloqué dos **<code>TextInput</code>**, uno para el movimiento y otro para la descripción, y dos **<code>Pressable</code>**, uno para cancelar y salir del modal y otro para confirmar la modificación.

<br/>

#### **- | Desarrollo de las ramas |**

<br/>

En mi opinión ha sido una muy buena práctica en la que nos dan libertad de realizar el diseño de la aplicación, y en el que ponemos en práctica el control de datos y funciones entre componente además de usar cosas nuevas como **<code>FlatList</code>** o la librería **<code>DateTimePickerModal</code>**.
