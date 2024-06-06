import Markdown from 'react-markdown'
import { promises as fs } from 'fs';
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import 'katex/dist/katex.min.css'
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import 'katex/dist/katex.min.css'; // Import the Katex CSS for math rendering

// Custom renderer for syntax highlighting
const renderers = {
  code({ language, value }:{language:any, value:any}) {
    return (
      <SyntaxHighlighter language={language} children={value} />
    );
  }
};


export default function Article(props:any) {
    return (
        <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{props.article}</Markdown>
    );
}

export async function getStaticProps({params}:{params:any}) {
    const article = await fs.readFile("./src/articles/"+params.pid,  "utf8");
    console.log(article)
    return {props: {article}};
  
  }
  
  export async function getStaticPaths() {
    let paths =  (await fs.readdir("./src/articles")).map(p => "/articles/"+p)
    console.log("psths to render:", paths);
    return { paths, fallback: true }
  }
  
  
  
