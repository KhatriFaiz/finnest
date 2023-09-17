"use client";

import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const handleSubmit = async () => {
    const initialRes = await fetch("http://localhost:1337/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          email,
        },
      }),
    })
      .then((res) => {
        if (res.status === 400) setMessage("Error Occured");
        if (res.status === 200) {
          setMessage("Sent successfully");
          setEmail("");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Box
        sx={{ display: "inline-flex", justifyContent: "center", marginTop: 4 }}
      >
        <Box>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText={message}
          />
          <Button
            sx={{ marginLeft: 2 }}
            variant="outlined"
            size="large"
            onClick={handleSubmit}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SubscribeForm;
