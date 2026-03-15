import React from "react"

interface TShirtProps {
  color?: string
}

export default function TShirt({ color }: TShirtProps) {
  return (
    <div className="sketchfab-embed-wrapper w-full h-full"> 
      <iframe 
        title="tshirt - tedxccet" 
        allowFullScreen 
        allow="autoplay; fullscreen; xr-spatial-tracking" 
        xr-spatial-tracking="true" 
        execution-while-out-of-viewport="false" 
        execution-while-not-rendered="false" 
        web-share="false" 
        src="https://sketchfab.com/models/2aede52342e24375a3f69c81888a528f/embed?autostart=1&ui_controls=0&ui_infos=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_theme=dark&dnt=1"
        className="w-full h-full min-h-[400px]"
      > </iframe> 
      <p style={{ fontSize: "13px", fontWeight: "normal", margin: "5px", color: "#4A4A4A" }}> 
        <a href="https://sketchfab.com/3d-models/tshirt-tedxccet-2aede52342e24375a3f69c81888a528f?utm_medium=embed&utm_campaign=share-popup&utm_content=2aede52342e24375a3f69c81888a528f" target="_blank" rel="nofollow" style={{ fontWeight: "bold", color: "#1CAAD9" }}> tshirt - tedxccet </a> by <a href="https://sketchfab.com/alfredd123?utm_medium=embed&utm_campaign=share-popup&utm_content=2aede52342e24375a3f69c81888a528f" target="_blank" rel="nofollow" style={{ fontWeight: "bold", color: "#1CAAD9" }}> AJD123 </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=2aede52342e24375a3f69c81888a528f" target="_blank" rel="nofollow" style={{ fontWeight: "bold", color: "#1CAAD9" }}>Sketchfab</a>
      </p>
    </div>
  )
}
