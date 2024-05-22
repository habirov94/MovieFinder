export interface ISlider {
    value: number[];
    onChange: (v: number[]) => number[];
    sliderLabel: string;
    step: number;
    minValue: number;
    maxValue: number;
    disabled: boolean;
}