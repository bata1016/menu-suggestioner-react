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

interface props  {
  changeShowLoginPage: () => void,
}

const ErrorMessages = {
  NoInputNameError: "名前を入力してください",
  NoInputPasswordError: "パスワードの入力が必須です。",
  NoInputConfirmationPasswordError: "確認用パスワードの入力が必須です。",
  DiffentPasswordError: "確認用のパスワードと一致しません。再度入力し直してください。"
}

const Login = (props: props) => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);


  let errorMessages = [''];
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
    errorMessages = checkInput();
    if (errorMessages.length >= 1) {
      showErrorMesage();
      return
    }
    e.preventDefault()
    console.log(userName, password)
  }

  const showErrorMesage = () => {
    isError = true
  }

  const checkInput = (): string[] => {
    let errorMessages = ['']
    if (!userName) {
      errorMessages.push(ErrorMessages.NoInputNameError);
    }
    if (!password) {
      errorMessages.push(ErrorMessages.NoInputPasswordError);
    }
    if (password != confirmationPassword) {
      errorMessages.push(ErrorMessages.NoInputConfirmationPasswordError);
    }
    return errorMessages;
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
              {/* {(errorMessages.length > 0) ? () => {
                const items = [];
                for (let i = 0; i < errorMessages.length; i++) {
                    items.push(<p>{errorMessages[i]}</p>)
                }
                return <ul>{items}</ul>;
            }: null} */}
              <TextField
              type={"text"}
              fullWidth
              label="お名前"
              variant="outlined"
              margin="normal"
              defaultValue={userName}
              onChange={e => {setUserName(e.target.value)}}
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
          <Link onClick={props.changeShowLoginPage}>ログインがお済みでない方はこちらをクリック</Link>
      </Card>
    </Box>
  )
}

export default Login