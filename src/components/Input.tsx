import styled from "styled-components"
import { inputStyles, InputProps } from "../themes/GlobalStyle"

const StyledInput = styled.input`
    ${inputStyles}
`

const Input = (props: InputProps) => {
    return <StyledInput {...props} />
}

export default Input
