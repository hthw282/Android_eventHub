import {
    View,
    StyleProp,
    ViewStyle,
    TextStyle,
    TouchableOpacity,
    TextBase,
} from 'react-native';
import React, {ReactNode} from 'react';
import { TextComponent } from 'react-native';
import { globalStyles } from '../styles/globalStyle';
import { appColors } from '../constants/appColors';
import { fontFamilies } from '../constants/fontFamilies';

interface Props {
    icon?: ReactNode;
    text: string;
    type?: 'primary' | 'text' | 'link';
    color?: string;
    styles?: StyleProp<ViewStyle>;
    textColor?: string;
    textStyle?: StyleProp<TextStyle>;
    textFont?: string;
    onPress?: () => void;
    iconFlex?: 'right' | 'left';
    disable?: boolean;
}
const ButtonComponent = (props: Props) => {
    const {
        icon,
        text,
        textColor,
        textStyle,
        textFont,
        color,
        styles,
        onPress,
        iconFlex,
        type,
        disable,
    } = props;

    return type === 'primary' ? (
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity
                disabled={disable}
                onPress={onPress}
                style={[
                    globalStyles.button,
                    globalStyles.shadow,
                    {
                        backgroundColor: color
                            ? color
                            : disable
                            ? appColors.grey4
                            : appColors.primary,
                        marginBottom: 17,
                        width: '90%',
                    },
                    styles,
                ]}>
                {icon && iconFlex === 'left' && icon}
                <TextComponent
                    text={text}
                    color={textColor ?? appColors.white}
                    styles={[
                        textStyle,
                        {
                            marginLeft: icon ? 12 : 0,
                            fontSize: 16,
                            TextAlign: ' center',
                        },
                    ]}
                    flex={icon && iconFlex === 'right' ? 1 : 0}
                    font={textFont ?? fontFamilies.medium}
                />
                {icon && iconFlex === 'right' && icon}
                </TouchableOpacity>
        </View>
    ) : (
        <TouchableOpacity onPress={onPress}>
            <TextComponent
                flex = {0}
                text={text}
                color={type === 'link' ? appColors.primary : appColors.text}
            />
        </TouchableOpacity>
    );
};

export default ButtonComponent;