import React from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  InputAdornment,
  IconButton,
  Link
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { login } from '../../models/auth/auth';

interface props  {
  changeShowLoginPage: () => void,
}

const ErrMsgs = {
  NoInputEmailError: "メールアドレスを入力してください",
  NoInputPasswordError: "パスワードの入力が必須です。",
}

const Login = (props: props) => {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setshowPassword] = useState(false);


  let errMsgs = [''];
  let isError = false;

  const cardStyle = {
    display: "block",
    transitionDuration: "0.3s",
    height: "450px",
    width: "400px",
    variant: "outlined",
  };

  const handleShowPassword = (): void => {
    setshowPassword(!showPassword);
  }

  const handleSubmit = (e: any): void => {
    checkInput();
    setIsError(errMsgs.length >= 1);
    if (isError) {
      return;
    }
    e.preventDefault()
    login(email, password);
  }

  const setIsError = (isError: boolean) => {
    isError = isError
  }

  const checkInput = (): void => {
    errMsgs = [""]
    if (!email) {
      errMsgs.push(ErrMsgs.NoInputEmailError);
    }
    if (!password) {
      errMsgs.push(ErrMsgs.NoInputPasswordError);
    }
    return
  }
  
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding={20}
    >
      <Card style={cardStyle}>
        <CardHeader title="ログイン" />
          <CardContent>
              {/* {(errMsgs.length > 0) ? () => {
                const items = [];
                for (let i = 0; i < errMsgs.length; i++) {
                    items.push(<p>{errMsgs[i]}</p>)
                }
                return <ul>{items}</ul>;
            }: null} */}
              <TextField
              type={"text"}
              fullWidth
              label="メールアドレス"
              variant="outlined"
              margin="normal"
              defaultValue={email}
              onChange={e => {setEmail(e.target.value)}}
              inputProps = {{style:{WebkitBoxShadow: "0 0 0 1000px white inset"}}}
              required
              />
              <TextField
              type={showPassword ? "text": "password"}
              autoComplete={"false"}
              fullWidth
              label="パスワード"
              variant="outlined"
              margin="normal"
              defaultValue={password}
              onChange={e => {setPassword(e.target.value)}}
              inputProps = {{style:{WebkitBoxShadow: "0 0 0 1000px white inset"}}}
              InputProps={
                {
                  endAdornment:
                  <InputAdornment position="end" color="inherit">
                    <IconButton
                      onClick={handleShowPassword}
                    >
                      {showPassword ? <Visibility/ > : <VisibilityOff/ >}
                    </IconButton>
                  </InputAdornment>
                }
              }
              required
              />
          </CardContent>
          <CardActions>
            <div style={{marginLeft: "auto"}}>
              <Button
              variant="contained"
              size="large"
              onClick={handleSubmit}
              >
                ログイン
              </Button>
            </div>
          </CardActions>
          <Link onClick={props.changeShowLoginPage}>登録がお済みでない方はこちらをクリック</Link>
      </Card>
    </Box>
  )
}

export default Login