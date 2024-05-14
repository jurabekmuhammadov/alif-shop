import React, { CSSProperties } from 'react'
import { BarLoader, BounceLoader, ClipLoader, PacmanLoader, PulseLoader } from 'react-spinners'

const override: CSSProperties = {
    position: "fixed",
    top: "47%",
    left: "47%",
    borderColor: "rgb(234 179 8)",
    color: "rgb(234 179 8)",
}

const Loader = () => {
    return (
        <ClipLoader
            loading={true}
            cssOverride={override}
            size={100}
            aria-label='Loading Spinner'
            data-testid="loader"
        />
    )
}

export default Loader