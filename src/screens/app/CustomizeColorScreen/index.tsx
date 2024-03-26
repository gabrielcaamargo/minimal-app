import { useThemeStore } from '@/hooks/store/useThemeStore';
import { orangeTheme, purpleTheme, blueTheme, pinkTheme } from '@theme/index';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
type TThemeType = 'orange' | 'purple' | 'pink' | 'blue'

import AsyncStorage from '@react-native-async-storage/async-storage';

import * as Styled from './styles';

import { Text } from '@/components/common/Text';
import { Button } from '@/components/common/Button';
import { TAppNavigationProps } from '@/routes/AppRoutes';

export function CustomizeColorScreen() {
  const navigation = useNavigation<TAppNavigationProps>();
  const { setTheme, theme } = useThemeStore();

  function handleSelectAppTheme(theme: TThemeType) {
    if(theme === 'orange') return setTheme(orangeTheme);
    if(theme === 'purple') return setTheme(purpleTheme);
    if(theme === 'pink') return setTheme(pinkTheme);
    if(theme === 'blue') return setTheme(blueTheme);
  }

  useFocusEffect(() => {
    return () => {
      AsyncStorage.setItem('@theme', JSON.stringify(theme));
    };
  });

  function navigate() {
    navigation.navigate('CreateProfile');
  }

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Header>
          <Text variant='pageTitle'>
        Customize
          </Text>

          <Text>
            Which color way do you prefer?
          </Text>
        </Styled.Header>

        <Styled.ColorsContainer>
          <Styled.ColorButton
            backgroundColor={purpleTheme.colors.primary[400]}
            onPress={() => handleSelectAppTheme('purple')}
          />
          <Styled.ColorButton
            backgroundColor={orangeTheme.colors.primary[400]}
            onPress={() => handleSelectAppTheme('orange')}
          />
        </Styled.ColorsContainer>
        <Styled.ColorsContainer>
          <Styled.ColorButton
            backgroundColor={pinkTheme.colors.primary[400]}
            onPress={() => handleSelectAppTheme('pink')}
          />
          <Styled.ColorButton
            backgroundColor={blueTheme.colors.primary[400]}
            onPress={() => handleSelectAppTheme('blue')}
          />
        </Styled.ColorsContainer>
        <Styled.DescriptionText>
          The color way you choose will be the primary color on your app
        </Styled.DescriptionText>
      </Styled.Content>

      <Button onPress={navigate}>Continue</Button>
    </Styled.Container>
  );
}
