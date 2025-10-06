import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { neutral, text } from "src/theme/colors";


const RenderStep = ({ step, activeStep }) => {
    const theme = useTheme()
    const getStepStyle = () => {
        if (step === activeStep) {
            return {
                border: `1px solid ${theme.palette.primary.main}`,
                backgroundColor: theme.palette.primary.main,
                textColor: theme.palette.grey[50],
            };
        } else if (step < activeStep) {
            return {
                border: `1px solid ${theme.palette.success.light}`,
                backgroundColor: theme.palette.success.light,
                textColor: theme.palette.success.light,
            };
        } else {
            return {
                border: `1px solid ${neutral[300]}`,
                backgroundColor: theme.palette.common.white,
                textColor: neutral[400],
            };
        }
    };

    const stepStyle = getStepStyle();

    return (
        <Stack
            justifyContent={"center"}
            sx={{
                borderRadius: "50%",
                width: "45px",
                height: "45px",
                border: stepStyle.border,
                backgroundColor: stepStyle.backgroundColor,
            }}
        >
            <Typography
                justifyContent={"center"}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: "transparent",
                    color: stepStyle.textColor,
                    lineHeight: "45px",
                }}
            >
                {step < activeStep ? (
                    <DoneIcon sx={{ color: theme.palette.success.dark }} />
                ) : (
                    step
                )}
            </Typography>
        </Stack>
    );
};

export const MeetingSideBar = ({ activeStep, subSteps }) => {
    return (
        <Stack
            justifyContent={"space-between"}
            alignItems={"start"}
            sx={{
                width: "100%",
                position: "relative",
            }}
        >
            <Box
                sx={{
                    width: "1px",
                    height: "99%",
                    backgroundColor: neutral[300],
                    position: "absolute",
                    right: "22.5px",
                    zIndex: "-1",
                }}
            />

            {subSteps.map((item, index) => (
                <Stack
                    direction={"row"}
                    justifyContent={"start"}
                    key={index}
                    sx={{
                        mb: index === subSteps.length - 1 ? "0" : "30px",
                        width: 350,
                    }}
                >
                    <RenderStep step={index + 1} activeStep={activeStep} />

                    <Stack
                        justifyContent={"start"}
                        alignItems={"start"}
                        sx={{ mr: "20px" }}
                    >
                        <Typography
                            fontWeight={"bold"}
                            sx={{
                                color: (theme) => activeStep === item.step ? theme.palette.primary.main : neutral[400],
                            }}
                        >
                            {item.label}
                        </Typography>

                        <Typography
                            sx={{
                                color:
                                    activeStep === item.step
                                        ? neutral[400]
                                        : text[50],
                            }}
                        >
                            {item.description}
                        </Typography>

                        {activeStep > item.step && (
                            <Typography
                                fontWeight={"bold"}
                                sx={{
                                    color: (theme) => theme.palette.success.main,
                                }}
                            >
                                تکمیل شد
                            </Typography>
                        )}
                    </Stack>
                </Stack>
            ))}
        </Stack>
    );
};