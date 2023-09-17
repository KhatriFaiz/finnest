import {
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import SubscribeForm from "./SubscribeFrom";

const Footer = () => {
  return (
    <footer>
      <Divider />
      <Container sx={{ paddingBlock: 10 }}>
        <Typography variant="h3" component="h4" align="center">
          Subscribe For More
        </Typography>
        <Grid container justifyContent={"center"}>
          <Grid item>
            <SubscribeForm />
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Container
        sx={{
          paddingBlock: 3,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ textDecoration: "none", color: "#000" }}>
          <Typography variant="h5">Finnest</Typography>
        </Link>
        <Stack direction="row" spacing={3}>
          <Link component={NextLink} href={"/"} underline="hover">
            Home
          </Link>
          <Link component={NextLink} href={"/blog"} underline="hover">
            Blog
          </Link>
        </Stack>
      </Container>
      <Divider />
      <Container sx={{ paddingBlock: 1 }}>
        <Typography align="center">
          Created By <Link href="https://faizkhatri.online/">Faiz Khatri</Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
