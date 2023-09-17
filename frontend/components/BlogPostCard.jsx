import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const BlogPostCard = ({ post }) => {
  const { title, post_description, slug, author, Cover_Image } =
    post.attributes;
  const url = Cover_Image.data.attributes.formats.medium.url;

  return (
    <Card>
      <CardActionArea component={Link} href={"/blog/" + slug}>
        <CardMedia>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "300px",
              overflow: "hidden",
            }}
          >
            <Image
              src={"http://127.0.0.1:1337" + url}
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
        </CardMedia>
        <CardContent>
          <Typography fontSize={14} color="#9f9f9f">
            by {author}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight={700}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post_description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogPostCard;
