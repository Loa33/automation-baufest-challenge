interface PersonalDetailsFields {
    otherId: string;
    driverLicenseNumber: string;
    licenseExpiryDate: string;
    nationality: string;
    maritalStatus: string;
    dateOfBirth: string;
    gender: string;
    bloodType: string;
}
export class PersonalDetails {
    otherId: string;
    driverLicenseNumber: string;
    licenseExpiryDate: string;
    nationality: string;
    maritalStatus: string;
    dateOfBirth: string;
    gender: string;
    bloodType: string;

    constructor(details: PersonalDetailsFields) {
        this.otherId = details.otherId;
        this.driverLicenseNumber = details.driverLicenseNumber;
        this.licenseExpiryDate = details.licenseExpiryDate;
        this.nationality = details.nationality;
        this.maritalStatus = details.maritalStatus;
        this.dateOfBirth = details.dateOfBirth;
        this.gender = details.gender;
        this.bloodType = details.bloodType;
    }
}