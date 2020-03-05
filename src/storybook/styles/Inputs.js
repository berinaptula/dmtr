import styled from 'styled-components'

export const FormWrapper = styled.div`
    padding: 1rem 2rem;
    display:flex;
    flex-direction:column;
`
export const Input = styled.input`
    padding:0.5rem 1rem;
    &:not(:last-child){
        margin-bottom:1rem;
    }
 `
export const Label = styled.label`
    margin-bottom:0.5rem;
`
export const Checkbox = styled.input`
    margin-right:0.5rem;
`
export const CheckboxLabel = styled.label`
    cursor:pointer;
    display:flex;
    align-items:content;
`