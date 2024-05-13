import React, { CSSProperties } from 'react'
import { ClipLoader } from 'react-spinners'

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red"
}

const Loader = () => {
    return (
        <ClipLoader
            color="white"
            loading={true}
            cssOverride={override}
            size={100}
            aria-label='Loading Spinner'
            data-testid="loader"
        />
    )
}

export default Loader