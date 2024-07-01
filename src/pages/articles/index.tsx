import ArticleListItem from "../../components/ArticleListItem";
import { promises as fs } from 'fs';


export default function ArticlesList(props: any) {
  // eslint-disable-next-line react/prop-types
  const {articles} = props;
  return (
    <>
      <div>
        <div>
          <table className="table">
            <thead>
            <tr>
              <th className="display-none-small-screen" scope="col">
                {" "}
                #{" "}
              </th>
              <th scope="col"> article Name</th>
              <th scope="col"> Created Date</th>
            </tr>
            </thead>
            <tbody>
            {articles.map((article: any, index: any) => (
              <ArticleListItem key={article} article={article} index={index}/>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  return {props: {articles: await readDirectory("./src/articles")}};
}

async function readDirectory(path: any) {
       try {
          //  const data = await fs.readFile(path, 'utf8');
          return await fs.readdir(path);
          
       } catch (err) {
           console.error(err);
       }
   }