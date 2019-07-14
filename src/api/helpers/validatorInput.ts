//TODO : Validator for empty input
export class ValidatorInput {
    public static BodyIsEmpty(req: any, res: any) {
        if (Object.keys(req.body).length <= 0) return res.status(400).send('Empty body?');
    }
}
