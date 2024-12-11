import axios from 'axios';
import { CMSLDOMAIN } from '../utils';
import { NextApiRequest, NextApiResponse } from 'next';
import { IArticleProps } from '../article/[articleId]';

const getArticleInfoData = async (
  req: NextApiRequest,
  res: NextApiResponse<IArticleProps>
) => {
  // const { articleId } = req.query;
  // axios.get(`${CMSLDOMAIN}/api/article-infos/${articleId}`).then((result) => {
  //   const data = result.data || {};
  //   res.status(200).json(data);
  // });

  res.status(200).json({
    data: {
      0: {
        label: '123123',
        info: '13123',
        articleId: 1,
      },
    },
  });
};

export default getArticleInfoData;
