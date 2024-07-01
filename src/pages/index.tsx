import Markdown from 'react-markdown'
import { promises as fs } from 'fs';

export default function Home(props:any) {
  return <Markdown>{props.article}</Markdown>
}


export async function getStaticProps({params}:{params:any}) {
    const article = await fs.readFile("./src/markdown-pages/home.md",  "utf8");
    console.log(article)
    return {props: {article}};

  }