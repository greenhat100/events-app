import React, { useEffect } from 'react'
import { useMap } from 'react-leaflet'

const ToMarker = ({ position, zoomLevel }: any) => {

    const map = useMap()

    useEffect(() => {
      if(position){
        const zoom = zoomLevel ?? map.getZoom()
        map.flyTo(position, zoom, {duration: 1,})
      }
    }, [map, position, zoomLevel])
    return null
}

export default ToMarker