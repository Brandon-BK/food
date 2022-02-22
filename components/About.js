import { Box, Typography, Stack, Button } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "180vh",
        background: "#f1f1f1",
      }}
    >
      <Typography variant="h5">About</Typography>
      <img
        src="https://www.w3schools.com/w3images/boy.jpg"
        alt=""
        style={{
          objectFit: "contain",
          //   width:'30%',
          height: "300px",
          marginBottom: "16px",
        }}
      />
      <Typography
        variant="p"
        sx={{ width: "55%", lineHeight: "1.8rem", textAlign: "center" }}
      >
        Just me, myself and I, exploring the universe of unknownment. I have a
        heart of love and an interest of lorem ipsum and mauris neque quam blog.
        I want to share my world with you. Praesent tincidunt sed tellus ut
        rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
        congue gravida diam non fringilla. Praesent tincidunt sed tellus ut
        rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
        congue gravida diam non fringilla.
      </Typography>

      <Typography
        variant="h4"
        sx={{
          color: "#e91e63",
          fontSize: "22px",
          margin: "16px",
        }}
      >
        Do not hesitate to contact me!
      </Typography>

      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          //   margin:'16px',
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <label
          style={{
            marginBottom: "16px",
          }}
        >
          Name
        </label>
        <input
          style={{
            width: "55vw",
            padding: "14px",
            border: "1px solid grey",
          }}
        />
      </Stack>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          //   margin:'16px',
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <label
          style={{
            marginBottom: "16px",
          }}
        >
          Email
        </label>
        <input
          style={{
            width: "55vw",
            padding: "14px",
            border: "1px solid grey",
          }}
        />
      </Stack>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          //   margin:'8px',
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <label
          style={{
            marginBottom: "16px",
          }}
        >
          Message
        </label>
        <input
          style={{
            width: "55vw",
            padding: "14px",
            border: "1px solid grey",
          }}
        />
        <Button
          sx={{ width: "100%", marginTop: "24px", padding: "8px" ,background:'grey' ,color:'#eee'}}
          variant="filled"
        >
          SEND
        </Button>
      </Stack>

      <Stack sx={{
          marginTop:'48px',
          height:'80px'
      }}>
          <Typography>
              Powered by <span style={{
                  textDecoration:'underline'
              }}>w3.css</span>
          </Typography>
      </Stack>
    </Box>
  );
}
