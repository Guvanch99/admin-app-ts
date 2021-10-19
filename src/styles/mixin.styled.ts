export const grid = ({justify, align}) => `
display:grid;
justify-content:${justify || "normal"};
align-items:${align || "normal"};
`;

export const gridJusItems = ({justify, align}) => `
display:grid;
justify-items:${justify || "normal"};
align-items:${align || "normal"};
`;
