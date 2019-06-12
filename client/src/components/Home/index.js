import React from 'react';
import './styles.scss';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Chart from '@material-ui/icons/InsertChart';
import Smiley from '@material-ui/icons/InsertEmoticon';
import Calendar from '@material-ui/icons/InsertInvitation';

const useStyles = makeStyles({
  root: {
    // flexGrow: 1,
    // width: '100%',
    // maxWidth: 500
  }
});

export default function Home() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Paper square className={classes.root}>
      <Tabs value={value} onChange={handleChange} variant="fullWidth" indicatorColor="secondary" textColor="secondary">
        <Tab icon={<Smiley />} label="Today" />
        <Tab icon={<Chart />} label="Statistics" />
        <Tab icon={<Calendar />} label="Calendar" />
      </Tabs>
    </Paper>
  );
}
// export default function Home() {
//   return <div>home</div>;
// }
