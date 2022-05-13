import React, { useState } from "react"
import { Card, H2, Form, Input, Button } from "../components"

const FunctionForm = (props) => {
    const { abi } = props
    const [formData, setFormData] = useState({})
    const [loading, setLoading] = useState(false)

    const renderInputs = (inputs, functionName) => {
        //ethers.utils.getAddress(address) checks if address is valid
        return inputs.map((x) => {
            return (
                <Input
                    name={x.name}
                    placeholder={x.name}
                    value={formData?.[functionName]?.[x.name] ?? ""}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            [functionName]: { ...formData[functionName], [x.name]: e.target.value },
                        })
                    }
                />
            )
        })
    }

    const callContractFunction = async (e, functionJson) => {
        e.preventDefault()
        setLoading(true)
        const inputs = formData[functionJson.name]
        const thisFunctionAbi = abi.find((x) => x.name === functionJson.name)
        const sortedArguments = thisFunctionAbi.inputs.map((x) => {
            const entry = Object.entries(inputs).find((y) => x.name === y[0])
            return entry[1]
        })
        try {
            const callFunction = await props.contract[functionJson.name](...sortedArguments)
            setLoading(false)
            props.handleResult(callFunction)
        } catch (err) {
            setLoading(false)
            props.handleResult(err)
        }
    }

    const isFormComplete = (functionName, inputs) => {
        const thisFormData = formData[functionName] ?? {}
        const completedInputs = Object.entries(thisFormData).filter((x) => x[1])
        return inputs.length === completedInputs.length
    }

    return (
        <Card>
            <Form>
                <H2>{abi.name}</H2>
                {renderInputs(abi.inputs, abi.name)}
                <Button
                    loading={loading}
                    disabled={!isFormComplete(abi.name, abi.inputs)}
                    onClick={(e) => callContractFunction(e, abi)}
                >
                    Submit
                </Button>
            </Form>
        </Card>
    )
}

export default FunctionForm
