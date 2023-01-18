import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const moneyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function TableCoins({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Icon</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Symbol</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Tier</TableCell>
            <TableCell>Rank</TableCell>
            <TableCell>Market Cap</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data, i) => (
            <TableRow key={data.name}>
              <TableCell component="th" scope="row">
                {i + 1}
              </TableCell>
              <TableCell align="left">
                <Avatar src={data.iconUrl} alt={data.name} />
              </TableCell>
              <TableCell align="left">{data.name}</TableCell>
              <TableCell align="left">{data.symbol}</TableCell>
              <TableCell align="left">
                {moneyFormatter.format(data.price)}
              </TableCell>
              <TableCell align="left">{data.tier}</TableCell>
              <TableCell align="left">{data.rank}</TableCell>
              <TableCell align="left">{data.marketCap}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
