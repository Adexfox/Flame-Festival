import React, { useState, useEffect }  from 'react'

type Props = {}

const useSpinner = (props: Props) => {
    const [ loading, setLoading ] = useState(true)

        useEffect(() => {
            setTimeout(() => {
            setLoading(false)
            }, 5000)
  }, [])
  return { loading, setLoading }
}

export default useSpinner