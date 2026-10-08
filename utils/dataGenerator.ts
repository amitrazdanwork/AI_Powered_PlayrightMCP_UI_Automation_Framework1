import { faker } from '@faker-js/faker';

export class RandomDataUtil {
    static getFirstName(): string {
        return faker.person.firstName();
    }

    static getLastName(): string {
        return faker.person.lastName();
    }

    static getEmail(): string {
        return faker.internet.email();
    }

    static getGender(): string {
        return faker.person.sexType();
    }
}