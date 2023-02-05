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

const Signup = (props: props) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);

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
    e.preventDefault()
    console.log(userId, password)
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
              label="お名前"
              variant="outlined"
              margin="normal"
              defaultValue={userId}
              onChange={e => {setUserId(e.target.value)}}
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