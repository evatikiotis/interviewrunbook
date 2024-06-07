import React from "react";
import Link from "next/link";

export default function ArticleListItem({ article, index }) {
  return (
    <>
      <tr>
        <th className="display-none-small-screen" scope="row">
          {index + 1}
        </th>
        <td>{article}</td>
        <td>30/5</td>
        <td>
          <Link href={`/articles/${article}`}>
            Link
          </Link>
        </td>
        
        
      </tr>
    </>
  );
}
