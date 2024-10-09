import { Given, Then, When } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import { ContactDetails } from "../../models/contactDetails";
import { PersonalDetails } from "../../models/personalDetails";
import { Qualifications } from "../../models/qualifications";
import { EmployeePage } from "../../pages/addEmployeePage";

let employeePage: EmployeePage;

Given("que navego al modulo PIM", async function () {
    employeePage = new EmployeePage(pageFixture.page);
    await employeePage.goToPIM();
});

When("hago click en Add", async function () {
    await employeePage.addEmployee();
});

When(
    "completo el formulario con la información del empleado",
    async function (dataTable) {
        const data = dataTable.rowsHash();
        await employeePage.fillEmployeeInfo(
            data["FIRST_NAME"],
            data["MIDDLE_NAME"],
            data["LAST_NAME"]
        );
    }
);

When('hago click en la casilla de "Create Login Details"', async function () {
    await employeePage.clickCreateLoginDetails();
});

When('completo el formulario con los datos de acceso', async function (dataTable) {
    const data = dataTable.rowsHash();
    await employeePage.fillEmployeeLoginDetails(
        data["PASSWORD"],
        data["CONFIRM_PASSWORD"]
    );
});

When("completo el formulario con detalles personales", async function (dataTable) {
    const data = dataTable.hashes()[0];

    const personalDetails = {
        nickName: data["NICKNAME"],
        otherId: data["OTHER_ID"],
        driverLicenseNumber: data["DRIVER_LICENSE_NUMBER"],
        licenseExpiryDate: data["LICENSE_EXPIRY_DATE"],
        nationality: data["NATIONALITY"],
        maritalStatus: data["MARITAL_STATUS"],
        dateOfBirth: data["DATE_OF_BIRTH"],
        gender: data["GENDER"],
        bloodType: data["BLOOD_TYPE"],
    };

    const newEmployee = new PersonalDetails(personalDetails);

    await employeePage.fillEmployeePersonalDetails(newEmployee);

}
);

Given('completo el formulario de {string}', async function (string, dataTable) {
    const data = dataTable.hashes()[0];


    switch (string) {
        case "Personal Details": {
            const personalDetails = {
                otherId: data["OTHER_ID"],
                driverLicenseNumber: data["DRIVER_LICENSE_NUMBER"],
                licenseExpiryDate: data["LICENSE_EXPIRY_DATE"],
                nationality: data["NATIONALITY"],
                maritalStatus: data["MARITAL_STATUS"],
                dateOfBirth: data["DATE_OF_BIRTH"],
                gender: data["GENDER"],
                bloodType: data["BLOOD_TYPE"],
            };

            const newEmployee = new PersonalDetails(personalDetails);

            await employeePage.fillEmployeePersonalDetails(newEmployee);
            break;
        }

        case "Contact Details": {
            const contactDetails = {
                street1: data["STREET1"],
                street2: data["STREET2"],
                city: data["CITY"],
                province: data["PROVINCE"],
                postalCode: data["POSTAL_CODE"],
                country: data["COUNTRY"],
                telephoneHome: data["TELEPHONE_HOME"],
                telephoneMobile: data["TELEPHONE_MOBILE"],
                telephoneWork: data["TELEPHONE_WORK"],
                emailWork: data["EMAIL_WORK"]
            }
            const newContact = new ContactDetails(contactDetails);
            await employeePage.fillEmployeeContactDetails(newContact);
            break;
        }

        case "Emergency Contacts": {
            await employeePage.fillEmployeeEmergencyContacts(data["NAME"], data["RELATIONSHIP"], data["HOME_TELEPHONE"], data["MOBILE"], data["WORK_TELEPHONE"]);
            break;
        }
        case "Dependents": {
            await employeePage.fillEmployeeDependents(data["NAME"], data["RELATIONSHIP"], data["HOME_TELEPHONE"], data["DATE_OF_BIRTH"]);
            break;
        }
        case "Inmigration": {
            await employeePage.fillEmployeeImmigration(data["NUMBER"], data["ISSUE_DATE"], data["EXPIRY_DATE"], data["ELIGIBLE_STATUS"], data["ISSUED_BY"], data["ELIGIBLE_REVIEW_DATE"])
            break;
        }
        case "Job": {
            await employeePage.fillEmployeeJob(data["JOINED_DATE"], data["JOB_TITLE"], data["JOB_CATEGORY"], data["SUB_UNIT"], data["LOCATION"], data["EMPLOYMENT_STATUS"])
            break;
        }
        case "Salary": {
            await employeePage.fillEmployeeSalary(data["SALARY_COMPONENT"], data["PAY_GRADE"], data["PAY_FREQUENCY"], data["CURRENCY"], data["AMOUNT"].toString());
            break;
        }
        case "Report-to": {
            await employeePage.fillEmployeeReportTo(data["REPORTING_METHOD"]);
            break;
        }
        case "Qualifications": {
            const qualificationsDetails = {
                company: data["COMPANY"],
                jobTitle: data["JOB_TITLE"],
                from: data["FROM"],
                to: data["TO"],
                levelEducation: data["LEVEL_EDUCATION"],
                institute: data["INSTITUTE"],
                specialization: data["SPECIALIZATION"],
                year: data["YEAR"],
                gpa: data["GPA"],
                skill: data["SKILL"],
                yearsOfExperience: data["YEARS_OF_EXPERIENCE"],
                language: data["LANGUAGE"],
                fluency: data["FLUENCY"],
                competency: data["COMPETENCY"],
            }
            const newQualifications = new Qualifications(qualificationsDetails);
            await employeePage.fillEmployeeQualifications(newQualifications);
            break;
        }
        case "Memberships": {
            await employeePage.fillEmployeeMemberships(data["MEMBERSHIP"], data["SUBSCRIPTION_PAID_BY"], data["CURRENCY"])
            break;
        }
        default: {
            console.log('Ninguna opción coincide.');
            break;
        }
    }
});

Then("guardo los cambios", async function () {
    await employeePage.saveChanges();
});

Then(
    "verifico que el empleado se agregó correctamente a la lista de empleados",
    async function () {
        await employeePage.verifySuccesfulCreation();
    }
);

When(
    "dejo el formulario de información del empleado con los campos requeridos vacios",
    async function () {
        await employeePage.fillEmployeeInfo(' ', ' ', ' ');
    }
);

Then("visualizo mensajes de error en los campos requeridos", async function () {
    await employeePage.verifyFailedMessages();
});
