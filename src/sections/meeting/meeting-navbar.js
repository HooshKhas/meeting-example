import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Stack, Tooltip, Typography, Box } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { neutral, text } from "src/theme/colors";
import { paths } from "src/paths";
import { RouterLink } from "src/hook/router-link";

const NavbarItem = ({
    meeting,
    activeStep,
    step,
    title,
    description,
    sx,
    onClick
}) => {
    const isActiveCart = () => activeStep === step;

    return (
        <Stack
            justifyContent={"space-between"}
            direction={"row"}
            p={"10px"}
            sx={{
                width: "100%",
                height: "95px",
                border: `1px solid ${neutral[300]}`,
                borderBottom: (theme) => isActiveCart() ? `2.5px solid ${theme.palette.primary.main}` : "",
                cursor: "pointer",
                ...sx,
            }}
            onClick={onClick}
        >
            <Stack alignItems={"start"} justifyContent={"start"}>
                <Typography
                    color={(theme) => step <= meeting?.step ? theme.palette.success.main : neutral[400]}
                    sx={{ fontSize: "14px", fontWeight: 500 }}
                >
                    {step <= meeting?.step ? "تکمیل شده" : "در حال تکمیل"}
                </Typography>

                <Typography
                    color={isActiveCart() || activeStep > step ? text[200] : neutral[400]}
                    sx={{ fontSize: "18px", fontWeight: 700 }}
                >
                    {title}
                </Typography>

                <Typography
                    color={isActiveCart() || activeStep > step ? neutral[400] : text[50]}
                    sx={{ fontSize: "14px", fontWeight: 400 }}
                >
                    {description}
                </Typography>
            </Stack>

            {step <= meeting?.step ? <CheckOutlinedIcon sx={{ color: (theme) => isActiveCart() ? theme.palette.success.main : text[50] }} /> : (
                <Typography color={text[50]}>
                    <MoreHorizIcon />
                </Typography>
            )}
        </Stack>
    );
};

export const MeetingNavbar = ({ navbarItems, activeStep }) => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            sx={{
                width: "100%",
                height: "95px",
            }}
        >
            <Stack
                justifyContent="center"
                alignItems="center"
                sx={{
                    minWidth: "100px",
                    height: "95px",
                    border: `1px solid ${neutral[300]}`,
                    flexShrink: 0,
                }}
            >
                <Tooltip title="بازگشت به لیست جلسات">
                    <div>
                        <IconButton
                            component={RouterLink}
                            href={paths.index}
                        >
                            <CloseIcon sx={{ color: text[200] }} />
                        </IconButton>
                    </div>
                </Tooltip>
            </Stack>

            <Box
                sx={{
                    flex: 1,
                    overflowX: "auto",
                    overflowY: "hidden",
                    whiteSpace: "nowrap",
                    display: "flex",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                    justifyContent: "space-between"
                }}
            >
                {navbarItems.map((item, index) => (
                    <NavbarItem
                        key={index}
                        activeStep={activeStep}
                        step={index + 1}
                        title={item.title}
                        description={item.description}
                        meeting={{ step: 5 }}
                    />
                ))}
                <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction="row"
                    sx={{
                        backgroundColor: text[0],
                        height: "95px",
                        p: "10px 20px",
                        gap: "5px",
                        minWidth: "220px",
                        border: `1px solid ${neutral[300]}`,
                        flexShrink: 0,
                    }}
                >
                    <Typography color={text[100]}>اتمام و چاپ صورت جلسه</Typography>
                    <PrintIcon sx={{ color: text[100] }} />
                </Stack>
            </Box>
        </Stack>
    );
};
