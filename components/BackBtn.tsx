import { useRouter } from "expo-router";
import { useCallback, useRef } from "react";
import { Animated, Pressable, Image } from "react-native";

export default function BackBtn({ href }: { href: string }) {
    const router = useRouter();
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const onPressIn = useCallback(() => {
        Animated.spring(scaleAnim, {
            toValue: 0.9,
            useNativeDriver: true,
        }).start();
    }, []);

    const onPressOut = useCallback(() => {
        Animated.sequence([
            Animated.spring(scaleAnim, {
                toValue: 1.1,
                useNativeDriver: true,
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    const handlePress = useCallback(() => {
        router.replace(href);
    }, [href, router]);
    return (

        <Pressable onPressIn={onPressIn} onPressOut={onPressOut} onPress={handlePress}>
            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                <Image
                    source={require('@/assets/images/btn-back.png')}
                    style={{ width: 36, height: 36 }}
                />
            </Animated.View>
        </Pressable>
    )
}