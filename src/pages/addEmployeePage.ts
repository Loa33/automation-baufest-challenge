import { expect, Locator } from "@playwright/test";
import { Page } from 'playwright';
import { ContactDetails } from "../models/contactDetails";
import { PersonalDetails } from "../models/personalDetails";
import { Qualifications } from "../models/qualifications";
import Sequence from '../utils/generator/sequence';

const employeeId = new Sequence().nextId();

export class EmployeePage {
    readonly page: Page;
    readonly pimLink: Locator;
    readonly addButton: Locator;
    // Employee info
    readonly firstNameInput: Locator;
    readonly middleNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly profileImageInput: Locator;
    readonly employeeIdInput: Locator;
    readonly saveButton: Locator;
    // Login info
    readonly createLoginCheckbox: Locator;
    readonly usernameInput: Locator;
    readonly statusRadio: Locator;
    readonly passwordInput : Locator;
    readonly confirmPasswordInput : Locator;
    // Personal details
    readonly personalDetailsTitle: string;
    readonly otherIdInput: Locator;
    readonly driverLicenseInput: Locator;
    readonly licenseExpiryDateInput: Locator;
    readonly nationalitySelect: Locator;
    readonly maritalStatusSelect: Locator;
    readonly dateOfBirthInput: Locator;
    readonly bloodTypeSelect: Locator;
    // Contact details
    readonly contactDetailsTitle: string;
    readonly contactDetailsLink: Locator;
    readonly street1Input: Locator;
    readonly street2Input: Locator;
    readonly cityInput: Locator;
    readonly stateProvinceInput: Locator;
    readonly zipPostalCodeInput: Locator;
    readonly countrySelect: Locator;
    readonly homeTelephoneInput: Locator;
    readonly mobileTelephoneInput: Locator;
    readonly workTelephoneInput: Locator;
    readonly workEmailInput: Locator;
    // Emergency contacts
    readonly emergencyContactsLink: Locator
    readonly addEmergencyContactButton: Locator;
    readonly nameInput: Locator;
    readonly relationshipEmergencyContactInput: Locator;
    readonly homeTelephoneEmergencyContactInput: Locator;
    readonly workTelephoneEmergencyContactInput: Locator;
    // Dependents
    readonly dependentsLink: Locator;
    readonly addDependentsButton: Locator;
    readonly relationshipDependentsSelect: Locator;
    // Immigration
    readonly immigrationLink: Locator;
    readonly addImmigrationButton: Locator;
    readonly numberImmigrationInput: Locator;
    readonly issueDateImmigrationInput: Locator;
    readonly expiryDateImmigrationInput: Locator;
    readonly eligibleStatusImmigrationInput: Locator;
    readonly issuedByImmigrationSelect: Locator;
    readonly eligibleReviewDateImmigrationInput: Locator;
    // Job
    readonly jobLink: Locator;
    readonly joinedDateInput: Locator;
    readonly jobTitleSelect: Locator;
    readonly jobCategorySelect: Locator;
    readonly subUnitJobSelect: Locator;
    readonly locationJobSelect: Locator;
    readonly employmentStatusJobSelect: Locator;
    // Salary
    readonly salaryLink: Locator;
    readonly addSalaryButton: Locator;
    readonly salaryComponentInput: Locator;
    readonly payGradeSelect: Locator;
    readonly payFrequencySelect: Locator;
    readonly currencySelect: Locator;
    readonly amountSalaryInput: Locator;
    // Report-to
    readonly reportToLink: Locator;
    readonly addSupervisorButton: Locator;
    readonly nameSupervisorInput: Locator;
    readonly reportingMethodSupervisorSelect: Locator;
    //Quealifications
    readonly qualificationLink: Locator;
    // Qualifications - Work Experience
    readonly addWorkExperienceButton: Locator;
    readonly companyWorkExperienceInput: Locator;
    readonly jobTitleWorkExperienceInput: Locator;
    readonly fromWorkExperienceInput: Locator;
    readonly toWorkExperienceInput: Locator;
    // Qualifications - Education
    readonly addEducationButton: Locator;
    readonly levelEducationSelect: Locator;
    readonly insituteInput: Locator;
    readonly specializationInput: Locator;
    readonly yearEducationInput: Locator;
    readonly gpaInput: Locator;
    //Quealifications - Skills
    readonly addSkillsButton: Locator;
    readonly skillSelect: Locator;
    readonly yearsOfExperience: Locator;
    // Qualifications - Language: 
    readonly addLanguageButton: Locator;
    readonly languageSelect: Locator;
    readonly fluencySelect: Locator;
    readonly competencySelect: Locator;
    //Memberships
    readonly membershipsLink: Locator;
    readonly addMembershipsButton: Locator;
    readonly membershipSelect: Locator;
    readonly subscriptionPaidBySelect: Locator;


