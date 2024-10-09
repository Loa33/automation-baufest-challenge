# Desafío de Automatización

Automatización del proceso de creación de un nuevo personal en la web de OrangeHRM utilizando Playwright y Cucumber.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Casos de Prueba](#casos-de-prueba)
- [Configuración del Proyecto](#configuración-del-proyecto)
- [Ejecución de las Pruebas](#ejecución-de-las-pruebas)

## Descripción

Este proyecto utiliza Playwright y Cucumber para automatizar el proceso de creación de un nuevo empleado en la aplicación web OrangeHRM. El objetivo es verificar que el sistema maneja correctamente la creación de empleados con datos válidos e inválidos, además de validar el flujo de inicio de sesión con credenciales correctas e incorrectas.

- Características:
    - **Framework**: Playwright
    - **BDD**: Cucumber
    - **Lenguaje de programación**: TypeScript
    - **Patrón de diseño**: Page Object Model (POM)

## Estructura del proyecto

```
.
├── src/
│   ├── browser/
│   │   └── factory/
│   │       └── browserFactory.ts
│   ├── hooks/
│   │   ├── hooks.ts
│   │   └── pageFixture.ts
│   ├── models/
│   │   ├── contactDetails.ts
│   │   ├── personalDetails.ts
│   │   └── qualifications.ts
│   ├── pages/
│   │   ├── addEmployeePage.ts
│   │   └── loginPage.ts
│   ├── tests/
│   │   ├── features/
│   │   │   ├── addEmployee.feature
│   │   │   └── login.feature
│   │   ├── resources/
│   │   │   └── images/
│   │   └── steps/
│   │       └── addEmployee.steps.ts
│   │        └── login.steps.ts
│   └── utils/
│       └── generator/
└── test-results/
    ├── cucumber-report.html
    ├── cucumber-report.json
    └── screenshots/
```

## Casos de Prueba

| ID   | Descripción                                                                 | Datos de entrada                                                                                           | Precondiciones                                      | Pasos                                                                                       | Resultado esperado                                                                                      | Técnica                  |
|------|-----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|----------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|--------------------------|
| TC01 | Verificar que un usuario con credenciales válidas puede iniciar sesión correctamente | Usuario: Admin<br>Contraseña: admin123                                                                      | El usuario tiene una cuenta registrada en el sistema OrangeHRM | 1. Acceder a la página de login de OrangeHRM<br>2. Ingresar credenciales del usuario<br>3. Login        | El sistema permite el acceso y redirige a la página de dashboard                                         | Partición de equivalencias |
| TC02 | Verificar que un usuario con credenciales incorrectas no puede iniciar sesión | Usuario: test_fail<br>Contraseña: incorrecto                                                                | El usuario tiene una cuenta registrada en el sistema OrangeHRM | 1. Acceder a la página de login de OrangeHRM<br>2. Ingresar credenciales incorrectas del usuario<br>3. Login | El sistema muestra un mensaje de error indicando que las credenciales son incorrectas: `Invalid credentials` | Partición de equivalencias |
| TC03 | Verificar que un nuevo personal es creado con todos los campos válidos      | First Name: Alex<br>Middle Name: Jr<br>Last Name: Smith<br>Employee Id: testuser1<br>Username: testuser1<br>Password: testuser123<br>Confirm Password: testuser123 | El usuario está autenticado en el sistema OrangeHRM | 1. Iniciar sesión en OrangeHRM<br>2. Navegar al módulo PIM<br>3. Hacer click en "Add Employee"<br>4. Completar el formulario con datos válidos<br>5. Guardar<br>6. Verificar empleado registrado en la tabla de empleados | El sistema crea el empleado exitosamente, se muestra un mensaje de éxito y se muestra en la tabla de empleados | Partición de equivalencias |
| TC04 | Verificar que un nuevo personal no es creado al dejar los campos requeridos vacíos | First name: <br>Middle name:<br>Last name:                                                                   | El usuario está autenticado en el sistema OrangeHRM | 1. Iniciar sesión en OrangeHRM<br>2. Navegar al módulo PIM<br>3. Hacer click en "Add Employee"<br>4. Dejar el formulario con los campos en blanco<br>5. Guardar<br>6. Verificar que aparecen los mensajes de error en los campos requeridos | El sistema no permite crear al empleado mostrando un mensaje de error en los campos requeridos con un texto en rojo "REQUIRED" | Partición de equivalencias |

## Configuración del Proyecto

### Prerrequisitos

- **Node.js**: Se debe tener instalado Node.js. Se puede descargar desde [Node.js](https://nodejs.org/).
- **Playwright**: Instala Playwright usando el siguiente comando:

    ```bash
    npm install playwright
    ```

- Instalación de dependencias:

    ```bash
    npm install
    ```

- **Configuración del archivo `.env`**: Crear el archivo `.env` en la ruta raíz del proyecto con el siguiente contenido:

    ```env
    BROWSER=chromium
    HEADLESS=false
    BASE_URL=https://opensource-demo.orangehrmlive.com/auth/login
    ```

## Ejecución de las Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando:

```bash
npm run test
```