export interface IStyleProps {
    url: string;
    size?: React.CSSProperties['backgroundSize'];
    position?: React.CSSProperties['backgroundPosition'];
    repeat?: React.CSSProperties['backgroundRepeat'];
}

export type IBackgroundImage = IStyleProps & {
    ariaLabel: string;
    className?: string;
};
