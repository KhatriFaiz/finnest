import BlogPostsGrid from "@/components/BlogPostsGrid";

const getPosts = async () => {
  const response = await fetch("http://127.0.0.1:1337/api/posts?populate=*");
  const result = await response.json();

  return result.data;
};

const page = async () => {
  const posts = await getPosts();
  return <BlogPostsGrid posts={posts} />;
};

export default page;
