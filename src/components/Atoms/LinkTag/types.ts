export interface ILinkOwnProps {
    buttonStyle?: boolean;
    children: (JSX.Element | string)[] | JSX.Element | string;
    className?: string;
    href?: string;
    openBlank?: boolean;
    title?: string;
}
