import PostPreview from "../components/post-preview";

export default function MoreStories({ posts }) {
  return (
    <section className="container">
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight ">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 md:gap-y-24 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
