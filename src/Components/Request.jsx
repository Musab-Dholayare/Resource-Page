import React from 'react'
import {ExternalLink } from "lucide-react";

export default function Request() {
  return (
    <>
      <div className="Request-continer">
        <h2>Can't find what you need?</h2>
        <p>Request new resources or suggest topics for future content.</p>
        <button> Request Resource <ExternalLink size={16} /></button>
      </div>
    </>
  )
}
