import React, { useEffect, useState } from 'react';
import fullLogo from './asset/FullLogo_Transparent.png';

const AppRedirect = () => {
    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        // Geri sayım işlevini başlat
        const timer = setInterval(() => {
            setCountdown(prev => prev - 1);
        }, 1000);

        // Geri sayım tamamlanınca yönlendir
        const redirectTimeout = setTimeout(() => {
            const androidLink = 'https://www.folyafilo.com'; // Android linki
            const iosLink = 'https://www.google.com'; // iOS linki

            if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                window.location.href = iosLink;
            } else {
                window.location.href = androidLink;
            }
        }, 3000);

        // Zamanlayıcıları temizle
        return () => {
            clearInterval(timer);
            clearTimeout(redirectTimeout);
        };
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', position: 'relative' }}>
            {/* Üstte logo */}
            <img
                src={fullLogo}
                alt="Yükleniyor..."
                style={{
                    width: '640px',
                    height: '320px',
                    marginBottom: '20px',
                }}
            />

            {/* Altta geri sayım yazısı */}
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>
                Yönlendiriliyorsunuz... {countdown}
            </h1>

            <p>Eğer otomatik yönlendirilmezseniz, cihazınıza uygun mağazayı açın.</p>
        </div>
    );
};

export default AppRedirect;
