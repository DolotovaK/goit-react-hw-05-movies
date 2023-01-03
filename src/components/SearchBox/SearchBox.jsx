import { Icon, Input, Wrapper } from "./SearchBox.styled";

export function SearchBox({ value, onChange }) {
    return (
        <Wrapper>
            <Icon />
            <Input type="text" value={value} onChange={evt => onChange(evt.target.value)} />
        </Wrapper>
    );
};