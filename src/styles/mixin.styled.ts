interface IProps {
  justify: string
  align: string
}

export const grid = ({justify, align}: IProps) => `
 display:grid;
 justify-content:${justify || "normal"};
align-items:${align || "normal"};
 `;

export const gridJusItems = ({justify, align}: IProps) => `
display:grid;
justify-items:${justify || "normal"};
align-items:${align || "normal"};
`;

export const flex = ({justify, align}: IProps) => `
display:flex;
justify-content:${justify || "normal"};
align-items:${align || "normal"};
`;
