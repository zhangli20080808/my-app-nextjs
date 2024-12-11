import { NextPage } from 'next';
import { LOCALDOMAIN } from '../utils';
export interface IArticleProps {
  title: string;
  author: string;
  description: string;
  content: string;
}
const showdown = require('showdown');
const Article: NextPage<IArticleProps> = ({
  title,
  author,
  description,
  content,
}) => {
  const converter = new showdown.Converter();
  return (
    <>
      <h1>{title}</h1>
      <div>
        {author} {description}
      </div>
      {/* 内容可能是 markdown语法 */}
      <div
        dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }}
      ></div>
    </>
  );
};
// 数据请求
Article.getInitialProps = async (ctx) => {
  console.log(ctx);
  // const { query } = ctx;
  // const { articleId } = query;
  // 请求数据
  // const data = await axios.get(`${LOCALDOMAIN}/api/articleInfo`, {
  //   params: {
  //     articleId,
  //   },
  // });
  return {
    title: '文章标题',
    author: '文章作者',
    description: '文章描述',
    content: '文章内容123123123123123123123123123123',
  };
};

export default Article;
