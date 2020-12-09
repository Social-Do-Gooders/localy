from faker import Faker
import random

from models.user import UserModel


# initialize Faker
fake = Faker()

# initialize list
users = []

# generate users
for _ in range(10):

    # generate user
    user = {}
    user['first_name'] = fake.first_name()
    user['last_name'] = fake.last_name()
    user['email_address'] = f"{user['first_name'].lower()}@{user['last_name'].lower()}.com"
    user['password'] = "password"
    user['organizations_following'] = []
    user['users_following'] = []
    user['services'] = []
    #user['organizations_following'] = [fake.company() for _ in range(random.randint(1,3))]
    #user['users_following'] = [fake.name() for _ in range(random.randint(1,3))]
    #user['services'] = [fake.job() for _ in range(random.randint(1,3))]

    # append to list
    user_model = UserModel(**user)
    users.append(user_model)

print(users)