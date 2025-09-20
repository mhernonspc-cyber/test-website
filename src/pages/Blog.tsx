import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../utils/seo';
import { getAllPosts } from '../lib/blog';
import type { BlogFrontmatter } from '../types';
import { formatDate } from '../utils/format';

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogFrontmatter[]>([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  return (
    <>
      <SEO
        title="VitaVera Wellness Blog"
        description="Guides and tips on IV hydration, vitamin therapy, recovery, and local wellness recommendations."
        url="/blog"
      />
      <section className="bg-white py-16" aria-labelledby="blog-title">
        <div className="mx-auto max-w-5xl px-4">
          <h1 id="blog-title" className="section-title">
            Wellness knowledge from our clinical team
          </h1>
          <p className="mt-4 max-w-3xl text-body">
            Browse quick reads designed to help you recover faster and feel more energized between infusions.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <article key={post.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs uppercase tracking-widest text-brand-600">{formatDate(post.date)}</p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">{post.title}</h2>
                <p className="mt-2 text-sm text-slate-700">{post.description}</p>
                <Link to={`/blog/${post.slug}`} className="btn-secondary mt-4 inline-flex">
                  Read Article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
