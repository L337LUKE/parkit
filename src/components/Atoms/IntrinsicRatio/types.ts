export interface IRatio {
    ratioWidth: number;
    ratioHeight: number;
}

export type IIntrinsicRatio = IRatio & {
    children: JSX.Element;
};
