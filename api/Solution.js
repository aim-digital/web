import async from '@machete-platform/core-bundle/lib/Promise';
import {ContactSolution} from '@vitruvian-tech/machete-bundle/models/default';

export const create = async(async (req, params, resolve, reject) => {
    const {email, solution} = req.body;

    resolve(await ContactSolution.upsert({
      ContactEmail: email,
      SolutionId: solution.id,
      summary: solution.summary
    }));
});
