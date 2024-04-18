import React from 'react'
import SideBar from './SideBar'
import { BLUE } from 'config'

const DefaultHeader = () => {

  return (
    <div
      style={{
        backgroundColor: BLUE,
      }}
    >
      <header 
        style={{
          display: "flex",
          position: "relative",
          justifyContent: "space-between",
          height: 36,
          minHeight: 36,
          width: 36,
          minWidth: 36,
        }}
        >
          {/* @ts-ignore */}
        <SideBar />

      </header>
    </div>
  )
}

export default DefaultHeader