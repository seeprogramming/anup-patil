import React from 'react'

import classes from './SectionLayout.css'

const SectionLayout = (props) => {
    return (
      <React.Fragment>
          <div className="SectionLayout">
              <div className="container">
                  {props.children}
              </div>
          </div>
      </React.Fragment>
    )
}

export default SectionLayout
