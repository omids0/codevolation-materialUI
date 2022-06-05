import {
  Badge,
  Stack,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import { tableData } from "../utils/tableData";

console.log(tableData);

export default function MuiDataDisplay() {
  return (
    <Stack>
      <Stack spacing={2} direction="row" p={2}>
        <Badge badgeContent={400} color="error">
          <MailIcon />
        </Badge>
        <Badge variant="dot" color="error" invisible={false}>
          <MailIcon />
        </Badge>
      </Stack>
      <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
        <List>
          <ListItem>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="List item 1" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="List item 2" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="List item 3" />
          </ListItem>
        </List>
      </Box>
      <Stack Width="900px" overflowX='scroll' margin="auto" sx={{overflowX: 'scroll'}}>
        <TableContainer component={Paper} sx={{maxHeight: '300px'}}>
          <Table aria-label="simple table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Firstname</TableCell>
                <TableCell>Lastname</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.first_name}</TableCell>
                  <TableCell>{row.last_name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
}
