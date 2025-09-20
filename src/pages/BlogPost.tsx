import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../utils/seo';
import { getPostBySlug } from '../lib/blog';
import type { BlogPost as BlogPostType } from '../types';
import { formatDate } from '../utils/format';

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    getPostBySlug(slug).then((result) => {
      if (!result) {
        setNotFound(true);
      } else {
        setPost(result);
      }
    });
  }, [slug]);

  if (notFound) {
    return <Navigate to="/blog" replace />;
  }

  if (!post) {
    return null;
  }

  return (
    <>
      <SEO title={`${post.title} | VitaVera Wellness`} description={post.description} url={`/blog/${post.slug}`} />
      <article className="bg-white py-16" aria-labelledby="post-title">
        <div className="mx-auto max-w-3xl px-4">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/blog" className="hover:text-brand-600">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-slate-700">
                {post.title}
              </li>
            </ol>
          </nav>
          <header className="mt-8">
            <p className="text-xs uppercase tracking-widest text-brand-600">{formatDate(post.date)}</p>
            <h1 id="post-title" className="mt-3 text-4xl font-semibold text-slate-900">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-slate-700">{post.description}</p>
          </header>
          <div className="prose prose-lg mt-8 max-w-none prose-a:text-brand-600 prose-strong:text-slate-900">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPostPage;
