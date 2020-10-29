
export interface Menu {
    text: string;
    link?: string;
    show?: boolean;
    selected?: boolean;
    children?: Menu[];
}
