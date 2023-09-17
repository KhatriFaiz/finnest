import { Grid, Container } from "@mui/material";
import BlogPostCard from "./BlogPostCard";

const BlogPostsGrid = ({ posts }) => {
  return (
    <Container sx={{ paddingBlock: 10 }}>
      <Grid container spacing={2}>
        {posts.map((item, index) => (
          <Grid item lg={4} md={6} sm={12} key={index}>
            <BlogPostCard post={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogPostsGrid;
