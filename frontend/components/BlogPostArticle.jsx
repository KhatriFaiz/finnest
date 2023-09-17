"use client";
import { Typography } from "@mui/material";
import { MuiMarkdown, getOverrides } from "mui-markdown";

const customeOverrides = {
  h1: {
    component: Typography,
    props: {
      variant: "h2",
      component: "h2",
      gutterBottom: true,
    },
  },
  h2: {
    component: Typography,
    props: {
      variant: "h3",
      component: "h2",
      gutterBottom: true,
    },
  },
  h3: {
    component: Typography,
    props: {
      variant: "h3",
      component: "h3",
      gutterBottom: true,
    },
  },
  h4: {
    component: Typography,
    props: {
      variant: "h4",
      component: "h4",
      gutterBottom: true,
    },
  },
  h5: {
    component: Typography,
    props: {
      variant: "h5",
      component: "h5",
      gutterBottom: true,
    },
  },
  p: {
    component: Typography,
    props: {
      gutterBottom: true,
    },
  },
};

const BlogPostArticle = ({ postContent }) => {
  return (
    <article>
      <MuiMarkdown
        overrides={{
          ...getOverrides({}),
          ...customeOverrides,
        }}
      >
        {postContent}
      </MuiMarkdown>
    </article>
  );
};

const H2 = ({ children }) => {
  return (
    <Typography variant="h2" component="h2" gutterBottom>
      {children}
    </Typography>
  );
};

export default BlogPostArticle;
