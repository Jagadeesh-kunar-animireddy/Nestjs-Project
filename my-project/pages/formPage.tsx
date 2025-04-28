

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { TextField } from '@mui/material';


// export default function FormPage() {
//   return (
//     <>
//       <h1>Form Page</h1>
//       <Card variant="outlined">

//       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" />

//       </Card>
//       <p>This is the form page.</p>

//     </>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const card = (
    <React.Fragment>
        <CardContent style={{display: 'flex', flexDirection: 'column'} }>
            <TextField style={{margin:"10px 55px"}} id="outlined-basic" label="Title" variant="outlined" />
            <TextField style={{margin:"10px 55px"}} id="outlined-basic" label="Description" variant="outlined" />
            <TextField style={{margin:"10px 55px"}} id="outlined-basic" label="Status" variant="outlined" />
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </React.Fragment>
);

export default function OutlinedCard() {
    return (
        <Box style={{ margin: '100px 300px' }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}
