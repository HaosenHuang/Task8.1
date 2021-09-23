import faker from 'faker';
const expertList = [
    {
        "key": 0,
        "avatar": faker.image.avatar(),
        "name": `${faker.name.firstName()} ${faker.name.lastName()}`,
        "jobTitle": faker.name.jobTitle(),
        "description": faker.company.catchPhrase(),
        "rating": `⭐ ${faker.finance.amount(0,5)} star`
    },
    {
        "key": 1,
        "avatar": faker.image.avatar(),
        "name": `${faker.name.firstName()} ${faker.name.lastName()}`,
        "jobTitle": faker.name.jobTitle(),
        "description": faker.company.catchPhrase(),
        "rating": `⭐ ${faker.finance.amount(0,5)} star`
    },
    {
        "key": 2,
        "avatar": faker.image.avatar(),
        "name": `${faker.name.firstName()} ${faker.name.lastName()}`,
        "jobTitle": faker.name.jobTitle(),
        "description": faker.company.catchPhrase(),
        "rating": `⭐ ${faker.finance.amount(0,5)} star`
    },
    {
        "key": 3,
        "avatar": faker.image.avatar(),
        "name": `${faker.name.firstName()} ${faker.name.lastName()}`,
        "jobTitle": faker.name.jobTitle(),
        "description": faker.company.catchPhrase(),
        "rating": `⭐ ${faker.finance.amount(0,5)} star`
    },
    {
        "key": 4,
        "avatar": faker.image.avatar(),
        "name": `${faker.name.firstName()} ${faker.name.lastName()}`,
        "jobTitle": faker.name.jobTitle(),
        "description": faker.company.catchPhrase(),
        "rating": `⭐ ${faker.finance.amount(0,5)} star`
    },
    {
        "key": 5,
        "avatar": faker.image.avatar(),
        "name": `${faker.name.firstName()} ${faker.name.lastName()}`,
        "jobTitle": faker.name.jobTitle(),
        "description": faker.company.catchPhrase(),
        "rating": `⭐ ${faker.finance.amount(0,5)} star`
    },
]

export default expertList;