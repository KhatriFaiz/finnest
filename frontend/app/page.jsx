import BlogPostsGrid from "@/components/BlogPostsGrid";
import SubscribeForm from "@/components/SubscribeFrom";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import nature from "@/public/nature.jpg";

const getPosts = async () => {
  const response = await fetch("http://127.0.0.1:1337/api/posts?populate=*");
  const result = await response.json();

  return result.data;
};

export default async function Home() {
  const posts = await getPosts();
  return (
    <main style={{ paddingBlock: "32px" }}>
      <Container sx={{ paddingBlock: 8 }}>
        <Grid container spacing={5}>
          <Grid item md={6}>
            <Typography variant="h1" gutterBottom>
              Join Our Community for Exclusive Fitness Insights!
            </Typography>
            <Typography gutterBottom>
              Subscribe to our newsletter for curated workouts, nutrition tips,
              and latest updates
            </Typography>
            <SubscribeForm />
          </Grid>
          <Grid item md={6}>
            <Box sx={{ position: "relative" }}>
              <Image
                src={nature}
                alt="Nature is beautiful"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <section>
        <BlogPostsGrid posts={posts} />
      </section>
    </main>
  );
}