    readonly succesfullMessage: Locator;
    readonly employeeListLink: Locator;
    readonly errorMessages: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.pimLink = page.locator('span', { hasText: 'PIM' });
        this.addButton = page.locator('button', { hasText: ' Add ' });
        // Employee info
        this.firstNameInput = page.locator('input[name="firstName"]');
        this.middleNameInput = page.locator('input[name="middleName"]');
        this.lastNameInput = page.locator('input[name="lastName"]');
        this.profileImageInput = page.locator('input[type="file"]');
        this.employeeIdInput = page.locator('//label[text() = "Employee Id"]/../following-sibling::div//input');
        // Login info
        this.createLoginCheckbox = page.locator('//input[@type="checkbox"]/following-sibling::span');
        this.usernameInput = page.locator('//label[text() = "Username"]/../following-sibling::div//input');
        this.passwordInput = page.locator('//label[text() = "Password"]/../following-sibling::div//input');
        this.confirmPasswordInput = page.locator('//label[text() = "Confirm Password"]/../following-sibling::div//input');
        // Personal Details
        this.personalDetailsTitle = "//h6[text()='Personal Details']";
        this.otherIdInput = page.locator('//label[text() = "Other Id"]/../following-sibling::div//input');
        this.driverLicenseInput = page.locator('//label[text() = "Driver\'s License Number"]/../following-sibling::div//input');
        this.licenseExpiryDateInput = page.locator('//label[text() = "License Expiry Date"]/../following-sibling::div//input');
        this.nationalitySelect = page.locator('//label[text() = "Nationality"]/../following-sibling::*//div[@class="oxd-select-text-input"]');
        this.maritalStatusSelect = page.locator('//label[text() = "Marital Status"]/../following-sibling::*//div[@class="oxd-select-text-input"]')
        this.dateOfBirthInput = page.locator('//label[text() = "Date of Birth"]/../following-sibling::div//input');
        this.bloodTypeSelect = page.locator('//label[text() = "Blood Type"]/../following-sibling::*//div[@class="oxd-select-text-input"]');
        // Contact Details
        this.contactDetailsTitle = "//h6[text()='Contact Details']";
        this.contactDetailsLink = page.locator("a", { hasText: 'Contact Details'});
        this.street1Input = page.locator('//label[text() = "Street 1"]/../following-sibling::div//input');
        this.street2Input = page.locator('//label[text() = "Street 2"]/../following-sibling::div//input');
        this.cityInput = page.locator('//label[text() = "City"]/../following-sibling::div//input');
        this.stateProvinceInput = page.locator('//label[text() = "State/Province"]/../following-sibling::div//input');
        this.zipPostalCodeInput = page.locator('//label[text() = "Zip/Postal Code"]/../following-sibling::div//input')
        this.countrySelect = page.locator('//label[text() = "Country"]/../following-sibling::*//div[@class="oxd-select-text-input"]');
        this.homeTelephoneInput = page.locator('//label[text() = "Home"]/../following-sibling::div//input');
        this.mobileTelephoneInput = page.locator('//label[text() = "Mobile"]/../following-sibling::div//input');
        this.workTelephoneInput = page.locator('//label[text() = "Work"]/../following-sibling::div//input');
        this.workEmailInput = page.locator('//label[text() = "Work Email"]/../following-sibling::div//input');
        // Emergency Contacts
        this.emergencyContactsLink = page.locator("a", { hasText: 'Emergency Contacts'});
        this.addEmergencyContactButton = page.locator('//h6[text()="Assigned Emergency Contacts"]/following-sibling::button');
        
