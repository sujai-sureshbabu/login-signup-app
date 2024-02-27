
import React, {useState} from 'react';
import { Input, TextField, Button } from '@mui/material';



export interface IAppProps {
}

export function Tasks (props: IAppProps) {

  const[todo, setToDo] = useState<string>();

  return (
    <div>
      <TextField fullWidth label="To do items" id="fullWidth" />
      <br/><br/>
      <Button variant="outlined" color="primary">
      Add ToDo Items
      </Button>
    </div>
  );
}



export default Tasks;

