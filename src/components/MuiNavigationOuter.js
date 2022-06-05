import {
  BottomNavigation,
  BottomNavigationAction,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function MuiNavigationOuter() {
  const [bottomNavValue, setbottomNavValue] = useState(0);

  return (
    <Stack sx={{ width: "100%", height: "100vh" }}>
      <SpeedDial
        ariaLabel="Navigation speed dial"
        sx={{ position: "absolute", bottom: "66px", right: "16px" }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" />
        <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
      </SpeedDial>
      <BottomNavigation
        sx={{ width: "100%", position: "absolute", bottom: 0 }}
        value={bottomNavValue}
        onChange={(event, newValue) => setbottomNavValue(newValue)}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favorties" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
      </BottomNavigation>
    </Stack>
  );
}