        this.nameInput = page.locator('//label[text() = "Name"]/../following-sibling::div//input');
        this.relationshipEmergencyContactInput = page.locator('//label[text() = "Relationship"]/../following-sibling::div//input');
        this.homeTelephoneEmergencyContactInput = page.locator('//label[text() = "Home Telephone"]/../following-sibling::div//input');
        this.workTelephoneEmergencyContactInput = page.locator('//label[text() = "Work Telephone"]/../following-sibling::div//input')
        // Dependents
        this.dependentsLink = page.locator("a", { hasText: 'Dependents'});
        this.addDependentsButton = page.locator('//h6[text()="Assigned Dependents"]/following-sibling::button');
        this.relationshipDependentsSelect = page.locator('//label[text() = "Relationship"]/../following-sibling::*//div[@class="oxd-select-text-input"]');
        // Immigration
        this.immigrationLink = page.locator("a", { hasText: 'Immigration'});
        this.addImmigrationButton = page.locator('//h6[text()="Assigned Immigration Records"]/following-sibling::button');
        this.numberImmigrationInput = page.locator('//label[text() = "Number"]/../following-sibling::div//input');
        this.issueDateImmigrationInput = page.locator('//label[text() = "Issued Date"]/../following-sibling::div//input');
        this.expiryDateImmigrationInput = page.locator('//label[text() = "Expiry Date"]/../following-sibling::div//input');
        this.eligibleStatusImmigrationInput = page.locator('//label[text() = "Eligible Status"]/../following-sibling::div//input');
        this.issuedByImmigrationSelect = page.locator('//label[text() = "Issued By"]/../following-sibling::*//div[@class="oxd-select-text-input"]');
        this.eligibleReviewDateImmigrationInput = page.locator('//label[text() = "Eligible Review Date"]/../following-sibling::div//input');
        // Job
        this.jobLink = page.locator("a", { hasText: 'Job'});
        this.joinedDateInput = page.locator('//label[text() = "Joined Date"]/../following-sibling::div//input');
        this.jobTitleSelect = page.locator('//label[text() = "Job Title"]/../following-sibling::*//div[@class="oxd-select-text-input"]');
        this.jobCategorySelect = page.locator('//label[text() = "Job Category"]/../following-sibling::*//div[@class="oxd-select-text-input"]');
        this.subUnitJobSelect = page.locator('//label[text() = "Sub Unit"]/../following-sibling::*//div[@class="oxd-select-text-input"]');
        this.locationJobSelect = page.locator('//label[text() = "Location"]/../following-sibling::*//div[@class="oxd-select-text-input"]');
        this.employmentStatusJobSelect = page.locator('//label[text() = "Employment Status"]/../following-sibling::*//div[@class="oxd-select-text-input"]');
        // Salary
        this.salaryLink = page.locator("a", { hasText: 'Salary'});
        this.addSalaryButton = page.locator('//h6[text()="Assigned Salary Components"]/following-sibling::button');
        this.salaryComponentInput = page.locator('//label[text() = "Salary Component"]/../following-sibling::div//input');
        this.payGradeSelect = page.locator('//label[text() = "Pay Grade"]/../following-sibling::*//div[@class="oxd-select-text-input"]');
        this.payFrequencySelect = page.locator('//label[text() = "Pay Frequency"]/../following-sibling::*//div[@class="oxd-select-text-input"]');
        this.currencySelect = page.locator('//label[text() = "Currency"]/../following-sibling::*//div[@class="oxd-select-text-input"]');
        this.amountSalaryInput = page.locator('//label[text() = "Amount"]/../following-sibling::div//input');
        // Report-to
        this.reportToLink = page.locator("a", { hasText: 'Report-to'});
        this.addSupervisorButton = page.locator('//h6[text()="Assigned Supervisors"]/following-sibling::button');
        this.nameSupervisorInput = page.locator('//label[text() = "Name"]/../following-sibling::div//input');
        this.reportingMethodSupervisorSelect = page.locator('//label[text() = "Reporting Method"]/../following-sibling::*//div[@class="oxd-select-text-input"]');
        // Quealifications
        this.qualificationLink = page.locator("a", { hasText: 'Qualifications'});
        // Qualifications - Work Experience
        this.addWorkExperienceButton = page.locator('//h6[text()="Work Experience"]/following-sibling::button');
        this.companyWorkExperienceInput = page.locator('//label[text() = "Company"]/../following-sibling::div//input');
        this.jobTitleWorkExperienceInput = page.locator('//label[text() = "Job Title"]/../following-sibling::div//input');
        this.fromWorkExperienceInput = page.locator('//label[text() = "From"]/../following-sibling::div//input');
        this.toWorkExperienceInput = page.locator('//label[text() = "To"]/../following-sibling::div//input');
        // Qualifications - Education
        this.addEducationButton = page.locator('//h6[text()="Education"]/following-sibling::button');
        this.levelEducationSelect = page.locator('//label[text() = "Level"]/../following-sibling::*//div[@class="oxd-select-text-input"]');
        this.insituteInput = page.locator('//label[text() = "Institute"]/../following-sibling::div//input');
        this.specializationInput = page.locator('//label[text() = "Major/Specialization"]/../following-sibling::div//input');
        this.yearEducationInput = page.locator('//label[text() = "Year"]/../following-sibling::div//input');
        this.gpaInput = page.locator('//label[text() = "GPA/Score"]/../following-sibling::div//input');
        // Qualifications - Skills
        this.addSkillsButton = page.locator('//h6[text()="Skills"]/following-sibling::button');
        this.skillSelect = page.locator('//label[text() = "Skill"]/../following-sibling::*//div[@class="oxd-select-text-input"]');
        this.yearsOfExperience = page.locator('//label[text() = "Years of Experience"]/../following-sibling::div//input');
        // Qualifications - Languages
        this.addLanguageButton = page.locator('//h6[text()="Languages"]/following-sibling::button');
        this.languageSelect = page.locator('//label[text() = "Language"]/../following-sibling::*//div[@class="oxd-select-text-input"]');
        this.fluencySelect = page.locator('//label[text() = "Fluency"]/../following-sibling::*//div[@class="oxd-select-text-input"]');
        this.competencySelect = page.locator('//label[text() = "Competency"]/../following-sibling::*//div[@class="oxd-select-text-input"]');
        // Memberships
        this.membershipsLink = page.locator("a", { hasText: 'Memberships'});
        this.addMembershipsButton = page.locator('//h6[text()="Assigned Memberships"]/following-sibling::button');
        this.membershipSelect = page.locator('//label[text() = "Membership"]/../following-sibling::*//div[@class="oxd-select-text-input"]');
        this.subscriptionPaidBySelect = page.locator('//label[text() = "Subscription Paid By"]/../following-sibling::*//div[@class="oxd-select-text-input"]');

