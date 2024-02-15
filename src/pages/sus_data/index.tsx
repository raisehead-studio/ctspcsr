import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";

import { styled } from "@mui/material/styles";

import sus_data from "../../data/sus_data.json";

import Breadcrumb from "../../components/Breadcrumb";
import SideMenu from "../../components/SideMenu";

import layout from "../layout.module.scss";
import style from "./styles.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} id={`simple-tabpanel-${index}`} {...other}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function SusData() {
  const [index, setIndex] = useState("");
  const [year, setYear] = useState("");
  const [yearList, setYearList] = useState<string[]>([]);
  const [industry, setIndustry] = useState("");
  const [industries, setIndustries] = useState<string[]>([]);
  const [value, setValue] = useState(0);
  const [modalValue, setModalValue] = useState(0);
  const [num, setNum] = useState(0);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<any>([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const menu_zh = [
    {
      title: "ESG專區",
      sub: [
        {
          title: "園區廠商專區",
          path: "/csr_company_list",
        },
        {
          title: "永續資料庫",
          path: "/sus_data",
        },
        {
          title: "ESG學習專區",
          sub: [
            {
              title: "如何撰寫報告書",
              path: "/report_writing",
            },
            {
              title: "GRI準則2021改版",
              path: "/gri",
            },
            {
              title: "公司治理3.0-永續發展藍圖",
              path: "/goverance3.0",
            },
            {
              title: "上市櫃公司永續發展行動方案",
              path: "/plan",
            },
          ],
        },
      ],
    },
  ];
  const backgroundColor = [
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(255, 159, 64, 0.2)",
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
      },
    },
  };

  const handleChange = (_: any, newValue: number) => {
    setValue(newValue);
    setIndex("");
    setYear("");
    setIndustry("");
    setIndustries([]);
    setYearList([]);
  };

  const handleChangeModalTab = (_: any, newValue: number) => {
    setModalValue(newValue);
  };

  const handleChangeField = (e: any) => {
    const { name, value } = e.target;

    if (name === "index") {
      setIndex(value);
    } else if (name === "year") {
      setYear(value);
    } else if (name === "industry") {
      setIndustry(value);
    } else if (name === "industries") {
      const updateIndustries = [...industries];
      if (industries.includes(value)) {
        updateIndustries.splice(updateIndustries.indexOf(value), 1);
      } else {
        updateIndustries.push(value);
      }

      setIndustries(updateIndustries);
    } else if (name === "yearList") {
      const updateYearList = [...yearList];
      if (yearList.includes(value)) {
        updateYearList.splice(updateYearList.indexOf(value), 1);
      } else {
        updateYearList.push(value);
      }

      setYearList(updateYearList);
    }
  };

  const handleFilterData = () => {
    if (yearList.length !== 0) {
      const updateData = [...data];
      for (let i = 0; i < yearList.length; i++) {
        let val = Object.entries(
          sus_data[yearList[i] as keyof typeof sus_data]
        ).filter((c) => c[0] === industry)[0];

        updateData.push({
          label: yearList[i],
          data: [val[1][index as keyof typeof val[1]]],
          backgroundColor: backgroundColor[i],
        });
      }

      setData(updateData);
    } else {
      const updateData = [...data];
      for (let i = 0; i < industries.length; i++) {
        Object.entries(sus_data[year as keyof typeof sus_data]).map((c) => {
          if (c[0] === industries[i]) {
            updateData.push({
              label: c[0],
              data: [c[1][index as keyof typeof c[1]]],
              backgroundColor: backgroundColor[i],
            });
          }
        });
      }

      setData(updateData);
    }

    handleOpen();
  };

  return (
    <div className={layout.page_layout}>
      <div className={layout.page_content}>
        <div className={layout.page_header}>
          <strong>永續資料庫</strong>
          <Breadcrumb />
        </div>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              borderBottom: 1,
              my: "5px",
              borderColor: "#a5c33c",
              mb: "20px",
            }}>
            <StyledTabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example">
              <StyledTab label="依指標統計" />
              <StyledTab label="依產業統計" />
            </StyledTabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className={style.sus_data_container}>
              <div className={style.sus_data_container_header}>
                <h4>依指標來統計：</h4>
              </div>
              <div className={style.selection_container}>
                <label>指標內容</label>
                <StyledSelect
                  value={index}
                  size="small"
                  defaultValue={index}
                  fullWidth
                  displayEmpty
                  onChange={handleChangeField}
                  name="index">
                  <MenuItem value="">
                    <em>請選擇一項指表</em>
                  </MenuItem>
                  <MenuItem value="營業額">營業額</MenuItem>
                  <MenuItem value="員工人數">員工人數</MenuItem>
                  <MenuItem value="溫室氣體排放強度">溫室氣體排放強度</MenuItem>
                  <MenuItem value="能源強度">能源強度</MenuItem>
                  <MenuItem value="用水強度">用水強度</MenuItem>
                  <MenuItem value="廢棄物再利用率">廢棄物再利用率</MenuItem>
                </StyledSelect>
              </div>
              <div className={style.selection_container}>
                <label>年份</label>
                <StyledSelect
                  value={year}
                  size="small"
                  defaultValue={year}
                  fullWidth
                  displayEmpty
                  onChange={handleChangeField}
                  name="year">
                  <MenuItem value="">
                    <em>選擇年份</em>
                  </MenuItem>
                  <MenuItem value="2022">2022</MenuItem>
                  <MenuItem value="2021">2021</MenuItem>
                  <MenuItem value="2020">2020</MenuItem>
                  <MenuItem value="2019">2019</MenuItem>
                  <MenuItem value="2018">2018</MenuItem>
                  <MenuItem value="2017">2017</MenuItem>
                  <MenuItem value="2016">2016</MenuItem>
                  <MenuItem value="2015">2015</MenuItem>
                </StyledSelect>
              </div>
              <FormControl className={style.checkbox_container}>
                <FormLabel component="legend">
                  產業名稱（可複選）：<span>至少勾選一項</span>
                </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="industries"
                        value="積體電路"
                        onChange={handleChangeField}
                        checked={industries.includes("積體電路")}
                      />
                    }
                    label="積體電路"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="industries"
                        value="光電產業"
                        onChange={handleChangeField}
                        checked={industries.includes("光電產業")}
                      />
                    }
                    label="光電產業"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="industries"
                        value="生物科技"
                        onChange={handleChangeField}
                        checked={industries.includes("生物科技")}
                      />
                    }
                    label="生物科技"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="industries"
                        value="通訊產業"
                        onChange={handleChangeField}
                        checked={industries.includes("通訊產業")}
                      />
                    }
                    label="通訊產業"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="industries"
                        value="精密機械"
                        onChange={handleChangeField}
                        checked={industries.includes("精密機械")}
                      />
                    }
                    label="精密機械"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="industries"
                        value="電腦及週邊"
                        onChange={handleChangeField}
                        checked={industries.includes("電腦及週邊")}
                      />
                    }
                    label="電腦及週邊"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="industries"
                        value="電腦及週邊其他園區事業"
                        onChange={handleChangeField}
                        checked={industries.includes("電腦及週邊其他園區事業")}
                      />
                    }
                    label="電腦及週邊其他園區事業"
                  />
                </FormGroup>
              </FormControl>
              <div className={style.menu_button}>
                <Button
                  variant="contained"
                  onClick={handleFilterData}
                  startIcon={<SearchIcon />}
                  sx={
                    industries.length === 0 && index && year
                      ? {
                          backgroundColor: "#005752",
                          borderRadius: "0px",
                          opacity: "0.5",
                        }
                      : {
                          backgroundColor: "#005752",
                          borderRadius: "0px",
                        }
                  }
                  disabled={industries.length === 0 ? true : false}>
                  篩選
                </Button>
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className={style.sus_data_container}>
              <div className={style.sus_data_container_header}>
                <h4>依產業來統計：</h4>
              </div>
              <div className={style.selection_container}>
                <label>產業名稱</label>
                <StyledSelect
                  value={industry}
                  size="small"
                  defaultValue={industry}
                  fullWidth
                  displayEmpty
                  onChange={handleChangeField}
                  name="industry">
                  <MenuItem value="">
                    <em>請選擇一項指表</em>
                  </MenuItem>
                  <MenuItem value="積體電路">積體電路</MenuItem>
                  <MenuItem value="光電產業">光電產業 </MenuItem>
                  <MenuItem value="生物科技">生物科技</MenuItem>
                  <MenuItem value="通訊產業">通訊產業</MenuItem>
                  <MenuItem value="精密機械">精密機械</MenuItem>
                  <MenuItem value="電腦及週邊">電腦及週邊</MenuItem>
                  <MenuItem value="其他園區事業">其他園區事業</MenuItem>
                </StyledSelect>
              </div>
              <div className={style.selection_container}>
                <label>指標內容</label>
                <StyledSelect
                  value={index}
                  size="small"
                  defaultValue={index}
                  fullWidth
                  displayEmpty
                  onChange={handleChangeField}
                  name="index">
                  <MenuItem value="">
                    <em>請選擇一項指表</em>
                  </MenuItem>
                  <MenuItem value="營業額">營業額</MenuItem>
                  <MenuItem value="員工人數">員工人數</MenuItem>
                  <MenuItem value="溫室氣體排放強度">溫室氣體排放強度</MenuItem>
                  <MenuItem value="能源強度">能源強度</MenuItem>
                  <MenuItem value="用水強度">用水強度</MenuItem>
                  <MenuItem value="廢棄物再利用率">廢棄物再利用率</MenuItem>
                </StyledSelect>
              </div>
              <FormControl className={style.checkbox_container}>
                <FormLabel component="legend">
                  統計年度（可複選）：<span>至少勾選一項</span>
                </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="yearList"
                        value="2015"
                        onChange={handleChangeField}
                        checked={yearList.includes("2015")}
                      />
                    }
                    label="2015"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="yearList"
                        value="2016"
                        onChange={handleChangeField}
                        checked={yearList.includes("2016")}
                      />
                    }
                    label="2016"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="yearList"
                        value="2017"
                        onChange={handleChangeField}
                        checked={yearList.includes("2017")}
                      />
                    }
                    label="2017"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="yearList"
                        value="2018"
                        onChange={handleChangeField}
                        checked={yearList.includes("2018")}
                      />
                    }
                    label="2018"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="yearList"
                        value="2019"
                        onChange={handleChangeField}
                        checked={yearList.includes("2019")}
                      />
                    }
                    label="2019"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="yearList"
                        value="2020"
                        onChange={handleChangeField}
                        checked={yearList.includes("2020")}
                      />
                    }
                    label="2020"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="yearList"
                        value="2021"
                        onChange={handleChangeField}
                        checked={yearList.includes("2021")}
                      />
                    }
                    label="2021"
                  />
                </FormGroup>
              </FormControl>
              <div className={style.menu_button}>
                <Button
                  variant="contained"
                  onClick={handleFilterData}
                  startIcon={<SearchIcon />}
                  sx={
                    yearList.length === 0 && index && industry
                      ? {
                          backgroundColor: "#005752",
                          borderRadius: "0px",
                          opacity: "0.5",
                        }
                      : {
                          backgroundColor: "#005752",
                          borderRadius: "0px",
                        }
                  }>
                  篩選
                </Button>
              </div>
            </div>
          </CustomTabPanel>
        </Box>
      </div>
      <div className={layout.page_sidemenu}>
        <SideMenu />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}>
        <Fade in={open}>
          <Box
            sx={{
              width: "50vw",
              minHeight: "50vh",
              backgroundColor: "#fff",
              zIndex: "9999",
              position: "absolute",
              borderRadius: "15px",
              padding: "15px",
              left: "25vw",
              top: "15vh",
            }}>
            <div className="modal_header">
              <h3>
                {year} {industry} {index}
              </h3>
            </div>
            <Box>
              <Box
                sx={{
                  borderBottom: 1,
                  my: "5px",
                  borderColor: "#a5c33c",
                  mb: "20px",
                }}>
                <StyledTabs
                  value={modalValue}
                  onChange={handleChangeModalTab}
                  aria-label="basic tabs example">
                  <StyledTab label="柱狀圖" />
                  <StyledTab label="折線圖" />
                  <StyledTab label="圓餅圖" />
                  <StyledTab label="Excel 匯出" />
                </StyledTabs>
                <CustomTabPanel value={modalValue} index={0}>
                  <Bar
                    options={options}
                    data={{
                      labels: [index],
                      datasets: data,
                    }}
                  />
                </CustomTabPanel>
                <CustomTabPanel value={modalValue} index={1}>
                  <Line
                    options={options}
                    data={{
                      labels: data.map((i: any) => i.label),
                      datasets: [
                        {
                          label: index,
                          data: data.map((i: any) => i.data[0]),
                          borderColor: backgroundColor[0],
                        },
                      ],
                    }}
                  />
                </CustomTabPanel>
                <CustomTabPanel value={modalValue} index={2}>
                  <Box
                    sx={{
                      width: "40vw",
                      height: "40vh",
                      padding: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    <Pie
                      options={options}
                      data={{
                        labels: data.map((i: any) => i.label),
                        datasets: [
                          {
                            label: index,
                            data: data.map((i: any) => i.data[0]),
                            backgroundColor: [
                              "rgba(255, 99, 132, 0.2)",
                              "rgba(54, 162, 235, 0.2)",
                              "rgba(255, 206, 86, 0.2)",
                              "rgba(75, 192, 192, 0.2)",
                              "rgba(153, 102, 255, 0.2)",
                              "rgba(255, 159, 64, 0.2)",
                            ],
                            borderColor: [
                              "rgba(255, 99, 132, 1)",
                              "rgba(54, 162, 235, 1)",
                              "rgba(255, 206, 86, 1)",
                              "rgba(75, 192, 192, 1)",
                              "rgba(153, 102, 255, 1)",
                              "rgba(255, 159, 64, 1)",
                            ],
                            borderWidth: 1,
                          },
                        ],
                      }}
                    />
                  </Box>
                </CustomTabPanel>
                <CustomTabPanel value={modalValue} index={3}>
                  <Button></Button>
                </CustomTabPanel>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    display: "none",
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: "#000",
  "&.Mui-selected": {
    color: "#fff",
    backgroundColor: "#a5c33c",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  ".Mui-focused": {
    borderColor: "red",
  },
  ".MuiOutlinedInput-notchedOutline": {
    color: "red",
    ".Mui-focused": {
      color: "red",
    },
  },
}));

export default SusData;
