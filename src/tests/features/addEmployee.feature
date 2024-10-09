# language: es

Característica: Crear un nuevo personal

    Antecedentes:
        Dado que estoy en la página de inicio de sesión
        Cuando ingreso mis credenciales de usuario
            | USER     | Admin    |
            | PASSWORD | admin123 |
        Entonces soy redireccionado a la página de dashboard


    @TC03
    Escenario: TC03 - Creación de personal exitoso
        Dado que navego al modulo PIM
        Cuando hago click en Add
        Y completo el formulario con la información del empleado
            | FIRST_NAME  | Alex  |
            | MIDDLE_NAME | Jr    |
            | LAST_NAME   | Smith |
        Y hago click en la casilla de "Create Login Details"
        Y completo el formulario con los datos de acceso
            | PASSWORD         | testuser123. |
            | CONFIRM_PASSWORD | testuser123. |
        Entonces guardo los cambios
        Dado completo el formulario de "Personal Details"
            | OTHER_ID    | DRIVER_LICENSE_NUMBER | LICENSE_EXPIRY_DATE | NATIONALITY | MARITAL_STATUS | DATE_OF_BIRTH | GENDER | BLOOD_TYPE |
            | userForTest | 98765438              | 2028-17-10          | Peruvian    | Single         | 1993-10-10    | Male   | A+         |
        Y completo el formulario de "Contact Details"
            | STREET1  | STREET2      | CITY | PROVINCE | POSTAL_CODE | COUNTRY | TELEPHONE_HOME | TELEPHONE_MOBILE | TELEPHONE_WORK |
            | Calle 10 | Avenida S.M. | Lima | Lima     | 00051       | Peru    | 234531         | 032640182         | 093456721      |
        Y completo el formulario de "Emergency Contacts"
            | NAME       | RELATIONSHIP | HOME_TELEPHONE | MOBILE    | WORK_TELEPHONE |
            | Mary Smith | Mother       | 234531         | 097351928 | 096473821      |
        Y completo el formulario de "Dependents"
            | NAME      | RELATIONSHIP | HOME_TELEPHONE | DATE_OF_BIRTH |
            | Ada Smith | Child        | 234531         | 2005-15-05    |
        Y completo el formulario de "Inmigration"
            | NUMBER   | ISSUE_DATE | EXPIRY_DATE | ELIGIBLE_STATUS | ISSUED_BY | ELIGIBLE_REVIEW_DATE |
            | E0000730 | 2022-15-08 | 2032-15-08          | Active          | Peru      | 2026-15-08           |
        Y completo el formulario de "Job"
            | JOINED_DATE | JOB_TITLE        | JOB_CATEGORY  | SUB_UNIT          | LOCATION              | EMPLOYMENT_STATUS  |
            | 2024-07-10  | Automaton Tester | Professionals | Quality Assurance | New York Sales Office | Full-Time Contract |
        Y completo el formulario de "Salary"
            | SALARY_COMPONENT | PAY_GRADE | PAY_FREQUENCY | CURRENCY             | AMOUNT |
            | Basic            | Grade 2   | Monthly       | United States Dollar | 50000  |
        Y completo el formulario de "Report-to"
            | REPORTING_METHOD |
            | Direct           |
        Y completo el formulario de "Qualifications"
            | COMPANY      | JOB_TITLE | FROM       | TO         | LEVEL_EDUCATION   | INSTITUTE            | SPECIALIZATION | YEAR | GPA | SKILL | YEARS_OF_EXPERIENCE | LANGUAGE | FLUENCY | COMPETENCY |
            | Test Company | QE        | 2023-01-01 | 2023-12-01 | Bachelor's Degree | Universal University | Engineer       | 2022 | 4   | Java  | 1                   | English  | Writing | Basic      |
        Y completo el formulario de "Memberships"
            | MEMBERSHIP   | SUBSCRIPTION_PAID_BY | CURRENCY             |
            | ACCA | Company              | United States Dollar |
        Entonces verifico que el empleado se agregó correctamente a la lista de empleados

    @TC04
    Escenario: TC04 - Creación de personal fallido
        Dado que navego al modulo PIM
        Cuando hago click en Add
        Y dejo el formulario de información del empleado con los campos requeridos vacios
        Entonces visualizo mensajes de error en los campos requeridos

