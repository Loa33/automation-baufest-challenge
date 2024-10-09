# language: es

Característica: Inicio de sesión de usuario

     @TC01
     Escenario: TC01 - Inicio de sesión exitoso
          Dado que estoy en la página de inicio de sesión
          Cuando ingreso mis credenciales de usuario
               | USER     | Admin    |
               | PASSWORD | admin123 |
          Entonces soy redireccionado a la página de dashboard

     @TC02
     Escenario: TC02 - Inicio de sesión fallido
          Dado que estoy en la página de inicio de sesión
          Cuando ingreso credenciales incorrectas
               | USER     | test_fail  |
               | PASSWORD | incorrecto |
          Entonces visualizo el mensaje de error "Invalid credentials"


