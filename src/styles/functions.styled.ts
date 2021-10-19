export const handleColorType = color => {
    switch (color) {
        case "greenSuccessColor":
            return "#28a745";
        case "lighterRedColor":
            return "#cf1717";
        case 'orangeColor':
            return '#ffa500';
        default:
            return "transparent";
    }
};

export const handleStatus=status=>{
    if(status==='error'){

    }
}

export const handlePosition = position => {
    if (position === "top") {
        return `
          bottom: 130%;
          transform: translateX(-50%);
          left: 50%;
        `
    } else if (position === "left") {
        return `
          right: 130%;
          transform: translateY(-50%);
          top: 50%;`
    } else if (position === 'bottom') {
        return `
          top: 130%;
          transform: translateX(-50%);
          left: 50%;
        `
    } else if (position === 'right') {
        return `
          left: 130%;
          transform: translateY(-50%);
          top: 50%;
      `
    }
}
