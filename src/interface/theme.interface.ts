interface IColor  {
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
}

export interface ITheme  {
    colors: IColor
    netbook: string
    tablet: string
    mobile: string
}

