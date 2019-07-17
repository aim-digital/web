import {SolutionContact} from '@aim-digital/web/models/default';

export const create = async req => {
    const {email, solution} = req.body;

    return await SolutionContact.upsert({
      ContactEmail: email,
      SolutionId: solution.id,
      summary: solution.summary
    });
};