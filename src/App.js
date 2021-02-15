import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Input from './components/Input';
import TodoList from "./components/TodoList";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#eceff1"
    },
    secondary: {
      main: "#039be5"
    },
    error: {
      main: "#ef5350"
    }
  }
});

export default function LayoutTextFields() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const handleAdd = (e) => {
    if (task) setList([...list, task]);
    setTask("");
  };

  useEffect(() => {
    var label = document.querySelector("label.MuiFormLabel-root");
    var input = document.querySelector("input.MuiInputBase-input");
    var div = document.querySelector("div.MuiGrid-grid-xs-7");
    div.style.marginRight = "5%";
    label.style.color = "#b0bec5";
    input.style.color = "#eceff1";
  }, []);

  const handleDelete = (val) => {
    setList(list.filter((v) => v !== val));
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          padding: 20,
          color: "#eceff1",
        }}
      >
        <Grid container direction="row" justify="center" alignItems="center">
          <Input task={task} setTask={setTask} handleAdd={handleAdd} />
          <TodoList list={list} handleDelete={handleDelete} />
        </Grid>
      </div>
    </ThemeProvider>
  );
}
