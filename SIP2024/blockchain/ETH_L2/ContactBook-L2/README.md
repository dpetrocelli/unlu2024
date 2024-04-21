# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```

# ContactBook

An address book where users can stores contacts of different people.

- Users can add names and wallet address of different people.
- Users can also remove names and wallet address of different people.
- Users can get names and wallet address of different people.

It helps users to store contacts of different people like a telephone directory.

## Demo Image

![Demo-Image](./demo-img.png)

## Contributions to this repo are WELCOME ⚡👋

- :art: Any improvements to the design and UI are welcome.
- :hammer: try to break the website by testing it to find any bugs. If you find any, check if there is an issue already open for it, if there is none, then report it.

## Tools, Languages and Frameworks used

- React JS
- Ether JS

## Steps to be followed in order to make valid contributions to this repo 🍀

**1.** Fork the [contactbook](https://github.com/mrinnnmoy/contactbook) repo by clicking on the fork button on the top of the page. This will create a copy of this repository in your account.

**2.** Clone the forked repository

        git clone "https://github.com/<your-github-username>/contactbook"

- Download and install Node JS v16.16.0
- Download and install Git.
- Go to the terminal of your code editor and run "npm install" to download packages.
- Run "npm run dev" to start a local server.

**3.** Make necessary changes and commit those changes. <br />
Remember never push anything to the Main branch. <br />

Always change your branch to "develop" using:

    git checkout develop

Again check your current branch using:

    git branch

It should point \*develop

Now add your changes using:

    git add files-you-edited

If there are multiple files you can use:

    git add .

Now create a commit message using:

    git commit -m "<commit-message-goes-here>"

**4.** Push changes to GitHub

    git push origin develop

**5.** Create a Pull Request 👋<br>

Now you go to your repository on GitHub, you’ll see a `Compare & pull request` button. Click on that button and now write a summary of what changes you have done.( Attach images if required). I will review your code and merge it if it passes all the tests.❤️

"dependencies": {
"ethers": "^5.6.1",

    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.11.0"

},
"devDependencies": {
"@types/react": "^18.2.15",
"@types/react-dom": "^18.2.7",
"@vitejs/plugin-react": "^4.0.3",
"eslint": "^8.45.0",
"eslint-plugin-react": "^7.32.2",
"eslint-plugin-react-hooks": "^4.6.0",
"eslint-plugin-react-refresh": "^0.4.3",
"vite": "^4.4.5"
}

# "Eliminación" de registros

El contrato inteligente en Solidity maneja operaciones de agregar y eliminar contactos.
Sin embargo, la funcionalidad de eliminar contactos, a pesar de la inmutabilidad inherente de la blockchain, se implementa modificando el estado del contrato para reflejar los cambios, pero sin borrar realmente los datos de la blockchain. Vamos a desglosar cómo funciona esto:

1. Agregar Contactos
   El método addContact simplemente añade un nuevo contacto al final de la matriz contacts. Esta operación es sencilla y directa.

2. Eliminar Contactos
   El método removeContact es más interesante en el contexto de la eliminación de datos en blockchain:

- Verificación de Índice: Primero, verifica que el índice proporcionado esté dentro de los límites de la matriz. Esto evita errores de acceso a memoria.
  Desplazamiento de Elementos: Luego, desplaza todos los contactos después del índice hacia arriba para llenar el espacio del contacto que se desea eliminar. Esto efectivamente "borra" el contacto del lugar original, pero como mencionaste, la data original sigue estando en algún lugar del historial de la blockchain.
  Eliminar el Último Elemento: Finalmente, elimina el último elemento de la matriz con pop(), que reduce el tamaño de la matriz por uno. Este paso es crucial para no dejar un elemento duplicado al final de la matriz después del desplazamiento. 3. Visualización de Contactos
  La función getContacts permite a cualquier persona recuperar la lista completa de contactos como está actualmente almacenada en el estado del contrato. Esto refleja cualquier adición o eliminación que haya sido hecha.

Consideraciones de Inmutabilidad
Aunque las operaciones "eliminan" contactos de la perspectiva de la aplicación, técnicamente la información puede permanecer en la blockchain en algún estado anterior:

Historial de Transacciones: Cada transacción que modifica el estado del contrato es registrada permanentemente en la blockchain. Esto significa que si alguien examina el historial de transacciones del contrato, puede ver los estados anteriores antes de que se realizaran las eliminaciones.
Costo de Gas y Optimización: Cada operación que modifica el estado del contrato (como añadir o eliminar contactos) cuesta gas. El método de desplazamiento de elementos es efectivo pero puede volverse costoso si la lista es grande, porque cada movimiento de un elemento consume más gas.
Conclusiones
En resumen, la funcionalidad de tu contrato permite "eliminar" contactos en términos de la lógica de la aplicación, pero en el contexto de blockchain, "eliminar" realmente significa reorganizar o invalidar los datos sin remover físicamente esos datos del historial almacenado. Esto está en línea con la naturaleza inmutable de la blockchain, donde los cambios son registrados pero los datos antiguos permanecen accesibles de alguna forma.

Utilizar blockchain para una aplicación como una agenda de contactos puede parecer poco convencional al principio, dado que las características más destacadas de la blockchain incluyen inmutabilidad, transparencia y descentralización, que no siempre son necesarias para aplicaciones simples de gestión de datos. Sin embargo, hay varios motivos y escenarios donde emplear blockchain puede aportar beneficios significativos, especialmente en contextos donde la seguridad, la verificación y la trazabilidad son importantes.

1. Descentralización
   Uno de los principales beneficios de utilizar blockchain es la descentralización. Al almacenar datos en la blockchain:

Resistencia a la Censura y Control: Los datos no están bajo el control de una sola entidad, lo que puede ser crucial en escenarios donde la libertad de información es fundamental.
Resiliencia a Fallas: Al no depender de un único servidor o proveedor, la información es más resistente a fallos técnicos o ataques dirigidos. 2. Seguridad y Trazabilidad
Inmutabilidad: Una vez que se añade un contacto a la blockchain, el registro no puede ser alterado sin dejar huella. Esto puede ser útil en entornos donde se necesita validar la integridad y el origen de los datos.
Auditoría: Cada transacción en la blockchain es registrada y verificable. Esto permite un seguimiento detallado de cuándo se añadió o modificó un contacto y por quién, ofreciendo un claro historial de auditoría. 3. Interoperabilidad y Compartición Segura
Smart Contracts: Los contratos inteligentes pueden ser utilizados para gestionar permisos y acceso a los datos de manera automatizada y segura entre múltiples partes.
APIs de Blockchain: Otras aplicaciones y servicios pueden interactuar con tus datos de manera segura y confiable, utilizando las APIs estándar de blockchain. 4. Cumplimiento de Regulaciones y Contratos
Automatización de Cumplimiento: En sectores regulados, como finanzas o salud, los smart contracts pueden automatizar y garantizar el cumplimiento de normativas al manejar datos sensibles.
Contratos y Acuerdos Legales: Los datos en la blockchain pueden servir como prueba verificable de acuerdos o transacciones, teniendo potencial validez legal en algunos contextos. 5. Innovación y Exploración de Nuevas Tecnologías
Aprendizaje y Desarrollo: Implementar una aplicación en blockchain puede ser un ejercicio valioso para entender mejor la tecnología y sus aplicaciones prácticas.
Preparación para el Futuro: A medida que la tecnología blockchain evoluciona y se integra más en sistemas empresariales y gubernamentales, tener experiencia y sistemas ya desarrollados en esta tecnología puede ofrecer ventajas competitivas.
Consideraciones Finales
Si bien hay beneficios potenciales, también es crucial considerar los costos y la eficiencia. Las operaciones en blockchain, especialmente en redes como Ethereum, pueden incurrir en costos de transacción significativos y ser menos eficientes en términos de velocidad y escalabilidad en comparación con sistemas de bases de datos tradicionales. La decisión de usar blockchain debe basarse en una evaluación cuidadosa de estas compensaciones frente a los beneficios en el contexto específico de la aplicación que estás desarrollando
