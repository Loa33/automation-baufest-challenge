interface ContactDetailsFields {
    street1: string;
    street2: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
    telephoneHome: string;
    telephoneMobile: string;
    telephoneWork: string;
}
export class ContactDetails {
    street1: string;
    street2: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
    telephoneHome: string;
    telephoneMobile: string;
    telephoneWork: string;

    constructor(details: ContactDetailsFields) {
        this.street1= details.street1;
        this.street2= details.street2;
        this.city= details.city;
        this.province= details.province;
        this.postalCode= details.postalCode;
        this.country= details.country;
        this.telephoneHome= details.telephoneHome;
        this.telephoneMobile= details.telephoneMobile;
        this.telephoneWork= details.telephoneWork;
    }
}