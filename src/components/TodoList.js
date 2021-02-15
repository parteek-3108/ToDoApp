import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import Grid from "@material-ui/core/Grid";

const TodoList = ({list, handleDelete}) => {
    return(
        <Grid item xs={7}>
            <List>
              {list.map((val, i) => {
                return (
                  <ListItem key={val}>
                    <ListItemText primary={val} color="primary" />
                    <ListItemSecondaryAction onClick={() => handleDelete(val)}>
                      <IconButton edge="end">
                        <DeleteOutlinedIcon
                          color="error"
                          style={{ fontSize: 30 }}
                        />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
            </List>
        </Grid>
    );
}

export default TodoList;