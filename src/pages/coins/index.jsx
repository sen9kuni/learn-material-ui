import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TableCoins from "./TableCoins";

const mdTheme = createTheme();
const timePeriodList = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];
const orderList = ["price", "marketCap", "24hVolume", "change", "listedAt"];
const limitList = [10, 20, 50, 100];

export default function CoinsMarket() {
  const [timePeriod, setTimePeriod] = useState("24h");
  const [orderBy, setOrderBy] = useState("marketCap");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [dataCoins, setDataCoins] = useState(null);

  const handleTimePeriod = (event) => {
    setTimePeriod(event.target.value);
  };
  const handleOrderBy = (event) => {
    setOrderBy(event.target.value);
  };
  const handleLimit = (event) => {
    setLimit(event.target.value);
  };
  const submitApply = () => {
    setPage(1);
    getData(timePeriod, limit, orderBy, page);
  };
  const handlePage = (e, p) => {
    setPage(p);
  };
  const fillData = (data) => {
    setDataCoins(data);
    setTotalPage(data?.data?.stats.total / limit);
  };

  const getData = async (pTime, pLimit, pOrder, pPage) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "99d0bade22mshfa07800dd3e1f5ep190e9djsn9bf681bfa5ad",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    const page = (pPage - 1) * pLimit;
    await fetch(
      `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${pTime}&tiers%5B0%5D=1&orderBy=${pOrder}&orderDirection=desc&limit=${pLimit}&offset=${page}`,
      options
    )
      .then((response) => response.json())
      .then((response) => fillData(response))
      // .then((response) => setTotalPage(response.data.stats.total / pLimit))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData(timePeriod, limit, orderBy, page);

    // if (dataCoins?.data.stats.total) {
    //   setTotalPage(dataCoins?.data.stats.total / limit);
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              minWidth: 120,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 3,
            }}
          >
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>Time Period</InputLabel>
              <Select value={timePeriod} onChange={handleTimePeriod}>
                {timePeriodList.map((time) => (
                  <MenuItem value={time}>{time}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>Order by</InputLabel>
              <Select value={orderBy} onChange={handleOrderBy}>
                {orderList.map((order) => (
                  <MenuItem value={order}>{order}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>Limit</InputLabel>
              <Select value={limit} onChange={handleLimit}>
                {limitList.map((limit) => (
                  <MenuItem value={limit}>{limit}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              variant="contained"
              sx={{ maxHeight: 40 }}
              onClick={submitApply}
            >
              Apply
            </Button>
          </Box>
          <Box sx={{ m: 5 }}>
            {dataCoins && <TableCoins data={dataCoins.data.coins} />}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 5,
            }}
          >
            {dataCoins?.data.stats.total && (
              <Pagination
                page={page}
                onChange={handlePage}
                count={Math.ceil(totalPage)}
              />
            )}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
