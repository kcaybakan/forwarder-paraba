import React, { useEffect, useState } from 'react';
import fullLogo from './asset/FullLogo_Transparent.png';

const AppRedirect = () => {
    const [countdown, setCountdown] = useState(3);
    const [isAppleDevice, setIsAppleDevice] = useState(false); // Apple cihaz olup olmadığını kontrol için state

    useEffect(() => {
        // Kullanıcının cihazını kontrol et
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            setIsAppleDevice(true);
        }

        // Eğer Apple cihaz ise geri sayım başlat ve yönlendir
        if (isAppleDevice) {
            const timer = setInterval(() => {
                setCountdown(prev => prev - 1);
            }, 1000);

            const redirectTimeout = setTimeout(() => {
                const iosLink = 'https://apps.apple.com/tr/app/paraba/id6503212871'; // iOS linki
                window.location.href = iosLink;
            }, 3000);

            // Zamanlayıcıları temizle
            return () => {
                clearInterval(timer);
                clearTimeout(redirectTimeout);
            };
        }
    }, [isAppleDevice]);

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

            {/* Altta geri sayım veya diğer cihazlar için mesaj */}
            {isAppleDevice ? (
                <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>
                    Yönlendiriliyorsunuz... {countdown}
                </h1>
            ) : (
                <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>
                    Google Play 10 gün içerisinde aktif olacaktır.
                </h1>
            )}

            <p>Eğer otomatik yönlendirilmezseniz, cihazınıza uygun mağazayı açın.</p>
        </div>
    );
};

export default AppRedirect;
