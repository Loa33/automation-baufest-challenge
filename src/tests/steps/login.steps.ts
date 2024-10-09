import { Given, Then, When } from '@cucumber/cucumber';
import { pageFixture } from '../../hooks/pageFixture';
import { LoginPage } from '../../pages/loginPage';

let loginPage : LoginPage;

Given('que estoy en la página de inicio de sesión', async function() {
    loginPage = new LoginPage(pageFixture.page);
    await loginPage.visualizeLogin();
})

When('ingreso mis credenciales de usuario', async function (dataTable) {
    const data = dataTable.rowsHash();
    await loginPage.login(data["USER"], data["PASSWORD"]);
})

Then('soy redireccionado a la página de dashboard', async function () {
    await loginPage.visualizeDashboard();
})

When('ingreso credenciales incorrectas', async function (dataTable) {
    const data = dataTable.rowsHash();
    await loginPage.login(data["USER"], data["PASSWORD"]);
});


Then('visualizo el mensaje de error {string}', async function (string) {
    await loginPage.visualizeErrorMessage(string);
});