import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}>
      <h2>{post.title}</h2>
      <ReactMarkdown children={post.content.slice(0, 200) + '...'} />
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Post;