        this.succesfullMessage = page.locator('//div[contains(@class, "success")]')
        this.employeeListLink = page.locator('a', { hasText: 'Employee List' });
        this.errorMessages = page.locator('span', { hasText: 'Required' });
        this.saveButton = page.locator('button[type="submit"]');
    }

    async goToPIM() {
        await this.pimLink.click();

    }

    async addEmployee() {
        await this.addButton.click();
    }

    async fillEmployeeInfo(firstName: string, middleName: string, lastName: string) {
            await this.firstNameInput.fill(firstName);
            await this.middleNameInput.fill(middleName);
            await this.lastNameInput.fill(lastName);
            const avatar_path = 'src\\tests\\resources\\images\\avatar.png';
            await this.profileImageInput.setInputFiles(avatar_path);
            await this.employeeIdInput.fill(employeeId);
    }

    async clickCreateLoginDetails() {
        await this.createLoginCheckbox.click();
    }

    async fillEmployeeLoginDetails(password: string, confirmPassword: string) {
        await this.usernameInput.fill(employeeId);
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(confirmPassword);
        await this.saveButton.click();
    }

    async fillEmployeePersonalDetails(details: PersonalDetails) {
            await this.waitForLoader();
            await this.page.waitForSelector(this.personalDetailsTitle, { state: 'visible', timeout: 10000 });
            await this.otherIdInput.fill(details.otherId);
            await this.driverLicenseInput.fill(details.driverLicenseNumber);
            await this.licenseExpiryDateInput.fill(details.licenseExpiryDate);
            await this.nationalitySelect.click();
            const nationalityOption = this.page.locator(`//label[text()='Nationality']/../following-sibling::*//div[@role='option']/span[text()='${details.nationality}']`);
            await nationalityOption.click();
            await this.maritalStatusSelect.click();
            const maritalStatusOption = this.page.locator(`//label[text()='Marital Status']/../following-sibling::*//div[@role='option']/span[text()='${details.maritalStatus}']`);
            await maritalStatusOption.click();
            await this.dateOfBirthInput.fill(details.dateOfBirth);
            const genderInput = this.page.locator(`//label[text()= '${details.gender}']/input/following-sibling::span`);
            await genderInput.click();
            await this.bloodTypeSelect.click();
            const bloodTypeOption = this.page.locator(`//label[text()='Blood Type']/../following-sibling::*//div[@role='option']/span[text()='${details.bloodType}']`);
            await bloodTypeOption.click();
            await this.saveChanges();
    }

    async fillEmployeeContactDetails(details: ContactDetails) {
        await this.waitForLoader();
        if (!details || !details.street1) {
            console.error('Los detalles de contacto están incompletos o son inválidos:', details);
            return; // Detener la ejecución si los detalles no son válidos
        }
        await this.contactDetailsLink.click();
        await this.street1Input.fill(details.street1);
        await this.street2Input.fill(details.street2);
        await this.cityInput.fill(details.city);
        await this.stateProvinceInput.fill(details.province);
        await this.zipPostalCodeInput.fill(details.postalCode);
        await this.countrySelect.click();
        const countryOption = this.page.locator(`//label[text()='Country']/../following-sibling::*//div[@role='option']/span[text()='${details.country}']`);
        await countryOption.click();
        await this.homeTelephoneInput.fill(details.telephoneHome);
        await this.mobileTelephoneInput.fill(details.telephoneMobile);
        await this.workTelephoneInput.fill(details.telephoneWork);
        await this.workEmailInput.fill(`${employeeId}@gmail.com`);
        await this.saveChanges()
    }

    async fillEmployeeEmergencyContacts(name: string, relationship: string, homeTelephone: string, mobile:string, workTelephone: string) {
        await this.waitForLoader();
        await this.emergencyContactsLink.click();
        await this.addEmergencyContactButton.click();
        await this.nameInput.fill(name);
        await this.relationshipEmergencyContactInput.fill(relationship);
        await this.homeTelephoneEmergencyContactInput.fill(homeTelephone);
        await this.mobileTelephoneInput.fill(mobile);
        await this.workTelephoneEmergencyContactInput.fill(workTelephone);
        await this.saveChanges();
    }

    async fillEmployeeDependents(name: string, relationship: string, homeTelephone: string, dateOfBirth: string) {
        await this.waitForLoader();
        await this.dependentsLink.click();
        await this.addDependentsButton.click();
        await this.nameInput.fill(name);
        await this.relationshipDependentsSelect.click()
        const relationshipOption = this.page.locator(`//label[text()='Relationship']/../following-sibling::*//div[@role='option']/span[text()='${relationship}']`);
        await relationshipOption.click();
        await this.dateOfBirthInput.fill(dateOfBirth);
        await this.saveChanges();
        
    }

    async fillEmployeeImmigration(number: string, issueDate: string, expiryDate: string, eligibleStatus: string, issuedBy: string, eligibleReviewDate: string){
        await this.waitForLoader();
        await this.immigrationLink.click();
        await this.addImmigrationButton.click();
        await this.numberImmigrationInput.fill(number);
        await this.issueDateImmigrationInput.fill(issueDate);
        await this.expiryDateImmigrationInput.fill(expiryDate);
        await this.eligibleStatusImmigrationInput.fill(eligibleStatus);
        await this.issuedByImmigrationSelect.click();
        const optionIssuedBy = this.page.locator(`//label[text()='Issued By']/../following-sibling::*//div[@role='option']/span[text()='${issuedBy}']`);
        await optionIssuedBy.click();
        await this.eligibleReviewDateImmigrationInput.fill(eligibleReviewDate);
        await this.saveChanges();
    }

    async fillEmployeeJob(joinedDate: string, jobTitle: string, jobCategory: string, subUnit: string, location: string, employmentStatus: string) {
        await this.waitForLoader();
        await this.jobLink.click();
        await this.joinedDateInput.fill(joinedDate);
        await this.jobTitleSelect.click();
        const jobTitleOption = this.page.locator(`//label[text()='Job Title']/../following-sibling::*//div[@role='option']/span[text()='${jobTitle}']`);
        await jobTitleOption.click();
        await this.jobCategorySelect.click();
        const jobCategoryOption = this.page.locator(`//label[text()='Job Category']/../following-sibling::*//div[@role='option']/span[text()='${jobCategory}']`);
        await jobCategoryOption.click();
        await this.subUnitJobSelect.click();
        const subUnitOption = this.page.locator(`//label[text()='Sub Unit']/../following-sibling::*//div[@role='option']/span[text()='${subUnit}']`);
        await subUnitOption.click();
        await this.locationJobSelect.click();
        const locationOption = this.page.locator(`//label[text()='Location']/../following-sibling::*//div[@role='option']/span[text()='${location}']`);
        await locationOption.click();
        await this.employmentStatusJobSelect.click();
        const employmentStatusOption = this.page.locator(`//label[text()='Employment Status']/../following-sibling::*//div[@role='option']/span[text()='${employmentStatus}']`);
        await employmentStatusOption.click();
        await this.saveChanges();
    }
    
    async fillEmployeeSalary(salaryComponent: string, payGrade: string, payFrequency: string, currency: string, amount: string) {
        await this.waitForLoader();
        await this.salaryLink.click();
        await this.addSalaryButton.click();
        await this.salaryComponentInput.fill(salaryComponent);
        await this.payGradeSelect.click();
        const payGradeOption = this.page.locator(`//label[text()='Pay Grade']/../following-sibling::*//div[@role='option']/span[text()='${payGrade}']`);
        await payGradeOption.click();
        await this.payFrequencySelect.click();
        const payFrequencyOption = this.page.locator(`//label[text()='Pay Frequency']/../following-sibling::*//div[@role='option']/span[text()='${payFrequency}']`);
        await payFrequencyOption.click();
        await this.currencySelect.click();
        const currencyOption = this.page.locator(`//label[text()='Currency']/../following-sibling::*//div[@role='option']/span[text()='${currency}']`);
        await currencyOption.click();
        await this.amountSalaryInput.fill(amount);
        await this.saveChanges();
    }

    async fillEmployeeReportTo(reportingMethod: string) {
        await this.waitForLoader();
        await this.reportToLink.click();
        await this.addSupervisorButton.click();
        await this.nameSupervisorInput.click();
        await this.page.type('//label[text() = "Name"]/../following-sibling::div//input', 'a', { delay: 1000 });
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.reportingMethodSupervisorSelect.click();
        const reportingMethodOption = this.page.locator(`//label[text()='Reporting Method']/../following-sibling::*//div[@role='option']/span[text()='${reportingMethod}']`);
        await reportingMethodOption.click();
        await this.saveChanges();
    }

    async fillEmployeeQualifications(details: Qualifications) {
        await this.waitForLoader();
        await this.qualificationLink.click();
        await this.addWorkExperienceButton.click();
        await this.companyWorkExperienceInput.fill(details.company);
        await this.jobTitleWorkExperienceInput.fill(details.jobTitle);
        await this.fromWorkExperienceInput.fill(details.from);
        await this.toWorkExperienceInput.fill(details.to);
        await this.addEducationButton.click();
        await this.levelEducationSelect.click();
        const levelEducationOption = this.page.locator(`//label[text()='Level']/../following-sibling::*//div[@role='option']/span[text()=\"${details.levelEducation}\"]`);
        await levelEducationOption.click();
        await this.insituteInput.fill(details.institute);
        await this.specializationInput.fill(details.specialization);
        await this.yearEducationInput.fill(details.year);
        await this.gpaInput.fill(details.gpa);
        await this.addSkillsButton.click();
        await this.skillSelect.click();
        const skillOption = this.page.locator(`//label[text()='Skill']/../following-sibling::*//div[@role='option']/span[text()='${details.skill}']`);
        await skillOption.click();
        await this.yearsOfExperience.fill(details.yearsOfExperience);
        await this.addLanguageButton.click();
        await this.languageSelect.click();
        const languageOption = this.page.locator(`//label[text()='Language']/../following-sibling::*//div[@role='option']/span[text()='${details.language}']`);
        await languageOption.click();
        await this.fluencySelect.click();
        const fluencyOption = this.page.locator(`//label[text()='Fluency']/../following-sibling::*//div[@role='option']/span[text()='${details.fluency}']`);
        await fluencyOption.click();
        await this.competencySelect.click();
        const competencyOption = this.page.locator(`//label[text()='Competency']/../following-sibling::*//div[@role='option']/span[text()='${details.competency}']`);
        await competencyOption.click();
        await this.saveChanges();
    }

    async fillEmployeeMemberships(membership: string, subscriptionPaidBy: string, currency: string) {
        await this.waitForLoader();
        await this.membershipsLink.click();
        await this.addMembershipsButton.click();
        await this.membershipSelect.click();
        const membershipOption = this.page.locator(`//label[text()='Membership']/../following-sibling::*//div[@role='option']/span[text()='${membership}']`);
        await membershipOption.click();
        await this.subscriptionPaidBySelect.click();
        const subscriptionPaidByOption = this.page.locator(`//label[text()='Subscription Paid By']/../following-sibling::*//div[@role='option']/span[text()='${subscriptionPaidBy}']`);
        await subscriptionPaidByOption.click();
        await this.currencySelect.click();
        const currencyOption = this.page.locator(`//label[text()='Currency']/../following-sibling::*//div[@role='option']/span[text()='${currency}']`);
        await currencyOption.click();
        await this.saveChanges();
    }

    async saveChanges() {
            const saveButtons = await this.saveButton.all();
            for (const button of saveButtons) {
                await button.click();
            }

            await this.waitForLoader();
            await this.page.mouse.wheel(0, -100000000)
        } 

    async waitForLoader() {
        await this.page.waitForSelector('//div[contains(@class, "loader")]', { state: 'detached' , timeout: 50000 });
    }

    async verifySuccesfulCreation() {
            await this.employeeListLink.click();
            const employeeCell = this.page.locator(`//div[@role='cell']/div[text() = '${employeeId}']`);
            await expect(employeeCell).toBeVisible();
        } 



    async verifyFailedMessages() {
            await expect(this.errorMessages).toHaveCount(2);
        } 

}