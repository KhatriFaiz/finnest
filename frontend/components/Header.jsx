import { Button, Container, Stack, Typography, Link } from "@mui/material";
import NextLink from "next/link";

const Header = () => {
  return (
    <header>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingBlock: 1,
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
    </header>
  );
};

export default Header;
