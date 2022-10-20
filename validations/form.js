import { body } from 'express-validator'

export const formValidation = [
    body('email', "Invalid E-mail").isEmail(),
];

