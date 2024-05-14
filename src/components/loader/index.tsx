import React, { CSSProperties } from 'react'
import { BarLoader, BounceLoader, ClipLoader, PacmanLoader, PulseLoader } from 'react-spinners'

const override: CSSProperties = {
    position: "fixed",
    borderColor: "rgb(234 179 8)",
    color: "rgb(234 179 8)",
    left: "47%",
    top: "45%",
}

const Loader = () => {
    return (
        <div className='fixed h-screen w-screen z-50 bg-white'>
            <ClipLoader
                loading={true}
                cssOverride={override}
                size={100}
                aria-label='Loading Spinner'
                data-testid="loader"
            />
        </div>
    )
}

export default Loader