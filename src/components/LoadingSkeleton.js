import React from 'react'
import Skeleton from 'react-loading-skeleton'

function LoadingSkeleton(props) {
  const {count, col} = props
  return (
    <div>
      {
      <Skeleton height={150} containerClassName='row' count={count} wrapper={({children}) => <div className={col ? `${col}` : 'col-6 col-lg-3'}>{children}</div>} />
      }
    </div>
  )
}

export default LoadingSkeleton