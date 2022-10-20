import { validationResult } from "express-validator";
import FormModel from '../models/Form.js'

export const sender = async (req, res) => {
    try {
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    const doc = new FormModel({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
    });

    const form = await doc.save();

    res.json(form);
    } catch (error) {
        console.log(err);
        res.status(500).json(
            {
                message: "Something goes wrong",
            }
        )
    }
}