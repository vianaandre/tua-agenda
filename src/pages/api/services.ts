import { CategoryProps } from 'common/interface/CategoryProps';
import { ServiceProps } from 'common/interface/ServiceProps';
import { NextApiRequest, NextApiResponse } from 'next';
import services from 'services/mock/services.json';

function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category }: { category?: CategoryProps } = req.body;

  if (category) {
    const servicesPerCategory = [] as ServiceProps[];

    services.forEach((item) => {
      item.categories.forEach((i) => {
        if (category === i) {
          servicesPerCategory.push(item);
        }
      });
    });

    return res.status(200).json(servicesPerCategory);
  }

  return res.status(200).json(services);
}

export default handler;
