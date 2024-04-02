"use client";

import React, { useEffect } from "react";

declare global {
    interface Window {
        kakao: any;
    }
}

function Map() {
    useEffect(() => {
        const mapScript = document.createElement("script");
        mapScript.async = true;
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_MAP_KEY}&autoload=false&libraries=services,clusterer,drawing`;
        document.head.appendChild(mapScript);
        const onLoadKakaoMap = () => {
            window.kakao.maps.load(() => {
                // 지도 생성
                const mapContainer = document.getElementById('map'), // 지도를 표시할 div  
                    mapOption = { 
                        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                        level: 3        // 지도의 확대 레벨
                    };

                const map = new window.kakao.maps.Map(mapContainer, mapOption)
                const markerPosition  = new window.kakao.maps.LatLng(33.450701, 126.570667);
                
                // 결과값을 마커로 표시
                const marker = new window.kakao.maps.Marker({
                    map: map,
                    position: markerPosition,
                });
                
                // 지도의 중심을 결과값으로 받은 위치로 이동
                marker.setMap(map);
            });
        };
        mapScript.addEventListener("load", onLoadKakaoMap);

        return () => mapScript.removeEventListener("load", onLoadKakaoMap);
    }, []);
    
    return (
        <div id="map" />
    );
}

export default Map;