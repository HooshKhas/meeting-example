import { Box, Stack } from '@mui/material';
import { Seo } from 'src/components/seo';
import { MeetingNavbar } from 'src/sections/meeting/meeting-navbar';
import { usePageView } from 'src/hook/use-page-view';
import { MeetingSideBar } from 'src/sections/meeting/meeting-sidebar';

const Page = () => {
    const navbarItems = [
        {
            title: "1. بارگذاری فایل و اعضا",
            description: "بارگذاری فایل صوت، تعیین اعضا"
        },
        {
            title: "2. بازبینی متن جلسه",
            description: "بازبینی و ویرایش مشروح مذاکرات"
        },
        {
            title: "3. تولید پیشنویس",
            description: "ایجاد پیشنویس اولیه جلسه"
        },
        {
            title: "4. خلاصه و مصوبات",
            description: "مرور و تایید خروجی استخراج شده سامانه"
        },
        {
            title: "5. نهایی سازی و چاپ",
            description: "تنظیم و آماده سازی چاپ صورت جلسه"
        }
    ]

    const subSteps = [
        {
            label: "اطلاعات 1",
            description: "اطلاعات شماره 1 را وارد کنید.",
            step: 1,
        },
        {
            label: "اطلاعات 2",
            description: "اطلاعات شماره 1 را وارد کنید.",
            step: 2,
        },
    ];

    usePageView();

    return (
        <>
            <Seo title={"تولید پیشنویس جلسه"} />
            <Box component="main" width={"100%"} height={"100%"}>
                <Box width={"100%"} height={"100%"}>
                    <MeetingNavbar
                        activeStep={4}
                        navbarItems={navbarItems}
                    />
                    <Stack
                        direction={"row"}
                        spacing={6}
                        p={3}
                        height={"100%"}
                    >
                        <div>
                            <MeetingSideBar
                                activeStep={1}
                                subSteps={subSteps}
                            />
                        </div>
                    </Stack>
                </Box>
            </Box>
        </>
    );
};

export default Page;

