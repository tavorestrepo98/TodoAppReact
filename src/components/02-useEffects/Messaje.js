import React, { useEffect } from 'react'

export const Messaje = () => {

    useEffect(() => {

        window.addEventListener('mousemove', (e) => {
            const coors = { x: e.x, y: e.y };
            console.log(coors);
        });
        
        return () => {
            
        }
    }, []);

    return (
        <>
            <h3>Eres Genial!</h3>
        </>
    );
}

export default Messaje;