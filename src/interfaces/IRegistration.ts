export interface IRegistration {
    isOpen: boolean,
    onClickToggle: (e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void;
}
export interface ILogin extends IRegistration { };