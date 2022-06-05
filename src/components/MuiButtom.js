import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

import React, { useState } from "react";

export default function MuiButtom() {
  const [formats, setformats] = useState(null);

  const handleChangeFormat = (e, updatedFormat) => {
    setformats([]);
    setformats(updatedFormat);
  };

  console.log({formats});

  return (
    <Stack spacing={10} direction="column" p={2}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          text
        </Button>
        <Button variant="contained" startIcon={<WhatsAppIcon />}>
          contained
        </Button>
        <Button variant="outlined" disableElevation>
          outlined
        </Button>
        <IconButton disableRipple>
          <WhatsAppIcon />
        </IconButton>
      </Stack>
      <Stack>
        <ButtonGroup
          variant="text"
          orientation="horizontal"
          color="secondary"
          size="small"
        >
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          orientation="vertical"
          value={formats}
          onChange={handleChangeFormat}
          exclusive
        >
          <ToggleButton value="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}
