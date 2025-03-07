import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { useForm } from "react-hook-form";
import StudentInputCard from "../../components/student/StudentCards/StudentInputCard";
const meta: Meta<typeof StudentInputCard> = {
    title: "inputs/StudentProfileInput",
    component: StudentInputCard,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

const Template: StoryFn = () => {
    const { control } = useForm<any>({
        defaultValues: {
            name_glb: { KR: "John" },
            nationality: "KO",
            birth_date: "2000-05-15",
            phone_number: "123-456-7890",
            emergency_contact: "987-654-3210",
            gender: 1,
            image: "https://via.placeholder.com/160",
            has_car: 1,
            keyword_list: ["자유", "평등", "박애"],
        },
    });

    return (
        <StudentInputCard
            control={control}
            {...{
                name_glb: { KO: "John" },
                nationality: "KO",
                birth_date: "2000-05-15",
                phone_number: "123-456-7890",
                emergency_contact: "987-654-3210",
                gender: 1,
                image: "https://via.placeholder.com/160",
                has_car: 1,
                keyword_list: ["자유", "평등", "박애"],
            }}
        />
    );
};

export const Default = Template.bind({});
