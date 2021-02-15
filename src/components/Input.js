import React from "react";
import TextField from "@material-ui/core/TextField";
import PostAddIcon from "@material-ui/icons/PostAdd";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";

export default function({task, setTask, handleAdd}) {

    return(
        <Grid
            container
            style={{ margin: "4%" }}
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={1}></Grid>
            <Grid item xs={8}>
              <TextField
                style={{ color: "white" }}
                variant="filled"
                color="#cfd8dc"
                label="Add Item"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={2}>
              <Fab onClick={handleAdd}>
                <PostAddIcon />
              </Fab>
            </Grid>
        </Grid>
    );
}