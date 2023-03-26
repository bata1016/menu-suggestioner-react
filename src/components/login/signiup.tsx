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

import  { auth } from "../../firebase"
import { signin } from '../../models/auth/auth';

import { useState } from "react";

interface props  {
  changeShowLoginPage: () => void,
}

const ErrMsgs = {
  NoInputNameError: "ユーザー名を入力してください",
  NoInputEmailError: "メールアドレスを入力してください",
  NoInputPasswordError: "パスワードの入力が必須です。",
  NoInputConfirmationPasswordError: "確認用パスワードの入力が必須です。",
  DiffentPasswordError: "確認用のパスワードと一致しません。再度入力し直してください。"
}

const Signup = (props: props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPasswordPassword] = useState("");
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
    setIsError(errMsgs.length > 0);
    if (isError) {
      return;
    }
    e.preventDefault()
    console.log(name, email, password);
    signin(email, password);
  }

  const setIsError = (isError: boolean) => {
    isError = isError
  }

  const checkInput = (): void => {
    errMsgs = [""]
    if (!name) {
      errMsgs.push(ErrMsgs.NoInputNameError);
    }
    if (!email) {
      errMsgs.push(ErrMsgs.NoInputEmailError);
    }
    if (!password) {
      errMsgs.push(ErrMsgs.NoInputPasswordError);
    }
    if (!confirmationPassword) {
      errMsgs.push(ErrMsgs.NoInputConfirmationPasswordError);
    }
    if (password != confirmationPassword) {
      errMsgs.push(ErrMsgs.DiffentPasswordError);
    }
  }
  
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding={20}
    >
      <Card style={cardStyle}>
        <CardHeader title="アカウント新規作成" />
          <CardContent>
            <div>
            <TextField
                type={"text"}
                fullWidth
                label="ユーザー名"
                variant="outlined"
                margin="normal"
                defaultValue={name}
                onChange={e => {setName(e.target.value)}}
                inputProps = {{style:{WebkitBoxShadow: "0 0 0 1000px white inset"}}}
                required
              />
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
                label="登録するパスワード"
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
              <TextField
                type={showPassword ? "text": "password"}
                autoComplete={"false"}
                fullWidth
                label="確認用パスワード"
                variant="outlined"
                margin="normal"
                defaultValue={confirmationPassword}
                onChange={e => {setConfirmationPasswordPassword(e.target.value)}}
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
            </div>
          </CardContent>
          <CardActions>
            <div style={{marginLeft: "auto"}}>
              <Button
              variant="contained"
              size="large"
              onClick={handleSubmit}
              >
                登録する
              </Button>
            </div>
          </CardActions>
          <Link onClick={props.changeShowLoginPage}>すでにアカウントをお持ちの方はこちらからログイン</Link>
      </Card>
    </Box>
  )
}

export default Signup