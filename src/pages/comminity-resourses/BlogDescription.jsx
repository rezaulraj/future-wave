// BlogDescription.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiClock } from "react-icons/fi";
import { blogs } from "./blogData";
import LetsTalks from "../home/LetsTalks";

const BlogDescription = () => {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  const relatedBlogs = blogs.filter((item) => item.slug !== slug).slice(0, 3);

  if (!blog) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#151820] text-white">
        Blog not found
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#151820] px-5 py-24 text-white md:px-14 md:py-32">
      <div className="absolute left-[-120px] top-0 h-[520px] w-[520px] rounded-full bg-lime-300/10 blur-[150px]" />
      <div className="absolute bottom-0 right-[-120px] h-[560px] w-[560px] rounded-full bg-cyan-400/10 blur-[170px]" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <Link
          to="/communities-resources"
          className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-bold text-white/70 transition-all duration-500 hover:border-lime-300 hover:text-lime-300"
        >
          <FiArrowLeft />
          Back to blogs
        </Link>

        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] shadow-[0_35px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          <div className="relative h-[420px] overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#10131a] via-[#10131a]/40 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8">
              <div className="mb-5 flex flex-wrap items-center gap-4">
                <span className="rounded-full border border-lime-300/30 bg-black/30 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-lime-300 backdrop-blur-xl">
                  {blog.category}
                </span>

                <span className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/65 backdrop-blur-xl">
                  <FiClock />
                  {blog.time}
                </span>
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-[#f4f1e8] md:text-6xl">
                {blog.title}
              </h1>
            </div>
          </div>

          <div className="p-8 md:p-14">
            <p className="text-lg leading-9 text-white/70 whitespace-pre-line">
              {blog.content}
            </p>
          </div>
        </div>

        <div className="mt-24">
          <div className="mb-12">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.24em] text-lime-300">
              Related blogs
            </p>

            <h2 className="text-4xl font-black tracking-[-0.05em] text-[#f4f1e8] md:text-5xl">
              Continue reading
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedBlogs.map((item) => (
              <Link
                key={item.slug}
                to={`/communities-resources/${item.slug}`}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:border-lime-300/40"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#10131a] via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-lime-300">
                    {item.category}
                  </p>

                  <h3 className="mt-4 text-2xl font-black leading-tight tracking-[-0.04em] text-[#f4f1e8] transition-all duration-500 group-hover:text-lime-300">
                    {item.title}
                  </h3>

                  <div className="mt-7 flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-[0.18em] text-white/45">
                      Read more
                    </span>

                    <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/20 text-white/45 transition-all duration-500 group-hover:translate-x-1 group-hover:border-lime-300 group-hover:bg-lime-300 group-hover:text-black">
                      <FiArrowRight />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <LetsTalks />
    </section>
  );
};

export default BlogDescription;
