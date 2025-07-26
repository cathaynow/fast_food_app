import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native'
import {CustomButtonProps} from "@/type";
import cn from "clsx";
import {is} from "@babel/types";

const CustomButton = ({
                          onPress,
                          title = "Click Me",
                          style,
                          textStyle,
                          leftIcon,
                          isLoading = false
                      }: CustomButtonProps) => {
    return (
        <TouchableOpacity className={cn('custom-btn', style)} onPress={onPress}>

            {leftIcon}

            <View className="flex-center flew-row">
                {isLoading ? (
                    <ActivityIndicator size="small" color="white"/>
                ) : <Text className={cn('text-white-100 paragraph-semibold', textStyle)}>
                    {title}
                </Text>}
            </View>
        </TouchableOpacity>
    )
}
export default CustomButton
