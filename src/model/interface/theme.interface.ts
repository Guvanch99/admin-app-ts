import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme  {
        colors: {
            secondaryColor: string
            mainColor: string
            whiteColor: string
            lighterBlackColor: string
            lighterRedColor: string
            lighterGrayColor: string
            greenSuccessColor: string
            darkGreen: string
            lightGreen: string
            lighterYellowColor: string
            blueColor: string
            plantColor: string
            orangeColor: string
        },
        responsive:{
            netbook: string
            tablet: string
            mobile: string
        }
    }
}