// dist/index.d.ts
declare module 'ui-design-system' {
    export interface ButtonProps {
        label: string;
        onClick: () => void;
    }
    
    export declare const Button: (props: ButtonProps) => JSX.Element;
}
