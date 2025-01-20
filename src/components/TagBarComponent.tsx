import { ArrowRight2 } from "iconsax-react-native";
import React from "react";
import RowComponent from "./RowComponent";
import { appColors } from "../constants/appColors";
import TextComponent from "./TextComponent";

interface Props {
    title: string;
    onPress: () => void;
}

const TagBarComponent = (props: Props) => {
    const {title, onPress} = props;

    return (
        <RowComponent
            onPress={onPress}
            styles={{marginBottom: 12, paddingHorizontal: 16}}>
            <TextComponent numberOfLine={1} size={18} title text={title} flex={10} />
            <RowComponent>
                <TextComponent text="See All" color={appColors.grey} />
                <ArrowRight2 variant="Bold" size={14} color={appColors.grey} />
            </RowComponent>
        </RowComponent>
    );
};

export default TagBarComponent;