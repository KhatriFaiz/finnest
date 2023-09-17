import BlogPostArticle from "@/components/BlogPostArticle";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const getPost = async (slug) => {
  const response = await fetch(`http://127.0.0.1:1337/api/posts/${slug}`);
  const result = await response.json();

  return result.data;
};

const page = async ({ params }) => {
  const post = await getPost(params.slug);

  return (
    <main>
      <Container sx={{ paddingBlock: 5 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          {post.attributes.title}
        </Typography>
        <Container maxWidth="md" sx={{ marginBlock: 4 }}>
          <Box
            sx={{
              position: "relative",
              minHeight: "500px",
            }}
          >
            <Image
              src={
                "http://127.0.0.1:1337" +
                post.attributes.Cover_Image.data.attributes.formats.large.url
              }
              style={{ objectFit: "cover" }}
              fill={true}
              alt="Cover of the blog post"
            />
          </Box>
        </Container>
        <BlogPostArticle postContent={post.attributes.post_content} />
      </Container>
    </main>
  );
};

export default page;
