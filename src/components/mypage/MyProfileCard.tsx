import React, { useState } from "react";
import { Card, CardMedia } from "@mui/material";
import MyProfileCardContent from "./MyProfileCardContent/MyProfileCardContent";
import MyProfileInputCardContent from "./MyProfileCardContent/MyProfileInputCardContent";
import EditableCardHeader from "../input/EditableCardHeader";
import { useForm } from "react-hook-form";
import "@fontsource/noto-sans-kr";

import type { MyProfileCardData } from "./MyProfileCardContent/MyProfileCard.types";
import type { FieldValues } from "react-hook-form";
export interface MyProfileCardProps extends MyProfileCardData {
    isEditMode?: boolean;
    onClickSaveIcon?: React.MouseEventHandler;
}

const MyProfileCard = ({
    isEditMode = false,
    onClickSaveIcon,
    ...props
}: MyProfileCardProps) => {
    const [editMode, setEditMode] = useState(isEditMode);
    const { control } = useForm<MyProfileCardData>({
        defaultValues: props,
    });
    return (
        <Card
            sx={{
                maxWidth: {
                    xs: "100%",
                    sm: "300px",
                },
                position: "relative",
            }}
        >
            <CardMedia
                image={`image/profile_background.png`}
                sx={{
                    height: "140px",
                    objectFit: "cover",
                    backgroundPosition: "bottom",
                }}
            ></CardMedia>
            <EditableCardHeader
                editMode={editMode}
                disabled={false}
                onClickCloseIcon={() => setEditMode(false)}
                onClickEditIcon={() => setEditMode(true)}
                onClickSaveIcon={onClickSaveIcon}
            />
            {editMode === false ? (
                <MyProfileCardContent {...props} />
            ) : (
                <MyProfileInputCardContent {...props} control={control} />
            )}
        </Card>
    );
};

export default MyProfileCard;
