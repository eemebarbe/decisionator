import styled from "styled-components"
import { inputStyles } from "../themes/GlobalStyle"

const StyledInput = styled.input`
    ${inputStyles}
`

const Input = (props) => {
    return <StyledInput {...props} />
}

export default Input
