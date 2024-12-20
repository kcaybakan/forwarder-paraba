import React, { useEffect, useState } from 'react';
import fullLogo from './asset/FullLogo_Transparent.png';

const AppRedirect = () => {
    const [isAppleDevice, setIsAppleDevice] = useState(false);

    useEffect(() => {
        // Kullanıcının cihazını kontrol et
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            setIsAppleDevice(true);
            // Eğer Apple cihaz ise hemen yönlendir
            const iosLink = 'https://apps.apple.com/tr/app/paraba/id6503212871'; // iOS linki
            window.location.href = iosLink;
        }
        else {
            setIsAppleDevice(false);
            // Eğer Apple cihaz ise hemen yönlendir
            const googlePlayLink = 'https://play.google.com/store/apps/details?id=com.folyafilo.folfafiloaractakip&gl=TR'; // iOS linki
            window.location.href = googlePlayLink;
        }
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', position: 'relative' }}>
            {/* Üstte logo */}
            <img
                src={fullLogo}
                alt="Yükleniyor..."
                style={{
                    width: '320px',
                    height: '160px',
                    marginBottom: '20px',
                }}
            />

            {/* Altta diğer cihazlar için mesaj */}

            <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>
                Yönlendiriliyorsunuz...
            </h1>

            <p>Eğer otomatik yönlendirilmezseniz, cihazınıza uygun uygulama mağazasını açın ve Paraba'yı indirin.</p>
        </div>
    );
};

export default AppRedirect;
