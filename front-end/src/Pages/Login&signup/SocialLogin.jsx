import { Box, Button, Stack } from "@chakra-ui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import {
  signInWithFacebook,
  signInWithGoogle,
} from "./../../../../Redux/Users/Login/login.action";
import { useDispatch } from "react-redux";
const SocialLogin = () => {
  const dispatch = useDispatch();
  const handleGoogle = () => {
    dispatch(signInWithGoogle());
  };
  const handleFacebook = () => {
    dispatch(signInWithFacebook());
  };

  return (
    <Box w={"95%"} m={"auto"} mt={4}>
      <Stack variant="outline" w={"full"} direction="column" spacing={4}>
        <Button
          onClick={handleGoogle}
          bg="white"
          border={"0.5px solid black"}
          rounded={"full"}
          leftIcon={<FcGoogle  />}
        >
          Continue with Google
        </Button>

        <Button
          onClick={handleFacebook}
          bg="white"
          border={"0.5px solid black"}
          rounded={"full"}
          leftIcon={<BsFacebook color="blue" />}
        >
          Continue with Facebook
        </Button>
      </Stack>
    </Box>
  );
};

export default SocialLogin;
